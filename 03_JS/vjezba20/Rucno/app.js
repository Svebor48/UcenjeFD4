// sve mogućnosti su dostupne na
// https://api.jquery.com/
// 354 različitih mogućnosti

$('#pozdravi').click(function(){
    $('#pozdrav').text('Hello world')
    $('#sakrij').show()
})


$('#sakrij').hide()

$('#sakrij').click(function(){
    $('#pozdrav').text('')
    $('#sakrij').hide()
})