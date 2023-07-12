import $ from 'jquery';

$(()=>{

    const url = "/login";
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    $("#sendButton").on('click',()=>{

        $.ajax({

            method: "POST",
            url: url,
            data: [{email: email},{password: password}]

        });

    });

});