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



(lib.tiao = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A8+CWIAAkrMA59AAAIAAErg");
	this.shape.setTransform(185.5,15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,371,30);


(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AghBvIAAgFQALAAADgCQAEgDACgEQACgFAAgNIAAg3QAAgYgBgGQgBgEgDgCQgCgDgEAAQgEAAgHADIgCgGIAqgRIAHAAIAAByQAAANACAFQACAEAEACQAEACAKABIAAAFgAgJhTQgFgFAAgHQAAgGAFgFQAEgEAGAAQAHAAAEAEQAFAFAAAGQAAAHgFAFQgEAFgHgBQgFABgFgFg");
	this.shape.setTransform(76.1,19.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AAHBvIAAgFIAEAAQAKAAAEgEQAEgCABgHIABgOIAAgzQAAgYgCgFQgDgIgFgDQgFgFgIAAQgIAAgHAFQgIADgMAMIAABMQAAAPACADQACAEAEACQAEACALABIAAAFIhHAAIAAgFQAKAAAFgEQAEgBABgEQACgFAAgNIAAiBQAAgZgBgFQgBgGgDgCQgCgCgEAAQgDABgIACIgCgFIArgSIAHAAIAABoQARgSAKgGQAKgFAKAAQAMgBAJAIQAIAGAFAOQACAKABAaIAAAzQgBAOADAFQACADADACQAEACAKABIAAAFg");
	this.shape_1.setTransform(63.6,19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AgcBHIgIgBQgEAAgCADIgFAAIAAgzIAFAAQAEAWAMALQANALAOAAQALAAAHgFQAGgHABgJQgBgKgHgIQgHgHgWgLQgXgLgHgJQgHgJAAgOQAAgRAMgMQANgMASAAQAIAAAMAEIALACIADgBIAEgFIAFAAIAAAxIgFAAQgGgXgKgJQgJgHgNAAQgLgBgHAGQgGAGAAAHQAAAIAEAHQAGAGAOAIIAWAKQAgAPAAAaQAAATgPAMQgPAMgSAAQgMAAgRgFg");
	this.shape_2.setTransform(49.6,23.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AghBvIAAgFQALAAADgCQAEgDACgEQACgFAAgNIAAg3QAAgYgBgGQgBgEgDgCQgCgDgEAAQgEAAgHADIgCgGIAqgRIAHAAIAAByQAAANACAFQACAEAEACQAEACAKABIAAAFgAgJhTQgFgFAAgHQAAgGAFgFQAEgEAGAAQAHAAAEAEQAFAFAAAGQAAAHgFAFQgEAFgHgBQgFABgFgFg");
	this.shape_3.setTransform(38.7,19.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AAUBGQgFgGgBgMQgUARgGACQgJAEgJAAQgPAAgJgKQgKgKAAgRQAAgKAFgIQAGgKAQgKQAQgIAjgOIAAgFQABgWgHgIQgHgIgMAAQgKAAgFAGQgHAFAAAHIABAJQAAAHgEAEQgDAEgGAAQgHAAgDgEQgDgEgBgHQAAgOAOgLQAOgLAZAAQASAAAMAGQAJAFAFAKQACAHAAAVIAAAwIABAZQABAEACACQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAIAFgBIAMgLIAAAJQgSAXgQAAQgHAAgEgFgAgPAAQgMAHgGAIQgFAHAAAJQAAALAHAIQAGAHAKAAQALAAASgQIAAg1QgWAJgHADg");
	this.shape_4.setTransform(27.7,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC0000").s().p("AAKBvIAAgFQAGgBACgBQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBQAAgEgGgHIgrg4IAAAvQAAANACAFQACAEAEADQADABAMABIAAAFIhJAAIAAgFQALAAAGgEQADgBACgDQACgFAAgNIAAiCQAAgYgBgGQgBgGgDgCQgCgCgEAAQgDAAgHADIgDgFIArgSIAHAAIAACNIAkggQALgKACgEIABgDQAAgEgCgCQgDgCgGAAIAAgFIA+AAIAAAFQgNAAgIAEQgJADgKAKIgjAhIAjAuIAVAZQAHAGAGADQAEABAKABIAAAFg");
	this.shape_5.setTransform(12.2,19.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#333333").ss(1,1,1).p("AnGjHIONAAIAAGPIuNAAg");
	this.shape_6.setTransform(45.5,20.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AnGDIIAAmPIONAAIAAGPg");
	this.shape_7.setTransform(45.5,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.5,93,42);


// stage content:
(lib.补间动画流体进度条 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		
		/* 单击以转到帧并播放
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并继续从该帧回放。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		this.start.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		var  clickNum = 0;
		function fl_MouseClickHandler_2()
		{
			var rel = clickNum++;
			console.log(rel);
			if(rel%2 == 0){
				this.play();
			}else{
				this.stop();
			}
			
		}
	}
	this.frame_19 = function() {
		this.stop();
		
		
		this.start.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		var  clickNum2 = 0;
		function fl_MouseClickHandler_3()
		{
			var rel2 = clickNum2++;
			
			if(rel2%2 == 0){
				this.play();
			}else{
				this.stop();
			}
		}
	}
	this.frame_39 = function() {
		/* 在此帧处停止
		时间轴将在插入此代码的帧处停止/暂停。
		也可用于停止/暂停影片剪辑的时间轴。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(1));

	// actions
	this.start = new lib.start();
	this.start.parent = this;
	this.start.setTransform(475.5,342,1,1,0,0,0,45.5,20.5);
	new cjs.ButtonHelper(this.start, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.start).wait(40));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(5,1,1).p("A8+iVMA59AAAIAAErMg59AAAg");
	this.shape.setTransform(287.5,163.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(40));

	// 图层 2
	this.instance = new lib.tiao("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-83.5,163.1,1,1,0,0,0,185.5,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-73.9},0).wait(1).to({x:-64.4},0).wait(1).to({x:-54.9},0).wait(1).to({x:-45.4},0).wait(1).to({x:-35.9},0).wait(1).to({x:-26.4},0).wait(1).to({x:-16.9},0).wait(1).to({x:-7.3},0).wait(1).to({x:2.2},0).wait(1).to({x:11.7},0).wait(1).to({x:21.2},0).wait(1).to({x:30.7},0).wait(1).to({x:40.2},0).wait(1).to({x:49.7},0).wait(1).to({x:59.2},0).wait(1).to({x:68.8},0).wait(1).to({x:78.3},0).wait(1).to({x:87.8},0).wait(1).to({x:97.3},0).wait(1).to({x:106.8},0).wait(1).to({x:116.3},0).wait(1).to({x:125.8},0).wait(1).to({x:135.3},0).wait(1).to({x:144.9},0).wait(1).to({x:154.4},0).wait(1).to({x:163.9},0).wait(1).to({x:173.4},0).wait(1).to({x:182.9},0).wait(1).to({x:192.4},0).wait(1).to({x:201.9},0).wait(1).to({x:211.4},0).wait(1).to({x:220.9},0).wait(1).to({x:230.4},0).wait(1).to({x:239.9},0).wait(1).to({x:249.4},0).wait(1).to({x:259},0).wait(1).to({x:268.5},0).wait(1).to({x:278},0).wait(1).to({x:287.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,345.6,791,217.5);
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