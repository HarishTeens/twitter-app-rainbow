console.log("server is running");

var Twit=require("twit");
var config=require("./config");

var T = new Twit(config);

T.get('search/tweets', { q: 'rusty', count: 2 }, function(err, data, response) {
    res.render("page.ejs",{data:data});
    
  /*console.log(data);*/
})
