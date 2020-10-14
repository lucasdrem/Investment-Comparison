import { put, call } from 'redux-saga/effects';
import fetchChartDashboard from '../../../services/Dashboard/chartAssets';

const callTyped: any = call;

export interface DashboardDatesPropsDTO {
  start_date: string | undefined;
  end_date: string | undefined;
}

export interface ActionDashboardDTO {
  type: string;
  addAsset?: string;
  removeAsset?: string;
  dates?: DashboardDatesPropsDTO;
  assets?: (string | undefined)[];
  inputCalcBasisValue?: number;
  startDate?: string;
  endDate?: string;
}

export interface AsyncActionsPropsDTO {
  type: string;
  data: string[];
}

export interface DashboardChartProps {
  assets: (string | undefined)[];
  startDate: string | undefined;
  endDate: string | undefined;
  inputCalcBasisValue: number;
}

export interface ActionsPropsDTO {
  actionDashboardAddAssets?: (addAsset: string) => ActionDashboardDTO;
  actionDashboardChangeDates?: (
    dates: DashboardDatesPropsDTO,
  ) => ActionDashboardDTO;
  actionDashboardChart?: ({
    assets,
    startDate,
    endDate,
    inputCalcBasisValue,
  }: DashboardChartProps) => any;
  actionDashboardRemoveAssets?: (addAsset: string) => ActionDashboardDTO;
}

export const typeDashboardAddAssets = 'DASHBOARD_ADD_ASSETS';
export const typeDashboardChangeDates = 'DASHBOARD_CHANGE_DATES';
export const typeDashboardGetInfosAssets = 'GET_DASHBOARD_ASSETS';
export const typeDashboardRemoveAssets = 'REMOVE_DASHBOARD_ASSETS';

export const actionDashboardAddAssets = (
  addAsset: string,
): ActionDashboardDTO => {
  return {
    type: typeDashboardAddAssets,
    addAsset,
  };
};

export const actionDashboardRemoveAssets = (
  removeAsset: string,
): ActionDashboardDTO => {
  return {
    type: typeDashboardRemoveAssets,
    removeAsset,
  };
};

export const actionDashboardChangeDates = (
  dates: DashboardDatesPropsDTO,
): ActionDashboardDTO => {
  return {
    type: typeDashboardChangeDates,
    dates,
  };
};

export const actionDashboardChart = ({
  assets,
  startDate,
  endDate,
  inputCalcBasisValue,
}: DashboardChartProps): ActionDashboardDTO => {
  return {
    type: typeDashboardGetInfosAssets,
    startDate,
    endDate,
    assets,
    inputCalcBasisValue,
  };
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function* asyncDashboardChart(action: ActionDashboardDTO) {
  try {
    const response: ReturnType<typeof fetchChartDashboard> = yield callTyped(
      fetchChartDashboard,
      action.startDate,
      action.endDate,
      action.assets,
      action.inputCalcBasisValue,
    );
    yield put({
      type: 'SUCCESS_GET_DASHBOARD_ASSETS',
      data: response,
    });
  } catch (err) {
    yield put({ type: 'FAILURE_GET_DASHBOARD_ASSETS' });
  }
}
