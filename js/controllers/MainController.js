app.controller('MainController', ['$scope', function ($scope) {
    $scope.title = 'Andrew\'s Deals';
    $scope.promo = 'On sale now!';
    $scope.products =
        [
            {
                name: 'The Book of Trees',
                price: 19,
                pubdate: new Date('2014', '03', '08'),
                cover: 'img/the-book-of-trees.jpg',
                likes: 0,
                dislikes: 0
            },
            {
                name: 'Program or be Programmed',
                price: 8,
                pubdate: new Date('2013', '08', '01'),
                cover: 'img/program-or-be-programmed.jpg',
                likes: 0,
                dislikes: 0
            },
            {
                name: 'Ready Player One',
                price: 19.99,
                pubdate: new Date('1988', '12', '08'),
                cover: 'img/ready-player-one.jpg',
                likes: 0,
                dislikes: 0
            },
            {
                name: 'Armada',
                price: 10,
                pubdate: new Date('2012', '12', '11'),
                cover: 'img/armada.jpg',
                likes: 0,
                dislikes: 0
            }
        ];
    $scope.plusOne = function (index) {
        $scope.products[index].likes += 1;
    };
    $scope.minusOne = function (index) {
        $scope.products[index].dislikes += 1;
    };
}]);