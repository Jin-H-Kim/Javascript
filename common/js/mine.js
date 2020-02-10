var _row = parseInt(document.querySelector('#row').value);
var _col = parseInt(document.querySelector('#col').value);
var _mine = parseInt(document.querySelector('#mine').value);

// 1. Layout
var _dataSet = [];
var _tbody = document.querySelector('#tableWrap tbody');
for(var i = 0; i < _row; i++){
    var _tr = document.createElement('tr');
    var _rowData = [];
    _dataSet.push(_rowData)
    for(var j = 0; j < _col; j++){
        var _td = document.createElement('td');
        _tr.appendChild(_td);
        _rowData.push('X');
        // 4. Right Click Event == contextmenu
        _td.addEventListener('contextmenu', function(e){
            e.preventDefault();
            var _trLine = e.currentTarget.parentElement;
            var _tbodyLine = e.currentTarget.parentElement.parentElement;
            var _targetTd = Array.prototype.indexOf.call(_trLine.children, e.currentTarget);
            var _targetTr = Array.prototype.indexOf.call(_tbodyLine.children, _trLine)
            console.log(_targetTd, _targetTr)
            _dataSet[_targetTr][_targetTd] = 0;
            console.log(_dataSet)
            this.textContent = '!';
        })
    }
    _tbody.appendChild(_tr);
}

// 2. Make the Mine
var _array = Array(100).fill().map(function(i, v){
    return v;
})
var _mineArray = [];
while(_array.length > 80){
    var _random = Math.floor(_array.splice(Math.random() * _array.length, 1)[0]);
    _mineArray.push(_random)
}
_mineArray.sort(function(a, b){
    return a - b
})

// 3. Each td fill
for(var k = 0; k < _mineArray.length; k++){
    var _r = Math.floor(_mineArray[k] / 10);
    var _c = _mineArray[k] % 10;
    _tbody.children[_r].children[_c].textContent = 'O';
}




//console.log(_mineArray)
//console.log(_r ,_c)
//console.log(_dataSet)




