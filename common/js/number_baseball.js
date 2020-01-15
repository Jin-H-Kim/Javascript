var defaultNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var num = [];

for(var i=0; i < 4; i++){
    var pick = defaultNum.splice(Math.ceil(Math.random() * (9 - i)), 1)[0];
    num.push(pick)
}

var test1 = [1,3,2,4,2]
var sum = 0;
test1.forEach(function(e){
    sum += e
    //console.log(e)

})
//console.log(test1.indexOf(3))
// for(var i =0; i < test1.length; i++){
//     if(test1.indexOf(0) == test1[i]){
//         console.log(test1.indexOf(0))
//     }
// }





var numTxt = document.createElement('h1');
//numTxt.textContent = num;
document.body.append(numTxt);

var _form = document.createElement('form');
var _input = document.createElement('input');
var _button = document.createElement('button');
_input.type = 'number';
_input.maxLength = 4;
_button.textContent = '입력';
_form.append(_input, _button);
document.body.append(_form);
var not = 0;
_form.addEventListener('submit', function callBack(e){
    not += 1;
    if(not >= 10){
        alert(not)
    }
    console.log(num.join(''), _input.value)
    e.preventDefault();
    if(_input.value === num.join('')){
        numTxt.textContent = '홈런'
    }else{
        var _valueArray = _input.value.split('');
        var st = 0;
        var ba = 0;
        for(var i =0; i < 3; i++){
            if(Number(_valueArray[i]) === num[i]){
                st++;
                //numTxt.textContent = st + '스트라이크, '
                //console.log(st, ba)
            }else if(num.indexOf(Number(_valueArray[i])) > -1){
                ba++;
            }
            numTxt.textContent = st + '스트라이크, ' + ba + '볼';
            //console.log(num.indexOf(Number(_valueArray[i])), ba)
        }
        
    }
    //console.log(_input.value, num.join(''), _input.value === num)
    //console.log(_valueArray[0], num[0], _valueArray[0] === num[0])
    
})
