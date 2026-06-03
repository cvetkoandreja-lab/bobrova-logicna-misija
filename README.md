# Bobrova logična misija

Interaktivna spletna igra za utrjevanje logičnega mišljenja.

## Vsebina

- `index.html` – glavna spletna stran
- `style.css` – oblikovanje
- `script.js` – naloge, odgovori, namigi in logika igre
- `images/` – slike kartic iz sklopa Logika

## Končno geslo

Geslo je:

```text
LOGIKA
```

Ker se naloge ob začetku premešajo, črke niso nujno prikazane v pravilnem vrstnem redu.

## Kako objavim na GitHub Pages?

1. Ustvari nov repozitorij, npr. `bobrova-logicna-misija`.
2. Naloži datoteke `index.html`, `style.css`, `script.js`, `README.md` in mapo `images`.
3. Odpri **Settings → Pages**.
4. Pri **Source** izberi `Deploy from a branch`.
5. Pri **Branch** izberi `main` in mapo `/root`.
6. Klikni **Save**.
7. Po nekaj minutah se prikaže povezava do igre.

## Kako spremenim odgovor?

V datoteki `script.js` pri posamezni nalogi popravi vrstico:

```js
correct: 0
```

Pomen številk:

```text
0 = prvi odgovor
1 = drugi odgovor
2 = tretji odgovor
3 = četrti odgovor
```

## Kako dodam novo nalogo?

V `script.js` v seznam `challenges` dodaš nov objekt z naslovom, sliko, vprašanjem, odgovori, pravilnim odgovorom, namigom, razlago in črko.
