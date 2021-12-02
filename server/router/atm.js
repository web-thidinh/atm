const router = require('express').Router();
const { Authenticate } = require('../middleWares/auth');
const {createAtm, deleteAtm, getAtms, addPeople,getQueue,getProcessed} = require('../controller/atm')

router.post('/create',Authenticate, createAtm); 
router.delete('/delete/:id',Authenticate, deleteAtm);
router.post('/createTransaction',Authenticate, addPeople);

router.get('/listItem',Authenticate, getAtms);
router.get('/queue',Authenticate,getQueue)
router.get('/transaction',Authenticate,getProcessed)

module.exports = router;