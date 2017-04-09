var app = angular.module('goVita', ['ngAnimate','ui.bootstrap']);

app.controller('mainController', function($scope, $rootScope, $window,$location, $anchorScroll) {

$scope.scrollTopDistance=0;
$scope.showImage=true;
$scope.showModal=false;
$scope.showAlert=false;

$scope.isNavCollapsed = true;

$scope.mainQuotes=[{ quote1:'100% No',
quote2:'Preservatives'}, 
{quote1:'Real',
quote2:'Fresh'},
{quote1:'Health',
quote2:'Consciousness'}];

$scope.chefRecommendations = [
{
imageUrl:'css/images/pizza.jpg',
title:"Hummus Flatbread Pizza",
description:"Rice noodles or rice vermicelli with chicken, prawn or fish, served in spicy soup based on rich and spicy curry coconut milk, or based on sour asam",
color:'#d66a00'
},
{imageUrl:'css/images/croquettes.jpg',
title:"Chickpea Croquettes",
description:"Aromatic rice infused with coconut milk and pandan leaves, eaten with deep-fried fish or chicken wings, 'otah' (grilled fish paste), fried 'ikan bilis' (local anchovies) and peanuts, eggs, cucumber slices, and 'sambal' (spicy chilli paste).",
color:'#006400'},
{imageUrl:'css/images/sesameNoodles.jpg',
title:'Hummus-Sesame Noodles',
description:"Fried pre-cooked rice, a meal including stir fried rice in small amount of cooking oil, spiced with kecap manis (sweet soy sauce), shallot, garlic, ground shrimp paste, tamarind and chilli and accompanied by other ingredients, egg, chicken and prawns",
color:'#B20000'}];

$scope.products=[
{
index:0,
imageUrl:'css/images/pdt1.jpg',
title:'Roasted Garlic Hummus',
description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'+ 
'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'+
'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non'+
'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
price:110
},
{
index:1,
imageUrl:'css/images/pdt2.jpg',
title:'Roasted Pepper Hummus',
description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'+ 
'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'+
'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'+
'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
price:180
},
{
index:2,
imageUrl:'css/images/pdt3.jpg',
title:'Satay Peanut Sauce',
description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'+ 
'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'+
'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'+
'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
price:185
},
{
index:3,
imageUrl:'css/images/pdt4.jpg',
title:'Roasted Tomato Sauce',
description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'+ 
'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'+
'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'+
'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
price:186
},
{
index:4,
imageUrl:'css/images/pdt4.jpg',
title:'Roasted Tomato Sauce',
description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'+ 
'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'+
'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'+
'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
price:186
}
,
{
index:5,
imageUrl:'css/images/pdt4.jpg',
title:'Roasted Tomato Sauce',
description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'+ 
'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'+
'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'+
'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
price:186
}
,
{
index:6,
imageUrl:'css/images/pdt4.jpg',
title:'Roasted Tomato Sauce',
description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'+ 
'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'+
'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'+
'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
price:186
}
];

$scope.product= $scope.products[0];
$scope.quantity=1;
$scope.emptyCart=true;
$scope.cart=[];
$scope.total=0;

$scope.goTo= function(id){
 $location.hash(id);
 $anchorScroll();

}

$scope.selectProduct = function(i)
{
  $scope.product=$scope.products[i];
  $scope.selectedIndex=i;
  $scope.quantity=1;
}

$scope.addToCart = function(){
  $scope.quatity=1;
  $scope.emptyCart=false;
  if($scope.cart.length==0)
  {
  var cart={
    index:$scope.product.index,
    quantity:$scope.quantity,
    price:$scope.quantity*$scope.product.price};
  ($scope.cart).push(cart);
  $scope.total+=cart.price;
  }
  else
  {
    var flag=0;
    for(var i=0; i<$scope.cart.length;i++)
    {
      if($scope.cart[i].index==$scope.product.index)
      {
        var temp=($scope.quantity*$scope.product.price);
        $scope.cart[i].quantity+=$scope.quantity;
        $scope.cart[i].price+=temp;
        $scope.total+=temp;
        flag=1;
        break;
      }
    }
    if(flag==0)
    {
      var cart={
    index:$scope.product.index,
    quantity:$scope.quantity,
    price:$scope.quantity*$scope.product.price};
    $scope.total+=cart.price;
  ($scope.cart).push(cart);
    }
  }
}

$scope.removeFromCart = function(index)
{
  for(var i=0; i<$scope.cart.length;i++)
  {
    if($scope.cart[i].index == index)
    {
      $scope.total-=$scope.cart[i].price;
      $scope.cart.splice(i,1);
      break;
    }
  }
  if($scope.cart.length==0)
    $scope.emptyCart=true;
}

$scope.toggleModal = function() {
    $scope.showModal = !$scope.showModal;
    $scope.showAlert = false;
    
  };

$scope.submitOrder = function(){
  $scope.showAlert = true;
}
});

