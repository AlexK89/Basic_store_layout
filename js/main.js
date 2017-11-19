var img_number = 0;
var timer = null;
var $items = $(".main_img_items").children();

//create_dots - generate dots section
function create_dots() {
    var dot_block = "";
    var $images_position = $items.length;
    for (var i = 0; i < $images_position; i++) {
        dot_block += "<li class='dots_navigation' data-img=" + i + ">.</li>"
    }
    $(".dots").append(dot_block);
    $('.dots_navigation').eq(0).addClass("active");
}

//active_dot - change styling for chosen dot
function active_dot() {
    $(".active").removeClass("active");
    $('.dots_navigation').eq(img_number).addClass("active");
}

//selected_img - shows selected img and relative dot
function selected_img() {
    clearTimeout(timer);
    if ($items[img_number]) {
        active_dot();
        $($items[img_number]).addClass("active");
    } else {
        img_number = 0;
        active_dot();
        $($items[img_number]).addClass("active");
    }
    img_number++;
    timer = setTimeout(selected_img, 3000);
}

//manual_change - change img manually by click
function manual_change() {
    document.querySelectorAll(".dots_navigation").forEach(function (value) {
        value.addEventListener("click", function () {
            img_number = parseInt($(this).attr("data-img"));
            selected_img();
        })
    });
}

document.addEventListener("DOMContentLoaded", function () {
    create_dots();
    selected_img();
    manual_change();
});