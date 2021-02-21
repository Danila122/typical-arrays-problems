
exports.min = function min(array) {
	if (array.length == 0 || Array.isArray(array) == false  || arguments.length == 0 ) {
		return 0
	}
	
	let newArray = array.sort((a,b)=> a - b);
	
	return newArray[0]

	 
}

exports.max = function max(array) {
	if (array == [] || arguments.length == 0 ) {
		return 0
	}
	
	let newArray = array.sort((a,b)=> a - b);
	
	return newArray[array.length - 1]

	 
}

exports.avg = function avg(array) {
	if (array.length == 0 || arguments.length == 0) {
		return 0
		
	}

	let mewArray = 0

	for (let i = 0; i < array.length; i++){
			
		mewArray += array[i]
		
	}

	return mewArray/array.length
}

