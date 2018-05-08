function postReservation() {
    $.ajax({
        type: "POST",
        url: "",
        timeout: 2000,
        data: {},
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