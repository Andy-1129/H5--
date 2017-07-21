function Circle(){
    //Shape  首字母大小写问题
    createjs.Shape.call(this);
    this.setCircleType = function(type){
        this.circleType = type;
        switch(type){
            case 1://猫
                this.setColor("red");break;
            case 2://点击后颜色
                this.setColor("blue");break;
            case 3://默认颜色
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
    this.setCircleType(3);
}
Circle.prototype = new createjs.Shape();
