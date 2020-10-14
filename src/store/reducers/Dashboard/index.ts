import * as actions from '../../actions/Dashboard';

export interface InfosAssetsProps {
  assets: (string | undefined)[];
  start_date: string | undefined;
  end_date: string | undefined;
}

const InfosAssets: InfosAssetsProps = {
  assets: [],
  start_date: '',
  end_date: '',
};

export interface InitialStaetAsyncProps {
  data: any;
  loading: boolean;
  error: boolean;
}

const INITIAL_STATE_RESPONSE = {
  data: [],
  loading: true,
  error: false,
};

export const reducerDashboardAssets = (
  state = InfosAssets,
  action: actions.ActionDashboardDTO,
): InfosAssetsProps => {
  switch (action.type) {
    case 'DASHBOARD_ADD_ASSETS': {
      let findIndex;

      if (action.addAsset) {
        findIndex = state.assets.indexOf(action.addAsset);
      }

      if (findIndex && findIndex === -1) {
        return {
          ...state,
          assets: [...state.assets, action.addAsset],
        };
      }
      return state;
    }
    case 'REMOVE_DASHBOARD_ASSETS':
      return {
        ...state,
        assets: [
          ...state.assets.filter(infoAsset => infoAsset !== action.removeAsset),
        ],
      };
    case 'DASHBOARD_CHANGE_DATES':
      return {
        ...state,
        start_date: action.dates?.start_date,
        end_date: action.dates?.end_date,
      };
    default:
      return state;
  }
};

export const getDateDashboardAssets = (
  state = INITIAL_STATE_RESPONSE,
  action: actions.AsyncActionsPropsDTO,
): InitialStaetAsyncProps => {
  switch (action.type) {
    case 'GET_DASHBOARD_ASSETS':
      return { ...state, loading: true };
    case 'SUCCESS_GET_DASHBOARD_ASSETS':
      return { data: action.data, loading: false, error: false };
    case 'FAILURE_GET_DASHBOARD_ASSETS':
      return { ...state, error: true };
    default:
      return state;
  }
};
