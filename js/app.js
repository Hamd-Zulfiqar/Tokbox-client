$(document).ready(function(){

    sessionStorage.setItem("apiKey", 47319631)

    $("#create").click(function(){
        var name = $('#name').val();
        console.log(name);

        $.ajax({
            type: "GET",
            url: "https://tokbox-demo-backend.herokuapp.com/room/" + name,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(result) {
                console.log(result)

                var sessionId = result.sessionId;
                var token = result.token;

                sessionStorage.setItem("sessionId", sessionId);
                sessionStorage.setItem("token", token);
                alert(result.name);
                window.location.href = "video.html";
            }
        });
    });

    $("#join").click(function(){
        var key = $('#key').val();
        console.log(key);

        $.ajax({
            type: "GET",
            url: "https://tokbox-demo-backend.herokuapp.com/room/" + key,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(result) {
                console.log(result)

                var sessionId = result.sessionId;
                var token = result.token;

                sessionStorage.setItem("sessionId", sessionId);
                sessionStorage.setItem("token", token);
                alert(result.name);
                window.location.href = "video.html";
            }
        });
    });

});