
 const config = {
    apiKey: "AIzaSyA_ECTvmFcCLgJdgWVflcRtMkEszNmloOQ",
    authDomain: "mydata-d5748.firebaseapp.com",
    databaseURL: "https://mydata-d5748.firebaseio.com",
    projectId: "mydata-d5748",
    storageBucket: "mydata-d5748.appspot.com",
    messagingSenderId: "1097794308491"
  };
 
 angular.module("fbApp",['firebase','ngRoute'])
.config(['$locationProvider',($locationProvider)=>{

$locationProvider.hashPrefix('')

}])
.config(['$locationProvider','$routeProvider',($locationProvider,$routeProvider)=>{

$routeProvider
.when('/about',{

    templateUrl:"views/about.html"
    

})
.otherwise({
    redirectTo:'/'
})


}])
// .controller("myctrl",['$scope','$log','$firebaseArray','$firebaseObject',($scope,$log,$firebaseArray,$firebaseObject)=>{

  
//   $log.info("welcome firebase")
//   $log.info(config)
// firebase.initializeApp(config)
// let dataHead = firebase.database().ref()
// let msgdb = dataHead.child('msg')

// $scope.msg = $firebaseArray(msgdb) 
// //$scope.msg.$add("daxesh")
// $log.info("msg saved",JSON.stringify($scope.msg))

// }])
// .controller("msgCtrl",['$scope','$log',($scope,$log)=>{

// $scope.addMsg = ()=>{

// let msg = {
//  name: $scope.nameMsg,
//  email:$scope.emailMsg,
//  msg:$scope.msgText
// }

// $log.info(msg)
// $scope.msg.$add(msg)


// }


// }])

