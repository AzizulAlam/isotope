(function($) {
    "use restrict";
    
   jQuery(document).ready(function($){
    
//    $(".video-play-btn").magnificPopup({
//       type:'video', 
//    });
    
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

 