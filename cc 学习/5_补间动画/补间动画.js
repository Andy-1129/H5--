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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Am3lsINvAAIAALZItvAAg");
	this.shape.setTransform(44,36.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("Am3FtIAArZINvAAIAALZg");
	this.shape_1.setTransform(44,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(-1,-1,90,75), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").ss(10,1,1).p("AnumUIPdAAIAAMpIvdAAg");
	this.shape.setTransform(49.5,40.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AnuGVIAAspIPdAAIAAMpg");
	this.shape_1.setTransform(49.5,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,109,91);


// stage content:
(lib.补间动画 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.元件2();
	this.instance.parent = this;
	this.instance.setTransform(79.1,194.6,1,1,0,0,0,44,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:86.6,y:180.8},0).wait(1).to({x:94.5,y:167.2},0).wait(1).to({x:102.6,y:153.7},0).wait(1).to({x:111.1,y:140.4},0).wait(1).to({x:119.9,y:127.4},0).wait(1).to({x:129.2,y:114.7},0).wait(1).to({x:138.9,y:102.3},0).wait(1).to({x:149.1,y:90.4},0).wait(1).to({x:160,y:79},0).wait(1).to({x:171.5,y:68.3},0).wait(1).to({x:183.8,y:58.6},0).wait(1).to({x:197.1,y:50.1},0).wait(1).to({x:211.2,y:43.3},0).wait(1).to({x:226.2,y:38.6},0).wait(1).to({x:241.8,y:36.5},0).wait(1).to({x:257.5,y:37.5},0).wait(1).to({x:272.7,y:41.3},0).wait(1).to({x:287.1,y:47.6},0).wait(1).to({x:300.5,y:55.8},0).wait(1).to({x:312.9,y:65.5},0).wait(1).to({x:324.3,y:76.3},0).wait(1).to({x:335,y:87.9},0).wait(1).to({x:344.9,y:100},0).wait(1).to({x:354.2,y:112.7},0).wait(1).to({x:363,y:125.7},0).wait(1).to({x:371.4,y:139.1},0).wait(1).to({x:379.3,y:152.7},0).wait(1).to({x:386.8,y:166.5},0).wait(1).to({x:394.1,y:180.4},0).wait(1).to({x:401,y:194.6},0).wait(1).to({x:373.2,y:188.9},0).wait(1).to({x:345.3,y:184.1},0).wait(1).to({x:317.2,y:180.4},0).wait(1).to({x:288.9,y:177.7},0).wait(1).to({x:260.6,y:176.2},0).wait(1).to({x:232.2,y:176.3},0).wait(1).to({x:204,y:178.5},0).wait(1).to({x:176.1,y:183.6},0).wait(1).to({x:149.5,y:193.3},0).wait(1).to({x:126.7,y:210},0).wait(1).to({x:113.1,y:234.5},0).wait(1).to({x:111.2,y:262.6},0).wait(1).to({x:117.3,y:290.3},0).wait(1).to({x:128,y:316.6},0).wait(1).to({x:150.5,y:300.6},0).wait(1).to({x:173.9,y:285.9},0).wait(1).to({x:198,y:272.4},0).wait(1).to({x:222.9,y:260.4},0).wait(1).to({x:248.4,y:249.9},0).wait(1).to({x:274.7,y:241.3},0).wait(1).to({x:301.6,y:235.1},0).wait(1).to({x:329,y:231.9},0).wait(1).to({x:356.6,y:232.5},0).wait(1).to({x:383.7,y:237.7},0).wait(1).to({x:409.3,y:247.9},0).wait(1).to({x:432.4,y:263},0).wait(1).to({x:452.2,y:282.2},0).wait(1).to({x:468.6,y:304.3},0).wait(1).to({x:482,y:328.6},0).to({_off:true},1).wait(5));

	// 图层 2
	this.instance_1 = new lib.元件1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(81.6,184.6,1,1,0,0,0,49.5,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:87.2,y:196.4},0).wait(1).to({x:93.1,y:208.1},0).wait(1).to({x:99.2,y:219.7},0).wait(1).to({x:105.7,y:231.1},0).wait(1).to({x:112.4,y:242.3},0).wait(1).to({x:119.6,y:253.3},0).wait(1).to({x:127.1,y:264.1},0).wait(1).to({x:135.2,y:274.4},0).wait(1).to({x:143.7,y:284.4},0).wait(1).to({x:152.8,y:293.8},0).wait(1).to({x:162.6,y:302.6},0).wait(1).to({x:173.1,y:310.4},0).wait(1).to({x:184.3,y:317.2},0).wait(1).to({x:196.3,y:322.6},0).wait(1).to({x:208.8,y:326.2},0).wait(1).to({x:221.8,y:328},0).wait(1).to({x:234.9,y:327.8},0).wait(1).to({x:247.9,y:325.6},0).wait(1).to({x:260.4,y:321.8},0).wait(1).to({x:272.4,y:316.5},0).wait(1).to({x:283.9,y:310.1},0).wait(1).to({x:294.8,y:302.9},0).wait(1).to({x:305.2,y:294.9},0).wait(1).to({x:315.1,y:286.3},0).wait(1).to({x:324.5,y:277.2},0).wait(1).to({x:333.6,y:267.8},0).wait(1).to({x:342.4,y:258},0).wait(1).to({x:350.8,y:247.9},0).wait(1).to({x:358.9,y:237.7},0).wait(1).to({x:366.8,y:227.2},0).wait(1).to({x:374.5,y:216.5},0).wait(1).to({x:381.9,y:205.7},0).wait(1).to({x:389.2,y:194.8},0).wait(1).to({x:396.2,y:183.7},0).wait(1).to({x:403.1,y:172.6},0).wait(1).to({x:409.9,y:161.3},0).wait(1).to({x:416.5,y:150},0).wait(1).to({x:422.9,y:138.6},0).wait(1).to({x:429.3,y:127.1},0).wait(1).to({x:435.5,y:115.6},0).to({_off:true},1).wait(24));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(10,1,1).p("AqYqYIUxAAIAAUxI0xAAg");
	this.shape.setTransform(100.6,224.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AqYKZIAA0xIUxAAIAAUxg");
	this.shape_1.setTransform(100.6,224.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#07F807").ss(10,1,1).p("AqMqHQFDgCFFgBQFFgCFHAAQACFIABFEQACFEAAFEQlJAClDACQlDABlFAAQgClEgBlDQgClFAAlIg");
	this.shape_2.setTransform(109,223.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C70003").s().p("AqKAGQgClGAAlHIKIgDIKMgBIADKLQACFEAAFEIqMAEIqIABIgDqHg");
	this.shape_3.setTransform(109,223.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0DF20D").ss(10,1,1).p("Ap/p2QE6gEE9gDQE/gCFAAAQAEE/ADE9QACE8AAE+Qk/AEk8ADQk9ACk+AAQgEk6gDk8QgCk/AAlBg");
	this.shape_4.setTransform(117.4,222.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C20005").s().p("Ap9AJQgCk+AAlBQE6gEE9gDQE/gCFAAAIAHJ8QACE8AAE+Ip7AHQk9ACk+AAIgHp3g");
	this.shape_5.setTransform(117.4,222.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#14EB14").ss(10,1,1).p("ApzplQEygGE2gEQE3gEE6AAQAGE2AEE2QAEE2AAE3Qk3AFk1AFQk1AEk4AAQgGkygEk1QgEk3AAk7g");
	this.shape_6.setTransform(125.9,221.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BC0008").s().p("ApvAMQgEk3AAk6QEygGE2gEQE3gEE6AAQAGE3AEE1QAEE2AAE3IpsAKQk1AEk3AAQgHkzgEk1g");
	this.shape_7.setTransform(125.9,221.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#1AE51A").ss(10,1,1).p("ApnpUQEqgHEvgGQEwgGEzAAQAIEuAFEvQAGEuAAExQkvAIktAFQkuAGkyAAQgHkqgGkuQgGkwAAk0g");
	this.shape_8.setTransform(134.3,220.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B7000A").s().p("AphAQQgGkwAAk0QEqgHEvgGQEwgGEzAAQAIEuAFEvQAGEuAAExQkvAIktAFQkuAGkyAAQgHkqgGkug");
	this.shape_9.setTransform(134.3,220.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#21DE21").ss(10,1,1).p("ApapDQEhgJEngHQEpgIEtAAQAKEmAGEoQAHEmAAErQklAKknAHQknAHkrAAQgKkigHknQgGkpAAktg");
	this.shape_10.setTransform(142.7,219.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B2000D").s().p("ApUATQgGkpAAktQEhgJEngIQEpgGEtgBQAKEmAGEoQAHEmAAErQklAJknAIQknAGkrAAQgKkhgHkng");
	this.shape_11.setTransform(142.7,219.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#27D827").ss(10,1,1).p("ApOoyQEYgLEhgJQEhgIEnAAQALEdAJEgQAIEgAAEkQkdAMkgAIQkgAIkkAAQgMkZgIkfQgIkiAAkng");
	this.shape_12.setTransform(151.2,217.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AD0010").s().p("ApGAXQgIkiAAknQEZgLEggJQEigIElAAQANEdAIEgQAIEgAAEkQkdAMkgAIQkfAIklAAQgLkZgJkfg");
	this.shape_13.setTransform(151.2,217.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#2ED12E").ss(10,1,1).p("ApCohQEQgNEagKQEagKEgAAQAOEUAJEaQAKEYAAEeQkUANkZAKQkZAKkeAAQgNkQgKkZQgKkbAAkgg");
	this.shape_14.setTransform(159.6,216.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A70012").s().p("Ao4AaQgKkbAAkgQEQgNEagKQEagKEfAAQAOEUAKEaQAJEYABEeQkVANkZAKQkYAKkeAAQgNkQgKkZg");
	this.shape_15.setTransform(159.6,216.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#34CB34").ss(10,1,1).p("Ao2oQQEIgPETgMQETgLEYAAQAQEMALETQALEQABEXQkMAQkSALQkRALkXAAQgQkHgLkSQgMkUAAkZg");
	this.shape_16.setTransform(168,215.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A20015").s().p("AoqAdQgMkTAAkaQEIgPETgMQETgLEYABQAQELALETQALEQABEXQkMAQkSALQkRAMkXAAQgQkIgLkSg");
	this.shape_17.setTransform(168,215.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#3BC43B").ss(10,1,1).p("Aopn/QD/gRELgNQEMgMESAAQASEDANELQAMEKAAEQQkDASkLANQkKAMkQAAQgSj/gNkLQgMkMAAkTg");
	this.shape_18.setTransform(176.5,214.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9D0018").s().p("AodAgQgMkMAAkTQD/gRELgNQEMgMESAAQASEDANELQAMEKAAEQQkDASkLANQkKAMkQAAQgSj/gNkLg");
	this.shape_19.setTransform(176.5,214.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#41BE41").ss(10,1,1).p("AodntQD3gUEEgOQEFgOELAAQAUD6AOEFQAOEDAAEJQj6AUkEAOQkDAOkKAAQgUj3gOkDQgOkGAAkLg");
	this.shape_20.setTransform(184.9,213.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#98001A").s().p("AoPAkQgOkGAAkLQD2gUEFgOQEFgOELAAQAUD6AOEFQAOEDAAEJQj7AUkDAOQkDAOkLAAQgTj3gOkDg");
	this.shape_21.setTransform(184.9,213.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#48B748").ss(10,1,1).p("AoRncQDugWD+gPQD9gQEFAAQAWDyAPD9QAQD8AAEDQjyAWj9APQj8AQkDAAQgWjvgPj8QgQj+AAkFg");
	this.shape_22.setTransform(193.3,212.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#92001D").s().p("AoBAnQgQj+AAkFQDugWD+gPQD9gQEFAAQAWDyAPD9QAQD8AAEDQjyAWj9APQj8AQkDAAQgWjvgPj8g");
	this.shape_23.setTransform(193.3,212.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#4EB14E").ss(10,1,1).p("AoEnLQDlgYD2gRQD3gQD+AAQAYDpAQD2QARD0AAD9QjpAYj1AQQj1ARj9AAQgYjmgRj1QgQj3AAj+g");
	this.shape_24.setTransform(201.8,211.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8D001F").s().p("An0AqQgQj3AAj+QDlgYD2gRQD3gQD+AAQAYDpAQD2QARD0AAD9QjpAYj1AQQj1ARj9AAQgYjmgRj1g");
	this.shape_25.setTransform(201.8,211.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#55AA55").ss(10,1,1).p("An4m6QDdgZDvgTQDwgRD3gBQAaDhASDvQASDtAAD2QjgAajvASQjuASj2AAQgajdgSjuQgSjwAAj4g");
	this.shape_26.setTransform(210.2,210.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#880022").s().p("AnmAtQgSjvAAj4QDdgaDvgSQDvgSD4AAQAaDhASDuQASDuAAD2QjgAajvASQjuASj2AAQgajdgSjvg");
	this.shape_27.setTransform(210.2,210.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#5CA35C").ss(10,1,1).p("AnsmpQDVgcDogTQDogUDxAAQAcDYATDoQAUDmAADwQjYAcjnATQjnAUjwAAQgcjVgTjnQgUjpAAjxg");
	this.shape_28.setTransform(218.6,209.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#830025").s().p("AnYAxQgUjpAAjxQDVgcDogTQDogUDxAAQAcDYATDoQAUDmAADwQjYAcjnATQjnAUjwAAQgcjVgTjng");
	this.shape_29.setTransform(218.6,209.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#629D62").ss(10,1,1).p("AnfmYQDMgdDggVQDhgVDrgBQAeDQAUDhQAVDfAADpQjPAejgAUQjgAWjpAAQgejNgVjgQgUjhAAjrg");
	this.shape_30.setTransform(227.1,208);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7E0027").s().p("AnLA0QgUjhAAjrQDMgeDggUQDhgVDrgBQAeDQAUDgQAVDgAADpQjPAejgAVQjgAUjpAAQgejMgVjgg");
	this.shape_31.setTransform(227.1,208);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#699669").ss(10,1,1).p("AnTmHQDDgfDagXQDagWDkAAQAgDHAWDZQAWDZAADiQjHAgjYAWQjZAWjjAAQgfjDgXjZQgWjaAAjlg");
	this.shape_32.setTransform(235.5,206.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#78002A").s().p("Am9A4QgWjbAAjkQDDgfDagXQDagWDkAAQAgDHAWDZQAWDZAADiQjHAgjYAWQjZAWjiAAQghjEgWjYg");
	this.shape_33.setTransform(235.5,206.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#6F906F").ss(10,1,1).p("AnHl2QC7giDTgXQDTgYDdAAQAiC+AXDSQAYDSAADcQi+AhjSAYQjSAYjcAAQghi8gYjSQgYjTAAjdg");
	this.shape_34.setTransform(243.9,205.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#73002C").s().p("AmvA6QgYjTAAjdQC7giDTgXQDTgYDdAAQAiC+AXDSQAYDSAADcQi+AhjSAYQjSAYjcAAQghi8gYjSg");
	this.shape_35.setTransform(243.9,205.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#768976").ss(10,1,1).p("Am6llQCygjDLgZQDMgZDXAAQAjC1AZDLQAZDLAADVQi1AkjKAZQjLAZjWAAQgjizgZjLQgZjMAAjXg");
	this.shape_36.setTransform(252.4,204.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6E002F").s().p("AmhA+QgajMAAjXQCzgkDMgZQDLgYDXAAQAjC1AaDLQAZDKAADWQi2AkjLAYQjKAZjVAAQgkizgZjKg");
	this.shape_37.setTransform(252.4,204.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#7C837C").ss(10,1,1).p("AmulUQCqglDEgbQDFgaDQAAQAmCtAaDDQAaDEAADPQisAljEAbQjDAajPAAQgmiqgbjEQgajFAAjQg");
	this.shape_38.setTransform(260.8,203.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#690032").s().p("AmUBBQgajEAAjRQCqglDEgbQDEgaDQAAQAmCsAaDFQAbDDAADPQisAljFAbQjCAajQAAQgliqgbjEg");
	this.shape_39.setTransform(260.8,203.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#837C83").ss(10,1,1).p("AmilDQChgnC+gcQC9gbDKgBQAnCkAcC9QAcC8AADIQilAoi8AcQi9AcjHAAQgoiigci9Qgci9AAjKg");
	this.shape_40.setTransform(269.3,202.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#630034").s().p("AmGBEQgci9AAjKQChgnC+gcQC9gcDJAAQAoCkAcC9QAbC8ABDIQikAoi9AcQi8AcjJAAQgoiigbi9g");
	this.shape_41.setTransform(269.3,202.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#897689").ss(10,1,1).p("AmWkyQCZgpC2geQC2gdDDAAQAqCbAdC3QAdC1AADCQibApi2AdQi1AejCAAQgqiagdi1Qgdi3AAjDg");
	this.shape_42.setTransform(277.7,201.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#5E0037").s().p("Al5BHQgci1AAjEQCZgpC1geQC3gdDCAAQAqCcAdC2QAdC1AADBQibAqi2AdQi1AdjBAAQgriYgdi3g");
	this.shape_43.setTransform(277.7,201.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#906F90").ss(10,1,1).p("AmJkhQCQgrCvgfQCvgeC8AAQAsCTAeCvQAfCtAAC7QiTAsiuAfQiuAei7AAQgsiQgfivQgeivAAi9g");
	this.shape_44.setTransform(286.1,200.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#59003A").s().p("AlrBLQgeivAAi9QCQgrCvgfQCvgeC8AAQAsCTAeCvQAfCtAAC7QiTAsiuAfQiuAei7AAQgsiQgfivg");
	this.shape_45.setTransform(286.1,200.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#966996").ss(10,1,1).p("Al9kQQCIgtCoggQCogfC1gBQAuCKAfCoQAgCnABC0QiLAuinAgQinAgi1AAQgtiIggioQggioAAi2g");
	this.shape_46.setTransform(294.6,199.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#54003C").s().p("AldBOQggioAAi2QCIgtCoggQCogfC1gBQAuCKAfCoQAgCmABC1QiKAuioAgQinAgi1AAQgtiJgging");
	this.shape_47.setTransform(294.6,199.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#9D629D").ss(10,1,1).p("Alxj/QCAgvChgiQCgghCvAAQAwCBAhChQAhCgABCuQiCAvigAiQigAhiuAAQgwh/ghihQgiihAAivg");
	this.shape_48.setTransform(303,198.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4E003F").s().p("AlPBSQgiihAAiwQCAgvChgiQCgggCvAAQAwCAAhCiQAhCfABCuQiCAwigAhQigAiiuAAQgwiAghigg");
	this.shape_49.setTransform(303,198.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#A35CA3").ss(10,1,1).p("AlkjuQB3gxCZgjQCagiCoAAQAyB5AiCZQAjCZAACnQh5AyiZAiQiZAjinAAQgyh3gjiZQgiiaAAipg");
	this.shape_50.setTransform(311.4,197);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#490041").s().p("AlCBVQgiiaAAipQB3gxCZgjQCagiCoAAQAyB5AiCZQAjCZAACnQh5AyiZAiQiZAjinAAQgyh3gjiZg");
	this.shape_51.setTransform(311.4,197);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#AA55AA").ss(10,1,1).p("AlYjdQBugzCTgkQCSgkCiAAQA0BwAjCSQAkCSABChQhwA0iTAjQiRAlihAAQg0hvgkiSQgkiTAAiig");
	this.shape_52.setTransform(319.9,195.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#440044").s().p("Ak0BYQgkiSAAijQBugzCTgkQCSgkCiAAQAzBwAlCTQAjCRABChQhwA0iTAjQiRAlihAAQgzhvgliSg");
	this.shape_53.setTransform(319.9,195.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#B14EB1").ss(10,1,1).p("AlMjMQBmg1CMglQCLglCbgBQA2BoAlCLQAlCLABCaQhoA2iLAlQiLAmiaAAQg1hmgmiMQgmiLAAicg");
	this.shape_54.setTransform(328.3,194.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3F0047").s().p("AkmBbQgmiLAAicQBmg1CMglQCLglCbgBQA2BoAlCLQAlCLABCaQhoA2iLAlQiLAmiaAAQg1hmgmiMg");
	this.shape_55.setTransform(328.3,194.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#B748B7").ss(10,1,1).p("Ak/i7QBdg2CEgoQCEgmCVAAQA3BfAnCEQAnCDAACUQhfA4iEAmQiDAniUAAQg4hdgniEQgmiEAAiWg");
	this.shape_56.setTransform(336.7,193.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3A0049").s().p("AkZBfQgmiEAAiWQBdg2CEgoQCEgmCVAAQA3BfAnCEQAnCDAACUQhfA4iEAmQiDAniUAAQg4hdgniEg");
	this.shape_57.setTransform(336.7,193.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#BE41BE").ss(10,1,1).p("AkziqQBVg4B9gpQB9goCOAAQA6BWAoB9QAoB8AACOQhWA5h9ApQh8AoiNAAQg7hVgoh9Qgoh9AAiPg");
	this.shape_58.setTransform(345.2,192.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#34004C").s().p("AkLBiQgoh9AAiPQBVg4B9gpQB9goCOAAQA5BWAoB9QAoB8ABCOQhXA5h9ApQh8AoiMAAQg7hVgoh9g");
	this.shape_59.setTransform(345.2,192.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#C43BC4").ss(10,1,1).p("AkniYQBNg7B2gqQB1gpCIgBQA7BOAqB2QAqB1AACHQhOA7h2AqQh1AqiHAAQg7hNgqh2Qgqh2AAiHg");
	this.shape_60.setTransform(353.6,191.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#2F004E").s().p("Aj9BlQgqh2AAiHQBNg7B2gqQB1gpCIgBQA7BOAqB2QAqB1AACHQhOA7h2AqQh1AqiHAAQg7hNgqh2g");
	this.shape_61.setTransform(353.6,191.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#CB34CB").ss(10,1,1).p("AkaiHQBEg9BugrQBvgrCBAAQA9BFArBvQArBuAACAQhFA+hvArQhuAqiAAAQg9hDgshvQgqhvAAiBg");
	this.shape_62.setTransform(362,190.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2A0051").s().p("AjwBoQgqhuAAiBQBEg9BugrQBvgrCBAAQA9BFArBvQArBuAACAQhFA+hvAqQhuAriAAAQg9hEgshvg");
	this.shape_63.setTransform(362,190.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#D12ED1").ss(10,1,1).p("AkOh2QA7g/BogtQBogsB5AAQBAA8AsBoQAtBoAAB4Qg9BAhnAsQhoAth5AAQg/g8gthnQgshpAAh5g");
	this.shape_64.setTransform(370.5,189.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#250054").s().p("AjiBsQgshpAAh5QA7g/BogtQBpgsB5AAQA/A8AtBoQAsBoAAB4Qg8BAhoAsQhoAth5AAQg/g8gthng");
	this.shape_65.setTransform(370.5,189.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#D827D8").ss(10,1,1).p("AkChlQAzhBBhguQBhguBzAAQBBA0AuBhQAuBgAAByQg0BChhAuQhgAuhyAAQhCgzguhhQguhhAAhzg");
	this.shape_66.setTransform(378.9,188.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#1F0056").s().p("AjUBvQguhhAAhzQAzhBBhguQBhguBzAAQBBA0AtBhQAvBgAAByQg0BChhAuQhgAuhzAAQhBgzguhhg");
	this.shape_67.setTransform(378.9,188.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#DE21DE").ss(10,1,1).p("Aj2hUQArhDBagwQBZguBsgBQBEArAvBaQAvBaABBrQgsBEhZAvQhaAvhrAAQhEgqgvhaQgwhaAAhsg");
	this.shape_68.setTransform(387.3,187.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#1A0059").s().p("AjGBzQgwhbAAhsQArhDBagvQBZgvBsgBQBEAsAvBZQAvBaABBrQgsBEhZAvQhaAwhrgBQhEgqgvhZg");
	this.shape_69.setTransform(387.3,187.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#E51AE5").ss(10,1,1).p("AjphDQAihFBSgxQBTgwBlAAQBGAiAwBTQAxBSAABlQgiBGhTAwQhTAxhkAAQhGgigxhTQgwhSAAhmg");
	this.shape_70.setTransform(395.8,186);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#15005C").s().p("Ai5B1QgwhSAAhmQAihFBSgxQBTgwBlAAQBGAiAwBTQAxBSAABlQgiBGhTAwQhTAxhkAAQhGgigxhTg");
	this.shape_71.setTransform(395.8,186);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#EB14EB").ss(10,1,1).p("AjdgyQAahHBLgyQBLgyBfAAQBIAaAyBLQAyBLAABfQgaBIhLAxQhMAzhfAAQhHgagyhLQgyhMAAhfg");
	this.shape_72.setTransform(404.2,184.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#10005E").s().p("AirB5QgyhMAAhfQAZhGBMgzQBLgyBfAAQBHAaAzBMQAxBLABBeQgaBIhLAxQhMAzhfAAQhHgZgyhMg");
	this.shape_73.setTransform(404.2,184.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#F20DF2").ss(10,1,1).p("AjRghQARhJBFgzQBEgzBYAAQBKAQAzBFQAzBEABBYQgSBKhEAzQhEAzhYAAQhKgQgzhFQg0hEAAhZg");
	this.shape_74.setTransform(412.6,183.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0A0061").s().p("AidB8Qg0hEAAhZQARhJBFgzQBEgzBYAAQBKAQAzBFQAzBEABBYQgSBJhEA0QhEAzhYAAQhKgQgzhFg");
	this.shape_75.setTransform(412.6,183.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#F807F8").ss(10,1,1).p("AjEgQQAIhLA9g1QA9g0BSgBQBMAKA0A8QA1A9AABSQgIBMg+A0Qg9A2hRAAQhMgJg1g9Qg0g+AAhSg");
	this.shape_76.setTransform(421.1,182.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#050063").s().p("AiQB/Qg0g9AAhSQAIhLA9g0QA9g1BSgBQBMAJA0A+QA1A8AABSQgIBMg+A0Qg9A1hRABQhMgJg1g+g");
	this.shape_77.setTransform(421.1,182.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FF00FF").ss(10,1,1).p("AC5AAQAABMg2A2Qg3A3hMAAQhLAAg3g3Qg2g2AAhMQAAhMA2g2QA3g2BLAAQBMAAA3A2QA2A2AABMg");
	this.shape_78.setTransform(429.5,181.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000066").s().p("AiCCCQg2g1AAhNQAAhLA2g3QA3g2BLAAQBNAAA1A2QA3A3AABLQAABNg3A1Qg1A3hNAAQhLAAg3g3g");
	this.shape_79.setTransform(429.5,181.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FB08F7").ss(9.9,1,1).p("AjGAFQABhQA1g9QA8g5BQgFQBRABA8A1QA5A8AFBQQgBBRg2A8Qg6A5hRAFQhRgBg8g2Qg5g6gFhRg");
	this.shape_80.setTransform(415.8,187);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#020062").s().p("AiICQQg5g6gFhRQABhQA1g9QA8g5BQgFQBRABA8A1QA5A8AFBQQgBBRg2A8Qg6A5hRAFQhRgBg8g2g");
	this.shape_81.setTransform(415.8,187);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#F710EF").ss(9.9,1,1).p("AjUAKQAChWA0hDQBAg7BUgKQBXACBCA1QA8BAAKBUQgCBWg1BCQhAA8hUAKQhWgChDg1Qg7g/gKhVg");
	this.shape_82.setTransform(402.1,192.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#04005E").s().p("AiPCeQg7g/gKhVQAChWA0hDQBAg7BUgKQBXACBCA1QA8BAAKBUQgCBWg1BCQhAA8hUAKQhWgChDg1g");
	this.shape_83.setTransform(402.1,192.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#F318E7").ss(9.8,1,1).p("AjjAQQAEhcA0hJQBEg/BYgPQBcAEBIA0QBABEAPBYQgFBcg0BJQhEA/hYAPQhbgEhJg0Qg/hEgPhYg");
	this.shape_84.setTransform(388.4,197.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#06005A").s().p("AiVCsQg+hEgQhYQAFhcAzhJQBEg/BZgPQBbAEBIA0QBABEAPBYQgFBcgzBJQhEA/hZAPQhbgEhJg0g");
	this.shape_85.setTransform(388.4,197.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#EF21DE").ss(9.7,1,1).p("AjxAVQAGhhAyhQQBKhBBbgUQBhAFBPAzQBCBJAUBcQgFBhg0BPQhIBChcAUQhhgGhPgzQhChJgUhbg");
	this.shape_86.setTransform(374.6,203.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#080056").s().p("AibC5QhChJgUhbQAGhhAyhQQBKhBBbgUQBhAFBPAzQBCBJAUBcQgFBhg0BPQhIBChcAUQhhgGhPgzg");
	this.shape_87.setTransform(374.6,203.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#EB29D6").ss(9.6,1,1).p("Aj/AaQAHhmAyhWQBOhEBfgZQBnAHBVAyQBEBNAZBgQgGBmgyBWQhOBEhgAZQhmgHhWgyQhEhNgZhgg");
	this.shape_88.setTransform(360.9,208.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#0A0052").s().p("AiiDHQhEhOgZhfQAHhmAxhWQBOhEBggZQBmAGBWAzQBEBNAZBgQgHBmgxBWQhOBEhgAZQhmgHhWgyg");
	this.shape_89.setTransform(360.9,208.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#E731CE").ss(9.6,1,1).p("AkNAfQAHhrAyhcQBShHBkgeQBrAIBcAxQBHBTAeBjQgHBrgyBcQhSBHhkAeQhsgIhbgxQhHhSgehkg");
	this.shape_90.setTransform(347.2,214.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#0C004E").s().p("AioDVQhHhSgehkQAHhrAyhcQBShHBkgeQBrAIBbAxQBIBTAeBjQgIBrgxBcQhSBHhkAeQhrgIhcgxg");
	this.shape_91.setTransform(347.2,214.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#E239C6").ss(9.5,1,1).p("AkbAkQAIhwAxhiQBXhKBogjQBwAJBiAwQBKBXAjBoQgJBxgxBhQhXBKhnAjQhxgJhigwQhJhXgjhog");
	this.shape_92.setTransform(333.5,219.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#0E0049").s().p("AiuDjQhLhXgjhoQAKhwAwhiQBXhKBogjQBwAJBiAwQBLBXAjBoQgKBxgxBhQhWBKhoAjQhwgJhigwg");
	this.shape_93.setTransform(333.5,219.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#DE41BE").ss(9.4,1,1).p("AkqAqQALh3AvhoQBchNBrgoQB2ALBoAvQBOBcAoBrQgLB3gwBnQhbBOhrAoQh3gLhogwQhNhbgohrg");
	this.shape_94.setTransform(319.8,225.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#100045").s().p("Ai1DwQhNhbgohrQALh3AvhoQBchNBrgoQB2ALBoAvQBOBcAoBrQgLB3gwBnQhbBOhrAoQh3gLhogwg");
	this.shape_95.setTransform(319.8,225.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#DA49B6").ss(9.3,1,1).p("Ak4AvQAMh8AuhuQBhhQBvgtQB7AMBvAuQBQBhAtBvQgMB8gvBuQhhBQhuAtQh8gMhugvQhQhggthvg");
	this.shape_96.setTransform(306.1,230.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#120041").s().p("Ai7D+QhQhggthvQAMh8AuhuQBhhQBvgtQB7AMBvAuQBQBhAtBvQgMB8gvBuQhhBQhuAtQh8gMhugvg");
	this.shape_97.setTransform(306.1,230.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#D652AD").ss(9.2,1,1).p("AlGA0QANiBAth0QBmhTBygyQCCANB0AuQBTBmAyByQgOCBgtB0QhmBThyAyQiBgNh1guQhShlgyhzg");
	this.shape_98.setTransform(292.4,236);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#14003D").s().p("AjCEMQhShmgyhyQANiBAth0QBmhTBzgyQCBANB0AuQBTBlAyBzQgNCBguB0QhlBThzAyQiBgNh1gug");
	this.shape_99.setTransform(292.4,236);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#D25AA5").ss(9.2,1,1).p("AlUA5QAOiGAth7QBqhVB3g3QCGAOB6AtQBWBqA3B3QgOCGguB7QhpBVh3A3QiGgOh7gtQhVhqg3h3g");
	this.shape_100.setTransform(278.6,241.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#160039").s().p("AjIEaQhVhqg3h3QAOiGAth7QBqhVB3g3QCGAOB6AtQBWBqA3B3QgOCGguB7QhpBVh3A3QiGgOh7gtg");
	this.shape_101.setTransform(278.6,241.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#CE629D").ss(9.1,1,1).p("AliA+QAQiLAsiBQBvhYB5g8QCMAPCBAsQBZBvA8B7QgQCLgtCBQhuBYh6A8QiMgPiBgtQhYhug8h7g");
	this.shape_102.setTransform(264.9,246.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#180035").s().p("AjOEnQhYhug9h7QARiLAriBQBvhYB7g8QCLAPCBAsQBZBvA7B7QgQCLgsCBQhuBYh6A8QiMgPiBgtg");
	this.shape_103.setTransform(264.9,246.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#CA6A95").ss(9,1,1).p("AlwBEQAQiRAsiIQBzhbB+hBQCRASCHArQBbBzBBB+QgQCRgsCHQhzBch+BBQiRgSiIgrQhahzhBh+g");
	this.shape_104.setTransform(251.2,252.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#1B0031").s().p("AjVE1QhbhzhAh+QARiRAqiIQB0hbB+hBQCRASCHArQBcBzBBB+QgSCRgrCHQh0Bch+BBQiRgSiHgrg");
	this.shape_105.setTransform(251.2,252.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#C6728D").ss(8.9,1,1).p("Al/BJQATiXAqiNQB4heCChGQCWATCOAqQBeB4BGCCQgTCWgqCNQh4BfiCBGQiWgTiOgrQheh3hGiCg");
	this.shape_106.setTransform(237.5,257.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#1D002D").s().p("AjbFCQheh3hGiCQATiXAqiNQB4heCChGQCWATCOAqQBeB4BGCCQgTCWgqCNQh4BfiCBGQiWgTiOgrg");
	this.shape_107.setTransform(237.5,257.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#C27A85").ss(8.9,1,1).p("AmNBOQAUibApiUQB9hhCGhLQCbAUCUApQBhB9BLCGQgTCcgrCTQh8BhiGBLQibgUiVgpQhgh9hLiGg");
	this.shape_108.setTransform(223.8,263.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#1F0029").s().p("AjiFRQhgh9hLiGQAUicApiUQB+hgCFhLQCbAUCUApQBhB9BLCGQgTCcgrCTQh8BhiGBLQicgUiUgpg");
	this.shape_109.setTransform(223.8,263.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#BE837C").ss(8.8,1,1).p("AmbBTQAVihApiaQCBhjCKhQQChAVCZApQBkCBBQCKQgVChgpCZQiBBkiKBQQihgViagpQhjiBhQiKg");
	this.shape_110.setTransform(210,268.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#210025").s().p("AjoFeQhjiBhQiKQAVihApiaQCBhjCKhQQChAVCZApQBkCBBQCKQgVChgpCZQiBBkiKBQQihgViagpg");
	this.shape_111.setTransform(210,268.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#BA8B74").ss(8.7,1,1).p("AmpBYQAWimAoigQCGhmCNhVQCnAWCgAoQBmCGBVCOQgWCmgoCgQiGBmiOBVQimgWiggoQhmiGhViOg");
	this.shape_112.setTransform(196.3,274);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#230021").s().p("AjuFsQhmiGhViOQAWimAoigQCGhmCNhVQCnAWCgAoQBmCGBVCOQgWCmgoCgQiGBmiOBVQimgWiggog");
	this.shape_113.setTransform(196.3,274);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#B6936C").ss(8.6,1,1).p("Am4BeQAYisAninQCLhpCRhaQCsAYCmAnQBpCLBaCRQgXCsgoCmQiKBqiSBaQirgYingoQhpiKhaiRg");
	this.shape_114.setTransform(182.6,279.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#25001D").s().p("Aj1F5QhpiKhaiRQAYisAninQCMhpCQhaQCsAYCmAnQBqCLBZCRQgXCsgoCmQiKBqiRBaQisgYingog");
	this.shape_115.setTransform(182.6,279.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#B19B64").ss(8.5,1,1).p("AnGBjQAZixAmitQCQhsCVhfQCxAZCtAmQBsCQBfCVQgaCxgmCsQiPBtiVBfQixgZitgnQhsiPhfiVg");
	this.shape_116.setTransform(168.9,284.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#270018").s().p("Aj7GHQhsiPhfiVQAaixAmitQCPhsCVhfQCxAZCsAmQBtCQBfCVQgaCxgmCsQiPBtiVBfQixgZitgng");
	this.shape_117.setTransform(168.9,284.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#ADA35C").ss(8.5,1,1).p("AnUBoQAai3AmiyQCUhvCZhkQC2AaCzAlQBvCVBkCZQgaC2gmCzQiUBviZBkQi2gaizgmQhviUhkiZg");
	this.shape_118.setTransform(155.2,290.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#290014").s().p("AkCGVQhuiUhkiZQAai2AmizQCUhvCYhkQC2AbC0AlQBvCUBkCZQgaC2gmCyQiVBwiYBkQi3gbizglg");
	this.shape_119.setTransform(155.2,290.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#A9AB54").ss(8.4,1,1).p("AniBtQAbi7Ali5QCZhyCchpQC8AcC5AkQByCZBpCdQgcC8gkC4QiZByidBpQi8gbi5glQhxiZhpidg");
	this.shape_120.setTransform(141.5,295.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#2B0010").s().p("AkIGjQhxiZhpidQAbi7Ali5QCZhyCchpQC8AcC5AkQByCZBpCdQgcC8gkC4QiZByidBpQi8gbi5glg");
	this.shape_121.setTransform(141.5,295.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#A5B44B").ss(8.3,1,1).p("AnxByQAejBAji/QCeh0CghuQDBAdDAAjQB1CeBuChQgeDBgjC+QieB1ihBuQjBgdi/gkQh1idhuihg");
	this.shape_122.setTransform(127.8,301.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#2D000C").s().p("AkOGwQh0idhuihQAdjBAji/QCeh0CghuQDBAdDAAjQB1CeBtChQgcDBgkC+QieB1igBuQjBgdjAgkg");
	this.shape_123.setTransform(127.8,301.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#A1BC43").ss(8.2,1,1).p("An/B4QAfjHAjjFQCih4CkhzQDGAfDGAiQB4CjBzCkQgfDHgjDFQiiB4ikBzQjHgfjFgjQh4iihzikg");
	this.shape_124.setTransform(114,306.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#2F0008").s().p("AkUG+Qh4iihzikQAfjHAjjFQCih4CkhzQDGAfDGAiQB4CjBzCkQgfDHgjDFQiiB4ikBzQjHgfjFgjg");
	this.shape_125.setTransform(114,306.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#9DC43B").ss(8.2,1,1).p("AoNB9QAgjMAijMQCnh6Coh4QDLAgDMAiQB7CnB4CoQggDMgiDLQinB7ioB4QjMggjMgiQh6inh4iog");
	this.shape_126.setTransform(100.3,312.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#310004").s().p("AkbHMQh6inh4ioQAgjMAijMQCnh6Coh4QDLAgDMAiQB7CnB4CoQggDMgiDLQinB7ioB4QjMggjMgig");
	this.shape_127.setTransform(100.3,312.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#99CC33").ss(8.1,1,1).p("ACCIcImjhDIj6lXIBCmjIFYj6IGjBCID6FYIhDGig");
	this.shape_128.setTransform(86.6,317.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#330000").s().p("AkhHZIj6lXIBCmjIFXj6IGkBCID6FYIhDGiIlXD7g");
	this.shape_129.setTransform(86.6,317.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(302.1,339.1,145,157);
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