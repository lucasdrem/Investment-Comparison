import React from 'react';

import { Line } from 'react-chartjs-2';
import { ChartArea } from './styles';

import * as reducersDashboard from '../../../store/reducers/Dashboard';
import * as stylesDashboard from '../styles';

import { dataDashboardChart } from '../../../utils/Dashboard/funcoesAuxilio';

import useWindowSize from '../../../hooks/windowSize';

interface AssetsTable {
  data: reducersDashboard.InitialStaetAsyncProps;
  theme: stylesDashboard.ViewModeVariablesDTO;
}

const ChartAssets: React.FC<AssetsTable> = ({ data, theme }) => {
  const { width } = useWindowSize();

  return (
    <ChartArea>
      <Line
        data={dataDashboardChart(data.data)}
        height={200}
        options={{
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              padding: width < 1250 ? 15 : 35,
              fontSize: width < 1250 ? 15 : 20,
              fontColor: theme.fontColor,
              usePointStyle: true,
            },
          },
          yAlign: 'bottom',
          xAlign: 'center',
          responsive: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 30,
              bottom: 0,
            },
          },
          scales: {
            xAxes: [
              {
                display: true,
                type: 'time',
                distribution: 'series',
                ticks: {
                  fontFamily: 'Jost',
                  fontColor: theme.fontColor,
                  padding: 10,
                  fontSize: width < 1250 ? 15 : 20,
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  display: true,
                  fontFamily: 'Jost',
                  padding: 10,
                  fontSize: width < 1250 ? 15 : 20,
                  fontColor: theme.fontColor,
                  callback(value: number) {
                    return `R$ ${value}`;
                  },
                },
                display: true,
                gridLines: {
                  drawBorder: false,
                  display: false,
                },
              },
            ],
          },
          tooltips: {
            enabled: true,
            mode: 'index',
            intersect: false,
            position: 'nearest',
          },
          hover: {
            mode: 'index',
            intersect: false,
          },
          plugins: {
            datalabels: {
              display: false,
            },
          },
        }}
      />
    </ChartArea>
  );
};

export default ChartAssets;
