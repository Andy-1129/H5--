(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"元件_应用预设动画_atlas_", frames: [[0,0,500,400],[0,402,300,300]]}
];



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



(lib.AFGFAF = function() {
	this.spriteSheet = ss["元件_应用预设动画_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.u4952199731313894467fm26gp0 = function() {
	this.spriteSheet = ss["元件_应用预设动画_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
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
	this.instance = new lib.AFGFAF();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.524,0.665);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,262,266), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.u4952199731313894467fm26gp0();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.527,0.607);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,158,182.1), null);


// stage content:
(lib.元件应用预设动画 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件1();
	this.instance.parent = this;
	this.instance.setTransform(99.3,186.2,1,1,0,0,0,77.3,176.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:79,regY:91,x:115,y:101.3},0).wait(1).to({x:129,y:102.5},0).wait(1).to({x:143,y:104.4},0).wait(1).to({x:156.9,y:107.1},0).wait(1).to({x:170.9,y:110.6},0).wait(1).to({x:184.9,y:114.9},0).wait(1).to({x:198.8,y:119.9},0).wait(1).to({x:212.8,y:125.7},0).wait(1).to({x:226.7,y:132.4},0).wait(1).to({x:240.7,y:139.8},0).wait(1).to({x:254.6,y:148},0).wait(1).to({x:268.5,y:157},0).wait(1).to({x:282.5,y:166.9},0).wait(1).to({x:296.4,y:177.5},0).wait(1).to({x:310.3,y:189},0).wait(1).to({x:324.2,y:201.2},0).wait(1).to({x:338.1,y:214.4},0).wait(1).to({x:352,y:228.3},0).wait(1).to({x:365.9,y:243.1},0).wait(1).to({x:379.8,y:258.8},0).wait(1).to({x:393.6,y:275.4},0).wait(1).to({x:407.5,y:292.8},0).wait(1).to({x:421.4,y:311.2},0).wait(1).to({x:435.2,y:330.4},0).wait(1).to({x:449.1,y:350.7},0).wait(1).to({x:462.9,y:371.9},0).wait(1).to({x:476.7,y:394.1},0).wait(1).to({x:490.6,y:417.4},0).wait(1).to({x:504.4,y:441.8},0).wait(1).to({x:518.2,y:467.5},0).wait(1).to({x:532,y:494.5},0).wait(1).to({x:545.8,y:523},0).wait(1).to({x:559.6,y:553.3},0).wait(1).to({x:573.3,y:586},0).wait(1).to({x:587.1,y:622.7},0).wait(1).to({scaleX:1.45,scaleY:0.73,x:601.6,y:693.6},0).wait(1).to({scaleX:1.5,scaleY:0.7,x:615.5,y:632.4},0).wait(1).to({scaleX:1.45,scaleY:0.73,x:629.1,y:584.9},0).wait(1).to({scaleX:1,scaleY:1,x:642.1,y:526.3},0).wait(1).to({x:655.8,y:496.9},0).wait(1).to({x:669.5,y:473.4},0).wait(1).to({x:683.2,y:455.3},0).wait(1).to({x:696.9,y:442.6},0).wait(1).to({x:710.5,y:435},0).wait(1).to({x:724.2,y:432.5},0).wait(1).to({x:737.8,y:435},0).wait(1).to({x:751.4,y:442.6},0).wait(1).to({x:765,y:455.3},0).wait(1).to({x:778.6,y:473.4},0).wait(1).to({x:792.2,y:496.9},0).wait(1).to({x:805.7,y:526.3},0).wait(1).to({x:819.2,y:562.3},0).wait(1).to({x:832.7,y:606.8},0).wait(1).to({x:846.2,y:670.9},0).wait(1).to({scaleX:1.3,scaleY:0.8,x:860.2,y:649.9},0).wait(1).to({scaleX:1,scaleY:1,x:873.1,y:608.2},0).wait(1).to({x:886.5,y:590.4},0).wait(1).to({x:899.8,y:578.1},0).wait(1).to({x:913.1,y:570.9},0).wait(1).to({x:926.4,y:568.5},0).wait(1).to({x:939.6,y:570.9},0).wait(1).to({x:952.8,y:578.1},0).wait(1).to({x:965.9,y:590.4},0).wait(1).to({x:978.9,y:608.2},0).wait(1).to({x:991.9,y:632.9},0).wait(1).to({scaleX:1.2,scaleY:0.9,x:1005.1,y:679.4},0).wait(1).to({scaleX:1,scaleY:1,x:1017.5,y:649.3},0).wait(1).to({x:1030,y:636.1},0).wait(1).to({x:1042.4,y:628.9},0).wait(1).to({x:1054.5,y:626.5},0).wait(1).to({x:1066.3,y:628.9},0).wait(1).to({x:1077.3,y:636.1},0).wait(1).to({x:1087.1,y:649.3},0).wait(1).to({x:1092.6,y:670.9},0).wait(1));

	// 图层 1
	this.instance_1 = new lib.元件2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(198,162,1,1,0,0,0,131,133);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:132.9,regY:135.3,rotation:30,x:197.5,y:173.2,alpha:0.847},0).wait(1).to({regX:133.3,regY:136.3,rotation:60,x:194.3,y:169.5,alpha:0.693},0).wait(1).to({regX:133.5,regY:137.3,rotation:90,x:190.7,y:172.8,alpha:0.54},0).wait(1).to({rotation:120,x:187.7,y:165.6,alpha:0.546},0).wait(1).to({rotation:150,x:190.1,y:161.9,alpha:0.552},0).wait(1).to({rotation:180,x:193.7,y:179.4,alpha:0.559},0).wait(1).to({rotation:210,x:198,y:158,alpha:0.565},0).wait(1).to({rotation:240,x:251.3,y:171.9,alpha:0.571},0).wait(1).to({rotation:270,x:304,y:173.6,alpha:0.577},0).wait(1).to({rotation:300,x:355.5,y:171.4,alpha:0.583},0).wait(1).to({rotation:330,x:405.6,y:185.5,alpha:0.59},0).wait(1).to({rotation:360,x:454.7,y:166.3,alpha:0.596},0).wait(1).to({rotation:390,x:503,y:188,alpha:0.602},0).wait(1).to({rotation:420,x:492.9,y:175.7,alpha:0.608},0).wait(1).to({rotation:450,x:483.4,y:178.6,alpha:0.614},0).wait(1).to({rotation:480,x:475.1,y:176.2,alpha:0.62},0).wait(1).to({rotation:510,x:468.2,y:160.5,alpha:0.627},0).wait(1).to({rotation:540,x:462.3,y:179.4,alpha:0.633},0).wait(1).to({rotation:570,x:457.2,y:159.4,alpha:0.639},0).wait(1).to({rotation:600,x:452,y:161.3,alpha:0.645},0).wait(1).to({rotation:630,x:446.2,y:167.8,alpha:0.651},0).wait(1).to({rotation:660,x:439.2,y:165.8,alpha:0.658},0).wait(1).to({rotation:690,x:430.9,y:172.7,alpha:0.664},0).wait(1).to({rotation:720,x:421.5,y:166.3,alpha:0.67},0).to({_off:true},1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(297,210,323,301.1);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/元件_应用预设动画_atlas_.png", id:"元件_应用预设动画_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;