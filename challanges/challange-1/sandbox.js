const pars = document.querySelectorAll('p');

pars.forEach(par => {
  par.innerText.includes('success') && par.classList.add('success');
  par.innerText.includes('error') && par.classList.add('error');
})