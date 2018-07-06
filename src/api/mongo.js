var MongoClient = require('mongodb').MongoClient;
//结尾是选择数据库名
var DB_CONN_STR = 'mongodb://localhost:27017';

// 第一个参数为数据库名字，第二个参数为集合名字
function collection(m,n,callback) {
	MongoClient.connect(DB_CONN_STR, function(err, client) {
		// console.log("连接成功！");
		const db = client.db(m);
		//console.log(db);
		let collection = db.collection(n);
		callback(collection);
		client.close();
	});
}

module.exports = {
	collection
}