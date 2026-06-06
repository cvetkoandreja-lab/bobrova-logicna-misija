/*
  Bobrova logična misija
  ---------------------------------------------------
  - v naboru je vseh 15 kartic logike
  - ob vsakem novem igranju se izbere 6 naključnih kartic
  - izbrane naloge se premešajo
  - končno geslo je LOGIKA
  - naloga Slika šamana ima popravljen pravilen odgovor: C
  - correct: 0 pomeni prvi odgovor, 1 drugi odgovor, 2 tretji odgovor ...
*/

const allChallenges = [
  {
    title: "Slika šamana",
    type: "Logični pogoji",
    image: "images/logika-01.png",
    imageAlt: "Kartica Slika šamana",
    question: "Katero sliko naj obesi oče bober?",
    labels: ["A", "B", "C", "D"],
    options: ["Slika A", "Slika B", "Slika C", "Slika D"],
    correct: 2,
    hint: "Preveriti moraš oba pogoja: šaman nima palice in ima zapete vse gumbe.",
    explanation: "Pravilna je slika C, ker šaman nima palice in ima zapete vse gumbe."
  },
  {
    title: "Trakovi",
    type: "Prepoznavanje vzorca",
    image: "images/logika-02.png",
    imageAlt: "Kartica Trakovi",
    question: "Največ koliko takšnih krajših trakov lahko bobrčica ustvari?",
    options: [
      "3 krajše trakove",
      "4 krajše trakove",
      "5 krajših trakov",
      "6 krajših trakov"
    ],
    correct: 1,
    hint: "Krajši trak v roki ima zaporedje: zvezda – krog – krog – zvezda. Na dolgem traku poišči, kolikokrat lahko izrežeš tak neprekinjen kos.",
    explanation: "Bobrčica lahko ustvari 4 takšne krajše trakove.",
  },
  {
    title: "Bobrov rojstni dan",
    type: "Binarno štetje",
    image: "images/logika-03.png",
    imageAlt: "Kartica Bobrov rojstni dan",
    question: "Koliko je star bober, ki praznuje rojstni dan?",
    options: ["6 let", "8 let", "12 let", "13 let"],
    correct: 2,
    hint: "Goreča svečka pomeni 1, ugasnjena pa 0. Preberi zaporedje svečk kot zapis iz ničel in enic.",
    explanation: "Svečke prikazujejo zapis 1100, kar v tabeli pomeni 12."
  },
  {
    title: "Po šoli",
    type: "Zaporedje opravil",
    image: "images/logika-04.png",
    imageAlt: "Kartica Po šoli",
    question: "Katera od spodnjih slik najboljše prikazuje manjkajoči opravek?",
    labels: ["A", "B", "C"],
    options: ["Slika A", "Slika B", "Slika C"],
    correct: 2,
    hint: "Poglej opravila, ki so že prikazana, in poišči tisto, ki v zaporedju še manjka.",
    explanation: "Manjkajoči opravek najbolje prikazuje slika C."
  },
  {
    title: "Kovanci",
    type: "Kombinacije",
    image: "images/logika-05.png",
    imageAlt: "Kartica Kovanci",
    question: "Na koliko različnih načinov lahko bober plača ribo, ki stane 10 bevrov?",
    options: ["2 načina", "3 načini", "4 načini", "5 načinov"],
    correct: 2,
    hint: "Sestavljaj vsoto 10 iz kovancev za 5, 2 in 1 bever.",
    explanation: "Bober lahko sestavi 10 bevrov na 4 različne načine."
  },
  {
    title: "Plavalec",
    type: "Pot skozi povezave",
    image: "images/logika-06.png",
    imageAlt: "Kartica Plavalec",
    question: "Katera pot uporabi vsako reko natanko enkrat?",
    options: [
      "A – D – E – H – F – G – C – B",
      "A – B – C – D – E – F – G – H",
      "C – G – F – E – D – B – A – H",
      "A – C – G – H – E – D – F – B"
    ],
    correct: 0,
    hint: "Vsako črko oziroma reko smeš uporabiti samo enkrat.",
    explanation: "Pot A – D – E – H – F – G – C – B uporabi vsako reko natanko enkrat."
  },
  {
    title: "Slika gradu",
    type: "Kombinatorika",
    image: "images/logika-07.png",
    imageAlt: "Kartica Slika gradu",
    question: "Na koliko različnih načinov je mogoče narediti prikazano sliko?",
    options: ["12 načinov", "24 načinov", "36 načinov", "48 načinov"],
    correct: 2,
    hint: "Za sliko izbereš 2 zelena kvadrata, 1 oranžen pravokotnik in 1 moder trikotnik.",
    explanation: "Možnih je 36 načinov: izbereš 2 od 4 kvadratov, 1 od 2 pravokotnikov in 1 od 3 trikotnikov."
  },
  {
    title: "Diagonalno",
    type: "Pogoj ČE / SICER",
    image: "images/logika-08.png",
    imageAlt: "Kartica Diagonalno",
    question: "Katero pravilo uporablja muc pri premikanju?",
    options: [
      "Če je na kvadratu miš, se premakne levo, sicer gre desno.",
      "Če je na kvadratu miš, gre naravnost, sicer se ustavi.",
      "Če ni miši, se premakne levo, sicer gre desno.",
      "Vedno se premika samo v desno."
    ],
    correct: 0,
    hint: "Preberi pravilo na kartici: pomembni sta besedi ČE in SICER.",
    explanation: "Muc uporablja pogoj: če je na kvadratu miš, se premakne levo, sicer gre desno."
  },
  {
    title: "Kino",
    type: "Preverjanje koordinat",
    image: "images/logika-09.png",
    imageAlt: "Kartica Kino",
    question: "Kaj moramo pri tej nalogi preveriti?",
    options: [
      "Ali se seznam sedežev ujema s sliko.",
      "Ali so vsi sedeži pobarvani enako.",
      "Ali je v kinu dovolj luči.",
      "Ali so sedeži razvrščeni po abecedi."
    ],
    correct: 0,
    hint: "Primerjaj vsak par števil v seznamu s prikazanimi zasedenimi sedeži.",
    explanation: "Pri nalogi preverjamo, ali se seznam koordinat ujema s sliko sedežev."
  },
  {
    title: "Zemljevid",
    type: "Koordinate",
    image: "images/logika-10.png",
    imageAlt: "Kartica Zemljevid",
    question: "Kje se nahaja bobrova hiša?",
    options: ["(7, 8)", "(8, 7)", "(9, 8)", "(9, 6)"],
    correct: 2,
    hint: "Most je na mestu (5, 6). Štiri vrstice pod mostom pomeni vrstica 9, dva stolpca desno pa stolpec 8.",
    explanation: "Bobrova hiša je na koordinati (9, 8)."
  },
  {
    title: "Sušilnik za perilo",
    type: "Iskanje pomembne povezave",
    image: "images/logika-11.png",
    imageAlt: "Kartica Sušilnik za perilo",
    question: "Katero palico naj ojačajo?",
    labels: ["A", "B", "C", "D", "E", "F", "G"],
    options: ["Palica A", "Palica B", "Palica C", "Palica D", "Palica E", "Palica F", "Palica G"],
    correct: 2,
    hint: "Poišči palico, ki povezuje največ delov sušilnika oziroma je za povezave najbolj pomembna.",
    explanation: "Najbolj smiselno je ojačati palico C, ker je pomembno vozlišče v mreži povezav."
  },
  {
    title: "Pralnica",
    type: "Načrtovanje in optimizacija",
    image: "images/logika-12.png",
    imageAlt: "Kartica Pralnica",
    question: "Koliko minut bo najhitreje trajalo pranje in sušenje oblačil za dva bobra?",
    options: ["60 minut", "90 minut", "100 minut", "120 minut"],
    correct: 1,
    hint: "Ko prvi bober prestavi perilo v sušilni stroj, lahko drugi bober že začne uporabljati pralni stroj.",
    explanation: "Najhitreje traja 90 minut."
  },
  {
    title: "Novo leto",
    type: "Binarni zapis",
    image: "images/logika-13.png",
    imageAlt: "Kartica Novo leto",
    question: "Katero novo leto praznujejo?",
    options: ["2016", "2017", "2027", "2107"],
    correct: 1,
    hint: "Vsako vrsto žarnic preberi kot binarni zapis. Prižgana žarnica je 1, ugasnjena je 0.",
    explanation: "Vrstice žarnic prikazujejo števke 2, 0, 1 in 7, zato praznujejo leto 2017."
  },
  {
    title: "Bobrova hiša",
    type: "Sosednja polja",
    image: "images/logika-14.png",
    imageAlt: "Kartica Bobrova hiša",
    question: "Koliko oken bo letos zamenjal bober?",
    options: ["0 oken", "1 okno", "2 okni", "3 okna"],
    correct: 1,
    hint: "Poišči preostala okna, ki imajo sosede levo, desno, zgoraj in spodaj.",
    explanation: "Bober bo letos zamenjal 1 okno."
  },
  {
    title: "Mačka in miš",
    type: "Sledenje pravilom",
    image: "images/logika-15.png",
    imageAlt: "Kartica Mačka in miš",
    question: "Kdo se premakne prvi?",
    options: ["Mačka", "Miš", "Oba hkrati", "Nobeden"],
    correct: 0,
    hint: "Preberi navodilo na kartici. Premikata se izmenično.",
    explanation: "Prva se premakne mačka, nato miš, nato spet mačka in tako naprej."
  }
];

