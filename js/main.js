function wonCondition() {
    var won = false;
    var watch = [];
//    console.log($(".box"));
    
    for (var i=0; i<=8; i++) {
        watch.push($(".box")[i].innerHTML);
        console.log(watch);
    }
    
    // watch[0] == watch[1] && watch[1] == watch[2]
    if ((watch[0] == watch[1]) && (watch[1] == watch[2]) && (watch[0].length > 0)) {
        $(".error").text(watch[0] + " " + "won");
        won = true;
        
    }
    // watch[3] == watch[4] && watch[4] == watch[5]
     else if ((watch[3] == watch[4]) && (watch[4] == watch[5]) && (watch[3].length > 0)) {
        $(".error").text(watch[3] + " " + "won");
         won = true;
    }
    
    // watch[6] == watch[7] && watch[7] == watch[8]
     else if ((watch[6] == watch[7]) && (watch[7] == watch[8]) && (watch[6].length > 0)) {
        $(".error").text(watch[6] + " " + "won");
         won = true;
    }
    
    // watch[0] == watch[4] && watch[4] == watch[8]
     else if ((watch[0] == watch[4]) && (watch[4] == watch[8]) && (watch[0].length > 0)) {
        $(".error").text(watch[0] + " " + "won");
        won = true;
    }
    
    // watch[2] == watch[4] && watch[4] == watch[6]
     else if ((watch[2] == watch[4]) && (watch[4] == watch[6]) && (watch[2].length > 0)) {
        $(".error").text(watch[2] + " " + "won");
         won = true;
    }
    
    // watch[0] == watch[3] && watch[3] == watch[6]
     else if ((watch[0] == watch[3]) && (watch[3] == watch[6]) && (watch[0].length > 0)) {
        $(".error").text(watch[0] + " " + "won");
         won = true;
    }
    
    // watch[1] == watch[4] && watch[4] == watch[7]
     else if ((watch[1] == watch[4]) && (watch[4] == watch[7]) && (watch[1].length > 0)) {
        $(".error").text(watch[1] + " " + "won");
         won = true;
    }
    
    // watch[2] == watch[5] && watch[5] == watch[8]
     else if ((watch[2] == watch[5]) && (watch[5] == watch[8]) && (watch[2].length > 0)) {
        $(".error").text(watch[2] + " " + "won");
         won = true;
         console.log(won);
    }
    return won;
}


$(document).ready(function() {
    
    var game = true;
    var won = false;
    var count = 0;
   $(".box").click(function() {  
//        won = wonCondition();
       if (won == true) {
           $(".error").text("game over"); 
       }
       else if ( count === 9 && !won ) {
           $(".error").text("Try again");
       }
       
       if ( this.innerHTML.length == 0 && won === false ) {
           
           var pass = game ? "X" : "0";
           $(this).text(pass);
           game = !game;
           $(".error").text("HELLO!");
           won = wonCondition();
           console.log(won);
           count++;
        }
           
       else if (this.innerHTML.length > 0 && won === false) {
           $(".error").text("can't be over write");
       }
       
//       var checking = $(".error")[0].innerHTML ;
       
   
   });
    
});