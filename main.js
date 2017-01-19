var express = require('express')
app = express()
var cheerio = require('cheerio')
var request = require('request')
app.set('view engine', 'ejs')
app.set('views', './views')
app.listen(8888, function(){
  console.log('listen 8080')
})
app.get('/', function(req, res){
  request('http://ketquaxoso.24h.com.vn/xo-so-mien-bac/', function(error, respon, body){
    if (error) {
      console.log(error);
    }
    else {
      $ = cheerio.load(body)
        var xoso = $('.number_kq')
        var getxoso = [];
        xoso.each(function(i, e) {
        getxoso[i] = $(this).text()
        })

      lastxoso = {
        giai_dac_biet : ["Giải đặc biệt", getxoso[0] ],
        giai_nhat : ["Giải nhất", getxoso[1] ],
        giai_nhi : ["Giải nhì", getxoso[2] ],
        giai_ba : ["Giải ba", getxoso[3] ],
        giai_tu : ["Giải tư", getxoso[4] ],
        giai_nam : ["Giải năm", getxoso[5] ],
        giai_sau : ["Giải sáu", getxoso[6] ],
        giai_bay : ["Giải bảy", getxoso[7] ],
      }

      var gettime = $('h2')
  console.log(gettime.text());

      res.render('index', {
        html : lastxoso
      })
    }
  })
})
