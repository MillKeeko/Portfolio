//  This page holds and fills all strings for the website.
//  Both the constant strings and their filling functions 
//  are divided by section for easier modification.

//  Main Page
const pageTitle = "WA Portfolio";
const contentTitle = "Portfolio";
const myName = "William Anderson";
const bio = "I have been developing software since 2021. I have completed 2 years of Software Engineering Technology at Conestoga College, and I graduated from the University of Waterloo with a Bachelor of Arts in Economics in 2018.";
document.getElementById("pageTitle").textContent = pageTitle;
document.getElementById("contentTitle").textContent = contentTitle;
document.getElementById("myName").textContent = myName;
document.getElementById("bio").textContent = bio;

//  Project Categories
const desc = "Description: "
const cat1 = "Group Members: "
const cat2 = "Technologies: "
const cat3 = "Line Count: "
document.getElementsByName("desc").forEach(function(element, i) {
    element.textContent = desc;
})
document.getElementsByName("cat1").forEach(function(element, i) {
    element.textContent = cat1;
})
document.getElementsByName("cat2").forEach(function(element, i) {
    element.textContent = cat2;
})
document.getElementsByName("cat3").forEach(function(element, i) {
    element.textContent = cat3;
})


//  Subject 1
const sub1 = "Linux System Programming";
const sub1proj1 = "Chat-System";
const sub1proj2 = "Histogram";
document.getElementById("sub1").textContent = sub1;
document.getElementById("sub1proj1").textContent = sub1proj1;
document.getElementById("sub1proj2").textContent = sub1proj2;

//  Subject 2
const sub2 = "Network Application Development";
const sub2proj1 = "File Transfer Protocol";
document.getElementById("sub2").textContent = sub2;
document.getElementById("sub2proj1").textContent = sub2proj1;

//  Subject 3
const sub3 = "Mobile Application Development";
const sub3proj1 = "Great Canadian Trip Planner";
document.getElementById("sub3").textContent = sub3;
document.getElementById("sub3proj1").textContent = sub3proj1;

//  Subject 4
const sub4 = "Microprocessors and Embedded Systems";
const sub4proj1 = "Watchdog and Blinking LEDs";
document.getElementById("sub4").textContent = sub4;
document.getElementById("sub4proj1").textContent = sub4proj1;

//  Subject 5
const sub5 = "Windows Development";
const sub5proj1 = "Hi-Lo Game";
document.getElementById("sub5").textContent = sub5;
document.getElementById("sub5proj1").textContent = sub5proj1;

//  Subject 6
const sub6 = "Software Quality";
const sub6proj1 = "Transport Management System";
document.getElementById("sub6").textContent = sub6;
document.getElementById("sub6proj1").textContent = sub6proj1;