app.directive('mainSlider',['$interval',function($interval){
return{
  restrict:'E',
  scope:{
    quotes :'='
  },
  templateUrl:'templates/mainSlider.html',
  link:function(scope,element,attrs){
    var currentSlideIndex=0;
   for(var i=0; i<scope.quotes.length;i++){
    //scope.quotes[i].leftIndex=100;
    scope.quotes[i].class=false;
    // leftIndex+=100;
   }
   scope.quotes[0].class=true;
 

   //the default slider implemented with interval
   scope.timer=$interval(function(){
    scope.quotes[currentSlideIndex].class=false;
    currentSlideIndex++;
    if(currentSlideIndex != scope.quotes.length)
    {
      scope.quotes[currentSlideIndex].class=true;
    }
    else
    {
      currentSlideIndex=0;
      scope.quotes[0].class=true;
    }
    }
    , 3000);
   element.on('$destroy', function() {
            $interval.cancel(scope.timer);

          });

   //when a different slide is clicked on this will be excecuted
   scope.changeSlide = function(index)
   {
    scope.quotes[currentSlideIndex].class=false;
    currentSlideIndex=index;
    if(currentSlideIndex != scope.quotes.length)
    {
      scope.quotes[currentSlideIndex].class=true;
    }
    else
    {
      currentSlideIndex=0;
      scope.quotes[0].class=true;
    }
    $interval.cancel(scope.timer);
    scope.timer=$interval(function(){
    scope.quotes[currentSlideIndex].class=false;
    currentSlideIndex++;
    if(currentSlideIndex != scope.quotes.length)
    {
      scope.quotes[currentSlideIndex].class=true;
    }
    else
    {
      currentSlideIndex=0;
      scope.quotes[0].class=true;
    }
    },3000);
  }
}
};
}]);

app.directive('changeDisplay',function(){
  
    return{ 
  restrict:'A',
  link:function(scope,element,attrs){

    element.on('click',function(){
     var id=attrs.toChange;
     var displayValue=angular.element(document.getElementById(id)).css('display');
     if(displayValue=='none' || displayValue=="")
     angular.element(document.getElementById(id)).css('display','initial');
   else
    angular.element(document.getElementById(id)).removeAttr('style');
    })
  }
   
 };
});
app.directive('chinkicha',['$window',function($window){
  
    return{
  restrict:'E',
  scope:{
    val1:'@',
    val2:'='
  },
  template:'<h1 ng-show="val2">lhavanya</h1>',
  link:function(scope,element,attrs){

    attrs.$observe('val1',function(){
      console.log("Hi");
          if(scope.val1=="true")
      scope.val2=true;
    else
      scope.val2=false;
    })
  }
   
 };
}]);


app.directive('trackScroll',['$window',function($window){

  return {
    link:function link(scope, element, attrs) {
  angular.element($window).on('scroll',function(e){
   scope.scrollTopDistance=$window.pageYOffset;
  })

}
  };
}]);

