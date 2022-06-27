// declaraties
console.log("Hallo");
// Deze code bevat plagiaat van mijzelf van vorig jaar.


// Var
// Var is globally scoped en function/locally scoped
// Als je var globally declareerd dan kan je het overal in de pagina gebruiken 
// Als je var in een function declareerd kan je het alleen gebruiken binnen die functie
// Je kan var opnieuw declareren en updaten. Dit betekent ook dat je het perongeluk nog een keer
// kan aanpassen in je code zonder dat die een error geeft.


// Let
// Let is eigenlijk nu de nieuwe voorkeur inplaats van var.
// Let is block scoped, dit betekent dat je er alleen bij kan binnen de brackets.
// binnen de block dus.
// Let lost hiermee het probleem van var op dat je het niet perongeluk opnieuw kan declareren of updaten.


// Const 
// Variabelen die zijn gedeclareerd met const hebben een vaste waarde. 
// Const is ook block scoped, je kan er alleen bij binnen het block waar ze zijn gedeclareerd.
// Je kan const niet opnieuw een waarde geven of updaten.

// De document.querySelector() stuurt het eerste element dat in
// document overeenkomt met de opgegeven selector. 
// Hier maak je alle elementen aan die gekoppeld worden aan een htmlelement zodat ze zichtbaar zijn op de site

const tshirtElement = document.querySelector("#tshirt");
const prijsElement = document.querySelector("#prijs");
const naamTshirtElement = document.querySelector("#naamTshirt");
const beschrijvingTshirtElement = document.querySelector("#beschrijving");


// Een array is perfect voor als je een lijst van artikelen hebt en 1 speciek artikel moet vinden.
// Een array kan heel veel waardes hebben onder 1 naam anders zou je ze allemaal
// appart moeten aanroepen. Het is nu gebruikelijk om een const te gebruiken voor array.
// Array voor de kleuren van de artikelen
const kleuropties = ["zwart", "grijs", "geel", "groen"];



// De methode forEach geeft een callback functie door voor elk element van een array samen met een paar parameters.
// Om door een array te gaan met forEach heb je een callback-functie of anonieme functie nodig.
// De functie wordt voor elk afzonderlijk element van de array uitgevoerd.
// 1. De huidige waarde (vereist) de waarde van de array.
// 2. Het indexnummer (optioneel)
// 3. Array (optioneel) Het array object waartoe het huidige element behoort
// forEach voor de kleuren van de van de artikelen
// Een Arrow Function is geintroduceerd in ES6. Een Arrow Function laat je een functie aanmaken op een cleanere manier dan op
// de normale manier.
kleuropties.forEach ((kleuropties) => {
  const kleuren = document.querySelector(".kleuropties");
  const list = document.createElement("li");
  const image = document.createElement("img");

  // Conditionele statements voor de kleuren

  if (kleuropties == "zwart") {
    image.setAttribute("class", "tshirtoptie");
    image.src = "images/kleurzwart.png";
    image.setAttribute("data-naam", "kleur");
    image.setAttribute("data-waarde", "zwart");
  }   
    else if (kleuropties == "grijs") {
    image.src = "images/kleurgrijs.png"
    image.setAttribute("class", "tshirtoptie");
    image.setAttribute("data-naam", "kleur");
    image.setAttribute("data-waarde", "grijs");
  } 
    else if (kleuropties == "geel") {
    image.src = "images/kleurgeel.png"
    image.setAttribute("class", "tshirtoptie");
    image.setAttribute("data-naam", "kleur");
    image.setAttribute("data-waarde", "geel");
  } 
    else {
    image.src = "images/kleurgroen.png"
    image.setAttribute("class", "tshirtoptie");
    image.setAttribute("data-naam", "kleur");
    image.setAttribute("data-waarde", "groen");
  }
  

  // appendChild() wordt gebruikt om nieuwe knooppunt in te voegen of om een bestaand knooppunt te verplaatsen.
  // De image is het knooppunt die we willen toevoegen aan de list. appendChild() stuurt het child element terug.
  // image toevoegen aan het list item
  list.appendChild(image);


  // De list is het knooppunt die we willen toevoegen aan kleuren. 
  // alle list items koppelen aan de kleuren lijst
  kleuren.appendChild(list);
});







