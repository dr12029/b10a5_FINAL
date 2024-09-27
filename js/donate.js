// donation for noakhali
document.getElementById('donate-noakhali').addEventListener('click', function(event){
    event.preventDefault();

    const donationAmountNoakhali = getInputFieldValueById('donation-amount-noakhali');

    if(isNaN(donationAmountNoakhali)){
        alert('Enter Valid Amount');
    };

    if(donationAmountNoakhali<=0){
        alert('Enter a postitive amount');
        return;
    }

    const balance = getTextFieldValueById('balance')
    if(donationAmountNoakhali > balance){
        alert('Insufficient balance');
        return;
    };

    const newBalance = balance - donationAmountNoakhali;
    document.getElementById('balance').innerText = newBalance;

    const presentDonationAmountNoakhali = getTextFieldValueById('donation-noakhali')
    const totalDonationAmount =  presentDonationAmountNoakhali + donationAmountNoakhali;
    document.getElementById('donation-noakhali').innerText = totalDonationAmount;


    // add history
    const div = document.createElement('div');
    div.classList.add('max-w-[90%]','md:max-w-[50%]', 'border', 'mx-auto', 'my-4')
    div.innerHTML = `
    <h1>${donationAmountNoakhali} Taka is Donated for Donate for Flood at Noakhali, Bangladesh.</h1>
    <p>Date: ${Date()}</p>
    `

    document.getElementById('history-section').appendChild(div);

    document.getElementById('donation-amount-noakhali').value = '';

});



// donation for Feni
document.getElementById('donate-feni').addEventListener('click', function(event){
    event.preventDefault();

    const donationAmountFeni = getInputFieldValueById('donation-amount-feni');

    if(isNaN(donationAmountFeni)){
        alert('Enter Valid Amount');
    };

    if(donationAmountFeni<=0){
        alert('Enter a postitive amount');
        return;
    }

    const balance = getTextFieldValueById('balance')
    if(donationAmountFeni> balance){
        alert('Insufficient balance');
        return;
    };

    const newBalance = balance - donationAmountFeni;
    document.getElementById('balance').innerText = newBalance;

    const presentDonationAmountFeni = getTextFieldValueById('donation-feni')
    const totalDonationAmount =  presentDonationAmountFeni + donationAmountFeni;
    document.getElementById('donation-feni').innerText = totalDonationAmount;


    // add history
    const div = document.createElement('div');
    div.classList.add('max-w-[90%]','md:max-w-[50%]', 'border', 'mx-auto', 'my-4')
    div.innerHTML = `
    <h1>${donationAmountFeni} Taka is Donated for Donate for Flood at Feni, Bangladesh.</h1>
    <p>Date: ${Date()}</p>
    `

    document.getElementById('history-section').appendChild(div);

    document.getElementById('donation-amount-feni').value = '';


});


// donation for Aid
document.getElementById('donate-aid').addEventListener('click', function(event){
    event.preventDefault();

    const donationAmountAid = getInputFieldValueById('donation-amount-aid');

    if(isNaN(donationAmountAid)){
        alert('Enter Valid Amount');
    };

    if(donationAmountAid<=0){
        alert('Enter a postitive amount');
        return;
    }

    const balance = getTextFieldValueById('balance')
    if(donationAmountAid > balance){
        alert('Insufficient balance');
        return;
    };

    const newBalance = balance - donationAmountAid;
    document.getElementById('balance').innerText = newBalance;

    const presentDonationAmountAid = getTextFieldValueById('donation-aid')
    const totalDonationAmount =  presentDonationAmountAid + donationAmountAid;
    document.getElementById('donation-aid').innerText = totalDonationAmount;


    // add history
    const div = document.createElement('div');
    div.classList.add('max-w-[90%]','md:max-w-[50%]', 'border', 'mx-auto', 'my-4')
    div.innerHTML = `
    <h1>${donationAmountAid} Taka is Donated for Donate for Aid, Bangladesh.</h1>
    <p>Date: ${Date()}</p>
    `

    document.getElementById('history-section').appendChild(div);

    document.getElementById('donation-amount-aid').value = '';
});