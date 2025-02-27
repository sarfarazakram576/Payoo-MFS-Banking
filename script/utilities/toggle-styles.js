//  for add money
document.getElementById("add-money").addEventListener("click", function () {
    handleToggleBgAndBcStyles('add-money', '#0874F2');
    handleToggleColorAndFwStyles('add-money-h3', "#F3F8FE")

    handleToggleBgAndBcStyles('cashout', '')
    handleToggleColorAndFwStyles('cashout-h3', '')

    handleToggleBgAndBcStyles('transfer-money', '')
    handleToggleColorAndFwStyles('transfer-money-h3', '')
    
  });

//  for cashout
document.getElementById("add-money").addEventListener("click", function () {
    handleToggleBgAndBcStyles('add-money', '');
    handleToggleColorAndFwStyles('add-money-h3', "")

    handleToggleBgAndBcStyles('cashout', '#0874F2')
    handleToggleColorAndFwStyles('cashout-h3', '#F3F8FE')

    handleToggleBgAndBcStyles('transfer-money', '')
    handleToggleColorAndFwStyles('transfer-money-h3', '')
    
  });

//  for tranfer 
document.getElementById("add-money").addEventListener("click", function () {
    handleToggleBgAndBcStyles('add-money', '');
    handleToggleColorAndFwStyles('add-money-h3', "")

    handleToggleBgAndBcStyles('cashout', '')
    handleToggleColorAndFwStyles('cashout-h3', '')

    handleToggleBgAndBcStyles('transfer-money', '#0874F2')
    handleToggleColorAndFwStyles('transfer-money-h3', '#F3F8FE')
    
  });

//  for get bonus 
document.getElementById("get-bonus").addEventListener("click", function () {
    handleToggleBgAndBcStyles('add-money', '');
    handleToggleColorAndFwStyles('add-money-h3', "")

    handleToggleBgAndBcStyles('cashout', '')
    handleToggleColorAndFwStyles('cashout-h3', '')

    handleToggleBgAndBcStyles('transfer-money', '')
    handleToggleColorAndFwStyles('transfer-money-h3', '')

    handleToggleBgAndBcStyles('get-bonus', '#0874F2')
    handleToggleColorAndFwStyles('get-bonus-h3', '#F3F8FE')
    
  });

//  for pay bill
document.getElementById("pay-bill").addEventListener("click", function () {
    handleToggleBgAndBcStyles('add-money', '');
    handleToggleColorAndFwStyles('add-money-h3', "")

    handleToggleBgAndBcStyles('cashout', '')
    handleToggleColorAndFwStyles('cashout-h3', '')

    handleToggleBgAndBcStyles('transfer-money', '')
    handleToggleColorAndFwStyles('transfer-money-h3', '')

    handleToggleBgAndBcStyles('get-bonus', '')
    handleToggleColorAndFwStyles('get-bonus-h3', '')

    handleToggleBgAndBcStyles('pay-bill', '#0874F2')
    handleToggleColorAndFwStyles('pay-bill-h3', '#F3F8FE')
    
  });



function handleToggleBgAndBcStyles(id){
    document.getElementById(id).style.backgroundColor = '#F3F8FE';
    document.getElementById(id).style.borderColor = '#0874F2';
}
function handleToggleColorAndFwStyles(id){
    document.getElementById(id).style.color = '#0874F2';
    document.getElementById(id).style.fontWeight = 'bold';
}