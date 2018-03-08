

    

    var mod = angular.module('NgList', []);
    mod.controller('ngCtrl',function($scope){
            
          $scope.remove=function(x){
        
           $scope.data[x].quantity <= $scope.data[x].availability && $scope.data[x].quantity > 0 ? $scope.data[x].quantity= $scope.data[x].quantity -1:alert('Please add some Peens');
              $scope.data[x].quantity <= $scope.data[x].availability && $scope.data[x].quantity > 0 ?$scope.data[x].price= $scope.data[x].price *$scope.data[x].quantity :alert('Please add some Peens');
          }
          
          $scope.add=function(x){
           $scope.data[x].quantity < $scope.data[x].availability ? $scope.data[x].quantity= $scope.data[x].quantity +1:alert('Out of Storage');
           $scope.data[x].quantity < $scope.data[x].availability ? $scope.data[x].price= $scope.data[x].price *$scope.data[x].quantity :alert('Out of Storage');      
              
               
          }
          
        $scope.trash = function (x) {
                $scope.data.splice(x, 1);
            }
           
        $scope.GetTototal = function(){
            var total = 0;
            angular.forEach($scope.data,            function(p){
             pts = p.quantity * p.price;
    })
    return pts;
  }
               
       
        
        $scope.data =[
         {
                "name": "Apple Pen",
                "price": 2.999,
                "quantity": 2,
                "availability": 5,
                "img": "https://metrouk2.files.wordpress.com/2016/09/capture91.png?w=748&h=419&crop=1"
            },
            {
                "name": "Pineapple Pen",
                "price": 5.02,
                "quantity": 3,
                "availability": 3,
                "img": "http://as01.epimg.net/epik/imagenes/2016/09/27/portada/1474966761_962486_1474966872_noticia_normal.jpg"
            },
            {
                "name": "Pen Pineaple Apple Pen",
                "price": 6.78,
                "quantity": 1,
                "availability": 4,
                "img": "https://static.vix.com/es/sites/default/files/styles/large/public/r/ryuk-death-note.png?itok=1MS4ekSf"
            }    
            
        ]
    });
 
  