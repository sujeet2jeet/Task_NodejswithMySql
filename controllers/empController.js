const db = require('../models');

const Employee = db.emp;

exports.createEmp = async (req, res) => {
  console.log(req.body);
  const { name, email, department, joiningDate } = req.body;
  try {
    const employee = await Employee.create({
      name,
      email,
      department,
      joiningDate,
    });
    res.status(200).json({
      success: true,
      message: 'Employee Added Successfully',
      data: employee.dataValues,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getEmpList = async (req, res) => {
  try {
    let employees = await Employee.findAll({});
    console.log(employees);
    res.status(200).json({
      success: true,
      message: 'All Employee Dispatched Successfully',
      data: employees,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.getSingleEmp = async (req, res) => {
  const id = req.params.id;
  try {
    let employees = await Employee.findOne({
      where: {
        id,
      },
    });
    console.log(employees);
    res.status(200).json({
      success: true,
      message: 'Details of Employee showed Successfully',
      data: employees,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
