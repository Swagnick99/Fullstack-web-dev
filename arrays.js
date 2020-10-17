var roster = [];

function addStud(name) {
    roster.push(name);
}

function remStud(name) {
    var pos = roster.indexOf(name);
    if (pos != -1)
        roster.splice(pos, 1);
    else
        alert("Please give a valid name!!");
}

function dispStud() {
    console.log(roster);
}

var reply = prompt("Would you like to start the roster web app? y/n");
if (reply == "y") {
    while (true) {
        var action = prompt("Please select an action: add, remove, display, or quit.");
        if (action == "add") {
            var name = prompt("What name would you like to add?");
            addStud(name);
        }
        else if (action == "remove") {
            var name = prompt("What name would you like to remove?");
            remStud(name);
        }
        else if (action == "display")
            dispStud();
        else if (action == "quit") {
            alert("Thanks for using the Web App! Please refresh the page to start over.");
            break;
        }
    }
}
else
    alert("Thanks for using the Web App! Please refresh the page to start over.");