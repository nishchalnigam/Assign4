export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('readReview', {
      url: '/readReview',
      templateUrl: 'app/readReview/readReview.html',
      controller: 'ReadReview',
      controllerAs: 'readReview'
    })
    .state('postReview', {
      url: '/postReview',
      templateUrl: 'app/postReview/postReview.html',
      controller: 'PostReview',
      controllerAs: 'postReview'
    })
    .state('listBooks', {
      url: '/listBooks',
      templateUrl: 'app/listBooks/listBooks.html',
      controller: 'ListBooks',
      controllerAs: 'listBooks'
    });

  $urlRouterProvider.otherwise('/');
}
