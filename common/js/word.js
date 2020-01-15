var _body = document.body;
var _word = document.createElement('div')
_word.textContent = '끝말잊기';
//_body.append(_word);

var _form = document.createElement('form')
var _input = document.createElement('input');
var _button = document.createElement('button');
_button.textContent = '등록'
_form.append(_input, _button)
//_body.append(_word);
//_body.append(_button);

var _result = document.createElement('div');
//_body.append(_result);
_body.append(_word, _form, _result);

_form.addEventListener('submit',function checkWord(e){
    e.preventDefault();
    if(_word.textContent[_word.textContent.length - 1] === _input.value[0]){
        _result.textContent = 'Good';
        _word.textContent = _input.value;        
    }else{
        _result.textContent = 'No';
    }
    _input.value = '';
    _input.focus();
})