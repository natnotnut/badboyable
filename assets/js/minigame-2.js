const khlist = ["Naga Sakti",
                "Naga besar yang memiliki kekuatan magis untuk melindungi pemiliknya dari bahaya.",
                "Garuda Perkasa",
                "Burung legendaris dengan kekuatan untuk membawa pesan dan melindungi dari roh jahat.",
                "Barong",
                "Makhluk mistis yang diyakini mampu mengusir roh jahat dan melindungi rumah dari bencana.",
                "Harimau Putih",
                "Harimau putih yang memberikan keberanian dan kekuatan kepada pemiliknya.",
                "Kuda Sembrani",
                "Kuda bersayap yang mampu terbang dan membawa pemiliknya melintasi dimensi lain.",
                "Rajawali Emas",
                "Burung rajawali dengan bulu emas yang melambangkan kekuatan dan kekayaan.",
                "Gajah Perkasa",
                "Gajah besar yang melindungi dengan kekuatannya dan memberikan kebijaksanaan.",
                "Burung Cendrawasih",
                "Burung indah yang membawa kebahagiaan dan keberuntungan.",
                "Serigala Hitam",
                "Serigala yang menjaga di malam hari dan melindungi dari bahaya tersembunyi.",
                "Kelinci Ajaib",
                "Kelinci yang membawa kebahagiaan dan keberuntungan dalam usaha.",
                "Ular Naga",
                "Ular besar yang dapat mengubah nasib buruk menjadi keberuntungan.",
                "Harimau Benggala",
                "Harimau kuat yang memberikan kekuatan fisik dan mental.",
                "Phoenix Merah",
                "Burung api yang bangkit dari abu, melambangkan pembaruan dan kekuatan.",
                "Ikan Dewa",
                "Ikan yang membawa kelimpahan dan kemakmuran.",
                "Singa Ratu",
                "Singa yang melindungi pemiliknya dengan keberanian dan kekuasaan.",
                "Elang Jawa",
                "Elang yang mampu melihat masa depan dan memberikan panduan.",
                "Buaya Penjaga",
                "Buaya yang menjaga harta karun dan melindungi dari pencuri.",
                "Lembu Suro",
                "Lembu yang membawa kekuatan spiritual dan perlindungan.",
                "Burung Hantu Bijak",
                "Burung hantu yang memberikan kebijaksanaan dan pengetahuan.",
                "Kancil Cerdik",
                "Kancil yang membantu dalam mengatasi masalah dengan kecerdikan.",
                "Kera Sakti",
                "Kera dengan kekuatan luar biasa yang mampu melindungi dan membantu dalam pertarungan.",
                "Banteng Gaib",
                "Banteng yang melambangkan kekuatan dan keberanian dalam menghadapi musuh.",
                "Hiu Ganas",
                "Hiu yang melindungi dari bahaya laut dan memberikan kekuatan bawah laut.",
                "Kijang Emas",
                "Kijang yang membawa kecepatan dan kelincahan.",
                "Merak Megah",
                "Merak dengan bulu berwarna-warni yang membawa kemewahan dan kebahagiaan.",
                "Kuda Pangeran",
                "Kuda yang melambangkan kemuliaan dan keberanian.",
                "Singa Laut",
                "Singa yang melindungi dari bahaya laut dan memberikan kekuatan dalam perairan.",
                "Anjing Setia",
                "Anjing yang setia menjaga dan melindungi pemiliknya dari bahaya.",
                "Tupai Emas",
                "Tupai yang membawa keberuntungan dalam usaha dan kelincahan dalam bekerja.",
                "Burung Garuda",
                "Burung legendaris yang melambangkan kebebasan dan kekuatan.",
                "Kucing Hitam",
                "Kucing yang melindungi dari roh jahat dan memberikan keberuntungan.",
                "Kuda Terbang",
                "Kuda yang mampu terbang dan melintasi dimensi lain untuk melindungi pemiliknya.",
                "Burung Merpati",
                "Burung yang membawa pesan kedamaian dan kemurnian.",
                "Gajah Gading",
                "Gajah besar yang melindungi dengan kekuatannya dan memberikan kebijaksanaan.",
                "Ular Cobra",
                "Ular berbisa yang melindungi dengan racunnya dan memberikan perlindungan gaib.",
                "Serigala Putih",
                "Serigala yang menjaga di malam hari dan melindungi dari bahaya tersembunyi.",
                "Bison Raksasa",
                "Bison yang melambangkan kekuatan dan ketahanan dalam menghadapi musuh.",
                "Burung Kenari",
                "Burung yang membawa kebahagiaan dan keberuntungan dalam usaha.",
                "Kambing Gunung",
                "Kambing yang membawa kelincahan dan ketahanan dalam menghadapi rintangan.",
                "Macan Kumbang",
                "Macan kuat yang memberikan kekuatan fisik dan mental.",
                "Kerbau Lembah",
                "Kerbau yang melambangkan kekuatan dan ketahanan dalam menghadapi rintangan.",
                "Ayam Jantan",
                "Ayam yang membawa keberanian dan kekuatan dalam menghadapi musuh.",
                "Kuda Zebra",
                "Kuda yang membawa kecepatan dan kelincahan dalam bekerja.",
                "Burung Bangau",
                "Burung yang membawa keberuntungan dan kemakmuran dalam usaha.",
                "Buaya Darat",
                "Buaya yang melindungi harta karun dan melindungi dari pencuri.",
                "Rusa Jantan",
                "Rusa yang membawa kecepatan dan kelincahan dalam menghadapi rintangan.",
                "Kuda Nil",
                "Kuda yang melambangkan kekuatan dan ketahanan dalam menghadapi musuh.",
                "Kelinci Putih",
                "Kelinci yang membawa kebahagiaan dan keberuntungan dalam usaha.",
                "Burung Hantu Putih",
                "Burung hantu yang memberikan kebijaksanaan dan pengetahuan.",
                "Harimau Jawa",
                "Harimau kuat yang memberikan kekuatan fisik dan mental."
                ];



