// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17° in 1 days ... 21° in 2 days ... 23° in 3 days ...".

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it uyp into sub-problems!

TEST DATA:
Data 1: [17, 21, 23]
Data 2: [12, 5, -5, 0, 4]
*/

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let str = "...";
  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}° in ${i + 1} days ...`;
  }
  return str;
}

console.log(printForecast(testData1));
console.log(printForecast(testData2));

// Coding Challenge #2

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0];
*/

const workHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];

function calculateWorkStats(hours) {
  const totalHours = hours.reduce((acc, curr) => acc + curr, 0);
  const averageHours = totalHours / hours.length;
  const maxHours = Math.max(...hours);
  const mostWorkedDay = hours.indexOf(maxHours) + 1;
  const daysWorked = hours.filter((hour) => hour > 0).length;
  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageHours,
    mostWorkedDay,
    daysWorked,
    isFullTime,
  };
}
const workStats = calculateWorkStats(workHours);

console.log(`Total hours worked: ${workStats.totalHours}`);
console.log(`Average daily hours: ${workStats.averageHours}`);
console.log(`Day with most hours worked: Day ${workStats.mostWorkedDay}`);
console.log(`Number of days worked: ${workStats.daysWorked}`);
console.log(`Was it a full-time week? ${workStats.isFullTime ? "Yes" : "No"}`);
