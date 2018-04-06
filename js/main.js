$( document ).ready( function (e) {
    if ( $( window ).width() <= 700 ) {
        $("#sidebar-caret").removeClass("hidden");
        
        $("#sidebar-caret").click( function(e) {
            if ( $("#sideBar-list").hasClass("mobile-side-nav") ) {
                $("#sideBar-list").removeClass("mobile-side-nav");
            } else {
                $("#sideBar-list").addClass("mobile-side-nav");
            }

        });
    }
});

$( window ).resize( function( e ) {
} );

