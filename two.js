var game = ['rock', 'paper', 'scissors'],
		reset = document.getElementById('reset'),
		decision = document.getElementById('decision'),
		input = [].slice.call(document.getElementsByName('human')),
		gameover = document.getElementById('gameover'),
		whowon = document.getElementById('whowon'),
		explain = document.getElementById('explain');

// onclick of "new game" add and remove classes from elements
reset.addEventListener('click', function(){
	if (decision.classList.contains('fadeout')) {
		decision.classList.add('zoomin');
		decision.classList.remove('fadeout');
		gameover.classList.add('zoomin');
	}
	// computer chooses random number from 0 to 2. this will later be according element in array game.
	var pc = Math.floor((Math.random() * (3-0) ));
	this.classList.add('fadeout');
	decision.classList.remove('zoomin');

// if any input element is clicked, then wait a bit and add/remove classes
	input.forEach(function (element, index){
		element.addEventListener("click", function(){
			setTimeout(function(){
				reset.classList.remove('fadeout')
				decision.classList.add('fadeout');
				gameover.classList.remove('zoomin');
			}, 300);

// who will win? print winner out.
			if (element.id == 'rock' && game[pc] == 'scissors' ||
					element.id == 'scissors' && game[pc] == 'paper' ||
					element.id == 'paper' && game[pc] == 'rock' ) {
				whowon.innerHTML = "You won!"
			} else if (element.id == 'rock' && game[pc] == 'rock' ||
								element.id == 'scissors' && game[pc] == 'scissors' ||
								element.id == 'paper' && game[pc] == 'paper' ) {

				whowon.innerHTML = "It is even!"
			} else{
				whowon.innerHTML = "You lose!"
			}
			explain.innerHTML = "You chose " + element.id + " and pc chose " + game[pc] + "."
			
		});
	});
});
