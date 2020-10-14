import React, { useCallback } from 'react';

import { BsCircleFill } from 'react-icons/bs';
import { AiOutlineDelete } from 'react-icons/ai';

import Scrollbar from 'react-scrollbars-custom';
import { TableAssets } from './styles';

import { randomColorTableGenerator } from '../../../utils/Dashboard/funcoesAuxilio';

import * as reducers from '../../../store/reducers/Dashboard';
import * as actions from '../../../store/actions/Dashboard';

import * as stylesDashboard from '../styles';

interface AssetsTable {
  infoAssets: reducers.InfosAssetsProps;
  removeAsset: ((addAsset: string) => actions.ActionDashboardDTO) | undefined;
  theme: stylesDashboard.ViewModeVariablesDTO;
}

const AssetsTable: React.FC<AssetsTable> = ({
  infoAssets,
  removeAsset,
  theme,
}) => {
  const deleteAsset = useCallback(
    asset => {
      removeAsset && removeAsset(asset);
    },
    [infoAssets],
  );

  return (
    <TableAssets theme={theme}>
      <h3>ATIVOS</h3>

      <Scrollbar noScrollX>
        <ul>
          {infoAssets.assets.map((asset, i) => (
            <li key={asset}>
              <div>
                <BsCircleFill color={randomColorTableGenerator(i)} size={26} />
                <span>{asset}</span>
                <AiOutlineDelete
                  color={theme.divisionGridColor}
                  size={26}
                  onClick={e => deleteAsset(asset)}
                  id="dashboard__table--delete-icon"
                />
              </div>
            </li>
          ))}
        </ul>
      </Scrollbar>
    </TableAssets>
  );
};

export default AssetsTable;
