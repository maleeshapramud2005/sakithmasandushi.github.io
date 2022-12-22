$(document).ready(function(){
    let currentPage = "home";
    let currentNavLink = $("#nav-ul").children().first().children()[0];

    $("#blog").hide();
    $("#about").hide();
    $("#contact").hide();

    $(".nav-link").click(function(e){
        $(`#${currentPage}`).fadeOut(100)
        $(`#${e.currentTarget.innerHTML}`).fadeIn(500)

        currentPage = e.currentTarget.innerHTML

        $(currentNavLink).removeClass("selected");
        $(this).addClass("selected");
        
        currentNavLink = this;
    })

    let characterIndex = 0;

    let titleNames = ["s", "sa", "sak", "saki", "sakit", "sakith", "sakithm", "sakithma", "sakithmas", "sakithmasa", "sakithmasan", "sakithmasand", "sakithmasandu", "sakithmasandus","sakithmasandush", "sakithmasandushi", "sakithmasandushi.", "sakithmasandushi.m", "sakithmasandushi.ml", "sakithmasandushi.m" , "sakithmasandushi.", "sakithmasandushi", "sakithmasandush", "sakithmasandus", "sakithmasandu", "sakithmasand", "sakithmasan", "sakithmasa", "sakithmas", "sakithma", "sakithm", "sakith", "sakit", "sakit" , "saki" , "sak" , "sa" , "s"];

    window.updateTitleName = function () {
        document.getElementsByTagName("title")[0].innerHTML = titleNames[characterIndex++ % titleNames.length];
    }

    setInterval(() => {
        window.updateTitleName()
    }, 400);
})