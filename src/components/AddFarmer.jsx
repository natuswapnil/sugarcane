
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState} from "react";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Navigation, Footer } from ".";

function AddFarmer() {
  const buttonList = [
    {
      title: 'Add',
      key: 'AddNewFarmerButton',
      className: 'btn btn-primary add-footer-button',
      onClick: () => {
        if (!farmerData.farmerName) {
          alert("Add Farmer Name");
        } else  if (!farmerData.contactNumber) {
          alert("Add contact Number");
        } else {
          dispatch({ type: 'START_CALL_API' })
          dispatch({ type: 'ADD_FARMER_DATA', farmerData: farmerData });
        }
      }
    },
    {
      title: 'Cancel',
      key: 'CancelAddNewFarmerButton',
      className: 'btn btn-danger add-footer-button',
      onClick: () => {
        dispatch({ type: 'OPEN_BUISNESS_DETAILE_PAGE', buisnessData });
      }
    }
  ]
  const { buisnessData } = useSelector((state) => state)
  const [farmerData, setFarmerData] = useState({
  });
  const dispatch = useDispatch()

  const handleChange = (field, e, value) => {
    farmerData[field] = e.target.value;
    setFarmerData(JSON.parse(JSON.stringify(setFarmerData)));
  }
  return (
    <div>
      <Navigation header="Add New Farmer"></Navigation>
      <div className="page-body fixed-body">
        <form className="form-inline">
          <div className="form-group">
            <label for="farmer-name">Farmer Name:</label>
            <input type="text" className="form-control" id="farmer-name" placeholder="Enter Farmer Name" name="farmer-name" onChange={handleChange.bind(this, "farmerName")} value={farmerData["farmerName"]}></input>
          </div>
          <div className="form-group">
            <label for="contact-number">Contact Number:</label>
            <input type="number" className="form-control" id="contact-number" placeholder="Enter Contact Number" name="contact-number" onChange={handleChange.bind(this, "contactNumber")} value={farmerData["contactNumber"]}></input>
          </div>
        </form>
      </div>
      <Footer buttonList={buttonList}></Footer>
    </div>
  );
}

export default AddFarmer;