
const {resolve4} = require('dns');
let hostname = 'www.mum.edu';

console.log('=== callback ===');
let cb = resolve4(hostname,(err, addresses)=>{
    console.log(addresses + ">> from callback");
});

console.log('=== Promise ===');
const {promisify} = require('util');

const promise = promisify(resolve4);
    promise(hostname,(err, addresses)=>{}).then(message => console.log(message + ">> from Promise")).catch(err => console.error(err));


console.log('=== Async/Await ===');
//const {promisify} = require('util');
async function main() {
    try{
        const result = await resolve4(hostname,(error, addresses)=>{
            console.log(addresses + ">> from Async/Await");
        });
    }
    catch (e) {
        console.log(e);
    }

}
main();