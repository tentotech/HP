angular.module( 'form' ,[]).controller('post', function($scope, $http) {

    $scope.name = '';
    $scope.text = '';
    $scope.mail = '';
    
    function api(action, params) {
        params = params || {};
        params.action = action;
        return $http.get('js/main.php', {params: params});
    }

    $scope.send = function(){
        if($scope.name == '' || $scope.text == '' || $scope.mail == ''){
             alert("入力されてないフォームがあります。");
        } else {
            api('send', {name:$scope.name, mail:$scope.mail, text:$scope.text}).success(function(res) {
                $scope.name = "";
                $scope.mail = "";
                $scope.text = "";
                console.log(res);
            });
            var inputEl = document.getElementsByClassName( "input" ),
                send = document.getElementsByClassName( "sendbutton" ),
                sended = document.getElementsByClassName( "sended" );

            for (var i = inputEl.length - 1; i >= 0; i--) {
                inputEl[i].classList.remove('input--filled');
            };
            send[0].classList.remove('activesend');
            setTimeout( function(){
                send[0].style.display = "none";
                sended[0].style.display = "block";
                setTimeout( function(){
                    sended[0].classList.add('activesended');
                },50);
            },300);
        }
    };

});