var _table = document.createElement('table');
var _win_div = document.createElement('p')
var _line_tr = [];
var _line_td = [];
var _turn = 'X';
var _win = false;
var click_td = function(e){
    // console.log(e.target.parentNode)
    // console.log(e.target)
    // target 으로 현재 값 찾기
    var _target_tr = _line_tr.indexOf(e.target.parentNode)
    var _target_td = _line_td[_target_tr].indexOf(e.target)
    console.log(_target_tr, _target_td, e.target)
    if(_line_td[_target_tr][_target_td].textContent == ''){
        _line_td[_target_tr][_target_td].textContent = _turn;
    }

    if(
        _line_td[_target_tr][0].textContent == _turn &&
        _line_td[_target_tr][1].textContent == _turn &&
        _line_td[_target_tr][2].textContent == _turn
    ){
        _win = true
    }
    if(_win == true){
        _win_div.textContent = _turn + '승리';
        _line_td.forEach(function(_tr){
            _tr.forEach(function(_td){
                _td.textContent ='';
                _win = false;
                _turn = 'X';
            })
        })
    }else{
        if(_turn == 'X'){
            _turn = 'O';
        }else{
            _turn = 'X';
        }
    }
    
    
}

for(var i = 0; i < 3; i++){
    var _tr = document.createElement('tr');
    _table.append(_tr);
    _line_tr.push(_tr)
    _line_td.push([])
    for(var j = 0; j < 3; j++){
        var _td = document.createElement('td');
        _tr.append(_td);
        _line_td[i].push(_td)
        _tr.addEventListener('click', click_td)
    }
}
console.log(_line_tr, _line_td)
document.body.append(_table, _win_div)