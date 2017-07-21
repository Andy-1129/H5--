var stage = new createjs.Stage("canvas");

createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",stage);

var container = new createjs.Container();
stage.addChild(container);

var n = 2;
function addRect(){
    var cl = parseInt(Math.random()*1000000);
    var color = "#" + cl;
    var clickColor = "#" + (cl - 5000);
    var x = parseInt(Math.random()*n);
    var y = parseInt(Math.random()*n);
    for(var indexX = 0;indexX<n;indexX++){
        for(var indexY =0;indexY<n;indexY++){
            var c = new Rect(n,color,clickColor);
            container.addChild(c);
            c.x = indexX;
            c.y = indexY;
            if(c.x == x && c.y == y){
                c.setRectType(2);
            }
            //显示其他方块
            c.x = indexX*(400/n);
            c.y = indexY*(400/n);
            
            if(c.getRectType() == 2){ //getRectType()是一个方法调用 加（）
                c.addEventListener("click",function(){
                    console.log(12224);
                    if(n<7){
                        ++n;
                    }
                    container.removeAllChildren();
                    addRect();
                })
            }
        }
    }
}
addRect();
