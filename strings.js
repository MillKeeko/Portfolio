//  This page holds and fills all strings for the website.

//  Main Page
const pageTitle = "WA Portfolio";
const contentTitle = "Portfolio";
const myName = "William Anderson";
document.getElementById("pageTitle").textContent = pageTitle;
document.getElementById("contentTitle").textContent = contentTitle;
document.getElementById("myName").textContent = myName;

//  Project Titles
const proj1 = "Chat System";
const proj2 = "Histogram";
const proj3 = "File Transfer Protocol";
const proj4 = "Great Canadian Trip Planner";
const proj5 = "Watchdog and LEDs";
const proj6 = "Hi-Lo Game";
const proj7 = "Transport Management System";
const proj1Elements = document.getElementsByName("proj1");
const proj2Elements = document.getElementsByName("proj2");
const proj3Elements = document.getElementsByName("proj3");
const proj4Elements = document.getElementsByName("proj4");
const proj5Elements = document.getElementsByName("proj5");
const proj6Elements = document.getElementsByName("proj6");
const proj7Elements = document.getElementsByName("proj7");
for (let i=0; i<proj1Elements.length; i++) {
    proj1Elements[i].textContent = proj1;
}
for (let i=0; i<proj2Elements.length; i++) {
    proj2Elements[i].textContent = proj2;
}
for (let i=0; i<proj3Elements.length; i++) {
    proj3Elements[i].textContent = proj3;
}
for (let i=0; i<proj4Elements.length; i++) {
    proj4Elements[i].textContent = proj4;
}
for (let i=0; i<proj5Elements.length; i++) {
    proj5Elements[i].textContent = proj5;
}
for (let i=0; i<proj6Elements.length; i++) {
    proj6Elements[i].textContent = proj6;
}
for (let i=0; i<proj7Elements.length; i++) {
    proj7Elements[i].textContent = proj7;
}

//  Section Titles
const projects = "Browse Projects";
document.getElementById("projects").textContent = projects;

//  Project Info Headers
const techs = "Technologies";
const group = "Group Members";
const desc = "Description";
const concepts = "Concepts";
const techsElements = document.getElementsByName("techs");
const groupElements = document.getElementsByName("group");
const descElements = document.getElementsByName("desc");
const conceptsElements = document.getElementsByName("concepts");
for (let i=0; i<techsElements.length; i++) {
    techsElements[i].textContent = techs;
}
for (let i=0; i<groupElements.length; i++) {
    groupElements[i].textContent = group;
}
for (let i=0; i<descElements.length; i++) {
    descElements[i].textContent = desc;
}
for (let i=0; i<conceptsElements.length; i++) {
    conceptsElements[i].textContent = concepts;
}

//  Project 1 
const proj1Tech1 = "C";
const proj1Tech2 = "Linux";
const proj1Member1 = "Jesse Rutledge"
document.getElementById("proj1Tech1").textContent = proj1Tech1;
document.getElementById("proj1Tech2").textContent = proj1Tech2;
document.getElementById("proj1Member1").textContent = proj1Member1;

//  Project 2 
const proj2Tech1 = "C";
const proj2Tech2 = "Linux";
const proj2Member1 = "Addison Phillips"
document.getElementById("proj2Tech1").textContent = proj2Tech1;
document.getElementById("proj2Tech2").textContent = proj2Tech2;
document.getElementById("proj2Member1").textContent = proj2Member1;

//  Project 3 
const proj3Tech1 = "C++";
const proj3Tech2 = "Visual Studio";
const proj3Member1 = "Addison Phillips"
document.getElementById("proj3Tech1").textContent = proj3Tech1;
document.getElementById("proj3Tech2").textContent = proj3Tech2;
document.getElementById("proj3Member1").textContent = proj3Member1;

//  Project 4 
const proj4Tech1 = "Java";
const proj4Tech2 = "Android Studio";
const proj4Member1 = "Jennifer Fritz"
const proj4Member2 = "Addison Phillips"
document.getElementById("proj4Tech1").textContent = proj4Tech1;
document.getElementById("proj4Tech2").textContent = proj4Tech2;
document.getElementById("proj4Member1").textContent = proj4Member1;
document.getElementById("proj4Member2").textContent = proj4Member2;

//  Project 5 
const proj5Tech1 = "C";
const proj5Tech2 = "Assembly";
const proj5Member1 = "N/A";
document.getElementById("proj5Tech1").textContent = proj5Tech1;
document.getElementById("proj5Tech2").textContent = proj5Tech2;
document.getElementById("proj5Member1").textContent = proj5Member1;


//  Project 6 
const proj6Tech1 = "C#";
const proj6Tech2 = "WPF";
const proj6Tech3 = "Visual Studio";
const proj6Member1 = "N/A";
document.getElementById("proj6Tech1").textContent = proj6Tech1;
document.getElementById("proj6Tech2").textContent = proj6Tech2;
document.getElementById("proj6Tech3").textContent = proj6Tech3;
document.getElementById("proj6Member1").textContent = proj6Member1;

//  Project 7 
const proj7Tech1 = "C#";
const proj7Tech2 = "MySQL";
const proj7Tech3 = "WPF";
const proj7Tech4 = "Visual Studio";
const proj7Member1 = "Addison Phillips";
const proj7Member2 = "Derek Owusu-Addai";
const proj7Member3 = "Isaac Ribeiro Leao";
document.getElementById("proj7Tech1").textContent = proj7Tech1;
document.getElementById("proj7Tech2").textContent = proj7Tech2;
document.getElementById("proj7Tech3").textContent = proj7Tech3;
document.getElementById("proj7Tech4").textContent = proj7Tech4;
document.getElementById("proj7Member1").textContent = proj7Member1;
document.getElementById("proj7Member2").textContent = proj7Member2;
document.getElementById("proj7Member3").textContent = proj7Member3;