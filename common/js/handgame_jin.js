/* 
    -250 가위 scissors
    0 바위 rock
    -537 보 paper
*/

var _obj = {
    '가위': -250,
    '바위': 0,
    '보': -537,
}
// Object changes Array
function _objArray(o){
    return Object.entries(_obj).find(function(v){
        return v[1] == o; //true 거르기 > true 면 return
    })[0];
}

var _imgPosX = 0;

var 인터벌;
function 인터벌메이커(){
    인터벌 = setInterval(function(){
        if(_imgPosX == _obj.바위){
            _imgPosX = _obj.가위
        }else if(_imgPosX == _obj.가위){
            _imgPosX = _obj.보
        }else{
            _imgPosX = _obj.바위
        }
        document.querySelector('.computer').style.backgroundPositionX = _imgPosX + 'px';
    }, 800)
}
//console.log(_gameStart)
인터벌메이커();

document.querySelectorAll('.btn').forEach(function(v){
    v.addEventListener('click', function(){
        var _mySelect = this.textContent;
        clearInterval(인터벌);
        setTimeout(function(){
            console.log('--------------------- ')
            인터벌메이커()
        }, 1000);
        // if(_mySelect === '가위'){
        //     if(_objArray(_imgPosX) === '가위'){
        //         console.log('비겼습니다')
        //     }else if(_objArray(_imgPosX) === '바위'){
        //         console.log('졌습니다.')
        //     }else if(_objArray(_imgPosX) === '보'){
        //         console.log('이겼습니다.')
        //     }
        // }

        //          이김  짐  비금
        // 가위 : 0: -2   -1   0
        // 바위 : 1:  1   -1   0
        // 보   : 2:  1    2   0
        var point = {
            가위 : 0,
            바위 : 1,
            보 : 2
        }
        if((point[_mySelect] - point[_objArray(_imgPosX)]) == 0){
            console.log('비겼습니다.')
        // }else if((point[_mySelect] - point[_objArray(_imgPosX)]) == -2 || (point[_mySelect] - point[_objArray(_imgPosX)]) ==1){
        //     console.log('이겼습니다')
        }else if([-2 ,1].includes(point[_mySelect] - point[_objArray(_imgPosX)])){
            console.log('이겼습니다')
        }else{
            console.log('졌습니다.')
        }

        //console.log(point[_mySelect], point[_objArray(_imgPosX)])
        //console.log(this.textContent, _objArray(_imgPosX))
    })
    
})