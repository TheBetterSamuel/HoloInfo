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
    var Robocco, Sora, Miko, Suisei;
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
        AZKi = cata[29];
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
        Robocco = data[51];
        Sora = data[52];
        Miko = data[53];
        Suisei = data[54];
        //Eleventh Section
        Fubuki1 = data[55];
        Mio = data[56];
        Okayu = data[57];
        Korone = data[58];
        //Twelth Section
        Mel = data[59];
        Matsuri = data[60];
        Fubuki2 = data[61];
        Aki = data[62];
        Akaai = data[63];
        Chris = data[50];
    })
})

document.getElementById("popbutton-robocco").addEventListener("click",
function() {
    document.querySelector(".bg-modal-robocco").style.display = "flex";
});

document.querySelector(".closepop").addEventListener("click",
function(){
    document.querySelector(".bg-modal-robocco").style.display = "none";
})