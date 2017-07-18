let routerApp = angular.module("routerApp",['ngRoute'])
routerApp.config(['$locationProvider',($locationProvider)=>{

$locationProvider.hashPrefix('')

}])
.config(['$locationProvider','$routeProvider',($locationProvider,$routeProvider)=>{

$routeProvider
.when('/about',{

    templateUrl:'views/about.html'
    

})
.otherwise({
    redirectTo:'/'
})


}])