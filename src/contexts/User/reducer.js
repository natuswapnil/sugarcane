export const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_BUISNESS_DETAILE_PAGE':
      return {
        ...state,
        buisnessData: action.buisnessData,
        currentPage: 'BuisnessDetailPage'
      }
    case 'OPEN_ADD_NEW_EMPLOYEE_PAGE':
      return {
        ...state,
        currentPage: 'AddNewEmployeePage'
      }
    case 'OPEN_ADD_NEW_FARMER_PAGE':
      return {
        ...state,
        currentPage: 'AddNewFarmerPage'
      }
    case 'OPEN_ADD_EXPENSE_PAGE':
      return {
        ...state,
        currentPage: 'AddNewExpensePage'
      }
    case 'OPEN_ADD_TRIP_PAGE':
      return {
        ...state,
        currentPage: 'AddNewTripPage'
      }
    case 'OPEN_BUISNESS_LIST_PAGE':
      return {
        ...state,
        currentPage: 'BuisnessListPage'
      }
    case 'OPEN_ADD_BUISNESS_DATA_PAGE':
      return {
        ...state,
        currentPage: 'AddBuisnessDataPage'
      }
    case 'GET_BUISNESS_LIST_DATA_SUCCESS':
      const buisnessList = action.data.buisnessList && action.data.buisnessList.length ? action.data.buisnessList : []
      state.buisnessListState.buisnessList = buisnessList;
      state.buisnessListState.isLoadGetBuisnessList = false;
      return {
        ...state,
        buisnessListState: state.buisnessListState,
        isLoading: state.isLoading - 1,
        factoryList: action.data.factoryList,
        villageList: action.data.villageList
      };
    case 'ADD_BUISNESS_DATA_SUCCESS':
      state.buisnessListState.buisnessList.push(action.buisnessData);
      return {
        ...state,
        currentPage: 'BuisnessListPage',
        isLoading: state.isLoading - 1
      };
    case 'ADD_FARMER_DATA_SUCCESS':
      const farmerList = state.farmerList;
      farmerList.push(action.farmerData);
      return {
        ...state,
        currentPage: 'BuisnessListPage',
        farmerList: farmerList,
        currentPage: 'BuisnessDetailPage',
        isLoading: state.isLoading - 1
      };
    case 'ADD_EMPLOYEE_DATA_SUCCESS':
      state.employeeListState.employeeList.push(action.employeeData);
      return {
        ...state,
        currentPage: 'BuisnessDetailPage',
        isLoading: state.isLoading - 1
      };
    case 'ADD_EXPENSE_DATA_SUCCESS':
      state.expenseList.push(action.employeeData);
      return {
        ...state,
        currentPage: 'BuisnessDetailPage',
        isLoading: state.isLoading - 1
      };
    case 'ADD_EXPENSE_DATA_ERROR':
    case 'ADD_EMPLOYEE_DATA_ERROR':
    case 'ADD_BUISNESS_DATA_ERROR':
    case 'GET_BUISNESS_LIST_DATA_ERROR':
      state.buisnessListState.isLoadGetBuisnessList = false;
      return {
        ...state,
        buisnessListState: state.buisnessListState,
        isLoading: state.isLoading - 1
      }
    case 'START_CALL_API':
      return {
        ...state,
        isLoading: state.isLoading + 1
      }

    default:
      return state
  }
}
const defaultBuissnessListPageState = {
  buisnessList: [],
  isLoadGetBuisnessList: true
}

const defaultEmployeeListPageState = {
  employeeList: [],
  isEmployeeListDataAdded: false,
  isLoadGetEmployeeList: true
}

function calculateWindowWidthInfo() {
  const widthInfo = {
    width: 350,
    margin: 5
  }
  const totalWidth = window.outerWidth;
  const maxWidth = 350;
  if (totalWidth > maxWidth) {
    widthInfo.width = maxWidth;
    widthInfo.margin = (totalWidth - maxWidth) / 2;
    if (widthInfo.margin < 5) {
      widthInfo.width = totalWidth - 10;
      widthInfo.margin = 5;
    }
  } else {
    widthInfo.width = totalWidth - 10;
    widthInfo.margin = 5;
  }
  return widthInfo;
}

export const initialState = {
  buisnessListState: defaultBuissnessListPageState,
  employeeListState: defaultEmployeeListPageState,
  currentPage: 'BuisnessListPage',
  expenseList: [],
  factoryList:[],
  farmerList: [],
  isLoading: 0,
  widthInfo: calculateWindowWidthInfo()

}