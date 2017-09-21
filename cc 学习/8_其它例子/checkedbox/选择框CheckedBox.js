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


(lib.CheckBox_upIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.5,-1,-3.2).s().p("Ag7AgIAAhAIB3AAIAABAg");
	this.shape.setTransform(7,4.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fill
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-1,7,-1,-6.6).s().p("Ag7A8IAAh3IB3AAIAAB3g");
	this.shape_1.setTransform(7,7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// border
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],1.5,5.9,1.5,-7).s().p("AhFBGIAAiLICLAAIAACLgAg7A8IB3AAIAAh3Ih3AAg");
	this.shape_2.setTransform(7,7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.CheckBox_upIcon, new cjs.Rectangle(0,0,14,14), null);


(lib.CheckBox_selectedIcon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbAtIgWgzIAUgBIAPAeIAqhDIAWAAIgMAOIgqBLg");
	this.shape.setTransform(5,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CheckBox_selectedIcon, new cjs.Rectangle(0,0,10,9), null);


(lib.选择按钮select = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层 1
	this.instance = new lib.CheckBox_upIcon();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,-0.1,1,1,0,0,0,7,7);

	this.instance_1 = new lib.CheckBox_selectedIcon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,-0.1,1,1,0,0,0,5,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.1,-7.1,14,14);


