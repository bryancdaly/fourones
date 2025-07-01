export const formatCurrency = (value) => {
  return value.toLocaleString('en-NZ', { style: 'currency', currency: 'NZD', maximumFractionDigits: 0 });
};
