// שיעורי בית מספר אחד:
// אנחנו הולכים לפתח את מחשבון הציונים הטוב בעולם.
// מה שהמחשבון שלנו הולך לעשות זה 
// שני אינפוטים: אחד לשם ואחד לציון.

// המשתמש שלנו צריך לההכניס שם וציון
// על כל אות התלמיד מקבל בונוס של 2 נקודות
// משמע - 
// עידן - 60 
// הציון הסופי הוא 60 + 4 * 2

// שימו לב שציון לא יכול לעבור 100
// הציון צריך להיות מוצג בspan ליד תיבות הטקסט

// בונוס למי שישתמש בפונקציה שמשתמשת בפונקציה

// בונוס נוסף: למי שיציג את רשימת הציונים שחושבו כבר.


function addNewGrade(studentName, midGrade, finalGrade) {
  console.log((`Name: ${studentName}, Mid grade: ${midGrade}, Final grade: ${finalGrade}`));
}

function getNewGrade() {
  const nameInput = document.querySelector('.nameInput');
  const gradeInput = document.querySelector('.gradeInput');
  let output = document.querySelector('.output');
  let nameInputValue = nameInput.value;
  let gradeInputValue = gradeInput.value;
  let sum = 0;
  
  for (let index = 0; index < nameInputValue.length; index++) {
    sum ++;
  }
  const nameMultiSum = sum * 2;
  const finalScore = +gradeInputValue + +nameMultiSum;
  if (finalScore > 100) {
    addNewGrade(nameInputValue, gradeInputValue, 100);
    output.innerText = '';
    nameInputValue = '';
    gradeInputValue = '';
  } else {
    addNewGrade(nameInputValue, gradeInputValue, finalScore);
    output.innerText = '';
    nameInput.value = '';
    gradeInput.value = '';
  }
}

const calculateBtn = document.querySelector('.calculateBtn');

calculateBtn.addEventListener('click', getNewGrade);