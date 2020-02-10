var _row = parseInt(document.querySelector('#row').value);
var _col = parseInt(document.querySelector('#col').value);
var _mine = parseInt(document.querySelector('#mine').value);

// Game Layout
var _tbody = document.querySelector('#tableWrap tbody');
var _mineData = []
for(var i = 0; i < _row; i++){
    var _tr = document.createElement('tr');
    var _rowData = []
    _tbody.appendChild(_tr);
    _mineData.push(_rowData)
    for(var j = 0; j < _col; j++){
        var _td = document.createElement('td');
        _tr.appendChild(_td)
        
        _rowData.push('O')
    }
}
document.querySelectorAll('td').forEach(function(td){
    td.addEventListener('contextmenu', function(e){
        e.preventDefault();
        //e.currentTarget.textContent = 'I'
        // (데이터를 위해)배열이 아닌 것에 대한 indexof 로 위치 알아 내기
        var momTr = e.currentTarget.parentNode;
        var momTbody = e.currentTarget.parentNode.parentNode;
        var _tdLine = Array.prototype.indexOf.call(momTr.children, e.currentTarget);
        var _trLine = Array.prototype.indexOf.call(momTbody.children, momTr);
        //var _tdLine = Array.prototype.indexOf.call(mom, e.currentTarget)
        //var _trwLine = Array.prototype.indexOf.call(mom, e.currentTarget)
        console.log(momTr, momTbody, _trLine, _tdLine)
        e.currentTarget.textContent = '!';
        _mineData[_trLine][_tdLine] = '!';
        //console.log(_rowLine)
        console.log(_mineData)
    })
})
// Mine Add
var _defaultMine = Array(_row * _col).fill().map(function(i, v){
    return v;
})
var _randomMine = [];
while(_defaultMine.length > (_row * _col - _mine)){
    var _addMine = _defaultMine.splice(Math.floor(Math.random() * _defaultMine.length) , 1)[0];
    _randomMine.push(_addMine)
}

for(var k = 0; k < _randomMine.length; k++){
    var _r = Math.floor(_randomMine[k] / 10);
    var _c = _randomMine[k] % 10;
    _mineData[_r][_c] = 'X';
    _tbody.children[_r].children[_c].textContent = 'X'
}






