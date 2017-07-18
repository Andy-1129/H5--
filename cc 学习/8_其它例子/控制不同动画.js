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



(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("020", "24px 'Times New Roman'");
	this.text.lineHeight = 29;
	this.text.lineWidth = 95;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AnajRIO1AAIAAGjIu1AAg");
	this.shape.setTransform(49.5,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnaDSIAAmjIO1AAIAAGjg");
	this.shape_1.setTransform(49.5,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,99,44);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFIAAQAACHhhBhQhgBgiHAAQiHAAhghgQhghhAAiHQAAiHBghgQBghgCHAAQCHAABgBgQBhBgAACHg");
	this.shape.setTransform(97.8,41.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjnDnQhghfABiIQgBiGBghgQBhhgCGgBQCIABBgBgQBgBgAACGQAACIhgBfQhgBgiIABQiGgBhhhgg");
	this.shape_1.setTransform(97.8,41.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.965)").ss(1,1,1).p("AlHAAQAAhtBBhTQAOgSASgSQBdhbCBgDQCPAABfBeQAMAMAKALQBJBVADBxQAAAHAAAAQAABvhDBUQgOASgRAQQhdBciCACQgEAAgDAAQiGAAhgheQgMgMgKgMQhJhVgChxQAAgDAAAAQAAgCAAgCg");
	this.shape_2.setTransform(97.8,51);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6F6FB").s().p("AAAFDQiGAAhfheIgXgYQhJhVgBhxIAAgDIAAgEQAAhtBAhTQAPgSASgSQBchbCBgDQCPAABgBeIAVAXQBJBVADBxIAAAHQAABvhDBUQgOASgQAQQheBciCACIgHAAg");
	this.shape_3.setTransform(97.8,51);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.929)").ss(1,1,1).p("AlHAAQAAhsBChSQAPgSASgSQBchYCAgEQCOAABgBdQALALAKAMQBKBTADBwQAAAHAAAAQAABuhEBTQgOARgRAQQhdBaiCACQgDAAgDAAQiGAAhfhcQgMgLgLgMQhJhVgChwQAAgCAAgBQAAgCAAgBg");
	this.shape_4.setTransform(97.8,60.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EDEDF8").s().p("AAAE/QiFAAhfhdQgNgLgLgMQhIhVgChwIAAgCIAAgEQAAhsBBhSQAPgSASgSQBchYCAgDQCPgBBfBdQALALAKAMQBKBUADBwIAAAGQAABuhEBTQgOARgRARQhcBZiCADIgHAAg");
	this.shape_5.setTransform(97.8,60.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.898)").ss(0.9,1,1).p("AlHAAQABhrBChRQAPgSASgRQBchXCAgDQCNAABfBbQALALALALQBKBTADBvQAAAGAAAAQAABthFBSQgPARgQAQQhdBYiBACQgDAAgDAAQiFAAhfhbQgMgLgLgMQhKhTgChuQAAgDAAgBQAAgBAAgCg");
	this.shape_6.setTransform(97.8,69.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E5E5F4").s().p("AAAE6QiFAAhfhbIgXgXQhJhTgChuIAAgEIAAgDQAAhrBChRQAPgSASgRQBchXCAgDQCNAABfBbIAWAWQBKBTADBvIAAAGQAABthFBSQgPARgQAQQhdBYiAACIgHAAg");
	this.shape_7.setTransform(97.8,69.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.863)").ss(0.9,1,1).p("AlHAAQABhqBDhQQAPgSASgQQBchWB/gDQCMABBfBYQAMALAKALQBLBSADBtQAAAHAAAAQgBBshFBRQgPARgQAPQhdBWiAACQgEAAgCAAQiFAAhehZQgMgLgLgLQhLhTgChtQAAgCAAgBQAAgCAAgBg");
	this.shape_8.setTransform(97.8,78.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DCDCF1").s().p("AAAE2QiFgBhehYIgXgYQhLhSgBhtIAAgCIAAgEQAAhqBDhPQAPgSATgRQBbhWB/gCQCMAABgBZIAVAVQBLBSADBuIAAAGQgBBshFBRQgPARgQAPQhcBWiBADIgGAAg");
	this.shape_9.setTransform(97.8,78.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.827)").ss(0.9,1,1).p("AlHAAQABhpBEhPQAPgRASgRQBbhTB/gDQCMABBeBWQAMALAKALQBMBRADBsQAAAGAAABQgBBqhHBQQgOAQgQAQQhdBUh/ACQgEAAgCAAQiEAAhehXQgNgLgKgMQhMhRgChsQAAgCAAgBQAAgCAAgBg");
	this.shape_10.setTransform(97.8,87.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D3D3ED").s().p("AAAExQiEAAhehXQgMgLgLgMQhMhRgBhsIAAgDIAAgDQAAhpBEhPQAQgRARgRQBchTB+gDQCMABBeBWIAXAWQBLBRADBsIAAAHQgBBqhGBQQgOAQgRAQQhcBUiAACIgGAAg");
	this.shape_11.setTransform(97.8,87.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0.792)").ss(0.8,1,1).p("AlHAAQABhnBFhPQAPgRASgQQBbhSB/gCQCLAABdBWQAMAKAKALQBNBPADBrQAAAHAAAAQgBBphIBPQgOAQgRAPQhbBTiAABQgDAAgCAAQiEAAhdhVQgNgKgLgMQhMhQgChrQAAgCAAgBQAAgCAAgBg");
	this.shape_12.setTransform(97.8,97.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CACAEA").s().p("AAAEsQiEAAhdhVQgMgLgMgLQhLhQgChrIAAgDIAAgDQAAhoBGhOQAPgRARgQQBchRB+gDQCLAABdBWIAXAVQBMBPADBrIAAAHQgBBphHBPQgPAQgRAPQhbBSh/ACIgGAAg");
	this.shape_13.setTransform(97.8,97.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(0,0,0,0.757)").ss(0.8,1,1).p("AlHAAQABhnBHhNQAPgRASgPQBahQB+gDQCKABBeBTQALAKALALQBNBOADBqQAAAGAAABQgBBohJBOQgOAQgRAOQhbBRh/ACQgDAAgCAAQiDgBhdhTQgNgKgLgLQhNhQgChpQAAgDAAAAQAAgCAAgBg");
	this.shape_14.setTransform(97.8,106.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C1C1E6").s().p("AAAEoQiDgBhdhTIgXgVQhOhQgBhpIAAgDIAAgDQAAhnBHhNQAPgRASgPQBbhQB9gDQCKABBeBTIAWAVQBNBOADBqIAAAHQgBBohJBOQgOAQgQAOQhcBRh+ACIgGAAg");
	this.shape_15.setTransform(97.8,106.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,0,0.725)").ss(0.7,1,1).p("AlHgBQABhlBIhMQAPgRASgPQBahOB9gCQCKAABdBSQALAKALAKQBOBNADBpQAAAGAAABQgBBnhKBNQgOAPgRAOQhbBPh+ACQgDAAgDAAQiBAAhehRQgMgLgLgLQhOhOgChpQAAgCAAgBQAAgCAAAAg");
	this.shape_16.setTransform(97.8,115.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B9B9E3").s().p("AAAEjQiCAAhehRIgXgWQhOhOgBhpIAAgCIAAgDIAAgBQABhkBHhNQAPgQASgQQBbhOB8gCQCKABBdBRIAWAUQBOBNADBqIAAAGQgBBnhKBNQgOAQgQAOQhcBPh+ABIgFAAg");
	this.shape_17.setTransform(97.8,115.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(0,0,0,0.69)").ss(0.7,1,1).p("AlHAAQABhlBJhLQAPgQASgPQBahNB9gBQCIAABdBQQAMAKAKAKQBPBMADBoQAAAFAAABQgBBmhLBMQgOAPgRAOQhbBNh9ABQgEAAgCAAQiBAAhdhPQgMgLgLgLQhPhMgChoQAAgCAAgBQAAgCAAAAg");
	this.shape_18.setTransform(97.8,124.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B0B0DF").s().p("AAAEeQiCAAhdhPIgXgVQhPhOgBhmIAAgEIAAgCQABhlBIhLQAQgQASgQQBZhMB9gCQCIABBdBPIAXAUQBOBNADBnIAAAHQgBBlhLBMQgOAQgQAOQhcBMh9ACIgFAAg");
	this.shape_19.setTransform(97.8,124.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,0,0,0.655)").ss(0.7,1,1).p("AlHgBQABhiBKhLQAPgQASgOQBahLB8gCQCIAABcBPQAMAJAKAKQBQBMADBmQAAAGAAABQgBBkhMBLQgOAPgRAOQhbBLh9ABQgDAAgCAAQiAAAhdhOQgMgKgLgLQhQhLgChmQAAgDAAgBQAAgBAAgCg");
	this.shape_20.setTransform(97.8,134);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A7A7DC").s().p("AAAEaQiBAAhdhOQgMgKgLgKQhQhMgBhmIAAgEIAAgDQAAhiBKhLQAPgQATgOQBZhLB8gCQCIABBdBOIAVATQBQBMADBmIAAAHQgBBkhMBLQgOAPgRANQhbBMh8ABIgFAAg");
	this.shape_21.setTransform(97.8,134);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(0,0,0,0.62)").ss(0.6,1,1).p("AlHgBQABhiBLhJQAQgQASgOQBZhJB7gCQCHABBcBMQAMAJALAKQBQBKADBlQAAAHAAABQgCBjhMBJQgPAPgQAOQhbBJh8ACQgDAAgCAAQiAgBhchLQgMgKgMgLQhQhLgChlQAAgDAAAAQAAgCAAgBg");
	this.shape_22.setTransform(97.8,143.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9E9ED8").s().p("AgBEWQiAgBhbhLIgYgVQhRhLgBhlIAAgEIAAgCQABhiBKhJQAQgQASgOQBZhJB8gCQCHABBcBMIAWATQBQBKADBlIAAAHQgCBkhMBKQgPAPgQANQhbBIh7ADIgGAAg");
	this.shape_23.setTransform(97.8,143.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(0,0,0,0.584)").ss(0.6,1,1).p("AlHgBQABhhBMhIQAQgPASgOQBZhGB6gDQCHABBcBKQALAKALAJQBRBKADBjQAAAGAAABQgCBihNBJQgPAPgQANQhbBHh7ABQgDAAgCAAQh/AAhchKQgNgKgLgKQhRhKgChkQAAgCAAgBQAAgCAAgBg");
	this.shape_24.setTransform(97.8,152.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9595D5").s().p("AgBERQh/gBhbhJQgNgKgMgLQhRhJgBhkIAAgDIAAgDQABhhBLhIQAQgPASgPQBZhFB7gDQCGABBcBKIAWATQBRBJADBkIAAAHQgCBihMBJQgPAPgRANQhbBGh7ACIgFAAg");
	this.shape_25.setTransform(97.8,152.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(0,0,0,0.553)").ss(0.6,1,1).p("AlHgBQAChgBMhHQAQgPASgOQBZhEB6gCQCFAABcBJQALAJALAJQBSBJADBiQAAAGAAABQgCBhhOBIQgPAOgRANQhZBFh7ABQgDAAgCAAQh/AAhbhIQgNgJgLgLQhShJgChiQAAgDAAAAQAAgCAAgBg");
	this.shape_26.setTransform(97.8,161.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8D8DD1").s().p("AgBEMQh+AAhchIIgYgUQhShJgBhiIAAgDIAAgDIAAAAQABhgBMhHQAQgPASgOQBZhEB6gCQCFAABcBJIAWASQBSBJADBiIAAAHQgCBhhNBIQgQAOgRANQhZBFh7ABIgFAAg");
	this.shape_27.setTransform(97.8,161.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(0,0,0,0.518)").ss(0.5,1,1).p("AlHgCQACheBNhGQAQgPASgNQBZhDB5gCQCFABBbBGQAMAJAKAKQBTBHADBhQAAAGAAABQgCBfhPBIQgPAOgRAMQhZBDh7ACQgDAAgCAAQh9gBhbhGQgNgJgLgKQhThIgChiQAAgCAAgBQAAgBAAgBg");
	this.shape_28.setTransform(97.8,170.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8484CE").s().p("AgBEIQh+gBhbhGIgYgTQhThIgBhiIAAgDIAAgCIAAgBQABheBOhGQAQgPARgNQBahDB5gCQCEABBbBGIAWATQBTBHADBhIAAAHQgCBfhOBIQgPAOgSAMQhZBDh6ACIgFAAg");
	this.shape_29.setTransform(97.8,170.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,0,0,0.482)").ss(0.5,1,1).p("AlHgBQACheBPhFQAPgOASgOQBZhAB4gCQCFABBaBFQAMAIALAJQBTBHADBgQAAAFAAABQgCBfhQBGQgPANgRANQhZBBh6ABQgDAAgCAAQh9AAhahEQgNgJgMgKQhThIgChfQAAgDAAgBQAAgBAAgBg");
	this.shape_30.setTransform(97.8,180.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7B7BCA").s().p("AgBEDQh9AAhbhEQgNgJgMgKQhThIgBhfIAAgEIAAgCQABheBPhFQAPgOASgOQBZhAB5gCQCEABBbBFIAWARQBTBHADBgIAAAGQgCBfhQBGQgPANgRANQhZBBh5ABIgFAAg");
	this.shape_31.setTransform(97.8,180.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(0,0,0,0.447)").ss(0.5,1,1).p("AlHgCQAChcBQhEQAQgOASgNQBYg/B4gCQCDABBaBDQAMAJALAJQBUBFADBfQAAAFAAABQgCBdhRBGQgPANgRAMQhZA/h5ACQgDAAgCAAQh8gBhahCQgNgJgMgKQhUhGgChfQAAgDAAAAQAAgBAAgCg");
	this.shape_32.setTransform(97.8,189.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7272C7").s().p("AgCD/Qh8gBhahCIgZgTQhUhGgBhfIAAgDIAAgDQABhcBQhEQAQgOASgNQBYg/B4gCQCEABBZBDIAXASQBUBFADBfIAAAGQgCBdhRBGQgPANgQAMQhaA/h5ACIgFAAg");
	this.shape_33.setTransform(97.8,189.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(0,0,0,0.416)").ss(0.4,1,1).p("AlHgCQAChbBRhEQAQgNASgNQBYg9B3gBQCDABBZBBQAMAIALAJQBVBEADBeQAAAGAAABQgCBchSBEQgPANgRALQhZA+h4ABQgDAAgCAAQh8AAhahBQgMgIgMgKQhVhFgCheQAAgDAAAAQAAgBAAgCg");
	this.shape_34.setTransform(97.8,198.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6A6AC3").s().p("AgCD6Qh7gBhbhAIgYgSQhVhGgBhdIAAgEIAAgBIAAgBQABhbBRhEQAQgNASgNQBYg9B4gBQCCAABZBCIAYARQBUBEADBeIAAAGQgCBchSBEQgPAOgRALQhYA+h5ABIgFAAg");
	this.shape_35.setTransform(97.8,198.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,0,0,0.38)").ss(0.4,1,1).p("AlHgCQAChaBShDQAQgNASgMQBYg7B2gCQCCABBaBAQALAIALAIQBWBEADBcQAAAGAAABQgCBahTBEQgPAMgRAMQhZA8h4AAQgCAAgCAAQh7AAhag+QgNgJgLgKQhWhEgChcQAAgDAAAAQAAgBAAgCg");
	this.shape_36.setTransform(97.8,207.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6161C0").s().p("AgCD2Qh7gBhag+QgNgJgLgJQhWhEgBhdIAAgDIAAgDIAAAAQAChaBRhCQAQgNASgNQBYg7B3gCQCBABBaBAIAXAQQBVBEADBdIAAAGQgCBahTBEQgPANgRALQhYA8h5ABIgEAAg");
	this.shape_37.setTransform(97.8,207.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(0,0,0,0.345)").ss(0.4,1,1).p("AlHgDQAChZBThBQAQgNASgMQBYg5B2gBQCBABBZA9QAMAIALAJQBWBCADBbQAAAFAAACQgCBZhUBCQgQANgQALQhZA6h3ABQgCAAgDAAQh6gBhZg9QgNgIgMgJQhWhEgChbQAAgCAAgBQAAgBAAgBg");
	this.shape_38.setTransform(97.8,217.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#5858BC").s().p("AgCDxQh6AAhag+IgYgRQhXhEgBhaIAAgEIAAgCIAAAAQABhaBThAQAQgNASgMQBYg6B2gBQCBABBZA9IAXARQBWBCADBbIAAAGQgCBahUBDQgQAMgQALQhZA6h3ABIgEAAg");
	this.shape_39.setTransform(97.8,217.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(0,0,0,0.31)").ss(0.3,1,1).p("AlHgCQAChYBUhBQAQgMASgLQBYg4B1gCQCAABBZA8QAMAIALAJQBXBBADBaQAAAFAAABQgCBZhVBBQgQAMgRAKQhXA5h3ABQgCAAgDAAQh5gBhZg7QgNgIgMgJQhXhDgChaQAAgCAAAAQAAgCAAgBg");
	this.shape_40.setTransform(97.8,226.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4F4FB9").s().p("AgCDtQh6gBhZg7IgYgRQhYhDgBhZIAAgEIAAgCIAAgBQABhXBUhBQARgMARgMQBYg3B1gCQCBABBYA9IAXAQQBXBAADBbIAAAGQgCBYhVBCQgPAMgSAKQhXA5h3ABIgEAAg");
	this.shape_41.setTransform(97.8,226.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(0,0,0,0.275)").ss(0.3,1,1).p("AlHgCQAChYBVg+QARgNASgMQBXg1B0gBQCAABBYA6QAMAHALAIQBYBBADBZQAAAFAAABQgCBXhWBAQgQANgRAKQhXA2h2ABQgCAAgDAAQh5gBhYg5QgNgIgMgIQhYhCgChZQAAgCAAgBQAAgBAAgBg");
	this.shape_42.setTransform(97.8,235.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4646B5").s().p("AgCDoQh6gBhXg5QgOgIgLgIQhZhCgBhYIAAgEIAAgCQABhYBVg/QARgMASgMQBXg1B1gBQB/ABBYA6IAYAQQBXBAADBZIAAAGQgCBXhWBAQgQANgRAKQhXA2h2ABIgEAAg");
	this.shape_43.setTransform(97.8,235.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(0,0,0,0.243)").ss(0.3,1,1).p("AlHgDQADhVBVg/QARgMASgLQBXg0B0AAQB+ABBYA4QAMAHALAIQBZA/ADBYQAAAFAAABQgCBWhXBAQgQALgRAKQhXA1h2AAQgBAAgDAAQh4AAhYg3QgNgIgMgJQhahAgBhYQAAgDAAAAQAAgBAAgBg");
	this.shape_44.setTransform(97.8,244.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3E3EB2").s().p("AgDDjQh3AAhZg3IgZgRQhZhAgBhYIAAgDIAAgCIAAgBQAChVBWg/QAQgMASgLQBXg0B0AAQB+ABBZA4IAWAPQBZA/ADBYIAAAGQgCBWhXBAQgQALgRAKQhXA1h2AAIgEAAg");
	this.shape_45.setTransform(97.8,244.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(0,0,0,0.208)").ss(0.2,1,1).p("AlHgDQADhUBXg9QAQgMASgLQBXgyBzgBQB+ACBYA1QAMAIALAHQBZA/ADBWQAAAFAAABQgCBVhYA/QgQALgRAKQhXAyh1ABQgCAAgCAAQh3gBhYg1QgNgIgMgIQhbhAgBhWQAAgDAAAAQAAgBAAgBg");
	this.shape_46.setTransform(97.8,254);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3535AE").s().p("AgDDfQh3gBhYg1IgZgRQhag/gBhWIAAgDIAAgCIAAgBQAChVBXg8QAQgNATgKQBWgyBzgBQB+ACBYA2IAXAOQBZA/ADBWIAAAGQgCBVhYA/QgQALgRAJQhXAzh1ABIgEAAg");
	this.shape_47.setTransform(97.8,254);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(0,0,0,0.173)").ss(0.2,1,1).p("AlHgDQADhTBYg9QAQgLASgKQBXgxByAAQB9ABBYA1QAMAGALAIQBaA9ADBVQAAAFAAABQgCBUhZA+QgQALgRAJQhXAxh0AAQgCAAgCAAQh3gBhXgzQgNgHgNgJQhbg+gBhVQAAgDAAAAQAAgBAAgCg");
	this.shape_48.setTransform(97.8,263.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2C2CAB").s().p("AgDDaQh3gBhXgzIgagQQhbg+AAhVIAAgDIAAgDIAAAAQAChTBYg9QARgLASgKQBWgxBzAAQB8ABBYA1IAXAOQBaA9ADBVIAAAGQgCBUhZA+QgQALgRAJQhXAxh0AAIgEAAg");
	this.shape_49.setTransform(97.8,263.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(0,0,0,0.137)").ss(0.2,1,1).p("AlHgDQADhSBZg8QAQgLASgKQBWguBzAAQB8ABBXAzQAMAGALAHQBbA8ADBVQAAAFAAABQgCBShbA9QgPAKgRAKQhXAvhzAAQgCAAgDAAQh1gBhXgxQgOgIgMgIQhcg9gBhUQAAgDAAAAQAAgCAAgBg");
	this.shape_50.setTransform(97.8,272.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2323A7").s().p("AgDDWQh2gBhXgyIgagPQhcg9AAhVIAAgCIAAgDIAAAAQAChSBZg8QAQgLATgKQBVguBzgBQB9ACBWAyIAXAPQBbA8ADBUIAAAGQgCBShbA8QgPALgRAKQhXAuhzABIgEAAg");
	this.shape_51.setTransform(97.8,272.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(0,0,0,0.102)").ss(0.1,1,1).p("AlHgEQADhQBag7QARgLASgJQBVgtByAAQB8ABBWAxQAMAHALAHQBcA7ADBSQAAAGAAABQgDBRhbA8QgPAKgRAJQhXAthzAAQgBAAgDAAQh1gBhWgvQgOgHgMgIQhdg9gBhTQAAgCAAAAQAAgCAAgBg");
	this.shape_52.setTransform(97.8,281.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1A1AA4").s().p("AgDDRQh2gBhWgvIgagPQhcg9gBhTIAAgCIAAgDIAAgBQAChQBag7QARgLASgJQBWgtBxAAQB8ABBXAxIAWAOQBcA7ADBSIAAAHQgDBRhbA8QgPAKgRAJQhWAth0AAIgDAAg");
	this.shape_53.setTransform(97.8,281.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(0,0,0,0.071)").ss(0.1,1,1).p("AlHgEQADhQBbg5QARgLASgJQBVgrBxAAQB7ACBWAvQAMAGAMAHQBcA6ADBRQAAAGAAAAQgDBRhcA7QgQAKgQAIQhXArhyAAQgBAAgDAAQh0gBhXgtQgNgHgMgIQheg8gBhQQAAgDAAAAQAAgCAAgBg");
	this.shape_54.setTransform(97.8,290.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1212A0").s().p("AgDDNQh1gBhXguIgZgPQhdg8gBhRIAAgCIAAgDIAAAAQAChRBbg5QARgKASgKQBWgrBwAAQB7ACBWAvIAYANQBcA6ADBSIAAAGQgDBQhcA7QgQAKgQAIQhWAshzAAIgDAAg");
	this.shape_55.setTransform(97.8,290.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(0,0,0,0.035)").ss(0.1,1,1).p("AlHgEQADhOBcg5QARgKASgJQBVgpBwAAQB7ABBWAuQAMAGALAHQBdA5ADBQQAAAFAAABQgDBPhdA6QgQAJgRAJQhVAphyAAQgCAAgCAAQh0gBhWgsQgNgGgNgIQheg7gBhQQAAgCAAAAQAAgCAAgBg");
	this.shape_56.setTransform(97.8,300.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#09099D").s().p("AgEDIQhzgBhXgsQgNgGgNgIQheg7AAhQIAAgCIAAgDIAAgBQADhOBbg5QASgKARgJQBWgpBvAAQB7ABBWAuIAXANQBdA5ADBQIAAAGQgDBPhdA6IghASQhVAphyAAIgEAAg");
	this.shape_57.setTransform(97.8,300.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,1,1).p("AlHABIAAgBQAAAAAAAAAFIAAQAAAAAAAAIAAAB");
	this.shape_58.setTransform(97.8,309.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000099").s().p("AjnCLQheg6gBhPIAAgCIAAAAIAAgBIAAgDQAChOBdg3QBhg6CGAAQCIAABgA6QBeA4ACBPIAAABIAAABIAAAAIAAACQgCBPheA6QhgA5iIAAQiGAAhhg5g");
	this.shape_59.setTransform(97.8,309.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(0,0,0,0.035)").ss(0.1,1,1).p("AlNgEQADhRBdg5QAPgJAOgIQBZgtB3AAQCAABBaAxQAJAFAKAGQBfA6ACBTQAAADAAABQgCBShfA8QgNAIgPAHQhZAuh4AAQgBAAgDAAQh6gBhZgwQgLgGgKgGQhgg8gBhRQAAgDAAAAQAAAAAAAAQAAgCAAgCg");
	this.shape_60.setTransform(104.6,303.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#09099C").s().p("AgEDNQh6gBhZgwIgVgLQhgg9gBhSIAAgCIAAAAIAAgEQADhQBdg6IAdgRQBZgsB3gBQCAACBaAxIATALQBfA5ACBTIAAAEQgCBThfA7IgcAQQhZAth4AAIgEAAg");
	this.shape_61.setTransform(104.6,303.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(0,0,0,0.067)").ss(0.1,1,1).p("AlUgEQADhTBeg8QAPgKAPgIQBbgwB6AAQCDABBcA0QAKAFAKAGQBgA9ACBVQAAAEAAABQgCBVhfA+QgOAJgPAIQhbAwh7AAQgCAAgDAAQh9gBhcgzQgKgGgLgGQhgg+gChVQAAgDAAAAQAAAAAAAAQAAgCAAgCg");
	this.shape_62.setTransform(111.3,297.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1111A0").s().p("AgEDWQh9gBhcgzIgVgMQhgg+gChVIAAgDIAAAAIAAgEQADhTBeg8QAPgKAPgIQBbgwB6AAQCDABBcA0IAUALQBgA9ACBVIAAAFQgCBVhfA+IgdARQhbAwh7AAIgFAAg");
	this.shape_63.setTransform(111.3,297.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(0,0,0,0.102)").ss(0.1,1,1).p("AlagEQAChWBfg/QAPgKAPgIQBdgzB9gBQCHACBeA3QAKAFAKAHQBhA/ACBYQAAAEAAABQgCBYhgBAQgOAJgPAJQhdAzh+ABQgCAAgDAAQiAgBheg3QgLgGgKgGQhihBgBhYQAAgCAAgBQAAAAAAAAQAAgCAAgCg");
	this.shape_64.setTransform(118.1,292.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#1A1AA3").s().p("AgEDgQiAgBheg3IgVgMQhihBgBhYIAAgDIAAAAIAAgEQAChWBfg/QAPgKAPgIQBdgzB9gBQCHACBeA3IAUAMQBhA/ACBYIAAAFQgCBYhgBAIgdASQhdAzh+ABIgFAAg");
	this.shape_65.setTransform(118.1,292.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(0,0,0,0.133)").ss(0.2,1,1).p("AlhgDQADhaBfhBQAPgKAQgJQBfg3CAAAQCKACBhA5QAKAGAKAHQBiBCACBbQAAAEAAABQgCBchgBBQgPAKgPAKQhgA2iBAAQgCAAgCAAQiEAAhgg6QgLgGgLgIQhihDgChaQAAgDAAAAQAAgBAAAAQAAgBAAgCg");
	this.shape_66.setTransform(124.9,286.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2222A7").s().p("AgDDpQiEgBhgg5IgWgNQhihDgChcIAAgCIAAgBIAAgDQADhaBfhBQAPgKAQgJQBfg3CAAAQCKACBhA6IAUAMQBiBCACBbIAAAFQgCBbhgBDIgeATQhgA2iBAAIgEAAg");
	this.shape_67.setTransform(124.9,286.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(0,0,0,0.169)").ss(0.2,1,1).p("AlngDQAChdBghDQAPgKAQgKQBig6CDgBQCOACBiA+QAKAFAKAHQBjBEADBfQAAAEAAABQgCBehhBFQgPAKgPAJQhiA6iEABQgCAAgDAAQiHgBhig9QgMgHgKgGQhkhGgBheQAAgDAAAAQAAAAAAgBQAAgBAAgCg");
	this.shape_68.setTransform(131.7,280.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#2B2BAA").s().p("AgDDyQiHAAhig9IgXgOQhjhFgCheIAAgDIAAgBIAAgDQADhdBghDQAPgKAQgKQBhg6CDAAQCPABBiA+IAUAMQBjBFACBeIAAAFQgBBehiBFIgdATQhiA6iFAAIgEAAg");
	this.shape_69.setTransform(131.7,280.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(0,0,0,0.2)").ss(0.2,1,1).p("AlugDQAChfBhhGQAPgLAQgKQBkg9CGgBQCRABBlBBQAKAHALAHQBjBGADBiQAAADAAACQgCBhhhBHQgPALgPAJQhkA9iIABQgCAAgDAAQiKgBhlhAQgMgGgKgIQhkhIgChhQAAgCAAgBQAAgBAAAAQAAgBAAgCg");
	this.shape_70.setTransform(138.4,275.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3333AD").s().p("AgDD8QiKgBhlhAQgMgGgKgIQhkhIgChhIAAgDIAAgBIAAgDQAChfBhhGQAPgLAQgKQBkg9CGgBQCRABBlBBIAVAOQBjBGADBiIAAAFQgCBhhiBHIgdAUQhlA9iHABIgFAAg");
	this.shape_71.setTransform(138.4,275.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(0,0,0,0.235)").ss(0.3,1,1).p("Al0gDQAChiBhhIQAPgMARgKQBlhACKgBQCVABBmBEQALAHAKAHQBlBJADBkQAAAEAAACQgCBkhiBJQgPALgQALQhmBAiLAAQgCAAgDAAQiNAAhnhDQgMgHgLgIQhlhKgBhlQAAgCAAgBQAAAAAAgBQAAgBAAgCg");
	this.shape_72.setTransform(145.2,269.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3C3CB1").s().p("AgDEFQiOAAhnhDIgWgPQhlhKgChlIAAgDIAAgBIAAgDQAChiBhhIIAhgWQBlhACJgBQCWABBmBEIAVAOQBlBJACBkIAAAGQgCBkhiBJIgeAWQhnBAiKAAIgFAAg");
	this.shape_73.setTransform(145.2,269.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(0,0,0,0.267)").ss(0.3,1,1).p("Al7gDQAChlBihKQAQgMAQgLQBohDCNgCQCYACBpBHQALAHAKAHQBmBLACBoQAAAEAAACQgBBnhjBMQgPALgQALQhpBDiNABQgDAAgCAAQiRgBhphGQgMgHgLgIQhmhNgChnQAAgDAAAAQAAgBAAgBQAAAAAAgDg");
	this.shape_74.setTransform(152,263.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#4444B4").s().p("AgDEPQiRgBhohGIgYgPQhlhNgChnIAAgDIAAgCIAAgDQAChlBihKIAggXQBnhDCNgCQCZACBoBHIAWAOQBlBLADBoIAAAGQgCBnhiBMIggAWQhoBDiOABIgFAAg");
	this.shape_75.setTransform(152,263.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(0,0,0,0.302)").ss(0.3,1,1).p("AmCgDQAChoBjhNQAPgNASgLQBphGCQgBQCcABBrBKQALAHAKAIQBnBOADBrQAAAEAAABQgCBrhjBOQgQAMgQALQhqBGiRABQgDAAgDAAQiUgBhrhJQgMgIgLgIQhnhPgChqQAAgDAAgBQAAAAAAAAQAAgCAAgCg");
	this.shape_76.setTransform(158.7,258.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#4D4DB8").s().p("AgDEYQiUgBhrhJIgXgQQhnhPgChqIAAgDIAAgBIAAgEQAChoBjhNQAPgNASgKQBphHCQgBQCcABBrBKIAVAQQBnBNADBrIAAAGQgCBqhjBNIggAYQhqBGiRABIgGAAg");
	this.shape_77.setTransform(158.7,258.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(0,0,0,0.333)").ss(0.4,1,1).p("AmIgDQAChrBjhPQAQgNARgMQBshJCTgCQCfABBtBOQALAHALAIQBoBQACBuQAAAFAAABQgBBthkBRQgQAMgQAMQhtBJiUABQgDAAgCAAQiYgBhthLQgMgJgLgIQhohRgChuQAAgDAAAAQAAgBAAgBQAAAAAAgDg");
	this.shape_78.setTransform(165.5,252.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#5555BB").s().p("AgCEiQiYgChthLIgXgRQhohRgChuIAAgDIAAgCIAAgDQAChrBjhPQAQgNARgLQBshKCTgCQCfACBtBNIAWAQQBoBQACBuIAAAGQgBBthkBQIggAYQhtBJiUACIgFAAg");
	this.shape_79.setTransform(165.5,252.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(0,0,0,0.369)").ss(0.4,1,1).p("AmPgCQAChuBjhSQAQgNASgNQBuhMCWgCQCjABBvBQQAMAIAKAJQBpBSADBxQAAAFAAACQgCBvhlBUQgPAMgRAMQhvBMiXACQgDAAgCAAQibgBhwhQQgMgIgLgIQhphUgChxQAAgCAAAAQAAgBAAgBQAAgBAAgCg");
	this.shape_80.setTransform(172.3,246.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#5E5EBE").s().p("AgCErQibgBhwhQQgMgHgLgKQhphTgChwIAAgEIAAgBIAAgDQAChuBjhSQAQgOASgLQBuhNCWgCQCjABBvBRIAWAQQBpBSADBxIAAAGQgCBxhlBTIggAYQhvBNiXABIgFAAg");
	this.shape_81.setTransform(172.3,246.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AmVgCQABhxBkhUQARgOASgMQBwhQCZgCQCmAAByBVQALAIALAJQBqBUACB1QAAAEAAACQgBBzhlBVQgQANgRANQhxBPiaABQgEAAgCAAQieAAhyhTQgMgIgMgJQhphWgCh0QAAgDAAAAQAAgBAAgBQAAgBAAgCg");
	this.shape_82.setTransform(179,241);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#6666C2").s().p("AgCE0QiegBhyhSIgYgRQhphXgChzIAAgEIAAgBIAAgDQABhyBkhTQARgOASgMQBwhQCZgCQCmABByBUIAWARQBqBUACB0IAAAHQgBByhlBVIghAaQhxBQiaABIgGAAg");
	this.shape_83.setTransform(179,241);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("rgba(0,0,0,0.435)").ss(0.5,1,1).p("AmcgCQABh0BlhWQAQgOATgOQByhTCcgCQCqABB0BXQAMAIAKAJQBrBXADB4QAAAFAAACQgCB1hmBYQgQAOgRANQhzBSidACQgEAAgCAAQihgBh1hWQgMgIgMgKQhqhYgCh2QAAgEAAAAQAAgBAAAAQAAgCAAgCg");
	this.shape_84.setTransform(185.8,235.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#6F6FC5").s().p("AgCE+QihgBh0hWIgZgSQhqhYgCh3IAAgDIAAgBIAAgEQABh0BlhWQAQgOATgNQByhUCcgCQCqACB0BWIAXASQBqBWADB4IAAAHQgBB1hnBYIghAaQhyBTieACIgGAAg");
	this.shape_85.setTransform(185.8,235.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("rgba(0,0,0,0.467)").ss(0.5,1,1).p("AmjgCQACh3BlhYQARgPASgOQB0hWCggCQCtABB2BaQAMAIALAKQBsBZACB7QAAAFAAABQgBB6hmBZQgRAOgRAOQh1BWihABQgDAAgDAAQikgBh3hYQgMgKgMgJQhrhbgDh5QAAgEAAAAQAAAAAAgCQAAgBAAgCg");
	this.shape_86.setTransform(192.6,229.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#7777C9").s().p("AgBFHQilAAh3haIgYgSQhqhbgEh5IAAgEIAAgCIAAgCQACh4BlhYQARgPATgNQBzhXCggCQCtABB3BaIAWASQBsBaADB6IAAAGQgCB5hmBaIgiAcQh1BWihABIgFAAg");
	this.shape_87.setTransform(192.6,229.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("rgba(0,0,0,0.502)").ss(0.5,1,1).p("AmpgBQACh7BlhaQARgQATgOQB2hZCigCQCxAAB5BeQALAJAMAJQBsBcADB+QAAAFAAABQgBB8hnBcQgQAPgTAOQh3BZijABQgEAAgDAAQinAAh5hcQgNgJgLgKQhshdgDh9QAAgDAAgBQAAAAAAgBQAAgCAAgBg");
	this.shape_88.setTransform(199.4,223.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#8080CC").s().p("AgCFQQinAAh5hcQgNgJgMgKQhshdgCh9IAAgEIAAgBIAAgDQACh7BlhaQARgQATgOQB2hZCigCQCxAAB5BeIAWASQBtBcADB+IAAAGQgBB8hoBcQgQAPgSAOQh2BZikABIgHAAg");
	this.shape_89.setTransform(199.4,223.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("rgba(0,0,0,0.533)").ss(0.6,1,1).p("AmwgBQACh+BmhdQARgQATgOQB4hcClgDQC1ABB7BgQAMAKALAJQBuBeADCBQAAAGAAABQgBB/hoBfQgQAPgTAOQh5BcimACQgEAAgEAAQiqgBh8hfQgMgJgMgLQhthfgDiAQAAgDAAAAQAAgBAAgBQAAgCAAgBg");
	this.shape_90.setTransform(206.1,218.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#8888CF").s().p("AgCFaQiqgBh7hfQgNgJgMgLQhthfgDiAIAAgDIAAgCIAAgDQACh+BmhdQARgQATgOQB4hcCmgDQC0ABB6BgIAYATQBtBeAECBIAAAHQgCB/hnBfQgRAPgTAOQh4BcinACIgHAAg");
	this.shape_91.setTransform(206.1,218.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("rgba(0,0,0,0.565)").ss(0.6,1,1).p("Am2gBQABiBBnhfQARgQAUgPQB6hgCogCQC4AAB9BkQANAKALAKQBvBgACCEQAAAGAAABQgBCChoBhQgQAQgUAOQh6BfiqACQgEAAgDAAQivAAh9hjQgMgJgNgLQhthhgDiDQAAgEAAAAQAAgBAAgBQAAgCAAgBg");
	this.shape_92.setTransform(212.9,212.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#9090D3").s().p("AgBFjQivAAh9hjIgZgUQhthhgDiDIAAgEIAAgCIAAgDQABiBBnhfQARgQAUgPQB6hgCpgCQC3AAB9BkIAYAUQBuBgADCEIAAAHQAACChpBhQgRAQgSAOQh8BfipACIgHAAg");
	this.shape_93.setTransform(212.9,212.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("rgba(0,0,0,0.6)").ss(0.6,1,1).p("Am9gBQACiDBnhiQARgRAUgPQB8hjCsgDQC7ABB/BnQANAKALAKQBwBjADCHQAAAGAAABQgBCFhpBjQgRAQgTAPQh9BjitACQgEAAgDAAQiygBh/hlQgNgKgMgLQhvhkgDiGQAAgDAAgBQAAgBAAAAQAAgDAAgBg");
	this.shape_94.setTransform(219.6,206.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#9999D6").s().p("AgBFtQiygBh/hlQgNgKgMgLQhvhkgDiGIAAgEIAAgBIAAgEQACiDBnhiQARgRAUgPQB8hjCsgDQC7ABB/BnIAYAUQBwBjADCHIAAAHQgBCFhpBjQgRAQgTAPQh9BjitACIgHAAg");
	this.shape_95.setTransform(219.6,206.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("rgba(0,0,0,0.631)").ss(0.7,1,1).p("AnDgBQABiGBohkQASgRAUgQQB+hmCvgDQC+ABCCBqQAMAKAMAKQBxBmACCKQAAAGAAABQAACIhqBlQgRARgTAQQh/BliwACQgFAAgDAAQi0AAiChpQgNgKgNgLQhvhngDiIQAAgEAAgBQAAAAAAgBQAAgCAAgCg");
	this.shape_96.setTransform(226.4,201.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#A1A1DA").s().p("AgBF2Qi0AAiChpIgagVQhvhngDiIIAAgFIAAgBIAAgEQABiGBohkQASgRAUgQQB+hmCvgDQC+ABCCBqIAYAUQBxBmACCKIAAAHQAACIhqBlQgRARgTAQQh/BliwACIgIAAg");
	this.shape_97.setTransform(226.4,201.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("rgba(0,0,0,0.667)").ss(0.7,1,1).p("AnKAAQABiKBohmQASgSAVgQQCAhpCygDQDCAACEBtQANALALALQByBnADCOQAAAGAAABQgBCLhqBoQgRARgUAQQiBBoizACQgFAAgDAAQi4AAiEhsQgNgKgNgMQhwhogDiMQAAgEAAAAQAAgBAAgBQAAgCAAgBg");
	this.shape_98.setTransform(233.2,195.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#AAAADD").s().p("AgBF/Qi4AAiEhsIgagWQhwhogDiMIAAgEIAAgCIAAgDQABiKBohmQASgSAVgQQCAhpCygDQDCAACEBtIAYAWQByBnADCOIAAAHQgBCLhqBoQgRARgUAQQiBBoizACIgIAAg");
	this.shape_99.setTransform(233.2,195.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("rgba(0,0,0,0.698)").ss(0.7,1,1).p("AnQAAQABiNBohoQATgSAUgRQCDhsC1gEQDFABCGBwQANALAMALQByBqADCQQAAAHAAABQAACOhrBqQgRASgUAQQiEBsi2ACQgEAAgDAAQi8AAiGhvQgOgLgMgMQhxhrgDiPQAAgDAAgBQAAgBAAgBQAAgCAAgBg");
	this.shape_100.setTransform(239.9,189.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#B2B2E0").s().p("AAAGJQi8AAiGhvIgagXQhxhrgDiPIAAgEIAAgCIAAgDQABiNBohoQATgSAUgRQCDhsC1gEQDFABCGBwIAZAWQByBqADCQIAAAIQAACOhrBqQgRASgUAQQiEBsi2ACIgHAAg");
	this.shape_101.setTransform(239.9,189.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("rgba(0,0,0,0.733)").ss(0.8,1,1).p("AnXAAQABiPBqhsQARgTAWgRQCFhvC3gDQDKAACIBzQANALAMAMQBzBsADCUQAAAHAAABQAACRhsBsQgRASgVARQiFBvi5ACQgFAAgDAAQi/AAiIhyQgOgLgMgNQhyhsgEiTQAAgDAAgBQAAgBAAgBQAAgCAAgBg");
	this.shape_102.setTransform(246.7,184);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#BBBBE4").s().p("AgBGSQi+AAiJhyIgagYQhxhsgEiTIAAgEIAAgCIAAgDQABiPBphsQASgSAWgSQCEhvC4gDQDJAACIBzIAaAXQBzBtADCTIAAAIQAACRhsBsQgSASgUARQiFBvi6ACIgIAAg");
	this.shape_103.setTransform(246.7,184);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("rgba(0,0,0,0.765)").ss(0.8,1,1).p("AndAAQAAiTBrhtQASgTAWgSQCGhyC7gEQDNABCKB2QANALAMAMQB1BvADCXQAAAHAAAAQAACUhtBvQgRATgVARQiHByi9ACQgEAAgEAAQjCAAiKh1QgPgLgMgNQhyhvgEiVQAAgEAAgBQAAgBAAgBQAAgCAAgBg");
	this.shape_104.setTransform(253.5,178.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#C3C3E7").s().p("AAAGbQjCAAiKh1IgbgXQhyhwgFiVIAAgFIAAgCIAAgDQACiTBphtQATgTAWgSQCGhyC7gDQDMAACLB2IAaAYQB0BuADCXIAAAIQgBCUhsBuQgRATgVARQiHByi9ACIgIAAg");
	this.shape_105.setTransform(253.5,178.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("rgba(0,0,0,0.8)").ss(0.8,1,1).p("AnkAAQABiVBqhwQATgUAVgRQCJh3C+gDQDRABCMB6QAOAKALANQB2BxADCaQAAAHAAABQgBCXhsBxQgSASgVATQiKB0i/ADQgEAAgEAAQjFAAiNh4QgOgNgNgLQh0hygDiZQAAgEAAAAQAAgBAAgBQAAgCAAgCg");
	this.shape_106.setTransform(260.3,172.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#CCCCEB").s().p("AAAGlQjGAAiMh4IgbgYQh0hygDiZIAAgEIAAgCIAAgEQABiVBqhwQATgUAWgSQCIh2C+gDQDRAACMB6QANAMANAMQB1BxADCZIAAAIQgBCYhsBxQgSASgVATQiJB0jAADIgIAAg");
	this.shape_107.setTransform(260.3,172.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("rgba(0,0,0,0.831)").ss(0.9,1,1).p("AnrAAQABiYBrhyQATgUAWgTQCLh5DBgDQDTAACPB9QAOAMANAMQB2BzACCdQAAAIAAAAQAACahtB0QgSATgVASQiMB5jCACQgFAAgEAAQjJAAiOh7QgOgMgOgNQh0h0gEicQAAgEAAAAQAAgBAAgBQAAgCAAgCg");
	this.shape_108.setTransform(267,166.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D4D4EE").s().p("AAAGuQjJAAiOh7IgbgZQh1h0gDicIAAgEIAAgCIAAgEQAAiYBrhyQATgUAWgTQCLh5DBgDQDTAACPB9IAaAYQB3BzADCdIAAAIQgBCahtB0QgSATgVASQiMB5jDACIgIAAg");
	this.shape_109.setTransform(267,166.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("rgba(0,0,0,0.867)").ss(0.9,1,1).p("AnxAAQAAibBsh0QATgVAWgTQCNh8DEgEQDYAACQCBQAOAMANAMQB3B2ADCgQAAAHAAABQAACdhuB2QgSAUgWASQiNB8jGADQgFAAgEAAQjMgBiRh+QgOgMgNgNQh1h3gEieQAAgEAAgBQAAgBAAgBQAAgCAAgCg");
	this.shape_110.setTransform(273.8,161.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#DDDDF1").s().p("AAAG4QjMgBiRh+QgOgMgNgNQh1h3gEieIAAgFIAAgCIAAgEQAAibBsh0QATgVAWgTQCNh8DEgEQDYAACQCBIAbAYQB3B2ADCgIAAAIQAACdhuB2QgSAUgWASQiNB8jGADIgJAAg");
	this.shape_111.setTransform(273.8,161.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("rgba(0,0,0,0.898)").ss(0.9,1,1).p("An4AAQABidBsh3QATgVAXgUQCPh/DHgEQDbAACTCDQAOANANAMQB4B5ADCjQAAAHAAACQAACfhvB5QgSAUgWATQiQB/jJACQgFAAgEAAQjOAAiUiCQgOgMgOgOQh1h4gFihQAAgFAAAAQAAgBAAgCQAAgBAAgDg");
	this.shape_112.setTransform(280.5,155.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#E5E5F5").s().p("AAAHBQjOAAiUiBIgcgaQh1h6gFigIAAgGIAAgBIAAgFQABidBsh3QATgVAXgUQCPh/DHgEQDbAACTCDIAbAaQB4B4ADCjIAAAIQAACghvB4QgSAVgWATQiQB+jJADIgJAAg");
	this.shape_113.setTransform(280.5,155.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("rgba(0,0,0,0.933)").ss(1,1,1).p("An+AAQAAihBth5QATgVAXgUQCRiCDKgFQDfABCVCGQAOANANANQB5B6ADCnQAAAHAAABQAACjhvB7QgTAUgWAUQiSCCjMACQgFAAgEAAQjSAAiViEQgPgNgNgOQh3h7gEilQAAgDAAgBQAAgBAAgBQAAgCAAgDg");
	this.shape_114.setTransform(287.3,149.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#EEEEF8").s().p("AAAHLQjSgBiViEQgPgNgNgOQh3h7gEilIAAgEIAAgCIAAgFQAAihBth4QATgWAXgUQCRiCDKgFQDfABCVCGQAOANANANQB5B6ADCnIAAAIQAACjhvB7QgTAUgWAUQiSCCjMADIgJAAg");
	this.shape_115.setTransform(287.3,149.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("rgba(0,0,0,0.965)").ss(1,1,1).p("AoFAAQAAijBuh8QATgWAYgUQCTiGDNgEQDiAACXCKQAPANANANQB6B9ADCpQAAAIAAABQAACmhwB9QgTAVgWAUQiUCFjPADQgFAAgFAAQjVAAiYiIQgOgNgOgOQh3h+gFinQAAgFAAAAQAAgBAAgBQAAgCAAgDg");
	this.shape_116.setTransform(294.1,144.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F6F6FC").s().p("AAAHUQjVAAiYiIIgcgbQh3h+gFinIAAgFIAAgCIAAgFQAAijBuh8QATgWAYgUQCTiGDNgEQDiAACXCKIAcAaQB6B9ADCpIAAAJQAACmhwB9QgTAVgWAUQiUCFjPADIgKAAg");
	this.shape_117.setTransform(294.1,144.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(1,1,1).p("AIMAAQAADFiaCNQiZCLjZAAQjYAAiaiLQiaiNAAjFQAAjECaiLQCaiNDYAAQDZAACZCNQCaCLAADEg");
	this.shape_118.setTransform(300.9,138.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AlyFSQiaiNAAjFQAAjECaiLQCaiNDYAAQDZAACZCNQCbCLAADEQAADFibCNQiZCLjZAAQjYAAiaiLg");
	this.shape_119.setTransform(300.9,138.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64.1,8,67.5,67.5);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("kaishi", "24px 'Times New Roman'");
	this.text.lineHeight = 29;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(12,13.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ao0jqIRpAAIAAHVIxpAAg");
	this.shape.setTransform(56.5,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("Ao0DrIAAnVIRpAAIAAHVg");
	this.shape_1.setTransform(56.5,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,115,49);


// stage content:
(lib.控制不同动画 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.btn.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			
			this.mov.play();
		}
		
		this.btn2.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			
			this.play();
		}
	}
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(1));

	// 图层 4
	this.mov = new lib.元件2();
	this.mov.parent = this;
	this.mov.setTransform(70,180,1,1,0,0,0,97.8,168.7);
	this.mov._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mov).wait(35).to({_off:false},0).wait(1));

	// 图层 2
	this.text = new cjs.Text("一个影片剪辑，一个补间形状动画", "24px 'Times New Roman'");
	this.text.lineHeight = 26;
	this.text.lineWidth = 249;
	this.text.parent = this;
	this.text.setTransform(227,38.7);

	this.btn2 = new lib.元件3();
	this.btn2.parent = this;
	this.btn2.setTransform(244.5,349,1,1,0,0,0,49.5,21);
	new cjs.ButtonHelper(this.btn2, 0, 1, 1);

	this.btn = new lib.元件1();
	this.btn.parent = this;
	this.btn.setTransform(405.5,341.5,1,1,0,0,0,56.5,23.5);
	new cjs.ButtonHelper(this.btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn},{t:this.btn2},{t:this.text}]}).wait(36));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AhIhIICRAAIAACRIiRAAg");
	this.shape.setTransform(72.3,95.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FF99").s().p("AhIBIIAAiQICQAAIAACQg");
	this.shape_1.setTransform(72.3,95.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F80007").ss(1.1,1,1).p("AhXhIICAgPIAhADIAOBcIgCBDIg6ALIhkACIgGgcg");
	this.shape_2.setTransform(77.8,94.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#39F895").s().p("AhOA8IgJiEICAgPIAhADIAOBcIgCBDIg7ALIhkACg");
	this.shape_3.setTransform(77.8,94.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F0000F").ss(1.2,1,1).p("AhnhIICNgeIAlAGIAdBhIgEBNIg8AVIhyAEIgLgag");
	this.shape_4.setTransform(83.3,93.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3FF090").s().p("AhVBNIgSiVICOgeIAlAGIAcBhIgEBNIg8AVIhyAEg");
	this.shape_5.setTransform(83.3,93.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E90016").ss(1.2,1,1).p("Ah3hJICbgsIAoAIIAsBpIgHBUIg8AhIiAAFIgRgZg");
	this.shape_6.setTransform(88.8,92.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#44E98C").s().p("AhcBdIgbimICbgsIAoAIIAsBpIgHBUIg8AhIiAAFg");
	this.shape_7.setTransform(88.8,92.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E2001D").ss(1.3,1,1).p("AiGhJICng7IAtALIA5BuIgJBeIg9ArIiOAHIgWgXg");
	this.shape_8.setTransform(94.3,91.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4AE288").s().p("AhjBuIgji3ICng7IAtALIA5BuIgJBeIg9AsIiOAGg");
	this.shape_9.setTransform(94.3,91.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#DB0024").ss(1.4,1,1).p("AiWhJIC1hKIAwANIBIB1IgLBmIg+A3IicAIIgbgWg");
	this.shape_10.setTransform(99.8,90.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#50DB83").s().p("AhpB+IgtjHIC1hKIAwANIBIB1IgLBmIg+A3IicAIg");
	this.shape_11.setTransform(99.8,90.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#D3002C").ss(1.4,1,1).p("AimhKIDChZIA1ARIBWB6IgOBwIg+BBIiqAKIghgVg");
	this.shape_12.setTransform(105.3,89.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#56D37F").s().p("AhwCOIg2jYIDChZIA1ARIBWB6IgOBwIg+BBIiqALg");
	this.shape_13.setTransform(105.3,89.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CC0033").ss(1.5,1,1).p("Ai2hKIDPhnIA5ATIBlCAIgRB5Ig+BMIi4AMIgngUg");
	this.shape_14.setTransform(110.8,88.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5CCC7A").s().p("Ah3CfIg/jpIDPhoIA5AUIBlB/IgRB6Ig+BLIi4ANg");
	this.shape_15.setTransform(110.8,88.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#C5003A").ss(1.6,1,1).p("AjFhKIDch3IA9AXIByCFIgSCCIg/BXIjGAOIgtgSg");
	this.shape_16.setTransform(116.3,87.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#62C576").s().p("Ah+CwIhHj6IDch3IA9AXIByCFIgSCCIg/BXIjGAOg");
	this.shape_17.setTransform(116.3,87.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#BD0042").ss(1.7,1,1).p("AjVhLIDpiFIBBAZICBCMIgVCLIhABhIjUAQIgxgRg");
	this.shape_18.setTransform(121.8,86.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#67BD72").s().p("AiFDAIhQkLIDpiFIBAAZICCCMIgVCLIhABhIjUAQg");
	this.shape_19.setTransform(121.8,86.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#B60049").ss(1.7,1,1).p("AjlhLID3iUIBEAcICQCRIgXCVIhBBsIjiARIg3gPg");
	this.shape_20.setTransform(127.3,85.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6DB66D").s().p("AiLDRIhakcID3iUIBEAcICQCRIgXCVIhBBsIjiARg");
	this.shape_21.setTransform(127.3,85.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#AF0050").ss(1.8,1,1).p("Aj1hMIEEiiIBJAeICdCXIgZCfIhBB2IjxATIg8gOg");
	this.shape_22.setTransform(132.8,84.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#73AF69").s().p("AiSDhIhiksIEDijIBJAfICdCXIgZCdIhBB4IjxASg");
	this.shape_23.setTransform(132.8,84.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#A80057").ss(1.9,1,1).p("AkEhMIERixIBMAhICsCdIgcCnIhBCCIj/AUIhCgMg");
	this.shape_24.setTransform(138.3,83.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#79A865").s().p("AiZDyIhrk+IERixIBMAhICsCdIgcCnIhBCCIj/AUg");
	this.shape_25.setTransform(138.3,83.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#A0005F").ss(1.9,1,1).p("AkUhMIEejAIBRAkIC6CjIgeCwIhCCMIkNAWIhHgKg");
	this.shape_26.setTransform(143.8,82.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7FA060").s().p("AigEDIh0lPIEejAIBQAkIC7CjIgeCwIhDCMIkMAWg");
	this.shape_27.setTransform(143.8,82.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#990066").ss(2,1,1).p("AkkhNIEsjPIBUAnIDJCoIghC6IhDCYIkaAXIhNgJg");
	this.shape_28.setTransform(149.3,81.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#85995C").s().p("AimETIh9lfIEqjPIBVAmIDJCpIghC5IhDCXIkaAYg");
	this.shape_29.setTransform(149.3,81.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#92006D").ss(2.1,1,1).p("Ak0hNIE5jeIBYAqIDXCuIgiDDIhECiIkoAaIhTgIg");
	this.shape_30.setTransform(154.8,80.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8A9257").s().p("AitEkIiHlxIE5jeIBYAqIDYCuIgjDDIhECiIkoAag");
	this.shape_31.setTransform(154.8,80.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#8A0075").ss(2.1,1,1).p("AlDhNIFGjtIBbAsIDmC1IgkDLIhFCtIk3AcIhYgHg");
	this.shape_32.setTransform(160.3,80);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#908A53").s().p("AizE0IiQmBIFGjtIBbAsIDmC1IgkDLIhFCtIk3Acg");
	this.shape_33.setTransform(160.3,80);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#83007C").ss(2.2,1,1).p("AlThNIFTj8IBgAvID0C6IgnDVIhGC4IlEAdIhegFg");
	this.shape_34.setTransform(165.8,79);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#96834F").s().p("Ai7FFIiYmSIFTj8IBgAvID0C7IgnDUIhGC4IlEAdg");
	this.shape_35.setTransform(165.8,79);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#7C0083").ss(2.3,1,1).p("AljhOIFhkKIBkAyIEBDAIgpDeIhGDDIlSAeIhjgEg");
	this.shape_36.setTransform(171.3,78.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9C7C4A").s().p("AjBFVIiimjIFhkKIBkAyIEBC/IgpDfIhGDDIlSAeg");
	this.shape_37.setTransform(171.3,78.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#75008A").ss(2.4,1,1).p("AlyhOIFtkZIBoA1IEQDFIgsDnIhGDOIlgAgIhpgCg");
	this.shape_38.setTransform(176.8,77.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A27546").s().p("AjIFmIiqm0IFtkZIBoA1IEQDFIgsDnIhGDOIlgAgg");
	this.shape_39.setTransform(176.8,77.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#6D0092").ss(2.4,1,1).p("AmChPIF7knIBrA3IEfDMIguDwIhHDYIlvAiIhugBg");
	this.shape_40.setTransform(182.3,76.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A86D42").s().p("AjPF2IiznFIF7knIBrA3IEfDMIguDwIhHDYIlvAig");
	this.shape_41.setTransform(182.3,76.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#660099").ss(2.5,1,1).p("AmShPIGIk3IBvA7IEuDRIgxD5IhHDkIl9AjIh0ABg");
	this.shape_42.setTransform(187.8,75.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#AD663D").s().p("AmShPIGIk3IBvA7IEuDRIgxD5IhHDkIl9AjIh0ABg");
	this.shape_43.setTransform(187.8,75.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#5F00A0").ss(2.6,1,1).p("AmhhQIGVlGIBzA9IE7DXIgyEDIhJDuImKAmIh5ABg");
	this.shape_44.setTransform(193.3,74.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B35F39").s().p("AmhhQIGVlFIBzA9IE7DXIgyECIhJDvImKAlIh5ABg");
	this.shape_45.setTransform(193.3,74.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#5700A8").ss(2.6,1,1).p("AmxhRIGilVIB3BAIFKDdIg1EMIhJD5ImYAnIh/AEg");
	this.shape_46.setTransform(198.8,73.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B95734").s().p("AmxhRIGilVIB3BAIFKDeIg1ELIhJD5ImYAoIh/ADg");
	this.shape_47.setTransform(198.8,73.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#5000AF").ss(2.7,1,1).p("AnBhSIGwljIB7BCIFYDjIg3EVIhKEEImmApIiFAEg");
	this.shape_48.setTransform(204.3,72.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BF5030").s().p("AnBhSIGwljIB7BCIFYDjIg3EVIhKEEImmApIiFAEg");
	this.shape_49.setTransform(204.3,72.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#4900B6").ss(2.8,1,1).p("AnQhUIG8lxIB/BFIFmDpIg5EdIhLEQIm0AqIiKAGg");
	this.shape_50.setTransform(209.9,71.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C5492C").s().p("AnRhUIG9lxIB/BFIFnDpIg6EeIhLEPIm0AqIiKAGg");
	this.shape_51.setTransform(209.9,71.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#4200BD").ss(2.8,1,1).p("AnghUIHKmBICDBIIF0DuIg7EoIhLEZInDAtIiPAHg");
	this.shape_52.setTransform(215.3,70.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CB4227").s().p("AnghVIHKmAICDBIIF0DvIg7EnIhLEZInDAtIiPAHg");
	this.shape_53.setTransform(215.3,70.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#3A00C5").ss(2.9,1,1).p("AnwhWIHXmPICGBLIGED0Ig+ExIhMEkInRAuIiUAJg");
	this.shape_54.setTransform(220.9,69.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D03A23").s().p("AnwhWIHXmPICHBLIGDD0Ig+ExIhMEkInQAuIiVAJg");
	this.shape_55.setTransform(220.9,69.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#3300CC").ss(3,1,1).p("AoAhXIHkmeICLBOIGSD6IhBE6IhMEvInfAvIiaALg");
	this.shape_56.setTransform(226.4,69);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D6331F").s().p("An/hXIHjmeICLBOIGRD6IhAE6IhMEvIneAvIibALg");
	this.shape_57.setTransform(226.4,69);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#2C00D3").ss(3.1,1,1).p("AoPhYIHxmsICPBQIGgEAIhDFDIhNE6InsAxIigAMg");
	this.shape_58.setTransform(231.9,68.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#DC2C1A").s().p("AoPhYIHwmsICPBQIGgEAIhCFCIhOE7InrAwIigANg");
	this.shape_59.setTransform(231.9,68.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#2400DB").ss(3.1,1,1).p("AofhZIH+m7ICTBTIGuEGIhFFMIhNFEIn7AzIilANg");
	this.shape_60.setTransform(237.4,67.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E22416").s().p("AofhZIH+m7ICTBTIGuEGIhFFMIhNFEIn7AzIimANg");
	this.shape_61.setTransform(237.4,67.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#1D00E2").ss(3.2,1,1).p("AovhZIILnLICXBWIG9EMIhIFVIhOFPIoIA1IirAOg");
	this.shape_62.setTransform(242.9,66.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E81D11").s().p("AovhaIIMnKICXBWIG8ELIhIFVIhOFQIoIA1IirAOg");
	this.shape_63.setTransform(242.9,66.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#1600E9").ss(3.3,1,1).p("Ao+hbIIYnZICbBZIHKERIhJFeIhPFbIrHBGg");
	this.shape_64.setTransform(248.4,65.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EE160D").s().p("Ao+hbIIYnZICbBZIHLESIhKFeIhPFaIrHBGg");
	this.shape_65.setTransform(248.4,65.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#0F00F0").ss(3.3,1,1).p("ApOhcIIlnoIJ4FzIibLNIrbBJg");
	this.shape_66.setTransform(253.9,64.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F30F09").s().p("ApOhcIIlnoIJ4FzIibLNIrbBJg");
	this.shape_67.setTransform(253.9,64.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#0700F8").ss(3.4,1,1).p("ApehdIIzn3IKKF8IifLgIruBNg");
	this.shape_68.setTransform(259.4,63.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F90704").s().p("ApehdIIzn3IKKF8IifLgIruBNg");
	this.shape_69.setTransform(259.4,63.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#0000FF").ss(3.5,1,1).p("AHNIVIsBBQIk6rDIJAoGIKdGEg");
	this.shape_70.setTransform(264.9,62.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("ApuheIJAoFIKdGEIiiL0IsBBQg");
	this.shape_71.setTransform(264.9,62.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(339,236.7,414,334.4);
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