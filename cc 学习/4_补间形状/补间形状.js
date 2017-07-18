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



// stage content:
(lib.无标题1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlPGVQiMioAAjtQAAjsCMinQCLioDEAAQDFAACMCoQCLCnAADsQAADtiLCoQiMCnjFAAQjEAAiLing");
	var mask_graphics_1 = new cjs.Graphics().p("AlUGWQiJiqgEjsQAEjsCKipQCOilDFgDQDGADCPClQCKCqADDrQgEDtiKCpQiOCljGAEQjFgEiPilg");
	var mask_graphics_2 = new cjs.Graphics().p("AlYGYQiIisgGjsQAGjrCJisQCRiiDGgHQDHAHCSCjQCICrAGDsQgGDsiJCrQiRCijHAHQjGgHiSiig");
	var mask_graphics_3 = new cjs.Graphics().p("AlcGZQiHiugJjrQAKjrCHiuQCUigDHgJQDIAKCVCgQCHCuAJDqQgKDsiHCuQiUCfjIAKQjIgKiUigg");
	var mask_graphics_4 = new cjs.Graphics().p("AlgGaQiFivgMjrQANjrCFiwQCXidDIgMQDKANCXCeQCFCvANDrQgODriFCwQiYCdjIAMQjJgNiXieg");
	var mask_graphics_5 = new cjs.Graphics().p("AlkGcQiDiygQjqQAQjrCEixQCbibDJgQQDKARCaCbQCDCyAQDqQgQDriECxQibCbjJAQQjKgRiaibg");
	var mask_graphics_6 = new cjs.Graphics().p("AloGeQiCi0gTjqQAUjqCCi0QCeiYDKgTQDLAUCdCZQCCC0ATDpQgUDriDCzQidCYjKATQjLgUidiYg");
	var mask_graphics_7 = new cjs.Graphics().p("AltGfQh/i2gWjqQAWjqCCi1QCgiVDLgWQDMAXChCWQCAC2AVDpQgWDqiCC2QigCVjLAWQjMgXihiWg");
	var mask_graphics_8 = new cjs.Graphics().p("AlxGgQh+i3gZjpQAbjqB+i4QCkiTDMgZQDNAbCjCUQB/C3AZDpQgaDriAC3QijCTjNAZQjNgbijiUg");
	var mask_graphics_9 = new cjs.Graphics().p("Al1GiQh8i6gdjpQAejpB+i6QCniPDNgdQDOAeCmCRQB8C6AdDoQgeDqh+C6QinCPjNAdQjOgeimiRg");
	var mask_graphics_10 = new cjs.Graphics().p("Al5GkQh7i8gfjpQAhjpB8i7QCqiNDOggQDPAhCpCPQB7C8AfDoQghDph8C7QiqCOjOAfQjPghipiOg");
	var mask_graphics_11 = new cjs.Graphics().p("Al9GkQh5i9gjjpQAkjoB7i+QCtiKDPgjQDQAlCsCMQB5C+AjDoQgkDoh7C+QitCKjPAkQjQglisiNg");
	var mask_graphics_12 = new cjs.Graphics().p("AmBGmQh4i/gmjoQAojoB5jAQCwiIDQgmQDRAoCvCKQB4DAAmDnQgoDph5C/QiwCIjQAmQjRgoiviKg");
	var mask_graphics_13 = new cjs.Graphics().p("AmFGoQh2jCgpjoQArjnB3jCQCziFDRgpQDSArCyCHQB2DCApDoQgrDnh4DCQiyCFjSApQjRgriyiHg");
	var mask_graphics_14 = new cjs.Graphics().p("AmJGpQh0jDgtjnQAujoB2jEQC3iCDSgtQDTAvC0CFQB0DEAtDnQgvDnh2DEQi2CDjSArQjSgti1iGg");
	var mask_graphics_15 = new cjs.Graphics().p("AmNGrQhzjGgvjnQAxjnB1jFQC5iBDTgvQDUAyC3CCQBzDGAvDnQgxDnh1DFQi4CAjUAwQjTgyi4iCg");
	var mask_graphics_16 = new cjs.Graphics().p("AmRGsQhxjIgzjmQA1jnBzjHQC8h+DVgyQDUA1C7CAQBwDIAzDmQg1DnhyDHQi8B9jVAzQjUg1i7iAg");
	var mask_graphics_17 = new cjs.Graphics().p("AmWGuQhujLg2jmQA3jlBzjKQC+h7DWg1QDVA4C+B9QBvDLA2DmQg4DlhyDKQi/B7jWA1QjVg4i+h9g");
	var mask_graphics_18 = new cjs.Graphics().p("AmZGwQhujNg5jlQA7jmBxjLQDBh5DXg5QDWA8DBB7QBuDMA4DmQg7DmhwDLQjCB4jWA5QjXg7jAh7g");
	var mask_graphics_19 = new cjs.Graphics().p("AmdGxQhtjOg8jmQA/jlBvjNQDFh3DXg7QDXA+DEB5QBsDOA8DlQg+DmhvDNQjFB2jXA8QjYg+jDh5g");
	var mask_graphics_20 = new cjs.Graphics().p("AmhGyQhrjQg/jlQBCjlBtjPQDIhzDYg/QDZBCDGB2QBqDQBADlQhCDlhuDPQjHBzjZA/QjYhBjGh3g");
	var mask_graphics_21 = new cjs.Graphics().p("AmmG0QhojShDjlQBFjkBsjSQDLhwDZhDQDaBGDJBzQBpDTBCDkQhFDlhrDRQjLBwjaBDQjZhFjKh0g");
	var mask_graphics_22 = new cjs.Graphics().p("AmqG1QhnjUhGjkQBJjkBqjUQDOhtDahGQDbBJDMBxQBnDUBGDkQhJDlhqDTQjOBujaBFQjbhJjMhxg");
	var mask_graphics_23 = new cjs.Graphics().p("AmuG3QhmjXhIjkQBMjjBpjWQDQhrDbhIQDdBMDPBuQBlDXBIDjQhLDkhpDVQjQBsjdBIQjbhMjPhug");
	var mask_graphics_24 = new cjs.Graphics().p("AmyG5QhkjZhMjkQBQjjBmjYQDVhoDchMQDcBQDSBsQBlDYBLDkQhPDkhnDWQjUBpjdBLQjchOjShsg");
	var mask_graphics_25 = new cjs.Graphics().p("Am2G6QhijahQjkQBTjiBmjaQDXhmDdhPQDeBTDVBpQBiDbBPDjQhSDjhmDZQjXBmjeBPQjdhTjVhpg");
	var mask_graphics_26 = new cjs.Graphics().p("Am6G7QhhjchSjjQBWjiBkjcQDahjDehSQDfBWDYBnQBgDdBSDiQhVDjhkDbQjaBjjfBSQjehVjYhog");
	var mask_graphics_27 = new cjs.Graphics().p("Am/G8QhfjehVjjQBZjhBjjeQDdhgDfhVQDgBZDbBkQBfDfBVDiQhZDjhiDcQjeBijgBVQjehZjchmg");
	var mask_graphics_28 = new cjs.Graphics().p("AnCG+QhejghYjiQBcjiBhjfQDghfDhhYQDgBdDeBiQBdDhBYDiQhbDihiDfQjfBejiBYQjfhcjehjg");
	var mask_graphics_29 = new cjs.Graphics().p("AnHHAIi3nFIC/nCIHFi3IHCC/IC3HFIi/HCInFC3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:84.4,y:167.6}).wait(1).to({graphics:mask_graphics_1,x:90.8,y:166.4}).wait(1).to({graphics:mask_graphics_2,x:97.2,y:165.1}).wait(1).to({graphics:mask_graphics_3,x:103.6,y:163.9}).wait(1).to({graphics:mask_graphics_4,x:110,y:162.6}).wait(1).to({graphics:mask_graphics_5,x:116.3,y:161.3}).wait(1).to({graphics:mask_graphics_6,x:122.7,y:160.1}).wait(1).to({graphics:mask_graphics_7,x:129.1,y:158.8}).wait(1).to({graphics:mask_graphics_8,x:135.5,y:157.6}).wait(1).to({graphics:mask_graphics_9,x:141.9,y:156.3}).wait(1).to({graphics:mask_graphics_10,x:148.3,y:155}).wait(1).to({graphics:mask_graphics_11,x:154.7,y:153.8}).wait(1).to({graphics:mask_graphics_12,x:161,y:152.5}).wait(1).to({graphics:mask_graphics_13,x:167.4,y:151.3}).wait(1).to({graphics:mask_graphics_14,x:173.8,y:150}).wait(1).to({graphics:mask_graphics_15,x:180.2,y:148.8}).wait(1).to({graphics:mask_graphics_16,x:186.6,y:147.5}).wait(1).to({graphics:mask_graphics_17,x:193,y:146.3}).wait(1).to({graphics:mask_graphics_18,x:199.3,y:145}).wait(1).to({graphics:mask_graphics_19,x:205.7,y:143.8}).wait(1).to({graphics:mask_graphics_20,x:212.1,y:142.5}).wait(1).to({graphics:mask_graphics_21,x:218.5,y:141.2}).wait(1).to({graphics:mask_graphics_22,x:224.9,y:140}).wait(1).to({graphics:mask_graphics_23,x:231.3,y:138.7}).wait(1).to({graphics:mask_graphics_24,x:237.7,y:137.5}).wait(1).to({graphics:mask_graphics_25,x:244,y:136.2}).wait(1).to({graphics:mask_graphics_26,x:250.4,y:134.9}).wait(1).to({graphics:mask_graphics_27,x:256.8,y:133.7}).wait(1).to({graphics:mask_graphics_28,x:263.2,y:132.4}).wait(1).to({graphics:mask_graphics_29,x:269.6,y:131.2}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 569,
	height: 393,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;