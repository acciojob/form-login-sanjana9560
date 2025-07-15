function getFormvalue() {
    event.preventDefault();

    const form = document.getElementById("form1");

    const firstName = form.elements["fname"].value.trim();
    const lastName = form.elements["lname"].value.trim();
