// ========== LOGIN PAGE FUNCTION ========== 
function cbtFn() {
  const fn = document.getElementById("fn").value.trim();
  const ln = document.getElementById("ln").value.trim();
  const reg = document.getElementById("reg").value.trim();

  if (!fn || !ln || !reg) {
    alert("Please fill in all fields before proceeding.");
    return false;
  }

  localStorage.setItem("userFirstName", fn);
  localStorage.setItem("userLastName", ln);
  localStorage.setItem("userReg", reg);

  return true;
}

// ========== QUESTION PAGE FUNCTIONS ==========
const questions = shuffleArray([
  {
    question: "Who is the current President of Nigeria ?",
    options: [
      "Dr. Arijeniwa Henry Aaron",
      "Asiwaju Bola Ahmed Tinubu",
      "President Donald Trump",
      "Dr. Goodluck Ebele Jonathan"
    ],
    answer: 1
  },

  {
    question: "Born with a silver spoon ?",
    options: ["Eat with a silver spoon", "Born into a rich family", "Buy a silver spoon", "Use siver spoon instead of a gold spoon"],
    answer: 1
  },

  {
    question: "The number one citizen in Nigeria is the ?",
    options: ["President", "Governor", "First Lady", "Vice-President"],
    answer: 0
  },
  {
    question: "The Slogan for Ondo State is ?",
    options: ["Super state", "Sunshine state", "Big heart state", "Food basket state"],
    answer: 1
  },

  {
    question: "Express 0.002651 t0 1 ?",
    options: ["0.00265", "0.0027", "0.002", "0.003"],
    answer: 3
  },

  {
    question: "What part of a plant receives energy directly from the sun ?",
    options: ["Root", "Leaf", "Stem", "Seed"],
    answer: 1
  },
  {
    question: "The Part of the Computer System That looks like a typewriter is the ?",
    options: ["Monitor", "Mouse", "Keyboard", "Printer"],
    answer: 2
  },

  {
    question: "To kick the bucket ?",
    options: ["To cry", "To die", "To give up", "To fight"],
    answer: 1
  },

  {
    question: "A polygon with 5 sides is ?",
    options: ["Hexagon", "Pentagon", "Nonagon", "Heptagon"],
    answer: 1
  },


  {
    question: "IMITATE means ?",
    options: ["To speak very loudly", "To be happy", "To act like someone", "Sleeping slowly"],
    answer: 2
  },

  {
    question: "The Following are Examples of locomotive activities except ?",
    options: ["Bending", "Walking", "Running", "Leaping"],
    answer: 0
  },
  {
    question: "Lack of Protein in the body can laead to ?",
    options: ["Brain damage", "Kwashiorkor", "Beriberi", "Headache"],
    answer: 1
  },
  {
    question: "The arm of government that makes law is  ?",
    options: ["Judiciary", "Legislature", "Executive", "None of the above"],
    answer: 1
  },

  {
    question: "INCIDENT means ?",
    options: ["To feel bad", "A joyful event", "An extra", "A bad event"],
    answer: 3
  },

  {
    question: "Whose duty is it to arrest criminals in our society ?",
    options: ["Teachers", "Security agents", "Farmers", "Pupils"],
    answer: 1
  },
  {
    question: "The major cash crop grown in Ondo State is ?",
    options: ["Yam", "Rubber", "Maize", "Cocoa"],
    answer: 3
  },
  {
    question: "____ is the union between a man and a woman to become husband and wife ?",
    options: ["Family", "Union", "Culture", "Marriage"],
    answer: 3
  },

  {
    question: "GRIEF means ?",
    options: ["A feeling of sadness", "A feeling of hunger", "A feeling of joy", "A feeling of laughter"],
    answer: 0
  },

  {
    question: "To make ends meet ?",
    options: ["Tie a rope to another end", "Move from one end to another", "To try one's best to survive", "Climb a rope"],
    answer: 2
  },

  {
    question: "The best soil for farming is ?",
    options: ["Sandy", "Loamy", "Clay", "Coarse"],
    answer: 1
  },
  {
    question: "The coat of arms is a picture of an eagle standing on a ______ shield ?",
    options: ["White", "Yellow", "Black", "Green"],
    answer: 2
  },
  {
    question: "The major raw material used for making cement is ?",
    options: ["Igneous Rock", "Alum", "Clay Soil", "Limestone"],
    answer: 0
  },
  {
    question: "Which of the following is not a natural source of water ?",
    options: ["River", "Rain", "Tap", "Spring"],
    answer: 2
  },
  {
    question: "Substances that do not allow the free flow of electricity is called ?",
    options: ["Conductor", "Insulator", "Electrodes", "All of the above"],
    answer: 1
  },
  {
    question: "Nigerian's female football team is ?",
    options: ["super eagles", "super falconets", "super falcons", "super eaglets"],
    answer: 2
  },
  {
    question: "January maeans _____ in French ?",
    options: ["Janvier", "Fervier", "Mars", "Avril"],
    answer: 0
  },
  {
    question: "Oil producing countries of the world belong to an organization called ?",
    options: ["NTA", "NYSC", "OPEC", "SON"],
    answer: 2
  },
  {
    question: "The following people are Nigerian nationalist except ?",
    options: ["Obafemi Awolowo", "Herbert Macaulay", "Ojo Samuel", "Nnamdi Azikiwe"],
    answer: 2
  },
  {
    question: "Where was Jesus Christ Crucified ?",
    options: ["Goshen", "Galilee", "Golgotha", "Gethsemane"],
    answer: 2
  },
  {
    question: "A game played by two opposing teams of eleven players is known as ?",
    options: ["Swimming", "Football", "Table Tennis", "Hockey"],
    answer: 1
  },
  {
    question: "Tin is found in Jos as Bitumen is found in ?",
    options: ["Agbabu", "Ilesa", "Ebonyi", "Ewekoro"],
    answer: 0
  },
  {
    question: "One of this is not a track event ?",
    options: ["100m Race", "200m Race", "Relay Race", "Long Jump"],
    answer: 3
  },
  {
    question: "In what year did the federal capital of Nigeria moved from Lagos to Abuja ?",
    options: ["1991", "1993", "2003", "1996"],
    answer: 0
  },
  {
    question: "Which of the these ethnic groups in Nigeria is noted for fishing ?",
    options: ["Ijaw", "Hausa", "Edo", "Fulani"],
    answer: 0
  },
  {
    question: "Tse-Tsefly is harmful to man because it is associated to the spread of ?",
    options: ["River blindness", "Sleeping sickness", "Dysentary", "Malaria"],
    answer: 1
  },
  {
    question: "All these are house hold pests except ?",
    options: ["Housefly", "Spider", "Bedbug", "Weevil"],
    answer: 3
  },
  {
    question: "A break in the bone is known as ?",
    options: ["Fracture", "Cut", "Wound", "Break"],
    answer: 0
  },
  {
    question: "The degree of hotness or coldness of an object is refered to as ?",
    options: ["Pressure", "Condition", "Humidity", "Temperature"],
    answer: 3
  },
  {
    question: "A governor is to a state as _____ is to a local government ?",
    options: ["Secretary", "Accountant", "Council", "Chairman"],
    answer: 3
  },
  {
    question: "The highest court of law in Nigeria is ?",
    options: ["Supreme court", "High court", "Magistrate court", "Appeal court"],
    answer: 0
  },
  {
    question: "The use of the internet to cheat or steal from someone is called ?",
    options: ["Attack", "Cybercrime", "Browsing", "Internet"],
    answer: 1
  },
  {
    question: "The title of Oba of Akure is ?",
    options: ["Osemawe", "Deji", "Owa", "Igwe"],
    answer: 1
  },
  {
    question: "Je m'appele means ?",
    options: ["My name is", "Who are you", "Come here", "Go out"],
    answer: 0
  },
  {
    question: "A place where two Rivers meet is called ?",
    options: ["Conffluence", "Meeting point", "Lake", "Delta"],
    answer: 0
  },
  {
    question: "When a car has a flat tyre, the driver lifts up the car by using ?",
    options: ["A Jack", "A Plier", "A Spanner", "A Screw driver"],
    answer: 0
  },
  {
    question: "There are ______ pillars of Islam ?",
    options: ["5", "3", "10", "8"],
    answer: 0
  },
  {
    question: "Solar energy is gotten from the ?",
    options: ["Electricity", "Sun", "Heat", "Cloud"],
    answer: 1
  },

  {
    question: "What is the place value of 5 in 1468.325 ?",
    options: ["5 tenths", "5 hundredths", "5 thousandths", "5 ten thousandths"],
    answer: 2
  },

  {
    question: "This is my beloved son in which I am well ______ ?",
    options: ["satisfied", "concerned", "pleased", "Excited"],
    answer: 2
  },
  {
    question: "A Person who leads a Muslim congregation in prayer is ?",
    options: ["Al-Adris", "Al-Imam", "Al-Idayat", "Al-Kifat"],
    answer: 1
  },
  {
    question: "Herbivorous animals are animals that feed on ?",
    options: ["Plants", "Meat", "Kitchen waste", "Stone"],
    answer: 0
  },

  {
    question: "The man is as proud as a peacock",
    options: ["antithesis", "metaphor", "simile", "oxymoron"],
    answer: 2
  },

  {
    question: "Nigeria is divided into ______ regions ?",
    options: ["3", "4", "5", "6"],
    answer: 0
  },
  {
    question: "How many odd numbers are between 16 and 35 ?",
    options: ["8", "7", "13", "9"],
    answer: 3
  },
  {
    question: "A millenium is ______ years ?",
    options: ["10", "10000", "1000", "100"],
    answer: 2
  },

  {
    question: "The dentist has a severe toothache",
    options: ["hyperbole", "irony", "oxymoron", "antithesis"],
    answer: 1
  },

  {
    question: "Which of the following is equal to -10 + 10 ?",
    options: ["10", "0", "1", "None"],
    answer: 1
  },
  {
    question: "Find the product of 0.04 and 0.08 ?",
    options: ["0.32", "3.2", "32", "3.20"],
    answer: 0
  },
  {
    question: "What number multiplied by itself gives 529 ?",
    options: ["13", "23", "27", "19"],
    answer: 1
  },

  {
    question: "i prefer beans _____ rice",
    options: ["than", "from", "to", "at"],
    answer: 2
  },

  {
    question: "A RECTOR heads ?",
    options: ["University", "Polytechnic", "College of Education", "Grammar School"],
    answer: 1
  },

  {
    question: "_____ brings civiliian leaders in Nigeria ?",
    options: ["freedom", "coup", "election", "speech"],
    answer: 2
  },

  {
    question: "First and Last; January and ______ ?",
    options: ["Saturday", "December", "July", "Friday"],
    answer: 1
  },
  {
    question: "A popular rock in the Federal Capital Of Nigeria is ?",
    options: ["Olumo rock", "Aso rock", "Idanre rock", "Zuma rock"],
    answer: 3
  },

  {
    question: "Find the square root of 400 ?",
    options: ["10", "25", "20", "30"],
    answer: 2
  },

  {
    question: "which of the planet is the nearest to the sun ?",
    options: ["Pluto", "Mercury", "Jupiter", "Mars"],
    answer: 1
  },
  {
    question: "A computer screen can also be called ?",
    options: ["Television", "Speaker", "Monitor", "Video"],
    answer: 2
  },
  {
    question: "What location is Nigeria in Africa ?",
    options: ["East", "West", "South", "North"],
    answer: 1
  },

  {
    question: "What is the product of 5.2 ?",
    options: ["6.76", "6.5", "4.0", "3.9"],
    answer: 0
  },

  {
    question: "Which of these is an input device of a computing system ?",
    options: ["Printer", "Monitor", "Scanner", "Keyboard"],
    answer: 3
  },

  {
    question: "Ayo shared the food _______ Anastasia and Raymond",
    options: ["among", "together", "between", "at"],
    answer: 2
  },

  {
    question: "An example of software used for graphic design is ?",
    options: ["Microsoft Excel", "Corel Draw", "Microsoft Access", "Microsoft Word"],
    answer: 1
  },
  {
    question: "Who is regarded as the father of computer ?",
    options: ["Henry Arijeniwa", "Elon Musk", "Mark Zuckerberg", "Charles Babbage"],
    answer: 3
  },

  {
    question: "_____ is the act of giving birth to offspring ?",
    options: ["growth", "intercourse", "excretion", "reproduction"],
    answer: 3
  },

  {
    question: "A woman is considered mature for marriage at _____ years of age ?",
    options: ["12", "18", "16", "17"],
    answer: 1
  },

  {
    question: "Express 315 as a percentage",
    options: ["95%", "80%", "75%", "50%"],
    answer: 2
  },
  
  {
    question: "An example of cereal is ?",
    options: ["oil palm", "maize", "apple", "beans"],
    answer: 1
  },

  {
    question: "Where is the crude oil refined ?",
    options: ["oceans", "petrol station", "refinery", "rock"],
    answer: 2
  },

  {
    question: "Separation between husband and wife is called ?",
    options: ["quit notice", "divorce", "quarrel", "ejection"],
    answer: 1
  },

  {
    question: "Change 0.64 to percentage ?",
    options: ["46%", "72%", "64%", "37%"],
    answer: 2
  },

  {
    question: "_____ is one of the blood vessels ?",
    options: ["artery", "navel", "hand", "leg"],
    answer: 0
  },

  {
    question: "Which of these is responsible for the spread of malaria fever ?",
    options: ["Tse-tsefly", "Butterfly", "Mosquito", "Housefly"],
    answer: 2
  },

  {
    question: "Moving an object away from you is called ?",
    options: ["force", "pulling", "pushing", "field"],
    answer: 2
  },

  {
    question: "The following belong to the reptile family except ?",
    options: ["alligator", "crocodile", "dog", "snake"],
    answer: 2
  },
  {
    question: "What is the official language of Nigeria ?",
    options: ["Chinese", "Yoruba", "English", "French"],
    answer: 2
  },

  {
    question: "Multiply 2.25 by 0.14 ?",
    options: ["0.0489", "0.03268", "0.0352", "0.3178"],
    answer: 3
  },

  {
    question: "Where does charity begins at ?",
    options: ["School", "Church", "Home", "Market"],
    answer: 2
  },

  {
    question: "The female muscular organ in which baby develops is called ?",
    options: ["ovary", "testes", "organ", "uterus"],
    answer: 3
  },

  {
    question: "The coming together of the northern and southern protectorate is ?",
    options: ["unity", "togetherness", "amalgamation", "oneness"],
    answer: 0
  },

  {
    question: "Which of the following animal is used to describe the Nigerian National Football ?",
    options: ["Eagle", "Horse", "Elephant", "Buffalo"],
    answer: 1
  },

  {
    question: "A trader bough an item for ₦1,650 naira and sold it for ₦1,800 naira. Find The profit?",
    options: ["₦150", "₦250", "₦345", "₦650"],
    answer: 0
  },

  {
    question: "Express 1419 in Roman numerials ?",
    options: ["MCDXIX", "MCCCCXIX", "MLDXIX", "MCDIX"],
    answer: 0
  },

  {
    question: "Plasma is made up ____ of water ?",
    options: ["70%", "60%", "50%", "90%"],
    answer: 3
  },

]);

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

