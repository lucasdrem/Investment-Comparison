import { transformDateBRToUSFormat } from '../Date';

// Object response Comdinheiro
interface TableModelComdinheiroDTO {
  linha: Array<{
    [key: string]: string;
  }>;
}

interface RespostaModelComdinheiroDTO {
  'tab-p1': TableModelComdinheiroDTO;
}

interface ResponseComdinheiroDTO {
  controle: object;
  variaveis: object;
  resposta: RespostaModelComdinheiroDTO;
}

// Dashboard Color Circle Table
export const randomColorTableGenerator = (index: number): string => {
  const arrayColors = [
    '#2A4875',
    '#757f68',
    '#649516',
    '#6ed881',
    '#78cbe4',
    '#A53535',
    '#A1C44D',
    '#2B530C',
    '#BF6102',
    '#7F1818',
    '#E27901',
    '#0E2454',
    '#FCDD5E',
    '#C3E068',
    '#BF6102',
    '#ADBDC9',
    '#6189AA',
    '#491255',
    '#176ca0',
  ];

  if (arrayColors[index]) {
    return arrayColors[index];
  }
  return arrayColors[Math.floor(arrayColors.length * Math.random())];
};

// Dashboard Chart
interface DashboardDataXYProps {
  x: Date;
  y: number;
}

interface DatasetsProps {
  label: string;
  fill: boolean;
  tension: number;
  backgroundColor: string;
  borderColor: string;
  data: DashboardDataXYProps[];
  radius: number;
}

interface DataResponseChartProps {
  labels: (string | undefined)[];
  datasets: DatasetsProps[];
}

export const dataDashboardChart = (
  data: ResponseComdinheiroDTO,
): DataResponseChartProps => {
  const dataResponseChart: DataResponseChartProps = {
    labels: [],
    datasets: [],
  };

  if (!Array.isArray(data) && data.resposta['tab-p1'].linha.length > 0) {
    const labelsReponse = data.resposta['tab-p1'].linha[0];
    Object.entries(labelsReponse).forEach(([key], i) => {
      if (key !== 'data') {
        dataResponseChart.datasets.push({
          label: key.toUpperCase(),
          fill: false,
          tension: 0,
          backgroundColor: randomColorTableGenerator(i - 1),
          borderColor: randomColorTableGenerator(i - 1),
          data: [],
          radius: 0,
        });
      }
    });

    data.resposta['tab-p1'].linha.forEach((asset, index, arrayResponse) => {
      if (index !== arrayResponse.length - 1) {
        Object.entries(labelsReponse).forEach(([key], responseDatasetIndex) => {
          if (key !== 'data') {
            const value = asset[key] ? asset[key].split(',').join('.') : '0';
            dataResponseChart.datasets[responseDatasetIndex - 1].data.push({
              x: new Date(transformDateBRToUSFormat(asset.data)),
              y: parseFloat(value),
            });
          }
        });
      }
    });
  }

  return dataResponseChart;
};

// Changing ticker data for HistoricoCotacao

export const transformTickerForHisotoricoCotacao002 = (
  assets: (string | undefined)[],
): string => {
  const newAssetsArray: (string | undefined)[] = [];
  assets.forEach(asset => {
    if (asset) {
      newAssetsArray.push(asset.split('|')[0].trim());
    }
  });

  return newAssetsArray.join('+');
};
