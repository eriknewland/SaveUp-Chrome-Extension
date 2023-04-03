document.getElementById('options-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const interestRate = parseFloat(document.getElementById('interest-rate').value);
  const timePeriods = document.getElementById('time-periods').value.split(',').map(Number);
  const currency = document.getElementById('currency').value;

  chrome.storage.sync.set({ interestRate, timePeriods, currency }, () => {
    alert(`Options saved:\nInterest Rate: ${interestRate}\nTime Periods: ${timePeriods}\nCurrency: ${currency}`);
  });
});

// Load saved options when the options page is opened
chrome.storage.sync.get(['interestRate', 'timePeriods', 'currency'], (options) => {
  if (options.interestRate) {
    document.getElementById('interest-rate').value = options.interestRate;
  }
  if (options.timePeriods) {
    document.getElementById('time-periods').value = options.timePeriods.join(',');
  }
  if (options.currency) {
    document.getElementById('currency').value = options.currency;
  }
});