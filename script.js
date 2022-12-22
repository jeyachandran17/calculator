var data_calc = document.querySelector('.data')

function calcfun(e){
    var value_calc = data_calc.innerText
    // console.log(e.innerText)

    var last_element = value_calc.slice(-1)[0]

    var exp_arr = ['+','-','*','/','.']
    if(!exp_arr.includes(last_element)){
        data_calc.innerText = value_calc + e.innerText
    }
    else if(!exp_arr.includes(e.innerText)){
        data_calc.innerText = value_calc + e.innerText
    }
    else{
        console.warn("operator is already an expression")
    }
    
}

// document.querySelector('body').addEventListener('keypress',(e)=>{
//     console.log(e)
// })


var key_trigger = document.querySelector('body')

key_trigger.addEventListener('keypress',(e)=>{
    if(e.code.includes('Digit')||e.code.includes('Numpad')){
        console.log(e.key)
        var value_calc = data_calc.innerText
        data_calc.innerText = value_calc + e.key
    }
    else{
        console.error('Not a Number')
    }

    var last_element = value_calc.slice(-1)[0]

    var exp_arr = ['+','-','*','/','.']
    if(!exp_arr.includes(last_element)){
        data_calc.innerText = value_calc + e.key
    }
    else if(!exp_arr.includes(e.key)){
        data_calc.innerText = value_calc + e.key
    }
    else{
        console.warn("operator is already an expression")
    }
    
})

function poped(){
    // data_calc.innerText=pop()
    // data_calc.innerText[data_calc.innerText.length - 1] = ""
    data_calc.innerText = data_calc.innerText.slice(0, -1);
}

function remove(){
    data_calc.innerText=''
}

function equal_to(){
        data_calc.innerText = eval(data_calc.innerText)
}