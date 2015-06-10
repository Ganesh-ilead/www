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





/* start code for the dashboard */

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
		$scope.scroll = '#/app/listoffer';
		$scope.forgot = '#/apps/forgot';
		$scope.loyalty = '#/app/loyality';
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



.controller('flagg', function($scope, $stateParams) {
	console.log('entered flagname');
	$scope.flagtxt12="New"
})



  /*cotroller for the out-dashboard */

.controller('scrolhoriztal', function($scope, $stateParams) {
	console.log('entered playlistctrl');
	
		$scope.scrll = '#/app/listoffer';
})

/*End cotroller for the out-dashboard */

/*start contrller for the listoffer */


.controller('boostdiscount', function($scope, $stateParams) {
	console.log('entered flagname');
	$scope.discount="50% Discount on strawberry smoothe"
	$scope.price="$20";
	$scope.strkdollr="$10";
})



.controller('BoosterOffers', function($scope, $stateParams) {
	console.log('entered playlistctrl');
	$scope.offer="Buy 3 Glasses of Wheatgrass and get fourth Free .."
	
})


.controller('offrdetl', function($scope, $stateParams) {
	console.log('entered playlistctrl');
	$scope.offer="canadian colada, same great flavor, Great New Price.. "
	
})


/*End controller for the listoffer */

/* start cotroller for the offerdetail */

.controller('offrpara', function($scope, $stateParams) {
	console.log('entered playlistctrl');
	$scope.para="Lorem ipsum dolor sit amet, at harum labores volumus ius, liber quaestio pertinacia te cum, eum semper legimus cu. Enim eius ea sed, choro mucius labores in cum. Impedit ocurreret ut has. Id his habeo nominavi, ea eum labitur ornatus accusamus. Nec id ipsum tempor, at pri dicant utinam, iriure indoctum no mei. Cibo labore sapientem his te, ex harum option phaedrum pro .  Nec id ipsum tempor, at pri dicant utinam, iriure indoctum no mei. Cibo labore sapientem his te, ex harum option phaedrum pro"
	
})


.controller('showdate', function($scope, $stateParams) {
	console.log('entered playlistctrl');
	$scope.date="1-1-1990 "
	
})


.controller('peplevew', function($scope, $stateParams) {
	console.log('entered playlistctrl');
	$scope.vew="3 people bought this  "
	
})


.controller('bannerimg', function($scope, $stateParams) {
	console.log('entered playlistctrl');
	$scope.banimg={ path:'img/boostoffer.png'} ;
	
})


.controller('rdctoffr', function($scope, $stateParams) {
	console.log('entered playlistctrl');
	
		$scope.offerdtls = '#/app/offerdetail';
})


/* End cotroller for the offerdetail */

/* start classes for the Loyality */

.controller('loyalityhighlhgt', function($scope, $stateParams) {
	console.log('entered playlistctrl');
	$scope.para="Lorem ipsum dolor sit amet, at harum labores volumus ius, liber quaestio pertinacia te cum, eum semper legimus cu. Enim eius ea sed, choro mucius labores in cum. Impedit ocurreret ut has. Id his habeo nominavi, ea eum labitur ornatus accusamus. Nec id ipsum tempor, at pri dicant utinam, iriure indoctum no mei. Cibo labore sapientem his te, ex harum option phaedrum pro .  Nec id ipsum tempor, at pri dicant utinam, iriure indoctum no mei. Cibo labore sapientem his te, ex harum option phaedrum pro"
	
})


.controller('btn-merchant', function($scope, $stateParams) {
	console.log('entered playlistctrl');
	$scope.btnname="Subscribe to this Merchant";
	$scope.btnshare="SHARE";
	
	
})

/*End classes for the Loyality */



angular.module('ionicApp', ['ionic'])

.controller('MainCtrl', ['$scope', function($scope) {
  $scope.data = {
    isLoading: false
  };
  
  

  
  
}]);