window.onload = function(){
    var vkhname = localStorage.getItem('khname');
    var vkhx = JSON.parse(localStorage.getItem('khx'));

    if (!vkhname.length){
        document.getElementById("input-form").innerHTML="<a onclick='khodam()'><p id='pkhname'>Kamu telah memeriksa khodam-mu!<br>Klik untuk lihat Khodam-mu.</p></a>";
    }
}

function khodam(){
    var vkhname = localStorage.getItem('khname');
    var vkhx = JSON.parse(localStorage.getItem('khx'));
    if (localStorage.length !== 0){
        ikhname = vkhname;
    }
    else{
    var ikhname = document.getElementById("khname").value;
    }
    if (vkhname === null) {
    var khname = ikhname;
    localStorage.setItem('khname', khname);
    }
    else{
    var khname = vkhname;
    }

    document.getElementById("input-form").innerHTML = "";

    if (vkhx === null) {
    var khx = (Math.floor(Math.random() * ((khlist.length)/2))+1)*2;
    localStorage.setItem('khx', JSON.stringify(khx));
    }
    else{
    var khx = vkhx;
    }

    
    if (khname==""){
    document.title = "Khodam-mu || by: @DOnatnotnut";
    document.getElementById("ckhodam").innerHTML = "<img src='assets/img/khodam/"+(khx/2)+".jpg' alt='Gambar Belum Tersedia' width='100px' height='100px'><br><br>Setelah diperiksa, khodam-mu adalah <b>"+khlist[khx-2]+"</b>.<br>"+khlist[khx-1]+"<br><br><br><br><br><br>Cek Khodam by <a href='https://t.me/DOnatnotnut' target='_blank'>t.me/DOnatnotnut</a>. &copy; <b>NatNotNut</b>. All Rights Reserved.";
    }
    else{
    document.title = "Khodam "+khname+" || by: @DOnatnotnut";
    document.getElementById("ckhodam").innerHTML = "<img src='assets/img/khodam/"+(khx/2)+".jpg' alt='Gambar Belum Tersedia' width='100px' height='100px'><br><br>Setelah diperiksa, khodam <b>"+khname+"</b> adalah <b>"+khlist[khx-2]+"</b>.<br>"+khlist[khx-1]+"<br><br><br><br><br><br>Cek Khodam by <a href='https://t.me/DOnatnotnut' target='_blank'>t.me/DOnatnotnut</a>. &copy; <b>NatNotNut</b>. All Rights Reserved.";
    }
}
