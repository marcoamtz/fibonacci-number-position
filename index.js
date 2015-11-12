function miau(num) {
	var myArray = [1,1];
	var currentNum;

	for (i = 0; i < num; i++) {
		currentNum = myArray[myArray.length-1] + myArray[myArray.length-2] 
		myArray.push(currentNum);
		if (currentNum > num) {
			return myArray;
		}
	}
}