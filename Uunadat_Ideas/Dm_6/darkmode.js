$(".change").on("click", function () {
    if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
    } else if ($(".form-control").hasClass("dark")) {
        $(".form-control").removeClass("dark");
    } else {
        $("body").addClass("dark");
        $(".form-control").addClass("dark");
    }
});