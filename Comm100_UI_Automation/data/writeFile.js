/**写入文件 */
var cp = require('child_process');
var fs = require("fs");
var LineByLineReader = require('line-by-line');
//var config = fs.readFileSync('./testdata/ChatButton.properties','utf8');
var textContainer = []

console.log("config-------------"+fs.readFile('./testdata/ChatButton.properties'));
module.exports = {
   /**
    * 将传入的字符串写入文件
    */
   writeFilesByOneLine:function(fileName,data){
    var config = fs.readFileSync(fileName,'utf8');
    if(config.length==0){
        console.log('11111111111111111111', data);
        fs.writeFile(fileName,data);
        return;
    }
    if (config.length > 0) {
      textContainer = config.split("\n");
    }
    var count = 0;
    for (var i=0; i<textContainer.length; i++) {
       console.log(textContainer[i].split("=")[0]);
       console.log(data.split("=")[0]);
       if (textContainer[i].split("=")[0] == data.split("=")[0]) {
         textContainer[i] = data;
         count++;
         break;
       }
     }
     if(count==0){
        textContainer.push(data);
     }
     var textString = '';
     for(var i=0;i<textContainer.length;i++){
      if(i==0){
        textString+=textContainer[i];
        continue;
      }
      textString+="\n"+textContainer[i];
     }
     console.log("000000000000"+textString);
     fs.writeFile(fileName,textString,(err) => {
        if (err) {
          return console.log(err);
        }
        console.log();
      });
  },

  /**
   * 将传入的数组写入到文件
   */
  writeFilesByArray : function(fileName,data){
    var textString = '';
    var config = fs.readFileSync(fileName,'utf8');
    // 如果文件没有内容，直接将传入的数组内容格式化后写入文件
    if(config.length==0){
      console.log('11111111111111111111', data);
      for(var i=0;i<data.length;i++){
        if(i==0){
          textString+=data[i];
          continue;
        }
        textString+="\n"+data[i];
       }
      fs.writeFile(fileName,textString);
      return;
    }
    // 如果文件有内容，则判断是否有Key相同的行，如果有相同的直接覆盖，没有相同则追加
    if (config.length > 0) {
      textContainer = config.split("\n");
    }
    for(var i = 0;i<data.length;i++){
      for(var j =0;j<textContainer.length;j++){
        if(data[i].split("=")[0]==textContainer[j].split("=")[0]){
          textContainer[j] = data[i];
        }
      }
    }
    for(var i in data){
      //该元素在textContainer内部不存在才允许追加
      if(textContainer.indexOf(data[i])==-1){
        textContainer.push(data[i]);
      }
  }
    console.log("44444444"+textContainer);
    for(var i=0;i<textContainer.length;i++){
      if(i==0){
        textString+=textContainer[i];
        continue;
      }
      textString+="\n"+textContainer[i];
     }
     fs.writeFile(fileName,textString,(err) => {
      if (err) {
        return console.log(err);
      }
      console.log();
    });
  }
}




// module.exports = {
//   writeFiles:function(fileName,data){
//     if (textContainer.length === 0) {
//       textContainer.push(data);
//     }
//     for (var i=0; i<textContainer.length; i++) {
//       if (textContainer[i].split("=")[0] === data.split("=")[0]) {
//         textContainer[i] = data;
//       } else {
//         textContainer.push(data);
//       }
//     }
//     fs.writeFile(fileName,textContainer+"\n",(err) => {
//       if (err) {
//         return console.log(err);
//       }
//       console.log();
//     });
//   }
// }




// //var data = 'www.comm100.com';
// module.exports = {
//   writeFiles:function(fileName,data){
//     // 创建一个可以写入的流，写入到文件 output.txt 中
//     var writerStream = fs.createWriteStream(fileName);
//     // 使用 utf8 编码写入数据
//     writerStream.write(data,'UTF8');
//     // 标记文件末尾
//     writerStream.end();
//     // 处理流事件 --> data, end, and error
//     writerStream.on('finish', function() {
//       console.log("写入完成。");
//     });
//     writerStream.on('error', function(err){
//      console.log(err.stack);
//     });
//   console.log("程序执行完毕");
// }
// }

