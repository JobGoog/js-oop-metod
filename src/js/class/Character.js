export default class Character {
    constructor(name, type) {
      const allowedTypes = ['Bowman', 'Swordman', 'Magician', 'Demon', 'Undead', 'Zombie'];
  
      if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
        throw new Error('Имя должно быть длиной от 2 до 10 символов');
      }
      if (!allowedTypes.includes(type)) {
        throw new Error('Такой класс не доступен в этой версии');
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = undefined;
      this.defence = undefined;
    }
  }
  