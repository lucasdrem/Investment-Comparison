/* eslint-disable import/no-mutable-exports */
/* eslint-disable prefer-destructuring */
let token = localStorage.getItem('@ComparadorAtivos: token');
if (token) {
  token = JSON.parse(token).access_token;
}

export default token;
