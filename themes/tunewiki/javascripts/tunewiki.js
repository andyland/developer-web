$(window).resize(function(){
  resizeSpan9();
});

$(function() {
  resizeSpan9();
});

function resizeSpan9() {
    var span9 = $(".span9");
    var pos = span9.offset();
    var padding = span9.css("padding-left");
    padding = padding.replace("px", "");
    span9.width($(window).width()-pos.left-padding);
}
