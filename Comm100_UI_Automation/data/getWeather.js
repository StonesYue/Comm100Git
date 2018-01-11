var http = require('http');

module.exports = {
    getWeather : function() {
        var req = http.get("http://mobile.weather.com.cn/data/forecast/101010100.html?_=你的密钥", function(res) {
            var size = 0;
            var chunks = [];
            res.on('data', function(chunk){
                size += chunk.length;
                chunks.push(chunk);
            });
            res.on('end', function(){
                var data = Buffer.concat(chunks, size);
                console.log(data.toString())
            });
        }).on('error', function(e) {
          console.log("Got error: " + e.message);
        });
        req.end();
    }
};
