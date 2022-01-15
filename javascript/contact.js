function myFunction() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var division = document.getElementById("division").value;
    var subject = document.getElementById("subject").value;

    if (name == "" || name == null) {
        alert("Enter Name");
    }
    else if (email == "" || email == null) {
        alert("Enter Email");
    }
    else if (division == "--Select Division--") {
        alert("Enter Division");
    }
    else if (subject == "" || subject == null) {
        alert("Enter Something!");
    }
    else {
        alert("Hello, " + name + "\nwith Email:" + email + "\nFrom: " + division + "\nYour Message:\n" + subject + "\n\nYour Response is SUCCESSFUL! Thank You for Being with ME!");
    }
}