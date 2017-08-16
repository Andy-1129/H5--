(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


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


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("Aj5ClIAAlJIHzAAIAAFJg");
	this.shape.setTransform(25,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,50.1,33), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("》", "24px 'Times New Roman'");
	this.text.lineHeight = 26;
	this.text.lineWidth = 22;
	this.text.parent = this;
	this.text.setTransform(21,4.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ak/i9IJ/AAIAAF7Ip/AAg");
	this.shape.setTransform(32,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak/C+IAAl7IJ/AAIAAF7g");
	this.shape_1.setTransform(32,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,66,40);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.text = new cjs.Text("  《", "24px 'Times New Roman'");
	this.text.lineHeight = 29;
	this.text.lineWidth = 49;
	this.text.parent = this;
	this.text.setTransform(12,3.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AlTizIKnAAIAAFnIqnAAg");
	this.shape.setTransform(34,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlTC0IAAlnIKnAAIAAFng");
	this.shape_1.setTransform(34,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,70,38);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_99 = function() {
		this.stop();
	}
	this.frame_199 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(99).call(this.frame_99).wait(100).call(this.frame_199).wait(1));

	// 图层 1
	this.instance = new lib.元件3();
	this.instance.parent = this;
	this.instance.setTransform(25,16.5,1,1,0,0,0,25,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:28.5},0).wait(1).to({x:32.1},0).wait(1).to({x:35.6},0).wait(1).to({x:39.1},0).wait(1).to({x:42.7},0).wait(1).to({x:46.2},0).wait(1).to({x:49.7},0).wait(1).to({x:53.3},0).wait(1).to({x:56.8},0).wait(1).to({x:60.4},0).wait(1).to({x:63.9},0).wait(1).to({x:67.4},0).wait(1).to({x:71},0).wait(1).to({x:74.5},0).wait(1).to({x:78},0).wait(1).to({x:81.6},0).wait(1).to({x:85.1},0).wait(1).to({x:88.6},0).wait(1).to({x:92.2},0).wait(1).to({x:95.7},0).wait(1).to({x:99.2},0).wait(1).to({x:102.8},0).wait(1).to({x:106.3},0).wait(1).to({x:109.8},0).wait(1).to({x:113.4},0).wait(1).to({x:116.9},0).wait(1).to({x:120.5},0).wait(1).to({x:124},0).wait(1).to({x:127.5},0).wait(1).to({x:131.1},0).wait(1).to({x:134.6},0).wait(1).to({x:138.1},0).wait(1).to({x:141.7},0).wait(1).to({x:145.2},0).wait(1).to({x:148.7},0).wait(1).to({x:152.3},0).wait(1).to({x:155.8},0).wait(1).to({x:159.3},0).wait(1).to({x:162.9},0).wait(1).to({x:166.4},0).wait(1).to({x:169.9},0).wait(1).to({x:173.5},0).wait(1).to({x:177},0).wait(1).to({x:180.6},0).wait(1).to({x:184.1},0).wait(1).to({x:187.6},0).wait(1).to({x:191.2},0).wait(1).to({x:194.7},0).wait(1).to({x:198.2},0).wait(1).to({x:201.8},0).wait(1).to({x:205.3},0).wait(1).to({x:208.8},0).wait(1).to({x:212.4},0).wait(1).to({x:215.9},0).wait(1).to({x:219.4},0).wait(1).to({x:223},0).wait(1).to({x:226.5},0).wait(1).to({x:230},0).wait(1).to({x:233.6},0).wait(1).to({x:237.1},0).wait(1).to({x:240.7},0).wait(1).to({x:244.2},0).wait(1).to({x:247.7},0).wait(1).to({x:251.3},0).wait(1).to({x:254.8},0).wait(1).to({x:258.3},0).wait(1).to({x:261.9},0).wait(1).to({x:265.4},0).wait(1).to({x:268.9},0).wait(1).to({x:272.5},0).wait(1).to({x:276},0).wait(1).to({x:279.5},0).wait(1).to({x:283.1},0).wait(1).to({x:286.6},0).wait(1).to({x:290.2},0).wait(1).to({x:293.7},0).wait(1).to({x:297.2},0).wait(1).to({x:300.8},0).wait(1).to({x:304.3},0).wait(1).to({x:307.8},0).wait(1).to({x:311.4},0).wait(1).to({x:314.9},0).wait(1).to({x:318.4},0).wait(1).to({x:322},0).wait(1).to({x:325.5},0).wait(1).to({x:329},0).wait(1).to({x:332.6},0).wait(1).to({x:336.1},0).wait(1).to({x:339.6},0).wait(1).to({x:343.2},0).wait(1).to({x:346.7},0).wait(1).to({x:350.3},0).wait(1).to({x:353.8},0).wait(1).to({x:357.3},0).wait(1).to({x:360.9},0).wait(1).to({x:364.4},0).wait(1).to({x:367.9},0).wait(1).to({x:371.5},0).wait(1).to({x:375},0).wait(1).to({x:371.5},0).wait(1).to({x:368},0).wait(1).to({x:364.5},0).wait(1).to({x:361},0).wait(1).to({x:357.5},0).wait(1).to({x:354},0).wait(1).to({x:350.5},0).wait(1).to({x:347},0).wait(1).to({x:343.5},0).wait(1).to({x:340},0).wait(1).to({x:336.5},0).wait(1).to({x:333},0).wait(1).to({x:329.5},0).wait(1).to({x:326},0).wait(1).to({x:322.5},0).wait(1).to({x:319},0).wait(1).to({x:315.5},0).wait(1).to({x:312},0).wait(1).to({x:308.5},0).wait(1).to({x:305},0).wait(1).to({x:301.5},0).wait(1).to({x:298},0).wait(1).to({x:294.5},0).wait(1).to({x:291},0).wait(1).to({x:287.5},0).wait(1).to({x:284},0).wait(1).to({x:280.5},0).wait(1).to({x:277},0).wait(1).to({x:273.5},0).wait(1).to({x:270},0).wait(1).to({x:266.5},0).wait(1).to({x:263},0).wait(1).to({x:259.5},0).wait(1).to({x:256},0).wait(1).to({x:252.5},0).wait(1).to({x:249},0).wait(1).to({x:245.5},0).wait(1).to({x:242},0).wait(1).to({x:238.5},0).wait(1).to({x:235},0).wait(1).to({x:231.5},0).wait(1).to({x:228},0).wait(1).to({x:224.5},0).wait(1).to({x:221},0).wait(1).to({x:217.5},0).wait(1).to({x:214},0).wait(1).to({x:210.5},0).wait(1).to({x:207},0).wait(1).to({x:203.5},0).wait(1).to({x:200},0).wait(1).to({x:196.5},0).wait(1).to({x:193},0).wait(1).to({x:189.5},0).wait(1).to({x:186},0).wait(1).to({x:182.5},0).wait(1).to({x:179},0).wait(1).to({x:175.5},0).wait(1).to({x:172},0).wait(1).to({x:168.5},0).wait(1).to({x:165},0).wait(1).to({x:161.5},0).wait(1).to({x:158},0).wait(1).to({x:154.5},0).wait(1).to({x:151},0).wait(1).to({x:147.5},0).wait(1).to({x:144},0).wait(1).to({x:140.5},0).wait(1).to({x:137},0).wait(1).to({x:133.5},0).wait(1).to({x:130},0).wait(1).to({x:126.5},0).wait(1).to({x:123},0).wait(1).to({x:119.5},0).wait(1).to({x:116},0).wait(1).to({x:112.5},0).wait(1).to({x:109},0).wait(1).to({x:105.5},0).wait(1).to({x:102},0).wait(1).to({x:98.5},0).wait(1).to({x:95},0).wait(1).to({x:91.5},0).wait(1).to({x:88},0).wait(1).to({x:84.5},0).wait(1).to({x:81},0).wait(1).to({x:77.5},0).wait(1).to({x:74},0).wait(1).to({x:70.5},0).wait(1).to({x:67},0).wait(1).to({x:63.5},0).wait(1).to({x:60},0).wait(1).to({x:56.5},0).wait(1).to({x:53},0).wait(1).to({x:49.5},0).wait(1).to({x:46},0).wait(1).to({x:42.5},0).wait(1).to({x:39},0).wait(1).to({x:35.5},0).wait(1).to({x:32},0).wait(1).to({x:28.5},0).wait(1).to({x:25},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50.1,33);


// stage content:
(lib.影片剪辑按钮元件时间轴函数 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.you.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		this.zuo.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		
		
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			var frameNum1 = this.mov.currentFrame;
			var num1 = 200-frameNum1;
			console.log(frameNum1);
			console.log(num1);
			if(frameNum1=0){
				this.mov.gotoAndPlay(0);
			};
			if(0<frameNum1 <99){
				this.mov.gotoAndPlay(frameNum1);
			};
			if(100<frameNum1 <200){
				this.mov.gotoAndPlay(num1);
			};
			
			
		}	
		
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{	var frameNum2 = this.mov.currentFrame;
			var num2 = 200- frameNum2;
			
			if(0<frameNum2 <100){
				this.mov.gotoAndPlay(num2);
				
			}
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层 2
	this.mov = new lib.元件4();
	this.mov.parent = this;
	this.mov.setTransform(50,75.6);

	this.timeline.addTween(cjs.Tween.get(this.mov).wait(1));

	// 图层 1
	this.you = new lib.元件2();
	this.you.parent = this;
	this.you.setTransform(483,325,1,1,0,0,0,32,19);
	new cjs.ButtonHelper(this.you, 0, 1, 1);

	this.zuo = new lib.元件1();
	this.zuo.parent = this;
	this.zuo.setTransform(385,324,1,1,0,0,0,34,18);
	new cjs.ButtonHelper(this.zuo, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.zuo},{t:this.you}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(325,275.6,466,269.5);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;