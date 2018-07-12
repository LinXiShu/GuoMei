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

app.get('/buycar',(req, res) =>{
    mongo.collection('gome','buycar', function(collection) {
        // console.log('链接成功');
        collection.find().toArray(function(err, result) {
            if(err) {
                console.log('Error:' + err);
                return;
            }
            if(result){
                res.send(result)
            }
        })
    })
});

app.get('/xuan',(req, res) =>{
    mongo.collection('gome','buycar', function(collection) {
        // console.log('链接成功');
        // console.log(req.query.fg, "," ,req.query.id)
        // console.log((req.query.id)*1)
        collection.update(
        {
            // id:req.query.id
            _id:req.query._id,
            "goods.id":(req.query.id)*1,
        },{
            $set: {
                // checksd:req.query.fg
                "goods.$.checksd":req.query.fg
            },
            // 记录更新时间
            // $currentDate: { lastModified: true }
        },{
            multi: true 
        },(err, result) => {
            if(result){
                res.send(result)
            }
        })
    })
});

app.get('/shan',(req,res)=>{
    mongo.collection('gome','buycar', function(collection) {}),(err,result)=>{res.send(result)}
})

app.listen(13838);
