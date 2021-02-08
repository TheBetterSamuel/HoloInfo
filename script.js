$(document).ready(function(){
    $(".mainpagebutton").click(function(){
        window.location.href = "https://en.hololive.tv/";
    })
    var Mori, Kiara, Gura, Amelia, Ina;
    var Risu, Moona, Iofi, Ollie, Melfissa, Reine
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
        Mori = data[0];
        Kiara = data[1];
        Gura = data[2];
        Amelia = data[3];
        Ina = data[4];
        Risu = data[5];
        Moona = data[6];
        Iofi = data[7];
        Ollie = data[8];
        Melfissa = data[9];
        Reine = data[10];
    })
})