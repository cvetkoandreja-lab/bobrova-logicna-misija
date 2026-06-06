# Bobrova logična misija

Interaktivna spletna igra za utrjevanje logičnega mišljenja.

## Vsebina

- `index.html` – glavna spletna stran
- `style.css` – oblikovanje
- `script.js` – naloge, odgovori, namigi in logika igre
- `images/` – slike vseh 15 kartic iz sklopa Logika

## Kako deluje

V naboru je vseh 15 kartic, vendar se ob vsakem igranju naključno izbere 6 kartic.

Geslo je:

```text
LOGIKA
```

Ker se kartice ob vsakem igranju zamenjajo, je igra ob ponovnem igranju drugačna.

## Pomemben popravek

Pri nalogi `Slika šamana` je pravilen odgovor:

```text
C
```

V kodi je to zapisano kot:

```js
correct: 2
```

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
