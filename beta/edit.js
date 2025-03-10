

function mainLoad(){
    
var visit = prompt("Hai, siapa namamu?");
if(visit==""){
    visit="kamu";
}



document.getElementById("header").innerHTML = "<h1><b><i>NatNotNut</i></b></h1>";



document.getElementById("notice").innerHTML = "<marquee>Website ini sedang dalam tahap pengembangan, silakan kembali lagi di lain waktu!</marquee>";



document.getElementById("mainnav").innerHTML = "<a href='#about'>About</a> | <a href='#watchlist'>WatchList</a> | <a href='#minigames'>MiniGames</a> | <a href='#countdown'>Countdown</a> | <a href='#social'>Social</a>";



document.getElementById("about").innerHTML = "<img src='aboutme.jpg' width='30%' height='30%' vspace='50' hspace='15' align='right'/><center><h2>About Me</h2></center><p>Hai "+visit+", selamat datang di website-ku. <i>Nat-imnida</i>. Ingin mengenal-ku lebih jauh?<br><br><a href='aboutme.html'><button>Lihat Selengkapnya</button></a></p><br><br><br><br><br><br>";
document.getElementById("watchlist").innerHTML = "<center><h2>My Watchlist</h2></center><p>Nonton <i>K-Drama</i> adalah salah satu hobi-ku.<br>Yuk intip daftar tontonan-ku!<br><br><a href='watchlist.html'><button>Lihat Daftar Tontonan</button></a></p>";
document.getElementById("minigames").innerHTML = "<center><h2>MiniGames</h2></center><p>Yuk mainkan MiniGames yang ada!<br><br><a href='minigames.html'><button>Lihat Selengkapnya</button></a></p>";
document.getElementById("countdown").innerHTML = "<center><h2>Countdown</h2><br><b>No Activity</b></center>";
document.getElementById("social").innerHTML = "<center><h2>Social</h2></center><p>Ayo berteman dengan akun sosmed-ku!</p><i>Data Not Available</i>";



document.getElementById("footer").innerHTML = "<b>© 2024 NatNotNut | Created by </b><a href='t.me/badboyable'target='_blank'>@badboyable</a>";



 

}
