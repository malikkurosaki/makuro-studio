const fs = require('fs');
const path = require('path');

const dir = fs.readdirSync(path.join(__dirname, "../assets/images"));

let listImage = [];
for(let item in dir){
    // basename
    let name = path.basename(dir[item]);
    listImage.push(name.split(".")[0]);
}



