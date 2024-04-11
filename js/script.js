"use strict";

// Definisco un array di oggetti

const teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        pic: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        pic: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        pic: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        pic: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        pic: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        pic: "barbara-ramos-graphic-designer.jpg",
    },
];

// Stampo in console le informazioni di ogni team member

// Creo ciclo per scorrere nell'array teamMembers

for (let i = 0; i < teamMembers.length; i++) {
    const currMember = teamMembers[i];

    console.log("- - - - - - - - -");

    // Creo ciclo for in per stampare in console tutte le proprietà di ogni team member

    for (let key in currMember) {
        console.log(currMember[key]);
    };
};