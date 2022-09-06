const Questions = [
  {
    id: 0,
    q: "Question #1: isNaN() will evaluate if the argument is of value:",
    a: [
      { text: "a. Is Not a Null", anws: false },
      { text: "b. Is Not a New Object", anws: false },
      { text: "c. Is Not a Number", anws: true },
      { text: "d. None Of The Above", anws: false },
    ],
  },
  {
    id: 1,
    q: "Question #2: JavaScript Files has an extension of:",
    a: [
      { text: "a. .Java", anws: false },
      { text: "b. .js", anws: true },
      { text: "c. .javaScript", anws: false },
      { text: "d. .xml", anws: false },
    ],
  },
  {
    id: 2,
    q: "Question #3: A function associated with an object is called:",
    a: [
      { text: "a. Function", anws: false },
      { text: "b. Link", anws: false },
      { text: "c. None", anws: false },
      { text: "d. Method", anws: true },
    ],
  },
  {
    id: 3,
    q: "Question #4: .push() is which type of function:",
    a: [
      { text: "a. Array", anws: true },
      { text: "b. Date and time", anws: false },
      { text: "c. Maths / numeric", anws: false },
      { text: "d. String", anws: false },
    ],
  },
  {
    id: 4,
    q: "Question #5: What is the use of decument.getElementById(...).innerHTML=[message]:",
    a: [
      { text: "a. To show our output in only textbox", anws: false },
      { text: "b. To display answer in alertbox", anws: false },
      { text: "c. To show our output in any tool", anws: true },
      { text: "d. None Of The Above", anws: false },
    ],
  },
  {
    id: 5,
    q: "Question #6: JavaScript is an [blank] language?",
    a: [
      { text: "a. Object-Oriented", anws: true },
      { text: "b. Object-Based", anws: false },
      { text: "c. Procedural", anws: false },
      { text: "d. None Of The Above", anws: false },
    ],
  },
  {
    id: 6,
    q: "Question #7: Script tag is used in which part tag is used in:",
    a: [
      { text: "a. Head tag and body tag", anws: true },
      { text: "b. Only body tag", anws: false },
      { text: "c. Only head tag", anws: false },
      { text: "d. None Of The Above", anws: false },
    ],
  },
  {
    id: 7,
    q: "Question #8: Which of the following is not a JavaScript framework?",
    a: [
      { text: "a. Cassandra", anws: false },
      { text: "b. Vue", anws: false },
      { text: "c. Node", anws: true },
      { text: "d. React", anws: false },
    ],
  },
  {
    id: 8,
    q: "Question #9: How can a datatype be declared a constant type?",
    a: [
      { text: "a. const", anws: true },
      { text: "b. var", anws: false },
      { text: "c. let", anws: false },
      { text: "d. constant", anws: false },
    ],
  },
  {
    id: 9,
    q: "Question #10: The Document Object Model it's hierarchy resembles a:",
    a: [
      { text: "a. tower", anws: false },
      { text: "b. spiderweb", anws: false },
      { text: "c. tree", anws: true },
      { text: "d. tournament bracket", anws: false },
    ],
  },
];

let start = true;
let count = 0;

function iterationQuestion(id) {
  // Change the result of the score
  let resultScore = document.getElementById("score");

  // Get the question for the quiz
  const questions = document.getElementById("question");
  questions.innerHTML = Questions[id].q;
  console.log(questions);

  //Getting the options for the question
  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");
  const op3 = document.getElementById("op3");
  const op4 = document.getElementById("op4");

  //Providing the options
  op1.innerHTML = Questions[id].a[0].text;
  op2.innerHTML = Questions[id].a[1].text;
  op3.innerHTML = Questions[id].a[2].text;
  op4.innerHTML = Questions[id].a[3].text;

  //Providing the value of each options
  op1.value = Questions[id].a[0].anws;
  op2.value = Questions[id].a[1].anws;
  op3.value = Questions[id].a[2].anws;
  op4.value = Questions[id].a[3].anws;

  let selectedValue = " ";

  //Demonstrate selection option clicked
  op1.addEventListener("click", () => {
    console.log("Clicked");
    op1.style.backgroundColor = "#e5efff";
    op2.style.backgroundColor = "#d8d8d8";
    op3.style.backgroundColor = "#d8d8d8";
    op4.style.backgroundColor = "#d8d8d8";
    selectedValue = op1.value;
  });

  op2.addEventListener("click", () => {
    op2.style.backgroundColor = "#e5efff";
    op1.style.backgroundColor = "#d8d8d8";
    op3.style.backgroundColor = "#d8d8d8";
    op4.style.backgroundColor = "#d8d8d8";
    selectedValue = op2.value;
  });

  op3.addEventListener("click", () => {
    op3.style.backgroundColor = "#e5efff";
    op1.style.backgroundColor = "#d8d8d8";
    op2.style.backgroundColor = "#d8d8d8";
    op4.style.backgroundColor = "#d8d8d8";
    selectedValue = op3.value;
  });

  op4.addEventListener("click", () => {
    op4.style.backgroundColor = "#e5efff";
    op1.style.backgroundColor = "#d8d8d8";
    op2.style.backgroundColor = "#d8d8d8";
    op3.style.backgroundColor = "#d8d8d8";
    selectedValue = op4.value;
  });

  const evaluateResult = document.getElementById("evaluateAnws");

  evaluateResult.addEventListener(
    "click",
    () => {
      if (selectedValue == true) {
        count = count + 1;
        resultScore.innerHTML = count.toString();
        document.getElementById("imageId").src = "/images/Happy.png";
      } else {
        document.getElementById("imageId").src = "/images/Sad.png";
      }
    },
    { once: true }
  );
}

if (start) {
  iterationQuestion(0);
}

const nextBtn = document.getElementById("next");

//Getting the options for the question
const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const op3 = document.getElementById("op3");
const op4 = document.getElementById("op4");

let id = 0;

nextBtn.addEventListener("click", () => {
  start = false;
  if (id < 9) {
    id++;
    op1.style.backgroundColor = "#ffffff";
    op2.style.backgroundColor = "#ffffff";
    op3.style.backgroundColor = "#ffffff";
    op4.style.backgroundColor = "#ffffff";
    iterationQuestion(id);
  }
  if (id == 9) {
    nextBtn.remove();
  }
});
