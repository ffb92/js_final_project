// Class fighter definiert.
export class Fighter {
  constructor(name, health, stamina, staminaGain, skills, counter) {
    this.name = name;
    this.health = health;
    this.stamina = stamina;
    this.staminaGain = staminaGain;
    this.skills = skills;
  }
  // learnAttackSill pusht einen neuen Skill in das Array skills.
  learnAttackSkill(newskill) {
    this.skills.push(newskill);
  }
  // Den Status des Kämpfers anzeigen.
  showStatus() {
    console.log(`
    Name: ${this.name}
    Health: ${this.health}
    Stamina: ${this.stamina}
    `);
  }
  // staminaGain wird auf stamina addiert.
  getStamina() {
    this.stamina += this.staminaGain;
  }
  // prüfen ob genug Stamina vorhanden ist.
  hasEnoughStamina() {
    return this.stamina > this.skills[0].staminaCost;
  }
  // prüfen ob der Kämpfer noch lebt.
  isAlive() {
    return this.health > 0;
  }
  // Attackfunction
  // skillName und Gegner wird übergeben.
  attack(skillName, opponent) {
    // skill wird aus dem Array skills gesucht.
    let skill = this.skills.find((s) => s.attack === skillName);
    // Wenn skill vorhanden und genug Stamina vorhanden ist, wird attack ausgeführt.
    if (skill && this.hasEnoughStamina()) {
      // stamina wird abgezogen und health des Gegners.
      this.stamina -= skill.staminaCost;
      opponent.health -= skill.damage;
      // Ausgabe des Angriffs.
      console.log(
        `${this.name} attacks ${opponent.name} with ${skill.attack} for ${skill.damage} damage`
      );
      // Ausgabe des Status des Gegners.
      return this.showStatus();
    } else {
      // Wenn nicht genug Stamina vorhanden ist, wird diese Meldung ausgegeben.
      console.log(
        `${this.name} does not have enough stamina to use ${skill.attack}`
      );
    }
  }
}

// class AttackSkill definiert.
export class AttackSkill {
  constructor(attack, staminaCost, damage) {
    this.attack = attack;
    this.staminaCost = staminaCost;
    this.damage = damage;
  }
}
