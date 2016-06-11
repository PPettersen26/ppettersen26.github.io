$(".p1").click(function () {
    $(p1).fadeOut();
    $(p2).fadeIn();
});
$(".p2").click(function () {
    $(p2).fadeOut();
    $(p1).fadeIn();
});