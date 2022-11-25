window.onload = () => {   
    const result = document.querySelector('.result-number')
    const operation = document.querySelector('.operation')
    const typed = Array.from(document.querySelectorAll('.carac'))
    let currentOperation = ''
    let zeroDivision = false
    let firstNumber = 0
    
    const addNumberOnScreen = (input) => {
        result.style.transition = '0.3s'
        result.style.fontSize = "2rem"
        
        if(result.innerHTML.length == 10) return
        if(result.innerHTML == '0' && input == '0') return
        
        if(zeroDivision) {
            result.innerHTML = 0
            zeroDivision = false
        }
        if(result.innerHTML == '0' && input != '0'){
            result.innerHTML = input
        } else {
            result.innerHTML = `${result.innerHTML}` + `${input}`
        }
    }
    
    const clearResult = () => {
        result.innerHTML = 0
        firstNumber = 0
        currentOperation = ''
        operation.innerHTML = ''
    }

    const storeNumber = (e) => {
        if(e === '-' && result.innerHTML.length == 1 && result.innerHTML === '0') {
            result.innerHTML = '-'
            return
        }
        operation.innerHTML = e
        currentOperation = e
        if(result.innerHTML != 0 && result.innerHTML != '-') firstNumber = result.innerHTML
        result.innerHTML = 0
    }

    const operate = () => {
        if(!currentOperation) return
        if(currentOperation === '/' && result.innerHTML === '0') {
            result.style.fontSize = "1.5rem"
            result.style.transition = '0s'
            result.innerHTML = 'ImpossÃ­vel dividir por 0'
            zeroDivision = true
            return
        }

        result.innerHTML = (eval(`${firstNumber} ${currentOperation} ${result.innerHTML}`))
        currentOperation = ''
        operation.innerHTML = ''
    }

    typed.forEach((e) => {
        e.style.transform = 'translateY(0%)'
        e.style.opacity = 1
        e.onclick = () => {
            switch(e.innerHTML) {
                case "/":
                    storeNumber(e.innerHTML)
                    break
                case "*":
                    storeNumber(e.innerHTML)
                    break
                case "-":
                    storeNumber(e.innerHTML)
                    break
                case "+":
                    storeNumber(e.innerHTML)
                    break
                case "=":
                    operate()
                    break
                case "C":
                    clearResult()
                    break
                default:
                    addNumberOnScreen(e.innerHTML)
            }
        }
    })
}