console.log("welcome to employee wage");

//UC1
const IS_ABSENT : number = 0;
let empCheck : number = Math.floor(Math.random()*10)%2;
if (empCheck == IS_ABSENT){
    console.log("EMPLOYEE ABSENT");  
}else{
    console.log("EMPLOYEE PRESENT");
}