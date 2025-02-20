
//       function AjouterPay() {
//     const paysInput = document.getElementById('c5');
//     const paysList = document.getElementById('lepays');

//     const nouveauPays = paysInput.value.trim(); // Récupère le pays ajouté

//     // Vérifie si l'input n'est pas vide et si le pays n'est pas déjà dans la liste
//     const paysExistants = Array.from(paysList.getElementsByTagName('li')).map(li => li.textContent);
    
//     if (nouveauPays && !paysExistants.includes(nouveauPays)) {
//         const li = document.createElement('li'); // Crée un nouvel élément de liste
//         li.textContent = nouveauPays; // Définit le texte de l'élément
//         paysList.appendChild(li); // Ajoute l'élément à la liste

//         paysInput.value = ''; // Réinitialise le champ d'entrée
//     } else {
//         alert('Ce pays est déjà ajouté ou le champ est vide.');
//     }
// }
    

const formulaire = document.getElementById("form");
const nom = document.getElementById("c1");
const erreurnom = document.getElementById("t2");
const adresse = document.getElementById("c2");
const erreuradresse = document.getElementById("t3");
formulaire.addEventListener("submit", e => {
    e.preventDefault();


    verifierformulaire();
})

const setErreur = (element, message) =>{
    element.innerText = message;
    element.classList.add("erreur");
}

const setSucess = element => {
    element.innerText = ""
    element.classList.remove("erreur");
}


const verifierformulaire = () => {
    const nomvaleur = nom.value.trim();
    if( nomvaleur.length < 8 || nomvaleur.length >20){
        nom.style.border = "2px solid red"
        setErreur(erreurnom, "idiot rempli bien ton nom");
    }else{
            nom.style.border = "2px solid green"
            setSucess(erreurnom);
    }
    const adressevaleur = adresse.value.trim();
    if( adressevaleur.length < 20){
        adresse.style.border = "2px solid red"
        setErreur(erreuradresse, "idiot rempli bien ton adresse");
    }else{
            adresse.style.border = "2px solid green"
            setSucess(erreuradresse);
    }

}


nom.addEventListener("input", verifierformulaire);
adresse.addEventListener("input", verifierformulaire);