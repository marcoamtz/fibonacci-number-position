function request() {

    $.ajax({
        method : "GET",
        url : "https://kueski.com/candidates/get_input",
        data : {
            token : 'a_token'
        }
    }).done(function(data) {
        if (data.result === 'success') {
            if (data.value !== -1) {

                function miau(num) {
                    var myArray = [1, 1];
                    var currentNum;
                    var i = 0;

                    while (i < num) {
                        currentNum = myArray[myArray.length - 1] + myArray[myArray.length - 2]
                        myArray.push(currentNum);
                        if (currentNum > num) {
                            return myArray;
                        }
                        i++;
                    }
                }

                var miauVal = miau(data.value);
                var miauValLength = miau(data.value).length;
                var solutionString = miauVal[miauValLength - 1] + '-' + miauVal[miauValLength - 2];

                $.ajax({
                    method : "POST",
                    url : "https://kueski.com/candidates/send_solution",
                    data : {
                        token : 'a_token',
                        solution : solutionString
                    }
                }).done(function(data) {
                    if (data.result === 'success' && data.score > 0) {
                        request();
                    }

                });
            } else {
                return;
            }
        }
    });

};