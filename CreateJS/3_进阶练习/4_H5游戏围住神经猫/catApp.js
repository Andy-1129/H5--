let stage = new createjs.Stage("canvas");
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",stage);

let gameView = new createjs.Container();
gameView.x = 30;
gameView.y = 30;
stage.addChild(gameView);

// 方法一
//声明一个数组，承载它的每一个点
var circleArr = [[],[],[],[],[],[],[],[],[]];
var cat1;
//单独写一个事件，比较清楚   有BUG有时会左右来回切换
function circleClick(e){
    //判断当前位置是否为猫，不是 再执行下一动作
    if(e.target.getCircleType() != 1){
        e.target.setCircleType(2);
    }
    //方法一 通过坐标，改变它在数组中的坐标，决定猫移动方向
    //判断 出界，执行操作
    if(cat1.indexX ==0 || cat1.indexX == 8 || cat1.indexY == 0 || cat1.indexY == 8){
        alert("游戏结束！")
    }
    //确定向左方向移动后的坐标
    var toleft = circleArr[cat1.indexX - 1][cat1.indexY];
    var toright = circleArr[cat1.indexX + 1][cat1.indexY];
    var toTopleft = circleArr[cat1.indexX - 1][cat1.indexY - 1];
    var toTopright = circleArr[cat1.indexX][cat1.indexY - 1];
    var toBottomleft = circleArr[cat1.indexX - 1][cat1.indexY + 1];
    var toBottomright = circleArr[cat1.indexX][cat1.indexY + 1];
    //判断左方向的颜色类型
    if(toleft.getCircleType() == 3){
        //移动后 猫的新位置变为猫的颜色
        toleft.setCircleType(1);
        //原来猫位置颜色 变为默认颜色
        cat1.setCircleType(3);
        //将移动后的位置与猫之前的位置替换
        cat1 = toleft;
    }else if(toright.getCircleType() == 3){
        toright.setCircleType(1);
        cat1.setCircleType(3);
        cat1 = toright;
    }else if(toTopleft.getCircleType() == 3){
        toTopleft.setCircleType(1);
        cat1.setCircleType(3);
        cat1 = toTopleft;
    }else if(toTopright.getCircleType() == 3){
        toTopright.setCircleType(1);
        cat1.setCircleType(3);
        cat1 = toTopright;
    }else if(toBottomleft.getCircleType() == 3){
        toBottomleft.setCircleType(1);
        cat1.setCircleType(3);
        cat1 = toBottomleft;
    }else if(toBottomright.getCircleType() == 3){
        toBottomright.setCircleType(1);
        cat1.setCircleType(3);
        cat1 = toBottomright;
    }else{
        alert("游戏结束！")
    }

}


function addCircles(){
    for(var indexY =0;indexY<9;indexY++){
        for( var indexX = 0;indexX<9;indexX++){
            var c = new Circle();
            gameView.addChild(c);

            //将绘制的对象放在 circleArr数组中
            circleArr[indexX][indexY] = c;
            //赋值坐标方便在circleClick(e)方法中通过坐标调用
            c.indexX = indexX;
            c.indexY = indexY;
            //每个对象所占大小，圆的直径为50，设置55使每个之间有间隔,
            //判断每行奇偶,奇在前偶在后
            c.x = indexY%2?indexX*55+25:indexX*55;
            c.y = indexY*55;
            //初始 规定猫在 中心
            if(indexX == 4 && indexY == 4){
                c.setCircleType(1);
                cat1 = c;//将对象赋值给 变量cat，方便circleClick函数调用
            }
            c.addEventListener("click",circleClick);
        }
    }
}
addCircles()
