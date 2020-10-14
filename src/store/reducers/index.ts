import { combineReducers } from 'redux';
import * as dashboard from './Dashboard';

export interface ReducersObjectDTO {
  reducerDashboardAssets: dashboard.InfosAssetsProps;
  getDateDashboardAssets: dashboard.InitialStaetAsyncProps;
}

export const reducersObject = {
  reducerDashboardAssets: dashboard.reducerDashboardAssets,
  getDateDashboardAssets: dashboard.getDateDashboardAssets,
};

const allReducers = combineReducers(reducersObject);

// // Para logar e tirar o cache de dados que fica na store
// const rootReducer = (state, action) => {
//   // when a logout action is dispatched it will reset redux state
//   if (action.type === 'USUARIO_DESCONECTADO') {
//     localStorage.removeItem('@ComparadorAtivos: token');
//     state = undefined;
//   }

//   return allReducers(state, action);
// };

export default allReducers;
