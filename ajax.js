var name;
var phone;
var email;
var id;


function postReservation() {
    $.ajax({
        type: "POST",
        url: "localhost:3000",
        timeout: 2000,
        data:
            {
                name: name,
                phoneNumber: phone,
                email: email,
                uniqueId: id
            },
        success: function (data) {
            //show content
            alert("Success")
        },
        error: function (jqXHR, textStatus, err) {
            //show error message
            alert("text status " + textStatus + ", err " + err)
        }
    })
}

$("#reserve").on("click", function (event) {

    event.preventDefault();

    name = $("#exampleFormControlInput1").val().trim();
    phone = $("#exampleFormControlInput2").val().trim();
    email = $("#exampleFormControlInput3").val().trim();
    id = $("#exampleFormControlInput4").val().trim();

    postReservation();
});