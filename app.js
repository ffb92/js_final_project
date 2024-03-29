//? ---------------------------- Import readlinesync & templates ---------------------------
// readlinesync importieren und die verschiedenen Templates importieren.
// Es sind pro js mehrere Templateimporte möglich.
import readlineSync from "readline-sync";
import { Fighter } from "./data/classes.js";
import { AttackSkill } from "./data/classes.js";
import {
  mainMenuTemplate,
  attackMenuTemplate,
  introTemplate,
  vegetaTemplate,
  pikachuTemplate,
  madaraTemplate,
  soraTemplate,
  cloudTemplate,
  winnerTemplate,
  loserTemplate,
  quitTemplate,
} from "./data/templates.js";

//? --------------------------------- initialise & declare variables  ------------------------
// Diese Variablen müssen vorab initialisiert werden, damit sie in den Funktionen verwendet werden können.
let chosenFighter = {};
let opponentFighter = {};

//? ---------------------------- Create fighters and attack skills ----------------------------
// Hier können die Kämpfer und ihre Stats erstellt werden.
// Dies wird über die classes.js gemacht, die die Klassen Fighter und AttackSkill beinhaltet.

// Create fighters
// Am Ende das Array bleibt leer, weil die Attacken später hinzugefügt werden.
// let exampleFighter = new Fighter("Name", health, stamina, staminaGain, []);
let vegeta = new Fighter("Vegeta", 1000, 1000, 30, []);
let pikachu = new Fighter("Pikachu", 100, 100, 10, []);
let madara = new Fighter("Madara", 100, 100, 10, []);
let sora = new Fighter("Sora", 100, 100, 10, []);
let cloud = new Fighter("Cloud", 100, 100, 10, []);

// Create attack skills
// Hier werden die Attacken separat erstellt.
// let exampleAttack = new AttackSkill("Attack", staminaCost, damage);

// Vegeta
let finalFlash = new AttackSkill("Final Flash", 20, 50);
let sphereOfDestruction = new AttackSkill("Sphere of Destruction", 20, 50);
let demonicRush = new AttackSkill("Demonic Rush", 20, 50);
let garlicCanon = new AttackSkill("Garlic Canon", 20, 50);

// Pikachu
let thunderbolt = new AttackSkill("Thunderbolt", 20, 50);
let electroBall = new AttackSkill("Electro Ball", 20, 50);
let thunder = new AttackSkill("Thunder", 20, 50);
let ironWhip = new AttackSkill("Iron Whip", 20, 50);

// Madara
let fireball = new AttackSkill("Fireball", 20, 50);
let susanoo = new AttackSkill("Susanoo", 20, 50);
let amaterasu = new AttackSkill("Amaterasu", 20, 50);
let rinnegan = new AttackSkill("Rinnegan", 20, 50);

// Sora
let keyblade = new AttackSkill("Keyblade", 20, 50);
let vortex = new AttackSkill("Vortex", 20, 50);
let finalStrike = new AttackSkill("Final Strike", 20, 50);
let sonicEnd = new AttackSkill("Sonic End", 20, 50);

// Cloud
let omnislash = new AttackSkill("Omnislash", 20, 50);
let bladeBeam = new AttackSkill("Blade Beam", 20, 50);
let crossSlash = new AttackSkill("Cross Slash", 20, 50);
let braver = new AttackSkill("Braver", 20, 50);

// Learn attack skills
// Hier werden die Attacken den Kämpfern hinzugefügt.
// Die learnAttackSkill function ist in der Fighter Klasse definiert.
// fighter.learnAttackSkill(attackSkill);

// Vegeta
vegeta.learnAttackSkill(finalFlash);
vegeta.learnAttackSkill(sphereOfDestruction);
vegeta.learnAttackSkill(demonicRush);
vegeta.learnAttackSkill(garlicCanon);

// Pikachu
pikachu.learnAttackSkill(thunderbolt);
pikachu.learnAttackSkill(electroBall);
pikachu.learnAttackSkill(thunder);
pikachu.learnAttackSkill(ironWhip);

// Madara
madara.learnAttackSkill(fireball);
madara.learnAttackSkill(susanoo);
madara.learnAttackSkill(amaterasu);
madara.learnAttackSkill(rinnegan);

