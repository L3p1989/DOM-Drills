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

    var h2 = document.createElement('h2');
    var h2Text = document.createTextNode("This is an h2");

    h2.appendChild(h2Text);//this adds text to h2
    headerContainer[0].appendChild(h2);//this adds h2 to headerContainer

    var h3 = document.createElement('h3');
    var h3Text = document.createTextNode("This is an h3");

    h3.appendChild(h3Text);//this adds text to h3
    headerContainer[0].appendChild(h3);//this adds h3 to headerContainer

    var h4 = document.createElement('h4');
    var h4Text = document.createTextNode("This is an h4");

    h4.appendChild(h4Text);//this adds text to h4
    headerContainer[0].appendChild(h4);//this adds h4 to headerContainer

    var h5 = document.createElement('h5');
    var h5Text = document.createTextNode("This is an h5");

    h5.appendChild(h5Text);//this adds text to h5
    headerContainer[0].appendChild(h5);//this adds h5 to headerContainer

    var h6 = document.createElement('h6');
    var h6Text = document.createTextNode("This is an h6");

    h6.appendChild(h6Text);//this adds text to h6
    headerContainer[0].appendChild(h6);//this adds h6 to headerContainer

    h1.className = 'h1';
    h2.className = 'h2';
    h3.className = 'h3';     //h1-6 classnames
    h4.className = 'h4';
    h5.className = 'h5';
    h6.className = 'h6';

    function randomColor() {
        var colorArray = ['green', 'purple', 'orange', 'red', 'blue', 'yellow', 'black', 'aqua'];
        var randomizer = Math.floor((Math.random() * colorArray.length));
        return colorArray[randomizer];
    };  //this function will allow you to change the color of anything randomly between all listed colors

    headerContainer[0].addEventListener('dblclick', headerClick, false);

    function headerClick(e) {
        if (e.target !== e.currentTarget) {
            e.target.style.color = randomColor()
        };// children can be clicked but not parent, add color

    };

    var ol = document.createElement('ol');
    document.body.appendChild(ol); //this adds an ol to the body

    var btn = document.getElementsByClassName('list-btn');

    var liNum = 1;

    btn[0].addEventListener('click', function () {

        var li = document.createElement('li');
        var liText = document.createTextNode('this is list item ' + liNum);

        liNum++;//this is the number counter for `li` items
        li.append(liText);//appends each li with `liText`
        ol.appendChild(li);//adds li to ol

        ol.addEventListener('click', liClick, false);

        function liClick(e) {
            if (e.target !== e.currentTarget) {
                e.target.style.color = randomColor()
            };

        };

        li.addEventListener('dblclick', function(e) {
            ol.removeChild(e.target)
        });
    });
});