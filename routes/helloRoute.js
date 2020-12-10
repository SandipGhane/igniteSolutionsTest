const Router = require('express');
const router = Router();
const {getLanguageMessage} = require('../controllers/hello')


router.get('/hello',async (req,res)=>{
    try{
        const response = await getLanguageMessage(req.query);
        res.status(200).send(response);
    }catch(e){
        res.status(500).send(0,e.message,e);
    }
});

router.get('/',async (req,res)=>{
    res.status(200).send('index route');
})
module.exports = router;