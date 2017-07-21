let stage = new createjs.Stage("canvas");
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",stage);

let gameView = new createjs.Container();
gameView.x = 30;
gameView.y = 30;
stage.addChild(gameView);
//声明一个数组，承载它的每一个点
//let circleArr = [[],[],[],[],[],[],[],[],[]];
function addCircles(){
    let indexX,indexY;
    for(indexX = 0;indexX<9;indexX++){
        for(indexY =0;indexY<9;indexY++){
            let c = new Circle();
            gameView.addChild(c);

            //将绘制的对象放在 circleArr数组中
            //circleArr[indexX][indexY] = c;

            //每个对象所占大小，圆的直径为50，设置55使每个之间有间隔,
            //判断每行奇偶,奇在前偶在后
            c.x = indexY%2?indexX*55+25:indexX*55;
            c.y = indexY*55;
            //初始 规定猫在 中心
            if(indexX == 4 && indexY == 4){
                c.setCircleType(1)
            }
        }
    }
}
addCircles()
