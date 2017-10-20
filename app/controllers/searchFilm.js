(function() {

	var app = angular.module("app")
	app.controller("searchFilm", searchFilm)

	function searchFilm($scope, $http) {
		var API_KEY = '?api_key=b56af1f75df03ba5215b35eb9d11cb83';
		var URL = 'http://api.themoviedb.org/3/';
		var SEARCH = 'search/movie';
		var QUERY = "&query=";
		var MOVIE_CREDIT = "movie_credits";
		$scope.SITE_PATH="http://image.tmdb.org/t/p/w500/"
		$scope.title = 'search ctrl';
		$scope.moviesLoaded=false;
		$scope.getFilms = function() {
			var promise = $http.get(URL + SEARCH + API_KEY + QUERY + $scope.searchFilms);
			promise.then(successCallback, failureCallback)

			function successCallback(result) {
				console.log("successCallback", result.data.results)
				$scope.films = result.data.results;
			}

			function failureCallback(result) {
				console.log("failureCallback", result)
			}
		}
	}

})();
