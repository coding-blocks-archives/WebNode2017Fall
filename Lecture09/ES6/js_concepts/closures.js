
for (var i = 0; i < 5; i++) {

    (i => setTimeout(() => console.log(i), 1000*i))(i)

    // (function (i) {
    //     setTimeout(function () {
    //         console.log(i)
    //     }, 1000*i)
    // })(i)


}