$(document).ready(function(){

    $('.nav-page').each(function(){
        console.log(`cleaned ${$(this).data('page')}!`)
        $(this).data('page', $(this).data('page'))
        $(this).removeAttr('data-page')
    })

    $(document).on('click', '.nav-page', function(){
        $('.nav-page.is-active').removeClass('is-active')
        $(this).addClass('is-active')
    })
})

function grabPage(loc){

}

function loadPage(page){

}
