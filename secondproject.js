const forms = document.querySelector('form');


forms.addEventListener('submit',function(e){
  e.preventDefault()
  const heights = parseInt(document.querySelector('#height').value);
  const weights = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#result');

  if (heights === '' || heights < 0 || isNaN(heights)){
    results.innerHTML = `please input valid ${heights}`;
  } else if(weights === '' || weights < 0 || isNaN(weights))  {
    results.innerHTML = `please input valid ${weights}`
  }else{
    const bmi = (weights/(heights*heights/10000)).toFixed(2); 
    results.innerHTML = `<span>${bmi}</span>`
  }
})