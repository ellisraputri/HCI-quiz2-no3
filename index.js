$(document).ready(function () {
    $('.content').hide()
    $('#submit').click(function(){
        var name = $('#name').val()
        var clas = $('#class').val()
        var country = $('#country').val()
        var color = $('#color').val()

        if (color == 'blue'){
            $('.name').css('color','blue')
            $('.clas').css('color','blue')
            $('.country').css('color','blue')
            $('.content').show()
        }
        else if (color == 'pink'){
            $('.name').css('color','red')
            $('.clas').css('color','red')
            $('.country').css('color','red')
            $('.content').show()
        }
    });

    
});