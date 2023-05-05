//  This page holds and fills all strings for the website.

//  Main Page
const pageTitle = "WA Portfolio";
const contentTitle = "Project Portfolio";
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

//  Project Info Headers
const techs = "Tools";
const group = "Programmers";
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
const proj1Tech1 = "ANSI C";
const proj1Tech2 = "Gedit";
const proj1Tech3 = "Linux Ubuntu";
const proj1Concept1 = "Multi-Threading"; 
const proj1Concept2 = "TCP/IP";
const proj1Concept3 = "Shared Memory";
const proj1Concept4 = "Semaphores";
const proj1Member1 = "William Anderson";
const proj1Member2 = "Jesse Rutledge";
const proj1Desc1 = "A chat-server that can handle up to 10 linux chat-clients, written in ANSI C. The server receives text messages from clients and rebroadcasts them to all other connected clients. Chat-clients have a UI that displays the last 10 messages, and a separate bottom window for outgoing messages.";
const proj1Desc2 = "The chat-server keeps track of data for each client, who can come and go in any order. The server shuts off when all clients have disconnected from the chat-system.";
document.getElementById("proj1Tech1").textContent = proj1Tech1;
document.getElementById("proj1Tech2").textContent = proj1Tech2;
document.getElementById("proj1Tech3").textContent = proj1Tech3;
document.getElementById("proj1Concept1").textContent = proj1Concept1;
document.getElementById("proj1Concept2").textContent = proj1Concept2;
document.getElementById("proj1Concept3").textContent = proj1Concept3;
document.getElementById("proj1Concept4").textContent = proj1Concept4;
document.getElementById("proj1Member1").textContent = proj1Member1;
document.getElementById("proj1Member2").textContent = proj1Member2;
document.getElementById("proj1Desc1").textContent += proj1Desc1;
document.getElementById("proj1Desc2").textContent += proj1Desc2;

//  Project 2 
const proj2Tech1 = "ANSI C";
const proj2Tech2 = "Gedit";
const proj2Tech3 = "Linux Ubuntu";
const proj2Concept1 = "Task Management";
const proj2Concept2 = "Shared Memory";
const proj2Concept3 = "Semaphores";
const proj2Member1 = "William Anderson";
const proj2Member2 = "Addison Phillips";
const proj2Desc1 = "A program which forks into three processes which create a histogram, written in ANSI C. The first two processes write random letters to a 256-byte circular buffer in shared memory. The third process reads the circular buffer and updates a histogram showing the amount of each letter it has read. The program will keep writing, reading, and updating the histogram until the user stops it.";
const proj2Desc2 = "Signals are used to communicate between the three processes. The user kills the third process which sends a signal to the first two to end. An alarm signal is also used every two seconds to tell the third process to read from the circular buffer.";
document.getElementById("proj2Tech1").textContent = proj2Tech1;
document.getElementById("proj2Tech2").textContent = proj2Tech2;
document.getElementById("proj2Tech3").textContent = proj2Tech3;
document.getElementById("proj2Concept1").textContent = proj2Concept1;
document.getElementById("proj2Concept2").textContent = proj2Concept2;
document.getElementById("proj2Concept3").textContent = proj2Concept3;
document.getElementById("proj2Member1").textContent = proj2Member1;
document.getElementById("proj2Member2").textContent = proj2Member2;
document.getElementById("proj2Desc1").textContent += proj2Desc1;
document.getElementById("proj2Desc2").textContent += proj2Desc2;

//  Project 3 
const proj3Tech1 = "C++";
const proj3Tech2 = "Visual Studio";
const proj3Tech3 = "MD5";
const proj3Concept1 = "UDP";
const proj3Concept2 = "Metadata";
const proj3Concept3 = "Hash Checksum";
const proj3Concept4 = "Signals";
const proj3Desc = "A program which allows the user to send a file (ASCII or binary) over an open-source \"reliable\" UDP. The program reads the file, packages the data into individual packets, sends the packets to the client, and saves the completed file. An MD5 hash, another open-source project, is generated and used as a checksum to ensure the file was received and ordered accurately.";
const proj3Member1 = "William Anderson";
const proj3Member2 = "Addison Phillips";
document.getElementById("proj3Tech1").textContent = proj3Tech1;
document.getElementById("proj3Tech2").textContent = proj3Tech2;
document.getElementById("proj3Tech3").textContent = proj3Tech3;
document.getElementById("proj3Concept1").textContent = proj3Concept1;
document.getElementById("proj3Concept2").textContent = proj3Concept2;
document.getElementById("proj3Concept3").textContent = proj3Concept3;
document.getElementById("proj3Member1").textContent = proj3Member1;
document.getElementById("proj3Member2").textContent = proj3Member2;
document.getElementById("proj3Desc").textContent += proj3Desc;

