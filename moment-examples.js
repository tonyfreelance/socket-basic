var moment = require('moment');
var now = moment().subtract(1, 'year').valueOf();

var timestampMoment = moment.utc(now);

console.log(timestampMoment.format('YYYY-M-DDThh:mm:ss.SSS'));

// console.log(now.format());
// console.log(now.format('X'));
// console.log(now.valueOf());


// var timestamp = 1449803161146;
// var timestampMoment = moment.utc(timestamp);

// console.log(timestampMoment.local().format('YYYY-M-DDTh:mm:ss.SSS'));


// now.subtract(1, 'year');

// console.log(now.format());
// console.log(now.format('MMM Do YYYY, h:mma'));
