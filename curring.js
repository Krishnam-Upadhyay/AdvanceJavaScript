//Curring

const buildSandiwich = (ingredient1) =>{
    return (ingredient2)=>{
        return (ingredient3)=>{
            return `${ingredient1} ${ingredient2} ${ingredient3}`;
        }
    }
}
const mySandwich = buildSandiwich("Bacon")("Lettuce")("Tomato")
console.log(mySandwich);


const buildSammy = ingred1=>ingred2=>ingred3=>`${ingred1},${ingred2},${ingred3}`;

const mySammy = buildSammy('turkey')("cheese")("bread");
console.log(mySammy);



const curriedMultiply = x => y => x * y;

console.log(curriedMultiply(2)(3));

const timesTen = curriedMultiply(10);
console.log(timesTen);
console.log(timesTen(8));
const updateElemText = id => content => document.querySelector('#${id');

const addCustomer = fn => (...args) => {
    console.log('saving customer info...')
    return fn(...args);

}

let completeOrder = (...args) => {
    console.log(`order #{[...args].toString()} completed`)
}

const curry = (fn) => {
    return curried = (...args) => {
        if (fn.length !== args.length) {
            return curried.bind(null, ...args);

        }

    }
}

