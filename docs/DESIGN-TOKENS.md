# Design tokens

Źródło prawdy: **Figma, plik `SDAlLcbZJQNTwPG4In2AxB`, node `68-4033`** ("DESIGN
SYSTEM · AUGUST 2026"). Kod odzwierciedla dokumentację — zmiany zaczynamy w
Figmie, potem przenosimy tutaj.

- Definicje: [`src/styles/global.css`](../src/styles/global.css), blok `:root`
- Podgląd na żywo: `/styleguide` (wartości czytane z CSS, więc nie mogą się rozjechać)
- Odczyt z Figmy: `get_variable_defs` na node `68-4033`

Nazwy tokenów odpowiadają nazwom zmiennych w Figmie jeden do jednego
(`background/dark` → `--background-dark`), żeby dało się prześledzić wartość bez
zgadywania.

## Decyzje wymagające potwierdzenia

### 1. Letter-spacing: procenty, nie piksele — POTWIERDZONE

**Rozstrzygnięte.** `get_design_context` na komponencie zespołu (node `1:3844`)
zwraca dla nazwiska `tracking-[-0.528px]` przy `text-[24px]`, ze stylem tekstu
Heading 3. `0.528 / 24 = 0.022`, czyli dokładnie **−2,2%**. Wartości w
dokumentacji są procentami, mimo że opisy drukują przy nich „px". Zapis `em` w
`global.css` jest poprawny i nie wymaga zmiany.

Oryginalne rozumowanie, dla kontekstu:

Dokumentacja opisuje tracking jako `-2.2px`, `-1.9px`, `-1.5px`. W kodzie
zapisane jest to jako `-0.022em`, `-0.019em`, `-0.015em` — czyli **procenty**.

Powody:

- Te same liczby (2.2 / 1.9 / 1.5) były już w CSS jako `em`, wpisane przy
  wcześniejszym przenoszeniu layoutu z Figmy — dwa niezależne odczyty tego
  samego pliku dały tę samą liczbę w różnych jednostkach.
- `-2.2px` jest przypisane jednocześnie do Display (56px) i Heading 3 (24px).
  Stała wartość w px dawałaby zupełnie inne optyczne zagęszczenie przy każdym
  stopniu; procent skaluje się razem z rozmiarem.
- `-1.9px` na tekście 16px to `-0.119em` — wizualnie mocno ściśnięty tekst,
  czego nie widać w rendererze specimenów w Figmie.

**Do sprawdzenia:** w Figmie, panel Type → pole Letter spacing pokazuje
jednostkę (`%` albo `px`). Jeśli tam jest `px`, trzeba zmienić `--ls-*` w
`global.css` na wartości pikselowe.

### 2. Heading 2 — trzy różne wartości w jednym miejscu

| Źródło | Waga | Tracking |
| --- | --- | --- |
| Opis pod specimenem | SemiBold | `-4px` |
| Styl na warstwie specimenu | Medium | `-1.5px` |
| Kod (obecnie) | SemiBold | `-0.022em` |

Wzięliśmy wagę z opisu (SemiBold, bo tak brzmi dokumentacja) i tracking
ujednolicony z resztą nagłówków. `-4%` wyłamywałoby H2 z rodziny — wszystkie
pozostałe stopnie mają `-2.2%`.

**Do decyzji:** czy H2 ma faktycznie inny tracking niż reszta nagłówków.

### 3. Rozmiary specimenów w dokumentacji

Specimeny Display i Heading 1 są w Figmie narysowane w 36px, mimo że opisy mówią
56px i 40px — najpewniej przycięte, żeby zmieściły się w ramce. Kod bierze
rozmiary z opisów (56/40), nie z warstw.

## Wartości spoza style guide'u

Używane na stronie, nieopisane w Figmie. Widoczne też na dole `/styleguide`.

| Wartość | Gdzie | Propozycja |
| --- | --- | --- |
| `#ff5a2c` (`--accent`) | favicon, focus ring, nazwa firmy w testimonialu | dodać jako `brand/accent` |
| `rgba(255,255,255,.6)` (`--text-on-dark-soft`) | tekst drugorzędny na ciemnym tle | guide ma `text/on-dark-muted: #545454`, co na `--background-dark` daje kontrast ~1.6:1 (poniżej WCAG AA); albo poprawić token w Figmie, albo udokumentować wariant alpha |
| `#383838` | tło aktywnego itemu w nawigacji, tryb ciemny | poza rampą: `neutral-600` (#2a2a2a) było za ciemne, a `neutral-500` (#545454) podwaja jasność — brakuje stopnia pośredniego |
| `#3d3d3d` (`--border-dark-card`) | obramowanie panelu ze zdjęciami zespołu | design nazywa to `gray/700`; w pliku istnieje druga rampa szarości, której style guide nie opisuje — ujednolicić z `neutral/*` albo udokumentować |
| `#e2e2e2` (`--border-active`) | obramowanie rozwiniętej karty w FAQ | poza rampą: `neutral-200` (#f2f2f2) to zwykłe obramowanie, a `neutral-300` (#d1d1d1) czytało się jak zaznaczenie — brakuje stopnia pośredniego, dokładnie w połowie |
| `#3ecf5e` | zielona kropka „Accepting projects" i jej poświata | dodać `status/positive` |
| gradienty avatarów | inicjały w testimonialach | udokumentować albo zastąpić zdjęciami |

Rozmiary tekstu spoza skali (13px, 14px, 15px, 17px) w większości zostały —
snapowanie wszystkiego do siedmiostopniowej skali przeprojektowałoby nawigację
i drobne etykiety.

Wyjątek: tekst ciągły w stopce i w sekcji kontaktu został zsnapowany do
`--fs-body` (16px) razem z `--lh-body` i `--ls-body` — akapit stopki i akapit
kontaktu szły odpowiednio na 14 i 15px, a linki w kolumnach stopki na 14px.
Drobny druk na dole stopki (copyright, Privacy Policy) świadomie zostaje na
14px, żeby utrzymać hierarchię względem tekstu ciągłego nad nim.

## Co zostało zsnapowane do skali

Przy przejściu na tokeny wyrównano wartości, które wypadały poza skalę. Kolory
nie zmieniły się w żadnym miejscu.

| Element | Przed | Po |
| --- | --- | --- |
| `.about-visual` | `44px` | `--radius-40` |
| `.services-nav a`, `.mini-quote` | `18px` | `--radius-16` |
| `.skip-link` | `10px` | `--radius-12` |
| `.tag-list li` | `900px` | `--radius-full` (999px) |
| przyciski, aktywny link nawigacji | własny cień | `--shadow-sm` |
| `.testimonial-card`, `.services-nav a` | własny cień | `--shadow-xs` |
| `.btn-light:hover` | `#f0f0ee` | `--surface-secondary` |
| `.btn-dark:hover` | `#1c1c1c` | `--neutral-700` |
