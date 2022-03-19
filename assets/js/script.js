//defining list of ingredients for all of the dishes as arrays of strings 

//recipe from https://mummum.dk/quesadillas-med-ost/ 
let quesadillas = ['4 stk. tortillapandekager', '200 g. revet cheddar', '1 stk. rød peberfrugt', '20 g. salsa', '20 g. jalapenos', '1 stk. chilisauce'];
//recipe from https://mummum.dk/spaghetti-carbonara/ 
let spaghettiCarbonara = ['200 g. spaghetti', '200 g. bacon i tern', '4 stk. æggeblomme', '40 g. parmasan', '0,5 stk. løg', '2 fed hvidløg', '0,5 tsk. peber'];
//recipe from https://mummum.dk/porresuppe/ 
let porresuppe = ['2 stk. porre', '1 stk. løg', '300 g. kartoffel', '7 dl. vand', '1 stk. hønsebouillonterning', '1 dl. piskefløde', 'salt/peber', '200 g. bacon i tern', '0,5 bundt purløg']; 
//recipe from https://mummum.dk/cashew-chicken/ 
let cashewChicken = ['400 g. kyllingebryst', '2 spsk. majsstivelse', '1 stk. løg', '1 stk. gul peber', '0,5 dl. sojasauce', '0,25 dl. sweet chilisauce', '3 fed hvidløg', '1 dl. vand', '1 stk. hønsebuillonterning', '1 spsk. brun farin', '30 g. cashewnødder', '180 g. ris'];
//recipe from https://mummum.dk/spaghetti-bolognese/ 
let spaghettiBolognese = ['2 stk. løg', '3 fed hvidløg', '500 g. hakket oksekød', '70 g. tomatpure', '400 g. hakkede tomater på dåse', '1 tsk. paprika', '1 stk. chiliflager', '0,5 stk. oksebuillonterning', '0,5 stk. grøntsagsbuillonterning', '2 dl. vand', '1 bundt frisk basilikum', '50 g. parmasan', '400 g. spaghetti'];


//event listeners for the dishes 
let quesedillasBtn = document.querySelector('#quesadillas'); 
let carbonaraBtn = document.querySelector('#spaghettiCarbonara'); 
let porresuppeBtn = document.querySelector('#porresuppe'); 
let cashewChickenBtn = document.querySelector('#cashewChicken'); 
let bologneseBtn = document.querySelector('#spaghettiBolognese'); 


quesedillasBtn.addEventListener('click', () => {
    printGroceryList(quesadillas); 
})

carbonaraBtn.addEventListener('click', () => {
    printGroceryList(spaghettiCarbonara); 
})

porresuppeBtn.addEventListener('click', () => {
    printGroceryList(porresuppe); 
})

cashewChickenBtn.addEventListener('click', () => {
    printGroceryList(cashewChicken); 
})

bologneseBtn.addEventListener('click', () => {
    printGroceryList(spaghettiBolognese); 
})

//grocery list
let list = document.getElementById("groceryList");

function printGroceryList(id){
    clearList();

    id.forEach((element) => {
        let li = document.createElement("li"); //makes li element and assigns to li variable
        li.innerText = element; //adds array element to li 
        list.appendChild(li); //adds li element to the HTML
    });
    //makes clear button appear
    document.getElementById("hidden").id = "show";
}
 
function clearList(){
    groceryList.innerHTML = ''; 
}

//clear button
let clearBtn = document.querySelector('#hidden'); 

clearBtn.addEventListener('click', () => {
    clearList(); 
    document.getElementById("show").id = "hidden";
})

