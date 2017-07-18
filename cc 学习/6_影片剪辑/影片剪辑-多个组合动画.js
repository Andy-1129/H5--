(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.quan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000099").ss(3,1,1).p("AArnEQCsAJB9B9QCHCHAAC9QAAC/iHCGQiHCHi+AAQi+AAiHiHQiGiGAAi/QAAgJAAgKQAHiyB/h/QBuhuCTgUAgrnRQABACACADQANAjgBAuQgBAcgJA9QgUCKAACnQgBAcABAcQACB+AQDuAnagSQAPADAPACQDBAZDBADQD6AED7gk");
	this.shape.setTransform(47.5,47.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AlEFOQiHiHAAi+IABgUQDAAaDBADIAFAAIAnAAIAAAAIAAAAQDkAADmggQjmAgjkAAIAAAAIAAAAIgnAAIgFAAQAAioAUiKQAKg9AAgcIAAgFQAAgrgMggQAMAgAAArIAAAFQAAAcgKA9QgUCKAACoQjBgDjAgaQAGixCAiAQBthtCTgUQAGgHAHgFQAOgKATgBQAfgBATAUQCsAIB9B9QCHCHAAC+QAAC+iHCHQiGCHi/AAQi+AAiGiHgAhJBJQACB/AQDtQgQjtgCh/IAAgcIAAgbIAAAbIAAAcgAhJASIAAAAg");
	this.shape_1.setTransform(49,46.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1,98,96.3);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(3,1,1).p("Egw5gHGMBhzAAAIAAONMhhzAAAg");
	this.shape.setTransform(313,45.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("Egw5AHHIAAuNMBhzAAAIAAONg");
	this.shape_1.setTransform(313,45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(-1.5,-1.5,629,94), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(3,1,1).p("Egw5gHGMBhzAAAIAAONMhhzAAAg");
	this.shape.setTransform(313,45.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("Egw5AHHIAAuNMBhzAAAIAAONg");
	this.shape_1.setTransform(313,45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(-1.5,-1.5,629,94), null);


(lib.lu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件2();
	this.instance.parent = this;
	this.instance.setTransform(313,45.6,1,1,0,0,0,313,45.5);

	this.instance_1 = new lib.元件3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-197.9,45.5,1,1,0,0,0,313,45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:292.5,y:45.5},0).wait(1).to({x:272},0).wait(1).to({x:251.4},0).wait(1).to({x:230.9},0).wait(1).to({x:210.4},0).wait(1).to({x:189.8},0).wait(1).to({x:169.3},0).wait(1).to({x:148.8},0).wait(1).to({x:128.2},0).wait(1).to({x:107.7},0).wait(1).to({x:87.2},0).wait(1).to({x:66.6},0).wait(1).to({x:46.1},0).wait(1).to({x:25.6},0).wait(1).to({x:5},0).wait(1).to({x:-15.5},0).wait(1).to({x:-36},0).wait(1).to({x:-56.6},0).wait(1).to({x:-77.1},0).wait(1).to({x:-97.6},0).wait(1).to({x:-118.2},0).wait(1).to({x:-138.7},0).wait(1).to({x:-159.2},0).wait(1).to({x:-179.8},0).wait(1).to({x:-200.3},0).wait(1).to({x:-220.8},0).wait(1).to({x:-241.4},0).wait(1).to({x:-261.9},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.4,629,94);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.quan("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0.3,1,1,0,0,0,47.5,47.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(-49,-47.8,98,96.3), null);


// stage content:
(lib.影片剪辑多个组合动画 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 不断旋转
		通过在 Tick 事件中更新元件实例的旋转属性使其不断旋转。
		
		说明:
		1. 所编写代码的默认旋转方向为顺时针。
		2. 要将旋转方向更改为逆时针，将以下数字 10 更改为负值。
		3. 要更改元件实例的旋转速度，将以下数字 10 更改为希望元件实例在每帧中的旋转度数。度数越高， 旋转越快。
		4. 由于动画使用 Tick 事件，因此仅当播放头移动到新帧时动画才播放。动画播放速度也受文档帧频率的影响。
		*/
		
		this.addEventListener("tick",fl_RotateContinuously_2.bind(this));
		
		function fl_RotateContinuously_2(){
			this.movieClip_2.rotation+=-20;
		}
		
		
		this.addEventListener("tick",fl_RotateContinuously_3.bind(this));
		
		function fl_RotateContinuously_3(){
			this.dgfb.rotation+=-10;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.dgfb = new lib.元件1();
	this.dgfb.parent = this;
	this.dgfb.setTransform(294,310.5,1,1,45,0,0,0.1,0.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(3,1,1).p("ADhAAQAABdhCBCQhCBChdAAQhcAAhChCQhChCAAhdQAAhcBChCQBChCBcAAQBdAABCBCQBCBCAABcg");
	this.shape.setTransform(184.5,209.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000099").ss(3,1,1).p("A30K8MAutAAAIA8pOIocAKIusszg");
	this.shape_1.setTransform(204.5,187);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AieCfQhChCAAhdQAAhcBChCQBChCBcAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBChdAAQhcAAhChCg");
	this.shape_2.setTransform(184.5,209.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.dgfb}]}).wait(1));

	// 图层 2
	this.instance = new lib.lu();
	this.instance.parent = this;
	this.instance.setTransform(587,354.5,1,1,0,0,0,313,45.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 1
	this.movieClip_2 = new lib.元件1();
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(124.5,310.4,1,1,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(325.5,315.6,851,286);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;