// Sora
sora.learnAttackSkill(keyblade);
sora.learnAttackSkill(vortex);
sora.learnAttackSkill(finalStrike);
sora.learnAttackSkill(sonicEnd);

// Cloud
cloud.learnAttackSkill(omnislash);
cloud.learnAttackSkill(bladeBeam);
cloud.learnAttackSkill(crossSlash);
cloud.learnAttackSkill(braver);

//? ---------------------------- Small functions ----------------------------

// Clear console
// Diese Funktion löscht die Konsole, sodass das Menü oben steht und der Rest leer ist.
function clearC() {
  console.clear();
}

// At least one opponent alive
// Diese Funktion überprüft, ob mindestens ein Gegner noch lebt.
// Wenn das der Fall ist, wird true zurückgegeben, ansonsten false.
// Das wird in der startBattle function verwendet.
function atLeastOneOpponentAlive() {
  return (
    vegeta.isAlive() ||
    pikachu.isAlive() ||
    madara.isAlive() ||
    sora.isAlive() ||
    cloud.isAlive()
  );
}

//? ---------------------------- Essential functions ----------------------------
//? ---------------------------- Select Fighter ----------------------------

function selectFighter() {
  clearC();
  // Anzeigen aller verfügbaren Kämpfer
  console.log(`1. ${vegeta.name} 
    HP: ${vegeta.health} / Stamina: ${vegeta.stamina} / Stamina Gain: ${vegeta.staminaGain}`);
  console.log(`2. ${pikachu.name}
    HP: ${pikachu.health} / Stamina: ${pikachu.stamina} / Stamina Gain: ${pikachu.staminaGain}`);
  console.log(`3. ${madara.name}
    HP: ${madara.health} / Stamina: ${madara.stamina} / Stamina Gain: ${madara.staminaGain}`);
  console.log(`4. ${sora.name}
    HP: ${sora.health} / Stamina: ${sora.stamina} / Stamina Gain: ${sora.staminaGain}`);
  console.log(`5. ${cloud.name}
    HP: ${cloud.health} / Stamina: ${cloud.stamina} / Stamina Gain: ${cloud.staminaGain}`);

  // Auswahl des Kämpfers
  let fighter = readlineSync.question("Choose your fighter: ");
  // Mit switch case wird der ausgewählte Kämpfer ausgewählt.
  // Innerhalb der () wird der ausgewählte Kämpfer übergeben.
  switch (fighter) {
    case "1":
      chosenFighter = vegeta;
      clearC();
      // Ausgeben des ausgewählten Kämpfers mit dem Template.
      console.log(vegetaTemplate);
      console.log("You chose Vegeta");
      // Ausgeben aller verfügbaren Attacken des Kämpfers.
      console.log("Available attacks:");
      // Mit forEach wird durch das Array der Attackem iteriert.
      // Die Attacken wurden über attackSkill erstellt.
      // Dabei wird der Index und die Attacke ausgegeben.
      // index +1, damit nicht bei 0 angefangen wird.
      vegeta.skills.forEach((attack, index) => {
        console.log(
          `${index + 1}. ${attack.attack} - Damage: ${attack.damage}`
        );
      });
      // startBattle wieder aufrufen, um nach der Auswahl in das Hauptmenü zu gelangen.
      startBattle();
      break;
    case "2":
      chosenFighter = pikachu;
      clearC();
      console.log(pikachuTemplate);
      console.log("You chose Pikachu");
      console.log("Available attacks:");
      pikachu.skills.forEach((attack, index) => {
        console.log(
          `${index + 1}. ${attack.attack} - Damage: ${attack.damage}`
        );
      });
      startBattle();
      break;
    case "3":
      chosenFighter = madara;
      clearC();
      console.log(madaraTemplate);
      console.log("You chose Madara");
      console.log("Available attacks:");
      madara.skills.forEach((attack, index) => {
        console.log(
          `${index + 1}. ${attack.attack} - Damage: ${attack.damage}`
        );
      });
      startBattle();
      break;
    case "4":
      chosenFighter = sora;
      clearC();
      console.log(soraTemplate);
      console.log("You chose Sora");
      console.log("Available attacks:");
      sora.skills.forEach((attack, index) => {
        console.log(
          `${index + 1}. ${attack.attack} - Damage: ${attack.damage}`
        );
      });
      startBattle();
      break;
    case "5":
      chosenFighter = cloud;
      clearC();
      console.log(cloudTemplate);
      console.log("You chose Cloud");
      console.log("Available attacks:");
      cloud.skills.forEach((attack, index) => {
        console.log(
          `${index + 1}. ${attack.attack} - Damage: ${attack.damage}`
        );
      });
      startBattle();
      break;
    default:
      clearC();
      // Wenn keine gültige Eingabe erfolgt, wird das ausgegeben.
      console.log("Invalid input");
  }
}

