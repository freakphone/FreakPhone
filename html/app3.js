(function() {
    var app;
    app = angular.module('gemStore', ['store-directives']);

  app.controller('StoreController', ['$http', function($http){
    //besoin de cette variable comme dans java
    // instantie la variable store avec l'objet/module gemStore
    var store = this;
    //initialise la liste à vide 
    store.products = [];
    //recup donnée de json automatiquement transformer en liste par la fonctionne $http
    // il existe d'autre avec $ devan comme $log etc.
    $http('store-products.json').success(function(data){
      store.products = data;
    });
    $http('store-products.json').error(function($log){
      $log
    });
  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });

})();
