const person ={
    name:'Krishnam'
};
console.log(person.name);
person.age = 25;
console.log(person.age);
console.log(person);


const items = {
    'featured-items':['item1','item2']
};
console.log(items['featured-items']);

let appState = 'loading';
const app = {
    [appState]:true
};
console.log(app.loading);
const keyword = 'new';
app[keyword]= 'new';
console.log(app.new);


const state ={
    loading:true,
    name:'',
    job:''
}

function updateState(key,value){
    state[key] = value;

}
updateState('job','Developer');

console.log(state);