let currentQuestionIndex = 0;
let selectedAnswers = new Array(questions.length).fill(null);

function loadQuestion() {
  const questionData = questions[currentQuestionIndex];
  document.getElementById("question-text").innerText = questionData.question;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  questionData.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.classList.add("btn", "btn-outline-dark", "d-block", "my-4");
    button.innerText = option;
    button.onclick = () => selectAnswer(index);
    if (selectedAnswers[currentQuestionIndex] === index) {
      button.classList.add("active");
    }
    optionsContainer.appendChild(button);
  });

  document.getElementById("prev-btn").disabled = currentQuestionIndex === 0;
  document.getElementById("next-btn").innerText =
    currentQuestionIndex === questions.length - 1 ? "Finish" : "Next";
}

function selectAnswer(index) {
  selectedAnswers[currentQuestionIndex] = index;
  loadQuestion();
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("question-text")) {
    loadQuestion();
    startCountdown(62); // one minute = 600 seconds

    document.getElementById("next-btn").addEventListener("click", () => {
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
      } else {
        document.getElementById("submit-btn").classList.remove("d-none");
      }
    });

    document.getElementById("prev-btn").addEventListener("click", () => {
      if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
      }
    });

    document.getElementById("submit-btn").addEventListener("click", () => {
      const confirmed = confirm("Are you sure you want to submit?");
      if (confirmed) {
        submitExam();
      }
    });

    document.getElementById("quit-btn")?.addEventListener("click", () => {
      const confirmQuit = confirm("Are you sure you want to quit the exam?");
      if (confirmQuit) {
        submitExam();
      }
    });
  }
});

