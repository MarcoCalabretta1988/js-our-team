// JS OK

console.log('JS OK');

//! TESTO
/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede e rendere la pagina gradevole (potete usare lo screen in allegato come spunto

*/

//? Creo array dei membri del team

const teamMembers = [
    {
        image : 'wayne-barnett-founder-ceo.jpg',
        name : 'Wayne Barnett',
        role :  'Founder & CEO',
    },
    {
        image : 'angela-caroll-chief-editor.jpg',
        name : 'Angela Carrol',
        role :  'Chief Editor',
    },
    {
        image : 'walter-gordon-office-manager.jpg',
        name : 'Walter Gordon',
        role :  'Office Manager',
    },
    {
        image : 'angela-lopez-social-media-manager.jpg',
        name : 'Angela Lopez',
        role :  'Social Media Manager',
    },
    {
        image : 'scott-estrada-developer.jpg',
        name : 'Scott Estrada',
        role :  'Developer',
    },
    {
        image : 'barbara-ramos-graphic-designer.jpg',
        name : 'Barbara Ramos',
        role :  'Graphic Designer',
    },
];



//? Recupero elementi dal dom

const teamCard = document.getElementById('team-card');

let teamContent = '';
// * Preparo html da inserire nel Dom recuperando i valori dall'array
for( let i = 0 ; i < teamMembers.length ; i++){
    teamContent += `
    <div class="col-4 d-flex flex-column my-4">
    <img src="img/${teamMembers[i].image}" alt="${teamMembers[i].name}">
    <strong>${teamMembers[i].name}</strong>
    <i>${teamMembers[i].role}</i>
  </div>
    `
}

teamCard.innerHTML = teamContent;