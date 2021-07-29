
// СЛАЙДЕР

$('.slider_items').slick({
    dots: true,
    appendDots: $('.dots'),
    infinite: true,
    speed: 0,
    // fade: true,
    // cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
    touchMove: false,
    swipe: false,
});
// $('.slider').slick({
//     dots: true,
//     arrows: false,
//     touchMove: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 200,
//     speed: 300,
// });

// Редактирование онлайна серверов

function editing_online(server, online) {  // server == id сервера в HTML | online == онлайн из базы данных
    $(`#${server}`).val(online)
    $(`#${server}_online`).html(online)
}
// editing_online('server1', 10)