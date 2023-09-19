$(function () {

    $("div#hamburger-content").click (function () {
        $("div#menu").addClass ('open')
    })

    $("div#close").click (function () {
        $("div#menu").removeClass ('open')
    })

})