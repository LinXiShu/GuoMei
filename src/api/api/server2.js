


var express = require("express");

var db = require("./mysql.js");

var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

app.use(function(req,res,next){

    res.append("Access-Control-Allow-Origin","*");

    next();

})

 var num = '';
 var num_list = "0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ";


app.get("/", (req, res) => {

    res.send("hello LinXiShu");

})

app.get("/logina", (req, res) => {


    var params = {
        username : req.query.username,
        password : req.query.password,
    }
    var querysss = db.query('select * from users where username= "' + params.username +'" and password = ' + params.password , null , function(data){

        res.send(data);
    })
})

app.get("/carp", (req, res) => {

    var params = {
        ip : req.query.ip,
    }
 console.log(params.ip);
    var sql12345 = db.query('select * FROM car where ip="' + params.ip + '"' , null , function(data){

        res.send(data);
    }) 
})

app.get("/jr_carss" , (req, res) =>{

    var params = {
        id : req.query.id,
    }

    var sql01 = db.query('select * FROM products where id=' + params.id ,null ,function(data){

        res.send(data);
    })

})



app.get("/jr_car" , (req, res) =>{

    var params = {
        id : req.query.id ,
        username : req.query.username
    }

    var sql9 = db.query('select * FROM products where id=' + params.id ,null ,function(data){
            
        var id = data[0].id;
        var name = data[0].name;
        var photo = data[0].photo;
        var qty = data[0].qty;
        var price = data[0].price;
        var ip = params.username;

            if(data != ''){

                var sql11 = db.query("insert into car( id, name, photo, qty, price, ip) values('"+ id +"','"+name+"','" +photo+"'," + qty+"," + price+",'" + ip+"'" +")" , null ,function(asdasd){


                        console.log(asdasd);
                        res.send('插入成功');
                })

            }else{
                
                res.send('插入失败');
            }
        
    })

})





app.post("/signins", (req, res) => {
    num = '';
    for(i= 0;i<8;i++){
        num += num_list.substr(Math.floor(Math.random() * 62), 1) + '';
    }console.log(num);

        var params = {
            username: req.body.username,
            password: req.body.password
        }

        console.log(params.username,123)

        var sql3 = db.query('select * FROM users where username ="' + params.username  + '"',null, function(a){

            if(a == ''){
                
                var sql2s = db.query("insert into users( id, username, password) values( '" + num + "','" + params.username + "','" + params.password + "')", function(results){

                    console.log(results);
                    res.send("yesSignin");
                })
            } else {
                 res.send("haveUser");
            }
    })
})



// 会员 注册
app.post("/signin", (req, res) => {

    res.append("Access-Control-Allow-Origin","*");

    var params = {
        username : req.body.username,
        password : req.body.password
    }

    var signin_sql = db.query("select * from users where username='"+params.username+"'", null , function(ZC){


    })
});
app.get("/product", (req, res) => {



    console.log(req.query.classa)

    let params = {
        classa : req.query.classa,
    }

    var products_sql = db.query('select * from products', null, function(zcs){

        res.send(zcs);
    })
})


app.get("/products", (req, res) => {



    console.log(req.query.classa)

    let params = {
        classa : req.query.classa,
    }

    var products_sql = db.query('select * from products where class=' + params.classa, null, function(zcs){

        res.send(zcs);
    })
})


// 会员 登录
app.post("/login", (req, res) => {

    res.append("Access-Control-Allow-Origin","*");

    let params = {
        username : req.body.username,
        password : req.body.password
    };

    console.log(params);

    var login_sql = db.query("select * from users where username='"+ params.username +"' and password='"+ params.password +"'" , null, function(FH){

        if(FH === ''){
            res.send('failLogin');
        };
        if(FH != ''){
            res.send('successLogin');
        }

    })
    
})

var server = app.listen(1898, function(){

    console.log(123)
    
    var host = server.address().address;
    
    var port = server.address().port;

});


