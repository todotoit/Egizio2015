var chalk = require('chalk');
var request = require('request');
var _ = require('lodash');
var fs = require('fs');
var gm = require('gm');

var feed = 'https://api.instagram.com/v1/tags/egizio2015/media/recent?client_id=c415786ccfd04749a4da6eb51b7f1688&count=100';
var imgDir = '../feeds/instagram/';

console.log();
console.log(chalk.green('---------------------------'));
console.log(chalk.green('------ EGIZIO DUMPER ------'));
console.log(chalk.green('Loading INSTAGRAM feed...'));
console.log();
console.log(chalk.yellow('reading feed '+feed));
console.log();

request(feed, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var data = JSON.parse(body);
    var arr = data.data;
    var arrFeeds = [];

    console.log();
    console.log('Nice!');
    console.info(arr.length + ' images found');

    console.log();
    console.log('Now downloading images from Instagram...');

    var count = 0;
    _.forEach(arr, function(c){
      var img = c.images.standard_resolution;
      var ext = img.url.split('.');
      ext = ext[ext.length-1];

      var destImage = imgDir + c.id+'.'+ext;

      var jsonElem = {
        image: c.id+'.'+ext,
        user: c.user.username,
        link: c.link
      }
      arrFeeds.push(jsonElem);
      // var destCropImage = 'images/_' + c.id+'.'+ext;

      download(img.url, destImage, function(){
        count++;

        gm(destImage)
          .resize(480, 480)
          .write(destImage, function (err) {
            if (err){
              console.log(err);
            }
          });
        console.log(count + ' of ' + arr.length + ' done!');

        if(count === arr.length){
          console.log();
          console.log(chalk.green('All images downloaded! ;)'));
        }
      });
    })

    var result = JSON.stringify(arrFeeds, null, 4);
    fs.writeFileSync('../feeds/instagram/insta.json',result);
  }
})

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};
