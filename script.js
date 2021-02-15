$(document).ready(function(){
    $(".mainpagebutton").click(function(){
        window.location.href = "https://en.hololive.tv/";
    })
    var Mori, Kiara, Gura, Amelia, Ina;
    var Risu, Moona, Iofi, Ollie, Melfissa, Reine;
    var Miyabi, Izuru, Aruran, Rikka, Kira, Suzaku, Astel, Tenma, Roberu, Shien, Oga, Kaoru;
    var Civia, Echo, Yogiri, Artia, Doris, Rosalyn;
    var AZKi;
    var Aqua, Shion, Ayame, Choco, Subaru;
    var Pekora, Marine, Rushia, Noel, Flare;
    var Kanata, Coco, Watame, Towa, Luna;
    var Botan, Nene, Lamy, Polka, Aloe;
    var Fubuki1, Mio, Okayu, Korone;
    var Mel, Matsuri, Fubuki2, Aki, Akaai, Chris;

    let url = "https://hololive-f999.restdb.io/rest/holoinfo"
    let APIKEY = "600504ba1346a1524ff12b9b"
    fetch(url,{
        "method": "GET",
        headers:{
            "x-apikey": APIKEY
        }
    })
    .then(Response => Response.json())
    .then(data => {
        console.log(data);
        //Assign Variables
        //First section
        Mori = data[0];
        Kiara = data[1];
        Gura = data[2];
        Amelia = data[3];
        Ina = data[4];
        //Second Section
        Risu = data[5];
        Moona = data[6];
        Iofi = data[7];
        Ollie = data[8];
        Melfissa = data[9];
        Reine = data[10];
        //Third Section
        Miyabi = data[11];
        Izuru = data[12];
        Aruran = data[13];
        Rikka = data[14];
        Kira = data[15];
        Suzaku = data[16];
        Astel = data[17];
        Tenma = data[18];
        Roberu = data[19];
        Shien = data[20];
        Oga = data[21];
        Kaoru = data[22];
        //Fourth Section
        Civia = data[23];
        Echo = data[24];
        Yogiri = data[25];
        Artia = data[26];
        Doris = data[27];
        Rosalyn = data[28];
        //Fifth Section
        //AZKi Part
        $("#AZKi-jpname").text(data[29].JapName);
        $("#AZKi-age").text(data[29].Age);
        $("#AZKi-gender").text(data[29].Gender);
        $("#AZKi-bday").text(data[29].Birthday);
        $("#AZKi-height").text(data[29].Height + "cm");
        $("#AZKi-status").text(data[29].Status); 
        //Eigth Section
        //Kanata Part
        $("#Kanata-jpname").text(data[40].JapName);
        $("#Kanata-age").text(data[40].Age);
        $("#Kanata-gender").text(data[40].Gender);
        $("#Kanata-bday").text(data[40].Birthday);
        $("#Kanata-height").text(data[40].Height + "cm");
        $("#Kanata-status").text(data[40].Status);
        //Coco Part
        $("#Coco-jpname").text(data[41].JapName);
        $("#Coco-age").text(data[41].Age);
        $("#Coco-gender").text(data[41].Gender);
        $("#Coco-bday").text(data[41].Birthday);
        $("#Coco-height").text(data[41].Height + "cm");
        $("#Coco-status").text(data[41].Status);
        //Watame Part
        $("#Watame-jpname").text(data[42].JapName);
        $("#Watame-age").text(data[42].Age);
        $("#Watame-gender").text(data[42].Gender);
        $("#Watame-bday").text(data[42].Birthday);
        $("#Watame-height").text(data[42].Height + "cm");
        $("#Watame-status").text(data[42].Status);
        //Towa Part
        $("#Towa-jpname").text(data[43].JapName);
        $("#Towa-age").text(data[43].Age);
        $("#Towa-gender").text(data[43].Gender);
        $("#Towa-bday").text(data[43].Birthday);
        $("#Towa-height").text(data[43].Height + "cm");
        $("#Towa-status").text(data[43].Status);
        //Luna Part
        $("#Luna-jpname").text(data[44].JapName);
        $("#Luna-age").text(data[44].Age);
        $("#Luna-gender").text(data[44].Gender);
        $("#Luna-bday").text(data[44].Birthday);
        $("#Luna-height").text(data[44].Height + "cm");
        $("#Luna-status").text(data[44].Status);
        //Ninth Section
        Botan = data[45];
        Nene = data[46];
        Lamy = data[47];
        Polka = data[48];
        Aloe = data[49];
        //Tenth Section
        //Robocco Part
        $("#Robocco-jpname").text(data[51].JapName);
        $("#Robocco-age").text(data[51].Age);
        $("#Robocco-gender").text(data[51].Gender);
        $("#Robocco-bday").text(data[51].Birthday);
        $("#Robocco-height").text(data[51].Height + "cm");
        $("#Robocco-status").text(data[51].Status); 
        //Tokino Sora Part
        $("#TokinoSora-jpname").text(data[52].JapName);
        $("#TokinoSora-age").text(data[52].Age);
        $("#TokinoSora-gender").text(data[52].Gender);
        $("#TokinoSora-bday").text(data[52].Birthday);
        $("#TokinoSora-height").text(data[52].Height + "cm");
        $("#TokinoSora-status").text(data[52].Status); 
        //Sakura Miko Part
        $("#SakuraMiko-jpname").text(data[53].JapName);
        $("#SakuraMiko-age").text(data[53].Age);
        $("#SakuraMiko-gender").text(data[53].Gender);
        $("#SakuraMiko-bday").text(data[53].Birthday);
        $("#SakuraMiko-height").text(data[53].Height + "cm");
        $("#SakuraMiko-status").text(data[53].Status); 
        //Suisei Part
        $("#Suisei-jpname").text(data[62].JapName);
        $("#Suisei-age").text(data[62].Age);
        $("#Suisei-gender").text(data[62].Gender);
        $("#Suisei-bday").text(data[62].Birthday);
        $("#Suisei-height").text(data[62].Height + "cm");
        $("#Suisei-status").text(data[62].Status); 
        //Eleventh Section
        Fubuki1 = data[55];
        Mio = data[56];
        Okayu = data[57];
        Korone = data[58];
        //Twelth Section
        //Mel Part
        $("#Mel-jpname").text(data[57].JapName);
        $("#Mel-age").text(data[57].Age);
        $("#Mel-gender").text(data[57].Gender);
        $("#Mel-bday").text(data[57].Birthday);
        $("#Mel-height").text(data[57].Height + "cm");
        $("#Mel-status").text(data[57].Status);
        //Matsuri Part
        $("#Matsuri-jpname").text(data[58].JapName);
        $("#Matsuri-age").text(data[58].Age);
        $("#Matsuri-gender").text(data[58].Gender);
        $("#Matsuri-bday").text(data[58].Birthday);
        $("#Matsuri-height").text(data[58].Height + "cm");
        $("#Matsuri-status").text(data[58].Status);
        //Fubuki Part
        $("#Fubuki-jpname").text(data[59].JapName);
        $("#Fubuki-age").text(data[59].Age);
        $("#Fubuki-gender").text(data[59].Gender);
        $("#Fubuki-bday").text(data[59].Birthday);
        $("#Fubuki-height").text(data[59].Height + "cm");
        $("#Fubuki-status").text(data[59].Status);
        //Aki Rosenthal Part
        $("#Aki-jpname").text(data[60].JapName);
        $("#Aki-age").text(data[60].Age);
        $("#Aki-gender").text(data[60].Gender);
        $("#Aki-bday").text(data[60].Birthday);
        $("#Aki-height").text(data[60].Height + "cm");
        $("#Aki-status").text(data[60].Status);
        //Haato part
        $("#Haato-jpname").text(data[61].JapName);
        $("#Haato-age").text(data[61].Age);
        $("#Haato-gender").text(data[61].Gender);
        $("#Haato-bday").text(data[61].Birthday);
        $("#Haato-height").text(data[61].Height + "cm");
        $("#Haato-status").text(data[61].Status);
        //Chris Part
        $("#Chris-jpname").text(data[50].JapName);
        $("#Chris-age").text(data[50].Age);
        $("#Chris-gender").text(data[50].Gender);
        $("#Chris-bday").text(data[50].Birthday);
        $("#Chris-height").text(data[50].Height + "cm");
        $("#Chris-status").text(data[50].Status);
        //Aqua Part
        $("#Maqua-jpname").text(data[30].JapName);
        $("#Maqua-age").text(data[30].Age);
        $("#Maqua-gender").text(data[30].Gender);
        $("#Maqua-bday").text(data[30].Birthday);
        $("#Maqua-height").text(data[30].Height + "cm");
        $("#Maqua-status").text(data[30].Status);
        //Shion Part
        $("#Mshion-jpname").text(data[31].JapName);
        $("#Mshion-age").text(data[31].Age);
        $("#Mshion-gender").text(data[31].Gender);
        $("#Mshion-bday").text(data[31].Birthday);
        $("#Mshion-height").text(data[31].Height + "cm");
        $("#Mshion-status").text(data[31].Status);
        //Ayame Part
        $("#Nayame-jpname").text(data[32].JapName);
        $("#Nayame-age").text(data[32].Age);
        $("#Nayame-gender").text(data[32].Gender);
        $("#Nayame-bday").text(data[32].Birthday);
        $("#Nayame-height").text(data[32].Height + "cm");
        $("#Nayame-status").text(data[32].Status);
        //Choco sensei Part
        $("#Ychoco-jpname").text(data[33].JapName);
        $("#Ychoco-age").text(data[33].Age);
        $("#Ychoco-gender").text(data[33].Gender);
        $("#Ychoco-bday").text(data[33].Birthday);
        $("#Ychoco-height").text(data[33].Height + "cm");
        $("#Ychoco-status").text(data[33].Status);
        //Oozora Subaru Part
        $("#Osubaru-jpname").text(data[34].JapName);
        $("#Osubaru-age").text(data[34].Age);
        $("#Osubaru-gender").text(data[34].Gender);
        $("#Osubaru-bday").text(data[34].Birthday);
        $("#Osubaru-height").text(data[34].Height + "cm");
        $("#Osubaru-status").text(data[34].Status);
        //Pekora Part
        $("#Upekora-jpname").text(data[35].JapName);
        $("#Upekora-age").text(data[35].Age);
        $("#Upekora-gender").text(data[35].Gender);
        $("#Upekora-bday").text(data[35].Birthday);
        $("#Upekora-height").text(data[35].Height + "cm");
        $("#Upekora-status").text(data[35].Status);
        //Rushia Part
        $("#Urushia-jpname").text(data[37].JapName);
        $("#Urushia-age").text(data[37].Age);
        $("#Urushia-gender").text(data[37].Gender);
        $("#Urushia-bday").text(data[37].Birthday);
        $("#Urushia-height").text(data[37].Height + "cm");
        $("#Urushia-status").text(data[37].Status);
        //Houshou Marine Part
        $("#Hmarine-jpname").text(data[36].JapName);
        $("#Hmarine-age").text(data[36].Age);
        $("#Hmarine-gender").text(data[36].Gender);
        $("#Hmarine-bday").text(data[36].Birthday);
        $("#Hmarine-height").text(data[36].Height + "cm");
        $("#Hmarine-status").text(data[36].Status);
        //Houshou Marine Part
        $("#Hmarine-jpname").text(data[36].JapName);
        $("#Hmarine-age").text(data[36].Age);
        $("#Hmarine-gender").text(data[36].Gender);
        $("#Hmarine-bday").text(data[36].Birthday);
        $("#Hmarine-height").text(data[36].Height + "cm");
        $("#Hmarine-status").text(data[36].Status);
        //Flare Part
        $("#Sflare-jpname").text(data[39].JapName);
        $("#Sflare-age").text(data[39].Age);
        $("#Sflare-gender").text(data[39].Gender);
        $("#Sflare-bday").text(data[39].Birthday);
        $("#Sflare-height").text(data[39].Height + "cm");
        $("#Sflare-status").text(data[39].Status);
        //Noel Part
        $("#Snoel-jpname").text(data[38].JapName);
        $("#Snoel-age").text(data[38].Age);
        $("#Snoel-gender").text(data[38].Gender);
        $("#Snoel-bday").text(data[38].Birthday);
        $("#Snoel-height").text(data[38].Height + "cm");
        $("#Snoel-status").text(data[38].Status);
        //Lamy Part
        $("#Ylamy-jpname").text(data[47].JapName);
        $("#Ylamy-age").text(data[47].Age);
        $("#Ylamy-gender").text(data[47].Gender);
        $("#Ylamy-bday").text(data[47].Birthday);
        $("#Ylamy-height").text(data[47].Height + "cm");
        $("#Ylamy-status").text(data[47].Status);
        //Nene Part
        $("#Mnene-jpname").text(data[46].JapName);
        $("#Mnene-age").text(data[46].Age);
        $("#Mnene-gender").text(data[46].Gender);
        $("#Mnene-bday").text(data[46].Birthday);
        $("#Mnene-height").text(data[46].Height + "cm");
        $("#Mnene-status").text(data[46].Status);
        //Nene Part
        $("#Sbotan-jpname").text(data[45].JapName);
        $("#Sbotan-age").text(data[45].Age);
        $("#Sbotan-gender").text(data[45].Gender);
        $("#Sbotan-bday").text(data[45].Birthday);
        $("#Sbotan-height").text(data[45].Height + "cm");
        $("#Sbotan-status").text(data[45].Status);
        //Polka Part
        $("#Opolka-jpname").text(data[48].JapName);
        $("#Opolka-age").text(data[48].Age);
        $("#Opolka-gender").text(data[48].Gender);
        $("#Opolka-bday").text(data[48].Birthday);
        $("#Opolka-height").text(data[48].Height + "cm");
        $("#Opolka-status").text(data[48].Status);
        //Aloe Part
        $("#Maloe-jpname").text(data[49].JapName);
        $("#Maloe-age").text(data[49].Age);
        $("#Maloe-gender").text(data[49].Gender);
        $("#Maloe-bday").text(data[49].Birthday);
        $("#Maloe-height").text(data[49].Height + "cm");
        $("#Maloe-status").text(data[49].Status);
        //Mio Part
        $("#Omio-jpname").text(data[54].JapName);
        $("#Omio-age").text(data[54].Age);
        $("#Omio-gender").text(data[54].Gender);
        $("#Omio-bday").text(data[54].Birthday);
        $("#Omio-height").text(data[54].Height + "cm");
        $("#Omio-status").text(data[54].Status);
        //Okayu Part
        $("#Nokayu-jpname").text(data[55].JapName);
        $("#Nokayu-age").text(data[55].Age);
        $("#Nokayu-gender").text(data[55].Gender);
        $("#Nokayu-bday").text(data[55].Birthday);
        $("#Nokayu-height").text(data[55].Height + "cm");
        $("#Nokayu-status").text(data[55].Status);
        //Korone Part
        $("#Ikorone-jpname").text(data[56].JapName);
        $("#Ikorone-age").text(data[56].Age);
        $("#Ikorone-gender").text(data[56].Gender);
        $("#Ikorone-bday").text(data[56].Birthday);
        $("#Ikorone-height").text(data[56].Height + "cm");
        $("#Ikorone-status").text(data[56].Status);
        //Miyabi Part
        $("#Hmiyabi-jpname").text(data[11].JapName);
        $("#Hmiyabi-age").text(data[11].Age);
        $("#Hmiyabi-gender").text(data[11].Gender);
        $("#Hmiyabi-bday").text(data[11].Birthday);
        $("#Hmiyabi-height").text(data[11].Height + "cm");
        $("#Hmiyabi-status").text(data[11].Status);
        //Izuru Part
        $("#Kizuru-jpname").text(data[12].JapName);
        $("#Kizuru-age").text(data[12].Age);
        $("#Kizuru-gender").text(data[12].Gender);
        $("#Kizuru-bday").text(data[12].Birthday);
        $("#Kizuru-height").text(data[12].Height + "cm");
        $("#Kizuru-status").text(data[12].Status);
        //aruran Part
        $("#aruran-jpname").text(data[13].JapName);
        $("#aruran-age").text(data[13].Age);
        $("#aruran-gender").text(data[13].Gender);
        $("#aruran-bday").text(data[13].Birthday);
        $("#aruran-height").text(data[13].Height + "cm");
        $("#aruran-status").text(data[13].Status);
        //Rikka Part
        $("#rikka-jpname").text(data[14].JapName);
        $("#rikka-age").text(data[14].Age);
        $("#rikka-gender").text(data[14].Gender);
        $("#rikka-bday").text(data[14].Birthday);
        $("#rikka-height").text(data[14].Height + "cm");
        $("#rikka-status").text(data[14].Status);
        //Suzaku Part
        $("#Ysuzaku-jpname").text(data[16].JapName);
        $("#Ysuzaku-age").text(data[16].Age);
        $("#Ysuzaku-gender").text(data[16].Gender);
        $("#Ysuzaku-bday").text(data[16].Birthday);
        $("#Ysuzaku-height").text(data[16].Height + "cm");
        $("#Ysuzaku-status").text(data[16].Status);
        //Kira Part
        $("#Kkira-jpname").text(data[15].JapName);
        $("#Kkira-age").text(data[15].Age);
        $("#Kkira-gender").text(data[15].Gender);
        $("#Kkira-bday").text(data[15].Birthday);
        $("#Kkira-height").text(data[15].Height + "cm");
        $("#Kkira-status").text(data[15].Status);
        //Astel Part
        $("#astel-jpname").text(data[17].JapName);
        $("#astel-age").text(data[17].Age);
        $("#astel-gender").text(data[17].Gender);
        $("#astel-bday").text(data[17].Birthday);
        $("#astel-height").text(data[17].Height + "cm");
        $("#astel-status").text(data[17].Status);
        //Tenma Part
        $("#Ktenma-jpname").text(data[18].JapName);
        $("#Ktenma-age").text(data[18].Age);
        $("#Ktenma-gender").text(data[18].Gender);
        $("#Ktenma-bday").text(data[18].Birthday);
        $("#Ktenma-height").text(data[18].Height + "cm");
        $("#Ktenma-status").text(data[18].Status);
        //Roberu Part
        $("#Yroberu-jpname").text(data[19].JapName);
        $("#Yroberu-age").text(data[19].Age);
        $("#Yroberu-gender").text(data[19].Gender);
        $("#Yroberu-bday").text(data[19].Birthday);
        $("#Yroberu-height").text(data[19].Height + "cm");
        $("#Yroberu-status").text(data[19].Status);
        //Shien Part
        $("#Kshien-jpname").text(data[20].JapName);
        $("#Kshien-age").text(data[20].Age);
        $("#Kshien-gender").text(data[20].Gender);
        $("#Kshien-bday").text(data[20].Birthday);
        $("#Kshien-height").text(data[20].Height + "cm");
        $("#Kshien-status").text(data[20].Status);
        //Oga Part
        $("#Aoga-jpname").text(data[21].JapName);
        $("#Aoga-age").text(data[21].Age);
        $("#Aoga-gender").text(data[21].Gender);
        $("#Aoga-bday").text(data[21].Birthday);
        $("#Aoga-height").text(data[21].Height + "cm");
        $("#Aoga-status").text(data[21].Status);
        //Kaoru Part
        $("#Tkaoru-jpname").text(data[22].JapName);
        $("#Tkaoru-age").text(data[22].Age);
        $("#Tkaoru-gender").text(data[22].Gender);
        $("#Tkaoru-bday").text(data[22].Birthday);
        $("#Tkaoru-height").text(data[22].Height + "cm");
        $("#Tkaoru-status").text(data[22].Status);
    })

    // Opening pop-ups
    document.getElementById("popbutton-robocco").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-robocco").style.display = "flex";
    });

    document.getElementById("popbutton-tokinosora").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-tokinosora").style.display = "flex";
    });

    document.getElementById("popbutton-sakuramiko").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-sakuramiko").style.display = "flex";
    });

    document.getElementById("popbutton-suisei").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-suisei").style.display = "flex";
    });

    document.getElementById("popbutton-mel").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-mel").style.display = "flex";
    });

    document.getElementById("popbutton-fubuki1").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-fubuki").style.display = "flex";
    });

    document.getElementById("popbutton-fubuki2").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-fubuki").style.display = "flex";
    });

    document.getElementById("popbutton-matsuri").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-matsuri").style.display = "flex";
    });

    document.getElementById("popbutton-aki").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-aki").style.display = "flex";
    });

    document.getElementById("popbutton-haato").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-haato").style.display = "flex";
    });

    document.getElementById("popbutton-chris").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-chris").style.display = "flex";
    });

    document.getElementById("popbutton-azki").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-azki").style.display = "flex";
    });

    document.getElementById("popbutton-aqua").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Maqua").style.display = "flex";
    });

    document.getElementById("popbutton-shion").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Mshion").style.display = "flex";
    });

    document.getElementById("popbutton-ayame").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Nayame").style.display = "flex";
    });

    document.getElementById("popbutton-choco").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Ychoco").style.display = "flex";
    });

    document.getElementById("popbutton-subaru").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Osubaru").style.display = "flex";
    });

    document.getElementById("popbutton-pekora").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Upekora").style.display = "flex";
    });

    document.getElementById("popbutton-rushia").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Urushia").style.display = "flex";
    });

    document.getElementById("popbutton-marine").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Hmarine").style.display = "flex";
    });

    document.getElementById("popbutton-flare").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Sflare").style.display = "flex";
    });

    document.getElementById("popbutton-noel").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Snoel").style.display = "flex";
    });

    document.getElementById("popbutton-kanata").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-kanata").style.display = "flex";
    });

    document.getElementById("popbutton-coco").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-coco").style.display = "flex";
    });

    document.getElementById("popbutton-watame").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-watame").style.display = "flex";
    });

    document.getElementById("popbutton-towa").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-towa").style.display = "flex";
    });

    document.getElementById("popbutton-luna").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-luna").style.display = "flex";
    });

    document.getElementById("popbutton-lamy").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Ylamy").style.display = "flex";
    });

    document.getElementById("popbutton-nene").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Mnene").style.display = "flex";
    });

    document.getElementById("popbutton-botan").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Sbotan").style.display = "flex";
    });

    document.getElementById("popbutton-polka").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Opolka").style.display = "flex";
    });

    document.getElementById("popbutton-aloe").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Maloe").style.display = "flex";
    });

    document.getElementById("popbutton-mio").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Omio").style.display = "flex";
    });

    document.getElementById("popbutton-okayu").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Nokayu").style.display = "flex";
    });

    document.getElementById("popbutton-korone").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Ikorone").style.display = "flex";
    });

    document.getElementById("popbutton-miyabi").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Hmiyabi").style.display = "flex";
    });

    document.getElementById("popbutton-izuru").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Kizuru").style.display = "flex";
    });

    document.getElementById("popbutton-aruran").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-aruran").style.display = "flex";
    });

    document.getElementById("popbutton-rikka").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-rikka").style.display = "flex";
    });

    document.getElementById("popbutton-suzaku").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Ysuzaku").style.display = "flex";
    });

    document.getElementById("popbutton-kira").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Kkira").style.display = "flex";
    });

    document.getElementById("popbutton-astel").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-astel").style.display = "flex";
    });

    document.getElementById("popbutton-tenma").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Ktenma").style.display = "flex";
    });

    document.getElementById("popbutton-roberu").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Yroberu").style.display = "flex";
    });

    document.getElementById("popbutton-shien").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Kshien").style.display = "flex";
    });

    document.getElementById("popbutton-oga").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Aoga").style.display = "flex";
    });

    document.getElementById("popbutton-kaoru").addEventListener("click",
    function() {
        document.querySelector(".bg-modal-Tkaoru").style.display = "flex";
    });



    //Closing pop-ups
    document.querySelector(".closepop-Tkaoru").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Tkaoru").style.display = "none";
    });

    document.querySelector(".closepop-Aoga").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Aoga").style.display = "none";
    });

    document.querySelector(".closepop-Kshien").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Kshien").style.display = "none";
    });

    document.querySelector(".closepop-Yroberu").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Yroberu").style.display = "none";
    });

    document.querySelector(".closepop-Ktenma").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Ktenma").style.display = "none";
    });

    document.querySelector(".closepop-astel").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-astel").style.display = "none";
    });

    document.querySelector(".closepop-Kkira").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Kkira").style.display = "none";
    });

    document.querySelector(".closepop-Ysuzaku").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Ysuzaku").style.display = "none";
    });

    document.querySelector(".closepop-rikka").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-rikka").style.display = "none";
    });

    document.querySelector(".closepop-aruran").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-aruran").style.display = "none";
    });

    document.querySelector(".closepop-Kizuru").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Kizuru").style.display = "none";
    });

    document.querySelector(".closepop-Hmiyabi").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Hmiyabi").style.display = "none";
    });

    document.querySelector(".closepop-Ikorone").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Ikorone").style.display = "none";
    });

    document.querySelector(".closepop-Nokayu").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Nokayu").style.display = "none";
    });

    document.querySelector(".closepop-Omio").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Omio").style.display = "none";
    });

    document.querySelector(".closepop-Maloe").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Maloe").style.display = "none";
    });

    document.querySelector(".closepop-Opolka").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Opolka").style.display = "none";
    });

    document.querySelector(".closepop-Sbotan").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Sbotan").style.display = "none";
    });

    document.querySelector(".closepop-Mnene").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Mnene").style.display = "none";
    });

    document.querySelector(".closepop-Ylamy").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Ylamy").style.display = "none";
    });

    document.querySelector(".closepop-Snoel").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Snoel").style.display = "none";
    });

    document.querySelector(".closepop-Sflare").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Sflare").style.display = "none";
    });

    document.querySelector(".closepop-Hmarine").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Hmarine").style.display = "none";
    });

    document.querySelector(".closepop-Urushia").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Urushia").style.display = "none";
    });

    document.querySelector(".closepop-Upekora").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Upekora").style.display = "none";
    });

    document.querySelector(".closepop-Osubaru").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Osubaru").style.display = "none";
    });

    document.querySelector(".closepop-Ychoco").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Ychoco").style.display = "none";
    });

    document.querySelector(".closepop-Nayame").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Nayame").style.display = "none";
    });

    document.querySelector(".closepop-robocco").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-robocco").style.display = "none";
    });

    document.querySelector(".closepop-tokinosora").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-tokinosora").style.display = "none";
    });

    document.querySelector(".closepop-sakuramiko").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-sakuramiko").style.display = "none";
    });

    document.querySelector(".closepop-suisei").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-suisei").style.display = "none";
    });

    document.querySelector(".closepop-mel").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-mel").style.display = "none";
    });

    document.querySelector(".closepop-fubuki").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-fubuki").style.display = "none";
    });

    document.querySelector(".closepop-matsuri").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-matsuri").style.display = "none";
    });

    document.querySelector(".closepop-aki").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-aki").style.display = "none";
    });

    document.querySelector(".closepop-haato").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-haato").style.display = "none";
    });

    document.querySelector(".closepop-chris").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-chris").style.display = "none";
    });

    document.querySelector(".closepop-azki").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-azki").style.display = "none";
    });

    document.querySelector(".closepop-Maqua").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Maqua").style.display = "none";
    });

    document.querySelector(".closepop-Mshion").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-Mshion").style.display = "none";
    });

    document.querySelector(".closepop-kanata").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-kanata").style.display = "none";
    });

    document.querySelector(".closepop-coco").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-coco").style.display = "none";
    });

    document.querySelector(".closepop-watame").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-watame").style.display = "none";
    });

    document.querySelector(".closepop-towa").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-towa").style.display = "none";
    });

    document.querySelector(".closepop-luna").addEventListener("click",
    function(){
        document.querySelector(".bg-modal-luna").style.display = "none";
    });
})
