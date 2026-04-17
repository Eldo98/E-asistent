# 🎓 Školska Upravljačka Aplikacija

Aplikacija za upravljanje školom - učenici, nastavnici, razredi i predmeti.

## 🚀 Tehnologije

- **React** + **TypeScript** + **Vite**
- **Tailwind CSS** - za stilove
- **Firebase** - backend, autentifikacija i baza podataka
- **Phosphor Icons** - ikone

## 📋 Preduvjeti

- Node.js (v18 ili noviji)
- Firebase račun (besplatno)

## 🛠️ Instalacija

### 1. Klonirajte repozitorij

```bash
git clone https://github.com/vase-korisnicko-ime/skolska-aplikacija.git
cd skolska-aplikacija
```

### 2. Instalirajte ovisnosti

```bash
npm install
```

### 3. Postavite Firebase

1. Kreirajte Firebase projekt na [firebase.google.com](https://firebase.google.com)
2. Omogućite **Authentication** (Email/Password)
3. Omogućite **Firestore Database**
4. Kopirajte Firebase konfiguraciju

### 4. Kreirajte .env datoteku

Kopirajte `.env.example` u `.env`:

```bash
cp .env.example .env
```

Unesite svoje Firebase podatke u `.env`:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your_project-default-rtdb.firebaseio.com
VITE_FIREBASE_PROJECT_ID=your_project
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 5. Pokrenite aplikaciju

```bash
npm run dev
```

Otvorite [http://localhost:5173](http://localhost:5173) u browseru.

## 👤 Prvi koraci

1. Kliknite **"Registriraj se"** na login stranici
2. Kreirajte admin račun
3. Počnite dodavati učenike, nastavnike, razrede i predmete!

## 📁 Struktura projekta

```
src/
├── components/     # React komponente
├── contexts/       # React context (auth)
├── config/         # Firebase konfiguracija
├── types/          # TypeScript tipovi
└── App.tsx         # Glavna aplikacija
```

## 🔒 Sigurnost

- `.env` datoteka sadrži osjetljive podatke i NIJE uključena u repozitorij
- Svaki korisnik mora koristiti vlastiti Firebase projekt
- Aplikacija koristi Firebase Security Rules za zaštitu podataka

## 📝 Licenca

MIT License - slobodno koristite i prilagođavajte!

## 🤝 Doprinos

Slobodno forkajte i šaljite pull requestove!

---

Napravljeno s ❤️ za škole
