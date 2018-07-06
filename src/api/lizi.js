var mongo = require("./mongo.js")

//第一个参数为数据库名字，第二个参数为集合名字，回掉函数直接使用，里面写操作数据库代码。在统一数据库格式下，第一个参数默认为'gome'
mongo.collection('gome','goods', function(collection) {
    //console.log(collection);
    collection.insert({
        name: 123,
        age: 456
    })
})