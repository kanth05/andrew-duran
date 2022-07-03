$(document).ready( function(){

    function eventos(){

        $('.nav-link').on( 'click', function(){

            if ( window.innerWidth < 560 && !$('#navbar-toggler').hasClass('collapsed') ) {
                $('#navbar-toggler').addClass('collapsed');
                $('#navbar-toggler').attr('aria-expanded', false);
                $('#navbarTogglerDemo01').removeClass('show');
            }
            
            let href = $(this).attr('href');
            $("html, body").animate({ scrollTop: $(`${href}`).offset().top - 50}, 500);

        });

    }

    //Variables para manejar fechas en el CV
    let year       = document.getElementById('year');
    let curretYear = document.getElementById('curretYear');
    let date = new Date();
    //Volver los años de experiencia de manera dinámica
    year.innerHTML       = date.getFullYear() - 2017;
    curretYear.innerHTML = date.getFullYear();

    eventos();

})

