document.addEventListener("DOMContentLoaded", function () {
    var div1 = document.createElement('div');
    
    // var headerText = document.createTextNode("the headerContainer is working");// this creates the variable to test headerContainer's functionality

    div1.className = "header-container";// this line assigns a classname of "header-container" to headerContainer

    document.body.appendChild(div1);// this line pulls div1 into the body of the html
    
    var headerContainer = document.getElementsByClassName("header-container");
    // headerContainer[0].appendChild(headerText);// this puts text in headerContainer to ensure it is working
    
    var h1 = document.createElement('h1');
    var h1Text = document.createTextNode("This is an h1");

    h1.appendChild(h1Text);//this adds the h1Text to h1
    headerContainer[0].appendChild(h1);//this creates the h1 in the 'header-container' `div`

    var h2 = document.createElement('h2')
    var h2Text = document.createTextNode("This is an h2")

    
});