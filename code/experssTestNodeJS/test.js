/**
 * Created by djemi on 07.04.15.
 */
angular.module('NoteWrangler').factory('Note', [function NoteFactory() {
    return {
        all: function(){
            return $http({method: 'GET', url: '/notes'});
        }
    };
}]);


angular.module('NoteWrangler')
    .factory('Tweetable',['$http', function TweetableFactory($http){
        return function(){
        };
    }]);

angular.module('NoteWrangler')
    .factory('Tweetable', ['$http', function TweetableFactory($http){
        return $http({method: 'GET', url: '/notes'});
    }
]);
