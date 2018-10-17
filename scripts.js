// new div
document.addEventListener("DOMContentLoaded", function() {
    var headerContainer = document.createElement('div');
    // var headerText = document.createTextNode("the headerContainer is working"); this creates the variable to test headerContainer's functionality
    
    // this line assigns a classname of "header-container" to headerContainer
    headerContainer.className = "header-container";
    
    // this line pulls headerContainer into the body of the html
    document.body.appendChild(headerContainer);
    
    // document.body.appendChild(headerText); this puts text in headerContainer to ensure it is working


});