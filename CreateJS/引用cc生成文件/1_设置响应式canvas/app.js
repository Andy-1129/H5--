var canvas, stage, exportRoot,  fnStartAnimation;

canvas = document.getElementById("gameView");

createjs.MotionGuidePlugin.install();
images = images||{};
ss = ss||{};
var loader = new createjs.LoadQueue(false);
loader.addEventListener("fileload", handleFileLoad);
loader.addEventListener("complete", handleComplete);
loader.loadManifest(lib.properties.manifest);
//加载 文件资源
function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}
//加载完成后执行
function handleComplete(evt) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}


	exportRoot = new lib.lianxi01();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive() {
		window.addEventListener('resize', resizeCanvas);
  		function resizeCanvas() {
			var w = lib.properties.width, h = lib.properties.height;
			var iw = window.innerWidth, ih=window.innerHeight;
            //                  设备像素比率
			var pRatio = window.devicePixelRatio, xRatio=iw/w, yRatio=ih/h;

            canvas.width = w*pRatio*xRatio;
			canvas.height = h*pRatio*yRatio;

			stage.scaleX = pRatio*xRatio;
			stage.scaleY = pRatio*yRatio;

		}
	}
	makeResponsive();
	fnStartAnimation();
}
