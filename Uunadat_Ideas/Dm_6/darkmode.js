$(".change").on("click", function () {
    if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
    } else {
        $("body").removeClass("dark");
        $(".form-control").removeClass("dark");
        $("body").addClass("dark");
        $(".form-control").addClass("dark");
    }
});