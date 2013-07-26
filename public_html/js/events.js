function addNavbarEvents() {
    $("#navigationBar li").each(function(key,value) {
        $(this).bind("click",function(event) {
           var classToSelect = $(this).attr("class");
           console.debug($("."+classToSelect));
           $("#navigationBar li").removeClass("active");
           $(this).addClass("active");
           
           $(".descriptionContainer:visible").animate({'margin-left': ['+6000', 'swing'],
               //height: ['toggle', 'swing']
           },
           2000,function(e) {
               //done
               $(this).hide();
               $("."+classToSelect).slideDown("slow");
           });
           
           
           
           
           
        });
    }); 
}

