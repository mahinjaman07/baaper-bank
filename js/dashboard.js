document.getElementById('deposit-btn').addEventListener('click',function(){
    const inputDeposit = document.getElementById('input-deposit');
    const inputDepositStr = inputDeposit.value;
    const inputDepositAmount = parseFloat(inputDepositStr)
    if (isNaN(inputDepositAmount)) {
        alert('Please Enter Your Deposit Amount');
        inputDeposit.value='';
        return;
    }
    const depositBalance = document.getElementById('deposit-balance');
    const depositBalanceStr = depositBalance.innerText;
    const depositAmount = parseFloat(depositBalanceStr);

    const currentDepositBalance = inputDepositAmount + depositAmount;
    
    depositBalance.innerText = currentDepositBalance;

    // Update New Balance

    const accountBalance = document.getElementById('my-balance');
    const accountBalanceStr = accountBalance.innerText;
    const balance = parseFloat(accountBalanceStr);

    const currentAccountBalance = inputDepositAmount + balance;

    accountBalance.innerText = currentAccountBalance;
    inputDeposit.value = '';
});

// Withdraw Ammount

document.getElementById('withdraw-btn').addEventListener('click',function(){

    const inputWithdrawAmount = document.getElementById('input-withdraw-amount');
    const inputWithdrawAmountStr = inputWithdrawAmount.value;
    const withdrawAmount = parseFloat(inputWithdrawAmountStr);
    if (isNaN(withdrawAmount)) {
        alert('Please Enter Your Amount');
        inputWithdrawAmount.innerText = '';
        return;
    }
    const myBalance  = document.getElementById('my-balance');
    const myBalanceStr = myBalance.innerText;
    const balance = parseFloat(myBalanceStr);

    if (withdrawAmount > balance) {
        alert('There is not so much money in the account');
        inputWithdrawAmount.value = '';
        return;
    }

    const withdrawBalance = document.getElementById('withdraw-balance');
    const withdrawBalanceStr = withdrawBalance.innerText;
    const withdraw = parseFloat(withdrawBalanceStr);

    const currentWithdrawBalance = withdrawAmount + withdraw;

    withdrawBalance.innerText = currentWithdrawBalance;



    const currentBalance = balance - withdrawAmount;
    myBalance.innerText = currentBalance;
    inputWithdrawAmount.value = '';
})