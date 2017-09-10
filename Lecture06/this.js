console.log(this)
this.a = 10
console.log(this)

function alpha() {
    console.log(this == global)
    this.b = 11
}

function beta () {
    this.c = 22
}



alpha()
console.log(this)

