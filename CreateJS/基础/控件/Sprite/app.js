var stage,ss;

stage = new createjs.Stage("canvas");
ss = new createjs.SpriteSheet({//定义动画
  "images":["112.png"],//操作对象
  "frame":{// 定义单个帧,中的内容
    "width":60,
    "height":92,
    "count":15 //帧的总数
  },
  "animations":{//设置动画
    qian:[0,10,"hou"],//定义动画名称和匹配动作的对象的个数区间，调用函数使其连续动作
    hou:[11,15,"qian"]
  }
});

//                两个参数（动画名称，动画开始动作）
var s = new createjs.Sprite(ss,"qian");

s.x = 100;
s.y = 100;

stage.addChild(s);
createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener("tick",stage);
