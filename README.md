# SaveUp!

<img src="https://user-images.githubusercontent.com/114263701/229649173-13137ea4-2c0f-4c84-8430-c00600e07f1d.png" alt="saveup-logo" width="200" height="200">

### A Compound Interest Calculator Chrome Extension


This Chrome extension calculates compound interest values for a given amount in USD or other selected currencies. When you hover over a currency value on a webpage, a popup will display a table with compound interest values at the specified interest rate and time periods.

## Features

- Hover over currency values to display a popup with compound interest calculations
- Customize the interest rate, time periods, and currency through the extension options page
- Supports the world's 10 most popular currencies

## Installation

1. Download or clone this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions`.
3. Enable "Developer mode" in the top right corner of the extensions page.
4. Click "Load unpacked" and select the folder containing the downloaded repository.
5. The extension should now be installed and active in your browser.

## Usage

1. Visit any webpage containing currency values.
2. Hover over a currency value to display the compound interest popup.
3. To customize the extension settings, right-click the extension icon in the Chrome toolbar and select "Options".

## Customization Options

- Interest Rate: Set the annual interest rate for the compound interest calculations (default: 8%).
- Time Periods: Set the time periods for the compound interest calculations in years (default: 5, 10, 20, 30).
- Currency: Choose the currency for the compound interest calculations (default: USD).

## Planned Enhancements

### Impulse Saving

This feature aims to enhance the functionality of the SaveUp! extension by allowing users to transfer the monetary value they hover over from their checking account or credit card to their savings account. This feature will help users to easily save up money based on prices they encounter while browsing the web.

The roadmap for implementing this feature includes:

1. Research and integrate with banking and financial APIs to enable secure access to users' checking, credit card, and savings accounts.
2. Add an authentication system to securely connect users' accounts with the extension.
3. Update the extension popup to include a "Save" button that initiates the transfer of the hovered amount.
4. Implement transaction history and tracking within the extension to allow users to view their savings progress.
5. Add notifications and confirmations for successful transfers and any errors that may occur during the process.
6. Ensure the security and privacy of users' financial data by following best practices and industry standards.

### Popup/Options Page Customization

This feature aims to provide users with the ability to customize the appearance of the popup and options page, including font, colors, and other visual elements. This feature will enhance the user experience by allowing personalization of the extension's interface.

The roadmap for implementing this feature includes:

1. Update the options page to include customization settings for font, colors, and other visual elements.
2. Implement a live preview of the customization settings on the options page, allowing users to see the changes before applying them.
3. Save the customization settings using the `chrome.storage` API, so that the user's preferences are retained across sessions.
4. Update the popup and options page to apply the saved customization settings.
5. Ensure that the customization options are accessible and easy to use for all users, including those with disabilities.
6. Provide a reset button to restore the default appearance settings.

## Contributing

Contributions to improve this extension are more than welcome. If you have an idea for a new feature or a bug fix, please follow these steps:

1. Fork this repository to your own GitHub account.
2. Clone the forked repository to your local machine.
3. Create a new branch with a descriptive name, e.g., `feature/new-currency-support` or `fix/popup-display-issue`.
4. Make your changes in the new branch.
5. Commit your changes and push the branch to your forked repository.
6. Create a pull request from your forked repository's branch to the original repository's main branch.
7. In the pull request description, provide a clear explanation of the changes you made and their purpose.

Please ensure that your code follows best practices and is well-documented.
