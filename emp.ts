console.log("welcome to employee wage");

const IS_ABSENT: number = 0;
const WAGE_PER_HOUR: number = 20;
const FULL_DAY_HOUR: number = 8;
const PART_TIME_HOUR: number = 4;
const DAYS_IN_MONTH: number = 20;
const MAX_WORK_HOURS: number = 100;
let days: number = 0;
let hours: number = 0;
let empDailyWageArr: number[] = new Array();
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
function calcDailyWage(empHrs:number): number {
  return empHrs * WAGE_PER_HOUR; 
}
while (hours < MAX_WORK_HOURS && days < DAYS_IN_MONTH) {
  days++;
  let empHrs: number = getWorkingHours(empCheck);
  hours += empHrs;
  empDailyWageArr.push(calcDailyWage(empHrs));
}
let empWage: number = calcDailyWage(hours);
console.log(empDailyWageArr);
console.log("employee wage =" +empWage);

console.log("UC7A")
let totEmpWage: number = 0;
function sum(dailyWage: number){
  console.log(dailyWage+"hii");
  totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("employee wage =" +totEmpWage);

function totalWages(totalWage, dailyWage): number{
  return totalWage + dailyWage;
}
console.log(" Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

//UC7B
let dailyCntr: number = 0;
function mapDayWithWage(dailyWage): string{
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr: string[] = empDailyWageArr.map(mapDayWithWage);
console.log("Uc7B - Daily Wage Map");
console.log(mapDayWithWageArr);
