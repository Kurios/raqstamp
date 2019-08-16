//RacStamp.js
var Jimp = require("jimp");
var fs = require('fs');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

//Input a picture
//Attach a raccoon to the picture

//????
//Profit and save the picture to the filesystem

var arg = "test.png";
if(process.argv.length > 2){
    arg =process.argv[2];
}

Jimp.read(arg).then(image=>{
    files = fs.readdirSync("raqs/");
    file = files[getRandomInt(files.length)]
    Jimp.read("raqs/" + file).then(raq=>{
        scale = (image.getHeight() / raq.getHeight())
        raq.scale(scale);
        image.composite(raq,0,0);
        image.write('raq.png');
    })
}).catch(err => {
    console.error(err);
});