app.directive('animateScroll',['$window',function($window){
  
    return{ 
  restrict:'A',
  scope:{
    scrollDistance:'@',
    showVar:'='
  },
  link:function(scope,element,attrs){
 var elemente = angular.element(document.querySelector('.pages')); 
var height = elemente[0].clientHeight;
attrs.offset=height;
attrs.$observe('scrollDistance',function(){
      if(scope.scrollDistance>=(attrs.offset/3)){
         scope.showVar=false;
     }
             })
    }
  };
}]);

app.directive('mySpinner',function(){

return{
  restrict:'E',
  scope:{
   spinnerValue:'='
  },
  templateUrl : 'templates/mySpinner.html',
  link:function(scope,element,attrs){
  
  scope.increase = function(){
    if(scope.spinnerValue<100)
    scope.spinnerValue++;
  }

  scope.decrease = function(){
    if(scope.spinnerValue>1)
    scope.spinnerValue--;
  }
  }
};
});

app.directive('cartBox',function(){

return{
  restrict:'E',
  templateUrl : 'templates/cartBox.html',
  link:function(scope,element,attrs){
    scope.imageWidth=120;
    scope.marginOffset=50;
    scope.leftIndex=scope.marginOffset;
    scope.totalWidth= (scope.products.length * scope.imageWidth);
    scope.cutOff=-(scope.totalWidth-scope.imageWidth)+50;
    scope.moveRight=function(){
      if (scope.leftIndex!=scope.cutOff)
    scope.leftIndex-=scope.imageWidth;

    }
    scope.moveLeft=function(){
      if (scope.leftIndex!=scope.marginOffset)
    scope.leftIndex+=scope.imageWidth;

    }
  }
};
});


app.directive('myModal',function(){
  return{
    restrict:'E',
    scope:{
    showVariable : '='
    },
    replace: true,
    transclude:true,
    templateUrl:'templates/myModal.html',
    link:function(scope,element,attrs){
      scope.sizeStyle = {};
      if (attrs.width)
        scope.sizeStyle.width = attrs.width;
      if (attrs.height)
        scope.sizeStyle['min-width'] = attrs.height;
      scope.hideModal = function(){
        scope.showVariable=false;
      }
    }
  };
});

app.directive('mySlider',['$window','$timeout',function(window,$timeout){
   return{
    restrict:'E',
    //scope:false, learn the meaning of this
    scope:{
      //after isolating scope you cannot get objects from the controllers $scope anymore
      //https://www.undefinednull.com/2014/02/11/mastering-the-scope-of-a-directive-in-angularjs/
     info:'='
    },
    templateUrl : 'templates/mySlider.html',
    link : function(scope,element,attrs){
       
      var height=window.innerHeight;
      var totalVerticalHeight= (height * 85 /100 -30)*scope.info.length;
      scope.divHeight= (height*50)/100;
      scope.paddingHeight=(height*15)/100;
      scope.horizontalWidth=(window.innerWidth*45/100);
      var containerWidth=scope.horizontalWidth*(scope.info.length);

      var verticalElement= angular.element(document.getElementsByClassName("verticalScroll")[0]);
      var horizontalElement= angular.element(document.getElementsByClassName("horizontalScroll")[0]);

      verticalElement.bind('mousewheel DOMMouseScroll', function(e){
        $timeout( function(){
        (document.getElementsByClassName("horizontalScroll")[0]).scrollLeft=((document.getElementsByClassName("verticalScroll")[0]).scrollTop*containerWidth)/totalVerticalHeight}
        , 100 );
            
      });
      horizontalElement.bind('mousewheel DOMMouseScroll', function(e){
        $timeout( function(){
        (document.getElementsByClassName("verticalScroll")[0]).scrollTop=((document.getElementsByClassName("horizontalScroll")[0]).scrollLeft*totalVerticalHeight)/containerWidth}
        , 100 );
        
      });
    }

   };
}]);

