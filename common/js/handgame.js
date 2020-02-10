/* 
    -250 가위 scissors
    0 바위 rock
    -537 보 paper
*/
var _imgPos = 0;
var _imgObj = {
    '가위' : -250,
    '바위' : 0,
    '보' : -537,
}

var gameStart;
function goGame(){
    gameStart = setInterval(function(){
        if(_imgPos  == _imgObj.가위){
            _imgPos = _imgObj.바위 ;
        }else if(_imgPos  == _imgObj.바위){
            _imgPos = _imgObj.보;
        }else{
            _imgPos  = _imgObj.가위
        }
        document.querySelector('.computer').style.backgroundPositionX = _imgPos + 'px';
    }, 800)
}
goGame();
function _objEntries(pos){
    return Object.entries(_imgObj).find(function(v){
        //console.log(v)
        return v[1] == pos
    })[0];
}

var _btn = document.querySelectorAll('.btn');
var point = {
    '가위' : 0,
    '바위' : 1,
    '보' : 2,
}
//         이김    짐  비김
// 가위     -2     -1   0
// 바위      1     -1   0
// 보        1      2   0
_btn.forEach(function(btn){
    btn.addEventListener('click', function(){
        clearInterval(gameStart)
        setTimeout(goGame, 1000)
        _objEntries(_imgPos)
        var myChoice = this.textContent;
        if((point[myChoice] - point[_objEntries(_imgPos)]) == 0){
            console.log('비김')
        }else if([-1, 2].includes(point[myChoice] - point[_objEntries(_imgPos)])){
            console.log('짐')
        }else{
            console.log('이김')
        }
        //console.log(myChoice, _objEntries(_imgPos))
    })
})
