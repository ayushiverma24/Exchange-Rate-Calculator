const currency_one = document.getElementById('currency');
const currency_two = document.getElementById('currency2');
const input_one  = document.getElementById('inputBox1');
const input_two  = document.getElementById('inputBox2')

function calculate(){
    const currencyVal1 = currency_one.value;
    const currencyVal2 = currency_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/b4afa7de36230364c665394b/latest/${currencyVal1}`)
    .then((resp) =>{
        return resp.json();
    } )
    .then(data => console.log(data))
}
currency_one.addEventListener('change', calculate);
currency_two.addEventListener('change', calculate);
input_one.addEventListener('input', calculate);
input_two.addEventListener('input', calculate);

