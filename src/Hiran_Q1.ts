let id: number = 6401;
let Myname: string = "Hiran";
let workYears: number = 3;
let salary: number = 15000;
let bonus: number = "";
let gift: number = 3;    



console.log("id: " + typeof (id) + " " + id);
console.log("Name: " + typeof (Myname) + " " + Myname);
console.log("workYears: " + typeof (workYears) + " " + workYears);
console.log("salary: " + typeof (salary) + " " + salary);

if (bonus < 1 ) {
    bonus = salary * 0;
    console.log("bonus: "+ typeof(bonus) + " " + bonus);
}
if (bonus < 3 ) {
    bonus = salary * 1;
    console.log("bonus: "+ typeof(bonus) + " " + bonus);
}
if (bonus < 5 ) {
    bonus = salary * 2;
    console.log("bonus: "+ typeof(bonus) + " " + bonus);
}
if (bonus > 6 ) {
    bonus = salary * 3;
    console.log("bonus: "+ typeof(bonus) + " " + bonus);
}