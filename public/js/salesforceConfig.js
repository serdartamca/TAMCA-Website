// salesforceConfig.js

// Import the necessary libraries
import { Connection } from "jsforce";

// Salesforce credentials
const username = 'serdar_kurt@icloud.com';
const password = 'Bursags1664!';
const securityToken = 'XGWM7eM1fhQHH293GPqNintRn';

// Initialize jsforce with your Salesforce credentials
const conn = new Connection({
  ouath2: {
    clientId: '3MVG9cHH2bfKACZavLDrPPbLHn9NEgX.MoajG6GuU3QVpmebMw5dfhN74XFz3TNakmjYt1EXhHfni2vo9KWJx',
    clientSecret : '184D78353BB90F092BB1CAA2E978D00E4DA5B935011DEE8AA30646610A0EB42C',
    redirectUri: 'https://login.salesforce.com/services/oauth2/callback'
  },
  proxyUrl: 'https://node-salesforce-proxy.herokuapp.com/proxy/'
});

// Define your Salesforce-related functions here
function loginToSalesforce() {
  return new Promise((resolve, reject) => {
    conn.login(username, password + securityToken, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

function querySalesforce(query) {
  return new Promise((resolve, reject) => {
    conn.query(query, function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

// Export the functions you want to use in your main HTML file
export { loginToSalesforce, querySalesforce };
