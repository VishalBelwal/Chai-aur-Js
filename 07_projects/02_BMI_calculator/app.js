const form = document.querySelector('form')
//agar height ko bhar rakhenge to jaise h page reload hogi waisee hi empty spase aa jayegi uske andar

//form ko submit karne ke baad wo server ke pas jata hai use aisa karna se rokna hoga
form.addEventListener('submit', function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {    //agar height number me convertable hogi to answer true mil jayega
        results.innerHTML = `Please give a valid height ${height}`
    }

    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`
    }

    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        //show the result of bmi
        
        switch (bmi) {
          case bmi < "18.6":
            results.innerHTML = `<span>your bmi is ${bmi} and you are UnderWeight</span>`;
            break;

          case "18.6" < bmi < "24.9":
            results.innerHTML = `<span>your bmi is ${bmi} and you are in Normal Range</span>`;
            break;

          case bmi > "24.9":
            results.innerHTML = `<span>your bmi is ${bmi} and you are OverWeight</span>`;
            break;

          default:
            results.innerHTML = `<span>${bmi}</span>`;
            break;
        }
    }

    
});