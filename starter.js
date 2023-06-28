////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add = (num1,num2) => num1 + num2
const substract = (num1,num2) => num1 - num2
const multiply = (num1,num2) => num1 * num2
const divide = (num1,num2) => num1 / num2


//check if arguments (num1 and num1) are number. if so,then do the operation on them
//in order to not repeat the code inside each function, we will create a higher order function that accepts these function as callbacks
//high order function that takes in prearguments

const calculator = (num1,num2,cb) => { //cb is a callback function
//we will check to see if these params(num1 & num2) can be coerced into numbers
//if it is, then we will go ahead and coerce them
//if not, we will inform the user
if(+num1 && +num2){ //shorthand for the number function   number(), you can use +
  num1 = +num1
  num2 = +num2
  return cb(num1,num2)
} else {
  console.log('please send in numbers')
}
}

const addResult = calculator(1,2,add)  //callback does not need parenthesis
const substractResult = calculator(3,1,substract)
const multiplyResult = calculator(4,5,multiply)
const divideResult = calculator(10,2,divide)

console.log(addResult)
console.log(substractResult)
console.log(multiplyResult)
console.log(divideResult)

//calculator is the higher function because it calls on cb  it would also be the higher one if it had a return function





///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE
//we want to apply discount y percentage (25% would be 0.25)
//we need the object for the discount (product, discount)
const applyPercentDiscount = (product,discount) => {
product.displayPrice = product.basePrice * (1-discount); //the discount is based on the base price
}

//we want to be able to apply a flat rate discount ($5)

const applyFlatRateDiscount = (product,discount) => {
  product.displayPrice = product.basePrice - discount
}

//in order to not loop over the discount functions

const applyDiscountsToCollection = (arr,discount,cb)  => {  //the product is comming from the array , the discount needs to be sent in, callback
for(let i = 0; i< arr.length; i++){
  cb(arr[i],discount)
}
}

//applyDiscountsToCollection(dogProducts,0.10,applyPercentDiscount);
//applyDiscountsToCollection(catProducts,5,applyFlatRateDiscount); (because I am applying discount in the next problem)

//applies discounts by category 

const applyDiscountByCatergory = (category,discount,arr,cb) => {
  //we want to iterate over the array and change the values that match category
  for(let i= 0; i < arr.length; i++) {
    //check if category matches, if it does we can do our operation and invoke cb
    if(arr[i].category === category) {
      cb(arr[i],discount);
    }
  }

}

//applyDiscountByCatergory(1,0.25,catProducts,applyPercentDiscount)
//console.log(catProducts)

//applyDiscountByCatergory(2,5,dogProducts,applyFlatRateDiscount)
//console.log(dogProducts)

const applyDiscountByInventory = (inventory,discount,arr,cb) => {
  for(let i= 0; i < arr.length; i++) {
    if(arr[i].inventory < inventory) {
      cb(arr[i],discount);
}
}
}
applyDiscountByInventory(50,1,catProducts,applyFlatRateDiscount)
console.log(catProducts)

applyDiscountByInventory(80,0.25,dogProducts,applyPercentDiscount)
console.log(dogProducts)


////////////////////////
////// SANDWICHES //////
////////////////////////

//high order function

// CODE HERE
function makeSandwich(bread) {
  //returns as a function
  return function(ingredients){//ingredientes need to be an array in order for the function to loop over it 
    let order = `you ordered a ${bread} sandwich with`
    for(let i = 0; i < ingredients.length;i++) {
      if (i=== ingredients.length - 1 && i !== 0) //more than one ingredient or if we rech the last ingredient
      order += `and ${ingredients[i]}`;
      } else if (ingredients.length ===1) { //only one ingredient
      order += `${ingredients[i]}.`;
      } else if (i === ingredients.length - 2) {
    } else {
      order += `${ingredients[i]},` //more ingredients in the middle 
    }
    return order;
  }
}

const makeRyeSanwich = ('rye');
console.log(makeRyeSanwich(['pickles', 'cheese', 'turkey', 'mayo']));

