console.log("welcome to employee wage");

const IS_ABSENT : number = 0;
const WAGE_PER_HOUR : number = 20;
const FULL_DAY_HOUR :number = 8;
const PART_TIME_HOUR : number = 4;
let empCheck : number = Math.floor(Math.random()*10)%3;
console.log(empCheck);
switch(empCheck){
    case 0:{
        console.log("EMPLOYEE ABSENT");
        break;
    }
    case 1:{
        console.log("FULL TIME EMPLOYEE PRESENT");
        let dailyWage : number = WAGE_PER_HOUR * FULL_DAY_HOUR;
        console.log("Daily wage of full timer = " +dailyWage);
        break;
    }
    case 2:{
        console.log("PART TIME EMPLOYEE PRESENT");
        let dailyWage : number = WAGE_PER_HOUR * PART_TIME_HOUR;
        console.log("Daily wage of part timer = " +dailyWage);
        break;
    }
    default:{
        console.log("no employee found");
        break;
    }
}