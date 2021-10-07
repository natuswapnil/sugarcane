import React, { useEffect } from "react";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BuisnessList, AddBuisness, BuisnessDetailPage, AddNewEmployeePage, AddNewExpensePage, AddNewTripPage, AddNewFarmerPage } from "../components";

function Home(props) {
  const currentPage = useSelector((state) => state.currentPage)
  let page = BuisnessList;

  switch (currentPage) {
    default:
    case 'BuisnessListPage':
      page = <BuisnessList></BuisnessList>;
      break;
    case 'AddBuisnessDataPage':
      page = <AddBuisness></AddBuisness>;
      break;
    case 'BuisnessDetailPage':
      page = <BuisnessDetailPage></BuisnessDetailPage>;
      break;
    case 'AddNewEmployeePage':
      page = <AddNewEmployeePage></AddNewEmployeePage>;
      break;
    case 'AddNewExpensePage':
      page = <AddNewExpensePage></AddNewExpensePage>;
      break;
    case 'AddNewTripPage':
      page = <AddNewTripPage></AddNewTripPage>;
      break;
    case 'AddNewFarmerPage':
      page = <AddNewFarmerPage></AddNewFarmerPage>;
      break;

  }
  return (
    <div className="container">
      { page}
    </div>
  );
}
export default Home;