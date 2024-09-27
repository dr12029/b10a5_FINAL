function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    
    return inputNumber;
}


function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id){
    // hide all the sections
    document.getElementById('donation-section').classList.add('hidden');

    
    document.getElementById('history-section').classList.add('hidden');


    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}

function changeButtonColor(id) {
    // Reset both buttons to white with gray border
    const donationBtn = document.getElementById('show-donation-section');
    const historyBtn = document.getElementById('show-history-section');
    
    donationBtn.style.backgroundColor = 'white';
    donationBtn.style.border = '1px solid gray'; // Apply gray border
    
    historyBtn.style.backgroundColor = 'white';
    historyBtn.style.border = '1px solid gray'; // Apply gray border

    // Change the clicked button to green and remove the gray border
    const clickedButton = document.getElementById(id);
    clickedButton.style.backgroundColor = '#B4F461';
    clickedButton.style.border = 'none'; // Remove border for the active button
}