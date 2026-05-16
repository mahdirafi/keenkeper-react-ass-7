# 👤 KeenKeeper — Personal CRM & Friendship Tracker

A React-based personal relationship manager that helps you track interactions with your contacts through a beautiful timeline and analytics dashboard.

---

## 🚀 Live Demo

> [Deploy link here](https://keenkeeper-react-7.netlify.app/) 

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI Framework |
| React Router v6 | Client-side Routing & Loaders |
| Context API | Global State Management |
| Tailwind CSS | Styling |
| Recharts | Data Visualization (Pie Chart) |
| React Icons (Feather) | Icon Set |
| React Spinners | Loading Animations |
| React Toastify | Toast Notifications |
| Vite | Build Tool |

---

## ✨ Features

- 📋 **Profile Section** — View detailed contact profiles loaded via React Router loader
- 📅 **Timeline** — Log and display interaction history (Call, Text, Video)
- 📊 **Friendship Analytics** — Pie chart breakdown of interaction types
- ⚡ **Context API** — Shared timeline state across all components
- 💨 **Loading State** — Smooth PuffLoader spinner while data loads
- 📭 **Empty State** — Friendly UI when no interactions exist
- 🔔 **Toast Notifications** — Feedback on user actions via React Toastify
- ❌ **Error Page** — Custom error boundary page for invalid routes

---

## 📁 Project Structure

```
src/
├── Components/
│   ├── HomePages/
│   │   └── Banner.jsx
│   └── Shared/
│       └── NavBar.jsx
├── context/
│   └── TimelineContext.jsx       # Global timeline state (Context + Provider)
├── Layout/
│   └── Root.jsx                  # Root layout with NavBar + Outlet
├── Pages/
│   └── Home/
│       ├── Home.jsx              # Home page with Profile Section
│       ├── Timeline.jsx          # Timeline list view
│       ├── Stats.jsx             # Recharts Pie Chart analytics
│       └── ErrorPage.jsx         # Custom 404 / error page
├── Profile/
│   ├── ProfileCard.jsx
│   ├── ProfileDetails.jsx        # Uses TimelineContext
│   └── ProfileSection.jsx
├── index.css
└── main.jsx                      # App entry — Router + TimelineProvider
```

---

## 🗺️ Routes

| Path | Component | Description |
|---|---|---|
| `/` | `Home` | Profile list, loads from `friends.json` |
| `/ProfileDetails/:id` | `ProfileDetails` | Single contact detail view |
| `/timeline` | `Timeline` | Full interaction history |
| `/stats` | `Stats` | Analytics pie chart |
| `*` (any invalid) | `ErrorPage` | Custom error/404 page |

---

## ⚙️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/mahdirafi/keenkeper-react-ass-7.git
cd keenkeper-react-ass-7
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

---

## 🧠 Context API Setup

Timeline state is managed globally using React Context.

**`context/TimelineContext.jsx`**
```jsx
export const TimelineContext = createContext(null);  // ← named export
export default TimelineProvider;                     // ← default export
```

**`main.jsx`** — Provider wraps the entire app:
```jsx
<TimelineProvider>
  <RouterProvider router={router} />
  <ToastContainer />
</TimelineProvider>
```

**In any component:**
```jsx
import { TimelineContext } from '../../context/TimelineContext';
const { timeline, setTimeline } = useContext(TimelineContext);
```

---

## ❌ Error Page

Custom error page is shown for invalid routes or loader failures.

```jsx
// main.jsx router config
{
  path: "/",
  element: <Root />,
  errorElement: <ErrorPage />,   // ← catches all route errors
  children: [...]
}
```

**`ErrorPage.jsx`** uses `useRouteError()` from React Router:
```jsx
import { useRouteError, Link } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold text-red-500">Oops!</h1>
      <p className="text-gray-600 mt-4">{error?.statusText || error?.message}</p>
      <Link to="/" className="mt-6 text-blue-500 underline">Go Back Home</Link>
    </div>
  );
};

export default ErrorPage;
```

---

## 📦 NPM Packages Used

```bash
npm install react-router-dom
npm install react-icons
npm install react-spinners
npm install recharts
npm install react-toastify
npm install -D tailwindcss postcss autoprefixer
```

---

## ⚠️ Common Errors & Fixes

### `TimelineContext is not defined`
```jsx
// ❌ Wrong — missing import
const { timeline } = useContext(TimelineContext);

// ✅ Fix — add named import
import { TimelineContext } from '../../context/TimelineContext';
```

### `does not provide an export named 'TimelineContext'`
```jsx
// ❌ Wrong
export default createContext(null);

// ✅ Fix
export const TimelineContext = createContext(null);
```

### `remote origin already exists`
```bash
git remote remove origin
git remote add origin https://github.com/mahdirafi/keenkeper-react-ass-7.git
git push -u origin main
```

### `git add.` space error
```bash
# ❌ Wrong
git add.

# ✅ Correct
git add .
```

---

## 👨‍💻 Author

**Mahdi Rafi**
GitHub: [@mahdirafi](https://github.com/mahdirafi)

---

## 📄 License
-----------------------
