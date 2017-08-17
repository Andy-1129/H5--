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



(lib.钢水流出 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stop1:0,stop2:29,stop3:89});

	// timeline functions:
	this.frame_89 = function() {
		this.gotoAndPlay(29);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AgFAMQgEgBgCgDQgDgEABgEQAAgEACgCQACgFAGgCQAFgCAEADQAFACADAGQACAEgDAFQgBAEgEADQgEACgCAAQgEAAgDgCg");
	this.shape.setTransform(-0.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AAAAQQgEAAgDgCIgBAAIgFgFIgBgCQgCgEABgDQAAgEACgDIAAgBIAFgFIAFgCIADAAQAEgBADACQAFACADAFIABACQABAEAAADIgCAEIgDAFIgDADIgDABIgEABIgCAAg");
	this.shape_1.setTransform(-0.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AgBASQgEAAgDgDIgBAAIgGgGIgBgBQgCgEABgEQAAgFACgDIABgBQACgEAEgCIAFgCIADAAQAFgBADACIABAAQAEADADAFIACACQABAFAAADIgCAFIgEAGIgDACIgEACIgEABIgDAAg");
	this.shape_2.setTransform(-0.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AgBAUIgIgDIgBAAIgGgHIgCgBQgDgFACgFQAAgFADgDIAAgBQADgEAEgDIAFgCIAEgBQAFAAAFADQAFACADAGIACADQACAEgBAFIgCAFIgEAGIgEADIgEACIgFACIgDgBg");
	this.shape_3.setTransform(-0.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AgCAWQgFgBgDgCIgCgBQgEgDgCgEIgCgCQgDgFACgFQAAgGADgDIABgCQACgEAFgDIAGgCIAEgBQAGAAAFADQAFADAEAGIACADQACAFgBAFIgCAGQgCAEgDADIgEADIgFACIgFACIgEgBg");
	this.shape_4.setTransform(-0.3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AgCAYQgFgBgFgDIgBAAIgHgIIgCgCQgDgGABgFQABgGADgFIABgBQADgFAFgDIAHgCIAEgBQAGAAAGADIAAAAQAGAEAEAFIABAEQADAGgBAFIgCAGQgCAFgEADIgEAEIgFACIgGACIgEgBg");
	this.shape_5.setTransform(-0.3,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AgDAaQgFgBgFgDIgCgBQgEgDgDgFIgCgCQgDgHABgGQABgGAEgFIAAgCQAEgEAFgEIAIgCIAEgBQAHAAAGADIAAABQAHADADAGIACAEQADAHgBAFIgCAHQgCAFgEAEIgFAEIgGACIgGACIgFgBg");
	this.shape_6.setTransform(-0.3,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AgDAcQgGgBgFgDIgCgBQgFgEgDgGIgCgCQgDgGABgHQABgHAEgFIABgCQAEgFAFgEIAIgCIAFgBQAIAAAGAEIAAAAQAHAEAEAGIACAFQADAGgBAHIgCAHQgDAFgEAEIgFAEIgGADIgHACIgFgBg");
	this.shape_7.setTransform(-0.3,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AgEAeQgGgBgGgEIgCgBQgFgEgDgGIgBgCQgEgHABgHQABgIAFgGIAAgBQAEgGAGgDIAJgDIAFgBQAIAAAHAEIABAAQAHAEAEAHIACAFQADAHgBAHIgDAIQgCAFgEAFIgGAEIgGADIgJACIgFgBg");
	this.shape_8.setTransform(-0.3,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("AgEAgQgHgBgGgEIgCgBQgFgFgEgGIgBgCQgEgIABgIQABgIAFgGIABgCQAEgGAHgDIAJgDIAFgBQAJAAAHAEIABABQAHAEAFAHIACAFQADAIgBAHIgDAJQgCAFgFAFIgGAFIgHADIgJACIgFgBg");
	this.shape_9.setTransform(-0.3,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9900").s().p("AgFAiQgHgBgGgFIgCgBQgGgFgEgGIgBgDQgEgIABgIQABgJAFgGIABgCQAFgGAHgEIAKgDIAGgBQAJAAAHAEIABABQAIAEAFAIIACAGQADAIgBAHIgDAKQgCAGgFAFIgHAFIgHADIgKACIgGgBg");
	this.shape_10.setTransform(-0.3,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9900").s().p("AgGAkQgIgBgGgFIgCgBQgGgFgEgHIgCgDQgEgJACgIQABgKAFgGIABgDQAFgGAHgEIALgEIAGAAQAKAAAIAFIABAAQAIAFAFAIIADAGQADAIgBAJIgDAKQgDAGgFAFIgHAGIgIADQgFACgFAAIgHgBg");
	this.shape_11.setTransform(-0.3,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9900").s().p("AgGAmQgJgBgGgFIgDgCQgGgFgEgIIgCgCQgEgJACgJQABgKAFgIIACgCQAFgHAIgEIALgEIAGAAQAKAAAJAFIABAAQAIAGAGAIIADAGQADAJgBAJIgDAKQgDAHgGAGIgHAFIgJAEQgFACgFAAIgHgBg");
	this.shape_12.setTransform(-0.3,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9900").s().p("AgGAoQgJgBgHgGIgDgBQgGgGgFgIIgBgDQgFgJACgKQABgKAGgIIACgCQAFgHAIgFIAMgEIAHAAQALAAAJAFIAAABQAJAFAGAJIADAGQAEAKgCAJQgBAGgCAFQgDAHgGAGIgIAGIgJAEQgFACgGAAIgHgBg");
	this.shape_13.setTransform(-0.3,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF9900").s().p("AgHAqQgJgBgIgGIgCgCQgHgGgFgIIgBgDQgFgKACgKQABgLAHgIIABgDQAGgHAIgFIANgEIAHAAQALAAAKAFIABABQAJAGAGAJIADAHQAEAKgCAJQgBAHgCAFQgDAHgGAHIgJAGIgJAEQgGACgGAAIgIgBg");
	this.shape_14.setTransform(-0.3,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9900").s().p("AgHAtQgKgDgIgFIgCgCQgIgGgEgJIgCgDQgFgLACgKQABgMAHgJIABgCQAHgIAJgFQAGgDAGgBIAIgBQAMABAKAGIABAAQAKAGAFAKIAEAHQAEAKgCALQgBAGgCAGQgEAIgGAGQgEAEgFADIgKAEIgMADIgIgBg");
	this.shape_15.setTransform(-0.3,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF9900").s().p("AgIAvQgKgDgIgGIgDgBQgIgHgEgJIgCgDQgFgMACgLQABgMAHgJIACgDQAGgIAKgFQAGgDAHgBIAIgBQAMABALAGIABABQAKAGAGAKIAEAHQAEALgCALQgBAHgCAGQgEAIgHAGQgEAFgFADQgFADgFABIgNADIgJgBg");
	this.shape_16.setTransform(-0.3,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF9900").s().p("AgIAxQgLgDgJgGIgCgCQgIgHgFgJIgCgEQgFgMACgLQABgNAIgJIABgDQAHgIAKgFQAHgEAHgBIAJgBQAMABALAGIABABQALAGAGALIAEAHQAEAMgCALQgBAHgDAHQgDAIgHAHQgEAEgGAEQgFADgGABIgNADIgJgBg");
	this.shape_17.setTransform(-0.3,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF9900").s().p("AgJAzQgLgDgJgHIgDgBQgIgIgFgKIgCgDQgFgMACgMQABgNAIgLIACgCQAHgJAKgFQAHgEAIgBIAJgBQANABALAGIABABQALAHAHALIAEAIQAEAMgCALQgBAIgDAGQgDAJgIAHIgKAIQgFAEgGABIgOADIgKgBg");
	this.shape_18.setTransform(-0.3,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF9900").s().p("AgJA1QgMgDgJgHIgDgCQgJgHgFgLIgCgDQgFgNACgNQABgNAIgLIACgDQAIgJAKgFQAIgEAHgBIAKgBQANABAMAHIACABQALAHAGALIAFAIQAFAMgDANQgBAIgDAGQgEAJgHAIQgFAFgGADIgMAFQgHADgHAAIgKgBg");
	this.shape_19.setTransform(-0.3,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF9900").s().p("AgKA3QgMgDgJgHIgEgCQgJgIgFgLIgCgEQgFgNACgNQABgOAJgLIACgDQAHgJALgGQAIgEAIgBIAKgBQAOABAMAHIACABQALAHAHAMIAFAIQAFANgDANQgBAIgDAHQgEAKgIAHQgFAFgGAEQgGADgGACQgIADgHAAIgLgBg");
	this.shape_20.setTransform(-0.3,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF9900").s().p("AgKA5QgNgDgKgIIgDgCQgJgIgGgLIgCgEQgFgOACgNQABgPAJgLIACgEQAIgJAMgGQAIgEAIgBIAKgBQAPABAMAHIACABQAMAIAHAMIAFAJQAFANgDANQgBAJgDAHQgEAKgIAIQgFAFgHAEQgGADgHACQgHADgIAAQgFAAgGgBg");
	this.shape_21.setTransform(-0.3,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF9900").s().p("AgLA7QgNgDgKgIIgDgCQgKgJgGgLIgCgEQgGgPADgOQACgPAIgMIADgDQAIgKAMgGQAIgEAJgBIAKgBQAPAAAOAIIABACQAMAHAIANIAFAJQAFAOgCANQgCAJgDAIQgEAKgJAIIgLAKQgHADgHACQgIADgIAAIgMgBg");
	this.shape_22.setTransform(-0.3,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF9900").s().p("AgMA9QgNgDgLgIIgDgDQgKgJgGgMIgCgEQgGgOACgPQACgQAJgMIADgDQAIgLAMgGQAJgEAJgBIALgBQAPAAAOAJIACABQAMAIAIANIAFAJQAGAOgDAPQgBAJgEAIQgEAKgJAJQgFAFgHAEQgHAEgHACQgIADgJAAIgMgBg");
	this.shape_23.setTransform(-0.3,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF9900").s().p("AgMA/QgOgDgLgJIgEgCQgKgJgGgNIgCgEQgGgPACgPQACgRAKgMIACgEQAJgKAMgHQAKgEAJgBIALgBQAQAAAOAJIACABQANAIAIAOIAFAJQAGAPgDAPQgBAJgEAJQgEAKgJAJIgNAKQgHAEgHACQgJADgJAAIgMgBg");
	this.shape_24.setTransform(-0.3,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF9900").s().p("AgMBBQgOgDgMgJIgEgDQgKgJgHgNIgCgEQgGgQACgQQADgQAJgOIADgDQAJgLANgHQAJgEAKgBIAMgBQAQAAAPAJIACACQANAIAIANIAFALQAGAPgCAPQgCAKgDAIQgFALgKAKQgFAGgHAEQgHAEgIACQgJADgJAAIgNgBg");
	this.shape_25.setTransform(-0.3,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF9900").s().p("AgNBDQgOgDgMgKIgEgCQgLgKgHgNIgCgFQgGgQACgQQADgRAKgOIACgEQAKgLANgHQAKgEAKgCIAMAAQARAAAPAJIACACQAOAJAIANQADAFACAGQAGAQgCAPQgCALgDAIQgFAMgKAJQgGAGgHAFQgIAEgIACQgJADgJAAIgOgBg");
	this.shape_26.setTransform(-0.3,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF9900").s().p("AgNBFQgPgEgNgJIgDgDQgMgKgGgNIgDgFQgGgRACgQQADgSAKgOIADgEQAKgLANgHQAKgFAKgCIANgBQARABAQAKIACABQAOAJAJAOIAFALQAHAQgDARQgCAKgEAJQgFAMgKAKQgGAGgHAFQgIAEgIACQgKADgJABQgHAAgHgCg");
	this.shape_27.setTransform(-0.3,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF9900").s().p("AgOBHQgPgEgNgJIgEgDQgMgKgGgPIgDgEQgGgRACgRQADgTAKgOIADgEQAKgMAPgHQAKgFAKgCIANgBQASABAQAKIACABQAPAKAIAOIAGALQAHARgDARQgCALgEAJQgFAMgKAKQgHAHgHAEQgIAFgJACQgKADgJABQgHAAgIgCg");
	this.shape_28.setTransform(-0.3,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF9900").s().p("AgOBJQgTgEgOgNQgPgMgHgSQgGgRACgSQADgTALgPQALgPARgIQARgIARAAQATABAQAKQARAKAJAQQAOAWgEAYQgDAZgTATQgNANgSAFQgLAEgKAAQgHAAgHgCg");
	this.shape_29.setTransform(-0.3,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF9900").s().p("AgJBMIgGgCIgJgDQgHgDgHgFIgJgHIgHgIQgJgLgFgNIgDgLIgCgNIAAgNQACgNAFgLQACgFAEgEIABgCIAHgHQAHgHAJgGIAFgCIACgBIADgBIAEgBIAKgDIAOgBIADABIAGABQAPACAOAKQAMAIAIAMIAFAIIACAEQAEAHABAHQADAIAAAIIgBAOQgBAMgFAKIgDAHIgEAHIgJAJIgJAHIgHAEIgGADIgKADIgLACIgEABQgHAAgHgCg");
	this.shape_30.setTransform(-0.4,0.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF9900").s().p("AgLBOIgFgCIgJgDIgNgJQgFgDgEgFIgHgJQgJgLgFgOQgCgFgBgGIgDgOQAAgHABgGQABgOAGgMIAGgKIABgCIAHgHQAIgHAJgFIAGgCIACgBIADAAIADgBIAKgCIANAAIADABIAGABQAQAEAOAKQAMAJAIANIAFAIIACAEQADAHABAIIADAQIgBAQQgCAMgEALIgCAHIgGAHIgJAJIgJAHIgIAEIgGACIgKADIgLABQgJAAgJgDg");
	this.shape_31.setTransform(-0.4,1.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF9900").s().p("AgLBQIgGgCIgIgEIgNgKIgJgJIgHgJQgIgMgFgOIgEgMIgCgPIAAgNQABgOAGgNQACgGAEgEIACgCIAHgHQAJgHAJgFIAGgCIACgBIADAAIADgBIAKgBIANABIADABIAGACQAQAEANAMQAMAJAIAOIAFAJIABAEQAEAHABAJQACAJAAAHIgBARQgBAMgEAMIgDAIIgFAHIgKAJIgKAGIgIAEIgGACIgKACIgLAAQgJgBgIgDg");
	this.shape_32.setTransform(-0.4,1.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF9900").s().p("AAEBYQgJgCgIgEIgFgCIgIgFIgMgLIgJgJIgHgKQgIgNgFgOIgEgNIgDgPIAAgNIAAgBQABgPAHgOQACgFAEgFIACgCIAIgHQAJgHAKgEIAGgCIACAAIACgBIAEAAQAEgCAFACIAMACIAEABIAGABQAQAGANAMQAMALAIAOIAEAKIACAEQADAIABAIIACARIgBASQgCANgDANIgDAIQgCADgDAEIgLAJIgKAGIgJAEIgGABQgFABgFAAIgLAAg");
	this.shape_33.setTransform(-0.4,2.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF9900").s().p("AADBbQgJgDgIgEIgFgDIgHgFIgMgMIgIgJIgHgLQgIgOgGgPIgDgNIgDgPIgBgPIAAgBQABgOAHgPQACgGAEgEIACgDIAIgHQALgHAKgEIAGgBIACgBIACAAIAEAAQAEgBAFABIAMADIADACIAGACQAQAGANAOQAMALAIAPIAEAKIACAFQADAHAAAKIACARIgBATQgBANgDANIgDAIQgCAFgEADIgLAJIgLAGIgJADIgGABIgKABIgLgBg");
	this.shape_34.setTransform(-0.5,3.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF9900").s().p("AACBeQgJgDgIgEIgFgEIgHgGIgLgMQgEgEgEgGIgGgMQgJgOgFgQIgEgNIgDgQIgBgPIAAgBQABgPAHgQQADgGAEgFIACgCIAIgHQALgHALgEIAGgBIACgBIADABIADAAQAEgBAEACIAMAEIADACIAGACQARAIANAOQAMAMAHAQIAEAKIACAFQADAIAAAKIABASIgBAUIgEAbQAAAFgCADQgCAFgFADQgFAFgGAEIgMAGIgJADIgGAAIgLABIgKgDg");
	this.shape_35.setTransform(-0.5,3.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF9900").s().p("AAVBlIgKAAIgLgDQgIgEgIgFIgFgDIgGgHIgLgNIgIgLIgGgMQgIgPgGgQIgDgOIgEgRIgBgQIAAgBQABgPAHgQQADgHAEgFIACgCIAJgHQALgHAMgDIAGgBIACgBIADAAIACAAQAFAAAEADIALAFIADACIAGADQARAIANAPQAMANAHAQIAEALIABAGQADAHABALIAAASIgBAVIgEAcIgCAJQgCAFgFADIgLAJIgNAGIgKACIgDAAIgDAAg");
	this.shape_36.setTransform(-0.5,4.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF9900").s().p("AAUBqIgLgBIgJgEQgKgEgHgGIgFgEIgGgHIgKgOIgIgMIgGgMQgIgQgFgRIgEgNIgEgTIgBgQIAAgBQABgQAHgQQADgIAEgEIACgDIAKgHQAMgHAMgDIAGgBIACAAIACABIADAAQAEAAAEADQAEADAHADIADACIAHADQAQAJANARQAMANAHARIAEAMIABAFQADAIAAAKIAAAVIgBAVIgDAdQAAAGgCAEQgDAEgFAEQgFAFgHAEQgGAEgHACIgKABIgDAAIgDAAg");
	this.shape_37.setTransform(-0.6,5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF9900").s().p("AASBvIgKgCIgKgEQgJgGgHgGIgEgEIgGgIIgKgPIgHgMIgGgNQgIgRgGgRIgEgOQgDgLgBgIQgBgJAAgIIAAgBQABgQAHgSQADgHAEgFIACgDIALgHQANgGAMgDIAGgBIACAAIACABQABAAAAAAQAAgBABABQAAAAAAAAQABAAAAAAQAEAAADAEQAEAEAHADIAEADIAGADQARAKAMARQAMAOAHATIAEALIABAGQACAIAAALIAAAVIgBAWIgCAeQgBAGgCAEQgCAFgFADQgGAGgHADQgHAEgHACIgKABIgCAAIgFAAg");
	this.shape_38.setTransform(-0.6,5.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF9900").s().p("AARBzIgLgCIgJgFQgKgGgGgHIgFgFIgFgJQgEgJgFgGIgHgNIgGgOQgIgRgFgRIgFgPIgEgTQgCgJABgJIgBgBQABgRAHgSQADgIAFgFIACgDIALgHQAOgGAMgDIAHAAIACgBIACABIACABQAEABADAEQAEAEAHAEIADADIAHADQARAMAMASQAMAOAGATIAEANIABAGQADAJgBAKIAAAVIgBAYIgCAfQAAAGgCAEQgDAGgFADIgOAJQgHADgHACIgLACQgDgBgDgBg");
	this.shape_39.setTransform(-0.6,6.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF9900").s().p("AAPB4IgKgDIgKgGQgJgHgHgIIgEgFQgDgDgCgGQgEgJgFgHIgGgOIgGgNQgIgTgFgSIgFgPIgEgUIgCgSIAAgBQAAgRAIgUQADgHAFgFIACgDIAMgHQAOgHANgCIAHAAIACAAIACABQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAAAQADAAACAGQAFAEAHAEIADADIAHAEQARAMAMAUQALAPAHAUIAEAMIABAHQACAJgBAKIAAAXQgCALAAANIgBAgQAAAHgCAEQgDAFgFADIgPAJQgHAEgIACIgLABQgDgBgDgBg");
	this.shape_40.setTransform(-0.6,7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF9900").s().p("AAUB/QgDgBgDgCIgKgDIgKgHQgKgIgGgIIgEgEIgEgKQgEgKgEgIIgHgOIgGgOIgNgmIgEgQIgFgVIgCgSIAAgBQAAgSAIgUQADgIAFgFIADgDQAFgEAHgDQAPgHANgCQAFAAACABIACgBIACACQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABABAAQADABACAFQAEAHAHADIAEAEIAGAEQARAMANAVQALAQAGAVIAEANIABAGQACAJgBAMIgBAXIgBAZIgCAiQABAGgDAFQgCAEgGAEIgPAJQgHAEgIABIgJABIgDAAg");
	this.shape_41.setTransform(-0.7,7.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF9900").s().p("AATCEIgHgDIgKgDIgKgIQgJgJgGgIIgEgGIgEgKQgDgLgFgIIgGgOIgGgQIgNglIgEgSIgFgVQgCgKAAgIIAAgCQAAgSAIgVQADgIAFgFIADgDIAMgIQAQgGANgCIAIABIACAAIABABQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQACABADAGQAEAGAHAEIADAEIAHAFQARANAMAWQAMARAGAVIADAOIABAGQACAJgBANIgCAXIgBAbIAAAiQAAAHgCAEQgDAFgGAEQgIAFgIAEQgHADgJACIgGAAIgFAAg");
	this.shape_42.setTransform(-0.7,8.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF9900").s().p("AARCJQgEgBgDgCIgKgEIgKgJQgJgJgFgJIgEgGIgEgLQgDgMgEgHIgGgPIgGgRIgMgmIgFgSIgGgWQgCgKAAgJIAAgCQAAgTAIgVQAEgJAFgFIADgDQAFgEAHgDQARgHAOgBIAIABIABAAIACABQABAAAAAAQAAAAAAABQAAAAABAAQAAABAAAAQABACADAGQAEAHAGAEIAEAFIAHAFQARAOAMAXQALARAGAWIAEAPIAAAGQACAJgBANIgCAYQgBANAAAPIAAAjQAAAHgCAFQgDAFgGAEIgQAIQgIAEgJABIgHAAIgFAAg");
	this.shape_43.setTransform(-0.7,8.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF9900").s().p("AAPCOIgGgDIgJgFIgLgKQgJgJgFgKIgEgHIgEgLQgCgMgEgIIgGgQIgFgRIgNgoIgFgSIgGgXIgCgTIAAgCQAAgTAIgWQAEgJAFgGIADgDQAFgEAIgDQASgHANgBIAIACIACAAIACACQAAAAAAAAQAAAAAAAAQAAABAAAAQABAAAAABQACABACAIQAEAHAGAEIAFAFIAGAGQARAPANAXQAKATAHAXIACAOIABAHQACAJgCAOIgCAZQgCANABAPIAAAkQAAAIgBAEQgEAFgGAEQgIAFgJAEQgIADgJABIgHABIgGgBg");
	this.shape_44.setTransform(-0.7,9.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF9900").s().p("AAOCTQgEgBgDgDIgJgFIgKgKQgKgLgFgKIgDgHQgCgFgBgHQgCgNgEgIIgGgQIgFgSIgNgpIgEgTIgHgXIgCgUIAAgCQgBgUAJgWQAEgKAFgFIADgDQAGgFAIgDQASgGAOgBQAGAAADACIABgBIABADQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQACACADAIQADAIAHAEIADAGIAHAGQARAPANAZQAKATAGAYIADAPIABAHQABAJgCAOIgCAaQgCANABAQIAAAlQABAIgCAEQgDAGgHAEQgIAFgJAEQgJADgJABIgFAAIgIgBg");
	this.shape_45.setTransform(-0.7,10.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF9900").s().p("AAMCYQgEgBgDgDIgJgGIgKgLQgJgLgFgLIgDgHIgDgNQgCgOgEgIIgFgRIgFgSIgMgqIgFgUIgHgXQgCgMgBgJIAAgCQAAgUAJgXQAEgLAFgFIADgDQAGgEAIgDQATgHAPAAQAGAAACACIABgBIACADIABACQACADACAIQADAJAGAFIAEAFIAHAGQARARANAZQAKAUAGAZIACAQIABAHQACAJgDAPIgCAaQgCAOABAQIAAAmQABAIgCAFQgDAGgHADQgJAGgJADQgJADgJABIgEAAIgKgBg");
	this.shape_46.setTransform(-0.7,10.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF9900").s().p("AAKCdQgDgBgEgDIgIgHIgLgMQgJgMgFgLIgCgIIgDgNQgBgOgEgJIgFgRIgFgTIgMgsIgFgUIgHgYQgDgLAAgKIAAgCQgBgVAJgYQAEgKAGgGIADgDQAGgEAJgDQATgHAQAAQAGABABABIACAAIABADQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIAEALQADAJAGAGIAEAFIAHAHQARASAMAaQALAVAFAZIADAQIABAHQABAKgCAPIgEAbQgBAOAAARIACAnQAAAJgCAEQgDAGgIAEQgIAFgKAEQgJADgKABQgJAAgFgCg");
	this.shape_47.setTransform(-0.7,11.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF9900").s().p("AAJCiQgEgBgDgEIgJgHIgLgNQgJgMgEgNIgDgHIgCgOQgBgPgDgJIgFgRIgFgUIgMgtIgFgVQgFgOgCgKQgDgMAAgKIgBgCQAAgVAJgZQAEgLAGgFIADgEQAGgEAJgDQAUgGAQAAQAFAAADACIABAAIACADQAAAAAAABQAAAAAAAAQABABAAAAQgBABAAAAQACADACAJQADAKAGAGIAEAGIAHAHQARASAMAcQALAVAFAaIACARIABAGQABALgCAQIgEAbQgCAPABARIACAoQABAJgDAFQgDAGgIAEQgJAFgKADQgJADgKABQgJAAgFgCg");
	this.shape_48.setTransform(-0.7,12.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF9900").s().p("AAICoQgEgBgEgEIgIgJIgLgNQgJgNgEgNIgCgIIgCgPQgBgPgDgJIgFgSIgEgUIgNgvIgFgVIgHgZQgDgMAAgKIgBgDQAAgVAJgaQAEgLAGgFIAEgEQAGgEAJgDQAVgHAQABQAGABACACIACAAIABADQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQACADABAKQADALAGAFIAEAHIAHAHQASATAMAdQAKAWAFAbIACARIABAHQABAKgDARIgEAcQgCAPABARIACAqQABAJgCAFQgDAGgIAEQgKAFgKADQgKADgKABQgJAAgFgCg");
	this.shape_49.setTransform(-0.8,12.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF9900").s().p("AAGCtQgEgCgCgEIgKgJIgKgOQgJgOgEgOIgDgIQgBgHAAgIQAAgQgEgKIgEgSIgEgVIgMgwIgGgVIgHgaQgDgMgBgLIAAgCQgBgWAKgaQAEgMAGgGIAEgDQAGgEAKgDQAVgHARABQAFABADACIABAAIACAEQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQABADABALQADALAGAGIAEAHIAHAHQASAVAMAdQAKAXAFAbIACASIAAAHQABALgDARIgEAdQgCAPABASIACAqQACAKgDAFQgDAGgJAEQgJAFgKAEQgLACgKABQgKAAgFgCg");
	this.shape_50.setTransform(-0.8,13.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF9900").s().p("AAECyQgEgCgCgFIgKgJIgKgPQgJgPgEgOIgCgIQgBgHAAgJQAAgRgDgJIgEgUIgEgVIgMgxIgGgWIgIgbQgDgMAAgLIgBgDQgBgWAKgbQAFgLAGgGIAEgEQAGgEAKgDQAWgGARABQAGABADACIABAAIABAEQAAAAABAAQAAABAAAAQAAAAAAABQgBABAAAAIADAPQACAMAGAGIAEAHIAHAIQASAVAMAfQAKAXAEAdIACARIABAIQABALgEARIgEAeQgCAQABASIACArQACAKgDAFQgDAGgJAFQgKAFgKADQgLADgKAAQgLAAgFgCg");
	this.shape_51.setTransform(-0.8,14.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF9900").s().p("AACC3QgCgCgEgFIgJgKIgLgQQgJgPgDgPIgCgJIgBgQQAAgSgCgJIgEgUIgEgWIgMgyIgGgXIgIgbQgDgNgBgLIAAgDQgBgWAKgcQAEgMAGgGIAEgDQAHgFAKgDQAXgGARABQAHABACADIACAAIABAEQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAABIACAPQACANAFAGIAFAIIAGAIQATAWALAfQAKAYAFAeIACARIAAAJQABALgEASIgEAeQgDAQABATQABAVADAXQABAKgDAGQgDAGgJAEQgKAGgLADQgLADgLAAQgKgBgGgCg");
	this.shape_52.setTransform(-0.8,14.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF9900").s().p("AABC8QgDgCgEgFIgJgLIgLgQQgIgRgEgPIgBgJQgBgIAAgJQABgSgDgKIgDgVIgEgWQgGgbgGgYIgGgYIgIgbQgDgOgBgLIgBgDQgBgXAKgcQAFgMAGgGIAEgEQAHgFALgCQAYgHAQACQAIABACADIABAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAABgBAAIACAQQABANAGAHIAEAIIAHAJQATAWALAhQAKAZAFAeIABASIABAJQAAALgEASIgFAfQgCARABATQABAWADAXQABALgCAFQgEAHgJAEQgLAFgLADQgLADgLAAQgLAAgFgDg");
	this.shape_53.setTransform(-0.8,15.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF9900").s().p("AAQDFQgLgBgFgDQgEgCgDgFIgKgLIgKgSQgJgRgDgPIgCgKIAAgSQABgSgCgLIgDgVIgEgXQgFgbgHgZIgGgYQgGgRgCgLQgEgOgBgLIAAgDQgBgYAKgdQAFgMAGgHIAEgDQAHgFALgDQAZgGARACQAHABADADIABABIABAEIAAAEIABARQABAOAGAHIAEAIIAHAJQATAYALAhQAKAaAEAfIACASIAAAJQABALgFATIgFAgQgDARACAUQABAWADAYQACALgDAFQgDAHgKAEQgLAFgLADQgKADgKAAIgDAAg");
	this.shape_54.setTransform(-0.8,16);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF9900").s().p("AAPDKQgMAAgEgEQgEgCgEgFIgJgMIgKgSQgJgSgDgQIgBgKIAAgTQABgTgCgKIgDgWIgDgYQgGgcgGgaIgGgYIgJgdQgEgOgBgLIAAgDQgBgYAKgeQAFgNAGgGIAFgEQAHgFALgCQAZgHASADQAIABACADIABAAIABAFIAAAEIAAASQACAOAFAIIAEAIIAIAKQASAYAMAjQAJAaAEAgIACATIAAAJQAAALgEAUIgGAgQgCARABAVQABAWADAZQACALgCAFQgEAHgKAFQgLAFgMADQgKACgKAAIgDAAg");
	this.shape_55.setTransform(-0.8,16.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF9900").s().p("AAODQQgMgBgFgEQgEgCgDgGIgKgMIgKgTQgJgTgCgQIgCgLIABgTQACgUgCgKIgDgWIgDgZQgGgcgGgbIgGgZIgJgdQgEgOgBgMIgBgDQgBgZALgeQAFgOAGgGIAFgEQAHgEAMgDQAagGARACQAIACADADIABAAIABAFIgBAFIAAATQABAOAGAIIAEAJIAHAJQATAaAMAjQAJAbAEAhIABATIAAAKQABALgFAUQgFAVgBAMQgDASACAVQABAXADAZQADALgDAGQgEAHgKAEQgLAGgMACQgLADgKAAIgDAAg");
	this.shape_56.setTransform(-0.8,17.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF9900").s().p("AAMDVQgMgBgFgDQgEgDgDgGIgKgNIgKgUQgIgTgDgRIgBgLQAAgJABgLQACgUgCgLIgCgXIgDgZQgFgdgHgbIgGgaIgKgeIgFgaIAAgDQgCgZALgfQAGgOAGgGQACgDADgBQAHgFAMgDQAbgGASADQAIABADAEIABAAIAAAFQABABgBAEIgBAUQABAPAGAIIAEAJIAHAKQATAaALAlQAKAcAEAhIABAUIAAAJQAAAMgFAVIgGAhQgDASABAWQABAXAFAaQACAMgDAFQgEAHgKAFQgMAFgMADQgKACgLAAIgEAAg");
	this.shape_57.setTransform(-0.8,18);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF9900").s().p("AALDbQgLgCgGgDQgFgDgDgGIgJgOIgLgVQgIgUgCgRIgBgMIABgUQADgVgCgLIgCgXIgDgaQgFgegHgbIgGgaIgKgfQgEgPgBgMIgBgDQgBgaALggQAFgOAHgGIAFgEQAHgFANgDQAbgGASADQAJACACAEIACAAIAAAFIgBAGIgBAUQABAQAFAIIAFAKIAHAKQATAbALAlQAKAdADAiIABAVIAAAJQAAAMgFAVQgFAWgCAMQgDATACAWQABAYAFAaQACAMgDAGQgDAHgLAEQgMAGgNADQgKACgLAAIgEAAg");
	this.shape_58.setTransform(-0.8,18.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF9900").s().p("AAJDgQgLgBgGgEQgFgDgDgHIgJgOIgLgVQgIgVgCgSIgBgMIACgUQADgWgCgMIgCgYIgDgaQgEgfgHgcIgHgaIgJgfQgFgPgBgNIAAgDQgCgaALghQAGgOAGgHIAFgEQAIgEANgDQAcgGATADQAIACADAEIABAAQABADgBADIgBAFIgBAVQABARAFAJIAEAJIAIALQATAcALAmQAJAdADAjIABAVIAAAKQAAANgFAVQgGAWgBANQgDATABAWQACAYAEAbQADAMgDAGQgEAIgLAEQgMAGgNACQgKACgLAAIgFAAg");
	this.shape_59.setTransform(-0.8,19.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF9900").s().p("AAIDlQgMgBgGgEQgEgDgEgHIgJgPIgKgWQgJgWgBgTQgBgFAAgGIACgVQADgXgBgMIgCgYIgDgbQgEgggHgcIgHgbIgKggQgEgPgBgNIgBgEQgCgaAMghQAFgPAHgGIAFgEQAIgFANgDQAdgGATAEQAJABACAFIABAAQABADAAADIgCAFIgBAWQAAASAGAJIAEAJIAHAMQAUAcALAoQAJAeADAjIABAWIgBAKQAAANgFAWQgGAVgCAOQgDATACAXQABAZAFAbQADANgDAGQgEAHgLAFQgNAFgNADQgJACgJAAIgIgBg");
	this.shape_60.setTransform(-0.8,19.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF9900").s().p("AAHDrQgNgCgGgEQgEgDgEgHIgJgQIgKgXQgJgWgBgUIAAgMIACgVQAEgYgBgMIgCgZIgDgbQgEgggHgdIgHgcIgKggQgFgQgBgNIAAgEQgCgaALgiQAGgPAHgHIAFgEQAIgFANgDQAegGAUAEQAIACADAFIABAAQABADAAADIgCAGIgCAXQAAARAFAKIAFAKIAHALQAUAeALAoQAJAfACAlIABAWIAAAKQAAANgGAWQgGAWgCAOQgDAUACAXQABAZAFAcQADANgDAGQgDAIgMAEQgNAGgNACQgKACgJAAIgIAAg");
	this.shape_61.setTransform(-0.8,20.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF9900").s().p("AAFDxQgMgCgHgEQgEgEgEgHIgJgQIgKgYQgIgXgBgUIAAgNQAAgJACgNQAEgYgBgMIgBgaIgDgcQgEghgHgdIgHgcIgKghQgFgQgBgNIgBgEQgCgbAMgjQAGgPAHgHQACgDADgBQAIgGAOgCQAegGAUAEQAJACADAFIABABQABACgBADQABACgDAFIgCAXQAAATAFAJIAFALIAHAMQAUAeAKApQAJAgADAlIABAXIgBAKQAAANgGAXQgGAXgCANQgEAUACAZQACAZAGAdQACANgDAGQgDAIgMAEQgOAGgNADIgSABIgKAAg");
	this.shape_62.setTransform(-0.8,21.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF9900").s().p("AAED2QgNgCgGgEQgFgEgDgIIgJgQIgLgZQgIgYgBgUIAAgNQABgKACgNQAFgZgBgMIgBgaIgDgdQgEghgHgeIgHgdIgKgiQgFgQgCgNIAAgEQgDgcAMgjQAGgQAIgHIAFgEQAIgFAOgDQAfgGAVAFQAJACACAFIACABQABACgBAEQAAABgCAFIgDAZQAAATAFAJIAFALIAHAMQAUAgAKAqQAJAgADAmIAAAXIAAALQgBANgGAYQgHAXgCAOQgDAUACAZQACAaAGAdQADANgEAHQgDAHgNAFQgNAGgOACIgSABIgKAAg");
	this.shape_63.setTransform(-0.8,21.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF9900").s().p("AADD7QgOgCgGgFQgEgDgEgIIgJgSIgKgZQgIgZgBgVIAAgNQABgKACgNQAFgaAAgMIgBgbIgDgdQgEgjgHgeIgHgdIgLgjQgFgQgBgNIgBgFQgCgcAMgkQAGgQAHgHIAGgEQAJgFAOgDQAfgGAVAFQAKACACAFIABABQABADgBADQABACgDAFIgDAZQAAAUAFAKIAEALIAIANQAUAgAKArQAJAhACAnIABAXIgBALQgBAOgGAYQgHAXgCAOQgDAVACAZQABAbAHAeQADANgDAGQgEAIgNAFQgNAGgPACIgSACIgKgBg");
	this.shape_64.setTransform(-0.8,22.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF9900").s().p("AABEBQgNgCgHgFQgEgEgEgIIgJgSIgKgaQgIgaAAgVIAAgOIADgYQAGgagBgNIAAgbIgCgeQgEgjgHgfIgIgeIgLgjQgFgQgCgOIAAgEQgDgdANglQAGgQAHgHIAGgEQAJgFAOgDQAggGAWAFQAJADADAFIABAAIAAAHIgCAHIgEAaQAAAUAEALIAFALIAIANQAUAhAKAsQAJAiACAoIAAAYIgBAKQAAAOgHAZQgHAYgCAOQgEAVACAaQACAbAHAeQADAOgDAGQgEAIgNAFQgOAGgOACIgRABIgNAAg");
	this.shape_65.setTransform(-0.8,23.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF9900").s().p("AAAEGQgOgCgGgFQgFgEgEgJIgJgSIgKgbQgIgaAAgWIABgOQABgLADgOQAFgaAAgOIAAgbIgCgfQgEgkgHgfIgIgfIgLgjQgFgRgCgOIgBgEQgCgdAMgmQAHgRAHgHQACgCAEgCQAJgFAPgDQAggGAWAGQAKACADAGIABAAQABAEgBADIgDAHQgCAHgCAUQgBAVAFALIAFALIAIAOQAUAiAKAtQAJAiACAoIAAAZIgBALQgBAOgHAZQgHAZgDAOQgDAWACAaQACAbAHAfQADAOgDAHQgEAIgNAFQgOAFgPADIgRABIgNgBg");
	this.shape_66.setTransform(-0.8,23.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF9900").s().p("AAAEMQgPgCgHgGQgFgEgDgJIgJgTIgKgcQgIgbAAgWIAAgPIAFgZQAFgbAAgOIAAgcIgBgfQgEglgHggQgDgQgFgOIgLgkQgGgSgCgOIAAgEQgDgeANgmQAGgRAIgHIAGgFQAJgFAPgCQAhgHAXAGQAKADACAFIABABQABAEgBADIgCAIQgCAHgDAUQgBAWAFALIAFAMIAHANQAVAjAKAuQAIAkACAoIAAAaIgBALQgBAOgHAaQgHAZgDAOQgEAWADAbQACAcAHAfQAEAPgEAGQgEAJgNAEQgPAGgPACIgQACIgNgBg");
	this.shape_67.setTransform(-0.8,24.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF9900").s().p("AgBERQgQgCgHgGQgEgEgEgJIgJgUIgKgcQgIgcAAgXIABgPIAFgaQAGgcAAgNIAAgdIgBggQgEglgHghQgDgQgFgPIgMglQgFgSgCgOIgBgFQgCgdAMgnQAHgSAIgHIAGgFQAJgFAPgCQAigGAXAGQALADACAFIABABQABAEgBADIgDAIQgCAHgCAWQgCAWAFALIAFAMIAHAOQAVAkAKAvQAIAkACApIAAAaIgBAMQgBAOgIAaQgIAagCAOQgEAXADAbQACAcAHAgQAEAPgEAHQgEAIgNAFQgPAGgQACIgQABIgNgBg");
	this.shape_68.setTransform(-0.8,25.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF9900").s().p("AgDEXQgQgDgHgGQgEgEgEgKIgJgUIgKgdQgIgdABgXIABgPIAFgbQAGgcABgOIAAgeIgBggQgEgmgHghIgIggIgMglQgGgSgCgPIAAgFQgDgeANgnQAHgSAIgIIAGgEQAJgFAQgDQAigGAYAHQAKACADAGIABABQABAEgBAEIgDAHQgDAIgCAWQgCAWAEAMIAFANIAIAOQAVAlAKAwQAIAkABAqIAAAbIgBAMQgBAOgIAbQgIAagCAPQgEAXACAbQACAdAIAgQAEAPgDAHQgEAJgPAFQgPAFgPADIgQABIgPgBg");
	this.shape_69.setTransform(-0.8,25.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF9900").s().p("AgEEcQgQgDgHgGQgFgEgEgKIgIgVIgKgeQgIgdABgYIABgQQABgMAEgPQAHgdAAgOIABgeIgBghQgDgngIgiIgIggIgMgmQgGgSgCgPIgBgFQgDgeAOgpQAGgSAIgHIAHgFQAJgFAQgDQAjgGAYAHQALADADAGIABABIgBAIIgDAIQgDAIgCAWQgCAXAEAMIAFANIAIAPQAVAlAKAxQAIAmABAqIAAAcIgCAMQgBAOgIAbQgIAbgDAPQgEAXADAcQACAdAIAhQAEAQgDAHQgEAIgPAFQgPAGgQACIgOABIgRgBg");
	this.shape_70.setTransform(-0.8,26.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF9900").s().p("AgFEhQgRgCgHgHQgFgEgDgKIgJgWIgKgfQgIgeABgZIABgPIAGgcQAHgeABgOIABgeIgBgiQgDgogIgiIgIghIgMgmQgGgTgCgOIgBgGQgDgfANgpQAHgSAIgIQADgDAEgCQAJgFARgCQAjgGAZAHQALADACAGIABABQABAEgBAEQAAACgEAGQgCAIgDAXQgCAYAEAMIAFAOIAIAOQAVAnAKAyQAHAmACAsIgBAbIgBAMQgCAPgIAcQgIAbgDAPQgEAYADAcQACAeAIAiQAFAPgEAHQgEAJgPAFQgQAGgQACIgOABIgRgCg");
	this.shape_71.setTransform(-0.8,27);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF9900").s().p("AgHEnQgRgDgHgGQgEgFgEgKIgJgWIgKggQgIgfACgZIABgQIAGgcQAIgfABgOIABgfIgBgjQgDgogIgjQgDgRgFgQIgNgnQgGgTgCgPIgBgFQgDggAOgqQAHgSAIgIQADgDAEgCQAKgFAQgDQAlgFAZAHQALADACAGIABACQABADgCAFIgDAIQgDAIgDAYQgDAYAFANIAFAOIAIAPQAVAnAJAzQAIAnABAsIAAAcIgCANQgBAPgJAcQgJAbgCAQQgFAYADAdQADAeAJAiQAEAQgEAHQgEAJgPAFQgQAGgQACIgPAAIgSgBg");
	this.shape_72.setTransform(-0.8,27.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF9900").s().p("AgIEtQgRgDgHgHQgFgFgEgKIgJgXIgKghQgHgfABgaIACgQIAGgdQAIgfABgPQACgOAAgSIgBgjQgDgpgHgjQgEgSgFgQIgNgnQgGgUgCgPIgBgFQgDggAOgrQAHgTAIgIIAHgFQAKgFARgCQAlgGAZAIQALADADAGIABACQABADgCAFIgEAIQgDAJgDAYQgDAZAEANIAGAOIAIAPQAVApAJA0QAIAnABAtIgBAdIgBANQgCAPgJAcQgJAcgDAQQgEAYADAeQADAeAJAjQAEAQgEAIQgEAJgPAFQgRAFgQACIgPABIgSgBg");
	this.shape_73.setTransform(-0.8,28.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF9900").s().p("AgJEyQgSgDgHgHQgFgFgEgLIgIgXIgKghQgIggACgbIACgRIAHgdQAIggABgPIACggIgBgkQgDgpgHgkIgIgjIgOgoQgGgTgDgQIgBgFQgDghAOgrQAHgTAJgIIAHgFQAKgGARgCQAmgGAaAIQALAEADAGIABACQAAAEgBAEQAAACgEAHQgEAJgDAZQgDAZAEANIAGAOIAHAQQAWApAJA1QAIApABAuIgBAdIgCAMQgCAQgJAdQgJAcgDAQQgEAZADAeQACAfAKAjQAEARgDAHQgFAJgPAFQgRAGgRACIgNABQgLAAgJgCg");
	this.shape_74.setTransform(-0.8,28.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF9900").s().p("AgLE4QgRgEgIgHQgFgFgEgLIgIgYIgKgiQgIghACgbIADgRQACgOAFgQQAIghACgPIACghIgBgkQgCgqgIglIgIgjIgOgoQgHgUgCgQIgBgFQgEghAPgsQAHgUAJgIQACgDAFgCQAKgFASgDQAmgGAaAJQAMADACAHIABABQABAFgCAEQAAACgEAHQgDAJgEAaQgDAaAEANIAFAPIAIAQQAVAqAKA2QAIApAAAvIgBAdIgBANQgCAQgKAdQgJAdgDAQQgFAZADAfQADAfAKAkQAEARgDAHQgFAKgQAFQgQAGgSACIgNAAQgKAAgLgBg");
	this.shape_75.setTransform(-0.8,29.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF9900").s().p("AgME9QgSgDgIgIQgFgFgDgLIgJgZIgKgjQgHghACgcIACgSQADgNAFgRQAJghABgQIADghIgBglQgCgrgIglIgIgjIgPgqQgGgUgDgQIgBgFQgDgiAOgsQAIgVAIgIIAIgFQAKgFASgCQAngGAbAIQAMAEACAHIABABQABAFgCAEIgEAKQgEAJgEAaQgDAbAEANQABAFAEAKIAIARQAVArAKA3QAHApABAwIgCAeIgBANQgCAQgKAeQgJAdgDAQQgFAaADAfQADAgAKAkQAFARgEAIQgEAJgRAGQgRAFgRACIgMABQgLAAgMgCg");
	this.shape_76.setTransform(-0.8,30.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF9900").s().p("AgNFCQgTgDgHgIQgFgFgEgMIgJgZIgJgjQgIgjADgcIACgSIAIgfQAJgiACgQQACgOAAgUIAAglQgCgsgIglQgDgTgFgRIgPgqQgHgVgCgQIgBgGQgEghAPguQAIgUAIgIQADgDAFgCQAKgGASgCQAogGAbAJQAMAEADAHIABABQAAAFgBAEIgFAKQgEAKgEAaQgDAbAEAOIAFAQIAIARQAVArAKA4QAHArAAAwQAAASgBANIgCANQgCAQgKAeQgKAegDAQQgFAbAEAfQADAgAKAlQAFASgEAHQgEAKgRAFQgRAGgSACIgMAAQgLAAgMgCg");
	this.shape_77.setTransform(-0.8,30.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF9900").s().p("AgOFIQgTgEgIgIQgFgFgEgMIgIgaIgKgkQgIgjADgdIADgSIAIggQAKgjACgQQACgOAAgUIAAgmQgCgtgIglQgDgUgFgRIgPgrQgHgUgDgQIgBgHQgDgiAPguQAHgVAJgIIAIgFQAKgGATgCQApgGAbAKQAMADADAIIAAABQABAFgCAFIgEAJQgFAKgEAbQgEAcAEAPIAGAPIAIARQAVAtAKA5QAHArAAAxQAAATgCAMIgBAOQgCAQgLAfQgKAegDARQgFAaAEAgQADAhAKAmQAFARgEAIQgEAJgRAGQgSAGgSABIgMABQgLAAgMgCg");
	this.shape_78.setTransform(-0.8,31.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF9900").s().p("AgQFOQgTgEgIgIQgFgGgEgMIgIgaIgKglQgIgkADgeIADgSQADgPAGgSQAKgjACgQIADgjIAAgmQgCgugIgmQgEgUgFgRIgPgsQgHgVgDgQIAAgGQgEgjAPgvQAIgVAIgIQADgDAFgCQALgGATgCQApgGAcAKQAMAEADAHIABACQAAAEgCAFIgEAKQgFAKgEAcQgEAdAEAOIAFAQIAIASQAWAtAJA6QAHAsAAAyIgCAfIgBAOQgDAQgKAgQgLAegDARQgFAbAEAhQADAhALAmQAFASgEAIQgFAJgRAGQgSAGgSABIgMABQgMAAgMgCg");
	this.shape_79.setTransform(-0.7,32.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF9900").s().p("AgSFTQgTgEgIgIQgFgGgEgNIgIgbQgHgWgDgQQgHgkADgeIADgTQADgOAGgTQAKgjACgRQADgQABgUIAAgmQgCgvgIgnIgJglIgPgsQgHgVgDgRIgBgHQgEgiAPgwQAIgVAJgJQADgDAFgCQALgGATgCQAqgGAcAKQANAEADAIIAAABQABAFgCAFIgFAKQgFALgEAcQgEAdADAPIAGAQIAIASQAWAuAJA7QAHAtAAAzIgCAgIgCAOQgCAQgLAgQgLAfgDARQgFAcADAgQAEAiALAnQAFASgEAIQgEAKgSAGQgSAFgTACIgJAAQgOAAgOgCg");
	this.shape_80.setTransform(-0.7,32.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF9900").s().p("AgTFYQgUgEgIgIQgFgGgEgNIgIgbIgKgnQgHglAEgfQAAgIADgLQADgPAGgTQALgkACgRIAEgkIAAgnQgCgvgIgoQgEgUgFgSIgPgsQgIgWgDgRIAAgGQgFgkAQgwQAIgWAJgIQADgDAFgDQALgFAUgDQAqgFAdAKQANAEACAIIABACQABAEgCAFIgFALQgFALgFAdQgEAdADAPQABAGAFALIAIASQAWAvAJA8QAHAtgBA0IgCAhIgCAOQgCARgLAgQgLAfgDARQgGAcAEAiQADAiAMAnQAFASgEAJQgEAKgSAFQgTAGgSACIgJAAQgOAAgPgDg");
	this.shape_81.setTransform(-0.7,33.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF9900").s().p("AgUFeQgUgEgIgJQgFgGgEgNIgJgcQgGgXgDgRQgIgmAEgfIADgUIAKgiQALglADgRQACgPABgVQABgTAAgVQgCgwgIgoQgDgVgGgSIgQgtQgHgWgDgRIgBgGQgEgkAPgxQAJgWAJgJQADgDAFgCQALgGAUgCQAsgGAcAKQAOAFACAIIABACQAAAEgCAGIgFALQgFAKgFAeQgFAeAEAPQABAGAFALIAIATQAWAwAJA9QAHAugBA0IgCAhIgCAOQgDASgLAgQgLAggEASQgFAcAEAiQADAiAMAoQAGATgFAIQgEAKgSAGQgTAGgTABIgLAAQgNAAgOgCg");
	this.shape_82.setTransform(-0.7,34.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF9900").s().p("AgWFjQgUgEgIgJQgGgGgEgNIgIgdIgKgoQgHgnAEggIAEgUQADgPAHgUQALglADgSQADgQABgVQABgSgBgWQgBgxgIgoQgEgVgFgTIgQgtQgIgWgDgSIgBgGQgEglAQgxQAIgXAJgIQADgEAFgCQAMgGAUgCQAsgGAdALQAOAEACAJIABACQABAEgDAGIgFALQgFALgGAeQgEAfADAQIAGARIAIATQAWAwAJA+QAHAvgBA1IgCAiIgCAOQgDASgMAhQgLAggDASQgGAcAEAjQAEAjAMAoQAFATgEAJQgFAKgSAFQgTAGgTACIgLAAQgNAAgPgDg");
	this.shape_83.setTransform(-0.7,34.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF9900").s().p("AgXFpQgVgFgIgJQgGgGgDgOIgJgdQgGgYgDgRQgIgoAFggIADgUIALgkQALgmADgRQADgRACgVIABgpQgCgygIgpQgEgVgFgTIgRguQgHgWgDgSIgBgGQgFglAQgzQAJgWAJgJQADgDAFgDQAMgGAVgCQAsgFAeALQAOAEACAJIABACQAAAFgCAFIgGALQgFAMgGAeQgEAgADAQQABAFAFAMIAIATQAWAyAJA/QAHAwgBA2IgDAiIgCAOQgDASgLAhQgMAhgEASQgFAdAEAjQADAjANApQAGAUgFAIQgEAKgTAGQgUAGgTABIgLABQgOAAgOgDg");
	this.shape_84.setTransform(-0.7,35.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF9900").s().p("AgZFuQgVgEgIgKQgFgGgEgOIgIgeQgHgZgDgRQgHgoAEghIAEgVIALgkQAMgnADgRQADgRACgWIABgpQgCgzgIgpQgEgVgFgTIgRgvQgIgXgDgSIgBgHQgEglAQgzQAIgXAKgJQADgDAFgCQAMgGAVgCQAugGAeALQANAFADAJIAAABQABAGgCAFIgGAMQgGALgFAfQgGAgAEARIAFASIAJATQAWAzAJBAQAHAwgCA3QAAAUgCAOIgCAPQgDASgMAiQgMAhgEASQgGAeAEAjQAEAkANApQAGAUgEAIQgFALgTAGQgUAGgUABIgLAAQgOAAgPgDg");
	this.shape_85.setTransform(-0.7,36);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF9900").s().p("AgaF0QgVgFgJgKQgFgGgEgOIgIgfQgHgZgDgSQgHgpAFghIAEgVIALglQAMgnAEgSQADgRACgWIABgqQgBgzgJgqQgEgWgFgTIgRgvQgIgYgDgRIgBgIQgFglAQg0QAJgYAKgIQADgEAFgCQAMgGAVgCQAvgGAeAMQAOAFADAJIAAABQABAGgDAFIgGAMQgGAMgFAgQgGAgADARQABAGAFAMIAJAUQAWAzAJBBQAGAxgBA4QgBAVgCAOIgCAPQgDASgMAiQgNAigDASQgGAeAEAkQAEAkANArQAGATgEAJQgFALgTAFQgUAGgVABIgLABQgOAAgPgDg");
	this.shape_86.setTransform(-0.7,36.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF9900").s().p("AgbF5QgWgFgIgJQgGgHgEgPIgIgfQgGgZgDgSQgHgqAFgiIAEgVQAEgRAHgVQANgoADgSQAEgRABgWQACgUAAgXQgBg0gJgrQgDgWgGgTIgRgwQgIgXgEgSIgBgIQgFgmARg0QAJgYAKgJQADgDAFgDQAMgGAWgCQAvgFAfAMQAOAEACAJIABACQAAAGgCAFQgBADgFAJQgGAMgGAhQgGAhADARQABAGAFAMIAJAVQAWA0AJBCQAGAygBA4QgBAVgCAOIgDAQQgDASgMAjQgNAigEASQgFAfAEAkQAEAlANArQAGAUgEAIQgFALgTAGQgVAGgUABIgIAAQgQAAgRgDg");
	this.shape_87.setTransform(-0.7,37.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF9900").s().p("AgcF/QgXgGgIgJQgGgHgDgOIgJghQgGgagDgSQgHgqAFgjIAEgWQAFgQAHgWQANgoAEgTQADgRACgXQACgUAAgXQgBg0gIgsQgEgWgGgTIgSgxQgIgYgDgSIgBgHQgFgnARg1QAJgYAJgKQAEgDAFgDQANgFAVgDQAwgFAfAMQAPAGACAJIABABQAAAGgCAGIgHAMQgGAMgGAiQgGAhADARQABAHAFAMIAIAVQAXA1AJBDQAGAygCA5QgBAWgCAOIgCAQQgEASgMAkQgNAigEATQgGAeAFAlQADAlAOAsQAHAUgFAJQgFALgUAGQgUAGgVABIgIAAQgQAAgRgDg");
	this.shape_88.setTransform(-0.7,38);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF9900").s().p("AgeGEQgWgFgJgKQgFgHgEgPQgNgwgFgdQgHgsAGgjQADgWANgmQAOgqAEgSQAHghAAg0QgBhRgSg6IgSgxQgKgdgDgVQgFgnARg2QAJgZAKgJQANgLAfgDQAwgFAgAMQAOAFADAKQABAGgDAHIgGANQgHAMgGAiQgGAiADASQACAKAMAeQApBfgFCIQgCAjgEARQgDASgNAkQgNAkgEASQgMA+AcBYQAHAVgFAJQgFALgUAGQgZAHgYAAQgRAAgSgEg");
	this.shape_89.setTransform(-0.7,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-1.5,2.9,2.9);


// stage content:
(lib.影片剪辑循环播放一段时间动画 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABEBaIAAgLIiXAAIAAiEIAQAAIAAB3ICHAAIAAh3IAPAAIAACPgAgvAyIAAhsIBfAAIAABpIgPAAIAAgKIhBAAIAAANgAAHAZIAaAAIAAgcIgaAAgAggAZIAaAAIAAgcIgaAAgAAHgQIAaAAIAAgcIgaAAgAgggQIAaAAIAAgcIgaAAgAhdhMIAAgNIC7AAIAAANg");
	this.shape.setTransform(297,166);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRBUQAoglAChHIAAgQIgcAAIAAgPIAcAAIABgoIAQAAIgBAoIA0AAQgBBJgCAtQgDAbgXAAIgbAAIgCgRIAYACQAPAAAAgQQADgxABgyIgmAAIAAARQgBBLgtAsIgLgMgAgRA/IhFAHIgGgQQAIgFAFgKQAKgUAKgdIggAAIAAgOIBdAAIAAAOIgsAAQgRApgMAXIAwgEQgGgRgHgQIANgGQANAbAKAaIgPAGIgCgHgAhThBIAAgOIBOAAIAAAOg");
	this.shape_1.setTransform(276.7,165.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaBQQAdgLAWgQQgTgUgHgcIgJAAIAAgNIBaAAIAAAOQgMAbgUAVQAUAPAeAGQgGAIgEAHQgfgJgVgRQgXASgeALIgJgNgAAkAsQATgRAJgWIgzAAQAHAXAQAQgAhRBcIAAgjIgMACIgEgPIAQgBIAAiAQAqgDAZgEIAFAOQgWADgkADIAAAbIAxAAIAAANIgxAAIAAAdIAxAAIAAAMIgxAAIAAAgIA4gHIAAAOIg4AHIAAAlgAgSgXQAXgLAAgfIAAgXIBBAAIAAAuQAAAJAJAAIASAAIgDAPIgSAAQgUAAAAgWIAAgjIglAAIAAALQAAAkgaARIgLgMg");
	this.shape_2.setTransform(257,165.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHBhIAAg3QghAegtAUIgKgOQArgNAigcIhLAAIAAgNIBWAAIAAgWIgjAAIAAAIIgPAAIAAhIIglAAIAAgNIAlAAIAAgVIAPAAIAAAVIBWAAIAAgVIAPAAIAAAVIAlAAIAAANIglAAIAABIIgPAAIAAgIIglAAIAAAWIBYAAIAAANIhQAAQAiAdAvAJIgKAPQgvgPgggiIAAA4gAgqgJIBWAAIAAgUIhWAAgAgqgqIBWAAIAAgUIhWAAg");
	this.shape_3.setTransform(237,165.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNBWQAcgSATgVQgRgcgFgqIgMAUIgJgNQAYgjAJguIAQADQgFASgGASIBEAAIAAAOIgQAAQgEA5gYAiQASAWAcAMIgLAPQgagOgTgWQgTAVgaARIgLgMgAAsAhQATgeACgvIgpAAQACAvASAegAhiBTQATgVAEgYQAFgWAAg+IgXAAIAAgOIBdAAIAAAOIg2AAIgBAgIAtAAIgFBMQgBAagUABIgXAAIgEgRIAUACQANAAABgPQACgXAAgkIgdAAQgBA/geAhIgLgNgAg9haIAOgHQAIANAHAOIgNAHQgIgPgIgMg");
	this.shape_4.setTransform(217,165.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABEBfIAAgKIhSAAIAAAKIgOAAIAAhRIgJAFIgLgMQAggMATgWIgoAAIAAgMIA4AAIAAghIgyADIgCgNQBGgDAugEIADANIg1AEIAAAhIA9AAIAAAMIguAAQATARAfAJIgJAOQglgOgSgaIgBAAIAAAgIgOAAIAAggIAAAAQgPAVgbARIBpAAIAABUgAAhBKIAjAAIAAgUIgjAAgAgOBKIAiAAIAAgUIgiAAgAAhAqIAjAAIAAgUIgjAAgAgOAqIAiAAIAAgUIgiAAgAheBdIgCgQIAQABQAJAAAAgKIAAg3IgXALIgDgQIAagKIAAgqIgZAAIAAgOIAZAAIAAgkIAOAAIAAAkIAVAAIAAAOIgVAAIAAAlIASgIIABAOIgTAIIAABBQAAAVgTAAIgSAAgAAugxIAYgWIALAJIgaAWgAgag7IAJgJIAVATIgJAJIgVgTg");
	this.shape_5.setTransform(197.1,165.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhVBUQAwgIAbgIQgWgLgOgNQgTAQgWAMIgKgLQAkgRAXgbIARAAIgJAKIBoAAIAAAKQgSARgeAOQAfAIApADIgKAQQgwgHghgNQgiAMgxAKIgJgNgAAHA+QAbgLASgNIhYAAQARAPAaAJgAhDATIAAhEQgKALgLAKIgJgMQAdgWASgiIARAAIgKAQICJAAIAAAMIiSAAIgLAOICJAAIAABHIgNAAIAAgFIhzAAIAAAHgAg2AAIBzAAIAAgPIhzAAgAg2gaIBzAAIAAgQIhzAAg");
	this.shape_6.setTransform(177,165.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhfBaIAAgNIBaAAIAAgOIhLAAIAAgMIBLAAIAAgQIg1AAIAAAHIgOAAIAAhJIBDAAIAAgNIhYAAIAAgNIBYAAIAAgPIhKACIgDgOQBjgBA8gDIADAMIhJAEIAAAPIBZAAIAAANIhZAAIAAANIBEAAIAABJIgOAAIAAgHIg2AAIAAAQIBLAAIAAAMIhLAAIAAAOIBZAAIAAANgAAHAXIA2AAIAAgQIg2AAgAg6AXIA1AAIAAgQIg1AAgAAHgDIA2AAIAAgQIg2AAgAg6gDIA1AAIAAgQIg1AAg");
	this.shape_7.setTransform(157,165.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOAaIAMgzIARAAIgPAzg");
	this.shape_8.setTransform(136.5,172.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABEBaIAAgLIiXAAIAAiEIAQAAIAAB3ICHAAIAAh3IAPAAIAACPgAgvAyIAAhsIBfAAIAABpIgPAAIAAgKIhBAAIAAANgAAHAZIAaAAIAAgcIgaAAgAggAZIAaAAIAAgcIgaAAgAAHgQIAaAAIAAgcIgaAAgAgggQIAaAAIAAgcIgaAAgAhdhMIAAgNIC7AAIAAANg");
	this.shape_9.setTransform(117,166);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRBUQAoglAChHIAAgQIgcAAIAAgPIAcAAIABgoIAQAAIgBAoIA0AAQgBBJgCAtQgDAbgXAAIgbAAIgCgRIAYACQAPAAAAgQQADgxABgyIgmAAIAAARQgBBLgtAsIgLgMgAgRA/IhFAHIgGgQQAIgFAFgKQAKgUAKgdIggAAIAAgOIBdAAIAAAOIgsAAQgRApgMAXIAwgEQgGgRgHgQIANgGQANAbAKAaIgPAGIgCgHgAhThBIAAgOIBOAAIAAAOg");
	this.shape_10.setTransform(96.7,165.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgaBQQAdgLAWgQQgTgUgHgcIgJAAIAAgNIBaAAIAAAOQgMAbgUAVQAUAPAeAGQgGAIgEAHQgfgJgVgRQgXASgeALIgJgNgAAkAsQATgRAJgWIgzAAQAHAXAQAQgAhRBcIAAgjIgMACIgEgPIAQgBIAAiAQAqgDAZgEIAFAOQgWADgkADIAAAbIAxAAIAAANIgxAAIAAAdIAxAAIAAAMIgxAAIAAAgIA4gHIAAAOIg4AHIAAAlgAgSgXQAXgLAAgfIAAgXIBBAAIAAAuQAAAJAJAAIASAAIgDAPIgSAAQgUAAAAgWIAAgjIglAAIAAALQAAAkgaARIgLgMg");
	this.shape_11.setTransform(77,165.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHBhIAAg3QghAegtAUIgKgOQArgNAigcIhLAAIAAgNIBWAAIAAgWIgjAAIAAAIIgPAAIAAhIIglAAIAAgNIAlAAIAAgVIAPAAIAAAVIBWAAIAAgVIAPAAIAAAVIAlAAIAAANIglAAIAABIIgPAAIAAgIIglAAIAAAWIBYAAIAAANIhQAAQAiAdAvAJIgKAPQgvgPgggiIAAA4gAgqgJIBWAAIAAgUIhWAAgAgqgqIBWAAIAAgUIhWAAg");
	this.shape_12.setTransform(57,165.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhgBNIAYgWIAAhCIgXAAIAAgOIAmAAIAABUQAPARAcABIAzABIA8gCIgHAPIg4ABIgygBQghAAgQgWQgFAEgSAUgAAHBAIgEgRIAeABQAMAAAAgOIAAhLIhTAAIAAgOIBTAAIAAglIAQAAIAAAlIAhAAIAAAOIghAAIAABQQAAAZgZAAIgdAAgAgfgSIANgIIAfApIgNAKQgPgYgQgTgAhYhTIAMgJQANAPAQAWQgJAEgGAFQgNgVgNgQg");
	this.shape_13.setTransform(525.1,136.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghBTQAigVACgtIgYAXIgLgMQARgNAUgQIAAheIAOAAIAABVQAAAggFAXQgJAggcATIgKgNgAAmBBIAAigIAOAAIAABcIAoAXIgKAOIgegVIAAAyQAAAOAKgBIAIAAQAKAAACgLIACgXIAOAFIgDAWQgDAVgTAAIgNAAIgCAAQgVAAABgZgAhhBCIAKgCIAAhGIANAAIAABFIAPgDIAAhXIgLAAIAAAHIgNAAIAAhCIA2AAIAAA7IgRAAIAAAdIAWAAIAAAMIgWAAIAAAsIAWgEIAAAOIhGAMgAhGgmIAdAAIAAglIgdAAgAA4gcQAMgSAJgVIANAHQgKAVgMATgAgag8IANgGQAKATAGATIgNAHQgHgVgJgSg");
	this.shape_14.setTransform(505.1,137.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHBhIAAhMQgcAhgzAdIgLgNQAzgaAjgiIhTAAIAAgMIBXAAIAAg0IhLAAIAAgOIBLAAIAAgcIAPAAIAAAcIBMAAIAAAOIhMAAIAAA0IBWAAIAAAMIhTAAQAhAkA2AUIgLAPQgzgXgcgkIAABLgAAbgPQASgTAJgOIAOAKQgOARgQAQgAhBgmIALgKQAOAPAOAQIgOALQgJgOgQgSg");
	this.shape_15.setTransform(485.1,137);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOAaIAMgzIARAAIgPAzg");
	this.shape_16.setTransform(464.6,144.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFBVQAbgSARgXQgQgbgFgjIgJAOIgJgNQAWghAIguIAPACQgDATgGAQIA8AAIAAAOIgNAAQgFA4gTAiQAPAVAYAOIgKAPQgXgPgRgVQgRAWgZAQIgLgMgAAdgpQADApAQAdQARgcADguIgkAAIgDAEgAhiBTQAdgHATgMIgigRIAMgTIgXAAIAAgNIAeAAIAJgPIANAEIgGALIAwAAIAAANQgHATgQAPIAXAKIgJANIgagOQgWAQghAJIgHgNgAhBAqIAcANQANgLAIgQIgoAAIgJAOgAhigGQAZgNAUgTIgnAAIAAgNIAtAAIAAgsIANAAIAAAsIAlAAIAAANIglAAIAAAMIAHgHIAdAYIgJAKQgKgKgRgMIAAAVIgNAAIAAgaQgTASgXANIgJgLgAgZhAQALgMAJgOIAMAIQgKAOgLAMIgLgIgAhYhRIALgIIASAXIgMAJIgRgYg");
	this.shape_17.setTransform(445.1,137.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ABFBbIAAgKIiZAAIAAiDIAQAAIAAB1ICJAAIAAh1IARAAIAACNgAglA5IgCgQIAXABQANAAAAgLIAAhSIAtgZIhtAAIAAgOICFAAIAAAQIg4AfIAABMQABAYgXAAIgZAAgAAOADIAJgKQAWAMAXAQIgKANQgWgRgWgOgAhDAUQAYgMAcgQIAIALIgzAfgAATgYQARgMARgPIALALIgiAbgAg9grIAJgKIAnAcIgLAMQgTgRgSgNg");
	this.shape_18.setTransform(425.1,137.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgXBdQAfgoABg1QAAg0ghgoIARAAQAgAnAAA2QAAA3ggAlg");
	this.shape_19.setTransform(405.2,138.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAIBdQggglAAg3QAAg2AggnIARAAQggApAAAzQAAA1AgAog");
	this.shape_20.setTransform(399.8,138.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgvBOIAAgRQAFACAGAAQANAAAGgPIAIgTIgqhrIAVAAIAcBQIACAJIAAAAIADgJIAdhQIAUAAIgxB7QgNAigZAAQgHABgFgCg");
	this.shape_21.setTransform(390.6,141.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AghAwQgJgJAAgOQgBgdAlgFIAegFQAAgagVAAQgTAAgQANIAAgSQAQgLAUABQAngBAAApIAABFIgTAAIAAgRIAAAAQgLAUgVgBQgQABgJgJgAAAADQgNACgFAFQgFAEAAAKQAAAHAGAFQAFAFAIAAQAMAAAIgJQAIgJAAgNIAAgKg");
	this.shape_22.setTransform(379.5,138.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgJBQIAAifIASAAIAACfg");
	this.shape_23.setTransform(371.6,136.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AguBMIAAiXIArAAQAXAAAOAMQANAMAAAWQAAAWgQANQgPAOgXgBIgUAAIAAA5gAgbACIASAAQARAAAKgHQAJgIAAgPQAAgdgiAAIgUAAg");
	this.shape_24.setTransform(363.4,136.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AglBDQgMgPgBgZQAAgaAOgQQAOgQAWAAQAVAAAKARIAAhCIATAAIAACfIgTAAIAAgSQgMAUgYAAQgVAAgLgOgAgWgEQgIALAAATQAAASAIALQAJAKANAAQAOAAAIgKQAJgKAAgPIAAgQQABgMgJgIQgJgJgMAAQgOAAgKALg");
	this.shape_25.setTransform(350,136.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAbA3IAAg8QAAghgZAAQgLAAgIAJQgJAJAAAPIAAA8IgTAAIAAhrIATAAIAAASIABAAQAMgUAWAAQASAAAJALQAKALAAAWIAABBg");
	this.shape_26.setTransform(337.9,138.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAvBMIgQgqIg+AAIgOAqIgWAAIA6iXIAUAAIA5CXgAgCgtIgXA+IAyAAIgXg+IgCgKIAAAAIgCAKg");
	this.shape_27.setTransform(324.6,136.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgmAqQgPgQAAgZQAAgZAPgQQAPgPAZAAQAYgBAOAPQAOAPAAAaQAAAZgPAQQgPAPgYAAQgYAAgOgOgAgYgcQgJALAAARQAAATAJALQAJALAPAAQARAAAIgLQAJgKAAgUQAAgTgJgKQgIgLgRABQgPAAgJALg");
	this.shape_28.setTransform(311.2,138.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgNAnIAAg9IgSAAIAAgQIASAAIAAgaIASgGIAAAgIAbAAIAAAQIgbAAIAAA6QAAAKAEAFQAEAEAIAAQAGAAAFgDIAAAQQgGADgLAAQgcAAAAggg");
	this.shape_29.setTransform(301.1,137.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgmAqQgPgQAAgZQAAgZAPgQQAPgPAZAAQAYgBAOAPQAOAPAAAaQAAAZgPAQQgPAPgYAAQgYAAgOgOgAgYgcQgJALAAARQAAATAJALQAJALAPAAQARAAAIgLQAJgKAAgUQAAgTgJgKQgIgLgRABQgPAAgJALg");
	this.shape_30.setTransform(291.1,138.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgqBJIAAgSQASAKARAAQAmAAAAgqIAAgLQgNAUgXAAQgUAAgMgOQgMgPgBgXQAAgbAOgRQAOgQAWAAQAVAAAKARIAAgOIATAAIAABiQABA8g6AAQgUAAgPgIgAgWg0QgIALAAAUQAAARAIAKQAJAKANAAQAOAAAIgKQAKgJgBgPIAAgQQABgMgJgJQgJgJgMAAQgPAAgJAMg");
	this.shape_31.setTransform(278,141.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgDAEAAQAFAAAEADQAEAEAAAEQAAAFgEAEQgEADgFAAQgEAAgEgDg");
	this.shape_32.setTransform(269.5,143.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgkAyIAAgUQAPALARAAQAVAAAAgOQAAgHgFgEQgEgEgPgFQgRgHgGgHQgFgHgBgKQAAgOANgJQAMgIARAAQAOgBAMAFIAAASQgNgHgPAAQgIAAgGAEQgGAEAAAGQAAAHAFADQADAEAOAGQASAGAGAHQAHAHgBALQAAAOgMAJQgMAJgSgBQgRABgNgHg");
	this.shape_33.setTransform(262.6,138.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgJBPIAAhrIASAAIAABrgAgIg5QgDgEAAgFQAAgFAEgDQADgEAEAAQAFAAAEAEQADADAAAFQAAAFgDAEQgEACgFAAQgEAAgEgCg");
	this.shape_34.setTransform(255.3,136.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAbBQIAAg+QAAgggZABQgLgBgIAKQgJAJAAAOIAAA9IgTAAIAAifIATAAIAABGIABAAQAMgVAWABQAlgBAAAsIAABCg");
	this.shape_35.setTransform(246.6,136.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgNAnIAAg9IgSAAIAAgQIASAAIAAgaIASgGIAAAgIAbAAIAAAQIgbAAIAAA6QAAAKAEAFQAEAEAIAAQAGAAAFgDIAAAQQgGADgLAAQgcAAAAggg");
	this.shape_36.setTransform(236.5,137.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAEBYIgDgRQAVACAVAAQASAAACgQQACgSACgfIh/AAIAAgNIAOg/IAQAAIgFAYIByAAIAAAOIh1AAIgFAZIB+AAQgBAogDAZQgDAdgeAAIgqgBgAhbAvIAAgPICPAAIAAAPgABNgzIAAgXIiQAAIAAAXIgQAAIAAglICvAAIAAAlg");
	this.shape_37.setTransform(216.6,137.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgOAaIAMgzIARAAIgPAzg");
	this.shape_38.setTransform(196.5,144.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgIBhIAAhJIg7AAIAAALIgQAAIAAhYIBLAAIAAgrIAQAAIAAArIBMAAIAABYIgQAAIAAgLIg8AAIAABJgAAIAKIA8AAIAAgxIg8AAgAhDAKIA7AAIAAgxIg7AAg");
	this.shape_39.setTransform(177.1,137.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("ABEBhIAAgaIheAFIgBgNIARgBIAAhNIgMAAIAAgMIB0AAIAAAMIgMAAIAABJIAQgBIgCANIgOAAIAAAbgAACA+IBCgDIAAgRIhCAAgAACAfIBCAAIAAgSIhCAAgAACACIBCAAIAAgRIhCAAgAg5BhIAAgqIgmAFIgCgOIAogEIAAgdIgjAAIAAgMIATg1IgVAAIAAgNIAYAAIAIgfIAQADIgJAcIAkAAIAAANIgpAAIgSA0IAVAAIAAgqIANAAIAAAqIAXAAIAAANIgXAAIAAAbIAbgDIgCANIgZADIAAAsgABGgkIAAgHIhFAAIAAAHIgMAAIAAgyIBeAAIAAAygAABg2IBFAAIAAgVIhFAAg");
	this.shape_40.setTransform(157,137);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhdBUQAygHAMgbIg5AAIAAgNICpAAIgEAgQgDAYgdAAIgnAAIgEgQQAZABAPAAQASAAACgMIACgQIhOAAQgOAmg3AJIgKgNgAhNAcIAAhOIBQAAIAAA6QAAAUgSgBIgSAAIgDgLIASAAQAIAAAAgJIAAgCIg2AAIAAAXgAhAgEIA2AAIAAgMIg2AAgAhAgbIA2AAIAAgLIg2AAgAAfAaIgDgOIAaACQALgBAAgJIAAg4IAOAAIAAA6QAAAUgVABIgbgBgAAaAAIAAgwIANAAIAAAwgAheg+IAAgMIA7AAIgLgPIAMgIIAQASIgGAFIArAAIAPgWIAQAIIgNAOIA6AAIAAAMg");
	this.shape_41.setTransform(137,137.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AhcBSQASgTAGgTQAGgSAAgkIAAhRIAQAAIAAA0IBGAAIAAg4IARAAIAAA4IA0AAIAAAPIiLAAIAAAiIBgAAIAABVIgRAAIAAhGIhQAAQgEAqgdAdQgFgIgHgGg");
	this.shape_42.setTransform(117.3,137.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AANBUQAtgcAbgqIAMAJQgfAugrAaIgKgLgAhCBdIgCgPIARACQAKAAAAgMIAAgZIgbAAIAAADIgOAAIAAgpIBbAAIAAApIgMAAIAAgDIgZAAIAAAbQAAAWgUABIgSAAgAhEAgIBBAAIAAgRIhBAAgAhgBPQAOgLAPgTIALAIQgRAUgNALgAgSA5IAJgJIAYAVIgKAKQgJgLgOgLgAAUAMQAigWAagjIAMAKQgdAjghAYIgKgMgAhfgFIAAgLIA1AAIgGgLIAJgEIggAAIAAAGIgOAAIAAg/IBhAAIAAA/IgNAAIAAgGIgiAAIAIAPIAzAAIAAALgAhHgpIBGAAIAAgOIhGAAgAhHhBIBGAAIAAgMIhGAAgAASgsQAdgSAYggIAMAJQgYAfgfAVIgKgLg");
	this.shape_43.setTransform(97,137.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhABgIAAhTQgLAOgMALIgJgOQAkgkAVgsIgzAAIAAgPIA5AAIAJgXIAQAEIgIATIBxAAIAAAPIh3AAQgLAagQAXIAABngAgqBRIAAgNIA8AAIAAg7IgyAAIAAgNIAyAAIAAgnIAQAAIAAAnIA0AAIAAANIg0AAIAAA7IA/AAIAAANg");
	this.shape_44.setTransform(76.9,137);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AhaBOQAwgEAdgMIgxgQIAQgVIgyAAIAAgOIA6AAIAMgRIAOAGIgIALIB1AAIAAAOIgtAAQgLATgTAOIA9ATIgIAPIhFgYQghATg3AGIgIgPgAgoAnIAsAOQATgMALgQIhAAAIgKAOgABCAAIAAgGIiEAAIAAAGIgOAAIAAg6IAxAAIAAgUIg6AAIAAgOICzAAIAAAOIg7AAIAAAUIAyAAIAAA6gAAfgTIAjAAIAAgaIgjAAgAgQgTIAhAAIAAgaIghAAgAhCgTIAjAAIAAgaIgjAAgAgQg6IAhAAIAAgUIghAAg");
	this.shape_45.setTransform(57,137.5);

	this.instance = new lib.钢水流出();
	this.instance.parent = this;
	this.instance.setTransform(167,50,1,1,0,0,0,-0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,248.6,492.3,131.1);
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