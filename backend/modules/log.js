const fs = require('fs');
const log = fs.createWriteStream(`${__dirname}/../logs/${Date.now()}.log`, {flags : `w`});
module.exports = {
    debug: function(string){
        const out = `DEBUG: ${string}\n`;
        console.log(out);
        log.write(out);
    },
    info: function(string){
        const out = `INFO: ${string}\n`;
        console.log(out); 
        log.write(out);
    },
    warning: function(string){
        const out = `WARNING: ${string}`;
        console.log(out);
        log.write(out);
    },
    error: function(string){
        const out = `ERROR: ${string}\n`;
        console.log(out);
        log.write(out);
    }
}