const db = require(`./db.js`)
const log = require(`./log.js`)
module.exports = {
    handle: async function(data, res, path){
        if(await db.forms.get(data[`irl-member-email`])==undefined){
            await db.forms.set(data[`irl-member-email`], data);
            res.sendFile(path.join(__dirname, `../../public/pages/success.html`));
            log.info(`Form Submission Success\n`)
        }else{
            res.sendFile(path.join(__dirname, `../../public/pages/error.html`))
            log.info(`Form Submission Error\n`)
        }
    }
}