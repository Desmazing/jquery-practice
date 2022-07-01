
$(document).ready(function(e){
    $("button").click(function(){
        if (this.value == 'hide'){
            $(this).text("Click Me To Show Paragraph")
            $("p").hide();
            (this.value = 'show');
    }else{
            $(this).text("Click Me To Hide Paragraph")
            $("p").show();
            (this.value = 'hide');
    }
    })
})
