//单独创建生成 正方形的 js 文件

//Rect(显示的个数,默认颜色，点击颜色)
function Rect(n,color,clickColor){
    //引用 createjs.Shape() 的方法, this 指 Rect 这个对象
    createjs.Shape.call(this);
    //console.log(this);
    //创建 setRectType 方法, type 决定当前显示那个颜色，因为默认有两种颜色（color,RectColor）
    this.setRectType = function(type){
        //给确定的颜色确定一个类型，可通过类型来决定当前显示什么颜色的小方块
        this.rectType = type;
        //给当前小方块设置监听事件，判断类型设置颜色
        switch (type){
            case 1: //当 type = 1 时，调用setColor（）方法设置其它方块的颜色
                this.setColor(color);break;
            case 2:  //当 type = 1 时，调用setColor（）方法设置要点击的方块的颜色
                this.setColor(clickColor);break;
        }
    }
    //创建 setColor 方法,传递一个颜色参数（类型为 string）
    this.setColor = function(colorString){
        //绘制正方形，填充颜色
        this.graphics.beginFill(colorString);
        //0,0：原点； 400/n-5：宽和高，n:横竖显示方块个数  -5：方块的间距
        this.graphics.drawRect(0,0,400/n-5,400/n-5);
        //结束绘制
        this.graphics.endFill();
    }
    //创建getRectType 函数，得到方块颜色的类型
    this.getRectType = function(){
        return this.rectType;
    }
    //默认 type = 1；
    this.setRectType(1);
}
//实例化（初始化，暴露接口）
Rect.prototype = new createjs.Shape();
