// declaraties
console.log("Hallo");

// Hier maak je alle elementen aan die gekoppeld worden aan een htmlelement zodat ze zichtbaar zijn op de site
var tshirtElement = document.querySelector("#tshirt");
var prijsElement = document.querySelector("#prijs");
var naamTshirtElement = document.querySelector("#naamTshirt");
var beschrijvingTshirtElement = document.querySelector("#beschrijving");


// Je geeft de afbeelding beginwaarde mee
// Dit zorgt ervoor dat je gelijk kan wisselen van kleur en soorten shirts 
// anders laad die de afbeelding niet pas als je een andere kleur kiest
var tshirt = {};
tshirt.naam = 'gogglegraphic';
tshirt.kleur = 'zwart';
toontshirt();


// Array voor de kleuren van de artikelen
var kleuropties = ["zwart", "grijs", "geel", "groen"];

//for Loop voor de kleuren van de van de artikelen

for (var i = 0; i < kleuropties.length; i++) {
  var kleuren = document.querySelector(".kleuropties");
  var list = document.createElement("li");
  var image = document.createElement("img");

  // Conditionele statements voor de kleuren

  if (kleuropties[i] == "zwart") {
    image.setAttribute("class", "tshirtoptie");
    image.src = "images/kleurzwart.png";
    image.setAttribute("data-naam", "kleur");
    image.setAttribute("data-waarde", "zwart");
  }   
    else if (kleuropties[i] == "grijs") {
    image.src = "images/kleurgrijs.png"
    image.setAttribute("class", "tshirtoptie");
    image.setAttribute("data-naam", "kleur");
    image.setAttribute("data-waarde", "grijs");
  } 
    else if (kleuropties[i] == "geel") {
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
  
  // image toevoegen aan het list item
  list.appendChild(image);

  // alle list items koppelen aan de kleuren lijst
  kleuren.appendChild(list);
}



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

// Hieronder voeg je voor alle opties (kleur en alle verschillende tshirt) een eventlistner toe 
// dat je kan klikken op de afbeeldingen. Het kijkt naar de data die in de html staat naar de naam en 
// waarde. Anders zou je voor elke kleur een aparte functie moeten maken dat als je die kleur kiest dat 
// die dan de juiste afbeelding laad.

var tshirtOptieKnoppen = document.querySelectorAll('.tshirtoptie');
function verandertshirtOptie() {
    tshirt[this.dataset.naam] = this.dataset.waarde ;
    toontshirt() ;
}
tshirtOptieKnoppen.forEach( (tshirtOptieKnop) => {
    tshirtOptieKnop.addEventListener('click', verandertshirtOptie);
});