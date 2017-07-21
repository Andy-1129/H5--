function Rect(n,color,clickColor){
    createjs.Shape.call(this);
    this.setRectType = function(type){
        this.rectType = type;
        switch(type){
            case 1:
                this.setColor(color);break;
            case 2:
                this.setColor(clickColor);break;
        }
    }
    this.setColor = function(colorString){
        this.graphics.beginFill(colorString);
        this.graphics.drawRect(0,0,400/n-5,400/n-5);
        this.graphics.endFill();
    }
    this.getRectType = function(){
        return this.rectType;
    }
    this.setRectType(1);
}
Rect.prototype = new createjs.Shape();
