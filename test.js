let SHEET_ID = '1xACV4huf_jkBOiVgENQobHv84dWkA0iJvzytFyLg6DE';
let SHEET_TITLE = 'All Contacts';
let SHEET_RANGE = 'A1:N500';

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL, {
  method: 'GET',
  mode: 'no-cors',
})
.then(res => res.text())
.then(rep => {
  let data = JSON.parse(rep);
  console.log(data)
})