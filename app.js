import readlineSync from "readline-sync";
import { Fighter } from "./data/classes.js";
import { AttackSkill } from "./data/classes.js";
import {
  fightMenuTemplate,
  mainMenuTemplate,
  AttackMenuTemplate,
  introTemplate,
  vegetaTemplate,
  pikachuTemplate,
  madaraTemplate,
  soraTemplate,
  cloudTemplate,
  winnerTemplate,
} from "./data/templates.js";

let chosenFighter = {};
let opponentFighter = {};

// Create fighters
let vegeta = new Fighter("Vegeta", 100, 1000, 10, [], 10);
let pikachu = new Fighter("Pikachu", 10, 100, 10, [], 10);
let madara = new Fighter("Madara", 10, 100, 10, [], 10);
let sora = new Fighter("Sora", 10, 100, 10, [], 10);
let cloud = new Fighter("Cloud", 100, 100, 10, [], 10);

// Create attack skills
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

function atLeastOneOpponentAlive() {
  return (
    vegeta.isAlive() ||
    pikachu.isAlive() ||
    madara.isAlive() ||
    sora.isAlive() ||
    cloud.isAlive()
  );
}

// --------------------------------------------- Select fighter ---------------------------------------------
function selectFighter() {
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

  let fighter = readlineSync.question("Choose your fighter: ");
  switch (fighter) {
    case "1":
      chosenFighter = vegeta;
      console.log("You chose Vegeta");
      // Anzeigen aller verfügbaren Angriffe von Vegeta
      console.log("Available attacks:");
      vegeta.skills.forEach((attack, index) => {
        console.log(
          `${index + 1}. ${attack.attack} - Damage: ${attack.damage}`
        );
      });
      startBattle();
      break;
    case "2":
      chosenFighter = pikachu;
      console.log("You chose Pikachu");
      // Anzeigen aller verfügbaren Angriffe von Pikachu
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
      console.log("You chose Madara");
      // Anzeigen aller verfügbaren Angriffe von Madara
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
      console.log("You chose Sora");
      // Anzeigen aller verfügbaren Angriffe von Sora
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
      console.log("You chose Cloud");
      // Anzeigen aller verfügbaren Angriffe von Cloud
      console.log("Available attacks:");
      cloud.skills.forEach((attack, index) => {
        console.log(
          `${index + 1}. ${attack.attack} - Damage: ${attack.damage}`
        );
      });
      startBattle();
      break;
    default:
      console.log("Invalid input");
      selectFighter();
  }
}

// --------------------------------------------- Select opponent ---------------------------------------------
function selectOpponent(chosenFighter) {
  const aliveOpponents = [];
  if (vegeta.isAlive() && vegeta !== chosenFighter) aliveOpponents.push(vegeta);
  if (pikachu.isAlive() && pikachu !== chosenFighter)
    aliveOpponents.push(pikachu);
  if (madara.isAlive() && madara !== chosenFighter) aliveOpponents.push(madara);
  if (sora.isAlive() && sora !== chosenFighter) aliveOpponents.push(sora);
  if (cloud.isAlive() && cloud !== chosenFighter) aliveOpponents.push(cloud);

  if (aliveOpponents.length === 0) {
    console.log(winnerTemplate);
    process.exit(0);
  }

  const randomIndex = Math.floor(Math.random() * aliveOpponents.length);
  return aliveOpponents[randomIndex];
}

// --------------------------------------------- Perform opponent attack ---------------------------------------------

function performOpponentAttack() {
  // Zufällige Auswahl eines Angriffs des Gegners
  const randomIndex = Math.floor(Math.random() * opponentFighter.skills.length);
  const randomAttack = opponentFighter.skills[randomIndex].attack;

  // Gegner führt den zufällig gewählten Angriff aus
  opponentFighter.attack(randomAttack, chosenFighter);

  // Überprüfen, ob der Spielerkämpfer noch lebt
  if (!chosenFighter.isAlive()) {
    console.log(`${chosenFighter.name} has been defeated! Game over.`);
    process.exit(0); // Das Spiel beenden
  } else {
    console.log(
      `${chosenFighter.name} now has ${chosenFighter.health} health remaining.`
    );
  }
}

// --------------------------------------------- Perform attack ---------------------------------------------
function performAttack() {
  while (chosenFighter.isAlive() && opponentFighter.isAlive()) {
    // Überprüfen, ob ein Spielerkämpfer und ein Gegner ausgewählt wurden
    if (!chosenFighter.name || !opponentFighter.name) {
      console.log("You need to select both a fighter and an opponent first!");
      startBattle();
      return;
    }

    // Menü für die Auswahl der Attacke anzeigen
    const attackMenu = AttackMenuTemplate(chosenFighter);
    const selectedOption = readlineSync.question(attackMenu);
    if (selectedOption.toUpperCase() === "B") {
      startBattle(); // Zurück zum Hauptmenü
      return;
    }

    // Die ausgewählte Attacke aus dem Index extrahieren und den Angriff ausführen
    const index = parseInt(selectedOption) - 1;
    if (index >= 0 && index < chosenFighter.skills.length) {
      const attack = chosenFighter.skills[index].attack;
      chosenFighter.attack(attack, opponentFighter);

      // Gegner überprüfen, ob er besiegt wurde
      if (!opponentFighter.isAlive()) {
        console.log(`${opponentFighter.name} has been defeated!`);
        startBattle(); // Zurück zum Hauptmenü
      } else {
        console.log(
          `${opponentFighter.name} now has ${opponentFighter.health} health remaining.`
        );
        // Gegner greift zurück an
        performOpponentAttack();
      }
    } else {
      console.log("Invalid option. Please select a valid attack.");
      // Das Menü wird erneut angezeigt
    }
  }

  // Überprüfen, wer den Kampf gewonnen hat
  if (chosenFighter.isAlive()) {
    console.log(`${opponentFighter.name} has been defeated!`);
  } else {
    console.log(`${chosenFighter.name} has been defeated!`);
  }

  startBattle(); // Zurück zum Hauptmenü
}

// --------------------------------------------- Start battle ---------------------------------------------
function startBattle() {
  while (atLeastOneOpponentAlive()) {
    const mainMenu = readlineSync.question(mainMenuTemplate);
    console.log(mainMenu);
    switch (mainMenu.toUpperCase()) {
      case "S":
        if (chosenFighter.name) {
          opponentFighter = selectOpponent(chosenFighter);
          console.log(`Random opponent selected: ${opponentFighter.name}`);
          performAttack();
        } else {
          console.log("You need to select a fighter first!");
        }
        break;
      case "F":
        selectFighter();
        break;
      case "Q":
        console.log("The Fight is over. Goodbye!");
        process.exit(0);
      default:
        console.log("Invalid input");
    }
  }

  console.log("All opponents have been defeated! You win!");
  process.exit(0);
}

// ------------------------------------------ Start the program ------------------------------------------

startBattle();
