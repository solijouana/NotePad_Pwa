function add(number, callback) {
    if (number > 10) {
        
        //callback(true,'The Number biger than 10');
        callback('The Number biger than 10');

        return;
    }
    setTimeout(function () {
        callback(false, number + 1);
    }, 1000);

}

add(11, function (error, res) {
    if (error) {

        console.log(error);
        return;
    }

    console.log(res);
})