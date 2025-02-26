//  for add money
 document.getElementById('add-money').addEventListener('click', function(){
    
    document.getElementById('add-money').style.backgroundColor = '#F3F8FE';
    document.getElementById('add-money').style.borderColor = '#0874F2';
    document.getElementById('add-money-h3').style.color = '#0874F2';
    document.getElementById('add-money-h3').style.fontWeight = 'bold';

    
    document.getElementById('add-money-section').style.display = 'block';
  })

//  for cashout
 document.getElementById('cashout').addEventListener('click', function(){
    
    document.getElementById('cashout').style.backgroundColor = '#F3F8FE';
    document.getElementById('cashout').style.borderColor = '#0874F2';
    document.getElementById('cashout-h3').style.color = '#0874F2';
    document.getElementById('cashout-h3').style.fontWeight = 'bold';


    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cashout-section').style.display = 'block';
  })