// defines main function, with parameter food item. calls food function with that parameter
// which then uses the item parameter to decide which food to console log. always logs beverage.

function receivesAFunction(item) {
    food(item);
    beverage();
}

function cheese() {
    console.log('I\'m going to eat some cheese!')
}

function burger() {
    console.log('I am going to eat a burger.')
}

function beverage() {
    console.log('I am going to drink something with my food.')
}

function food(item) {
    item();
}

function beverage2() {
    console.log('this is my named function I think')
}

function returnsANamedFunction() {
    return beverage2;        
}




function returnsAnAnonymousFunction() {
    return function () {
        console.log('this calls an anonymous function')
    }
}