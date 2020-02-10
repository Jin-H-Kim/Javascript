

//Map test
// var testArrayMap = ['kim', 'jin', 'hyuk', 'love']
// var mapArray = testArrayMap.map(function(v, i){
//     console.log('v : ' + v, ' i : ' + i)
//     return v[0];
// })
// console.log(mapArray)

// function makeLayout(a, b, c){
//     //a = _row, b = _col, c = _mine
//     //Random Number
//     //1. 배열값 만들기
//     var _numberArray = Array(_row * _col).fill().map(function(i, v){
//         return v
//     })
//     //2. Random() 값 만들기
//     var _mineArray =[];
//     while(_numberArray.length > (_row * _col - _mine)){
//         var randNum = _numberArray.splice(Math.floor(Math.random() * _numberArray.length), 1)[0];
//         _mineArray.push(randNum)
//     }
//     console.log(_mineArray)
// }


//2. Game Layout
document.querySelector('#make').addEventListener('click', function(){
    var _row = parseInt(document.querySelector('#row').value);
    var _col = parseInt(document.querySelector('#col').value);
    var _mine = parseInt(document.querySelector('#mine').value);

    //makeLayout(_row, _col, _mine);

    var _table = document.createElement('table')
    var dataArray = [];
    for(var i = 0; i < _row; i++){
        var rowArray = []
        var _tr = document.createElement('tr');
        _table.appendChild(_tr);
        dataArray.push(rowArray)
        for(var j = 0; j < _col; j++){
            var _td = document.createElement('td');
            _tr.appendChild(_td).textContent = 1
            rowArray.push(1)
        }
    }
    document.querySelector('#tableWrap').appendChild(_table);
    //console.log(dataArray)

    //Random Number
    //1. 배열값 만들기
    var _numberArray = Array(_row * _col).fill().map(function(i, v){
        return v
    })
    //2. Random() 값 만들기
    var _mineArray =[];
    while(_numberArray.length > (_row * _col - _mine)){
        var randNum = _numberArray.splice(Math.floor(Math.random() * _numberArray.length), 1)[0];
        _mineArray.push(randNum)
    }

    //3. Mine
    for(var k = 0; k < _mineArray.length; k++){
        var _r = Math.floor(_mineArray[k] / 10)
        var _c = _mineArray[k] % 10;
        console.log(_mineArray[k])
        console.log(_r, _c)
        dataArray[_r][_c] = 'X';
        _table.children[_r].children[_c].textContent = 'X'
    }

    console.log(_mineArray)
    console.log(dataArray)
})

//console.log(_mineArray)