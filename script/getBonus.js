document.getElementById('get-bonus-btn').addEventListener('click', function(){
    const value = document.getElementById('coupon').value;
    const mainBalance = getInnerTextById('mainBalance');

    if(value === 'GetBonus100'){
        const newMainBalance = mainBalance + 100;
        setInnerTextByIdAndValue('mainBalance', newMainBalance);
    }
    else if(value === 'GetBonus300'){
        const newMainBalance = mainBalance + 300;
        setInnerTextByIdAndValue('mainBalance', newMainBalance);
    }
    else if(value === 'GetBonus500'){
        const newMainBalance = mainBalance + 500;
        setInnerTextByIdAndValue('mainBalance', newMainBalance);
    }
   else if(value === 'GetBonus1000'){
        const newMainBalance = mainBalance + 1000;
        setInnerTextByIdAndValue('mainBalance', newMainBalance);
    }
    else{
        alert('The given coupon is valid for now');
    }
})