//? --------------------------------------------- Select opponent ---------------------------------------------
// Diese Funktion wählt einen zufälligen Gegner aus, der noch lebt und nicht der ausgewählte Kämpfer ist.
function selectOpponent(chosenFighter) {
  // Variable initialisieren, um die lebenden Gegner zu speichern
  let aliveOpponents = [];
  // Überprüfen, ob der Gegner lebt und nicht der ausgewählte Kämpfer ist
  // Wichtig, weil sonst der ausgewählte Kämpfer gegen sich selbst kämpfen würde und "besiegte" Gegner wieder auftauchen würden.
  // Die Gegner werden in das Array aliveOpponents gepusht, wenn Bedingung erfüllt.
  if (vegeta.isAlive() && vegeta !== chosenFighter) aliveOpponents.push(vegeta);
  if (pikachu.isAlive() && pikachu !== chosenFighter)
    aliveOpponents.push(pikachu);
  if (madara.isAlive() && madara !== chosenFighter) aliveOpponents.push(madara);
  if (sora.isAlive() && sora !== chosenFighter) aliveOpponents.push(sora);
  if (cloud.isAlive() && cloud !== chosenFighter) aliveOpponents.push(cloud);
  // Überprüfen, ob es noch lebende Gegner gibt
  // aliveOpponents.length gibt die Anzahl der lebenden Gegner zurück und wenn Sie 0 ist, wird das Spiel beendet.
  if (aliveOpponents.length === 0) {
    clearC();
    console.log(winnerTemplate);
    // Damit das Spiel beendet wird, sonst entsteht eine Fehlermeldung.
    process.exit(0);
  }
  // Zufällige Auswahl eines lebenden Gegners, damit nicht immer der gleiche Gegner ausgewählt wird.
  // Math.random gibt eine zufällige Zahl.
  // Math.floor rundet die Zahl ab.
  // aliveOpponents.length gibt die Anzahl der lebenden Gegner zurück.
  // Das Ergebnis wird in die Variable randomIndex gespeichert.
  let randomIndex = Math.floor(Math.random() * aliveOpponents.length);
  return aliveOpponents[randomIndex];
}

//? --------------------------------------------- Perform opponent attack ---------------------------------------------
// Davor definieren, weil die function in performAttack verwendet wird.

function performOpponentAttack() {
  // Zufällige Attack des Gegners auswählen.
  // Math.random wieder zufällige Zahl und floor rundet ab.
  let randomIndex = Math.floor(Math.random() * opponentFighter.skills.length);
  let randomAttack = opponentFighter.skills[randomIndex].attack;

  // Gegner führt den zufällig gewählten Angriff aus.
  opponentFighter.attack(randomAttack, chosenFighter);

  // Überprüfen, ob der gewählte Kämpfer besiegt wurde und den Status anzeigen.
  if (!chosenFighter.isAlive()) {
    chosenFighter.showStatus();
    // Ausgabe mit Template und dem Namen des Kämpfers.
    console.log(loserTemplate);
    console.log(`${chosenFighter.name} has been defeated! Game over.`);
    // Das Spiel beenden.
    process.exit(0);
  } else {
    // Ansonsten verbleibende Leben anzeigen.
    console.log(
      `${chosenFighter.name} now has ${chosenFighter.health} health remaining.`
    );
  }
}

