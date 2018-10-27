// Listen for submit
// document.getElementById('loan-form').addEventListener('submit',calculateResults)
// //Calculate results
//  function calculateResults(event){
//     console.log('wkddwk');
//     event.preventDefault();
//  };

 document.getElementById('loan-form').addEventListener('submit', function(e){
    //Hide results
    document.getElementById('results').style.display = 'none';
    //Show results 
    document.getElementById('loading').style.display = 'block';
    setTimeout(calculateResults, 2000);
    e.preventDefault();
 });



 // Calculate Results
function calculateResults(){
  
// UI vars
const amountUI = document.getElementById('amount');
const interestUI = document.getElementById('interest');
const yearsUI = document.getElementById('years');
const monthlyPaymentUI = document.getElementById('monthly-payment');
const totalPatmentUI = document.getElementById('total-payment');
const totalInterestUI = document.getElementById('total-interest');

//Parse to float
const principal = parseFloat(amountUI.value);
const calculatedInterest = parseFloat(interestUI.value) / 100 / 12;
const calculatedPayments = parseFloat(yearsUI.value) * 12;

//Compute monthly payment
const x = Math.pow(1 + calculatedInterest, calculatedPayments);
const monthly = (principal*x*calculatedInterest) / (x-1);

//Check numbers
if(isFinite(monthly)){
    monthlyPaymentUI.value = monthly.toFixed(2);
    totalPatmentUI.value = (monthly * calculatedPayments).toFixed(2);
    totalInterestUI.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    //Show results
    document.querySelector('#results').style.display = 'block';
    //Hide loading
    document.querySelector('#loading').style.display = 'none';
} else {
    // console.log('Check numbers');
    showError('Please check your numbers');



}
};

function showError(error){
    //Create error div
    const divError = document.createElement('div');
    divError.className = 'alert alert-primary';
    divError.appendChild(document.createTextNode(error));

    //Get elements from card
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    //Insert divError before heading
    card.insertBefore(divError, heading);
    setTimeout(clearError, 3000);
    }

function clearError (){
    document.querySelector('.alert').remove();
    //Hide loading
    document.querySelector('#loading').style.display = 'none';

}

