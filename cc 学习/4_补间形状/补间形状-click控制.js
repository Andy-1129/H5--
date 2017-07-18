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



(lib.btn02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAmCPIAAgIQAnAIARAAQASAAADgbQAEgaAEiuIhbAAQgcAtgeAgIgFgEQAggyAPgnQAQgnAIgnIAiAVQgMAHgbA4IBUAAIASgRIAXAYIgOALQgDC1gGAZQgFAYgKAJQgKAKgWAIQgIgZgsgNgAieAfQAAhIgBhHIAXANIAQAAQAPg0ACgdIAiATQgPAIgbA2IA0AAIAPgPIAYAXIgQAMQAAC1ACA4IgWANIAAghIhRAAIAAAbIgWAMIABiSgAiJCBIBRAAIAAhtIhRAAgAiJAKIBRAAIAAhjIhRAAgAAkAoQgGgfgWgdIAEgFQAlAbAJATQAIATgMAQQgEAFgEAAQgHAAgDgVg");
	this.shape.setTransform(134,33.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgjBZQgGgCgEAAQgFAAgCAFIgHAAIAAhAIAHAAQAFAbAPAOQAQAOASAAQANAAAJgIQAIgIAAgLQAAgNgJgJQgKgKgbgOQgcgNgJgLQgJgLAAgRQAAgWAQgPQAOgPAYAAQAKAAAPAFIANACIAFgBQACgBACgFIAGAAIAAA9IgGAAQgHgdgMgKQgMgKgRAAQgNAAgIAHQgJAHAAAJQAAALAGAIQAGAIATAJIAbANQAoATAAAfQAAAZgSAPQgTAPgWAAQgQAAgVgGg");
	this.shape_1.setTransform(105.6,39.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAgCNIAAgZQgNANgNAHQgLAFgPAAQgdAAgWgYQgWgZAAgmQAAgnAYgeQAYghAnAAQAWABAQAPIAAgiQAAgegCgHQgBgHgDgDQgEgCgEAAQgFAAgJADIgCgHIA1gVIAJAAIAADNQAAAgABAGQACAHADADQADADAFAAQAFAAAJgEIACAIIg1AVgAgngUQgSAUAAAnQAAAnARAVQARAVAVAAQARAAARgSIAAhcQgCgNgFgKQgGgLgKgGQgJgFgJAAQgRAAgNAPg");
	this.shape_2.setTransform(88.3,34.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdCIQgRgGgQgLIAAi5QAAgegBgHQgCgHgEgDQgCgCgFAAQgGAAgHADIgEgHIA2gVIAJAAIAACBQAagkAdAAQAcAAAUAYQAVAXgBAoQAAAvgfAeQgbAYghAAQgPABgQgGgAgKgOQgIAEgMALIAABrQAKAJALAFQAJAFALAAQASAAAQgTQAPgUAAglQAAgjgPgRQgQgSgTgBQgKAAgKAGg");
	this.shape_3.setTransform(66.8,34.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhLB2QgOgKAAgKQAAgFACgFQADgHAKgNIAUgVQgKgGgEgFQgFgEAAgGQABgHAFgKQAFgJAVgPQgQgIgKgPQgIgOAAgSQAAgaAUgTQAUgTAfAAQAYAAAUAMIAlAAIAKABIACABQACACAAAEIgBAIIgDABIgKABIgXAAQALAOAAAWQAAAZgTARQgTASgfAAQgOAAgOgEQgIAIgDAEQgDAGAAAEQAAADADADQADADAJACIAcABQAnABAMACQATACAKALQALALAAAQQAAAWgVAUQgeAcgxAAQglAAgagRgAg5BDQgFAJABAHQAAAKALAHQATAMAkAAQAjAAARgNQARgMAAgOQgBgKgJgFQgLgEgegBQgqgBgYgDQgJAKgFAIgAgghyQgJAMAAAYQAAAfANARQALANAPAAQAOAAAKgMQAJgLAAgYQAAgfgNgRQgLgNgOAAQgOAAgLALg");
	this.shape_4.setTransform(47.8,43.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAgCNIAAgZQgNANgNAHQgLAFgPAAQgdAAgWgYQgWgZAAgmQAAgnAYgeQAYghAnAAQAWABAQAPIAAgiQAAgegCgHQgBgHgDgDQgEgCgEAAQgFAAgJADIgCgHIA1gVIAJAAIAADNQAAAgABAGQACAHADADQADADAFAAQAFAAAJgEIACAIIg1AVgAgngUQgSAUAAAnQAAAnARAVQARAVAVAAQARAAARgSIAAhcQgCgNgFgKQgGgLgKgGQgJgFgJAAQgRAAgNAPg");
	this.shape_5.setTransform(28.3,34.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgjBZQgHgCgDAAQgFAAgDAFIgGAAIAAhAIAGAAQAGAbAPAOQAQAOARAAQAOAAAJgIQAIgIAAgLQAAgNgJgJQgJgKgcgOQgcgNgJgLQgJgLAAgRQAAgWAPgPQAQgPAXAAQAKAAAPAFIANACIAFgBQACgBACgFIAGAAIAAA9IgGAAQgHgdgMgKQgLgKgSAAQgNAAgIAHQgJAHAAAJQAAALAHAIQAGAIASAJIAcANQAnATAAAfQAAAZgSAPQgTAPgXAAQgPAAgVgGg");
	this.shape_6.setTransform(10.1,39.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("Ao5kmIRzAAIAAJNIxzAAg");
	this.shape_7.setTransform(57,29.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC0000").s().p("Ao5EnIAApNIRzAAIAAJNg");
	this.shape_8.setTransform(57,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,156.3,61);


(lib.btn01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgtCwQgIgHAAgHQAAgGAEgFQAFgFAHAAQAFAAAFACQADACAKAIQAJAJAGAAQAEAAAFgEQAEgEACgIQADgJAAgcIAAh+QAAgegCgIQgBgHgDgCQgDgCgFAAQgFAAgIACIgCgHIA0gVIAJAAIAACzQAAAugUAWQgTAWgeAAQgSAAgJgGgAAUiTQgGgGAAgIQAAgIAGgGQAGgGAIAAQAIAAAGAGQAGAGAAAIQAAAIgGAGQgGAGgIAAQgIAAgGgGg");
	this.shape.setTransform(148.5,36.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhNCLIAAgHIAIAAQAIAAAGgEQAHgEACgHQACgGAAgUIAAh0IgiAAIAAgOIAiAAIAAgMQAAgbAJgSQAJgTARgLQARgMAWAAQAVAAARAOQALAIAAALQAAAGgFAGQgFAFgGAAQgEAAgFgDQgFgEgIgKQgHgLgGgEQgGgEgHAAQgJAAgGAFQgGAFgDAKQgCAKAAAqIAAANIAtAAIAAAOIgtAAIAAB0QAAAZAFAHQAGAJAMAAIARAAIAAAHg");
	this.shape_1.setTransform(138.1,32.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAMCLIAAgHQAIAAACgCQADgDAAgDQAAgFgHgKIg2hGIAAA8QAAARACAFQADAGAEACQAFADAPAAIAAAHIhbAAIAAgHQANAAAHgEQAEgCACgEQADgHAAgQIAAihQAAgfgBgHQgCgHgDgDQgDgDgFAAQgEAAgJAEIgCgHIA1gWIAJAAIAACxIAsgoQAOgOADgDQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAgBQgBgEgDgDQgDgDgIAAIAAgGIBOAAIAAAGQgQAAgKAFQgLAEgNAMIgtApIAtA6IAaAfQAJAJAHADQAFACANAAIAAAHg");
	this.shape_2.setTransform(123.2,32.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAYBXQgGgHAAgQQgaAWgHADQgLAFgMAAQgSAAgMgNQgMgMAAgVQAAgNAFgKQAIgNAUgMQAUgLAtgQIAAgHQAAgbgIgKQgJgKgPAAQgMAAgIAHQgHAGAAAJIAAALQAAAJgEAFQgFAFgHAAQgHAAgFgFQgFgFAAgJQAAgRASgOQARgOAfAAQAXAAAPAIQALAGAGANQADAIAAAaIAAA8QAAAaABAGQABAFADACQACACADAAQADAAACgBQAEgDAMgLIAAAKQgWAegUAAQgJAAgGgHgAgTAAQgPAJgHAJQgHAKAAALQAAAOAJAJQAIAJALAAQAPAAAXgTIAAhDQgcALgJAEg");
	this.shape_3.setTransform(104.7,37);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgjBZQgGgCgEAAQgFAAgCAFIgHAAIAAhAIAHAAQAFAbAPAOQAQAOASAAQANAAAJgIQAIgIAAgLQAAgNgJgJQgKgKgbgOQgcgNgJgLQgJgLAAgRQAAgWAQgPQAOgPAYAAQAKAAAPAFIANACIAFgBQACgBACgFIAGAAIAAA9IgGAAQgHgdgMgKQgMgKgRAAQgNAAgIAHQgJAHAAAJQAAALAGAIQAGAIATAJIAbANQAoATAAAfQAAAZgSAPQgTAPgWAAQgQAAgVgGg");
	this.shape_4.setTransform(87.6,37.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAKBcIAAgHIADAAQANAAAFgEQAFgEACgHIAAgTIAAhIQAAgYgGgLQgGgLgPAAQgXAAgXAZIAABdQAAASADAFQACAGAFADQAFACAPAAIAAAHIhZAAIAAgHIAEAAQAOAAAEgHQAFgHAAgUIAAhBQAAgggBgHQgCgHgDgDQgDgCgFAAQgFAAgIACIgDgGIA2gWIAIAAIAAAlQAgglAbAAQAPAAALAHQAKAHAGASQAFALAAAYIAABLQAAARACAHQADAFAEACQAFADANAAIAAAHg");
	this.shape_5.setTransform(69.6,36.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAJCLIAAgHIAFAAQAMAAAFgEQAFgEACgHIAAgTIAAg/QAAgdgDgIQgCgKgHgEQgHgFgJAAQgKAAgJAFQgKAFgPAPIAABeQAAATACAEQACAFAGADQAFADAOAAIAAAHIhYAAIAAgHQALAAAHgEQAEgCACgFQACgGABgRIAAihQAAgegCgHQgBgHgDgDQgEgCgFAAQgEAAgIADIgEgHIA2gWIAJAAIAACDQAVgYANgHQAMgGANAAQAPAAALAIQALAIAFASQAEAMAAAhIAAA/QAAARACAHQADAEAEADQAFADANAAIAAAHg");
	this.shape_6.setTransform(49.6,32.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAgCNIAAgZQgNANgNAHQgLAFgPAAQgdABgWgZQgWgZAAgmQAAgnAYgeQAYghAnAAQAWABAQAPIAAgiQAAgegCgHQgBgHgDgCQgEgDgEAAQgFAAgJADIgCgHIA1gVIAJAAIAADNQAAAgABAHQACAGADADQADADAFAAQAFAAAJgEIACAIIg1AVgAgngUQgSAUAAAnQAAAnARAVQARAVAVAAQARAAARgSIAAhcQgCgNgFgKQgGgLgKgGQgJgFgJgBQgRABgNAPg");
	this.shape_7.setTransform(30.3,32.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00FF33").s().p("As9FPIAAqdIZ7AAIAAKdg");
	this.shape_8.setTransform(83,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,166,67);


// stage content:
(lib.补间形状click控制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 在此帧处停止
		时间轴将在插入此代码的帧处停止/暂停。
		也可用于停止/暂停影片剪辑的时间轴。
		*/
		
		this.stop();
		
		this.btn01.addEventListener("click",this.play.bind(this));
		
		this.btn02.addEventListener("click",this.stop.bind(this));
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		
		this.btn01.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			alert("开始");
			// 结束您的自定义代码
		}
		
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		var clickNum = 1;
		this.btn02.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			// 开始您的自定义代码
			// 此示例代码在"输出"面板中显示"已单击鼠标"。
			//console.log("暂停");
			var result = clickNum++;
			console.log(result);
			
			// 结束您的自定义代码
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(70));

	// 图层 4
	this.btn02 = new lib.btn02();
	this.btn02.parent = this;
	this.btn02.setTransform(463.5,259.6,1,1,0,0,0,77.4,29.5);
	new cjs.ButtonHelper(this.btn02, 0, 1, 1);

	this.btn01 = new lib.btn01();
	this.btn01.parent = this;
	this.btn01.setTransform(469.1,92.4,1,1,0,0,0,83,33.5);
	new cjs.ButtonHelper(this.btn01, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn01},{t:this.btn02}]}).wait(70));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").ss(1,1,1).p("AJOAAQAAD1itCsQisCtj1AAQj0AAititQisisAAj1QAAj0CsitQCtisD0AAQD1AACsCsQCtCtAAD0g");
	this.shape.setTransform(59.5,59.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF00").s().p("AmhGhQisisAAj1QAAjzCsiuQCuisDzAAQD1AACsCsQCtCuAADzQAAD1itCsQisCtj1AAQjzAAiuitg");
	this.shape_1.setTransform(59.5,59.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF00FF").ss(1,1,1).p("ApRgTQALjsCyinQCyinD2AAQAwAAAuAGQCzAjCGCPQCmCyABD2QgLDtiyCmQiyCoj2AAQgwAAgugHQizgkiGiPQinixAAj2g");
	this.shape_2.setTransform(63.3,59.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#62F607").s().p("AhxJHQizgkiGiOQiniyAAj2QALjsCyinQCyimD2gBQAwAAAuAHQCzAiCGCQQCmCxABD2QgLDtiyCnQiyCmj2AAQgwAAgugGg");
	this.shape_3.setTransform(63.3,59.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(1,1,1).p("ApVgnQAWjjC3ihQC3ihD5AAQAxAAAuAGQCtArCBCTQChC2AAD5QgWDki3ChQi3Chj5AAQgxAAgugGQitgriCiTQigi3AAj5g");
	this.shape_4.setTransform(67.1,59.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5FED0E").s().p("AiGJHQitgriBiTQihi3AAj5QAWjjC3ihQC3ihD5AAQAxAAAuAGQCtArCBCTQCgC2ABD5QgWDki4ChQi2Chj5AAQgxAAgugGg");
	this.shape_5.setTransform(67.1,59.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF00FF").ss(1,1,1).p("ApZg7QAhjbC8ibQC8ibD8AAQAxAAAvAGQCmAzB9CXQCaC8ABD6QghDdi9CaQi7Ccj8AAQgxAAgvgGQingzh8iXQibi8AAj8g");
	this.shape_6.setTransform(70.8,59.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5BE515").s().p("AibJGQingzh8iWQibi8AAj7QAhjbC8icQC8iaD8gBQAxAAAvAHQCmAyB9CXQCaC8ABD7QghDci9CbQi7Caj8ABQgxAAgvgHg");
	this.shape_7.setTransform(70.8,59.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF00FF").ss(1,1,1).p("ApdhPQAtjSDAiWQDCiUD+AAQAyAAAvAFQCgA7B4CbQCVDBAAD+QgsDTjCCVQjACVj+AAQgzAAgvgGQigg6h4ibQiVjBAAj/g");
	this.shape_8.setTransform(74.6,59.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#58DC1C").s().p("AiwJGQigg6h4icQiVjAAAj+QAtjTDAiVQDBiVD+AAQAyAAAwAGQCgA6B3CbQCVDBABD9QgtDUjBCUQjBCWj9AAQgzAAgvgGg");
	this.shape_9.setTransform(74.6,59.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF00FF").ss(1,1,1).p("AphhiQA3jKDGiQQDHiOEAAAQAzAAAwAFQCaBCBzCfQCODGABEAQg4DMjGCOQjGCPkAAAQgzAAgwgFQiahDhzifQiPjGAAkAg");
	this.shape_10.setTransform(78.4,59.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#54D323").s().p("AjFJGQiahDhzifQiPjGAAkAQA3jKDGiQQDHiOEAAAQAzAAAwAFQCaBCBzCfQCODGABEAQg4DMjGCOQjGCPkAAAQgzAAgwgFg");
	this.shape_11.setTransform(78.4,59.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF00FF").ss(1,1,1).p("Aplh2QBCjCDLiJQDMiJEDAAQAzAAAxAFQCTBKBuCjQCJDLABEDQhDDDjLCJQjLCJkEAAQgzAAgxgFQiThLhuijQiJjLAAkDg");
	this.shape_12.setTransform(82.2,60);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#51CA2A").s().p("AjbJGQiThLhuijQiJjLAAkDQBCjCDLiJQDMiJEDAAQAzAAAxAFQCTBKBuCjQCJDLABEDQhDDDjLCJQjLCJkEAAQgzAAgxgFg");
	this.shape_13.setTransform(82.2,60);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF00FF").ss(1,1,1).p("AppiKQBOi5DQiEQDQiDEGAAQA0AAAxAFQCNBSBqCnQCCDQABEGQhOC6jQCDQjQCEkGAAQg0AAgygFQiMhThqinQiDjQAAkGg");
	this.shape_14.setTransform(85.9,60.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4DC131").s().p("AjwJGQiMhThqinQiDjQAAkGQBOi5DQiDQDQiEEGAAQA0AAAxAGQCNBSBqCmQCCDRABEFQhOC7jQCCQjQCDkGAAQg0AAgygEg");
	this.shape_15.setTransform(85.9,60.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF00FF").ss(1,1,1).p("AptidQBYiyDWh9QDVh9EJAAQA0AAAyAEQCHBbBkCqQB9DWABEIQhZCyjWB9QjVB9kIAAQg1AAgygFQiGhahlirQh9jWAAkHg");
	this.shape_16.setTransform(89.7,60.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4AB938").s().p("AkFJFQiGhahlirQh9jVAAkIQBYiyDWh9QDVh9EJAAQA0AAAyAFQCHBZBkCsQB9DVABEIQhZCyjWB9QjVB9kIAAQg1AAgygFg");
	this.shape_17.setTransform(89.7,60.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF00FF").ss(1,1,1).p("ApxixQBkipDah3QDbh3ELAAQA1AAAzAEQCABiBfCvQB3DaABELQhkCpjbB3QjaB3kLAAQg1AAgzgEQiAhihgivQh3jbAAkKg");
	this.shape_18.setTransform(93.5,60.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#46B03F").s().p("AkaJFQiAhihgivQh3jbAAkKQBkipDah3QDbh3ELAAQA1AAAzAEQCABiBfCvQB3DaABELQhkCpjbB3QjaB3kLAAQg1AAgzgEg");
	this.shape_19.setTransform(93.5,60.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF00FF").ss(1,1,1).p("Ap1jFQBvihDfhxQDghxENAAQA2AAA0AEQB6BqBbCzQBwDfAAENQhuChjgBxQjfBykOAAQg2AAgzgFQh6hqhbizQhxjfAAkNg");
	this.shape_20.setTransform(97.3,60.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#43A746").s().p("AkvJEQh6hqhaizQhyjfAAkNQBvihDfhxQDghxENAAQA2AAA0AEQB6BqBaCzQByDfgBENQhuChjgBxQjgBykNAAQg2AAgzgFg");
	this.shape_21.setTransform(97.3,60.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF00FF").ss(1,1,1).p("Ap5jZQB6iYDkhsQDlhrERAAQA2AAA0AEQBzByBWC3QBrDkABERQh6CYjlBrQjlBskQAAQg2AAg0gEQhzhzhWi3QhsjkAAkQg");
	this.shape_22.setTransform(101,60.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3F9E4D").s().p("AlEJFQhzhzhWi2QhsjlAAkQQB6iYDkhsQDlhrERAAQA2AAA0AFQBzBxBWC3QBrDkABEQQh6CZjlBrQjlBskQgBQg2AAg0gDg");
	this.shape_23.setTransform(101,60.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF00FF").ss(1,1,1).p("Ap9jtQCFiPDphmQDqhlETAAQA3AAA1AEQBtB5BRC7QBmDqAAESQiGCQjqBlQjpBmkTAAQg3AAg0gEQhth6hSi7QhljpAAkTg");
	this.shape_24.setTransform(104.8,60.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3C9554").s().p("AlZJEQhth6hSi7QhkjpgBkTQCFiPDqhmQDphlETAAQA3AAA1AEQBtB5BSC7QBkDqABESQiGCQjqBlQjpBmkTAAQg3AAg0gEg");
	this.shape_25.setTransform(104.8,60.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF00FF").ss(1,1,1).p("AqAkBQCPiHDvhfQDvhfEVAAQA3AAA2ADQBnCBBMC/QBfDvABEVQiRCIjvBfQjuBfkWAAQg3AAg2gDQhmiChMi/QhfjuAAkWg");
	this.shape_26.setTransform(108.6,60.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#388D5B").s().p("AlvJEQhmiChNi/QhfjuABkWQCPiHDuhfQDwhfEVAAQA3AAA2ADQBnCBBMC/QBfDvAAEVQiQCIjvBfQjuBfkWAAQg3AAg2gDg");
	this.shape_27.setTransform(108.6,60.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF00FF").ss(1,1,1).p("AqFkVQCbh+D0haQD0hZEYAAQA4AAA2ADQBhCJBHDDQBaD0AAEYQicB/j0BZQjzBakYAAQg4AAg2gEQhgiJhIjDQhaj0AAkYg");
	this.shape_28.setTransform(112.4,60.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#358462").s().p("AmDJDQhgiJhIjDQhaj0AAkYQCbh+D0haQD0hZEYAAQA4AAA2ADQBhCJBHDDQBaD0AAEYQicB/j0BZQjzBakYAAQg4AAg2gEg");
	this.shape_29.setTransform(112.4,60.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF00FF").ss(1,1,1).p("AqJkoQCmh2D4hUQD5hTEcAAQA4AAA3ADQBZCRBEDHQBTD4AAEbQimB3j5BTQj4BTkcAAQg4AAg3gDQhZiRhEjHQhTj4AAkbg");
	this.shape_30.setTransform(116.2,60.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#317B6A").s().p("AmYJDQhaiRhEjHQhSj4AAkbQClh2D5hUQD4hTEcAAQA4AAA3ADQBaCRBDDHQBTD4AAEbQimB3j5BTQj4BTkbAAQg5AAg2gDg");
	this.shape_31.setTransform(116.2,60.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF00FF").ss(1,1,1).p("AqNk8QCxhuD+hNQD9hOEfAAQA5AAA3ADQBUCZA+DLQBOD9AAEeQiyBuj+BNQj9BOkeAAQg5AAg4gDQhTiZg+jLQhOj9AAkeg");
	this.shape_32.setTransform(119.9,60.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2E7271").s().p("AmtJDQhTiZg/jLQhOj9AAkeQCxhuD+hNQD9hOEfAAQA5AAA4ADQBTCZA+DLQBND9AAEeQixBuj+BNQj9BOkeAAQg5AAg3gDg");
	this.shape_33.setTransform(119.9,60.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF00FF").ss(1,1,1).p("AqQlQQC7hlEDhIQEDhHEhAAQA5AAA5ACQBMChA6DPQBHECABEhQi9BlkDBIQkCBHkhAAQg5AAg5gDQhNigg5jPQhHkCAAkhg");
	this.shape_34.setTransform(123.7,61);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2A6A78").s().p("AnDJCQhMigg6jPQhHkCAAkhQC7hlEDhIQEChHEhAAQA6AAA4ACQBNChA6DPQBHECAAEhQi9BlkDBIQkBBHkiAAQg5AAg4gDg");
	this.shape_35.setTransform(123.7,61);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF00FF").ss(1,1,1).p("AqUlkQDGhcEIhCQEIhCEjAAQA6AAA6ADQBGCpA1DTQBBEGAAEkQjIBdkIBBQkHBCkjAAQg6AAg5gDQhGiog1jTQhBkHAAkkg");
	this.shape_36.setTransform(127.5,61.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#27617F").s().p("AnYJCQhGiog1jTQhBkIAAkjQDGhcEIhCQEIhCEjAAQA6AAA6ADQBGCpA1DTQBBEGAAEjQjIBdkIBCQkHBBkjAAQg6AAg5gCg");
	this.shape_37.setTransform(127.5,61.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF00FF").ss(1,1,1).p("AqZl4QDShUENg8QENg7EnAAQA6AAA5ACQBBCxAwDXQA7EMABEmQjUBUkNA8QkMA7kmAAQg7AAg5gCQhAiwgwjXQg8kNAAkmg");
	this.shape_38.setTransform(131.3,61.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#235886").s().p("AntJCQhAiwgwjXQg7kNAAkmQDRhUENg8QENg7EnAAQA6AAA6ACQA/CxAwDXQA8EMABEmQjUBUkNA8QkMA7kmAAQg6AAg6gCg");
	this.shape_39.setTransform(131.3,61.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF00FF").ss(1,1,1).p("AqcmMQDchLETg2QERg2EpAAQA7AAA7ACQA5C5AsDbQA1ERAAEoQjeBMkSA2QkRA2kpAAQg7AAg6gCQg6i5grjbQg1kRAAkpg");
	this.shape_40.setTransform(135,61.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#204F8D").s().p("AoCJCQg6i5grjbQg1kRAAkpQDchLETg2QERg2EpAAQA7AAA7ACQA5C5AsDbQA1ERAAEoQjeBMkSA2QkRA2kpAAQg7AAg6gCg");
	this.shape_41.setTransform(135,61.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF00FF").ss(1,1,1).p("AqgmgQDohDEXgwQEXgvErAAQA8AAA7ACQAzDAAnDfQAvEWAAErQjpBEkXAwQkWAvksAAQg7AAg7gCQgzjAgnjfQgvkWAAksg");
	this.shape_42.setTransform(138.8,61.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1C4694").s().p("AoXJCQgzjBgnjfQgvkWAAksQDohDEXgvQEXgwErAAQA8AAA7ACQAzDAAnDfQAvEWAAErQjpBEkXAwQkWAvksAAQg7AAg7gBg");
	this.shape_43.setTransform(138.8,61.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF00FF").ss(1,1,1).p("AqkmzQDyg8EdgpQEcgqEuAAQA8AAA8ACQAtDIAhDjQAqEbAAEuQj0A7kdAqQkbAqkuAAQg8AAg7gCQgtjIgijjQgpkbAAkug");
	this.shape_44.setTransform(142.6,61.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#193E9B").s().p("AosJBQgtjIgijjQgpkcAAktQDyg8EdgpQEcgqEuAAQA8AAA8ACQAtDIAhDjQAqEbAAEuQj0A7kdAqQkbAqkuAAQg8gBg7gBg");
	this.shape_45.setTransform(142.6,61.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FF00FF").ss(1,1,1).p("AqonHQD+gzEhgjQEhgkExAAQA9AAA8ABQAnDQAdDnQAjEhAAEwQj/AzkiAjQkgAkkwAAQg9AAg8gBQgnjQgcjnQgkkhAAkwg");
	this.shape_46.setTransform(146.3,61.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1535A2").s().p("ApBJBQgnjQgcjnQgkkhAAkwQD+gzEhgjQEhgkExAAQA9AAA8ABQAnDQAdDnQAjEhAAEwQj/AzkiAjQkgAkkwAAQg9AAg8gBg");
	this.shape_47.setTransform(146.3,61.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FF00FF").ss(1,1,1).p("AqsnbQEJgqEmgeQEmgeE0AAQA9AAA9ABQAgDYAYDrQAeEmAAEzQkKAqknAeQkmAekzAAQg9AAg9gCQggjXgXjrQgekmAAkzg");
	this.shape_48.setTransform(150.1,61.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#122CA9").s().p("ApXJAQggjXgXjrQgekmAAkzQEJgqEmgeQEmgeE0AAIB6ABQAgDYAYDrQAeEmAAEzQkKAqknAeQkmAekzAAQg9AAg9gCg");
	this.shape_49.setTransform(150.1,61.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF00FF").ss(1,1,1).p("AqwnvQETgiEtgXQErgYE2AAQA+AAA9ABQAaDfATDvQAYErAAE2QkVAiksAYQkrAXk2AAQg9AAg+gBQgZjfgUjvQgXkrAAk2g");
	this.shape_50.setTransform(153.9,61.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0E23B0").s().p("AprJAQgajggTjvQgYkqAAk2QEUgiEsgXQErgYE2AAIB7ABQAaDgATDvQAYEqAAE2QkVAhksAZQkrAXk2AAIh6gBg");
	this.shape_51.setTransform(153.9,61.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FF00FF").ss(1,1,1).p("Aq0oDQEfgZEwgSQExgSE4AAQA/AAA/ABQATDnAOD0QASEvAAE5QkhAZkwASQkwASk4AAQg/AAg+gBQgTjngOjzQgSkxAAk4g");
	this.shape_52.setTransform(157.7,61.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#0B1AB7").s().p("AqBJAQgTjngOjzQgSkxAAk4QEfgZEwgSQExgRE4AAIB+AAQATDnAODzQASEwAAE5QkhAYkwATQkwASk4AAIh9gBg");
	this.shape_53.setTransform(157.7,61.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF00FF").ss(1,1,1).p("Aq4oWQEqgRE2gMQE1gME8AAQA/AAA/AAQANDwAJD3QAME1AAE6QkrARk2AMQk2AMk6AAQg/AAg/AAQgMjwgKj3QgMk1AAk6g");
	this.shape_54.setTransform(161.5,61.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0712BE").s().p("AqWJAQgNjwgJj3QgMk1AAk6QEqgRE1gMQE2gME7AAIB+AAQANDwAKD3QAME1AAE6QksARk2AMQk0AMk7AAIh+AAg");
	this.shape_55.setTransform(161.5,61.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FF00FF").ss(1,1,1).p("Aq8oqQE1gJE7gGQE6gGE+AAQBAAABAABQAGD3AFD7QAGE6AAE+Qk3AIk7AGQk6AGk9AAQhAAAg/AAQgGj3gFj7QgGk7AAk9g");
	this.shape_56.setTransform(165.2,61.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0409C5").s().p("AqrI/QgGj3gFj6QgGk6AAk+QE1gJE7gGQE6gFE+gBICAABQAGD3AFD7QAGE6AAE9Qk3AJk7AGQk6AFk9AAIh/AAg");
	this.shape_57.setTransform(165.2,61.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,1,1).p("ALBAAI2BAA");
	this.shape_58.setTransform(169,119.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FF00FF").ss(1,1,1).p("ArAI/IAAx9IWBAAIAAR9");
	this.shape_59.setTransform(169,62);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0000CC").s().p("ArAI/IAAx9IWBAAIAAR9g");
	this.shape_60.setTransform(169,62);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FC05FA").ss(1.2,1,1).p("AqzowQE3gBE4gCQE7gBE9AAQA+AAA+AAQABD6ABD6QACE4AAE5Qk8ACk4ABQk4ABk6AAQg/AAg+AAQgCj3gBj4QgBk6AAk7g");
	this.shape_61.setTransform(179.4,69.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0100C7").s().p("AqvI1IgDnvIgBp1IAAgBIJwgDQE7gBE9AAIB7AAIACH0QACE4AAE5Ip0ADIpxABIh+AAg");
	this.shape_62.setTransform(179.4,69.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FA0AF5").ss(1.4,1,1).p("AqmoiQEvgEExgCQE1gDE3AAQA8AAA9AAQADD0ACD1QADExAAEzQk0AEkxADQkyACk0AAQg9AAg+AAQgDjxgCjzQgCkzAAk1g");
	this.shape_63.setTransform(189.7,77.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#0300C2").s().p("AqeIrIgGnkQgCkyAAk2IAAgBQEvgEExgCQE1gDE3AAIB5AAIAFHqQACEwABEzIplAGQkyAEk0AAIh6gBg");
	this.shape_64.setTransform(189.7,77.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#F70FF0").ss(1.6,1,1).p("AqZoTQEngGErgEQEugEExAAQA7AAA7AAQAFDuADDwQAEEqAAEtQkrAGkrAEQkrAEkuAAQg8AAg8AAQgFjsgDjtQgEksAAkvg");
	this.shape_65.setTransform(200,85.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#0400BD").s().p("AqNIiIgInZQgEksAAkvIAAgBQEngGEsgEQEtgEEwAAIB3AAQAFDuADDwQAEEqAAEtQkrAGkrAEQkrAEkuAAIh4AAg");
	this.shape_66.setTransform(200,85.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#F514EB").ss(1.7,1,1).p("AqMoFQEfgHEkgGQEogFEqAAQA6AAA7AAQAFDnAFDrQAFEkAAEnQkkAHkjAGQklAFkoAAQg7AAg7AAQgFjlgFjoQgFkmAAkpg");
	this.shape_67.setTransform(210.4,93.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#0500B8").s().p("Ap8IYIgKnOQgGklAAkoIAAgBQEfgIElgGQEngFEqAAIB1ABIAKHRQAFEkAAEnQkjAHkkAFQklAGkoAAIh1AAg");
	this.shape_68.setTransform(210.4,93.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#F21AE6").ss(1.9,1,1).p("Ap/n2QEXgJEegHQEhgHEkAAQA5AAA5AAQAHDhAFDmQAHEdAAEgQkbAKkdAHQkeAGkiAAQg6AAg5AAQgIjfgGjjQgGkfAAkig");
	this.shape_69.setTransform(220.7,101.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0600B3").s().p("AprIOQgIjfgGjjQgGkfAAkiIAAgBQEXgJEegHQEggHElAAIByAAQAGDhAGDmQAHEdAAEgQkcAKkcAHQkfAGkhAAIhzAAg");
	this.shape_70.setTransform(220.7,101.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#F01FE0").ss(2.1,1,1).p("ApynoQEPgMEXgIQEbgIEeAAQA3AAA4AAQAJDbAGDgQAIEXAAEaQkTAMkXAIQkXAJkbAAQg5AAg5gBQgIjZgHjeQgIkYAAkcg");
	this.shape_71.setTransform(231,109.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#0800AD").s().p("ApbIEQgIjZgHjeQgIkYAAkcIAAgBQEPgLEYgJQEagHEegBIBvAAQAIDcAHDgQAIEWAAEaQkTAMkXAIQkXAIkbAAIhyAAg");
	this.shape_72.setTransform(231,109.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#ED24DB").ss(2.3,1,1).p("AplnZQEIgOEQgJQETgKEYAAQA3AAA2ABQAKDUAIDbQAJEQAAEUQkLAOkQAJQkQAKkWAAQg3AAg4gBQgKjSgHjZQgKkRAAkXg");
	this.shape_73.setTransform(241.4,117.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0900A8").s().p("ApKH6QgJjSgJjZQgJkRAAkXIAAAAQEIgOEQgJQETgKEYAAIBsABQALDUAHDbQAKEQAAEUQkLAOkQAJQkRAKkVAAIhvgBg");
	this.shape_74.setTransform(241.4,117.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#EB29D6").ss(2.4,1,1).p("ApYnLQD/gPEKgLQEMgLESAAQA2AAA0ABQANDOAIDWQALEJAAEOQkDAQkJAKQkKALkPAAQg2AAg2AAQgMjNgJjTQgLkLAAkQg");
	this.shape_75.setTransform(251.7,125.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0A00A3").s().p("Ao4HwQgMjMgJjTQgLkLAAkQIAAgBQD/gPEKgLQENgLERAAIBqABQANDOAIDVQALEKAAEOQkDAQkJAKQkKALkPAAIhsgBg");
	this.shape_76.setTransform(251.7,125.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#E82ED1").ss(2.6,1,1).p("ApLm9QD3gREDgMQEGgMELAAQA1AAA0AAQANDIAKDQQAMEDAAEIQj7ASkDAMQkDAMkKAAQg0AAg1AAQgNjHgKjOQgMkEAAkKg");
	this.shape_77.setTransform(262.1,133.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0B009E").s().p("AooHnQgNjHgKjOQgMkEAAkKIAAgBQD3gREDgMQEGgMELAAIBpAAQANDIAJDQQANEDAAEIQj7ASkDAMQkDAMkKAAIhpAAg");
	this.shape_78.setTransform(262.1,133.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#E633CC").ss(2.8,1,1).p("Ao+mvQDvgTD9gNQD/gOEFAAQAzAAAzABQAPDCAKDLQAOD8AAECQjzATj8AOQj9AOkDAAQgzAAg0gBQgOjBgLjJQgOj9AAkEg");
	this.shape_79.setTransform(272.4,141.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#0D0099").s().p("AoXHdQgOjAgLjJQgOj+AAkDIAAgBQDvgUD9gNQD/gNEFAAIBmAAQAODCALDLQAOD8AAECQjzATj8AOQj9AOkDAAIhngBg");
	this.shape_80.setTransform(272.4,141.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#E338C7").ss(3,1,1).p("AoxmgQDogVD2gPQD3gPEAAAQAxAAAyABQAQC8AMDFQAPD1AAD9QjrAVj1APQj2APj9AAQgyAAgzgBQgQi6gMjEQgPj2AAj+g");
	this.shape_81.setTransform(282.7,149.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#0E0094").s().p("AoGHTQgQi6gMjEQgPj2AAj+IAAgBQDogVD1gPQD5gPD/AAIBjABQAQC8AMDFQAPD1AAD9QjrAVj1APQj2APj9AAIhlgBg");
	this.shape_82.setTransform(282.7,149.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#E03DC2").ss(3.1,1,1).p("AokmSQDfgXDwgQQDxgQD6AAQAwAAAwABQARC1AODBQAQDvAAD2QjjAXjvAQQjvAQj3AAQgxAAgxAAQgSi0gNi/QgQjwAAj4g");
	this.shape_83.setTransform(293.1,157.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0F008F").s().p("An1HKQgRi1gOi+QgQjwAAj4IAAgBQDggXDvgPQDxgRD6AAIBgABQARC2AODAQAQDvAAD1QjjAYjuAQQjwAQj3AAIhiAAg");
	this.shape_84.setTransform(293.1,157.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#DE42BD").ss(3.3,1,1).p("AoXmDQDXgZDpgSQDrgRDzAAQAvAAAvAAQATCwAOC7QASDoAADwQjbAZjoARQjpASjwAAQgxAAgvgBQgTitgOi6QgSjpAAjyg");
	this.shape_85.setTransform(303.4,165.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#11008A").s().p("AnkG/QgUitgNi6QgSjpAAjyIAAAAQDXgZDpgSQDrgRDyAAIBfAAQATCwAOC7QASDoAADwQjbAZjoARQjpASjxAAIhfgBg");
	this.shape_86.setTransform(303.4,165.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#DB47B8").ss(3.5,1,1).p("AoKl1QDPgbDjgTQDjgSDtAAQAuAAAuAAQAVCqAPC1QATDhAADqQjTAbjiATQjiATjrAAQguAAgvAAQgUiogPi0QgTjjAAjrg");
	this.shape_87.setTransform(313.8,173.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#120085").s().p("AnTG1QgVingPi0QgTjiAAjsIAAgBQDPgbDjgSQDjgUDtABIBcAAQAUCqAQC1QASDiABDqQjTAbjiASQjiATjqAAIhdgBg");
	this.shape_88.setTransform(313.8,173.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#D94DB3").ss(3.7,1,1).p("An9lmQDHgdDcgUQDdgVDnAAQAtAAAsABQAWCjAQCxQAVDaAADkQjKAdjcAUQjbAVjlAAQgtAAgtgBQgWiigQiuQgVjcAAjmg");
	this.shape_89.setTransform(324.1,181.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#130080").s().p("AnCGsQgWiigQiuQgVjcAAjmIAAAAQDIgdDbgUQDegVDmAAIBZABQAXCjAPCxQAVDaAADkQjLAdjaAUQjcAVjlAAIhagBg");
	this.shape_90.setTransform(324.1,181.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#D652AD").ss(3.8,1,1).p("AnwlYQDAgfDUgVQDXgWDhAAQArAAAsABQAXCdARCrQAWDUAADeQjCAfjVAWQjUAVjfAAQgsAAgsgBQgYibgRiqQgWjVAAjfg");
	this.shape_91.setTransform(334.4,189);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#14007A").s().p("AmxGiQgYibgSiqQgVjVAAjfIAAgBQDAgfDVgVQDWgWDhAAIBWABQAYCdARCrQAWDUAADeQjDAfjUAWQjUAVjfAAIhYgBg");
	this.shape_92.setTransform(334.4,189);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#D457A8").ss(4,1,1).p("AnjlKQC3ggDPgXQDPgXDbAAQAqAAArAAQAYCXATCmQAXDNAADYQi6AhjPAXQjOAXjYAAQgrAAgrgBQgZiVgSilQgXjOAAjZg");
	this.shape_93.setTransform(344.8,197);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#160075").s().p("AmgGYQgZiVgTilQgXjOAAjZIAAgBQC3ggDPgXQDPgXDbAAIBUAAQAZCXASCmQAXDNABDYQi6AhjPAXQjNAXjZAAIhVgBg");
	this.shape_94.setTransform(344.8,197);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#D15CA3").ss(4.2,1,1).p("AnWk7QCwgiDIgZQDJgYDUAAQApAAApABQAaCQAUChQAYDGAADSQiyAjjHAYQjHAZjTAAQgqAAgpgBQgaiPgUigQgZjIAAjSg");
	this.shape_95.setTransform(355.1,204.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#170070").s().p("AmPGOQgbiOgTigQgZjIAAjTIAAAAQCwgjDIgYQDIgZDVABIBSABQAaCQATChQAZDGAADSQiyAjjHAYQjIAZjSAAIhTgCg");
	this.shape_96.setTransform(355.1,204.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#CF619E").ss(4.4,1,1).p("AnJktQCogkDAgaQDDgaDOAAQAoAAAoABQAcCLAVCbQAZDAAADMQiqAkjBAaQjAAajNAAQgoAAgogBQgciJgViaQgajBAAjNg");
	this.shape_97.setTransform(365.4,212.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#18006B").s().p("Al+GFQgciJgViaQgajBAAjNIAAgBQCogkDBgaQDCgaDOAAIBQABQAcCLAVCbQAZDAAADMQiqAkjBAaQjBAajMAAIhQgBg");
	this.shape_98.setTransform(365.4,212.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#CC6699").ss(4.6,1,1).p("Am8kfQCfgmC7gbQC8gbDHAAQAoAAAmABQAdCEAWCWQAbC5AADGQiiAmi6AcQi6AbjHAAQgnAAgmgBQgeiDgWiVQgbi7AAjGg");
	this.shape_99.setTransform(375.8,220.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#1A0066").s().p("AltF7QgeiDgWiVQgbi7AAjGIAAAAQCfgnC7gbQC8gbDIAAIBNABQAdCEAWCWQAbC5AADGQiiAni6AaQi6AcjHAAIhNgBg");
	this.shape_100.setTransform(375.8,220.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#C96B94").ss(4.7,1,1).p("AmvkQQCXgoC0gdQC1gcDCAAQAmAAAkABQAfB+AXCQQAcCzABC/QiaApi0AdQizAcjAAAQgmAAgmgBQgfh9gXiPQgci0AAjBg");
	this.shape_101.setTransform(386.1,228.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#1B0061").s().p("AldFxQgeh9gYiPQgci0AAjBIAAAAQCXgoC0gdQC1gcDCAAIBKABQAgB+AWCQQAdCzAAC/QiaApi0AdQizAcjAAAIhMgBg");
	this.shape_102.setTransform(386.1,228.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#C7708F").ss(4.9,1,1).p("AmikBQCPgrCtgeQCvgdC7AAQAkAAAkABQAhB4AYCLQAdCsABC5QiSAritAeQitAei6AAQglAAgkgBQghh3gYiKQgditAAi7g");
	this.shape_103.setTransform(396.5,236.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#1C005C").s().p("AlMFoQggh3gZiLQgditAAi7QCPgqCtgeQCvgeC7ABIBIAAQAhB4AYCMQAdCsABC5QiSAritAeQitAdi6AAIhJAAg");
	this.shape_104.setTransform(396.5,236.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#C4758A").ss(5.1,1,1).p("AmVjzQCHgsCnggQCogfC1AAQAjAAAjACQAiBxAZCGQAfCmAACzQiJAtinAfQimAfi0AAQgkAAgjgBQghhxgaiFQgfimAAi1g");
	this.shape_105.setTransform(406.8,244.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#1D0057").s().p("Ak7FeQghhxgaiFQgfimAAi1IAAAAQCHgsCnggQCogfC1AAQAjAAAjACQAiBxAZCGQAfCmAACzQiKAtimAfQimAfi0AAIhHgBg");
	this.shape_106.setTransform(406.8,244.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#C27A85").ss(5.3,1,1).p("AmIjlQB/guCgghQChggCvAAQAiAAAiABQAjBsAaCAQAhCfAACtQiCAvigAgQifAhiuAAQgiAAgigBQgjhrgbh/QggigAAivg");
	this.shape_107.setTransform(417.1,252.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#1F0052").s().p("AkqFTQgjhqgaiAQghigAAiuQB/guCgghQCiggCvAAIBDABQAjBrAaCBQAgCfABCtQiBAvihAgQifAhiuAAQgiAAgigCg");
	this.shape_108.setTransform(417.1,252.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#BF8080").ss(5.4,1,1).p("Al7jXQB3gvCagjQCaghCpAAQAgAAAhABQAlBlAbB7QAhCZABCnQh5AwiaAiQiYAiioAAQghAAgigBQgkhkgbh7QgiiZAAiog");
	this.shape_109.setTransform(427.5,260.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#20004D").s().p("AkZFKQglhkgch7QghiZAAioIAAgBQB3gvCagjQCaghCpAAIBBABQAkBlAcB7QAhCZABCnQh6AwiZAiQiZAiinAAQgiAAgggBg");
	this.shape_110.setTransform(427.5,260.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#BD857A").ss(5.6,1,1).p("AlujIQBwgyCSgjQCUgjCjAAQAfAAAgABQAmBfAcB2QAjCSAAChQhxAyiTAjQiSAkihAAQghAAgfgBQgmhfgch1QgkiTAAiig");
	this.shape_111.setTransform(437.8,268.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#210047").s().p("AkIFAQgmhegch1QgkiTAAiiQBwgyCSgjQCUgkCjABQAgAAAfABQAmBfAcB2QAjCRAAChQhxAziTAjQiSAkihgBIhAgBg");
	this.shape_112.setTransform(437.8,268.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#BA8A75").ss(5.8,1,1).p("Alhi6QBogzCMglQCMglCdAAQAeAAAeACQAoBZAeBwQAkCLAACbQhpA1iNAkQiLAlicAAQgeAAgegBQgohZgehwQgkiLAAicg");
	this.shape_113.setTransform(448.1,276.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#220042").s().p("Aj3E3QgohZgehwQgkiLAAicIAAgBQBogzCMglQCNglCcAAQAfAAAdACQAoBZAeBwQAkCLAACbQhpA1iNAkQiLAlibAAIg9gBg");
	this.shape_114.setTransform(448.1,276.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#B88F70").ss(6,1,1).p("AlUisQBfg1CGgmQCGgmCWAAQAdAAAdABQApBTAfBrQAlCFABCUQhhA3iGAlQiFAniVAAQgeAAgdgBQgphTgehrQgmiFAAiWg");
	this.shape_115.setTransform(458.5,284.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#24003D").s().p("AjmEtQgqhSgehrQgmiGAAiWQBgg1CFgmQCGgmCXAAIA5ABQApBTAfBrQAlCEABCVQhhA3iGAmQiFAmiVAAQgeAAgcgBg");
	this.shape_116.setTransform(458.5,284.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#B5946B").ss(6.1,1,1).p("AlHidQBXg4B/gnQCAgnCQAAQAcAAAbABQArBNAfBmQAoB+AACOQhZA5h/AnQh/AniPAAQgcAAgbgBQgrhMgghmQgnh+AAiQg");
	this.shape_117.setTransform(468.8,292.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#250038").s().p("AjVEjQgrhMgghmQgnh+AAiQIAAAAQBXg4CAgnQB/gnCQAAQAcAAAbABQArBNAfBmQAnB+ABCOQhZA5h/AnQh+AniQAAQgcAAgbgBg");
	this.shape_118.setTransform(468.8,292.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#B39966").ss(6.3,1,1).p("Ak6iOQBQg6B4gpQB5gpCKAAQAaAAAbACQAsBHAgBgQApB4AACIQhRA7h4AoQh4ApiJAAQgbAAgbgCQgrhFghhhQgph3AAiKg");
	this.shape_119.setTransform(479.2,300.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#260033").s().p("AjFEZQgshFgghhQgph3AAiKQBQg6B4gpQB4gpCKAAQAbABAaABQAtBGAgBhQAoB4ABCIQhRA6h4ApQh4ApiKAAQgbgBgagBg");
	this.shape_120.setTransform(479.2,300.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#B09E61").ss(6.5,1,1).p("AktiAQBIg7BygrQBzgqCDAAQAZAAAZACQAtBAAiBcQAqBxAACCQhJA8hxAqQhyAqiCAAQgbAAgZgCQgtg/gihbQgqhyAAiDg");
	this.shape_121.setTransform(489.5,308.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#28002E").s().p("AizEPQgug/gihbQgqhyAAiDIAAAAQBIg7BygrQBzgqCCAAQAaAAAZACQAtBAAiBcQApBxABCCQhJA8hxAqQhzAqiCAAQgZAAgZgCg");
	this.shape_122.setTransform(489.5,308.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#ADA35C").ss(6.7,1,1).p("AkghyQBAg+BrgrQBsgrB9AAQAYAAAYABQAuA6AjBWQArBrABB8QhBA+hrArQhrAsh9AAQgYAAgYgCQgvg5gjhWQgrhrAAh9g");
	this.shape_123.setTransform(499.8,316.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#290029").s().p("AijEFQgug5gkhWQgrhsAAh8QBAg+BrgrQBsgrB9AAQAYAAAYABQAuA6AjBWQArBrABB8QhBA+hrAsQhrArh9AAQgYAAgYgCg");
	this.shape_124.setTransform(499.8,316.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#ABA857").ss(6.8,1,1).p("AkThkQA4g/BkgtQBmgsB2AAQAXAAAXABQAwA0AkBRQAtBkAAB2Qg5BAhkAsQhlAth2AAQgXAAgXgBQgwg0gkhQQgthlAAh2g");
	this.shape_125.setTransform(510.2,324);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#2A0024").s().p("AiSD8Qgxg0gkhQQgshlAAh2IAAgBQA4g/BkgtQBlgsB3AAQAXAAAXABQAwA0AkBRQAsBkABB2Qg5BAhkAsQhlAth2AAQgYAAgWgBg");
	this.shape_126.setTransform(510.2,324);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#A8AD52").ss(7,1,1).p("AkGhVQAvhBBfgvQBegtBwAAQAXAAAVACQAyAtAkBMQAvBdAABwQgxBCheAuQheAuhwAAQgWAAgVgCQgygtgmhLQgtheAAhxg");
	this.shape_127.setTransform(520.5,331.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#2B001F").s().p("AiBDyQgyguglhKQguheAAhxQAwhBBdgvQBfgtBwgBQAXAAAUACQAyAuAmBMQAtBdABBwQgxBCheAtQheAvhwgBQgWAAgVgBg");
	this.shape_128.setTransform(520.5,331.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#A6B34D").ss(7.2,1,1).p("Aj5hHQAohDBXgwQBYgvBrAAQAUAAAUACQA0AnAmBGQAvBXAABqQgoBEhYAvQhXAwhqAAQgVAAgUgCQgzgngmhGQgwhYAAhqg");
	this.shape_129.setTransform(530.8,339.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#2D001A").s().p("AhwDoQgzgngmhGQgwhYAAhqIAAAAQAohDBXgwQBYgvBqAAQAVAAAUACQAzAnAnBGQAuBXABBqQgoBEhYAvQhXAwhqAAQgUAAgVgCg");
	this.shape_130.setTransform(530.8,339.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#A3B847").ss(7.4,1,1).p("Ajsg4QAghFBQgxQBRgxBlAAQATAAATACQA1AhAnBBQAwBQABBkQghBGhRAwQhQAxhkAAQgTAAgTgCQg1ghgohBQgwhQAAhkg");
	this.shape_131.setTransform(541.2,347.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#2E0014").s().p("AhfDeQg1ghgohBQgwhRAAhjQAghGBQgxQBSgwBkAAQATAAATABQA1AiAnBAQAwBRABBjQggBGhSAxQhQAxhjAAQgUAAgTgCg");
	this.shape_132.setTransform(541.2,347.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#A1BD42").ss(7.5,1,1).p("AjfgqQAYhHBKgyQBLgyBeAAQARAAASACQA2AbApA7QAyBKAABdQgYBIhLAyQhKAyheAAQgRAAgTgCQg2gagog8QgyhKAAheg");
	this.shape_133.setTransform(551.5,355.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#2F000F").s().p("AhPDUQg2gagog8QgyhKAAheIAAAAQAYhHBJgyQBMgyBdAAQASAAASACQA2AbApA7QAxBKABBdQgYBIhLAyQhKAyheAAQgRAAgTgCg");
	this.shape_134.setTransform(551.5,355.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#9EC23D").ss(7.7,1,1).p("AjSgbQAQhJBDg0QBFgzBXAAQARAAARABQA3AWAqA1QAzBEAABXQgQBKhDAzQhEA0hXAAQgRAAgRgCQg4gVgpg2Qg0hEAAhXg");
	this.shape_135.setTransform(561.8,363.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#30000A").s().p("Ag9DLQg4gVgqg3QgzhDAAhXQAQhJBEg0QBEg0BXAAQARAAARADQA3AUApA3QA0BDAABXQgQBJhDA0QhEAzhXABQgRgBgRgBg");
	this.shape_136.setTransform(561.8,363.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#9CC738").ss(7.9,1,1).p("AjFgNQAIhLA8g1QA+g1BRAAQAQAAAPACQA5APArAxQA0A8ABBRQgIBMg9A0Qg9A2hSAAQgPAAgQgCQg5gPgqgxQg1g9AAhRg");
	this.shape_137.setTransform(572.2,371.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#320005").s().p("AgsDBQg6gPgqgxQg1g9AAhRQAIhLA8g1QA+g1BRAAQARAAAPACQA4APArAxQA0A8ABBRQgIBMg9A0Qg9A2hSAAQgPAAgPgCg");
	this.shape_138.setTransform(572.2,371.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#99CC33").ss(8.1,1,1).p("AC5AAQAABMg3A3Qg2A2hMAAQhLAAg3g2Qg2g3AAhMQAAhMA2g2QA3g2BLAAQBMAAA2A2QA3A2AABMg");
	this.shape_139.setTransform(582.5,379.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#330000").s().p("AiCCCQg2g1AAhNQAAhLA2g3QA3g2BLAAQBNAAA1A2QA3A3AABLQAABNg3A1Qg1A3hNAAQhLAAg3g3g");
	this.shape_140.setTransform(582.5,379.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_86},{t:this.shape_85}]},1).to({state:[{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_90},{t:this.shape_89}]},1).to({state:[{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_98},{t:this.shape_97}]},1).to({state:[{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_102},{t:this.shape_101}]},1).to({state:[{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_106},{t:this.shape_105}]},1).to({state:[{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_110},{t:this.shape_109}]},1).to({state:[{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_114},{t:this.shape_113}]},1).to({state:[{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_118},{t:this.shape_117}]},1).to({state:[{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_122},{t:this.shape_121}]},1).to({state:[{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_126},{t:this.shape_125}]},1).to({state:[{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_130},{t:this.shape_129}]},1).to({state:[{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_138},{t:this.shape_137}]},1).to({state:[{t:this.shape_140},{t:this.shape_139}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(316,209,552.5,290.6);
// library properties:
lib.properties = {
	width: 633,
	height: 419,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;