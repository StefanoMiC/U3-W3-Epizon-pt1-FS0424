// Questo sarà il nostro primo Reducer!
// doverà essere una funzione PURA che prenderà lo STATO CORRENTE dall'applicazione nel momento in cui viene "risvegliato" (eseguito dopo una dispatch)
// e prenderà anche una ACTION che gli verrà inviata attraverso la dispatch dal nostro componente o UI

// a questo punto con STATO CORRENTE e ACTION genererà il NUOVO STATO GLOBALE, il nuovo stato del nostro Store.

// OGNI VOLTA che verrà risvegliato avrà bisogno di leggere dalla nostra action il suo TYPE (per questo è obbligatorio) e un'eventuale PAYLOAD

// da dove cominciare quindi? magari creando la condizione di stato iniziale per il nostro Store:

const initialState = {
  cart: {
    content: [] // iniziamo con un array vuoto perché content riceverà un array dal nostro reducer
  },
  bookSelected: {
    createdAt: "08/07/2024 11:00:00",
    content: null // iniziamo con null perché content riceverà un oggetto
  }
};

// questo stato iniziale è quello che si genera automaticamente ad ogni refresh del browser (è la condizione iniziale dell'app)
// potremo modificarlo solamente in maniera IMMUTABILE - creando SEMPRE un NUOVO OGGETTO nella sua interezza, partendo dallo stato precedente,
// insieme ai dati nuovi derivanti da un payload della nostra ACTION.

// il reducer è una funzione PURA e quindi non modifica/manipola MAI i suoi parametri direttamente (state, action), li leggerà solamente!
// e in base alle operazioni matematiche prevedibili, computerà il NUOVO STATO di ritorno dalla stessa funzione.
// questo stato ritornato è DI FATTO il nuovo STORE AGGIORNATO!

// per il primo avvio e per il primo soltato ci dobbiamo preoccupare di attribuire un valore di default al parametro state altrimenti
// sarà undefined di default, rompendo tutto il resto del codice
// !!! non possiamo permettere che il nostro reducer ritorni un undefined come nuovo stato !!!
const mainReducer = (state = initialState, action) => {
  // da questa funzione, IN OGNI CASO o SITUAZIONE, si dovrà PER FORZA ritornare UN NUOVO STATO, o quanto meno quello precedente o default.
  // bisogna evitare a tutti i costi di non avere un return di un qualche stato (oggetto), avendo il default case che torna lo stato precedente
  // ci proteggiamo dall'eventualità che il nuovo valore di stato diventi undefined, conseguentemente rompendo il flusso di Redux!

  switch (action.type) {
    case "SELECT_BOOK":
      return {
        ...state,
        bookSelected: {
          ...state.bookSelected,
          content: action.payload
        }
      };

    default:
      return state;
  }
};

export default mainReducer;
