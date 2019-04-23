/*
Database(s)
ipd-forms: irl event registrations
*/
const Enmap = require(`enmap`)
const formsDB = new Enmap({
    name: 'ipd-forms',
});

module.exports = {
    init: async function(){
        await formsDB.defer;
        return;
    },
    forms: {
        set: async function(key, value){
            await formsDB.set(key, value);
        },
        get: async function(key){
            return await formsDB.get(key);
        }
    }
}
