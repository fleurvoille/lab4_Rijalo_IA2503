// ЗАДАНИЕ 1: CLASS ITEM
/**
 * Класс, описывающий предмет в игре
 */
class Item {
    /**
     * Создаёт объект Item
     * @param {string} name - название предмета
     * @param {number} weight - вес предмета
     * @param {string} rarity - редкость предмета
     */
    constructor(name, weight, rarity) {
        this.name = name;
        this.weight = weight;
        this.rarity = rarity;
    }
    /**
     * Возвращает информацию о предмете
     * @returns {string}
     */
    getInfo() {
        return `Item: ${this.name}, Weight: ${this.weight}, Rarity: ${this.rarity}`;
    }
    /**
     * Изменяет вес предмета
     * @param {number} newWeight - новый вес
     */
    setWeight(newWeight) {
        if (newWeight > 0) {
            this.weight = newWeight;
        } else {
            console.log("Weight must be positive");
        }
    }
}

// ЗАДАНИЕ 2: CLASS WEAPON
/**
 * Класс оружия, наследуется от Item
 */
class Weapon extends Item {
    /**
     * Создаёт объект Weapon
     * @param {string} name
     * @param {number} weight
     * @param {string} rarity
     * @param {number} damage
     * @param {number} durability
     */
    constructor(name, weight, rarity, damage, durability) {
        super(name, weight, rarity);
        this.damage = damage;
        this.durability = durability;
    }
    /**
     * Использование оружия (уменьшает прочность)
     */
    use() {
        if (this.durability > 0) {
            this.durability -= 10;
            if (this.durability < 0) this.durability = 0;
        } else {
            console.log("Weapon is broken");
        }
    }
    /**
     * Восстановление прочности оружия
     */
    repair() {
        this.durability = 100;
    }
}


// ЗАДАНИЕ 3: ИСПОЛЬЗОВАНИЕ КЛАССОВ

/**
 * Создание объектов Item
 */
const item1 = new Item("Potion", 1, "common");
const item2 = new Item("Ring", 0.2, "rare");
/**
 * Создание объектов Weapon
 */
const weapon1 = new Weapon("Sword", 5, "rare", 50, 100);
const weapon2 = new Weapon("Bow", 3, "uncommon", 30, 80);
/**
 * Работа с Item
 */
console.log(item1.getInfo());
item1.setWeight(2);
console.log(item1.getInfo());

console.log(item2.getInfo());
/**
 * Работа с Weapon
 */
console.log(weapon1.durability);
weapon1.use();
console.log(weapon1.durability);

weapon2.use();
weapon2.repair();
console.log(weapon2.durability);


// ЗАДАНИЕ 4: ФУНКЦИИ-КОНСТРУКТОРЫ

/**
 * Конструктор Item (функциональный вариант)
 * @param {string} name
 * @param {number} weight
 * @param {string} rarity
 */
function Item(name, weight, rarity) {
    this.name = name;
    this.weight = weight;
    this.rarity = rarity;
}

/**
 * Получение информации о предмете
 * @returns {string}
 */
Item.prototype.getInfo = function () {
    return `Item: ${this.name}, Weight: ${this.weight}, Rarity: ${this.rarity}`;
};

/**
 * Изменение веса предмета
 * @param {number} newWeight
 */
Item.prototype.setWeight = function (newWeight) {
    if (newWeight > 0) {
        this.weight = newWeight;
    } else {
        console.log("Weight must be positive");
    }
};

/**
 * Конструктор Weapon (функциональный вариант)
 * @param {string} name
 * @param {number} weight
 * @param {string} rarity
 * @param {number} damage
 * @param {number} durability
 */
function Weapon(name, weight, rarity, damage, durability) {
    Item.call(this, name, weight, rarity);

    this.damage = damage;
    this.durability = durability;
}

// наследование
Weapon.prototype = Object.create(Item.prototype);
Weapon.prototype.constructor = Weapon;

/**
 * Использование оружия
 */
Weapon.prototype.use = function () {
    if (this.durability > 0) {
        this.durability -= 10;
        if (this.durability < 0) this.durability = 0;
    } else {
        console.log("Weapon is broken");
    }
};

/**
 * Починка оружия
 */
Weapon.prototype.repair = function () {
    this.durability = 100;
};


// ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ (ЗАДАНИЕ 4)
const sword = new Item("Steel Sword", 3.5, "rare");
console.log(sword.getInfo());
sword.setWeight(4.0);

const bow = new Weapon("Longbow", 2.0, "uncommon", 15, 100);
console.log(bow.getInfo());
bow.use();
console.log(bow.durability);
bow.repair();
