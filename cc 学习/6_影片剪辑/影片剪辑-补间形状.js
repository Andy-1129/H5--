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



(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").ss(1,1,1).p("AGzAAQAAC0h/B/QiACAi0AAQizAAh/iAQiAh/AAi0QAAizCAiAQB/h/CzAAQC0AACAB/QB/CAAACzg");
	this.shape.setTransform(60.6,85.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AkzEzQh/h/AAi0QAAizB/h/QCAiACzAAQC0AAB/CAQCAB/AACzQAAC0iAB/Qh/CAi0AAQizAAiAiAg");
	this.shape_1.setTransform(60.6,85.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF00FF").ss(1,1,1).p("Am2gOQAIiuCEh7QCDh7C2AAQArAAApAGQB7AdBeBlQB7CDAAC2QgICuiEB7QiDB7i2AAQgrAAgogHQh8gchehlQh7iDAAi1g");
	this.shape_2.setTransform(61.6,86);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#040962").s().p("AhiGsQh7gdhehkQh7iEAAi0IAAgBQAJiuCDh7QCDh7C2AAQArAAAoAGQB8AeBeBkQB7CEAAC1QgICuiEB7QiEB7i1AAQgrAAgpgHg");
	this.shape_3.setTransform(61.6,86);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF00FF").ss(1,1,1).p("Am7gdQASinCHh3QCIh3C4AAQAsAAAoAHQB4AiBaBoQB4CIAAC3QgSCoiIB3QiIB2i3AAQgsAAgpgGQh3gjhbhnQh3iIAAi3g");
	this.shape_4.setTransform(62.6,86.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#07125F").s().p("AhxGtQh4gjhbhoQh2iHgBi3IAAgBQASinCHh3QCJh3C3AAQAsAAAoAGQB4AjBbBoQB2CHABC4QgSCniHB3QiJB3i3AAQgsAAgogGg");
	this.shape_5.setTransform(62.6,86.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF00FF").ss(1,1,1).p("Am/gsQAaiiCMhyQCMhyC6AAQAtAAApAGQByAoBYBrQBzCMAAC6QgaChiMBzQiMByi6AAQgsAAgqgHQhygohYhrQhziLAAi5g");
	this.shape_6.setTransform(63.6,86.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0B1A5B").s().p("AiCGtQhygohYhsQhyiLAAi5IAAgBQAZihCMhzQCMhyC6AAQAsAAAqAGQBzAoBXBrQBzCMgBC6QgZChiMBzQiMByi6AAQgsAAgqgGg");
	this.shape_7.setTransform(63.6,86.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF00FF").ss(1,1,1).p("AnDg7QAiibCRhuQCQhuC8AAQAtAAAqAGQBvAuBUBuQBuCQAAC8QgiCbiQBuQiQBui9AAQgtAAgqgGQhvguhUhuQhuiQAAi7g");
	this.shape_8.setTransform(64.6,87.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0E2358").s().p("AiSGtQhuguhUhuQhuiQAAi7IAAgBQAhibCRhuQCQhuC8AAQAtAAAqAGQBuAuBVBuQBuCPAAC9QgjCbiQBuQiQBui8AAQgtAAgqgGg");
	this.shape_9.setTransform(64.6,87.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF00FF").ss(1,1,1).p("AnHhKQAriVCVhqQCUhpC+AAQAtAAAsAFQBqA0BQBxQBqCUAAC/QgrCViUBpQiUBqi/AAQgtAAgrgGQhqg0hRhxQhqiUAAi+g");
	this.shape_10.setTransform(65.6,87.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#122C54").s().p("AiiGtQhrg0hQhxQhpiUgBi9IAAgBQAriVCUhqQCUhpC/AAQAuAAArAFQBpA0BRByQBpCUAAC+QgqCViUBqQiVBpi+AAQgtAAgrgGg");
	this.shape_11.setTransform(65.6,87.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF00FF").ss(1,1,1).p("AnLhZQA0iPCYhlQCYhlDBAAQAuAAAsAFQBmA5BNB1QBlCYAADBQgzCPiYBlQiZBljBAAQguAAgsgGQhmg5hMh0QhmiYAAjBg");
	this.shape_12.setTransform(66.6,88.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#153551").s().p("AizGuQhlg6hOh0QhliYAAjBIAAAAQA0iPCYhlQCYhlDBAAQAuAAAsAFQBmA6BNB0QBlCYAADBQgzCOiZBmQiYBljBAAQguAAgsgFg");
	this.shape_13.setTransform(66.6,88.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF00FF").ss(1,1,1).p("AnPhoQA8iICchhQCdhhDDAAQAvAAAsAFQBiA/BJB4QBhCcAADDQg8CJicBgQicBhjEAAQgvAAgsgFQhhg/hKh3QhhidAAjCg");
	this.shape_14.setTransform(67.6,88.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#193E4D").s().p("AjDGuQhhhAhKh2QhhidAAjDIAAAAQA8iICdhiQCchgDDAAQAvAAAsAFQBiA/BJB4QBhCcAADDQg8CIicBhQicBhjEAAQgvAAgsgFg");
	this.shape_15.setTransform(67.6,88.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF00FF").ss(1,1,1).p("AnTh3QBFiDCghcQChhcDFAAQAwAAAtAFQBcBEBHB7QBcCgAADGQhECCihBdQigBcjFAAQgwAAgugFQhchFhHh6QhcihAAjFg");
	this.shape_16.setTransform(68.6,89.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1C464A").s().p("AjTGuQhdhFhHh6QhcihAAjEIAAgBQBEiCChhdQCghcDGAAQAvAAAuAFQBcBFBHB6QBcCgAADGQhECCihBcQigBdjFAAQgwAAgtgFg");
	this.shape_17.setTransform(68.6,89.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF00FF").ss(1,1,1).p("AnXiGQBMh8CmhYQCkhYDIAAQAwAAAuAEQBYBLBEB+QBXCkAADIQhMB8imBYQikBYjHAAQgxAAgugFQhYhKhDh+QhYikAAjHg");
	this.shape_18.setTransform(69.6,89.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#204F46").s().p("AjkGuQhYhKhDh+QhYikAAjIIAAAAQBMh9CmhXQCkhYDIAAQAwAAAuAEQBYBLBEB9QBXClAADIQhMB8ilBYQilBYjIAAQgwAAgugFg");
	this.shape_19.setTransform(69.6,89.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF00FF").ss(1,1,1).p("AnciVQBWh2CphUQCphTDKAAQAxAAAuAEQBUBQBACBQBUCoAADLQhWB2ipBTQioBUjKAAQgxAAgvgFQhUhQhAiBQhUioAAjKg");
	this.shape_20.setTransform(70.6,90.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#235843").s().p("Aj0GuQhUhQhAiAQhUipAAjKIAAAAQBWh2CphUQCphTDKAAQAxAAAuAEQBUBQBACBQBTCoAADLQhVB2ipBTQipBUjJAAQgyAAgugFg");
	this.shape_21.setTransform(70.6,90.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF00FF").ss(1,1,1).p("AngikQBehwCuhPQCthPDMAAQAxAAAwAEQBPBVA9CFQBPCtAADMQheBwitBPQitBPjMAAQgyAAgwgEQhPhWg9iEQhPitAAjMg");
	this.shape_22.setTransform(71.6,90.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#27613F").s().p("AkFGvQhPhWg8iEQhQitAAjLIAAgBQBehwCuhPQCthPDMAAQAxAAAwAEQBPBWA8CDQBQCuAADMQheBviuBQQisBPjNAAQgxAAgwgEg");
	this.shape_23.setTransform(71.6,90.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF00FF").ss(1,1,1).p("AnjizQBmhpCyhLQCwhLDPAAQAyAAAwAEQBLBbA5CHQBLCxAADPQhnBqixBKQixBLjOAAQgyAAgxgEQhLhbg5iHQhKixAAjOg");
	this.shape_24.setTransform(72.6,91);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2A6A3C").s().p("AkUGvQhMhcg5iGQhLiyABjOIAAAAQBmhpCyhMQCxhKDOAAQAyAAAvAEQBMBbA5CHQBKCxAADPQhmBpixBLQixBLjOAAQgzAAgvgEg");
	this.shape_25.setTransform(72.6,91);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF00FF").ss(1,1,1).p("AnojCQBvhkC2hGQC1hGDRAAQAyAAAxADQBHBhA2CKQBGC1AADSQhvBji1BGQi2BHjQAAQgzAAgxgEQhGhhg2iKQhHi1AAjRg");
	this.shape_26.setTransform(73.6,91.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2E7238").s().p("AklGvQhHhhg2iKQhGi1AAjRIAAAAQBvhjC2hHQC1hGDRAAQAzAAAwADQBGBhA2CKQBHC2AADRQhvBji1BHQi1BGjSAAQgyAAgxgEg");
	this.shape_27.setTransform(73.6,91.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF00FF").ss(1,1,1).p("AnsjRQB4hdC5hCQC5hCDUAAQAzAAAyAEQBCBmAyCNQBCC5AADUQh3Bdi6BCQi5BCjTAAQg0AAgygEQhChmgyiNQhCi6AAjSg");
	this.shape_28.setTransform(74.6,91.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#317B35").s().p("Ak2GvQhChngyiMQhCi6AAjSIAAgBQB4heC5hCQC6hBDTAAQAzAAAxADQBCBnAzCNQBCC5AADUQh4Bdi5BCQi5BCjTAAQgzAAgzgEg");
	this.shape_29.setTransform(74.6,91.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF00FF").ss(1,1,1).p("AnwjgQCAhXC+g9QC8g+DXAAQA0AAAyADQA+BtAvCRQA9C7AADXQiABXi9A9Qi9A+jWAAQg1AAgygDQg9htgwiQQg9i8AAjXg");
	this.shape_30.setTransform(75.6,92.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#358431").s().p("AlFGwQg/hsguiRQg+i8AAjWIAAgBQCAhWC+g+QC9g+DWAAQA0AAAxAEQA/BsAuCRQA+C8AADWQiABXi9A9Qi9A+jXAAQg0AAgxgDg");
	this.shape_31.setTransform(75.6,92.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FF00FF").ss(1,1,1).p("An0jvQCJhQDCg5QDAg6DZAAQA0AAAzAEQA6ByArCTQA5DBAADYQiIBRjCA5QjBA5jYAAQg1AAgzgDQg6hygriTQg5jBAAjYg");
	this.shape_32.setTransform(76.6,92.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#388D2E").s().p("AlWGwQg6hygriUQg5jAAAjYIAAgBQCJhRDBg4QDBg6DZAAQA0AAAzAEQA6BxArCUQA5DAAADZQiJBRjBA5QjAA5jaAAQg0AAgzgDg");
	this.shape_33.setTransform(76.6,92.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF00FF").ss(1,1,1).p("An5j+QCShLDGg0QDEg1DcAAQA1AAA0ADQA0B4ApCWQA1DFAADbQiRBKjGA2QjFA0jbAAQg2AAgzgCQg1h4gpiXQg1jFAAjbg");
	this.shape_34.setTransform(77.6,93.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3C952A").s().p("AlnGxQg0h4goiXQg2jFAAjbIAAAAQCShLDGg0QDEg1DcAAQA1AAAzADQA1B4AoCXQA1DEAADbQiQBLjHA0QjEA1jbAAQg1AAg1gCg");
	this.shape_35.setTransform(77.6,93.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FF00FF").ss(1,1,1).p("An8kNQCZhEDLgwQDJgxDdAAQA2AAA0ADQAwB+AlCZQAxDJAADdQiaBFjKAwQjJAwjdAAQg2AAg1gCQgwh+gliZQgwjJAAjdg");
	this.shape_36.setTransform(78.6,93.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3F9E27").s().p("Al2GxQgxh+gliZQgwjJAAjdIAAgBQCZhEDKgwQDJgxDeAAQA2AAAzADQAxB+AlCZQAxDJAADdQiaBEjKAxQjJAwjeAAQg1AAg0gCg");
	this.shape_37.setTransform(78.6,93.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF00FF").ss(1,1,1).p("AoBkcQCjg+DOgsQDNgsDgAAQA2AAA1ACQAsCDAiCdQAsDNAADgQiiA+jPAsQjMAsjgAAQg2AAg2gCQgsiEghicQgtjNAAjgg");
	this.shape_38.setTransform(79.6,94.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#43A723").s().p("AmHGxQgsiEgiicQgsjNAAjfIAAgBQCjg+DOgsQDNgsDgAAQA2AAA1ACQAsCEAiCcQArDOAADfQiiA+jNAsQjOAsjfAAQg3AAg1gCg");
	this.shape_39.setTransform(79.6,94.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FF00FF").ss(1,1,1).p("AoFkrQCrg4DTgoQDRgnDiAAQA3AAA1ACQAoCJAeCgQAoDRAADiQirA4jSAoQjRAnjiAAQg3AAg2gCQgoiJgeifQgojRAAjjg");
	this.shape_40.setTransform(80.6,94.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#46B020").s().p("AmXGxQgoiJgeifQgojSAAjiIAAAAQCrg3DTgoQDRgoDiAAQA2AAA2ACQAoCJAeCgQAoDRAADiQirA4jSAnQjRAojjAAQg2AAg2gCg");
	this.shape_41.setTransform(80.6,94.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF00FF").ss(1,1,1).p("AoJk6QCzgxDXgjQDWgkDkAAQA3AAA3ACQAjCPAaCjQAkDVAADkQizAyjWAjQjWAjjkAAQg4AAg2gCQgkiOgbijQgjjVAAjkg");
	this.shape_42.setTransform(81.6,95);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4AB91C").s().p("AmoGxQgjiOgaijQgkjWAAjjIAAgBQC0gyDWgjQDVgjDlAAQA3AAA3ACQAjCOAbCjQAjDVAADlQizAyjWAjQjWAjjkAAQg4AAg3gCg");
	this.shape_43.setTransform(81.6,95);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FF00FF").ss(1,1,1).p("AoNlJQC8gsDbgeQDZgfDnAAQA4AAA3ACQAeCUAZCmQAeDZAADnQi7ArjbAfQjZAfjnAAQg5AAg3gCQgfiTgYinQgejZAAjng");
	this.shape_44.setTransform(82.6,95.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4DC119").s().p("Am4GyQgfiUgXinQgfjZAAjmIAAgBQC8gsDbgeQDZgfDnAAQA4AAA3ACQAeCUAZCmQAeDaAADmQi8ArjaAfQjZAfjnAAQg5AAg3gBg");
	this.shape_45.setTransform(82.6,95.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FF00FF").ss(1,1,1).p("AoRlYQDEglDfgaQDegbDpAAQA4AAA4ACQAaCaAVCpQAaDdAADpQjEAmjfAZQjdAbjpAAQg5AAg4gCQgbiZgUipQgajeAAjog");
	this.shape_46.setTransform(83.6,95.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#51CA15").s().p("AnIGyQgaiagVipQgajeAAjpIAAAAQDEglDggbQDdgaDpAAQA5AAA3ABQAbCbAUCoQAaDeAADpQjEAljfAbQjdAajpAAQg5AAg4gBg");
	this.shape_47.setTransform(83.6,95.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FF00FF").ss(1,1,1).p("AoWlnQDOgfDjgWQDigWDrAAQA5AAA5ABQAWCgARCsQAWDhAADsQjNAfjjAWQjhAWjsAAQg6AAg4gBQgXiggRisQgWjiAAjrg");
	this.shape_48.setTransform(84.6,96.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#54D312").s().p("AnZGyQgViggSisQgWjhABjrIAAgBQDNgfDjgWQDigWDrAAQA5AAA5ABQAVCgASCsQAWDhgBDsQjNAfjjAWQjgAWjsAAIhzgBg");
	this.shape_49.setTransform(84.6,96.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF00FF").ss(1,1,1).p("Aoal2QDXgZDngSQDlgRDuAAQA6AAA5ABQASCmANCvQASDmAADtQjWAZjnASQjlARjuAAQg6AAg6gBQgSilgNiwQgSjlAAjug");
	this.shape_50.setTransform(85.6,96.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#58DC0E").s().p("AnpGyQgRilgOivQgSjmAAjuQDXgZDngSQDlgRDuAAIBzABQARCmAOCvQASDlAADuQjWAZjnASQjlARjuAAIh0gBg");
	this.shape_51.setTransform(85.6,96.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FF00FF").ss(1,1,1).p("AoemFQDfgSDrgOQDqgNDwAAQA6AAA6ABQANCrAKCzQAODpAADwQjfATjrANQjpANjwAAQg7AAg6AAQgOirgKizQgNjqAAjwg");
	this.shape_52.setTransform(86.6,97.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#5BE50B").s().p("An5GzQgOirgKizQgNjqABjwQDegTDsgNQDpgNDwAAIB0ABQANCqAKCzQANDqAADwQjeATjqANQjqANjwAAIh1AAg");
	this.shape_53.setTransform(86.6,97.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FF00FF").ss(1,1,1).p("AoimUQDngNDwgIQDugJDyAAQA7AAA7AAQAICxAHC2QAIDuAADyQjlANjwAIQjtAJjzAAQg7AAg8gBQgIiwgHi2QgJjuAAjyg");
	this.shape_54.setTransform(87.6,97.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#5FED07").s().p("AoKGzQgIixgHi2QgJjtABjzQDmgNDwgIQDugJDyAAIB1AAQAJCxAHC2QAIDtAADzQjlANjwAIQjtAJjzAAIh3AAg");
	this.shape_55.setTransform(87.6,97.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FF00FF").ss(1,1,1).p("AommjQDvgGD0gFQDygED1AAQA7AAA8ABQAEC1ADC5QAFDzAAD0QjvAGj0AFQjyAEj0AAQg8AAg8AAQgEi2gEi5QgEjyAAj1g");
	this.shape_56.setTransform(88.6,98.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#62F604").s().p("AoZGzIgIlwQgFjyAAj0QDvgGD1gEQDxgFD1AAIB2AAIAIFvQAFDzAAD0QjvAGjzAEQjzAFj0AAIh3AAg");
	this.shape_57.setTransform(88.6,98.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FF00FF").ss(1,1,1).p("AoqmyIRVAAIAANlIxVAAg");
	this.shape_58.setTransform(89.6,98.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#66FF00").s().p("AoqGzIAAtlIRVAAIAANlg");
	this.shape_59.setTransform(89.6,98.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.1,41.1,89,89);


// stage content:
(lib.影片剪辑补间形状 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件1();
	this.instance.parent = this;
	this.instance.setTransform(478.4,314.5,1,1,0,0,0,81,92);

	this.instance_1 = new lib.元件1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(176.5,322.5,1,1,0,0,0,81,92);

	this.instance_2 = new lib.元件1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(451.4,124.5,1,1,0,0,0,81,92);

	this.instance_3 = new lib.元件1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(295.5,206.5,1,1,0,0,0,81,92);

	this.instance_4 = new lib.元件1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(108.5,138.5,1,1,0,0,0,81,92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(319.1,274,457.9,286);
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