
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Navigation, Footer } from ".";

function AddEmployee() {
  const buttonList = [
    {
      title: 'Add',
      key: 'AddNewEmployeeButton',
      className: 'btn btn-primary add-footer-button',
      onClick: () => {
        if (!employeeData.employeeName) {
          alert("Add Employee Name");
        } else {
          dispatch({ type: 'START_CALL_API' })
          dispatch({ type: 'ADD_EMPLOYEE_DATA', employeeData: employeeData });
        }
      }
    },
    {
      title: 'Cancel',
      key: 'CancelAddNewEmployeeButton',
      className: 'btn btn-danger add-footer-button',
      onClick: () => {
        dispatch({ type: 'OPEN_BUISNESS_DETAILE_PAGE', buisnessData });
      }
    }
  ]
  const { buisnessData } = useSelector((state) => state)
  const startDate = new Date();
  const [employeeData, setEmployeeData] = useState({
    date: startDate
  });
  const dispatch = useDispatch()

  const handleChange = (field, e, value) => {
    employeeData[field] = field !== 'date' ? e.target.value : value;
    setEmployeeData(JSON.parse(JSON.stringify(employeeData)))
  }
  return (
    <div>
      <Navigation header="Add New Employee"></Navigation>
      <div className="page-body fixed-body">
        <form className="form-inline">
          <div className="form-group">
            <label for="employee-name">Employee Name:</label>
            <input type="text" className="form-control" id="employee-name" placeholder="Enter Employee Name" name="employee-name" onChange={handleChange.bind(this, "employeeName")} value={employeeData["employeeName"]}></input>
          </div>
          <div className="form-group">
            <label for="contact-number">Contact Number:</label>
            <input type="number" className="form-control" id="contact-number" placeholder="Enter Contact Number" name="contact-number" onChange={handleChange.bind(this, "contactNumber")} value={employeeData["contactNumber"]}></input>
          </div>
          <div className="form-group">
            <label for="advance">Advance:</label>
            <input type="number" className="form-control" id="advance" placeholder="Enter Advance" name="advance" onChange={handleChange.bind(this, "advance")} value={employeeData["vehicalNumber"]}></input>
          </div>

          <div className="form-group">
            <label for="gender">Gender:</label>
            <select onChange={handleChange.bind(this, "gender")} value={employeeData["gender"]} className="form-control" id="gender" name="gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label for="role">Role:</label>
            <select onChange={handleChange.bind(this, "role")} value={employeeData["role"]} className="form-control" id="role" name="role">
              <option value="Driver">Driver</option>
              <option value="Koyata">Koyata</option>
              <option value="Mukadam">Mukadam</option>
            </select>
          </div>
          <div className="form-group">
            <label for="salaryType">Salary Type:</label>
            <select onChange={handleChange.bind(this, "salaryType")} value={employeeData["salaryType"]} className="form-control" id="salaryType" name="salaryType">
              <option value="Monthly">Monthly</option>
              <option value="Per Unit">Per Unit</option>
              <option value="Percentage On Total Buissness">PercentageOnTotalBuissness</option>
            </select>
          </div>
          <div className="form-group">
            <label for="salary">Salary:</label>
            <input type="number" className="form-control" id="salary" placeholder="Enter Salary" name="salary" onChange={handleChange.bind(this, "salary")} value={employeeData["salary"]}></input>
          </div>
          <div className="form-group">
            <label for="bonus(batta)">Bonus (Batta):</label>
            <input type="number" className="form-control" id="bonus(batta)" placeholder="Enter Salary" name="bonus(batta)" onChange={handleChange.bind(this, "bonus(batta)")} value={employeeData["bonus(batta)"]}></input>
          </div>
          <div className="form-group">
            <label for="address">Address:</label>
            <input type="number" className="form-control" id="address" placeholder="Enter Address " name="address" onChange={handleChange.bind(this, "vehicalperTonnePrice")} value={employeeData["vehicalperTonnePrice"]}></input>
          </div>
        </form>
      </div>
      <Footer buttonList={buttonList}></Footer>
    </div>
  );
}

export default AddEmployee;