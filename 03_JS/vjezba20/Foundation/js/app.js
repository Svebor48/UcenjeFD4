$(document).foundation()


$('#promjeniNaslov').click(function(){
    $('#naslov').text('Dobrodošli')
    return false
})


$('#naslov').dblclick(function(){
    $('.callout.primary').css('background-color','gray')
    // text svih paragrafa da bude crvene boje
    $('p').css('color','red')
})