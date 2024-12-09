////////////////////////////////////Verible in javaScript////////////////////////////////////

// let x=10;
// let y=20;
// let sum=x+y;
// console.log(sum);

// let num=10;
// let double=25.75;
// let bool=true;
// let string="sandeep";
// let arrayList=[];
// let object={};

// console.log(typeof num);
// console.log(typeof double);
// console.log(typeof bool);
// console.log(typeof string);
// console.log(typeof arrayList);
// console.log(typeof object);


// let name;
// {
//      name="sandeep";
// }
// console.log(name);

////////////////////////////////////Loop in javaScript////////////////////////////////////

// for(let i=0;i<10;i++){
//     console.log("Hello");
// }

// let numberList=[10,20,30,40,50,60,70,80,90,100,110];

// for(let number of numberList){
//     console.log(number);
// }

// numberList.forEach(number =>{
//     console.log(number);
// });

////////////////////////////////////Conditional statement in javaScript////////////////////////////////////

// let isAdd=false;

// if(isAdd){
//     console.log("Customer added!");
// }else{
//     console.log("Customer not added");
// }

// let roomNumber=9;

// switch(roomNumber){
//     case 1:console.log("This is room number 01");
//     break;
//     case 2:console.log("This is room number 02");
//     break;
//     case 9:console.log("This is room number 09");
//     break;
//     case 7:console.log("This is room number 07");
//     break;
//     case 10:console.log("This is room number 10");
// }

// let isTrue = 10 === "10";
// console.log(isTrue);



////////////////////////////////////Method in javaScript////////////////////////////////////
// getSum(); 
// function getSum(){
//     console.log("Hello");
// }

// getSum(10,20); 
// function getSum(x,y){
//     console.log(x+y);
// }

// let sum =getSum(10,255); 
// console.log(sum);
// function getSum(x,y){
//     return x+y;
// }

////////////////////////////////////Object in javaScript////////////////////////////////////
// let customer = {
//     name: "Sandeep",
//     age: 24,
//     address: "Kandy",
//     salary: 75000.00
// }
// console.log(customer);

let customerList = [{
    name: "Sandeep",
    age: 24,
    address: "Kandy",
    salary: 75000.00
},
{
    name: "Shehan",
    age: 23,
    address: "Kandy",
    salary: 75000.00
},
{
    name: "Chamal",
    age: 28,
    address: "Kandy",
    salary: 75000.00
},
{
    name: "Chathuranga",
    age: 28,
    address: "Kandy",
    salary: 75000.00
},
{
    name: "Keshara",
    age: 21,
    address: "Kandy",
    salary: 75000.00
}];

// let h1=document.getElementById("title");
// h1.textContent=customerList[0].name;

// loadData();
// function loadData() {
//     let ol = document.getElementById('ol');
//     let body = '';
//     customerList.forEach(customer => {
//         body += `<li>${customer.name}</li>`;
//     });
//     ol.innerHTML = body;
// }

// function addCustomer() {
//     let txtName = document.getElementById("txtName");
//     let customerName = txtName.value;

//     customerList.push({ name: customerName });
//     loadData();
//     console.log(customerName);
// }
loadData();
function loadData(){
    let ol = document.getElementById('ol');
    let body='';

    customerList.forEach(customer =>{
        body+=`<li>${customer.age}</li>`;
    });

    ol.innerHTML=body;
}

function addCustomer(){
    let txtAge=document.getElementById('txtAge');
    let customerAge=txtAge.value;
    if(customerAge>10){
        customerList.push({
            age:customerAge,
        });
        loadData();
        console.log(customerAge);
    }else{
        alert("Invalid age ");
    }
    
}
