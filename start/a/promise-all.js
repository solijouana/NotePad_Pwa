var add = new Promise(function (resolved, reject) {
    setTimeout(function () {

        resolved('Add Value');
    }, 400);

});

var minuse = new Promise(function (resolved, reject) {
    console.log('Minuse Resloved');
    resolved('Minuse Value');
});

Promise.race([add, minuse]).then(function (res) {
    console.log(res);

})
    .catch(function (res) {
        console.log(res);

    })