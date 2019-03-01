const Router = require('koa-router');
const router = new Router();
const {CompanyController,JobController,ApplicationController} = require('../controllers');
// defina as suas rotas

router.post('/companies', CompanyController.create)
router.get('/companies', CompanyController.find)
router.get('/companies/:id', CompanyController.findOne)
router.delete('/companies/:id', CompanyController.destroy)
router.put('/companies/:id', CompanyController.update)

//Routes Job

router.post('/Jobs',JobController.create)
router.get('/Jobs', JobController.find)

// Routes Application
router.post('/applications',ApplicationController.create)



module.exports = router;