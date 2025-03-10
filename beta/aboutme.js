function aboutmeLoad(){
// Header
document.getElementById("header").innerHTML = "<h1><b><i>NatNotNut</i></b></h1>";


// Notice
document.getElementById("notice").innerHTML = "<marquee>Website ini sedang dalam tahap pengembangan, silakan kembali lagi di lain waktu!</marquee>";


// aboutme.html (am-nav)
document.getElementById("am-nav").innerHTML = "<a href='#am-km'>KampungMaifam</a> | <a href='#am-ama'>AskMeAnything</a> | <a href='#am-skill'>MySkills</a>";
// aboutme.html (sections)
document.getElementById("am-info").innerHTML = "<center><h2>My Profile</h2></center><table align='center' cellpadding='5' width='80%'><tr><td>NAMA</td><td>:</td><td>NAT (♂️)</td></tr><tr><td>ASAL</td><td>:</td><td>INDONESIA 🇮🇩</td></tr><tr><td>ZODIAK</td><td>:</td><td>SAGITARIUS ♐</td></tr><tr><td>MBTI</td><td>:</td><td>INTP</td></tr><tr><td>TELEGRAM</td><td>:</td><td><a href='t.me/badboyable' target='_blank'>N</a></td></tr><tr><td>MAIFAM</td><td>:</td><td><a href='#am-km'>Lihat Selengkapnya</a></td></tr></table><br><br><br><br><br><br>";
document.getElementById("am-skill").innerHTML = "<center><h2>My Skills</h2></center><br>";
document.getElementById("am-km").innerHTML = "<center><h2>Kampung Maifam</h2></center><br>";
document.getElementById("am-ama").innerHTML = "<center><h2>Ask Me Anything</h2><br><b>No Activity</b></center>";


// Footer
document.getElementById("footer").innerHTML = "<b>© 2024 NatNotNut | Created by </b><a href='t.me/badboyable'target='_blank'>@badboyable</a>";
}
