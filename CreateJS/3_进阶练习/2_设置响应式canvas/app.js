var canvas, stage, exportRoot,  fnStartAnimation;

canvas = document.getElementById("gameView");
// 加载 图片 文件
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
	console.log(ssMetadata);
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
		console.log(ssMetadata[i].name);
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
	//随窗口 等比例 缩放
	function makeResponsive() {
		window.addEventListener('resize', resizeCanvas);
  		function resizeCanvas() {
			//画布大小
			var w = lib.properties.width, h = lib.properties.height;
			//窗口大小
			var iw = window.innerWidth, ih=window.innerHeight;
            //                  设备像素比率       //画布与窗口比率
			var pRatio = window.devicePixelRatio, xRatio=iw/w, yRatio=ih/h;
			//缩放后的 画布的大小
            canvas.width = w*pRatio*xRatio;
			canvas.height = h*pRatio*yRatio;
			//舞台 缩放大小
			stage.scaleX = pRatio*xRatio;
			stage.scaleY = pRatio*yRatio;

		}
	}
	makeResponsive();//执行响应式函数
	fnStartAnimation();//实时更新
}
