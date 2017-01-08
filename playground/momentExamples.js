var moment = require('moment');

console.log(moment().format())

var now = moment()

console.log('curren time Stamp ' + now.unix())

var timeStamp = 1483743420

var currentMoment = moment.unix(timeStamp)

console.log('current Moment ' + currentMoment.format('MMM D, YY @ h:mm:ss a'))


//Full Month 3rd, full year 2017 @ hh:mm AM/PM

console.log('current Date and time: ' + now.format('MMMM Do, YYYY @ hh:mm A'))
