export const getTransactionItems = data => {
  return data ? Object.keys(data).map(key => data[key]) : ['Check the selectors file for errors!']
}
