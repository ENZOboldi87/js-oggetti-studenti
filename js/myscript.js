$(document).ready(function() {
  // creo un oggetto che descriva uno studente con le proprieta
  var studente = {
    "nome": "giuseppe",
    "cognome": "rotolo",
    "eta": 32
  };
  // stampo i singoli elementi con il metodo 'punto'
  console.log('stampo il nome ' + studente.nome);
  console.log(studente.nome);
  console.log('stampo il cognome ' + studente.cognome);
  console.log('stampo l eta ' + studente.eta);

  // stampo i singoli elementi con il secondo metodo
  console.log('stampo il nome ' + studente['nome']);
  console.log(studente['nome']);
  console.log('stampo il cognome ' + studente['cognome']);
  console.log('stampo l eta ' + studente['eta']);







  // stampo a schermo con un ciclo for tutte le proprieta
  // for (var i = 0; i < studente.length; i++) {
  //   console.log(studente.cognome);
  // }

});
