const people = [
    {
        name:'Krishnam',age:21,position:'developer'
    },
    {name:'Aditi',age:30,position:'PMO'},
    {name:'sona',age:31,position:'Unknow'}
];

const fruits = ['orange','bana','lemon','mango'];

//filter
const youngPeople = people.filter((s)=>{
    return s.age<25;
})
console.log(youngPeople);

const developer = people.filter((person)=>{
    return person.position =='developer';
})

//no match
const seniorDev = people.filter((person)=>{
    return person.name == 'seniorDeveloper';

});
console.log(seniorDev);

//Find MEthod

const sona = people.filter((s)=>{
    return s.name =='sona';
});
console.log(sona);

//
const fruit = fruits.find((fruit)=>{
    return fruit =='mango';
});
console.log(fruit);

//when no rsult is found in the arrat

const oldfPErson = people.find((s)=>{
    return s.age>=50;

})
console.log(oldfPErson);
//multiple matches