function startCountdown(duration) {
  let timer = duration, minutes, seconds;
  const countdownEl = document.getElementById("countdown");
  const countdown = setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countdownEl.textContent = `${minutes}:${seconds}`;

    if (--timer < 0) {
      clearInterval(countdown);
      alert("Time is up! Submitting your exam.");
      submitExam();
    }
  }, 1000);
}

function submitExam() {
  const score = questions.reduce((acc, q, i) => acc + (q.answer === selectedAnswers[i] ? 1 : 0), 0);
  localStorage.setItem("userScore", score);
  localStorage.setItem("totalQuestions", questions.length);
  localStorage.setItem("userAnswers", JSON.stringify(selectedAnswers));
  localStorage.setItem("questions", JSON.stringify(questions));
  window.location.href = "result.html";
}



// ========== RESULTS PAGE SCRIPT ==========
document.addEventListener("DOMContentLoaded", function () {
  const userFirstName = localStorage.getItem("userFirstName") || "";
  const userLastName = localStorage.getItem("userLastName") || "";
  const userReg = localStorage.getItem("userReg") || "";

  // Set user info
  document.getElementById("user-name").innerText = `${userFirstName} ${userLastName}`;
  document.getElementById("user-reg").innerText = userReg;

  const questions = JSON.parse(localStorage.getItem("questions") || "[]");
  const userAnswers = JSON.parse(localStorage.getItem("userAnswers") || "[]");

  // Combine questions with user answers
  const combined = questions.map((q, index) => ({
    ...q,
    userAnswerIndex: userAnswers[index]
  }));

  // ✅ Filter out unattempted questions
  const attempted = combined.filter(q => q.userAnswerIndex !== null && q.userAnswerIndex !== undefined);

  // ✅ Randomly select up to 30 attempted questions
  const selected = attempted.sort(() => 0.5 - Math.random()).slice(0, 30);

  // ✅ Recalculate score
  const score = selected.filter(q => q.userAnswerIndex === q.answer).length;
  const total = selected.length;

  // Update UI
  document.getElementById("score").innerText = score;
  document.getElementById("total").innerText = total;

  const percentage = total ? ((score / total) * 100).toFixed(2) : "0.00";
  const percentageEl = document.getElementById("percentage");
  percentageEl.innerHTML = `<span class="${percentage < 50 ? 'text-danger' : 'text-success'}">${percentage}%</span>`;
  percentageEl.classList.add("fs-3", "fw-bold", "text-center", "d-block");

  const resultContainer = document.getElementById("result-container");
  selected.forEach((q, index) => {
    const userAnswerText = q.options[q.userAnswerIndex];
    const correctAnswerText = q.options[q.answer];
    const isCorrect = q.userAnswerIndex === q.answer;

    const questionDiv = document.createElement("div");
    questionDiv.className = "mb-4 p-3 border rounded";
    questionDiv.innerHTML = `
      <p><strong>Q${index + 1}: ${q.question}</strong></p>
      <p>Your Answer: <span class="${isCorrect ? 'text-success' : 'text-danger'}">${userAnswerText}</span></p>
      ${!isCorrect ? `<p>Correct Answer: <span class="text-success">${correctAnswerText}</span></p>` : ""}
    `;
    resultContainer.appendChild(questionDiv);
  });
});


async function downloadAsPDF() {
  const { jsPDF } = window.jspdf;
  const resultElement = document.getElementById("resultContent");

  // Take a screenshot of the result section
  const canvas = await html2canvas(resultElement);
  const imgData = canvas.toDataURL("image/png");

  // Create a PDF
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'px',
    format: [canvas.width, canvas.height]
  });

  // Add the screenshot image to the PDF
  pdf.addImage(imgData, 'PNG', 0, 0);

  // Save the PDF file
  pdf.save("Exam_Result.pdf");
}


// navbar toggle


  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("menuToggle");
    const icon = document.getElementById("menuIcon");
    const navbar = document.getElementById("navbarNav");

    toggleBtn.addEventListener("click", () => {
      setTimeout(() => {
        const isOpen = navbar.classList.contains("show");
        icon.className = isOpen ? "fa fa-times" : "fa fa-bars";
      }, 250); // wait for collapse animation
    });
  });

