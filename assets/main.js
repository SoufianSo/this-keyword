//Aufgabe1
console.log("%c Aufgabe1", "color:red");
let person = {
  vorname: "Anton",
  nachname: "Fish",
  fullName: function () {
    return this.vorname + " " + this.nachname;
  },
};
console.log(person.fullName());
//Aufgabe2
console.log("%c Aufgabe2", "color:red");
let persone = {
  vorname: "Anton",
  nachname: "Fish",
  alter: 34,
  familienstand: "ledig",
  groesse: "178cm",
  profil: function () {
    return `
        <p> Vorname: ${this.vorname}</p>
        <p> Nachname: ${this.nachname}</p>
        <p> Alter: ${this.alter}</p>
        <p> Familienstand: ${this.familienstand}</p>
        <p> Größe: ${this.groesse}</p>
        `;
  },
};

document.getElementById("persone").innerHTML = persone.profil();
//Aufgabe3
console.log("%c Aufgabe3", "color:red");

document.addEventListener("DOMContentLoaded", function () {
  let personex = {
    vorname: "Anton",
    nachname: "Fish",
    alter: 34,
    familienstand: "ledig",
    groesse: "178cm",
    profil: function () {
      return `
            <p> Vorname: ${this.vorname}</p>
            <p> Nachname: ${this.nachname}</p>
            <p> Alter: ${this.alter}</p>
            <p> Familienstand: ${this.familienstand}</p>
            <p> Größe: ${this.groesse}</p>
            `;
    },
  };

  document.getElementById("personex").innerHTML = personex.profil();
});
//Aufgabe4
console.log("%c Aufgabe4", "color:red");

let name = "Canyon";
let obj1 = { name: "Merida", fahrrad: fahrrad };
let obj2 = { name: "Scott", fahrrad: fahrrad };

function fahrrad() {
  console.log(this.name);
}

fahrrad();
obj1.fahrrad();
obj2.fahrrad();
