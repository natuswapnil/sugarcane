import React, { useEffect } from "react";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Navigation, Footer } from ".";

function BuisnessDetailPage(props) {
  const state = useSelector((state) => state)
  const buisnessData = state.buisnessData;
  let buttonList = [];
  const dispatch = useDispatch()
  buttonList = [
    {
      title: 'Show Buisness List',
      key: 'BackButton',
      className: 'btn btn-primary back-buisness-button',
      onClick: () => {
        dispatch({ type: 'OPEN_BUISNESS_LIST_PAGE' });
      }
    }
  ]
  function openPage(page){
    dispatch({ type: page });
  }
  return (

    <div className="buisness-list">
      <Navigation header={buisnessData.buisnessName}></Navigation>
      <div className="page-body fixed-body">
        <div className="row">
            <div className="col-12">
              <button type="button" className="btn btn-link btn-lg btn-block footer-list-button" onClick={() => {
              }}>View Employee</button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button type="button" className="btn btn-link btn-lg btn-block footer-list-button" onClick={() => {
              }}>View Dashboard</button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button type="button" className="btn btn-link btn-lg btn-block footer-list-button" onClick={() => {
              openPage('OPEN_ADD_NEW_EMPLOYEE_PAGE');}}>Add Employee</button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button type="button" className="btn btn-link btn-lg btn-block footer-list-button" onClick={() => {
              openPage('OPEN_ADD_NEW_FARMER_PAGE');}}>Add Farmer</button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button type="button" className="btn btn-link btn-lg btn-block footer-list-button" onClick={() => {
              openPage('OPEN_ADD_EXPENSE_PAGE');}}>Add Expense</button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button type="button" className="btn btn-link btn-lg btn-block footer-list-button" onClick={() => {
              openPage('OPEN_ADD_TRIP_PAGE');}}>Add Trip</button>
            </div>
          </div>
      </div>
      <Footer buttonList={buttonList}></Footer>
    </div>
  );
}
export default BuisnessDetailPage;