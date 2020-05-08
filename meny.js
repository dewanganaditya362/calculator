$(document).ready(function(){
 
    $("span").on("click",function(){
        
        if($(this).text()=="C")
            {
                $("input").val("");
                
            }
        
        else if($(this).text()=="="){
            
            if($("input").val()=="")
                {   
                      $("input").val("Please enter something");
                     setTimeout(function(){
                         $("input").val("");
                     },2000);
                    clearTimeout();
                }
            
            else{
            
            var p = eval($("input").val());
        
            $("input").val(p);
            }
        
        }
        
        else{
            
        $("input").val($("input").val() + $(this).text());
            
        }
    });
    
 });