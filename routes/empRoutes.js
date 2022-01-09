const {
  createEmp,
  getEmpList,
  getSingleEmp,
} = require('../controllers/empController');

const router = require('express').Router();

router.post('/add-emp', createEmp);
router.get('/get-emp', getEmpList);
router.get('/emp/:id', getSingleEmp);

module.exports = router;
