function showEmail(e) {
    var email = "";
    email += "eric";
    email += ".mitchell";
    email += "@cs";
    email += ".stanf";
    email += "ord.edu";
    email = "<a href=\"mailto:" + email + "\">" + email + "</a>";
    document.getElementById("emailLabel").innerHTML = email;
    return false;
}
