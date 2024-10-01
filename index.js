const mathTools = {
    num1: 15,
    num2: 10,
    sum: function() { //shot hand would be to remove function and : example would be sym() {}
         return this.num1 + this.num2;
            
    },
    difference: function() {
        return this.num1 - this.num2;
    }

}; 
const result = mathTools.sum()
console.log(result)

const resultDif = mathTools.difference()
console.log(resultDif)






function printName(userName) {
    const capitalize = str => str[0].toUpperCase() + str.slice(1);
    
    const capName = capitalize(userName);
    console.log(capName)

}
// testOne();



// printName('sarah');