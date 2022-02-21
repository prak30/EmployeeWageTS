console.log("welcome to employee wage");

const IS_ABSENT : number = 0;
const WAGE_PER_HOUR : number = 20;
const FULL_DAY_HOUR :number = 8;
let empCheck : number = Math.floor(Math.random()*10)%2;
if (empCheck == IS_ABSENT){
    console.log("EMPLOYEE ABSENT");  
}else{
    console.log("EMPLOYEE PRESENT");
    let dailyWage : number = WAGE_PER_HOUR * FULL_DAY_HOUR
    console.log("Daily wage is " +dailyWage);
}