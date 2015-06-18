// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
   
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
/*--this is for the sidemenu webpage apply in this state in all webpage there want the sidebar*/
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })
/*--this is for the without sidemenu webpage apply in this state in all webpage there want the sidebar*/  
  .state('apps', {
    url: "/apps",
    abstract: true,
    templateUrl: "templates/withoutlogin.html",
    controller: 'AppCtrl'
  })
  
  .state('newoffer', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/newoffers.html",
    controller: 'AppCtrl'
  })
  
  /*--this is for the backbutton webpage apply in this state in all webpage there want the sidebar*/
    .state('buttonapp', {
    url: "/buttonapp",
    abstract: true,
    templateUrl: "templates/withbackbutn.html",
    controller: 'AppCtrl'
  })
  

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.dummy', {
    url: "/dashboard",
    views: {
      'menuContent': {
        templateUrl: "templates/dashboard.html",
		controller: 'contenntbox'
      }
    }
  })
  
  
  
  .state('app.dashboard', {
    url: "/dashboard",
    views: {
      'menuContent': {
        templateUrl: "templates/dashboard.html",
		controller: 'contenntbox'
      }
    }
  })
  
  
  
  
  
  .state('apps.new', {
    url: "/login",
    views: {
      'menuContent': {
        templateUrl: "templates/login.html"
      }
    }
  })
  
  /* controller for the listoffer of outstore dashboard onclick offer for yous the offer */
    .state('app.listoffer', {
    url: "/listoffer",
    views: {
      'menuContent': {
        templateUrl: "templates/listoffer.html"
      }
    }
  })
  
  /* End controller for the listoffer of outstore dashboard onclick offer for yous the offer */
  
  .state('buttonapp.registration', {
    url: "/registration",
    views: {
      'menuContent': {
        templateUrl: "templates/registration.html"
      }
    }
  })
  
  .state('apps.login', {
    url: "/forgot",
    views: {
      'menuContent': {
        templateUrl: "templates/forgot.html"
      }
    }
  })
  
  	/* start of side menu dashboard */

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })
	
	
	
	.state('apps.logout', {
      url: "/logout",
      views: {
        'menuContent': {
          templateUrl: "templates/login.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })
	
	/* End of side menu dashboard */
	.state('apps.newoffers', {
      url: "/newoffers",
      views: {
        'menuContent': {
          templateUrl: "templates/newoffers.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

	.state('buttonapp.bosteroffer', {
      url: "/boosteroffer",
      views: {
        'menuContent': {
          templateUrl: "templates/boosteroffer.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/apps/login');
});




