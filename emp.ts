console.log("welcome to employee wage");

const IS_ABSENT: number = 0;
const WAGE_PER_HOUR: number = 20;
const FULL_DAY_HOUR: number = 8;
const PART_TIME_HOUR: number = 4;
const DAYS_IN_MONTH: number = 20;
let totalSalary = 0;
let day = 1;
let empCheck: number = Math.floor(Math.random() * 10) % 3;
while (day <= DAYS_IN_MONTH) {
  switch (empCheck) {
    case 0: {
      console.log("EMPLOYEE ABSENT");
      break;
    }
    case 1: {
      console.log("FULL TIME EMPLOYEE PRESENT");
      totalSalary = (totalSalary + (WAGE_PER_HOUR * FULL_DAY_HOUR));
    //   console.log("Monthly salary of full timer = " + totalSalary);
      break;
    }
    case 2: {
      console.log("PART TIME EMPLOYEE PRESENT");
      totalSalary = (totalSalary +  (WAGE_PER_HOUR * PART_TIME_HOUR));
    //   console.log("Monthly salary of part timer = " + totalSalary);
      break;
    }
    default: {
      console.log("no employee found");
      break;
    }
  }
  day++;
}
console.log("monthly salary =" +totalSalary);
