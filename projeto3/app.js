(function () {
  'use strict';

  angular.module('BancoApp', [])
    .controller('BancoController', BancoController)

  BancoController.$inject = ['$scope'];
  function BancoController($scope) {

    $scope.valorCarteiraAtual = 200;
    $scope.currentDate = new Date();

    $scope.fazerPix = function () {
      if($scope.valorCarteiraAtual < $scope.valorInput || $scope.valorCarteiraAtual <= 0 ){
        $scope.msg = "Saldo insuficiente!";
        $scope.horario = "";
      } else if ($scope.valorInput <= 0 || $scope.valorInput == "") {
        $scope.msg = "Digite o valor do pix válido!";
      }
      else {
        $scope.valorCarteiraAtual -= $scope.valorInput;
        $scope.msg = "Pix no valor de R$ "+ $scope.valorInput + " realizado com sucesso!";
        $scope.horario = "Data e Horario da transação pix: "+$scope.currentDate+'';
      }

    };

    $scope.fazerDeposito = function () {
        if ($scope.valorInput == "" || $scope.valorInput <= 0) {
        $scope.msg = "Digite o valor do deposito válido!";
        $scope.horario = "";
      }
      else {
        $scope.valorCarteiraAtual += $scope.valorInput;
        $scope.msg = "Depósito no valor de R$ "+ $scope.valorInput + " realizado com sucesso!"
        $scope.horario = "\n"+"Data e Horario do depósito: "+$scope.currentDate+''
      }
    }

  };

})();