player = Math.floor(Math.random()*2)

if (player==0)
    player = -1

var board = [];
var lock = false;
var turn = 0



$(document).ready(function() {

    printPlayer()

    $(".square").click(function() {
      move($(this).attr('id'))
    })
})


move = (idnr) => {
    if (lock==false)
    {
        if (board[idnr] != 'X' &&  board[idnr] != 'O')
        {
            if (player==1)
            {
                $('#'+idnr).html('X');
                $('#'+idnr).css('cursor','default');
                board[idnr] = 'X'
            }
            else
            {
                $('#'+idnr).html('O');
                $('#'+idnr).css('cursor','default');
                board[idnr] = 'O'
            }

            turn++;

            checkWinner()
            player *= -1
            printPlayer()
        }
    }
}

printPlayer = () => {
    if (lock == false)
    {
        var p
        (player==1) ?  p = 'X' : p = 'O'    
        $("#playerTurn").html('<h1>Turn player: ' + p + '</h1>')
    }
}

checkWinner = () => {

    if (turn==9)
        printDraw()

    for (i = 0; i < 3; i++)
    {   
        if (board[i*3]==board[i*3+1] && board[i*3]==board[i*3+2] && board[i*3]!=undefined) // poziomo
        {
            drawLines(i*3, i*3+1, i*3+2, 'lineW')
            printWinner()
        }
        if (board[i]==board[i+3] && board[i]==board[i+6] && board[i]!=undefined) // pionowo
        {
            drawLines(i, i+3, i+6, 'line')
            printWinner()
        }
    }
    if (board[0]==board[4] && board[0]==board[8] && board[0]!=undefined)
    {
        drawLines(0, 4, 8, 'lineC45')
        printWinner()
    }

    if (board[2]==board[4] && board[2]==board[6] && board[2]!=undefined)
    {
        drawLines(2, 4, 6, 'lineC315')
        printWinner()
    }

}

drawLines = (n1, n2, n3, className) => 
    {
    $('#' + n1).html('<h1 class="' + className + '"> </h1>' + board[n1])
    $('#' + n2).html('<h1 class="' + className + '"> </h1>' + board[n2])
    $('#' + n3).html('<h1 class="' + className + '"> </h1>' + board[n3])

}

printWinner = () => {
    lock = true;
    (player==1) ? player='X' : player = 'O'  
    $("#playerTurn").html('<h1>Winner: ' + player +  '<span onclick="location.reload()">   click to restart </span </h1>')
}

printDraw = () => {
    lock = true; 
    $("#playerTurn").html('<h1>Draw: <span onclick="location.reload()">   click to restart </span </h1>')
}

