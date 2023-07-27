
$(()=>{


    $("#sendButton").on('click',()=>{

        const url = "/register";
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        $.ajax({

            method: "POST",
            url: url,
            data: {email: email, password: password}

        });

    });

});