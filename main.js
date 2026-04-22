
// задание 4
// Item 
function Item(name, weight, rarity) {
    this.name = name;
    this.weight = weight;
    this.rarity = rarity;
}

// методы через prototype
Item.prototype.getInfo = function () {
    return `Item: ${this.name}, Weight: ${this.weight}, Rarity: ${this.rarity}`;
};

Item.prototype.setWeight = function (newWeight) {
    if (newWeight > 0) {
        this.weight = newWeight;
    } 
    else {
        console.log("Weight must be positive");
    }
};

//Weapon 
function Weapon(name, weight, rarity, damage, durability) {
    // вызов родителя
    Item.call(this, name, weight, rarity);

    this.damage = damage;
    this.durability = durability;
}

// наследование
Weapon.prototype = Object.create(Item.prototype);
Weapon.prototype.constructor = Weapon;

// методы Weapon
Weapon.prototype.use = function () {
    if (this.durability > 0) {
        this.durability -= 10;
        if (this.durability < 0) this.durability = 0;
    } 
    else {
        console.log("Weapon is broken");
    }
};

Weapon.prototype.repair = function () {
    this.durability = 100;
};

// номер 4
// создание объектов
const item1 = new Item("Potion", 1, "common");
const weapon1 = new Weapon("Sword", 5, "rare", 50, 100);

// вызов методов
console.log(item1.getInfo());
item1.setWeight(2);

weapon1.use();
console.log(weapon1.durability);

// использование опциональной цепочки
console.log(weapon1.enchant?.level); // свойства нет → undefined
console.log(item1.owner?.name);