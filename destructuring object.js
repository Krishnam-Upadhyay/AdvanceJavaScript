const bob = {
    first:'bob',
    last:'Upadhyay',
    city:'Mumba9',
    siblings:{
        sister:'priyanka'

    },
};

// const{first,city,last:sirname,siblings:{sister:favortieSibling}}=bob;
// console.log(first,sirname,city);

function printPerson(person){
    const{first,last}= person;
    console.log(first,last);



};
printPerson(bob);
