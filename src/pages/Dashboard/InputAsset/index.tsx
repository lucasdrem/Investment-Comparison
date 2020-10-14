import React, { useCallback, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { InputAsset } from './styles';

import * as actionsDashboard from '../../../store/actions/Dashboard';
import * as actions from '../../../store/actions/Dashboard';

import fetchAutocompleteAtivoBoletaCV from '../../../services/Dashboard/autocompleteAsset';
import { useToast } from '../../../hooks/toast';

import * as stylesDashboard from '../styles';

interface InputAssetDashboardProps {
  theme: stylesDashboard.ViewModeVariablesDTO;
}

type Props = actions.ActionsPropsDTO & InputAssetDashboardProps;

interface AssetOptionsProps {
  codigo: string;
  nome: string;
}

const InputAssetDashboard: React.FC<Props> = ({
  actionDashboardAddAssets,
  actionDashboardChangeDates,
  theme,
}: Props) => {
  const [assetsAutocompleteOptions, setAssetsAutocompleteOptions] = useState<
    AssetOptionsProps[]
  >([]);

  const dateStartRef = useRef<HTMLInputElement>(null);
  const dateEndRef = useRef<HTMLInputElement>(null);
  const { addToast } = useToast();

  const inputOnBlur = useCallback(async e => {
    const tickerValue = document.getElementById(
      'dashboard__ticker--input',
    ) as HTMLInputElement;

    switch (e.target.id) {
      case 'dashboard__ticker--input':
        if (tickerValue?.value.trim() && actionDashboardAddAssets) {
          tickerValue.value = tickerValue.value.toUpperCase();
          actionDashboardAddAssets(tickerValue.value.toUpperCase());
          addToast({
            type: 'success',
            title: 'New Ticker',
            description: 'Ticker added!',
          });
        }
        break;
      default:
    }

    if (
      dateStartRef?.current?.value &&
      dateEndRef?.current?.value &&
      actionDashboardChangeDates
    ) {
      actionDashboardChangeDates({
        start_date: dateStartRef.current.value,
        end_date: dateEndRef.current.value,
      });

      setAssetsAutocompleteOptions([]);
      tickerValue.value = '';
    }
  }, []);

  const searchAssetAutocomplete = useCallback(async e => {
    const responseAutocomplete = await fetchAutocompleteAtivoBoletaCV(
      e.target.value,
      30,
    );
    setAssetsAutocompleteOptions([...responseAutocomplete]);
  }, []);

  return (
    <InputAsset theme={theme}>
      <span>Escolha o ativo</span>
      <Autocomplete
        id="dashboard__ticker--input"
        disableClearable
        freeSolo
        options={assetsAutocompleteOptions.map(
          asset => `${asset.codigo} | ${asset.nome}`,
        )}
        onInput={searchAssetAutocomplete}
        renderInput={params => <TextField {...params} margin="normal" />}
        onBlur={inputOnBlur}
      />
      <span>Selecione o período</span>
      <div>
        <input
          type="date"
          id="dashboard__date--start"
          onBlur={inputOnBlur}
          ref={dateStartRef}
        />
        <input
          type="date"
          id="dashboard__ticker--end"
          onBlur={inputOnBlur}
          ref={dateEndRef}
        />
      </div>
    </InputAsset>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): actions.ActionsPropsDTO => ({
  actionDashboardAddAssets: (asset: string) =>
    dispatch(actionsDashboard.actionDashboardAddAssets(asset)),
  actionDashboardChangeDates: (dates: actions.DashboardDatesPropsDTO) =>
    dispatch(actionsDashboard.actionDashboardChangeDates(dates)),
});

export default connect(null, mapDispatchToProps)(InputAssetDashboard);
