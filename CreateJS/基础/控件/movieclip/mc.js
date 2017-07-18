var stage = new createjs.Stage("canvas");

createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",stage);
//MovieClip(是否渲染,起始位置,是否可循环,时间线);
var mc = new createjs.MovieClip(null,0,true,{start:50,stop:0});
stage.addChild(mc);

var state1 = new createjs.Shape(new createjs.Graphics().beginFill("red").drawCircle(0,100,30));
var state2 = new createjs.Shape(new createjs.Graphics().beginFill("blue").drawCircle(0,100,30));
//                                  //获取对象   开始坐标  （下一坐标，所用时间）
mc.timeline.addTween(createjs.Tween.get(state1).to({x:0}).to({x:300},100).to({x:0},100));
mc.timeline.addTween(createjs.Tween.get(state2).to({x:300}).to({x:0},100).to({x:300},100));

mc.gotoAndPlay("stop");
