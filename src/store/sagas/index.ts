import { takeLatest } from 'redux-saga/effects';

import * as dashboard from '../actions/Dashboard';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function* root() {
  yield takeLatest('GET_DASHBOARD_ASSETS', dashboard.asyncDashboardChart);
}
