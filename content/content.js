const popup = document.createElement('div');
popup.classList.add('usd-value-popup');
document.body.appendChild(popup);

function getOptions() {
  return new Promise((resolve) => {
    chrome.storage.sync.get(['interestRate', 'timePeriods', 'currency'], (options) => {
      resolve(options);
    });
  });
}

function calculateCompoundInterest(principal, rate, years) {
  return principal * Math.pow(1 + rate, years);
}

function createPopup(val, interestRate, timePeriods, currency) {
  const interestTable = timePeriods
    .map(
      (years) =>
        `<tr>
          <td>${years} years</td>
          <td>${
            Math.round(
              calculateCompoundInterest(val, interestRate, years) * 100
            ) / 100
          } ${currency}</td>
        </tr>`
    )
    .join('');

  popup.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Years</th>
        <th>Value at ${interestRate * 100}% interest</th>
      </tr>
    </thead>
    <tbody>
      ${interestTable}
    </tbody>
  </table>
`;
  return popup;
}

function showPopup(e, popup) {
  popup.style.left = `${e.pageX + 10}px`;
  popup.style.top = `${e.pageY + 10}px`;
  popup.style.display = 'block';
}

function hidePopup(popup) {
  popup.style.display = 'none';
}

async function onMouseOverUSD(e) {
  const options = await getOptions();
  const interestRate = options.interestRate || 0.08;
  const timePeriods = options.timePeriods || [5, 10, 20, 30];
  const currency = options.currency || 'USD';

  const usdValue = e.target.textContent.slice(1);
  createPopup(usdValue, interestRate, timePeriods, currency);
  document.body.appendChild(popup);
  showPopup(e, popup);

  e.target.addEventListener('mouseout', () => {
    hidePopup(popup);
  });
}
function findUSDValues() {
  const usdValueRegex = /\$\d+(?:,\d{3})*(\.\d{2})?/g;
  const textNodes = document.evaluate(
    "//*[not(self::script or self::style)]/text()[normalize-space()]",
    document,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  );

  for (let i = 0; i < textNodes.snapshotLength; i++) {
    const node = textNodes.snapshotItem(i);
    const matches = node.data.match(usdValueRegex);

    if (matches) {
      const parentNode = node.parentNode;
      const newNode = document.createElement('span');
      newNode.innerHTML = node.data.replace(
        usdValueRegex,
        (match) => `<span class="usd-value">${match}</span>`
      );
      parentNode.replaceChild(newNode, node);
    }
  }

  const usdValueElements = document.getElementsByClassName('usd-value');
  for (let element of usdValueElements) {
    element.addEventListener('mouseover', onMouseOverUSD);
  }
}

findUSDValues();