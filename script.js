const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    value.classList.add('attention');
    document.getElementById('infos').classList.remove('hidden');

    let description = '';
    if (bmi < 18.5) {
        description = 'Cuidado! Voce esta abaixo do peso'
    } else if (bmi <= 25) {
        description = 'Voce esta no peso ideial!';
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi > 25 && bmi <= 30) {
        description = "cuidado! vocé esta com sobrepeso";
    } else if (bmi > 30 && bmi <= 35) {
            description = "cuidado! Voce esta com obesidade moderada";
    }   else if (bmi > 35 && bmi <= 40) {
        description = "cuidado! Voce esta com obesidade severa!";
    }   else {
        description = "CUidado! Vocé está com obesidade morbidal";
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description
})