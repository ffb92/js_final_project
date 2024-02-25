export class Fighter {
  constructor(name, health, stamina, staminaGain, skills, counter) {
    this.name = name;
    this.health = health;
    this.stamina = stamina;
    this.staminaGain = staminaGain;
    this.skills = skills;
  }
  learnAttackSkill(newskill) {
    this.skills.push(newskill);
  }
  showStatus() {
    console.log(`
    Name: ${this.name}
    Health: ${this.health}
    Stamina: ${this.stamina}
    `);
  }
  getStamina() {
    this.stamina += this.staminaGain;
  }
  hasEnoughStamina() {
    return this.stamina > this.skills[0].staminaCost;
  }
  isAlive() {
    return this.health > 0;
  }
  attack(skillName, opponent) {
    const skill = this.skills.find((s) => s.attack === skillName);
    if (skill && this.hasEnoughStamina()) {
      this.stamina -= skill.staminaCost;
      opponent.health -= skill.damage;
      console.log(
        `${this.name} attacks ${opponent.name} with ${skill.attack} for ${skill.damage} damage`
      );
      return this.showStatus();
    } else {
      console.log(
        `${this.name} does not have enough stamina to use ${skill.attack}`
      );
    }
  }
}

export class AttackSkill {
  constructor(attack, staminaCost, damage) {
    this.attack = attack;
    this.staminaCost = staminaCost;
    this.damage = damage;
  }
}
