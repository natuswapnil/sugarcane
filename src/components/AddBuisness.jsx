
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Navigation, Footer } from ".";
import FuzzySearch from 'fuzzy-search';
import SelectSearch from 'react-select-search';



function AddBuisness() {
  const { factoryList } = useSelector((state) => state);
  const startDate = new Date();
  const [buisnessData, setBuisnessData] = useState({
    date: startDate
  });
  
  const filterfun = (factoryList) => {
    const filter = new FuzzySearch(factoryList, ['name', 'value'], {
      caseSensitive: false,
      sort: true
    });
    return (q) =>  { return factoryList.filter((data)=>{
      return data.value.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    }); }
  };

  const buttonList = [
    {
      title: 'Add',
      key: 'AddNewBuisnessButton',
      className: 'btn btn-primary add-footer-button',
      onClick: () => {
        if (!buisnessData.buisnessName) {
          alert("Add Buisness Name");
        } else {
          dispatch({ type: 'START_CALL_API' })
          dispatch({ type: 'ADD_BUISNESS_DATA', buisnessData: buisnessData });
        }
      }
    },
    {
      title: 'Cancel',
      key: 'CancelAddNewBuisnessButton',
      className: 'btn btn-danger add-footer-button',
      onClick: () => {
        dispatch({ type: 'OPEN_BUISNESS_LIST_PAGE' });
      }
    }
  ]

  const dispatch = useDispatch()

  const handleChange = (field, e, value) => {
    buisnessData[field] = field !== 'date' ? e.target.value : value;
    setBuisnessData(JSON.parse(JSON.stringify(buisnessData)));
  }
  const onFactoryChange = (value, obj) => {
    buisnessData.factoryData = obj;
    buisnessData.factoryName = value;
    setBuisnessData(JSON.parse(JSON.stringify(buisnessData)));
  }
  return (
    <div>
      <Navigation header="Add New Buisness"></Navigation>
      <div className="page-body fixed-body">
        <form className="form-inline">
          <div className="form-group">
            <label for="buisness-name">Buisness Name:</label>
            <input type="text" className="form-control" id="buisness-name" placeholder="Enter Buisness Name" name="buisness-name" onChange={handleChange.bind(this, "buisnessName")} value={buisnessData["buisnessName"]}></input>
          </div>
          <div className="form-group">
            <label for="owner-name">Owner Name:</label>
            <input type="text" className="form-control" id="owner-name" placeholder="Enter Owner Name" name="owner-name" onChange={handleChange.bind(this, "ownerName")} value={buisnessData["ownerName"]}></input>
          </div>
          <div className="form-group">
            <label for="owner-contact-number">Owner Contact Number:</label>
            <input type="number" className="form-control" id="owner-contact-number" placeholder="Enter Contact Number" name="owner-contact-number" onChange={handleChange.bind(this, "contactNumber")} value={buisnessData["contactNumber"]}></input>
          </div>
          <div className="form-group">
            <label for="vehical-number">Vehical Number:</label>
            <input type="text" className="form-control" id="vehical-number" placeholder="Enter Vehical Number" name="vehical-number" onChange={handleChange.bind(this, "vehicalNumber")} value={buisnessData["vehicalNumber"]}></input>
          </div>

          <div className="form-group">
            <label for="sugar-factory-name">Sugar Factory Name:</label>
            <SelectSearch options={factoryList} search value={buisnessData.factoryName} name="factory-name" placeholder="Choose Factory"
              filterOptions={filterfun} closeOnSelect={true} onChange={onFactoryChange} />
          </div>
          <div className="form-group">
            <label for="date">Date:</label>
            <DatePicker className="form-control" id="date" name="date" selected={startDate} onChange={(date, event) => handleChange('date', event, date)} />
          </div>
          <div className="form-group">
            <label for="factory-advance">Factory Advance:</label>
            <input type="number" className="form-control" id="factory-advance" placeholder="Enter Factory Advance" name="factory-advance" onChange={handleChange.bind(this, "factoryAdvance")} value={buisnessData["factoryAdvance"]}></input>
          </div>
          <div className="form-group">
            <label for="vehical-per-tonne-price">Vehical Per Tonne Price:</label>
            <input type="number" className="form-control" id="vehical-per-tonne-price" placeholder="Enter Vehical Per Tonne Price " name="vehical-per-tonne-price" onChange={handleChange.bind(this, "vehicalperTonnePrice")} value={buisnessData["vehicalperTonnePrice"]}></input>
          </div>
          <div className="form-group">
            <label for="koyata-per-tonne-price">Koyata Per Tonne Price:</label>
            <input type="number" className="form-control" id="koyata-per-tonne-price" placeholder="Enter Contact Number" name="koyata-per-tonne-price" onChange={handleChange.bind(this, "koyataPerTonnePrice")} value={buisnessData["koyataPerTonnePrice"]}></input>
          </div>
        </form>
      </div>
      <Footer buttonList={buttonList}></Footer>
    </div>
  );
}

export default AddBuisness;