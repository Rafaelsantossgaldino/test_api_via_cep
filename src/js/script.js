function searchAdress(){
  let zip_code = document.querySelector('#zip_code').value;
  
  if (zip_code.length !== 8 ){
    alert('CEP Invalido Verifique...!');
    return;
  }
  
  let url = `https://viacep.com.br/ws/${zip_code}/json`;

  fetch(url).then(function(response){
    console.log(response)
  });
}
