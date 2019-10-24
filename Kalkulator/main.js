var globalNumber = "";
var memoryNumber = "";

var calcOperation = false;
var numOperation = 0;
var dzielnik
var counter


printNumber = () => {
    document.getElementById('result').innerHTML = '<span>' + globalNumber + '</span>';
    if (globalNumber=="MathError" || globalNumber=="ToBig")
        globalNumber="";
}

deleteLastNumber = () => {
    globalNumber = globalNumber.substr(0,globalNumber.length-1); 
    printNumber();
}

changePlusMinus = () => {
    if (calcOperation)
    {
        memoryNumber = Number(globalNumber);
        deleteNumber()
    }

    calcOperation = false;

    if (globalNumber=='-')
        globalNumber = "";
    else if (globalNumber.length > 0)
    {
        globalNumber = Number(globalNumber);
        globalNumber *= -1;
        globalNumber = globalNumber.toString();
    }
    else 
        globalNumber= '-'
    
    printNumber();
}

squareRoot = () =>{
    globalNumber = globalNumber.toString();
    if (globalNumber.length > 0 && !globalNumber.includes('-'))
    {
        globalNumber = Math.sqrt(Number(globalNumber));
        checkLength()
    }
    else 
        globalNumber = "MathError";
    printNumber();
    
}

addNumber = (char) => {

    if (calcOperation)
    {
        memoryNumber = Number(globalNumber);
        deleteNumber()
    }

    calcOperation = false;

    if (globalNumber.length < 10)
        if (char!=='.')
            globalNumber += char;
        else if (!globalNumber.includes('.') && globalNumber!='')
            globalNumber += char; 

    printNumber();
}


deleteNumber = () => {
    globalNumber = ""
    printNumber();
}

calculateThings = (char) => {
    if (char=='-' && (globalNumber=="" || globalNumber=="-"))
        changePlusMinus();
    else
    {
        counter = true;
        calcOperation = true;
        numOperation = char;
    }
}

equalitySign = () => {
    
    globalNumber = Number(globalNumber)
    memoryNumber = Number(memoryNumber)


    if (globalNumber!=='' && memoryNumber!=='')
        {
            if (counter)
            {
                dzielnik = globalNumber;
                globalNumber = memoryNumber;
            }

            if (numOperation=='/')
            {
                if (dzielnik===0)
                    globalNumber = "MathError";
                
                else 
                {
                    globalNumber = globalNumber / dzielnik;
                    counter = false;
                }
                checkLength()
            }
            else if (numOperation=='*')
            {
                globalNumber = globalNumber * dzielnik;
                counter = false;   
                checkLength()
            }
            else if (numOperation=='+')
            {
                globalNumber = globalNumber + dzielnik;
                counter = false;
                checkLength()

            }
            else if (numOperation=='-')
            {
                globalNumber = globalNumber - dzielnik;
                counter = false;
                checkLength()
            }
        }

    globalNumber = globalNumber.toString();
    memoryNumber = memoryNumber.toString();
    printNumber();
}

checkLength = () => {
    globalNumber = Number(globalNumber);
    if (globalNumber >= 10000000000 || globalNumber <= -10000000000 )
        globalNumber = 'ToBig';
    
    globalNumber = globalNumber.toString();
    i = 8

    while (globalNumber.length >= 11)
    {
        globalNumber = Number(globalNumber).toFixed(i)
        i--
    }

}
