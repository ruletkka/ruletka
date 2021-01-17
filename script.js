var field=$("#text");
        var text=field.val();
        var text2=field.val();
        $("#text").on("keydown", function(event){
            
            if (event.which===13) {
                text="<li class=\"item\">"+String(field.val())+"</li>";
                $(".list").append(text);
                text2="<div class=\"element\">"+String(field.val())+"</div>";
                $(".ruletka").append(text2);
                field.val("");
            };

            $("li").on("click", function(){
                $(this).remove();
            });
        });
$("#rotate").on("click",function(){
    
})