// If/Else
// If/else voert een block code uit als de opgegeven waarde true is. De if/else maakt deel uit van de "conditional statements"
// die worden gebruikt om verschillende acties uit te voeren op basis van verschillende voorwaarden.
// Gebruik else if om een nieuwe condition aan te geven als de vorige false is.

// De afbeeldingen hebben op naam waardoor die hieronder de juiste afbeelding kan laden.
// Elke afbeelding heeft in de naam het soort shirt en de kleur staan waardoor die het hieronder
// met if else de juiste afbeelding laad en de bijbehordende info

function toontshirt() {
    tshirtElement.src = "images/tshirt-"  + tshirt.naam + "-" + tshirt.kleur + ".jpg";
    if (tshirt.naam == 'gogglegraphic') {
        prijsElement.textContent = '€85,00';
        naamTshirtElement.textContent = 'Goggle Graphic';
        beschrijvingTshirtElement.textContent = 'Afgewerkt met een compacte C.P. Dit T-shirt met ronde hals op de borst heeft ook een afbeelding op de achterkant van onze iconische Goggle-capuchon in een rustige print. Gemaakt van onze 30/1 katoenen jersey, voor een middelzware pasvorm die zeer goed ademend blijft.';
    } 
    else if (tshirt.naam == 'tiedye') {
        prijsElement.textContent = '€75,00';
        naamTshirtElement.textContent = 'Tie Dye';
        beschrijvingTshirtElement.textContent = 'Dit T-shirt met ronde hals heeft een constructie met korte mouwen en is afgewerkt met een tie-dye-effect C.P. Bedrijfslogo op de borst. Gemaakt van een fijne 24/1 katoenen jersey, die een zachte en ademende pasvorm biedt, en kledingstuk geverfd voor een verhoogde chromatische diepte en intensiteit in het afgewerkte stuk.';
    } 
    else if (tshirt.naam == 'fleecelogo') {
        prijsElement.textContent = '€135,00';
        naamTshirtElement.textContent = 'Fleece Logo';
        beschrijvingTshirtElement.textContent = 'Deze longsleeve heeft een klassieke ronde halskraag en is compleet met een discrete mouwzak en de C.P. Bedrijfslogo op de borst. Gemaakt van onze diagonale verhoogde fleece, een middelzware loopback-katoenoptie die absoluut comfort combineert met een stevig en slijtvast gevoel.'; 
    } 
    else {
        prijsElement.textContent = '€69,00';
        naamTshirtElement.textContent = 'Tonal Logo';
        beschrijvingTshirtElement.textContent = 'Dit T-shirt met korte mouwen heeft een geribbelde ronde hals en is compleet met de klassieke C.P. Bedrijfslogo op de borst. Gemaakt van onze 30/1 katoenen jersey, voor een middelzware pasvorm die zeer goed ademend blijft.';
    }
}


// Hieronder voeg je voegen de data toe aan de lege bracket
// Je geeft de afbeelding beginwaarde mee
// Dit zorgt ervoor dat je gelijk kan wisselen van kleur en soorten shirts 
// anders laad die de afbeelding niet pas als je een andere kleur kiest
const tshirt = {};
tshirt.naam = 'gogglegraphic';
tshirt.kleur = 'zwart';
toontshirt();



// Hieronder voeg je voor alle opties (kleur en alle verschillende tshirt) een eventlistner toe 
// dat je kan klikken op de afbeeldingen. Het kijkt naar de data die in de html staat naar de naam en 
// waarde. Anders zou je voor elke kleur een aparte functie moeten maken dat als je die kleur kiest dat 
// die dan de juiste afbeelding laad.

const tshirtOptieButtons = document.querySelectorAll('.tshirtoptie');
function verandertshirtOptie() {
    tshirt[this.dataset.naam] = this.dataset.waarde;
    toontshirt();
}
tshirtOptieButtons.forEach((tshirtOptieButtons) => {
    tshirtOptieButtons.addEventListener('click', verandertshirtOptie);
});