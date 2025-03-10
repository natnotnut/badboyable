function login(){
    var usn = document.getElementById("usn").value;
    var pass = document.getElementById("pass").value;
    if(usn=="badboyable" && pass== "kurochiro0705"){
       window.location.href = "https://donatnutnot.000webhostapp.com/kcask.html"; 
    }
    else{
    document.getElementById("notify").innerHTML = "Incorrect Username or Password. Try Again!";
    }
}

function kcask(){
    document.getElementById('txt').innerHTML = "<center><b>Am I your boyfriend?</b></center>";
    document.getElementById('bttxt').innerHTML = "<button id='btno' style='position:absolute; left:40%; top:10%;' onclick='btno()'>No</button><button style='position:absolute; right:40%; top:10%;' onclick='btyes()'>Yes</button>";
}


var click=0;

function btno(){
    const button = document.getElementById('btno');
  const width = window.innerWidth;
  const height = window.innerHeight/2;
  var btl = Math.floor(Math.random() * (width - button.offsetWidth));
  if(btl<(width/10)){
      btl = (width/10)+50;
  }
  else if(btl>(width-(width/10))){
      btl = (width-(width/10))-50;
  }
  var btt = Math.floor(Math.random() * (height - button.offsetHeight));
  if(btt<(height/4)){
      btt = (height/10)+100;
  }
  else if(btt>(height-(height/10))){
      btt = (height-(height/10))-10;
  }
  button.style.left = btl + 'px';
  button.style.top = btt + 'px';
  click = click + 1;
};

function btyes(){

if(click<1){
    document.getElementById('txt').innerHTML = "<center><b>Yey, gak ditolak.</b></center>";
}
else{
    document.getElementById('txt').innerHTML = "<center><b>Akhirnya kamu mengakuinya setelah mengatakan tidak sebanyak "+click+"x.</b></center>";
}
    document.getElementById('bttxt').innerHTML = "<a href='kcgallery.html'><button style='position:absolute; left:40%; top:10%;'>Click Here</button></a>";
}

