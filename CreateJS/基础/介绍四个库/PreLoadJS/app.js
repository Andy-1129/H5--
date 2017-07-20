var preload;
// preload 库中的 LoadQueue(flase,"img/") 方法
preload = new createjs.LoadQueue(false,"img/");

var plugin={
    getPreloadHandlers:function(){
        return{
            types:["image"],//通过 HTML 页面 class名 获取到资源
            callback:function(src){
                console.log(src);
                //var id = src.src.toLowerCase().split("/").pop().split(".")[0];
                var id = src.id.split(".")[0];
                console.log(id);
                var img = document.getElementById(id);
                console.log(img);
                return {tag:img};
            }
        }
    }
}

preload.installPlugin(plugin);
preload.loadManifest([
    "aa.jpg",
    "bb.jpg",
    "cc.jpg"
])
