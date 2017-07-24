function Circle(){
    //Shape  首字母大小写问题
    createjs.Shape.call(this);
    this.setCircleType = function(type){
        this.circleType = type;
        switch(type){
            case Circle.TYPE_CAT://猫
                this.setColor("red");break;
            case Circle.TYPE_SELECTED://点击后颜色
                this.setColor("blue");break;
            case Circle.TYPE_UNSELECTED://默认颜色
                this.setColor("#666666");break;
        }
    }
    this.setColor = function(colorString){
        this.graphics.beginFill(colorString);
        this.graphics.drawCircle(0,0,25);
        this.graphics.endFill();
    }
    this.getCircleType = function(){
        return this.circleType;
    }
    //别忘记设置默认 初始状态
    this.setCircleType(Circle.TYPE_UNSELECTED);
}
Circle.prototype = new createjs.Shape();
//设置为公共属性
Circle.TYPE_CAT = 1;
Circle.TYPE_UNSELECTED = 3;
Circle.TYPE_SELECTED = 2;
