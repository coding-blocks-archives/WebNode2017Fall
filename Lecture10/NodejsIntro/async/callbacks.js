
function one (a, onecb) {
    console.info(a)
    onecb(a+1, function (c, threecb) {
        console.info(c)
        threecb(c+1, (e) => {
            console.info(e)
            console.info(a)
            console.info(c)
        })
    })
}

one(1, function (b, twocb) {
    console.info(b)
    twocb(b+1, function (d, fourcb) {
        console.info(d)
        fourcb(d+1)
    })
})

