/*
  Bobrova logična misija
  ---------------------------------------------------
  - končno geslo: LOGIKA
  - naloge se samodejno premešajo ob kliku na "Začni misijo"
  - slike kartic so v mapi images
  - correct: 0 pomeni prvi odgovor, 1 drugi odgovor, 2 tretji odgovor ...
*/

const challenges = [
  {
    title: "Slika šamana",
    type: "Logični pogoji",
    image: "images/logika-01.png",
    imageAlt: "Kartica Slika šamana",
    question: "Katero sliko naj obesi oče bober?",
    labels: ["A", "B", "C", "D"],
    options: [
      "Slika A",
      "Slika B",
      "Slika C",
      "Slika D"
    ],
    correct: 3,
    hint: "Preveriti moraš oba pogoja: šaman nima palice in ima zapete vse gumbe.",
    explanation: "Pravilna je slika D, ker šaman nima palice in ima zapete vse gumbe.",
    letter: "L"
  },
  {
    title: "Bobrov rojstni dan",
    type: "Binarno štetje",
    image: "images/logika-03.png",
    imageAlt: "Kartica Bobrov rojstni dan",
    question: "Koliko je star bober, ki praznuje rojstni dan?",
    options: [
      "6 let",
      "8 let",
      "12 let",
      "13 let"
    ],
    correct: 2,
    hint: "Goreča svečka pomeni 1, ugasnjena pa 0. Preberi zaporedje svečk kot zapis iz ničel in enic.",
    explanation: "Svečke prikazujejo zapis 1100, kar v tabeli pomeni 12.",
    letter: "O"
  },
  {
    title: "Kovanci",
    type: "Kombinacije",
    image: "images/logika-05.png",
    imageAlt: "Kartica Kovanci",
    question: "Na koliko različnih načinov lahko bober plača ribo, ki stane 10 bevrov?",
    options: [
      "2 načina",
      "3 načini",
      "4 načini",
      "5 načinov"
    ],
    correct: 2,
    hint: "Sestavljaj vsoto 10 iz kovancev za 5, 2 in 1 bever. Ne pozabi, da so pomembne različne kombinacije kovancev.",
    explanation: "Bober lahko sestavi 10 bevrov na 4 različne načine.",
    letter: "G"
  },
  {
    title: "Zemljevid",
    type: "Koordinate",
    image: "images/logika-10.png",
    imageAlt: "Kartica Zemljevid",
    question: "Kje se nahaja bobrova hiša?",
    options: [
      "(7, 8)",
      "(8, 7)",
      "(9, 8)",
      "(9, 6)"
    ],
    correct: 2,
    hint: "Most je na mestu (5, 6). Štiri vrstice pod mostom pomeni vrstica 9, dva stolpca desno pa stolpec 8.",
    explanation: "Bobrova hiša je na koordinati (9, 8).",
    letter: "I"
  },
  {
    title: "Pralnica",
    type: "Načrtovanje in optimizacija",
    image: "images/logika-12.png",
    imageAlt: "Kartica Pralnica",
    question: "Koliko minut bo najhitreje trajalo pranje in sušenje oblačil za dva bobra?",
    options: [
      "60 minut",
      "90 minut",
      "100 minut",
      "120 minut"
    ],
    correct: 1,
    hint: "Ko prvi bober prestavi perilo v sušilni stroj, lahko drugi bober že začne uporabljati pralni stroj.",
    explanation: "Najhitreje traja 90 minut: prvi pere 30 minut in suši 30 minut, drugi pa začne prati po prvih 30 minutah in konča sušenje po 90 minutah.",
    letter: "K"
  },
  {
    title: "Novo leto",
    type: "Binarni zapis",
    image: "images/logika-13.png",
    imageAlt: "Kartica Novo leto",
    question: "Katero novo leto praznujejo?",
    options: [
      "2016",
      "2017",
      "2027",
      "2107"
    ],
    correct: 1,
    hint: "Vsako vrsto žarnic preberi kot binarni zapis. Prižgana žarnica je 1, ugasnjena je 0.",
    explanation: "Vrstice žarnic prikazujejo števke 2, 0, 1 in 7, zato praznujejo leto 2017.",
    letter: "A"
  }
];

const finalPassword = "LOGIKA";

let current = 0;
let collectedLetters = [];
let gameStarted = false;

const intro = document.getElementById("intro");
const progressPanel = document.getElementById("progressPanel");
const challengeCard = document.getElementById("challengeCard");
const finalPanel = document.getElementById("finalPanel");

const startBtn = document.getElementById("startBtn");
const checkBtn = document.getElementById("checkBtn");
const hintBtn = document.getElementById("hintBtn");
const nextBtn = document.getElementById("nextBtn");
const unlockBtn = document.getElementById("unlockBtn");

