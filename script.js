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
        //Sixth Section
        Aqua = data[30]
        Shion = data[31];
        Ayame = data[32];
        Choco = data[33];
        Subaru = data[34];
        //Seventh Section
        Pekora = data[35];
        Marine = data[36];
        Rushia = data[37];
        Noel = data[38];
        Flare = data[39];
        //Eigth Section
        Kanata = data[40];
        Coco = data[41];
        Watame = data[42];
        Towa = data[43];
        Luna = data[44];
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
        //Tkino Sora Part
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
        $("#Suisei-jpname").text(data[54].JapName);
        $("#Suisei-age").text(data[54].Age);
        $("#Suisei-gender").text(data[54].Gender);
        $("#Suisei-bday").text(data[54].Birthday);
        $("#Suisei-height").text(data[54].Height + "cm");
        $("#Suisei-status").text(data[54].Status); 
        //Eleventh Section
        Fubuki1 = data[55];
        Mio = data[56];
        Okayu = data[57];
        Korone = data[58];
        //Twelth Section
        //Mel Part
        $("#Mel-jpname").text(data[59].JapName);
        $("#Mel-age").text(data[59].Age);
        $("#Mel-gender").text(data[59].Gender);
        $("#Mel-bday").text(data[59].Birthday);
        $("#Mel-height").text(data[59].Height + "cm");
        $("#Mel-status").text(data[59].Status);
        //Matsuri Part
        $("#Matsuri-jpname").text(data[60].JapName);
        $("#Matsuri-age").text(data[60].Age);
        $("#Matsuri-gender").text(data[60].Gender);
        $("#Matsuri-bday").text(data[60].Birthday);
        $("#Matsuri-height").text(data[60].Height + "cm");
        $("#Matsuri-status").text(data[60].Status);
        //Fubuki Part
        $("#Fubuki-jpname").text(data[61].JapName);
        $("#Fubuki-age").text(data[61].Age);
        $("#Fubuki-gender").text(data[61].Gender);
        $("#Fubuki-bday").text(data[61].Birthday);
        $("#Fubuki-height").text(data[61].Height + "cm");
        $("#Fubuki-status").text(data[61].Status);
        //Aki Rosenthal Part
        $("#Aki-jpname").text(data[62].JapName);
        $("#Aki-age").text(data[62].Age);
        $("#Aki-gender").text(data[62].Gender);
        $("#Aki-bday").text(data[62].Birthday);
        $("#Aki-height").text(data[62].Height + "cm");
        $("#Aki-status").text(data[62].Status);
        //Haato part
        $("#Haato-jpname").text(data[63].JapName);
        $("#Haato-age").text(data[63].Age);
        $("#Haato-gender").text(data[63].Gender);
        $("#Haato-bday").text(data[63].Birthday);
        $("#Haato-height").text(data[63].Height + "cm");
        $("#Haato-status").text(data[63].Status);
        //Chris Part
        $("#Chris-jpname").text(data[50].JapName);
        $("#Chris-age").text(data[50].Age);
        $("#Chris-gender").text(data[50].Gender);
        $("#Chris-bday").text(data[50].Birthday);
        $("#Chris-height").text(data[50].Height + "cm");
        $("#Chris-status").text(data[50].Status);
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




    //Closing pop-ups
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
})
