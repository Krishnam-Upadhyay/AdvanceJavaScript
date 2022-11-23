//Map Operator
const people =[
    {
      name:'Krishnam',
      age:25,
      position:'designer',
    },
    {
      name:'susy',
      age:30,
      postion:'the boss',
    },
    {
      name:'apoorva',
      age:21,
      position:'project Manager'
    }
  ];
  
  const ages = people.map((person)=>{
    return person.age*2;
  
  });
  console.log(ages);
  
  const newPople = people.map((item)=>{
    return {firstname:item.name.toUpperCase(),
    oldage:item.age+=20}
  })
  
  console.log(newPople);
  //
  
  