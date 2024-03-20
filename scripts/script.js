$(document).ready(function () {
    let hiddenRow = $(".expandeble");
$(".expand-btn").click (function () {
    hiddenRow.toggleClass("hidden");
    if (hiddenRow.is(":visible")) {
        $(".expand-btn").html("Уменьшить");
    } else {
        $(".expand-btn").html("Расширить");
    }
    });
    $(".modal-close").click(function () {
        $(".modal-canvas").remove();
    });
});