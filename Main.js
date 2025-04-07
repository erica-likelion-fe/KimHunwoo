let A_score = {
    name : 'A',
    korean : 80,
    english: 70,
    math : 90,
    science: 60
};

let B_score = {
    name : 'B',
    korean : 75,
    english: 90,
    math : 80,
    science: 85
};

function print_score(score)
{
    const {name, korean, science, math} = score;
    const text = name + '의 수학 점수는 ' + math + '이고 과학 점수는 ' + science + '이고 국어 점수는 ' + korean + '입니다'
    console.log(text);
};

print_score(A_score);
print_score(B_score);