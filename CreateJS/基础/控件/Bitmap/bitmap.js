
var view = new createjs.Container();
var stage = new createjs.Stage("view");
stage.addChild(view)

var bitmap = new createjs.Bitmap("11.png");
view.addChild(bitmap);

createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",function(){
	stage.update();
});
