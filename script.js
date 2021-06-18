
function calculateEmi(){

    var principalAmount=document.getElementById("enterLoanAmount").value;
    var tenureMonths=document.getElementById("loanTenureMonths").value;
    var rateOfInterest=document.getElementById("interestPercent").value;
    // calculating interest per month
    var interestPerMonth=(principalAmount*(rateOfInterest*0.01))/tenureMonths;

   // emi to be calculated....
   var perMonthEmi=((principalAmount/tenureMonths)+interestPerMonth).toFixed(2);

   // total payment to be done including interest
   var totalAmount= perMonthEmi*tenureMonths;

   //displaying the final output
   document.querySelector("#showcalculatedemi").innerHTML=`
   Principle Amount :${principalAmount}<br>
   EMI : <b>${perMonthEmi} </b> <br>
   Total Amount(incl. %) :${totalAmount}
   `;

}

// js end here in cloned 