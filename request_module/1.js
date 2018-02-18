
var request = require("request");
//request("www.google.com",function (error,response,body)
request("http://www.google.com",function(error,response,body)
{
    console.log(body);
});