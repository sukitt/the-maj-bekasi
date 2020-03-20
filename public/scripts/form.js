$(document).ready(function() {
    $("input, select, textarea").off().on("focus",function() {
        $(this.labels).addClass("filled")

        $(this).on("blur", () => { 
            if (!$(this)[0].value) {
                $(this.labels).removeClass("filled") 
            }
        })
        console.log($(this)[0].value)
    })
})