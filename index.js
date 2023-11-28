$(document).ready(function () {
    $('#submit').click(function(){
        var name = $('#name').val()
        var clas = $('#class').val()
        var country = $('#country').val()
        var color = $('#color').val()

        if (color === 'blue'){
            $('.content p').css('color','blue')
            $('.name').text('Name: '+name)
            $('.clas').text('Class: '+clas)
            $('.country').text('Country: '+country)
        }
        else if (color === 'pink'){
            $('.content p').css('color','red')
            $('.name').text('Name: '+name)
            $('.clas').text('Class: '+clas)
            $('.country').text('Country: '+country)
        }
    });

    
});