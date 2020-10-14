import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { FaRegLightbulb } from 'react-icons/fa';
import { FiArrowLeftCircle } from 'react-icons/fi';

import AssetsTable from './AssetsTable';
import InputAssetDashboard from './InputAsset';

import * as reducers from '../../store/reducers';
import * as dashboardActions from '../../store/actions/Dashboard';

import {
  Container,
  AssetsArea,
  DashboardArea,
  DashBoard,
  CalcBasis,
  HeaderContainer,
} from './styles';
import ChartAssets from './ChartAssets';
import { useViewMode } from '../../hooks/viewMode';

type Props = reducers.ReducersObjectDTO & dashboardActions.ActionsPropsDTO;

const Dashboard: React.FC<Props> = ({
  reducerDashboardAssets,
  getDateDashboardAssets,
  actionDashboardChart,
  actionDashboardRemoveAssets,
}) => {
  const [clickCalcBasis, setClickCalcBasis] = useState(false);
  const [inputCalcBasisValue, setInputCalcBasisValue] = useState(1000);
  const {
    changeViewMode,
    fontColor,
    backgroundColor,
    divisionGridColor,
  } = useViewMode();
  const theme = { fontColor, backgroundColor, divisionGridColor };

  useEffect(() => {
    const startDate = reducerDashboardAssets.start_date;
    const endDate = reducerDashboardAssets.end_date;
    if (actionDashboardChart && startDate && endDate) {
      actionDashboardChart({
        assets: reducerDashboardAssets.assets,
        startDate,
        endDate,
        inputCalcBasisValue,
      });
    }
  }, [reducerDashboardAssets, inputCalcBasisValue]);

  const onClickCalcBasis = useCallback(() => {
    setClickCalcBasis(true);
  }, []);

  const onBlurCalcBasis = useCallback(e => {
    setClickCalcBasis(false);
    setInputCalcBasisValue(e?.target?.value);
  }, []);

  const switchViewMode = useCallback(() => {
    changeViewMode();
  }, []);

  return (
    <DashBoard>
      <HeaderContainer>
        <CalcBasis theme={theme}>
          {`BASE DE CÁLCULO: `}
          {clickCalcBasis ? (
            <input
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              type="number"
              id="dashboard__calc-basis--input"
              onBlur={onBlurCalcBasis}
            />
          ) : (
            <span onClick={onClickCalcBasis}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(inputCalcBasisValue)}
            </span>
          )}
        </CalcBasis>

        <FaRegLightbulb
          size={30}
          color={theme.divisionGridColor}
          onClick={switchViewMode}
        />
        <Link to="/">
          <FiArrowLeftCircle size={30} color={theme.divisionGridColor} />
        </Link>
      </HeaderContainer>
      <Container>
        <DashboardArea>
          {/* Left Area (Table and Inputs) */}
          <AssetsArea theme={theme}>
            <InputAssetDashboard theme={theme} />

            <AssetsTable
              infoAssets={reducerDashboardAssets}
              removeAsset={actionDashboardRemoveAssets}
              theme={theme}
            />
          </AssetsArea>
        </DashboardArea>

        <DashboardArea>
          {/* Right Area (Chart.js and calculation basis) */}
          <ChartAssets data={getDateDashboardAssets} theme={theme} />
        </DashboardArea>
      </Container>
    </DashBoard>
  );
};

const mapStateToProps = (
  state: typeof reducers.reducersObject,
): typeof reducers.reducersObject => ({
  reducerDashboardAssets: state.reducerDashboardAssets,
  getDateDashboardAssets: state.getDateDashboardAssets,
});

const mapDispatchToProps = (
  dispatch: Dispatch,
): dashboardActions.ActionsPropsDTO => ({
  actionDashboardChart: ({
    assets,
    startDate,
    endDate,
    inputCalcBasisValue,
  }: dashboardActions.DashboardChartProps) =>
    dispatch(
      dashboardActions.actionDashboardChart({
        assets,
        startDate,
        endDate,
        inputCalcBasisValue,
      }),
    ),
  actionDashboardRemoveAssets: (asset: string) =>
    dispatch(dashboardActions.actionDashboardRemoveAssets(asset)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard as any);
