let canvas,stage,rect,text;
let num = 1;

canvas = document.getElementById("cnavas");
stage = new createjs.Stage(canvas);

text = new createjs.Text("123456+++","36px Arial","#fff");
text.x = 100;
text.y = 100;
text.rotation = 20;
stage.addChild(text);

rect = new createjs.Shape();
rect.graphics.clear().beginFill("red").drawRect(-10,-10,text.getMeasuredWidth()+20,50);
rect.x = text.x;
rect.y = text.y;
rect.rotation = text.rotation;
stage.addChildAt(rect,0);

createjs.Ticker.setFPS(100);
canvas.Ticker.addEventListener("tick",handlertick);

function handlertick(e){
	num++;
	text.text = "123456+++"+num+"!";
	stage.update(e);
}
