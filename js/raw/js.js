$(document).ready(function(){

var Onload= new Promise(
    
function (LoadData,Error){
    
    if(LoadData){
        $( ".loading" ).fadeOut( 7000 );
        $('.titleloading').addClass('animated bounce').fadeOut( 7000 );


           $('.fa-plus').on('click',function(){
                $data=$(this.attributes);



        });
        var load="GetData";
        LoadData(load);   
    }
else {
    var message= new Error('X - Message');
    Error(message);
}
}
    

);
});
