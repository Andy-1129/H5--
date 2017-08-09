# drawImage
##定义和用法
drawImage() 方法在画布上绘制图像、画布或视频。
drawImage() 方法也能够绘制图像的某些部分，以及/或者增加或减少图像的尺寸。
###JavaScript 语法 1
在画布上定位图像：
context.drawImage(img,x,y);
###JavaScript 语法 2
在画布上定位图像，并规定图像的宽度和高度：
context.drawImage(img,x,y,width,height);
###JavaScript 语法 3
剪切图像，并在画布上定位被剪切的部分：
context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
###参数	描述
img	规定要使用的图像、画布或视频。
sx	可选。开始剪切的 x 坐标位置。
sy	可选。开始剪切的 y 坐标位置。
swidth	可选。被剪切图像的宽度。
sheight	可选。被剪切图像的高度。
x	在画布上放置图像的 x 坐标位置。
y	在画布上放置图像的 y 坐标位置。
width	可选。要使用的图像的宽度。（伸展或缩小图像）
height	可选。要使用的图像的高度。（伸展或缩小图像）

# toDataURL  火狐支持，谷歌其它不支持
toDataURL() 方法返回一个包含图片展示的 data URI 。可以使用 type 参数其类型，默认为 PNG 格式。图片的分辨率为96dpi。
###语法
canvas.toDataURL(type, encoderOptions);
####type 可选
图片格式，默认为 image/png
####encoderOptions 可选
在指定图片格式为 image/jpeg 或 image/webp的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 0.92。其他参数会被忽略。

#setInterval
