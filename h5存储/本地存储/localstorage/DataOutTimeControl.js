function set(key,v){
    var curTime = new Date().getTime();
    //                       存储为 json 数据格式
    localStorage.setItem(key,JSON.stringify({data:v,time:curTime}));
}
//  outTime：过期时间
function get(key,outTime){
    var data = localStorage.getItem(key);
    var dataObj = JSON.parse(data);
    //判断处理
    console.log(dataObj.time,new Date().getTime())

    if(new Date().getTime() - dataObj.time > outTime){
        console.log("expires");
    }else{
        console.log("data = "+dataObj.data);
    }
}
