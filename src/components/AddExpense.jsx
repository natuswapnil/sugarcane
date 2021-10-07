
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Navigation, Footer } from ".";
import SelectSearch from 'react-select-search';
import FuzzySearch from 'fuzzy-search';

function AddExpense() {
  const startDate = new Date();
  const { buisnessData, employeeListState } = useSelector((state) => state)
  const [expenseData, setExpenseData] = useState({
    transaction: 'You Paid', date: startDate,
    memberName: ''
  });
  const options = [];
  employeeListState.employeeList.forEach(element => {
    const person = JSON.parse(JSON.stringify(element))
    const option = {
      memberData: person,
      name: person.employeeName,
      value: person.employeeName
    }
    options.push(option);
  });
  options.push({ value: '', name: '', memberData: undefined });

  const filter = new FuzzySearch(options, ['name', 'value'], {
    caseSensitive: true,
  });
  const filterfun = () => {
    return (q) => filter.search(q).slice(0, 8);
  };

  const buttonList = [
    {
      title: 'Add',
      key: 'AddNewExpenseButton',
      className: 'btn btn-primary add-footer-button',
      onClick: () => {
        if (!expenseData.memberData) {
          alert("select Member Name");
        } else if (!expenseData.amount) {
          alert("Add Amount");
        } else {
          dispatch({ type: 'START_CALL_API' })
          dispatch({ type: 'ADD_EXPENSE_DATA', expenseData: expenseData });
        }
      }
    },
    {
      title: 'Cancel',
      key: 'CancelAddNewExpenseButton',
      className: 'btn btn-danger add-footer-button',
      onClick: () => {
        dispatch({ type: 'OPEN_BUISNESS_DETAILE_PAGE', buisnessData });
      }
    }
  ]


  const dispatch = useDispatch()

  const handleChange = (field, e, value) => {
    expenseData[field] = e.target.value;
    setExpenseData(JSON.parse(JSON.stringify(expenseData)))
  }

  


  const onMemberChange = (value, obj) => {
    expenseData.memberData = obj.memberData;
    expenseData.memberName = value;
  }
  return (
    <div>
      <Navigation header="Add New Expense"></Navigation>
      <div className="page-body fixed-body">
        <form className="form-inline">
          <div className="form-group">
            <label for="member-name">Member Name:</label>
            <SelectSearch options={options} search value={expenseData.memberName} name="language" placeholder="Choose Member Name"
              filterOptions={filterfun} closeOnSelect={true} onChange={onMemberChange} />
          </div>
          <div className="form-group">
            <label for="expense-amount">Amount:</label>
            <input type="number" className="form-control" id="amount" placeholder="Enter Amount" name="amount" onChange={handleChange.bind(this, "amount")} value={expenseData["amount"]}></input>
          </div>
          <div className="form-group">
            <label for="date">Date:</label>
            <DatePicker className="form-control" id="date" name="date" selected={startDate} onChange={(date, event) => handleChange('date', event, date)} />
          </div>
          <div className="form-group">
            <br></br>
            <label>
              <input
                type="radio"
                value="You Paid"
                checked={expenseData.transaction == "You Paid"}
                onChange={handleChange.bind(this, "transaction")}
              />
            You Paid
          </label>
            <br></br>
            <label>
              <input
                type="radio"
                value="You Taken"
                checked={expenseData.transaction == "You Taken"}
                onChange={handleChange.bind(this, "transaction")}
              />
            You Taken
          </label>
            <br></br>
          </div>
          <div className="form-group">
            <label for="description">Description:</label>
            <input type="text" className="form-control" id="description" placeholder="Enter Description" name="description" onChange={handleChange.bind(this, "description")} value={expenseData["description"]}></input>
          </div>

        </form>


      </div>
      <Footer buttonList={buttonList}></Footer>
    </div>
  );
}

export default AddExpense;