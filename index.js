// Write your solution in this file!
var customerName = "bob"
function returnCustomerName() {
    return customerName;
}
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
   bestCustomer = 'not bob';
}
function overwriteBestCustomer () {
    bestCustomer = 'maybe bob'
}
const leastFavouriteCustomer = 'someone else';
function changeLeastFavoriteCustomer (){
    leastFavouriteCustomer = 'someone else';
}