var form1 = document.getElementById('form1')
var result = document.getElementById('result')

form1.addEventListener('submit', (e) => {
    var a = document.getElementById('a')
    var b = document.getElementById('b')
    var c = document.getElementById('c')

    console.log(b)
    console.log(b.value == "")
    if (b.value == "") {b = 0} 
    b = parseInt(b.value)

    a = parseInt(a.value)
    c = parseInt(c.value)

    x1 = (-b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)
    console.log(x1)

    x2 = (-b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a)
    console.log(x2)

    result.innerText = "Return: " + x1 + ", " + x2
    
    e.preventDefault()
})

// #finish soon! hehe