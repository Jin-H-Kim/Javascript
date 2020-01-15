var num1 = Math.ceil(Math.random() * 9);
var num2 = Math.ceil(Math.random() * 9);
var result = num1 * num2;

//Tag
var _resultTag = document.createElement('p');
_resultTag.textContent = num1 + ' X ' + num2 + '?';
document.body.append(_resultTag);

var _form = document.createElement('form');
var _input = document.createElement('input');
var _button = document.createElement('button');
_button.textContent = '등록';
_form.append(_input, _button);
document.body.append(_form);

var _result = document.createElement('p');
document.body.append(_result);

_form.addEventListener('submit', function callback(e){
    e.preventDefault();
    //console.log(Number(_input.value))
    if(Number(_input.value) === result){
        num1 = Math.ceil(Math.random() * 9);
        num2 = Math.ceil(Math.random() * 9);
        result = num1 * num2;
        _resultTag.textContent = num1 + ' X ' + num2 + '?';
        _result.textContent = 'Good';
        //console.log('good')
    }else{
        _result.textContent = 'Bad';
        //console.log('bad')
    }
    _input.focus();
    _input.value = '';
});
console.log(result)