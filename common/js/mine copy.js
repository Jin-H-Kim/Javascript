var _mine = parseInt(document.querySelector('#mine').value);
var _mineNumber = Array(_mine).fill().map(function(v, i){
    return i
})

var randomNum = [];
// while(_mineNumber.length > 0){
//     var num = _mineNumber.splice(Math.floor(Math.random() * _mineNumber.length), 1)[0]
//     console.log(num + '/' + Math.floor(Math.random() * _mineNumber.length))
//     randomNum.push(num)
// }
var rr = Math.random()
var aa = Math.floor( rr * _mineNumber.length)

var testRandom = Array(_mine).fill().map(function(v, i){
    console.log('v' + v);
    return i;
})

console.log(rr)
console.log(_mineNumber.splice(1, 2))
console.log(_mineNumber.splice(1, 2)[0])
console.log(_mineNumber)
console.log(testRandom.slice(0, 2))
console.log(testRandom)



// game layout
document.querySelector('#make').addEventListener('click', function(){
    var _row = parseInt(document.querySelector('#row').value);
    var _cell = parseInt(document.querySelector('#cell').value);
    

    var dataRow = [];
    var _table = document.createElement('table');
    document.querySelector('#table').appendChild(_table)
    for(var i = 0; i < _row; i++){
        var cellRow = [];
        dataRow.push(cellRow)
        var _tr = document.createElement('tr');

        for(var j = 0; j < _cell; j++){
            cellRow.push(1)
            var _td = document.createElement('td');
            _tr.appendChild(_td)
        }
        _table.appendChild(_tr);
    }
    console.log(dataRow)
})