//  Project 4 
const proj4Tech1 = "Java";
const proj4Tech2 = "XML";
const proj4Tech3 = "Android Studio";
const proj4Tech4 = "SQLite";
const proj4Tech5 = "Node.js JSON Server";
const proj4Concept1 = "Asynchronous Tasks";
const proj4Concept2 = "Local Database";
const proj4Concept3 = "API Communication";
const proj4Concept4 = "Broadcast Receivers";
const proj4Concept5 = "Android Notifications";
const proj4Member1 = "William Anderson";
const proj4Member2 = "Jennifer Fritz";
const proj4Member3 = "Addison Phillips";
const proj4Desc1 = "An android application made over the course of three months that walks the user through booking a trip in Canada. The user navigates multiple screens to enter and confirm details about the trip from a preset list of cities. The trip details are then saved in a SQLite database.";
const proj4Desc2 = "JSON data for local activities at the trip destination city are pulled from a node.js server. If the user selects an activity a Google Maps api will show its location on the map. The user can then select activities for their trip which are subsequently saved into the local database. The user can make notes about the trip which will also be saved to the database.";
const proj4Desc3 = "Notifications are sent to the android device through the use of a broadcastReceiver. When the phone boots up a notification is sent alerting the user about the closest trip currently booked in the database. A second notification is sent whenever a new trip is created.";
document.getElementById("proj4Tech1").textContent = proj4Tech1;
document.getElementById("proj4Tech2").textContent = proj4Tech2;
document.getElementById("proj4Tech3").textContent = proj4Tech3;
document.getElementById("proj4Tech4").textContent = proj4Tech4;
document.getElementById("proj4Tech5").textContent = proj4Tech5;
document.getElementById("proj4Concept1").textContent = proj4Concept1;
document.getElementById("proj4Concept2").textContent = proj4Concept2;
document.getElementById("proj4Concept3").textContent = proj4Concept3;
document.getElementById("proj4Concept4").textContent = proj4Concept4;
document.getElementById("proj4Concept5").textContent = proj4Concept5;
document.getElementById("proj4Member1").textContent = proj4Member1;
document.getElementById("proj4Member2").textContent = proj4Member2;
document.getElementById("proj4Member3").textContent = proj4Member3;
document.getElementById("proj4Desc1").textContent += proj4Desc1;
document.getElementById("proj4Desc2").textContent += proj4Desc2;
document.getElementById("proj4Desc3").textContent += proj4Desc3;

//  Project 5 
const proj5Tech1 = "Arm Assembly";
const proj5Tech2 = "C";
const proj5Tech3 = "Visual Studio Code";
const proj5Tech4 = "Linux Ubuntu";
const proj5Tech5 = "STM32F3 Microcontroller";
const proj5Concept1 = "Watchdog Timer";
const proj5Concept2 = "System Tick";
const proj5Concept3 = "Direct Memory Access";
const proj5Member1 = "William Anderson";
const proj5Desc1 = "This program was written using a linux VM and a STM32 Microcontroller. A C \"hook\" file is used to structure the command line interface, process command line arguments, and call the main assembly function. This function calls subsequent assembly functions which perform the tasks for the program.";
const proj5Desc2 = "Eight LED lights blink repeatedly, programmed within the system tick timer. If no button is pressed by the user, the watchdog function refreshes. If the button is pressed, the LEDs keep blinking until the watchdog timer runs out and the program ends.";
document.getElementById("proj5Tech1").textContent = proj5Tech1;
document.getElementById("proj5Tech2").textContent = proj5Tech2;
document.getElementById("proj5Tech3").textContent = proj5Tech3;
document.getElementById("proj5Tech4").textContent = proj5Tech4;
document.getElementById("proj5Tech5").textContent = proj5Tech5;
document.getElementById("proj5Concept1").textContent = proj5Concept1;
document.getElementById("proj5Concept2").textContent = proj5Concept2;
document.getElementById("proj5Concept3").textContent = proj5Concept3;
document.getElementById("proj5Member1").textContent = proj5Member1;
document.getElementById("proj5Desc1").textContent += proj5Desc1;
document.getElementById("proj5Desc2").textContent += proj5Desc2;

//  Project 6 
const proj6Tech1 = "C#";
const proj6Tech2 = "WPF";
const proj6Tech3 = "Visual Studio";
const proj6Tech4 = "Azure VM";
const proj6Concept1 = "TCP/IP";
const proj6Concept2 = "Multi-Threading";
const proj6Concept3 = "Windows Services";
const proj6Concept4 = "Cloud Computing";
const proj6Member1 = "William Anderson";
const proj6Desc1 = "A Hi-Lo game server which can support multiple clients playing the game at the same time. The server is a console program written in C# with no output. It is ran as a backround windows service on an Azure virtual machine.";
const proj6Desc2 = "The client program is also written in C# but uses WPF for a user interface. The server generates a random number and the client tries to guess the number. If the user is wrong, the range decreases and they must guess again. This continues until the user guesses correctly, then they have the option to play again.";
document.getElementById("proj6Tech1").textContent = proj6Tech1;
document.getElementById("proj6Tech2").textContent = proj6Tech2;
document.getElementById("proj6Tech3").textContent = proj6Tech3;
document.getElementById("proj6Tech4").textContent = proj6Tech4;
document.getElementById("proj6Concept1").textContent = proj6Concept1;
document.getElementById("proj6Concept2").textContent = proj6Concept2;
document.getElementById("proj6Concept3").textContent = proj6Concept3;
document.getElementById("proj6Concept4").textContent = proj6Concept4;
document.getElementById("proj6Member1").textContent = proj6Member1;
document.getElementById("proj6Desc1").textContent += proj6Desc1;
document.getElementById("proj6Desc2").textContent += proj6Desc2;

