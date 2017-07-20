var stage = new createjs.Stage("canvas");

createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",stage);

var canvas = new createjs.Container();
stage.addChild(canvas);
//开始状态 ，最少有横竖2个
let n=2;
//创建 addRect() 方法添加方块
function addRect(){
    //其它方块颜色进行随机
    var cl = parseInt(Math.random()*1000000);
    var color = "#" + cl;
    var clickColor = "#" + (cl - 2510);
    //要点击的方块的位置 随机
    var x = parseInt(Math.random()*n);
    var y = parseInt(Math.random()*n);
    //通过 for 循环添加,x 轴方向添加 indexX：x轴方向的方块的个数
    for(var indexX = 0;indexX<n;indexX++){
        //y 轴方向添加  indexY：y轴方向的方块的个数
        for(var indexY = 0;indexY<n;indexY++){
            //创建一个方块对象，传递对应参数
            var r = new Rect(n,color,clickColor);
            //将生成的每一个对象 添加到 容器canvas中
            canvas.addChild(r);
            //设置每个r的坐标，以便获取其位置（以0~n整数为坐标）
            r.x = indexX;
            r.y = indexY;
            //通过方块的坐标，判断是否是点击的方块
            if(r.x == x && r.y == y){
                //是，调用Rect.js 中的setRectType()方法设置要点击的方块的颜色类型 type=2
                r.setRectType(2);
            }
            //将 画布 分成 n 个部分,每个对象的具体 px坐标（所占像素的大小）
            r.x = indexX*(400/n);
            r.y = indexY*(400/n);
            //判断是否为要点击的方块
            if(r.getRectType() == 2){
                //对它添加一个点击事件
                r.addEventListener("click",function(){
                    //设置小方块显示最多个数,这是最多64个
                    if(n<7){
                        ++n;
                    }
                    //每次点击后，重新绘制
                    canvas.removeAllChildren();
                    addRect();
                })
            }

        }
    }
}
//执行 addRect()函数
addRect();
