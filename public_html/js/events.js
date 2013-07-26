function addNavbarEvents() {
    $("#navigationBar li").each(function(key,value) {
        $(this).bind("click",function(event) {
           var classToSelect = $(this).attr("class");
           $("#navigationBar li").removeClass("active");
           $(this).addClass("active");
           
            makeThemPuffOut(500,$(".descriptionContainer:visible"));
            $("."+classToSelect+":last").hide().delay(500*5).slideDown("slow");
           
        });
    }); 
}

function makeThemPuffOut(delayDuration,parent) {
    //console.log(parent);
    
    $(parent).children().each(function(key,value) {
        console.log(delayDuration);
        $(this).slideUp(delayDuration);
        delayDuration+=200;
        
    });
    
    
    
}

