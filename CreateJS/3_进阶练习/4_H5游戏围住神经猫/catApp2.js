let stage = new createjs.Stage("canvas");
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",stage);

let gameView = new createjs.Container();
gameView.x = 30;
gameView.y = 30;
stage.addChild(gameView);

// 方法二
//声明一个数组，承载它的每一个点
let circleArr = [[],[],[],[],[],[],[],[],[]];
let moveCat;
//定义 猫动的 7个状态,方便使用switch语句判断
let MOVE_NONE = -1,MOVE_LEFT = 0,MOVE_UPLeft = 1,MOVE_UPRight = 2,MOVE_RIGHT = 3,MOVE_DOWNRight = 4,MOVE_DOWNLeft = 5;
//方法getMoveDir(cat)获得猫运动方向的状态码
function getMoveDir(cat){
    //声明数组变量，存储猫向那个方向运动和能走几步
    let distanceMap = [];
    //left
    let can = true;
    //遍历 从猫的位置到左边界的所有小球
    for(let x = cat.indexX;x>=0;x--){
        //通过圆的类型，判断左边是否有选中的小球
        if(circleArr[x][cat.indexY].getCircleType() == Circle.TYPE_SELECTED){
            can = false;//不让其移动
            distanceMap[MOVE_LEFT] = cat.indexX - x;
            break;
        }
    }
    if(can){
        return MOVE_LEFT;
    }
    //left up
    can = true; //防止通过上边的for()循环中 can赋值 false 接下来不能用
    //声明坐标
    let  x = cat.indexX,y = cat.indexY;
    while(true){
        if(circleArr[x][y].getCircleType() == Circle.TYPE_SELECTED){
            can = false;
            distanceMap[MOVE_UPLeft] = cat.indexY - y;
            break;
        }
        //通过行号奇偶判断 猫的x 坐标是否 -1
        if(y%2 == 0){
            x--;
        }
        y--;// y 坐标每次都 -1
        //判断是否出界，向 左上移动
        if(x<0||y<0){
            break;
        }
    }
    if(can){
        return MOVE_UPLeft;
    }
    //up right
    can = true;
    x = cat.indexX,y = cat.indexY;
    while(true){
        if(circleArr[x][y].getCircleType() == Circle.TYPE_SELECTED){
            can = false;
            distanceMap[MOVE_UPRight] = cat.indexY - y;
            break;
        }
        if(cat.y%2 == 1){
            x++;
        }
        y--;
        if(x>8||y<0){
            break;
        }
    }
    if(can){
        return MOVE_UPRight;
    }
    //right
    can = true;
    for(let x = cat.indexX;x<9;x++){
        if(circleArr[x][cat.indexY].getCircleType() == Circle.TYPE_SELECTED){
            can = false;
            distanceMap[MOVE_RIGHT] = x - cat.indexX;
            break;
        }
    }
    if(can){
        return MOVE_RIGHT;
    }
    //down left
    can = true;
    x = cat.indexX,y = cat.indexY;
    while(true){
        if(circleArr[x][y].getCircleType() == Circle.TYPE_SELECTED){
            can = false;
            distanceMap[MOVE_DOWNLeft] = y - cat.indexY;
            break;
        }
        if(y%2 == 0){
            x--;
        }
        y++;
        if(x<0||y>8){
            break;
        }
    }
    if(can){
        return MOVE_DOWNLeft;
    }
    //down right
    can = true;
    x = cat.indexX,y=cat.indexY;
    while(true){
        if(circleArr[x][y].getCircleType() == Circle.TYPE_SELECTED){
            can = false;
            distanceMap[MOVE_DOWNRight] = y - cat.indexY;
            break;
        }
        if(y%2 == 1){
            x++;
        }
        y++;
        if(x>8||y>8){
            break;
        }
    }
    if(can){
        return MOVE_DOWNRight;
    }
    //声明2个变量
    let maxDir = -1,maxValue = -1;
    //遍历数组distanceMap，猫向6个方向和选中的小球之间的距离的值得个数
    for(let dir = 0;dir<distanceMap.length;dir++){
        //与 -1 比较，看是否有方向可走
        if(distanceMap[dir]>maxValue){
            //将猫和已选中的小球之间的距离 赋值给 maxValue
            maxValue = distanceMap[dir];
            //能走的方向的代码赋值给 maxDir
            maxDir = dir;
        }
    }
    //六个方向都有选中小球后，猫在它们之间空余位置移动
    if(maxValue>1){
        return maxDir;//返回方向的代码
    }else{
        return MOVE_NONE;
    }
}
//单独写一个点击事件，比较清楚
function circleClick(e){
    //判断当前位置是否为猫，不是 再执行下一动作
    if(e.target.getCircleType() != Circle.TYPE_CAT){
        e.target.setCircleType(Circle.TYPE_SELECTED);
    }else{
        return;
    }
    //判断 出界，执行操作
    if(moveCat.indexX ==0 || moveCat.indexX == 8 || moveCat.indexY == 0 || moveCat.indexY == 8){
        alert("游戏结束！");
        return;
    }
    //声明变量dir存储猫的运动方向的状态
    let dir = getMoveDir(moveCat);
    // 通过比较状态码，执行具体操作
    switch(dir){
        case MOVE_LEFT:
            moveCat.setCircleType(Circle.TYPE_UNSELECTED);
            moveCat = circleArr[moveCat.indexX - 1][moveCat.indexY];
            moveCat.setCircleType(Circle.TYPE_CAT);
            break;
        case MOVE_UPLeft:
            moveCat.setCircleType(Circle.TYPE_UNSELECTED);
            moveCat = circleArr[moveCat.indexY%2?moveCat.indexX:moveCat.indexX - 1][moveCat.indexY-1];
            moveCat.setCircleType(Circle.TYPE_CAT);
            break;
        case MOVE_UPRight:
            moveCat.setCircleType(Circle.TYPE_UNSELECTED);
            moveCat = circleArr[moveCat.indexY%2?moveCat.indexX + 1:moveCat.indexX][moveCat.indexY-1];
            moveCat.setCircleType(Circle.TYPE_CAT);
            break;
        case MOVE_RIGHT:
            moveCat.setCircleType(Circle.TYPE_UNSELECTED);
            moveCat = circleArr[moveCat.indexX+1][moveCat.indexY];
            moveCat.setCircleType(Circle.TYPE_CAT);
            break;
        case MOVE_DOWNLeft:
            moveCat.setCircleType(Circle.TYPE_UNSELECTED);
            moveCat = circleArr[moveCat.indexY%2?moveCat.indexX:moveCat.indexX-1][moveCat.indexY+1];
            moveCat.setCircleType(Circle.TYPE_CAT);
            break;
        case MOVE_DOWNRight:
            moveCat.setCircleType(Circle.TYPE_UNSELECTED);
            moveCat = circleArr[moveCat.indexY%2?moveCat.indexX+1:moveCat.indexX][moveCat.indexY+1];
            moveCat.setCircleType(Circle.TYPE_CAT);
            break;
        default ://六个方向都有选中的小球，执行操作
            alert("游戏结束")
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
                c.setCircleType(Circle.TYPE_CAT);
                //将对象赋值给 变量moveCat，方便circleClick函数调用
                moveCat = c;
            }else if(Math.random()<0.1){//初始默认几个选中状态
                c.setCircleType(Circle.TYPE_SELECTED);
            }
            c.addEventListener("click",circleClick);
        }
    }
}
addCircles()
