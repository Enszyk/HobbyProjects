// var passwordNumber = Math.floor((Math.random()*4));
const letter = ['A','Ą','B','C','Ć','D','E','Ę','F','G','H','I','J','K','L','Ł','M','N','Ń','O','Ó','P','Q','R','S','Ś','T','U','V','W','X','Y','Z','Ż','Ź'];
const kategorie = ['Zwierzeta', 'Miasta', 'Przedmioty', 'Przyslowia']
const passwords = ['Konik polny', 'Jelenia góra', 'szkło hartowane', 'Bez pracy nie ma kołaczy']
var password;
var _password_ = "";
var mistake = 0;
var guesses = []

function keyboardInput(event) {
    var x = event.which || event.keyCode;
    x = (String.fromCharCode(x)).toUpperCase();
    x = letter.indexOf(x);
    checkLetter(x);
}

function newGameEnter(event) {
    var x = event.which || event.keyCode;
    if (x===13)
        location.reload()
}

String.prototype.setLetter = function(index, letter)
{
    if(index> this.length-1) return this.toString();
    else return this.substr(0,index) + letter + this.substr(index + 1);
}



startek = () => {
    var contain = ""
    for (i=0; i<kategorie.length; i++)
        contain += '<div id="category" onclick="set_password('+ i +')">'+ kategorie[i] +'</div>';
    document.getElementById("categoriesWelcome").innerHTML = '<div id="categoryW" style="cursor: default; margin-top: 10%; margin-bottom: 10%; font-size: 40px !important;">WYBIERZ KATEGORIE:</div>';
    document.getElementById("categories").innerHTML = contain;
}


set_password = (nr) => {

    password = passwords[nr]
    for (i=0; i<password.length; i++)
    {
    if (password.charAt(i)==" ")
        _password_ += " "
    else 
        _password_ += "-"
    }

    password = password.toUpperCase();
    start()
}


start = () => {
    document.getElementById("categories").style.display = "none";
    document.getElementById("categoriesWelcome").style.display = "none";
    var contain=""
    

    for (i=0; i<=34; i++)
    {
        contain += '<div onclick="checkLetter('+i+')"class="letter" id=let' + i +'>' + letter[i] + '</div>';
        if ((i+1)%7==0)
            contain += '<div style="clear:both;"></div>'
    }
    
    document.getElementById('gallow').innerHTML='<img src="img/s0.jpg">  '
    document.getElementById("alfabet").innerHTML=contain;

    draw_password()
}

draw_password = () => {
    document.getElementById("board").innerHTML = _password_;
}


checkLetter = (nr) => {
    
    var guess = false;

    for (i=0; i<_password_.length; i++)
    {
        if(password.charAt(i) == letter[nr])
        {
            _password_ = _password_.setLetter(i,letter[nr])
            guess = true;
        }
    }

    if (!guesses.includes(nr))
    {
        if (guess)
        {
            document.getElementById("let" + nr).style.background = "#003300";
            document.getElementById("let" + nr).style.color = "#00C000";
            document.getElementById("let" + nr).style.border = "3px solid #00C000";
            document.getElementById("let" + nr).style.cursor = "default";
            draw_password();
        }
        else 
        {
            document.getElementById("let" + nr).style.background = "#330000";
            document.getElementById("let" + nr).style.color = "#C00000";
            document.getElementById("let" + nr).style.border = "3px solid #C00000";
            document.getElementById("let" + nr).style.cursor = "default";
            document.getElementById("let" + nr).setAttribute("onclick",';');

            mistake++;
            document.getElementById("gallow").innerHTML = '<img src="img/s' + mistake + '.jpg">';
        }
    }

    guesses.push(nr);


    // won
    if (password == _password_)
    {
        document.getElementById("alfabet").innerHTML=' Brawo, zgadłeś hasło: <br> <br> <big>' + password + '</big> <br> <br> <span class="resetW" onclick="location.reload()" onkeypress="newGameEnter(event)"> kliknij aby rozpocząć ponownie </span>' 
        document.getElementById("body").setAttribute("onkeypress",'newGameEnter(event)');
    }
        // lose 
    if (mistake >= 9)
    {
        document.getElementById("alfabet").innerHTML=' Pechowo, poprawne hasło to: <br> <br> <big>' + password + '</big> <br> <br> <span class="resetL" onclick="location.reload()" onkeypress="newGameEnter(event)"> kliknij aby rozpocząć ponownie </span>' 
        document.getElementById("body").setAttribute("onkeypress",'newGameEnter(event)');
    }
    
}

window.onload = startek;