// stage content:
(lib.选择框CheckedBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//选择 框对勾 click 1-10
		let selectArr = [this.select1,this.select2,this.select3,this.select4,this.select5,this.select6,this.select7,this.select8,this.select9,this.select10];
		for(let i = 1;i<=5;i++){
			select(selectArr[i-1],i);
		}
		
		function select(obj,num){
			obj.addEventListener("click", fl_MouseClickHandler_num.bind(this));
			let selectNum = 1
			function fl_MouseClickHandler_num(){
				selectNum++;
				if(selectNum%2 == 0){
					obj.gotoAndStop(1);
					console.log(num); //返回 一个数值
				}else{
					obj.gotoAndPlay(0);
				
				}
			};
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#747474").s().p("AAUBKIAAgXIgkAAIAAgSIAkAAIAAgLIgdAAIAAgSIAdAAIAAgKIAVAAIAAAKIAfAAIAAASIgfAAIAAALIAjAAIAAASIgjAAIAAAXgAg1BKIAAgsQgIARgJAMIgHgYQANgQAIgTIgTAAIAAgSIAWAAIAAgiIgVABIgDgRQAegCAfgDIAEAQIgWADIAAAbQAGgMAFgNIAOAGIgOAZIgLgFIAAAIIAUAAIAAASIgUAAIAAADIAWARIgMAPIgKgLIAAAygAgNgUQAOgEALgFQgIgIgGgKIAKgIIgQAAIAAgRIBNAAIAAATQgHAOgNALQAMAEAQACIgIATQgWgEgQgJQgPAIgTAGIgKgSgAAegmQAMgHAGgKIgkAAQAJALAJAGgAhNgtIAMgFIALAXIgOAGIgJgYg");
	this.shape.setTransform(506,184.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#747474").s().p("AhKBHQAIgYAJglQALAFAKADQgIAigJAZIgVgGgAgkBHIAAgVIAvAAIAAgiIgjAAIAAgUIAjAAIAAgbIgnAAIAAgUIArAAIgKgTIAXgGIAJAZIAkAAIAAAUIgnAAIAAAbIAiAAIAAAUIgiAAIAAAiIAsAAIAAAVgAhNgRIANgQIAfAZIgOAPIgegYgAhHg5IANgOIAbAWIgOAPIgagXg");
	this.shape_1.setTransform(490,184.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#747474").s().p("AgFA3IAYABQAMAAAAgMIAAgsIguAAIAAgUIBdAAIAAAUIgZAAIAAAxQABANgHAHQgFAGgLABIgfABIgFgWgAg2BMIAAg5IgPANIgIgVQAYgUASgaIASALIgOAUIAABQgAhMgoQAagUANgQIASAOQgQATgcAVIgNgSgAgKgtIAAgUIBRAAIAAAUg");
	this.shape_2.setTransform(474,184.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#747474").s().p("AhMA1IATgPIAAgmIgSAAIAAgVIAnAAIAAA+QANAMAUAAIAVAAIA7AAIgHAVIg2gBQgaAAgIgBQgJgBgHgEQgIgEgFgGIgVAUgAgeAcQAXgJAPgMIgdgYIANgOIAfAYQAKgMADgOIhBAAIAAgTIAnAAIgHgSIAXgGIAJAYIAnAAIAAATIgPAAQgGAWgNARIAfAYIgSASIgcgaQgSAQgYAKIgNgUgAhHhAIASgLIAUAeIgTAMIgTgfg");
	this.shape_3.setTransform(458,184.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#747474").s().p("AgXBKQAZghAAgpQAAgngZgiIAUAAQAbAgAAApQAAAsgbAeg");
	this.shape_4.setTransform(446.3,185.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#747474").s().p("AADBKQgageAAgsQAAgpAaggIAVAAQgZAhAAAoQAAApAZAhg");
	this.shape_5.setTransform(441.2,185.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#747474").s().p("AgkA7IAAgVQAOAIANAAQANAAAIgHQAHgIAAgMIAAgHIAAAAQgJAOgRAAQgRAAgKgMQgJgLAAgSQAAgWAKgNQALgOASAAQAPAAAIANIAAAAIAAgKIAZAAIAABLQAAAYgNANQgOAOgZAAQgRgBgLgFgAgMglQgGAHAAAOQAAAKAFAHQAFAFAIAAQAJAAAFgGQAFgFAAgLIAAgHQAAgKgFgFQgFgGgIAAQgIAAgFAHg");
	this.shape_6.setTransform(431.9,187.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#747474").s().p("AghAhQgMgMAAgVQAAgUAMgMQANgMAVAAQAVAAAMAMQAMAMAAAUQAAAUgMANQgNAMgVAAQgVAAgMgMgAgOgSQgGAHAAALQAAAaAUAAQAUAAAAgaQAAgZgUAAQgJAAgFAHg");
	this.shape_7.setTransform(421.6,185.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#747474").s().p("AgMBAIAAh/IAZAAIAAB/g");
	this.shape_8.setTransform(414,183.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#747474").s().p("AgKAKQgEgEAAgGQAAgFAFgEQAEgDAFAAQAGAAAFADQAEAEAAAFQAAAGgEAEQgFADgGAAQgFAAgFgDg");
	this.shape_9.setTransform(409.3,188.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#747474").s().p("AgcAiQgMgMAAgVQAAgTAMgNQAMgNASAAQASAAALALQAKALAAATIAAAKIg4AAQABAUAWAAQAPAAALgHIAAATQgMAGgTAAQgUAAgLgLgAgJgWQgFAGgBAIIAgAAQAAgTgPAAQgGAAgFAFg");
	this.shape_10.setTransform(402.5,185.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#747474").s().p("AgMBAIAAh/IAZAAIAAB/g");
	this.shape_11.setTransform(395.4,183.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#747474").s().p("AghAhQgMgMAAgVQAAgUAMgMQANgMAVAAQAVAAAMAMQAMAMAAAUQAAAUgMANQgNAMgVAAQgVAAgMgMgAgOgSQgGAHAAALQAAAaAUAAQAUAAAAgaQAAgZgUAAQgJAAgFAHg");
	this.shape_12.setTransform(387.8,185.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#747474").s().p("AggApIAAgVQANAIANAAQAOAAAAgIQAAgGgLgEQgQgFgHgFQgGgHAAgKQAAgNALgHQAKgHAQAAQAMAAALADIAAAUQgKgGgMAAQgGAAgDACQgEACAAAEQAAAGAKAEQAMADAGAEQAGACADAFQADAFAAAHQAAAOgLAHQgLAHgRAAQgOAAgMgEg");
	this.shape_13.setTransform(378.8,185.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#747474").s().p("AAQAsIAAgvQAAgVgPAAQgGAAgFAGQgFAFAAAJIAAAwIgZAAIAAhVIAZAAIAAAOIAAAAQAKgQARAAQAdAAAAAjIAAA0g");
	this.shape_14.setTransform(369.5,185.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#747474").s().p("AghAhQgMgMAAgVQAAgUAMgMQANgMAVAAQAVAAAMAMQAMAMAAAUQAAAUgMANQgNAMgVAAQgVAAgMgMgAgOgSQgGAHAAALQAAAaAUAAQAUAAAAgaQAAgZgUAAQgJAAgFAHg");
	this.shape_15.setTransform(359,185.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#747474").s().p("AgWAhQgMgMAAgTQAAgVANgNQANgMAVAAQAOAAAIAEIAAAVQgJgGgKAAQgLAAgHAHQgGAHgBALQAAAMAHAHQAFAHAMAAQAKAAAKgGIAAAUQgKAFgQAAQgTAAgMgMg");
	this.shape_16.setTransform(349.7,185.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#747474").s().p("AgLBOIAAgzIgjAAIAAALIgXAAIAAhXIA6AAIAAgcIAXAAIAAAcIA6AAIAABXIgXAAIAAgLIgjAAIAAAzgAAMAGIAjAAIAAghIgjAAgAguAGIAjAAIAAghIgjAAg");
	this.shape_17.setTransform(328,184.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#747474").s().p("AASBIIgDgWIAcABQAGAAACgFIACgmIg3AAIAAgNIACgoIAVAAIgEAiIAYAAIADgoIgwAAIAAgUIBHAAIgGA8IAOAAIgDA+QgBAKgGAFQgGAGgLAAgAgfBFIAAgMIgKAAIAAAMIgUAAIAAgyIgDAEIgKgWQAOgUAHgfIgRAAIAAgTIA9AAIAAATIgWAAQgEAQgGAOIAeAAIAABZgAgpAnIAKAAIAAgnIgKAAgAgHAoIAAgTIAyAAIAAATg");
	this.shape_18.setTransform(311.7,184.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#747474").s().p("AAEgJIgfAEIgDgUIAfgEIgCguIAWAAQAAAXABAVIAzgGIACATIgzAHQAGAlAIAOQAIAOAEAAIADgBIADgKIADgRQAJAGAKAEQgDAUgGAKQgFALgMAAQgmAAgKhWgAg4BMIAAhMIgPATIgGgcQAWgdANgmIAVAGQgGASgIARIAABvgAAdg+IAMgNQAPAKANALIgPAPQgNgOgMgJg");
	this.shape_19.setTransform(296,184.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#747474").s().p("AgOAVIAJgpIAUAAIgNApg");
	this.shape_20.setTransform(279.7,190.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#747474").s().p("Ag/BOIAAhIIgJAOIgFgcQAPgeALgnIAVAGQgGATgHARIAABxgAgmBJIAAgRIAMAAIAAhcIAjAAIAAgJIgnAAIAAgSIAnAAIAAgLIAVAAIAAALIAtAAIAAASIgtAAIAAAJIAlAAIAABcIALAAIAAARgAgHA4IA3AAIAAgIIg3AAgAgHAhIA3AAIAAgIIg3AAgAgHAJIA3AAIAAgIIg3AAgAgHgNIA3AAIAAgHIg3AAg");
	this.shape_21.setTransform(264,184.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#747474").s().p("AgCA9IgFAJIgVgLQgRALgYAFIgIgTQAQgCANgFIgXgJQAFgIAEgIIgNAAIAAgQIAVAAIAEgLIAJABIAAgPQgMAMgRAJQgDgJgEgIQAPgGANgLIgYAAIAAgQIAMAAQgEgIgHgJIAOgJIANASIgOAIIASAAIAAgeIAUAAIAAAeIAQAAIgNgIQAIgJAFgKIAOAJQgFAJgHAJIAIAAIAAAQIgaAAIAAALIAFgHIASAKQAMgXAKgmIAVACIgHAXIAoAAIAAATIgHAAQgDApgOAaQAKAMAOAIQgFAHgIAOQgOgJgKgNQgNAPgRAKIgNgRgAghAIIAjAAIAAAPQgFANgJAJIAPAHIgDAFQARgJAMgPQgIgPgEgTIgFAJIgJgMIgDAGIgVgNIAAALIgIAAIgEAIgAguAgIAQAGQAHgGAFgIIgYAAgAAegcQADAaAIAQQAJgTACgcIgUAAIgCAFg");
	this.shape_22.setTransform(248,184.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#747474").s().p("AhNA6IAPgQIAAgsIgNAAIAAgUIAhAAIAABCQALANAXgBQAvABAngCIgGATIhYgBQgXAAgMgPQgEAFgNAPgAAHA1IAAgcQgLAOgTALIgNgPQAVgJANgLIgfAAIAFgqIAjAAIAAgLIgoAAIAAgPIAZAAIgNgNIAPgLQAIAHAJALIgHAGIAWAAIANgYIAUAJIgLAPIATAAIAAAqIgoAAIAAALIAuAAQgBAegDAFQgCAEgFAEQgEADgZAAQgBgJgDgJIARABQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAgBQAAAAAAgBIABgIIgaAAIAAAmgAgMAAIATAAIAAgLIgSAAgAAbgbIAUAAIAAgLIgUAAgAhKhBIARgLQAKAMALAPIgSAMIgUgcg");
	this.shape_23.setTransform(232,184.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#747474").s().p("AgVAvIALgQIAfALIAUgTIg6AAIAAgRIAEgNIgTAAIAAgSIAZAAIAEgOIgVAAIAAgSIAYAAIAFgTIAXAAIgEATIAwAAIAAASIg1AAIgEAOIA/AAIAAASIhEAAIgFAMIBCAAIAAARIgdAdIAUAIIgMATQgcgNgrgSgAg7BNIAAhJIgNAWIgFgcQAUgfALgsIAVAFQgGATgIARIAABxg");
	this.shape_24.setTransform(216,184.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#747474").s().p("AgDAwIAZABQANgBAAgMIAAhVIhuAAIAAgWICXAAIAAAWIgRAAIAABfQAAAKgFAGQgEAFgIACQgJACgfAAIgFgXgAg7AqIAAhLIBJAAIAABBIgzAAIAAAKgAglAOIAeAAIAAgdIgeAAg");
	this.shape_25.setTransform(200,184.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#747474").s().p("AgPAVIAJgpIAWAAIgOApg");
	this.shape_26.setTransform(183.7,190.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#747474").s().p("AAXA4IATAAQALABAAgLIAAhTIg3AAIAABxIgTAAIAAiFIAZAAIAFgTIAXADIgHAQIAuAAIAABvQAAAIgDAGQgEAGgFABQgHACgZAAIgEgVgAhHA9IAAh6IArAAIAAB1IgRAAIAAgKIgIAAIAAAPgAg1AbIAIAAIAAhEIgIAAgAAEA0IAAhNIApAAIAABCIgaAAIAAALgAATAWIAKAAIAAgcIgKAAg");
	this.shape_27.setTransform(168,184.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#747474").s().p("AALA9IgHAHIgRgUIALgKIARARQAagSAWgZIAQAQQgZAbgeAWIgNgQgAgxBKIgDgPIgPAPIgLgNQANgKAKgNIANAKIgJAKIAIABQAHAAAAgJIAAgMIgeAAIAAgiIBKAAIAAAiIgaAAIAAATQAAAHgDAEQgDAEgEABIgLABIgKAAgAgxAZIAoAAIAAgIIgoAAgAAOAEQAagPAYgYIAPAPQgYAWgdAVIgMgTgAhMgBIAAgPIAmAAIgCgGIgdAAIAAgwIBPAAIAAAwIgeAAIABAGIAmAAIAAAPgAg0giIAuAAIAAgHIguAAgAg0g0IAuAAIAAgGIguAAgAAOgsQAZgOAUgSIAOAOQgYAVgYAOIgLgRg");
	this.shape_28.setTransform(152,184.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#747474").s().p("AgLBIIAAhKQgUAYgeAVIgQgUQAxggATgpIg9AAIAAgVICOAAIAAAVIg4AAQgFANgHAMIAIAAIAAASIAPgOIAzAtIgSASQgUgXgcgZIAABOg");
	this.shape_29.setTransform(136,185);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#747474").s().p("AhMBFIAAgUIBoAAIABgRIhYAAIALhQIgXAAIAAgUICQAAIAAAUIhiAAIgCAQIBUAAIgGBRIAZAAIAAAUgAgiAMIBAAAIACgYIg+AAg");
	this.shape_30.setTransform(120,184.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#747474").s().p("AgPAVIAJgpIAWAAIgOApg");
	this.shape_31.setTransform(103.7,190.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#747474").s().p("Ag+A/QAEgEAAgJIAAgcIgSAAIAAgSIASAAIAAgPIgGAAIgGAKIgGgZQALgVAGgeIAUADIgFARIAZAAIAAASIgfAAIgEAKIAgAAIAAASIgQAAIAAAPIASAAIAAASIgSAAIAAAYIAQgKIACAPIARAAIACgrIgPAAIAAgTIAQAAIABglIgPAAIAAgTIBWAAIgFB2IAKAAIAAAUIhhAAIAAgOQgaAQgGAFgAARAzIAdAAIACgrIgcAAgAAVgLIAcAAIABglIgcAAg");
	this.shape_32.setTransform(87.9,184.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#747474").s().p("AggA6QAagEAQgKIgcgPQAGgMAGgOIgSAAIAAgSIAYAAIAHgTIAUAFIgFAOIA4AAIAAASIgPAAQgFAXgNAQIAhASIgNASIgjgWQgUAQgeAGQgEgKgIgKgAAGAWIAUAKQAMgMADgRIgaAAIgJATgAhMA3IAJABQAGAAABgCQABgBAAgFIAAgaIgOAEIgEgWIASgDIAAgcIgPAAIAAgUIAPAAIAAgdIAVAAIAAAdIAMAAIAAAUIgMAAIAAAXIAKgCQAAALABAJIgLADIAAAnQAAAFgCAEQgBAEgDACIgGAEIgVABIgFgVgAA1gZIAAgPIg1AAIAAAOIgWAAIAAghIAjAAIgFgOIAXgEIAGASIAlAAIAAAig");
	this.shape_33.setTransform(72,184.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#747474").s().p("AANBMIAAgZIgrAAIAAgSIArAAIAAgLIgjAAIAAgRIAjAAIAAgKIAVAAIAAAKIAlAAIAAARIglAAIAAALIAqAAIAAASIgqAAIAAAZgAhMA2IAMABQAFAAAAgHIAAgdIgQADIgCgWIASgBIAAgcIgRAAIAAgUIARAAIAAgaIAVAAIAAAaIAOAAIAAAUIgOAAIAAAYIAPgDIgCAUIgNACIAAApQAAAJgEAFQgDAFgIAAIgSABIgFgVgAgagTQASgDANgGQgJgIgJgLIALgGIgSAAIAAgRIBYAAIAAARQgKAOgPAMQAQAFASACIgIATQgagFgTgKQgTAKgXAGIgIgTgAAYgkQANgIAHgJIgpAAQAKAKALAHg");
	this.shape_34.setTransform(56,184.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#747474").s().p("AhMA2IAQgOIAAgnIgPAAIAAgTIAjAAIAAA6QAMAOAbAAIAeAAIAwgBIgHAVIhGgBQgiABgPgQIgSATgAggAiQAIgFAGgHQAGgHABgOIgWAAIAAgSIAtAAIAAgRIgVAAIgGAOIgRgJQAJgSAHgYIARAGIgDAMIAOAAIAAgXIAUAAIAAAXIAkAAIAAATIgkAAIAAARIAqAAIAAASIgiAAIAAAUQAAAGAFAAIACAAQAEAAABgCQACgEABgPIASAHQgCATgCAEQgDAFgEADQgFADgHgBIgLAAQgTAAAAgUIAAgZIgMAAQgBAUgGAKQgGAKgNAHQgFgHgJgHgAhHg/IARgKQAMAOAJAOIgSAMIgUgeg");
	this.shape_35.setTransform(40.1,184.5);

	this.select5 = new lib.选择按钮select();
	this.select5.parent = this;
	this.select5.setTransform(229.1,93.1,1,1,0,0,0,-0.1,-0.1);

	this.select3 = new lib.选择按钮select();
	this.select3.parent = this;
	this.select3.setTransform(163.1,87.1,1,1,0,0,0,-0.1,-0.1);

	this.select4 = new lib.选择按钮select();
	this.select4.parent = this;
	this.select4.setTransform(196.1,87.1,1,1,0,0,0,-0.1,-0.1);

	this.select2 = new lib.选择按钮select();
	this.select2.parent = this;
	this.select2.setTransform(131.1,87.1,1,1,0,0,0,-0.1,-0.1);

	this.select1 = new lib.选择按钮select();
	this.select1.parent = this;
	this.select1.setTransform(100.1,87.1,1,1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.select1},{t:this.select2},{t:this.select4},{t:this.select3},{t:this.select5},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(305,280.1,486.2,116.2);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;