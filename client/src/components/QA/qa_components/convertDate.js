export default function convertDate(dateString) {
  var date = new Date(dateString);
  var monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December']
  var year = date.getFullYear();
  var month = monthList[date.getMonth()]
  var day = date.getDate();
  return ` ${month} ${day}, ${year}`;
}
