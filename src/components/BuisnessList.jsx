import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Navigation, Footer } from ".";

function BuisnessList(props) {
  const state = useSelector((state) => state)
  const buisnessListState = state.buisnessListState;
  let buttonList = [];
  const dispatch = useDispatch()
  useEffect(() => {
    if (buisnessListState.isLoadGetBuisnessList && !state.isLoading) {
      dispatch({ type: 'START_CALL_API' })
      dispatch({ type: 'GET_BUISNESS_LIST_DATA' })
    }
  }, [dispatch]);
  if (!buisnessListState.isLoadGetBuisnessList) {
    buttonList = [
      {
        title: 'Add New Buisness',
        key: 'AddBuisnessButton',
        className: 'btn btn-primary add-footer-button',
        onClick: () => {
          dispatch({ type: 'OPEN_ADD_BUISNESS_DATA_PAGE' });
        }
      }
    ]
  }
  function  viewBuisness(buisnessData) {
    dispatch({ type: 'OPEN_BUISNESS_DETAILE_PAGE', buisnessData });
  }
  return buisnessListState.isLoadGetBuisnessList ? <div></div> : (

    <div className="buisness-list">
      <Navigation header="Buisness List"></Navigation>
      <div className="page-body fixed-body">
        {buisnessListState.buisnessList.map((buisness) => (
          <div className="row" key={buisness.buisnessName}>
            <div className="col-12">
              <button type="button" className="btn btn-link btn-lg btn-block footer-list-button" onClick={()=>{
                viewBuisness(buisness);
              }}>{buisness.buisnessName}</button>
            </div>
          </div>
        ))}
      </div>
      <Footer buttonList={buttonList}></Footer>
    </div>
  );
}
export default BuisnessList;