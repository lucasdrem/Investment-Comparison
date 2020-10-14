export const transformDateUSToBRFormat = (
  dateUSFormat: string | undefined,
): string => {
  let dateTransformed = '';
  if (dateUSFormat) {
    const dateTransformedArray = dateUSFormat.split('-');
    if (dateTransformedArray.length === 3) {
      dateTransformed = `${dateTransformedArray[2]}/${dateTransformedArray[1]}/${dateTransformedArray[0]}`;
    }
  }
  return dateTransformed;
};

export const transformDateBRToUSFormat = (
  dateBRFormat: string | undefined,
): string => {
  let dateTransformed = '';
  if (dateBRFormat) {
    const dateTransformedArray = dateBRFormat.split('/');
    if (dateTransformedArray.length === 3) {
      dateTransformed = `${dateTransformedArray[2]}-${dateTransformedArray[1]}-${dateTransformedArray[0]}`;
    }
  }
  return dateTransformed;
};
