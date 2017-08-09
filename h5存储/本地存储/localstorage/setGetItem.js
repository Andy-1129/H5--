function set(imgSrc,key){
    var img = document.createElement('img');
    img.addEventListener("load",function(){
        var c = document.createElement("canvas");
        c.style.backgroundColor = "#ccc";
        var ctx = c.getContext("2d");
        //设置  canvas 的 宽高
        c.width = this.width;
        c.height = this.height;
        console.log(c.width,c.height);
        //渲染图片 到canvas 中
        ctx.drawImage(this,0,0,this.width,this.height);
        //toDataURL 火狐支持，谷歌其它,报错 BUG：无法在“HTMLCanvasElement”上执行“toDataURL”
        var dataURL = c.toDataURL("image/png");
        console.log(dataURL);
        //将 dataURL 存到   localStorage catch(e)测试是否支持
        try{
            localStorage.setItem(key,dataURL);
        }
        catch(e){
            console.log("Storage failde: " + e);
        }
    },false);
    //保存到 本地存储中
    img.src = imgSrc;
}
function get(key){
    var srcStr = localStorage.getItem(key);
    var imgObj = document.createElement('img');
    imgObj.src = srcStr;
    document.body.appendChild(imgObj);
}
