var _table = document.createElement('table');

var _line_tr = [];
var _line_td = [];
var _turn = 'X';
var _win = false;
var clickTarget = function(e){
    var target_tr = _line_tr.indexOf(e.target.parentNode);
    var target_td = _line_td[target_tr].indexOf(e.target);
    
    // 채워져 있는지 확인
    if(_line_td[target_tr][target_td].textContent == ''){
        _line_td[target_tr][target_td].textContent =  _turn;
    }

    // if(
    //     _line_td[0][0].textContent == ''
    // ){
    //     console.log('WWWW')
    // }
    if(
        _line_td[target_tr][0].textContent == _turn &&
        _line_td[target_tr][1].textContent == _turn &&
        _line_td[target_tr][2].textContent == _turn
    ){
        _win = true;
    }

    if(_win == true){
        console.log(_turn + '승리!!!!!')
        //console.log(_line_td)
        _turn = 'X';
        _win = false;
        _line_td.forEach(function(_tr){
            //console.log(_tr)
            _tr.forEach(function(_td){
                _td.textContent = '';
            })
        })
    }else{
        if(_turn == 'X'){
            _turn = 'O';
        }else{
            _turn = 'X';
        }
    }
    //console.log(target_tr, _turn, _line_td[target_tr][target_td].textContent);
    //console.log(_line_td[0][0].textContent, _line_td[0][1].textContent, _line_td[0][2].textContent);
}

for(var i = 0; i < 3; i+=1){
    var _tr = document.createElement('tr');
    _table.append(_tr);
    _line_tr.push(_tr);
    _line_td.push([]);
    for(var j = 0; j < 3; j+=1){
        var _td = document.createElement('td');
        _tr.append(_td);
        _line_td[i].push(_td)
        _td.addEventListener('click', clickTarget);
    }
}

console.log(_line_tr, _line_td)
document.body.append(_table)