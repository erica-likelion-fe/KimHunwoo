let answer = Math.floor(Math.random() * 100) + 1;
let chance = 10;

function answer_check(number)
{
    if(number < answer)
    {
        console.log(number);
        console.log("UP!");
        chance--;
        alert("UP!(남은 기회 : " + chance + ")")
    }
    else if (number > answer)
    {
        console.log(number);
        console.log("DOWN!");
        chance--;
        alert("DOWN!(남은 기회 : " + chance + ")")
    }
    else if (number == answer)
    {
        alert("축하합니다! 맞추셨습니다!");
        chance = -1;
    }
}


while(chance > 0)
{
    let ip = prompt("1부터 100 사이의 숫자를 입력하세요. (남은 기회 : "+ chance  + ")")
    let input = parseInt(ip);
    answer_check(input);
}

if(chance == 0) alert("실패!");