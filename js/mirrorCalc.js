function mirrorCalc() {
  state.push(data);
  localStorage.setItem('state', JSON.stringify(state));
}