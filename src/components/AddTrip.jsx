
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Navigation, Footer } from ".";
import FuzzySearch from 'fuzzy-search';
import SelectSearch from 'react-select-search'
import { getDriverList} from './../services/employee/employee-service'

function AddTrip() {
  const dispatch = useDispatch()
  const { buisnessData, factoryList, villageList, farmerList, employeeListState } = useSelector((state) => state);
  const filterfun = (list) => {
    const filter = new FuzzySearch(list, ['name', 'value'], {
      caseSensitive: false,
    });
    return (q) => filter.search(q).slice(0, 4);
  };
  const farmerListCopy = farmerList.map((farmerObj) => {
    return {
      name: farmerObj.farmerName,
      value: farmerObj.farmerName,
      data: farmerObj
    }
  })
  const [tripData, setTripData] = useState({ vehicalNumber: buisnessData.vehicalNumber, travelTo: buisnessData.factoryName });
  const onFactoryChange = (value, obj) => {
    tripData.travelToData = obj;
    tripData.travelTo = value;
    setTripData(JSON.parse(JSON.stringify(tripData)));
  }
  const onFarmerChange = (value, obj) => {
    tripData.farmerObj = obj.data;
    tripData.farmerName = value;
    setTripData(JSON.parse(JSON.stringify(tripData)));
  }
  const onVillageChange = (value, obj) => {
    tripData.travelFromData = obj;
    tripData.travelFrom = value;
    setTripData(JSON.parse(JSON.stringify(tripData)));
  }
  const buttonList = [
    {
      title: 'Add',
      key: 'AddNewTripButton',
      className: 'btn btn-primary add-footer-button',
      onClick: () => {
        if (!tripData.employeeName) {
          alert("Add Trip Name");
        } else {
          dispatch({ type: 'START_CALL_API' })
          dispatch({ type: 'ADD_TRIP_DATA', tripData: tripData });
        }
      }
    },
    {
      title: 'Cancel',
      key: 'CancelAddNewTripButton',
      className: 'btn btn-danger add-footer-button',
      onClick: () => {
        dispatch({ type: 'OPEN_BUISNESS_DETAILE_PAGE', buisnessData });
      }
    }
  ]
  const handleChange = (field, e, value) => {
    tripData[field] = field !== 'date' ? e.target.value : value;
    if ((field === 'grossWeight' || field === 'emptyWeight') && (tripData['grossWeight'] && tripData['emptyWeight'])) {
      tripData['nettWeight'] = tripData['grossWeight'] - tripData['emptyWeight'];
    }
    if (!tripData['grossWeight'] || !tripData['emptyWeight']) {
      tripData['nettWeight'] = 0;
    }
    setTripData(JSON.parse(JSON.stringify(tripData)));
  }

  

  return (
    <div>
      <Navigation header="Add New Trip"></Navigation>
      <div className="page-body fixed-body">
        <form className="form-inline">
          <div className="form-group">
            <label for="farmer-name">Farmer Name:</label>
            <SelectSearch options={farmerListCopy} search value={tripData.farmerName} name="factory-name" placeholder="Choose Farmer Name"
              filterOptions={filterfun} closeOnSelect={true} onChange={onFarmerChange} />
          </div>
          <div className="form-group">
            <label for="farm-detail">Farm Detail:</label>
            <input type="number" className="form-control" id="farm-detail" placeholder="Enter Farm Detail" name="farm-detail" onChange={handleChange.bind(this, "farmDeatil")} value={tripData["farmDeatil"]}></input>
          </div>
          <div className="form-group">
            <label for="Gross Weight">Gross Weight:</label>
            <input type="number" className="form-control" id="Gross Weight" placeholder="Enter Gross Weight" name="Gross Weight" onChange={handleChange.bind(this, "grossWeight")} value={tripData["grossWeight"]}></input>
          </div>
          <div className="form-group">
            <label for="Empty Weight">Empty Weight:</label>
            <input type="number" className="form-control" id="Empty Weight" placeholder="Enter Empty Weight" name="Empty Weight" onChange={handleChange.bind(this, "emptyWeight")} value={tripData["emptyWeight"]}></input>
          </div>
          <div className="form-group">
            <label for="Nett Weight">Nett Weight:</label>
            <input type="number" className="form-control" id="Nett Weight" placeholder="Enter Nett Weight" name="Nett Weight" value={tripData["nettWeight"]} disabled></input>
          </div>
          <div className="form-group">
            <label for="travelFrom">Travel From:</label>
            <SelectSearch options={villageList} search value={tripData.travelFrom} name="factory-name" placeholder="Choose Village"
              filterOptions={filterfun} closeOnSelect={true} onChange={onVillageChange} />
          </div>
          <div className="form-group">
            <label for="travelTo">Travel To:</label>
            <SelectSearch options={factoryList} search value={tripData.travelTo} name="factory-name" placeholder="Choose Factory"
              filterOptions={filterfun} closeOnSelect={true} onChange={onFactoryChange} />
          </div>
          <div className="form-group">
            <label for="travelTo">Driver Name:</label>
            <SelectSearch options={factoryList} search value={tripData.travelTo} name="factory-name" placeholder="Choose Driver Name"
              filterOptions={filterfun} closeOnSelect={true} onChange={onFactoryChange} />
          </div>
          <div className="form-group">
            <label for="travelTo">Toli Name:</label>
            <SelectSearch options={factoryList} search value={tripData.travelTo} name="factory-name" placeholder="Choose Toli Name"
              filterOptions={filterfun} closeOnSelect={true} onChange={onFactoryChange} />
          </div>
          <div className="form-group">
            <label for="vehical-number">Vehical Number:</label>
            <input type="text" className="form-control" id="vehical-number" placeholder="Enter Vehical Number" name="vehical-number" onChange={handleChange.bind(this, "vehicalNumber")} value={tripData["vehicalNumber"]}></input>
          </div>
        </form>
      </div>
      <Footer buttonList={buttonList}></Footer>
    </div>
  );
}

export default AddTrip;