const finalPassword = "LOGIKA";
const lettersForPassword = ["L", "O", "G", "I", "K", "A"];
let challenges = [];
let current = 0;
let collectedLetters = [];

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
  resetGame();

  intro.classList.add("hidden");
  finalPanel.classList.add("hidden");
  progressPanel.classList.remove("hidden");
  challengeCard.classList.remove("hidden");

  renderChallenge();
});

checkBtn.addEventListener("click", checkAnswer);
hintBtn.addEventListener("click", showHint);
nextBtn.addEventListener("click", nextChallenge);
unlockBtn.addEventListener("click", unlockFinal);

function resetGame() {
  current = 0;
  collectedLetters = [];
  passwordInput.value = "";
  finalFeedback.className = "feedback";
  finalFeedback.textContent = "";

  challenges = pickRandomChallenges(allChallenges, lettersForPassword.length);
  assignLetters(challenges, lettersForPassword);
}

function pickRandomChallenges(source, count) {
  const copy = [...source];
  shuffleArray(copy);
  return copy.slice(0, count);
}

function assignLetters(selectedChallenges, lettersList) {
  selectedChallenges.forEach((challenge, index) => {
    challenge.letter = lettersList[index];
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
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
    showFeedback("Ni še pravilno. Poskusite ponovno in preverite pogoje, vzorec ali pravilo še enkrat.", "bad");
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
      Pogovor za zaključek: Pri kateri nalogi ste uporabili pogoje, pri kateri vzorce in pri kateri sklepanje?
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
