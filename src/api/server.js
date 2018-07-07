var express = require('express');
var mongo = require("./mongo.js");
var bodyParser = require('body-parser');

var app = express();
// 设置跨域请求
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1')
//     if(req.method=="OPTIONS") {
//       res.send(200);/*让options请求快速返回*/
//     } else{
//       next();
//     }
// });

app.use(function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    next();
})

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// 例子
/*app.get('/goods',(req, res) =>{
    mongo.collection('gome','goods', function(collection) {
        // console.log('链接成功');
        collection.insert({
            name: req.query.name,
            age: req.query.age
        },(err, result) => {
            if(result){
                res.send("success")
            }
        })
    })
});*/

app.listen(13838);
