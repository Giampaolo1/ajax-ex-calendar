// https://docs.google.com/document/d/1OcSGrT3Snh_DXrDZ82DVY59eqvzNb_Nh_Db5z3qq2_k/edit

// DESCRIZIONE:
// https://docs.google.com/document/d/1OcSGrT3Snh_DXrDZ82DVY59eqvzNb_Nh_Db5z3qq2_k/edit
// Per oggi però “solo” MIlestone:
// stampare gennaio 2018 (E SOLO QUELLO) con caratterizzazione delle relative festività, recuperate interrogando l’API
//  STEP:
// Controllare quanti giorni ha il mese  formando così una lista;
// Chiedere all’api quali sono le festività per il mese ;
// Evidenziare le festività nella lista

// NIK RECAP -----------------------------------------------------------------------------

// //Ottengo una data formattata del momento in cui si esegue questa riga
// var date = moment().format('DD/MM/YYYY');
//
// //Ottengo una data formattata : 02/02/2018
// var date = moment('2018-02-02').format('DD/MM/YYYY');
//
// //Ottengo una data interpretata male di moment : 02 Marzo 2018
// var date = moment('03/02/2018').format('DD MMMM YYYY');
//
// //Quando succede questo è importante "spiegare" a moment che formato abbiamo usato e come lo intendiamo
// var date = moment('03/02/2018', 'DD/MM/YYYY').format('DD/MM/YYYY');
//
// //Prendo il nome del mese : Marzo
// var name = moment(3, 'M').format('MMMM');
//
// //Ottengo il numero di giorni di quello specifico mese
// var numeroDiGiorni = moment('01/01/2018', 'DD/MM/YYYY').daysInMonth();
//
// //Eseguo un ciclo per creare ciascun giorno del mese nel mio html
// for(var i = 1; i <= numeroDiGiorni; i++) {
//
//         //Strutturo la data simile alla chiamata ajax
//         var currentDate = moment('2018-01-'+i, 'YYYY-MM-D').format('YYYY-MM-DD');
//
//         //Uso quella data per prendere le informazioni di quel giorno : numero e nome del giorno
//         var currentDay = moment(currentDate).format('DD dddd');
//
//         //Inserisco nell'html il mio div con attributo per eventuali selettori e la relativa data formattata
//         $('.content').append('<div data-date="'+currentDate+'">'+currentDay+'</div>')
//     }


// MILESTONE1 -------------------------------------------------------------------

// Stampare gennaio 2018 (E SOLO QUELLO) con caratterizzazione delle relative festività,
// recuperate interrogando l’API

//  STEP:
// Controllare quanti giorni ha il mese formando così una lista.
// Chiedere all’api quali sono le festività per il mese.
// Evidenziare le festività nella lista.




$(document).ready(function() {

	// Stampare gennaio 2018 (E SOLO QUELLO) usando moment
  var numeroDiGiorni = moment('01/01/2018', 'DD/MM/YYYY').daysInMonth();
  console.log(numeroDiGiorni);

    //Eseguo un ciclo per creare ciascun giorno del mese nel mio html
    for(var i = 1; i <= numeroDiGiorni; i++) {

      //Strutturo la data simile alla chiamata ajax
      var currentDate = moment('2018-01-'+i, 'YYYY-MM-D').format('YYYY-MM-DD');

      //Uso quella data per prendere le informazioni di quel giorno : numero e nome del giorno
      var currentDay = moment(currentDate).format('DD dddd');

    // Inserisco nell'html il mio div con attributo per eventuali selettori e la relativa data formattata
    $('.content').append('<div data-date="'+currentDate+'">'+currentDay+'</div>')
  }

  // PARTE STAMPA CALENDARIO (END)-------------------------------------------

  // PARTE API






});
