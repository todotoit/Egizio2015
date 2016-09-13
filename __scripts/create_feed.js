var chalk = require('chalk');
var async = require('async');
var request = require('request');
var _ = require('lodash');
var fs = require('fs');
var htmlparser = require('htmlparser');
var select = require('soupselect').select;

if (process.argv[2]) {
	var tappa = process.argv[2];
}
else{
	console.log(chalk.red("ERROR, invalid argument TAPPA"));
	return false;
}

var storifyFeed = 'https://api.storify.com/v1/stories/todotoit/'+tappa;
var instagramJsonDir = '../feeds/instagram/insta.json';
var instagramDir = '../feeds/instagram/selected/';
var instagramDestination = '../la_spedizione_di_egizio_2015/partials/'+tappa+'/feeds/instagram/'
var instagramMobileDestination = '../mobile/la_spedizione_di_egizio_2015/feeds/'+tappa+'/instagram/'
var instagramClass = 'item w2 h2';
var selfiesDir = '../feeds/selfies/selected/';
var selfiesDestination = '../la_spedizione_di_egizio_2015/partials/'+tappa+'/feeds/selfies/'
var selfiesClass = 'item';
var json = '../la_spedizione_di_egizio_2015/partials/'+tappa+'/feeds/feeds.json';
var mobileJson = '../mobile/la_spedizione_di_egizio_2015/feeds/'+tappa+'/feeds.json';

var arrFeeds = [];
var mobileArrFeeds = [];

console.log();
console.log('Lets start!');
console.log(chalk.green('---------------------'));
console.log(chalk.green('Images from instagram'));
console.log(chalk.green('---------------------'));
console.log();
createInstaJson(instagramClass,instagramDir,instagramJsonDir,instagramDestination,false);
createInstaJson(instagramClass,instagramDir,instagramJsonDir,instagramMobileDestination,true);

console.log();
console.log(chalk.green('-------'));
console.log(chalk.green('Selfies'));
console.log(chalk.green('-------'));
console.log();
createSelfiesJson(selfiesClass,selfiesDir,selfiesDestination);

console.log();
console.log(chalk.green('-----------------------'));
console.log(chalk.green('---- EGIZIO DUMPER ----'));
console.log(chalk.green('Loading STORIFY feed...'));
console.log();
console.log(chalk.yellow('reading feed '+storifyFeed));
console.log();

request(storifyFeed, function (error, response, body) {
	if (!error && response.statusCode == 200) {
		var data = JSON.parse(body);
		data = data.content;
		var arr = data.elements;
		console.log(chalk.yellow(' _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _'));
		console.log(chalk.yellow('* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *'));
		console.log(chalk.yellow("perchè la storia l'è bela, fà piasì cuntela, vostu che t'la cuntu?"));
		console.log(chalk.yellow('*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*'));
		async.each(arr, function(elem, callback){
			request(elem.permalink, function (error, response, body) {
				if (!error && response.statusCode === 200) {
					var handler = new htmlparser.DefaultHandler(function (error, dom) {
						if (!error){
							var tweets = select(dom, 'p.tweet-text');

							var description = getDescription(tweets[0]);

							var jsonElem = {
								media: false,
								class: "item w2",
								thumbnail_url: elem.attribution.thumbnail,
								url: elem.permalink,
								author_url: elem.attribution.href,
								author_name: elem.attribution.name,
								username: elem.attribution.username,
								posted_at: elem.posted_at,
								description: description,
								id: elem.permalink.replace("http://twitter.com/"+ elem.source.username +"/status/","")
							};
							arrFeeds.push(jsonElem);
							callback();
						}
					});
					var parser = new htmlparser.Parser(handler);
					parser.parseComplete(body);
				}
			});			
		}, function(err){
			console.log();
			console.log('randomize :O');
			arrFeeds = shuffle(arrFeeds);
			var result = JSON.stringify(arrFeeds, null, 4);
			var mobileResult = JSON.stringify(mobileArrFeeds, null, 4);
			console.log();
			console.log('------------------');
			console.log(chalk.green('write json file :)'));
			fs.writeFileSync(json,result);
			fs.writeFileSync(mobileJson,mobileResult);
		});
	}
	else{
		console.log(chalk.red("ERROR occured trying to read feed"));
	}
})

/************************************************
// Fisher-Yates shuffle algorithm (aka Knuth). //
************************************************/
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex ;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

function getDescription(tweet){
	var description = '';
	tweet.children.forEach(function(child) {
		if(child.type === "text"){
			description += child.data;
		}
		else if(child.type === "tag" && child.hasOwnProperty("children")){
			var tag = '<'+child.name;

			if(child.attribs && child.attribs.hasOwnProperty("class")){
				if (child.attribs.class.indexOf('invisible') !== -1){
					tag +=' class="invisible"';
				}
			}

			if(child.name === "a"){
				if(child.attribs.hasOwnProperty("data-pre-embedded")){
					return '';
				}
				tag +=' href=\"';
				if (child.attribs.href.indexOf('http') === -1){
					tag += 'https://twitter.com';
				}
				tag += child.attribs.href+'\"';
				tag += ' target=\"_new\"';
			}
			tag +='>';
			tag += getDescription(child);
			tag += '</'+child.name+'>';
			description += tag;
		}
		else{
			return '';
		}
	})
	return description;
}

function createSelfiesJson(imgClass,dir,destination){
	var arr = fs.readdirSync(dir);
	var i = arr.indexOf('.gitkeep');
	arr.splice(i,1);

	var count = 0;
	console.log();
	console.log('copy images to '+destination);
	if(arr.length > 0){
		console.log(arr.length + ' images found ;)');
		arr.forEach(function(img){
			var jsonElem = {
				media: true,
				class: imgClass,
				url: destination+img
			};
			arrFeeds.push(jsonElem);
			count++;
			fs.createReadStream(dir+img).pipe(fs.createWriteStream(destination+img));
			console.log(count + ' of ' + arr.length + ' done!');
		})
	}
	else{
		console.info(chalk.red('No images found :('));
	}
}

function createInstaJson(imgClass,dir,jsonDir,destination,mobile){

	var data = fs.readFileSync(jsonDir);

	var jsonData = JSON.parse(data);
	var arr = fs.readdirSync(dir);
	var i = arr.indexOf('.gitkeep');
	arr.splice(i,1);

	var count = 0;
	console.log();
	console.log('copy images to '+destination);
	if(arr.length > 0){
		console.log(arr.length + ' images found ;)');
		arr.forEach(function(img){

			var instaElem = _.find(jsonData, { 'image': img });
			
			var jsonElem = {
				media: true,
				class: imgClass,
				url: destination+img,
				user: instaElem.user,
				link: instaElem.link
			};
			if(mobile){
				jsonElem.url = jsonElem.url.replace("mobile/","");
				mobileArrFeeds.push(jsonElem);
			}
			else{
				arrFeeds.push(jsonElem);
			}
			count++;
			fs.createReadStream(dir+img).pipe(fs.createWriteStream(destination+img));
			console.log(count + ' of ' + arr.length + ' done!');
		})
	}
	else{
		console.info(chalk.red('No images found :('));
	}
}
