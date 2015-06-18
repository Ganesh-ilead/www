angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  //// Triggered in the login modal to close it
  //$scope.closeLogin = function() {
    //$scope.modal.hide();
  //};

  //// Open the login modal
  //$scope.login = function() {
    //$scope.modal.show();
  //};   

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
	console.log('entered login function');
    console.log('Doing login', $scope.loginData);
	
	//Navigate to dummy page after successfull login
	$state.go("app.dummy");
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  console.log('entered playlistsctrl');
  $scope.playlists = [
    { title: 'Reggae'},
    { title: 'Chill' },
    { title: 'Dubstep'},
    { title: 'Indie' },
    { title: 'Rap'},
    { title: 'Cowbell'}
  ];
})


.controller('MerchantDetails', function($scope) {
  console.log('entered MerchantPoints');
  $scope.marchantpoints =  200 ;
  $scope.marchantrewards =  "02" ;
})


.controller('textmerchant', function($scope) {
  console.log('entered MerchantPoints');
  $scope.merchant =  "Merchant points" ;
  
})


.controller('rightcontent', function($scope) {
  console.log('entered rightcontent');
  $scope.content =  18809 ;
  
})


.controller('percentctrl', function($scope) {
  console.log('entered percentctrl');
  $scope.percent =  "100%" ;
  
})




.controller('textreward', function($scope) {
  console.log('entered MerchantPoints');
  $scope.merchantreward =  "Merchant Reward" ;
  
})


.controller('menu', function($scope) {
  console.log('entered menuimg1');
  $scope.menuimg = { path:'img/profile-pic.png',title:'Julia erin' } ;
  
})




.controller('contenntbox1', function($scope) {
  console.log('entered MerchantPoints');
  $scope.contenttitle =  "Latest Merchant Reward" ;
  $scope.contenttitle2 =  "Upcoming Reward" ;
  $scope.contenttitle3 =  "Wishlist" ;
  $scope.contenttitle4 =  "Recommended Offers" ;
  $scope.contenttitle5 =  "New offers" ;
  
  
})

.controller('contenntbox', function($scope) {
  console.log('entered contenntbox');
  $scope.contentboxdescp = [
    { path:'ion-android-favorite step size-32', title: 'Latest merchant reward', description:'French Connection Solid Mens',description2:'Polo T-shirtfree for 100 reward point  ', rewarddetails:'You have 3 more rewards enjoy',},
	{ path:'ion-ios-star-half step size-32', title: 'upcoming reward', description:'You can claim  Your free wrist watch  ',description2:'For only 15 reward point ', rewarddetails:''},
	{ path:'ion-ios-star-outline step size-32', title: 'wishlist', description:'You have liked 3 offers   ',description2:'You will find the liked items in your wishlist ', rewarddetails:''},
	{ path:'ion-document-text step size-33 ', title: 'recommended offers', description:'Recommended 4 offers  ',description2:'You will find them interesting ', rewarddetails:''},
	{ path:'ion-ios-cog-outline step size-32', title: 'new offers', description:'You will find them interesting  ',description2:' ', rewarddetails:'',rdirect:'#/buttonapp/boosteroffer'},
    
  ];
})


.controller('outstorescroll', function($scope) {
  console.log('entered outstorescroll');
  $scope.scrollright = [
    { img:'img/bJ-img.png', btn: 'view all offer', description:'French Connection Solid Mens',description2:'Polo T-shirtfree for 100 reward point  ', rewarddetails:'You have 3 more rewards enjoy',},
	{ path:'ion-ios-star-half step size-32', title: 'upcoming reward', description:'You can claim  Your free wrist watch  ',description2:'For only 15 reward point ', rewarddetails:''},
	{ path:'ion-ios-star-outline step size-32', title: 'wishlist', description:'You have liked 3 offers   ',description2:'You will find the liked items in your wishlist ', rewarddetails:''},
	{ path:'ion-document-text step size-33 ', title: 'recommended offers', description:'Recommended 4 offers  ',description2:'You will find them interesting ', rewarddetails:''},
	{ path:'ion-ios-cog-outline step size-32', title: 'new offers', description:'You will find them interesting  ',description2:' ', rewarddetails:'',rdirect:'#/buttonapp/boosteroffer'},
    
  ];
})


.controller('social', function($scope, $stateParams) {
	console.log('entered playlistctrl');
	$scope.google="ion-social-googleplus social";
	$scope.face="ion-social-facebook socialface ";
	$scope.twt="ion-social-tumblr socialface "
	
})



.controller('iconic', function($scope, $stateParams) {
	console.log('entered playlistctrl');
	$scope.icon="ion-ios-arrow-right step size-34"
	$scope.boostericon="ion-ios-cog-outline step size-icon  "
	$scope.boostericonarrow="ion-ios-cog-outline step size-32 "
})


.controller('footertabs', function($scope, $stateParams) {
	console.log('entered playlistctrl');
	$scope.price="ion-ios-pricetag-outline footericn ";
		$scope.usd="ion-social-usd footericn ";
		$scope.cart="ion-ios-cart footericn ";
		$scope.graph="ion-arrow-graph-up-right footericn ";
		$scope.loyality="ion-ios-shuffle-strong footericn ";
		
		$scope.myPathVariable = '#/buttonapp/registration';
		$scope.forgot = '#/apps/forgot';
})




.controller('backbuton', function($scope, $stateParams) {
	console.log('entered playlistctrl');
	
		$scope.back = '#/apps/login';
})


.controller('forgotlnk', function($scope, $stateParams) {
	console.log('entered playlistctrl');
	
		$scope.reset = '#/apps/forgot';
})


.controller('PlaylistCtrl', function($scope, $stateParams) {
	console.log('entered playlistctrl');
})

.controller('NewOffers', function($scope, $stateParams) {
	console.log('entered playlistctrl');
	$scope.offer="Canadian Colada, Same Greate flavor, Greate New Price.."
})


.controller('BoosterOffers', function($scope, $stateParams) {
	console.log('entered playlistctrl');
	$scope.offer="Free Wheatgrass Smoothie for 100 points.."
})

.controller('flag', function($scope, $stateParams) {
	console.log('entered flagname');
	$scope.flagtxt="New"
})



angular.module('ionicApp', ['ionic'])

.controller('MainCtrl', ['$scope', function($scope) {
  $scope.data = {
    isLoading: false
  };
  
  
}]);