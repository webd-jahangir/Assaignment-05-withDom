// home page and blog page navigation
function moveTopage(page){
    window.location.href = './' + page;
}

// target all desire elements for show section and highlight btn.
const donationBtn = document.getElementById('donationBtn');
const historyBtn = document.getElementById('historyBtn');
const donationSection = document.getElementById('donationSection');
const historySection = document.getElementById('historySection');

// common function -1: show section with change button color
function showSection(sectionShow, buttonActivate, buttonDeactivate) {

    // fist of all hide all section
    donationSection.classList.add('hidden');
    historySection.classList.add('hidden');

    // show wanted section
    sectionShow.classList.remove('hidden');

    // Change button bg color and border color
    buttonActivate.style.backgroundColor = '#B4F461';
    buttonActivate.style.borderColor = '#B4F461';
    buttonDeactivate.style.backgroundColor = 'white';
    buttonDeactivate.style.borderColor = '#E5E7EB';
}


// active donation btn and secrtion
donationBtn.addEventListener('click', function () {
    showSection(donationSection, donationBtn, historyBtn);
});

// active history btn and secrtion
historyBtn.addEventListener('click', function () {
    showSection(historySection, historyBtn, donationBtn);
});
// ---------------------------------------------------------------------------------------


// here is common function 2: precess of all donation
function donationProcesess(mainBalanceId, balanceBtnId, inputAmountId, cardTitle, bgColorClass) {
    const mainBalanceAmount = parseFloat(document.getElementById(mainBalanceId).textContent);
    const balanceBtn = parseFloat(document.getElementById(balanceBtnId).textContent);
    const inputAmount = parseFloat(document.getElementById(inputAmountId).value);

    // Validate the input is a nmbr and its biggest than o.
    if (isNaN(inputAmount) || inputAmount <= 0) {
        alert("Please enter a valid donation amount.");
        // return this otherwise it create problem in my main balace and btn balance, which looks NaN (not a number)
        return;
    }

    if (inputAmount > mainBalanceAmount) {
        alert("You cannot donate more than your main balance.");
        // without return main balance will  be a nagative number.  
        return;
    }

    // Update main and btn balances
    document.getElementById(mainBalanceId).textContent = mainBalanceAmount - inputAmount;
    document.getElementById(balanceBtnId).textContent = balanceBtn + inputAmount;

    // Show modal after click on make a donation button
    document.getElementById('my_modal_5').showModal();

    // Add to transaction history in div (function call with 3 parameter which come from btn event listerner argument)
    addTransactionHistory(inputAmount, cardTitle, bgColorClass);

    
}

//  Add transaction history in history div. 
function addTransactionHistory(amount, cardTitle, bgColorClass) {
    const donationDate = Date();
    const donationDiv = document.createElement('div');
    donationDiv.className = `p-6 shadow-lg rounded-lg mb-3 ${bgColorClass}`;
    donationDiv.innerHTML = `
        <p>${amount} tk Donated For ${cardTitle}</p>
        <p>${donationDate}</p>`;

    historySection.appendChild(donationDiv);
}

// add event listeners for all 'make a donation' buttons. and as a arqument i use my all desire id and sent all card title and transaction history bg color for avoid repeated code, make this code clean and readable. 
document.getElementById('nDonateBtn').addEventListener('click', function () {
    donationProcesess('mainBalance', 'nbalanceBtn', 'ninputAmount', 'Support Noakhali Flood Relief Efforts, Bangladesh', 'bg-lime-50');
});

document.getElementById('fDonateBtn').addEventListener('click', function () {
    donationProcesess('mainBalance', 'fbalanceBtn', 'finputAmount', 'Support Flood Relief Efforts in Feni, Bangladesh', 'bg-gray-100');
});

document.getElementById('qDonateBtn').addEventListener('click', function () {
    donationProcesess('mainBalance', 'qBalanceBtn', 'qinputAmount', 'Support for the Injured in the Quota Movement', 'bg-red-50');
});
document.getElementById('pDonateBtn').addEventListener('click', function () {
    donationProcesess('mainBalance', 'pBalanceBtn', 'pinputAmount', 'Caring for the Innocent: Support Palestinian Youth', 'bg-purple-100');
});


//  thank you and i wish all the best for read my code . have a nice day elder brother. 