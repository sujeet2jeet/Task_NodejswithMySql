const validator = require('validator');
module.exports = (connection, DataTypes) => {
  const Employee = connection.define(
    'Employee',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          validateName(value) {
            if (!value) throw new Error('Name cannot be Blank!');
            else if (Number.isInteger(value))
              throw new Error('Name cannot be Number!');
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          validateEmail(value) {
            if (!validator.isEmail(value))
              throw new Error('Please enter the valid email address!');
          },
        },
      },
      department: {
        type: DataTypes.STRING,
        validate: {
          validateName(value) {
            if (!value) throw new Error('Name cannot be Blank!');
            else if (Number.isInteger(value))
              throw new Error('Name cannot be Number!');
          },
          isIn: {
            args: [
              ['HR', 'Development', 'Trainee', 'QA', 'Admin', 'Manager', 'CEO'],
            ],
            msg: ['Please select the departments as following...'],
          },
        },
      },
      joiningDate: {
        type: DataTypes.DATEONLY,
        validate: {
          checkDate(date) {
            console.log(validator.isDate(date));
            if (!validator.isDate(date))
              throw new Error('Date cannot be Blank!');
          },
        },
      },
    },
    {
      timestamps: false, // by this we are avoided byDefault coloumn like createdAt and updatedAt
    }
  );

  return Employee;
};