const progressText = document.getElementById("progressText");
const letters = document.getElementById("letters");
const challengeType = document.getElementById("challengeType");
const challengeTitle = document.getElementById("challengeTitle");
const imageWrap = document.getElementById("imageWrap");
const challengeBody = document.getElementById("challengeBody");
const answerForm = document.getElementById("answerForm");
const feedback = document.getElementById("feedback");
const passwordInput = document.getElementById("passwordInput");
const finalFeedback = document.getElementById("finalFeedback");

startBtn.addEventListener("click", () => {
  if (!gameStarted) {
    shuffleChallenges();
    gameStarted = true;
  }

  intro.classList.add("hidden");
  progressPanel.classList.remove("hidden");
  challengeCard.classList.remove("hidden");
  renderChallenge();
});

checkBtn.addEventListener("click", checkAnswer);
hintBtn.addEventListener("click", showHint);
nextBtn.addEventListener("click", nextChallenge);
unlockBtn.addEventListener("click", unlockFinal);

function shuffleChallenges() {
  for (let i = challenges.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [challenges[i], challenges[randomIndex]] = [challenges[randomIndex], challenges[i]];
  }
}

function renderChallenge() {
  const ch = challenges[current];

  progressText.textContent = `${current + 1} / ${challenges.length}`;
  letters.textContent = collectedLetters.length ? collectedLetters.join(" ") : "—";

  challengeType.textContent = ch.type;
  challengeTitle.textContent = ch.title;

  imageWrap.innerHTML = `<img src="${ch.image}" alt="${ch.imageAlt || ch.title}" class="card-image">`;
  challengeBody.innerHTML = `<div class="challenge-box"><p>${ch.question}</p></div>`;

  answerForm.innerHTML = "";

  ch.options.forEach((option, index) => {
    const answerLabel = document.createElement("label");
    answerLabel.className = "answer";

    const oznaka = ch.labels ? ch.labels[index] : String.fromCharCode(65 + index);

    answerLabel.innerHTML = `
      <input type="radio" name="answer" value="${index}">
      <span><strong>${oznaka}.</strong> ${option}</span>
    `;

    answerForm.appendChild(answerLabel);
  });

  clearFeedback();
  checkBtn.classList.remove("hidden");
  hintBtn.classList.remove("hidden");
  nextBtn.classList.add("hidden");
}

function selectedAnswer() {
  const checked = answerForm.querySelector("input[name='answer']:checked");
  return checked ? Number(checked.value) : null;
}

function checkAnswer() {
  const selected = selectedAnswer();
  const ch = challenges[current];

  if (selected === null) {
    showFeedback("Izberite en odgovor.", "info");
    return;
  }

  if (selected === ch.correct) {
    collectedLetters.push(ch.letter);

    letters.textContent = collectedLetters.join(" ");
    showFeedback(`Pravilno! Prejeli ste črko ${ch.letter}. ${ch.explanation}`, "ok");

    checkBtn.classList.add("hidden");
    hintBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden");
  } else {
    showFeedback("Ni še pravilno. Poskusite ponovno in preverite pogoje oziroma vzorec še enkrat.", "bad");
  }
}

function showHint() {
  const ch = challenges[current];
  showFeedback(`Namig: ${ch.hint}`, "info");
}

function nextChallenge() {
  current++;

  if (current >= challenges.length) {
    challengeCard.classList.add("hidden");
    finalPanel.classList.remove("hidden");
    progressText.textContent = `${challenges.length} / ${challenges.length}`;
    letters.textContent = collectedLetters.join(" ");
  } else {
    renderChallenge();
  }
}

function unlockFinal() {
  const userPassword = passwordInput.value.trim().toUpperCase().replaceAll(" ", "");

  if (userPassword === finalPassword) {
    finalFeedback.className = "feedback ok show";
    finalFeedback.innerHTML = `
      <strong>Odklenjeno!</strong><br>
      Uspešno ste zaključili Bobrovo logično misijo. 🦫
      <br><br>
      Pogovor za zaključek: Pri kateri nalogi ste uporabili pogoje, pri kateri štetje in pri kateri koordinate?
    `;
  } else {
    finalFeedback.className = "feedback bad show";
    finalFeedback.textContent = "Geslo še ni pravilno. Iz zbranih črk sestavite besedo, ki poimenuje področje današnjih izzivov.";
  }
}

function showFeedback(message, type) {
  feedback.className = `feedback ${type} show`;
  feedback.textContent = message;
}

function clearFeedback() {
  feedback.className = "feedback";
  feedback.textContent = "";
}
