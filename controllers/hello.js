const uniqid = require('uniqid');
const { response } = require('../routes/helloRoute');


const getLanguageMessage=(queryParams)=>{
    const { language } = queryParams;
    let response = {
        'English' : { message:'Hello World', id:uniqid('English-') },
        'French'  : { message:'Bonjour lemonde', id:uniqid('French-')},
        'Hindi'   : { message:'Namastey sansar', id:uniqid('Hindi-')},
        'error'   : { message:'Language must be Englisg/Hindi/Marathi', id:uniqid('Error-')}
    };
    result = response[language] === undefined ?  response['error']: response[language];
    console.log('result',result);
    return result;
}
module.exports={
    getLanguageMessage
}
