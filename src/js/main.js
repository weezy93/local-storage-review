// add scripts

$(document).on('ready', function() {
  // console.log('sanity check!');
  seedLocalStorage();
});

function seedLocalStorage ( ) {
	var data = [
		{
			name: 't-shirt',
			amount: 20,
			quantity: 0
		},
		{
			name: 'pants',
			amount: 200.99,
			quantity: 0
		},
		{
			name: 'hat',
			amount: 20,
			quantity: 0
		}
	];
// checking to see if localStorage has data
// checking for the 'items' key
	if ( !JSON.parse(localStorage.getItem('items')) ){ // if it is there
		localStorage.setItem('items', JSON.stringify(data));
// if the 'items' key is not in local storage, then seed that data
	}

}


// if there is nothing in local storage, then we want to run the seed