angular.module( 'app', [] )

	.controller( 'SpaceController', function( $log, $interval, $timeout, $window, $document, $element ) {

		var vm = this; 

		vm.stars = []; 
		vm.craters = []; 

		var resolution = $window.innerWidth * $window.innerHeight; 

		var numberOfStars = Math.floor( resolution / 1000 );
		var sizeMin = 1, sizeMax = 3; 

		for( var i = 0; i < numberOfStars; i++ ) {

			var sizeTemp = Math.floor( Math.random() * sizeMax ) + sizeMin; 
			var topTemp = Math.random() * 100; 
			var leftTemp = Math.random() * 100; 

			vm.stars.push( {
				size: sizeTemp, 
				top: topTemp, 
				left: leftTemp, 
				active: false
			} );
		}

		var numberOfCraters = 20;
		sizeMin = 20, sizeMax = 80; 

		for( var i = 0; i < numberOfCraters; i++ ) {

			var sizeTemp = Math.floor( Math.random() * sizeMax ) + sizeMin; 
			var topTemp = Math.random() * 100; 
			var leftTemp = Math.random() * 100; 

			vm.craters.push( {
				size: sizeTemp, 
				top: topTemp, 
				left: leftTemp, 
			} );
		}

		//var wrapper = document.querySelector('.Parallax-wrapper'); 
		var wrapper = document.querySelector('.Header'); 
		var parallax = new Parallax( wrapper );  

		// $interval( function() {

		// 	for( var i = getActive(); i < vm.stars.length; i += getActive() ) {
				
		// 		vm.stars[i].active = true;
		// 	}

		// 	$timeout( function() {

		// 		for( var i = 0; i < vm.stars.length; i++ ) {

		// 			vm.stars[i].active = false; 
		// 		}

		// 	}, 1000 ); 

		// }, 2000);

		// function getActive() {

		// 	return Math.floor( Math.random() * 10 ); 
		// }

		$interval( function(){

			var index = Math.floor( Math.random() * vm.stars.length ); 

			vm.stars[index].active = true; 

			$timeout( function() {

				vm.stars[index].active = false; 

			}, 2000 ); 

		}, ( 1 / vm.stars.length) * 35000 ); 

	} ); 