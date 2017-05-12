(function($) {
    "use restrict";
    
   jQuery(document).ready(function($){
    
   // Code For Image Pop Up
       $(".project-expan").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
            },
        });
       
  // Code For Isotope
        $(".project-title li").on('click', function(){
            
            $(".project-title li").removeClass("active");
            $(this).addClass("active");
            
            var selector = $(this).attr('data-filter');
            $(".project-list").isotope({
                filter: selector
            });
        });
              
   }); 
    
    jQuery(window).load(function(){
    
        jQuery(".project-list").isotope();
        
    });
    
}(jQuery));

 
