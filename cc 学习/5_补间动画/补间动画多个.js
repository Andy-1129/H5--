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


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AmtjHINbAAIAAGPItbAAg");
	this.shape.setTransform(43,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC66").s().p("AmtDIIAAmPINbAAIAAGPg");
	this.shape_1.setTransform(43,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(-1,-1,88,42), null);


// stage content:
(lib.补间动画多个 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件2();
	this.instance.parent = this;
	this.instance.setTransform(49,189.1,1,1,0,0,0,43,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:53.4},0).wait(1).to({x:57.9},0).wait(1).to({x:62.4},0).wait(1).to({x:66.8},0).wait(1).to({x:71.3},0).wait(1).to({x:75.7},0).wait(1).to({x:80.2},0).wait(1).to({x:84.6},0).wait(1).to({x:89.1},0).wait(1).to({x:93.6},0).wait(1).to({x:98},0).wait(1).to({x:102.5},0).wait(1).to({x:106.9},0).wait(1).to({x:111.4},0).wait(1).to({x:115.8},0).wait(1).to({x:120.3},0).wait(1).to({x:124.7},0).wait(1).to({x:129.2},0).wait(1).to({x:133.7},0).wait(1).to({x:138.1},0).wait(1).to({x:142.5},0).wait(1).to({x:147},0).wait(1).to({x:151.5},0).wait(1).to({x:156},0).wait(1).to({x:160.4},0).wait(1).to({x:164.9},0).wait(1).to({x:169.3},0).wait(1).to({x:173.8},0).wait(1).to({x:178.2},0).wait(1).to({x:182.7},0).wait(1).to({x:187.2},0).wait(1).to({x:191.6},0).wait(1).to({x:196.1},0).wait(1).to({x:200.5},0).wait(1).to({x:499},0).wait(1).to({x:477.2},0).wait(1).to({x:455.3},0).wait(1).to({x:433.5},0).wait(1).to({x:411.6},0).wait(1).to({x:389.8},0).wait(1).to({x:368},0).wait(1).to({x:346.1},0).wait(1).to({x:324.3},0).wait(1).to({x:302.5},0).wait(1).to({x:280.6},0).wait(1).to({x:258.8},0).wait(1).to({x:236.9},0).wait(1).to({x:215.1},0).wait(1).to({x:193.3},0).wait(1).to({x:171.4},0).wait(1).to({x:149.6},0).wait(1).to({x:127.7},0).wait(1).to({x:105.9},0).wait(1).to({x:84.1},0).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(280.5,368.6,87,41);
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