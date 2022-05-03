
        //card 1 
        $(document).ready(function() {
            $("#btn1").click(function() {
                $("#panel1").slideDown("_default");
                
               
            });
        });

        //card 1
        $(document).ready(function() {
            $("#btn2").click(function() {
                $("#panel1").slideUp("fast");
            });
        });

        //card 2
        $(document).ready(function() {
            $("#btn3").click(function() {
                $("#panel2").slideDown("_default");
            });
        });
        
        //card 2
        $(document).ready(function() {
            $("#btn4").click(function() {
                $("#panel2").slideUp("fast");
            });
        });

        //card 3
        $(document).ready(function() {
            $("#btn5").click(function() {
                $("#panel3").slideDown("_default");
            });
        });

        //card 3
        $(document).ready(function() {
            $("#btn6").click(function() {
                $("#panel3").slideUp("fast");
            });
        });
        
        //card 4
        $(document).ready(function() {
            $("#btn7").click(function() {
                $("#panel4").slideDown("_default");
            });
        });

        //card 4
        $(document).ready(function() {
            $("#btn8").click(function() {
                $("#panel4").slideUp("fast");
            });
        });
        
        //card 5
        $(document).ready(function() {
            $("#btn9").click(function() {
                $("#panel5").slideDown("_default");
            });
        });

        //card 5
        $(document).ready(function() {
            $("#btn10").click(function() {
                $("#panel5").slideUp("fast");
            });
        });
        
        //card 6
        $(document).ready(function() {
            $("#btn11").click(function() {
                $("#panel6").slideDown("_default");
            });
        });

        //card 6
        $(document).ready(function() {
            $("#btn12").click(function() {
                $("#panel6").slideUp("fast");
            });
        });
        
        //card 7
        $(document).ready(function() {
            $("#btn13").click(function() {
                $("#panel7").slideDown("_default");
            });
        });

        //card 7
        $(document).ready(function() {
            $("#btn14").click(function() {
                $("#panel7").slideUp("fast");
            });
        });
        
        //card 8
        $(document).ready(function() {
            $("#btn15").click(function() {
                $("#panel8").slideDown("_default");
            });
        });

        //card 8
        $(document).ready(function() {
            $("#btn16").click(function() {
                $("#panel8").slideUp("fast");
            });
        });
        
        //card 9
        $(document).ready(function() {
            $("#btn17").click(function() {
                $("#panel9").slideDown("_default");
            });
        });

        //card 9
        $(document).ready(function() {
            $("#btn18").click(function() {
                $("#panel9").slideUp("fast");
            });
        });

var flag1 = 0;

function play1()
{
    if(flag1==0)
        { 
    var audio = document.getElementById("audio1");
    audio.play();
            flag1=1;
        }
}
function pause1()
{
    flag1=0;
}

var flag2 = 0;
function play2()
{
    if(flag2==0)
        { 
    var audio = document.getElementById("audio2");
    audio.play();
            flag2=1;
        }
}
function pause2()
{
    flag2=0;
}

