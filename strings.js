//  This page holds and fills all strings for the website.

//  Main Page
const pageTitle = "WA Portfolio";
const contentTitle = "Portfolio";
const myName = "William Anderson";
const bio = "I have been developing software since 2021. I have completed 2 years of Software Engineering Technology at Conestoga College, and I graduated from the University of Waterloo with a Bachelor of Arts in Economics in 2018.";
document.getElementById("pageTitle").textContent = pageTitle;
document.getElementById("contentTitle").textContent = contentTitle;
document.getElementById("myName").textContent = myName;


//  Project Titles
const proj1 = "Chat System";
const proj2 = "Histogram";
const proj3 = "File Transfer Protocol";
const proj4 = "Great Canadian Trip Planner";
const proj5 = "Watchdog and Blinking LEDs";
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

// Section Titles
const schoolProjects = "School Projects";
document.getElementById("schoolProjects").textContent = schoolProjects;
