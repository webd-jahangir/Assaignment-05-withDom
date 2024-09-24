// Function for navigating to blog and home page 
function moveTopage(page) {
    window.location.href = './' + page;
}

// Target all desired elements for show section and highlight button 
const donationBtn = document.getElementById('donationBtn');
const historyBtn = document.getElementById('historyBtn');
const donationSection = document.getElementById('donationSection');
const historySection = document.getElementById('historySection');

// Common function for showing section and highlighting button 
function showSectionChangeBtn(showSection, activeBtn, inactiveBtn) {
    // Firstly hide all sections 
    donationSection.classList.add('hidden');
    historySection.classList.add('hidden');

    // Show desired section
    showSection.classList.remove('hidden');

    // Change active button background color and border color 
    activeBtn.style.backgroundColor = "#B4F461";
    activeBtn.style.borderColor = "#B4F461";

    // Change inactive button background color and border color 
    inactiveBtn.style.backgroundColor = "white";
    inactiveBtn.style.borderColor = "#E5E7EB";
}

donationBtn.addEventListener('click', function() {
    showSectionChangeBtn(donationSection, donationBtn, historyBtn);
});

historyBtn.addEventListener('click', function() {
    showSectionChangeBtn(historySection, historyBtn, donationBtn);
});



function processOfDonation(mainBalanceId, balanceBtnId, inputAmountId, cardTitle, bgColorClass) {
    const mainBalanceAmount = parseFloat(document.getElementById(mainBalanceId).textContent);
    const balanceBtn = parseFloat(document.getElementById(balanceBtnId).textContent);
    const inputAmount = parseFloat(document.getElementById(inputAmountId).value);

    if (isNaN(inputAmount) || inputAmount <= 0) {
        alert('Please input a valid amount');
        return;
    }
    if (inputAmount > mainBalanceAmount) {
        alert('Your input amount cannot be bigger than the main balance amount');
        return;
    }

    // Update balances
    document.getElementById(mainBalanceId).textContent = mainBalanceAmount - inputAmount;
    document.getElementById(balanceBtn).textContent = balanceBtn + inputAmount;

    // Show modal
    const modal = document.getElementById('my_modal_5');
    modal.showModal();

    // Add transaction to history
    transactionHistory(inputAmount, cardTitle, bgColorClass);
}

function transactionHistory(amount, title, bgColorClass) {
    const dateLocation = Date();
    const transactionDiv = document.createElement('div');
    transactionDiv.className = `p-6 shadow-lg rounded-lg mb-3 ${bgColorClass}`;
    transactionDiv.innerHTML = `
        <p>${amount} tk donated for ${title}</p>
        <p>${dateLocation}</p>`;

    historySection.appendChild(transactionDiv);
}

// Button event listeners for donation buttons
document.getElementById('nDonateBtn').addEventListener('click', function() {
    processOfDonation('mainBalance', 'nbalanceBtn', 'ninputBtn', 'Support Noakhali Flood Relief Efforts, Bangladesh', 'bg-lime-50');
});

document.getElementById('fDonateBtn').addEventListener('click', function() {
    processOfDonation('mainBalance', 'fbalanceBtn', 'finputBtn', 'Support Feni Flood Relief Efforts, Bangladesh', 'bg-gray-100');
});

document.getElementById('qDonateBtn').addEventListener('click', function() {
    processOfDonation('mainBalance', 'qbalanceBtn', 'qinputBtn', 'Support for the Injured in the Quota Movement', 'bg-red-50');
});