$(document).ready(function(){
    $('#itemOne').on('click', function(){
        $('#about').css('display', 'block');
        $('#portfolio').css('display', 'none');
        $('#contact').css('display', 'none');
    })
    $('#itemTwo').on('click', function(){
        $('#about').css('display', 'none');
        $('#portfolio').css('display', 'block');
        $('#contact').css('display', 'none');
    })
    $('#itemThree').on('click', function(){
        $('#about').css('display', 'none');
        $('#portfolio').css('display', 'none');
        $('#contact').css('display', 'block');
    })
})