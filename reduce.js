const staff =[
    {name:'krishnam',age:20,positin:'developer',salary:50000},
    {name:'Aditi',age:30,positin:'PMO',salary:6000},
    {name:'sona',age:25,positin:'AirForce',salary:7000}
]

const dailyTotal = staff.reduce((total,person)=>{
    
    
    total += person.salary
    return total
},0);
console.log(dailyTotal);
