$(document).ready(function(){
    $(".mainpagebutton").click(function(){
        window.location.href = "https://en.hololive.tv/";
    })
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
    })
})