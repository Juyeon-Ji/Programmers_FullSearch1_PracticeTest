var students_answerFormat = {
  1: [1, 2, 3, 4, 5],
  2: [2, 1, 2, 3, 2, 4, 2, 5],
  3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
};

var students_grade = {
  1: 0,
  2: 0,
  3: 0
};

function solution(answers) {
  var answer = [];
  let max_score = 0;

  for (var name in students_answerFormat) {
    let student_answerFormat = students_answerFormat[name];
    let student_answerFormat_length = student_answerFormat.length;

    let score = [];

    answers.forEach(function(answerNum, index) {
      if (
        answerNum === student_answerFormat[index % student_answerFormat_length]
      ) {
        score.push(answerNum);
      }
    });

    students_grade[name] = score.length;
    max_score = max_score < score.length ? score.length : max_score;
  }

  for (var name in students_grade) {
    if (students_grade[name] === max_score) {
      answer.push(parseFloat(name));
    }
  }

  answer.sort(function(a, b) {
    return a - b;
  });
  return answer;
}

solution([1, 2, 3, 4, 5]);
