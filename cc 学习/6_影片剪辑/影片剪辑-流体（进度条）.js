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


(lib.liuti = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(1));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A6sCRQguAAAAgtIAAjGQAAguAuAAMA1ZAAAQAuAAAAAuIAADGQAAAtguAAg");
	this.shape.setTransform(-175.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({x:-166.5},0).wait(1).to({x:-157.5},0).wait(1).to({x:-148.5},0).wait(1).to({x:-139.5},0).wait(1).to({x:-130.5},0).wait(1).to({x:-121.5},0).wait(1).to({x:-112.5},0).wait(1).to({x:-103.5},0).wait(1).to({x:-94.5},0).wait(1).to({x:-85.5},0).wait(1).to({x:-76.5},0).wait(1).to({x:-67.5},0).wait(1).to({x:-58.5},0).wait(1).to({x:-49.5},0).wait(1).to({x:-40.5},0).wait(1).to({x:-31.5},0).wait(1).to({x:-22.5},0).wait(1).to({x:-13.5},0).wait(1).to({x:-4.5},0).wait(1).to({x:4.5},0).wait(1).to({x:13.5},0).wait(1).to({x:22.5},0).wait(1).to({x:31.5},0).wait(1).to({x:40.5},0).wait(1).to({x:49.5},0).wait(1).to({x:58.5},0).wait(1).to({x:67.5},0).wait(1).to({x:76.5},0).wait(1).to({x:85.5},0).wait(1).to({x:94.5},0).wait(1).to({x:103.5},0).wait(1).to({x:112.5},0).wait(1).to({x:121.5},0).wait(1).to({x:130.5},0).wait(1).to({x:139.5},0).wait(1).to({x:148.5},0).wait(1).to({x:157.5},0).wait(1).to({x:166.5},0).wait(1).to({x:175.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-351,0,351,29);


// stage content:
(lib.影片剪辑流体进度条 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn02.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		var frameNumber = this.liuti.currentFrame;
		var num = 0
		function fl_MouseClickHandler()
		{
			console.log(frameNumber);
			var rel = num++;
			if(rel%2 == 0 && frameNumber != 20){
					
				this.liuti.play();
			}else if(frameNumber = 20){
			
				this.liuti.gotoAndPlay(21);
			}
				
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 1
	this.btn02 = new lib.start();
	this.btn02.parent = this;
	this.btn02.setTransform(447.5,341.8);
	new cjs.ButtonHelper(this.btn02, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(3,1,1).p("A6tiQMA1bAAAQAtAAAAAtIAADGQAAAugtAAMg1bAAAQgtAAAAguIAAjGQAAgtAtAAg");
	this.shape.setTransform(267.5,183.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.btn02}]}).wait(1));

	// 图层 2
	this.liuti = new lib.liuti();
	this.liuti.parent = this;
	this.liuti.setTransform(92,183.6,1,1,0,0,0,0,14.5);

	this.timeline.addTween(cjs.Tween.get(this.liuti).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16,367.6,798.5,215.7);
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