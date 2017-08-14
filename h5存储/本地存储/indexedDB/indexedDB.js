//声明一些变量
var db,openRequest,lastCursor,arrayKey = [];
//声明数据库名称，表的名称
var dbName = 'person',tableName = 'testTable';
//浏览器兼容  indexedDB数据库
var indexedDB = window.indexedDB||window.webkitIndexedDB||window.mozIndexedDB||window.msIndexedDB;

function init(){
    //有数据库直接打开
    openRequest = indexedDB.open(dbName);
    //handle setup
    //新数据库被创建，数据库版本号修改时被触发
    openRequest.onupgradeneeded = function(e){
        console.log("running onupgradeneeded");
        var thisDB = e.target.result;
        console.log(thisDB.version);
        //检查数据库中是否包含名称为  tableName 的表
        if(!thisDB.objectStoreNames.contains(tableName)){
            console.log("I need to create the objectStore");
            //数据库thisDB创建一个表，设置主键keyPath
            var objectStore = thisDB.createObjectStore(tableName,{keyPath:"id",autoIncrement:true});
            //设置  表的 索引 字段，unique:false字段是唯一的
            objectStore.createIndex("name","name",{unique:false});
            objectStore.createIndex("phone","phone",{unique:false});
        }
    }
    openRequest.onsuccess = function(e){
        db = e.target.result;
        console.log(db.version);
        db.onerror = function(event){
            alert("Database error: " + event.target.errorCode);
            //输出对象的所有方法和属性
            console.dir(event.target);
        };
        if(db.objectStoreNames.contains(tableName)){
            console.log("contains table"+tableName);

            //使用  事务transaction 来保证表中数据的一致性，可靠性 readwrite表明事务  可读可写
            var transaction = db.transaction([tableName],"readwrite");
            // 事务完成 输出
            transaction.oncomplete = function(event){
                console.log("all done!");
            };
            //  事务  出错，输出
            transaction.onerror = function(event){
                console.dir(event);
            }


            //通过transaction事务  得到表中的objectStore 对象
            var objectStore = transaction.objectStore(tableName);
            //使用 游标 openCursor()遍历表中的数据
            objectStore.openCursor().onsuccess = function(event){
                var cursor = event.target.result;
                if(cursor){
                    console.log(cursor.key);
                    console.dir(cursor.value);
                    render({key:cursor.key,name:cursor.value["name"],phone:cursor.value["phone"],address:cursor.value["address"]});
                    lastCursor = cursor.key;
                    //执行（遍历）下一条，默认遍历方式 下一条下一条
                    cursor.continue()；
                }else{
                    console.log("done with cursor");
                };
                objectStore.openCursor().onerror = function(event){
                    console.dir(event);
                };
            }
        }
    }
    //添加记录
    document.querySelector("#add").addEventListener("click",function(){
        //得到input 中的数据
        var name = document.querySelector("#name").value;
        var phone = document.querySelector("#phone").value;
        var address = document.querySelector("#address").value;
        var person = {"name":name,"phone":phone,"address":address};

        var transaction = db.transaction([tableName],"readwrite");
        transaction.oncomplete = function(event){
            console.log("transaction complete");
        };
        transaction.onerror = function(event){
            console.dir(event);
        };
        //得到objectStore对象
        var objectStore = transaction.objectStore(tableName);
        //将preson添加到数据库中
        objectStore.add(preson);
        //添加成功,显示到 浏览器页面上,用 游标的 方式
        objectStore.openCursor().onsuccess = function(event){
            cursor = event.target.result;
            var key;
            if(lastCursor==null){
                key = cursor.key;
                lastCursor = key;
            }else{
                key =++lastCursor;
            }
            render({key:key,name:name,phone:phone,address:address});
            console.log("success add new record!key:"+key);
            console.dir(preson);
        }
    });
    //删除数据库的一条数据，（指定ID）
    function deleteRecord(id){
        //通过 事务transaction 获取数据库表
        var transaction = db.transaction([tableName],"readwrite");
        transaction.oncomplete = function(event){
            console.log("transaction complete");
        };
        transaction.onerror = function(event){
            console.dir(event);
        };
        //得到objectStore对象
        var objectStore = transaction.objectStore(tableName);
        var removekey = parseInt(id);
        //将 删除的 数据 输出
        var getRequest = objectStore.get(removekey);
        getRequest.onsuccess = function(e){
            var result = getRequest.result;
            console.dir(result);
        }
        //从 数据库中 删除索引值为removekey 的数据
        var request = objectStore.delete(removekey);
        request.onsuccess = function(e){
            console.log("success delete record!");
        };
        request.onerror = function(e){
            console.log("error delete record:",e);
        };
        //隐藏要删除的元素
        document.getElementById(removekey).style.display = "none";
    };
    //查询一条数据
    document.querySelector("#seletBtn").addEventListener("click",function(){
        var curName = document.getElementById("selname").value;
        //通过 事务transaction 获取数据库表
        var transaction = db.transaction([tableName],"readwrite");
        transaction.oncomplete = function(event){
            console.log("transaction complete");
        };
        transaction.onerror = function(event){
            console.dir(event);
        };
        var objectStore = transaction.objectStore(tableName);
        //生成一个表示范围的Range对象，indexedDB调用 IDBKeyRange函数的.only方法进行查询
        //相当于数据库的select语句
        var boundKeyRange = IDBKeyRange.only(curName);
        objectStore.index("name").openCursor(boundKeyRange).onsuccess = function(event){
            var cursor = event.target.result;
            if(!cursor){
                return;
            }

            var rowData = cursor.value;

            console.log(rowData);
            document.getElementById("content").innerHTML = "";
            render({key:cursor.value.id,name:cursor.value["name"],phone:cursor.value["phone"],address:cursor.value["address"]});
            cursor.continue();
        }
    })
    //删除数据库
    document.querySelector("#deleteDB").addEventListener("click",ffunction(){
        var deleteDB = indexedDB.deleteDatabase(dbName);
        var content = document.querySelector("#content");
        while(content.firstChild){
            content.removeChild(content.firstChild);
        }
        deleteDB.onsuccess = function(event){
            console.log("success delete dataBase!");
        };
    })
}
window.addEventListener("DOMContentLoaded",init,false);
