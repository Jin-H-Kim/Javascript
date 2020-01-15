var makeNumber = Array(45).fill().map(function(i, j){
    return j + 1
});

var lotto = [];
while(makeNumber.length > 0){
    var randomNumber = makeNumber.splice(Math.floor(Math.random() * makeNumber.length),1)[0];
    lotto.push(randomNumber)
}
// var resultNumber = lotto.slice(0, 6).sort(function(a, b){
//     return a - b
// });
var resultNumber = lotto.splice(0, 6).sort(function(a,b){
    return a - b;
})

var bonusNumber = lotto[lotto.length -1];
var bounsResult = document.getElementsByClassName('bonusNumber')[0]
//bounsResult.classList = 'bonusNumber ball';
bounsResult.classList.add('ball');
bounsResult.textContent = bonusNumber;

for(var i = 0; i < resultNumber.length; i+=1){
    (function closer(j){
        setTimeout(function(){
            //console.log(j)
            var restultBall = document.createElement('p');
            restultBall.classList = 'ball';
            restultBall.textContent = resultNumber[j];
            document.getElementById('lottoResult').appendChild(restultBall)
        }, (j + 1) * 1000)
    })(i);
}


var test = [1,2,3,4,5,6]
var _slice = test.slice(0,3);
console.log(_slice)
// var _splice = test.splice(0, 3)
// console.log(_splice)
console.log(test)

//console.log(resultNumber  ,lotto)
// var lotto_num = Array(45);
// var array_lotto_num = lotto_num.fill();

// // ForEach 로 만들기
// // array_lotto_num.forEach(function(i , j){
// //     array_lotto_num[j] = j + 1
// // })
// // console.log(array_lotto_num)

// // For 로 만들기
// // var for_lotto_num =[];
// // for(var i = 1; i <= 45; i++){
// //     for_lotto_num.push(i);
// // }

// // map으로 만들기 맵핑하기 
// // [undefined, undefined, undefined,]
// // [1, 2, 3,]
// var maping = Array(45).fill().map(function(i, j){
//     return j + 1;
// })

// var random_num = maping.splice(Math.floor(Math.random() * 45), 1)

// var test = [1,2,3,4]
// var test_result = test.splice(0, 1)[0]
// console.log(test_result)
// console.log(random_num)



// console.log(maping)
