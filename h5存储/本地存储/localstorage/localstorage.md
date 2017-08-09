##sessionStorage,localStorage 相同的API 存储方式，
   不同：localStorage 一直存在，sessionStorage 在打开新窗口或关闭窗口会自动清除
# 存储方式
    key-value 形式
    ###('key1','value1')   ('key2','value1')
    ###('key2','value2')覆盖('key2','value1')最终结果 ('key2','value2')
# API（'key','value'）必须加引号  
  getItem: 取（获得）localstorage 的一个记录，
 ### localStorage.getItem('key');获取对应的  value;
  setItem：设置
 ### localStorage.setItem('key','value'); 将新增的(key,value)对;存到localStorage 中
  removeItem：移除
  ### localStorage.removeItem('key');在localStorage 中 删除对应的(key,value);
  key：localstorage 中的索引 key值
  ### localStorage.key(0); 获取localStorage 中第 1 个 key 值
  clear：清除缓存
 ### localStorage.clear();清除localStorage 中所有数据(key,value);

 #存储内容
 1.数组 2.json数据 3.图片 4.脚本 5.样式文件（能转换为字符串的都可以存）

#使用限制
#### 1.子域名之间不能共享存储数据，通过postmessage方法进行数据共享
#### 2. 超出存储大小，用成熟的算法LRU,FIFO删除旧的数据
#### 3. 数据过期控制 
