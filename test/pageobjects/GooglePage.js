//const Page = require('./page');

class GooglePage  {

    async open(){
        await console.log('open');
        await  browser.url("https://docs.google.com/spreadsheets/d/1wV_b5TnfUw-9s-KzqhTHluDfVMkb2lQTLNUfty0ufnw/edit#gid=0");
        await  browser.maximizeWindow();
    };


}


module.exports =  GooglePage;