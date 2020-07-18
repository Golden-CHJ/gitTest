const router = require('koa-router')()
const fs = require('fs');
const path = require('path');//解析需要遍历的文件夹
 var iconv = require('iconv-lite');
 var join = require('path').join;
 const readline = require('readline');
 const iconvLite = require('iconv-lite')
var root = path.join(__dirname)

var image = require("imageinfo");
router.get('/',  (ctx, next) => {
var path = 'data.txt'
    

var chineseLine = 0
var sumLine = 1


//调用文件遍历方法

//文件遍历方法

readDirSync('../no/')
function readDirSync(path){
	var pa = fs.readdirSync(path);
	pa.forEach(function(ele,index){
		var info = fs.statSync(path+"/"+ele)	
		if(info.isDirectory()){
			// console.log("dir: "+ele)
			readDirSync(path+"/"+ele);
		}else{
            console.log("file: "+ele)
             readCharInLine(path+"/"+ele)
		}	
	})

}


 function readCharInLine (path){
    var r1 = readline.createInterface({
      input: fs.createReadStream(path)
    });

    r1.on('line', function(line){ //事件监听
        console.log('Line from file:' + sumLine + ":" + line);
        CheckChinese(iconvLite.decode(line,'gbk'))
    　　if(sumLine == 1){
    　　　　console.log(line)
    　　}
    sumLine+=1;
    
 // 这是异步
console.log(sumLine)
console.log(chineseLine) 

    })


   
}

//确认文件中文
function CheckChinese(val){     
    　　var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
    　　if(reg.test(val)){console.log("包含汉字！"); 
chineseLine++;}   
      }



})



router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
