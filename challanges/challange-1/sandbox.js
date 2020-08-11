const paras = document.querySelectorAll('p');

paras.forEach(p => {
  // textContent -> get all the text regarding if it is hidden or not
  p.textContent.includes('success') && p.classList.add('success');
  p.textContent.includes('error') && p.classList.add('error');
})