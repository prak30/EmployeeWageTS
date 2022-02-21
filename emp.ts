console.log("welcome to employee wage");

const IS_ABSENT: number = 0;
const WAGE_PER_HOUR: number = 20;
const FULL_DAY_HOUR: number = 8;
const PART_TIME_HOUR: number = 4;
const DAYS_IN_MONTH: number = 20;
const MAX_WORK_HOURS: number = 100;
let totalSalary: number = 0;
let days: number = 0;
let hours: number = 0;
let empCheck: number = Math.floor(Math.random() * 10) % 3;

function getWorkingHours(empCheck): number {
  switch (empCheck) {
    case 0: {
      return 0;
      break;
    }
    case 1: {
      console.log("full timer");
      return FULL_DAY_HOUR;
      break;
    }
    case 2: {
      console.log("part timer");
      return PART_TIME_HOUR;
      break;
    }
    default: {
      return 0;
      break;
    }
  }
}
while (hours < MAX_WORK_HOURS && days < DAYS_IN_MONTH) {
  hours += getWorkingHours(empCheck);
  days++;
}
totalSalary = hours * WAGE_PER_HOUR;
console.log("salary is =" + totalSalary);
