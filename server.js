var express = require('express');
var app = express();
var ip= "";
var lang= "";
var os= "";

app.get("/",function(req,res){
    const requestIp = require('request-ip');
    ip = requestIp.getClientIp(req);
    lang= req.headers["accept-language"];
    lang=lang.split(",");
    lang=lang[0];
    var r = require('ua-parser').parse(req.headers['user-agent']);
    os = r.os.toString();
    res.send('{ "ipaddress": "'+ip+'" "language": "'+lang+'" "software: "'+os+'"}');
});

app.listen(process.env.PORT || 3000);