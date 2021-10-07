import { getBuisness, getBuisnessPageData } from './buisness/buisness-services'
import { push } from "connected-react-router";
const dataService = store => next => action => {
    /*
    Pass all actions through by default
    */
    next(action)
    switch (action.type) {
        case 'GET_BUISNESS_LIST_DATA':
            return getBuisnessPageData({}).then((data) => {
                return next({
                    type: 'GET_BUISNESS_LIST_DATA_SUCCESS',
                    data
                });
            }).catch((error) => {
                return next({
                    type: 'GET_BUISNESS_LIST_DATA_ERROR',
                    error
                });
            });
        case 'ADD_BUISNESS_DATA':

            const buisnessData = action.buisnessData;
            return getBuisness({}).then((data) => {
                return next({
                    type: 'ADD_BUISNESS_DATA_SUCCESS',
                    buisnessData
                });
            }).catch((error) => {
                return next({
                    type: 'ADD_BUISNESS_DATA_ERROR',
                    error
                });
            });

        case 'ADD_FARMER_DATA':

            const farmerData = action.farmerData;
            return getBuisness({}).then((data) => {
                return next({
                    type: 'ADD_FARMER_DATA_SUCCESS',
                    farmerData
                });
            }).catch((error) => {
                return next({
                    type: 'ADD_FARMER_DATA_ERROR',
                    error
                });
            });


        case 'ADD_EMPLOYEE_DATA':
            const employeeData = action.employeeData;
            return getBuisness({}).then((data) => {
                return next({
                    type: 'ADD_EMPLOYEE_DATA_SUCCESS',
                    employeeData
                });
            }).catch((error) => {
                return next({
                    type: 'ADD_EMPLOYEE_DATA_ERROR',
                    error
                });
            });
        case 'ADD_EXPENSE_DATA':
            const expenseData = action.expenseData;
            return getBuisness({}).then((data) => {
                return next({
                    type: 'ADD_EXPENSE_DATA_SUCCESS',
                    expenseData
                });
            }).catch((error) => {
                return next({
                    type: 'ADD_EXPENSE_DATA_ERROR',
                    error
                });
            });

        default:
            break
    }
}

export default dataService