//? --------------------------------------------- Perform attack ---------------------------------------------
function performAttack() {
  //
  while (chosenFighter.isAlive() && opponentFighter.isAlive()) {
    // Überprüfen, ob kein Kämpfer und ein Gegner ausgewählt wurden, bevor man in das Kampfmenü gelangt.
    if (!chosenFighter.name || !opponentFighter.name) {
      clearC();
      // Kämpfer nicht ausgewählt, zurück zum Hauptmenü.
      startBattle();
      return;
    }
    // Menü für die Auswahl der Attacke anzeigen.
    const attackMenu = attackMenuTemplate(chosenFighter);
    let selectedOption = readlineSync.question(attackMenu);
    // Zurück zum Hauptmenü.
    if (selectedOption.toUpperCase() === "B") {
      startBattle();
      return;
    }
    // Die ausgewählte Attacke aus dem Index extrahieren und den Angriff ausführen
    //parseInt, um den Index/Eingabe in eine Nummer zu konvertieren.
    // -1, weil die Eingabe bei 1 anfängt und der Index bei 0.
    let index = parseInt(selectedOption) - 1;
    // Überprüfen, ob die Eingabe gültig ist und innerhalb der Arraylänge liegt.
    if (index >= 0 && index < chosenFighter.skills.length) {
      // Gewählte Attacke ausführen.
      let attack = chosenFighter.skills[index].attack;
      chosenFighter.attack(attack, opponentFighter);
      // Gegner überprüfen, ob er besiegt wurde und den Status anzeigen.
      // Wenn der Gegner besiegt wurde, wird das Menü erneut angezeigt.
      if (!opponentFighter.isAlive()) {
        opponentFighter.showStatus();
        console.log(`${opponentFighter.name} has been defeated!`);
        startBattle();
      } else {
        // Ansonsten verbleibende Leben anzeigen.
        console.log(
          `${opponentFighter.name} now has ${opponentFighter.health} health remaining.`
        );
        // Gegner greift zurück an.
        performOpponentAttack();
      }
      // Wenn die Eingabe nicht innerhalb des Index ist, wird das Menü erneut angezeigt.
    } else {
      clearC();
      console.log("Invalid option. Please select a valid attack.");
    }
  }
  // Überprüfen, wer den Kampf gewonnen hat
  if (chosenFighter.isAlive()) {
    clearC();
    console.log(`${opponentFighter.name} has been defeated!`);
  } else {
    clearC();
    console.log(`${chosenFighter.name} has been defeated!`);
  }
  startBattle();
}

//? ---------------------------- Main Battle function ----------------------------
//? ---------------------------- Start Battle ----------------------------
// Diese Funktion startet das Programm und führt das Hauptmenü aus.
// Intro anzeigen zum Start.
console.log(introTemplate);
function startBattle() {
  // while Loop, solange mindestens ein Gegner lebt, wird das Hauptmenü angezeigt.
  while (atLeastOneOpponentAlive()) {
    // Hauptmenü anzeigen und Eingabe abfragen.
    const mainMenu = readlineSync.question(mainMenuTemplate);
    clearC();
    console.log(mainMenu);
    // Mit switch Eingabe prüfen und entsprechend ausführen.
    switch (mainMenu.toUpperCase()) {
      case "S":
        // Überprüfen ob ein Kämpfer ausgewählt wurde.
        // Wenn ja, wird der zufällige Gegner über die function definiert.
        // Anschließend wird die performAttack function ausgeführt.
        // Wenn nicht, dann Meldung ausgeben.
        if (chosenFighter.name) {
          opponentFighter = selectOpponent(chosenFighter);
          console.log(`Random opponent selected: ${opponentFighter.name}`);
          performAttack();
        } else {
          clearC();
          console.log("You need to select a fighter first!");
        }
        break;
      case "F":
        // Kämpferauswahl Menü anzeigen.
        selectFighter();
        break;
      case "Q":
        clearC();
        // Quit Template anzeigen und das Programm beenden.
        console.log(quitTemplate);
        process.exit(0);
      default:
        // Wenn die Eingabe ungültig ist, Meldung ausgeben.
        clearC();
        console.log("Invalid input");
    }
  }
  return;
}

// ------------------------------------------ Start the program ------------------------------------------

startBattle();
