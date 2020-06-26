// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

  // creo un oggetto che descriva uno studente con le proprieta.
  var studente = {
    "nome": "Giuseppe",
    "cognome": "Rotolo",
    "eta": 32
  };

  // stampo a schermo con il for in tutte le proprieta.
  for(var key in studente) {
    console.log(studente[key]);
  };

  // creo un array di oggetti di studenti
  var studenti = [
      // studente 1
    {
      "nome": "Giuseppe",
      "cognome": "Rotolo",
      "eta": 24
    },
    // studente 2
    {
      "nome": "Pippo",
      "cognome": "Botolo",
      "eta": 26
    },
    // studente 3
    {
      "nome": "Enzo",
      "cognome": "Boldi",
      "eta": 29
    },
  ];

  // ciclo gli elementi e stampo per ognuno il nome e cognome
  for (var i = 0; i < studenti.length; i++) {
    var singoliStudenti = studenti[i];
    console.log(singoliStudenti.nome + " " + singoliStudenti.cognome);


  }

  // con 3 prompt di domande chiedo nome,cognome,eta
  var newNomeUtente = prompt('Inserisci il nome');
  var newCognomeUtente = prompt('Inserisci il cognome');
  var nuovaEtaUtente = parseInt(prompt('Inserisci l eta'));

  // variabile nuovo studente
  var nuovoStudente = {
    "nome": newNomeUtente,
    "cognome": newCognomeUtente,
    "eta": nuovaEtaUtente
  };

  // aggiungo i nuovi dati
  studenti.push(nuovoStudente);

  // verifico se ha pushato correttamente i dati
  console.log(studenti);
