# Osobní IT Profil 2.0

Dynamický webový profil s obsahem načítaným z JSON souboru pomocí JavaScriptu.

## 🎯 Funkce

- ✅ Dynamické načítání dat z `profile.json`
- ✅ Vykreslování dovedností (Skills)
- ✅ Vykreslování zájmů (Interests)
- ✅ Vykreslování projektů (Projects)
- ✅ Moderní responsivní design
- ✅ Error handling s `.catch()`

## 📁 Struktura

```
/
├── index.html      # HTML struktura se sloty pro dynamický obsah
├── style.css       # Moderní CSS s gradienty a responzivitou
├── app.js          # JavaScript s fetch() a vykreslováním
└── profile.json    # JSON se všemi daty profilu
```

## 🚀 Jak spustit

1. Klonuj repository:
```bash
git clone https://github.com/stepanke2007/muj-IT-web.git
cd muj-IT-web
```

2. Otevři v prohlížeči - buď přímo:
```bash
open index.html
```

Nebo spusť lokální server:
```bash
python -m http.server 8000
```

Pak navštívit: `http://localhost:8000`

## 📝 Úprava profilu

Uprav `profile.json` s vlastními daty:
```json
{
  "name": "Tvoje jméno",
  "skills": ["HTML", "CSS", "JavaScript"],
  "interests": ["Web development", "AI"],
  "projects": [
    {
      "title": "Název projektu",
      "description": "Popis",
      "link": "https://..."
    }
  ]
}
```

## 🛠️ Jak funguje JavaScript

App.js:
1. Stáhne `profile.json` pomocí `fetch()`
2. Parsuje JSON data
3. Vloží jméno do `<h1 id="name">`
4. Generuje seznam dovedností z pole `skills`
5. Dynamicky vykreslí zájmy a projekty
6. Zpracuje chyby pomocí `.catch()`

```javascript
fetch('profile.json')
  .then(response => response.json())
  .then(data => {
    // vkládání dat do DOM
  })
  .catch(error => console.error(error));
```

## 🛠️ Použité technologie

- **HTML5** – Sémantická struktura
- **CSS3** – Moderní design s flexboxem a gridem
- **JavaScript** – Fetch API pro dynamické načítání
- **JSON** – Datový formát
- **Git** – Správa verzí s Conventional Commits

## 📜 Git workflow

Projekt používá **Conventional Commits** pro čistou historii:

- `feat` – nová funkce
- `fix` – oprava chyby
- `style` – úpravy CSS/vzhledu
- `refactor` – přepsání bez změny funkce
- `docs` – dokumentace
- `chore` – údržba

## 🌐 GitHub Pages

Web je dostupný na: https://stepanke2007.github.io/muj-IT-web/

## ✨ Autor

Jan Novák - Osobní IT Profil 2.0
