/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

const week = [
  { monday: 'workDay' },
  { tuesday: 'workDay' },
  { wednesday: 'workDay' },
  { thursday: 'workDay' },
  { friday: 'workDay' },
  { saturday: 'weekEnd'},
  { sunday: 'weekEnd' },
];

function isWeekend (weekDay: string):boolean {
  let foundDay = week.find(day => Object.keys(day)[0] === weekDay.toLowerCase());
  return foundDay ? foundDay[weekDay.toLowerCase()] === 'weekEnd' : false;
}