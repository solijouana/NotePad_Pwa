function add(number) {
    return new Promise(function (resolved, reject) {
        if (number >= 4) {
            reject("This Number Biger than 4");
        }

        setTimeout(function () {
            resolved(number + 1);
        }, 1000);
    });
}

add(4)
    .then(function (res) {
        console.log(res);
    })
    .catch(function (res) {
        console.log(res);
    });