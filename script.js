function getFormvalue() {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form element
    const form = document.getElementById("form1");

    // Get and trim values of fname and lname
    const firstName = form.elements["fname"].value.trim();
    const lastName = form.elements["lname"].value.trim();
