import token from '../Utils/token';
import EndPoint from '../Utils/endPoint';
import { transformDateUSToBRFormat } from '../../utils/Date';
import { transformTickerForHisotoricoCotacao002 } from '../../utils/Dashboard/funcoesAuxilio';

const fetchChartDashboard = (
  startDate: string | undefined,
  endDate = '31129999',
  assets: (string | undefined)[],
  inputCalcBasisValue: number,
): Promise<any> => {
  const apiURL = encodeURIComponent(
    `HistoricoCotacao002.php?&x=${transformTickerForHisotoricoCotacao002(
      assets,
    )}&data_ini=${transformDateUSToBRFormat(
      startDate,
    )}&data_fim=${transformDateUSToBRFormat(
      endDate,
    )}&pagina=1&d=MOEDA_ORIGINAL&g=1&m=0&info_desejada=numero_indice&retorno=discreto&tipo_data=du_br&tipo_ajuste=todosajustes&num_casas=2&enviar_email=0&ordem_legenda=0&cabecalho_excel=modo2&classes_ativos=b33j9ynrb3&ordem_data=0&rent_acum=nada&minY=&maxY=&deltaY=&preco_nd_ant=0&base_num_indice=${inputCalcBasisValue}&flag_num_indice=0&eixo_x=Data&startX=0&max_list_size=20&line_width=2&titulo_grafico=&legenda_eixoy=&tipo_grafico=line`,
  );
  const apiTeste = `token=${token}&format=json2&URL=${apiURL}`;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: '/',
    },
    body: apiTeste,
  };

  return fetch(`${EndPoint}code=import_data`, requestOptions)
    .then(response => response.json())
    .then(response => response);
};

export default fetchChartDashboard;
