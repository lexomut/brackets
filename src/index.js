module.exports = function check(str, bracketsConfig) {
    let arr=[]
    let open=''
    let close=''

    for (item of bracketsConfig) {

        if (item[1] == item[0]) {
            item[0] = 'a'
            item[1] = 'c'
        }
        open +=item[0]
        close+=item[1]
    }
    // console.log(open,close)
    for(let i=0; i<str.length;i++){
        // console.log(i ,arr)
        if (open.includes(str[i]) ){ arr.push(str[i])
            // console.log('кладем в стек',arr)
        }
        else if (close.includes(str[i])){

            if (arr.length==0 || ((arr[arr.length-1]=='[') && (str[i]!==']')) || ((arr[arr.length-1]=='a') && (str[i]!=='c')) ||  ((arr[arr.length-1]=='(') && (str[i]!==')') ) ||  ((arr[arr.length-1]=='1') && (str[i]!=='2')) ||  ((arr[arr.length-1]=='3') && (str[i]!=='4')) ||  ((arr[arr.length-1]=='5') && (str[i]!=='6')))
            {
                // console.log('в цикле')
                return false}
            else arr.pop()
            // console.log(i ,arr)
        }


    }
    // console.log('в конце')
    return arr.length==0?true:false
}
