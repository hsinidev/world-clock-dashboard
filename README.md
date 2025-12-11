# World Clock Dashboard

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-61dafb.svg?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC.svg?style=flat&logo=tailwind-css)

A high-performance, SEO-optimized World Clock Dashboard built with React 18, TypeScript, and Tailwind CSS. This application provides real-time synchronization of global time zones using the WorldTimeAPI, presented within an immersive, animated cosmic interface.

### 🚀 LIVE DEMO
[**Click here to view the Live Demo on Doodax.com**](https://doodax.com/tools/cosmic-world-clock-dashboard/index.html)

## 🌟 Features

*   **Real-Time Synchronization:** Fetches and synchronizes time for major global economic hubs (London, New York, Tokyo, Dubai, Sydney).
*   **Immersive UX:** Features a multi-layered, animated nebula and starfield background.
*   **SEO Powerhouse:** Includes a massive, schema-rich article on time synchronization to boost search engine rankings.
*   **Developer Friendly:** Built with strict TypeScript typing and modular component architecture.
*   **Responsive Design:** Fully fluid layout adapting from mobile devices to 4K displays.
*   **Legal & Compliance:** Built-in modal architecture for Privacy Policy, Terms of Service, and DMCA compliance.

## 📂 Project Structure

```
/
├── public/
│   ├── index.html        # Entry HTML with SEO Meta Tags
│   ├── favicon.svg       # Vector Icon
│   ├── robots.txt        # Crawler Directives
│   └── sitemap.xml       # Site Structure for SEO
├── src/
│   ├── components/
│   │   ├── ClockCard.tsx          # Individual City Display
│   │   ├── Modal.tsx              # Pop-up Interface
│   │   ├── SeoArticle.tsx         # Long-form SEO Content (Collapsible)
│   │   ├── ThemeLayout.tsx        # App Wrapper & Cosmic Background
│   │   └── WorldClockDashboard.tsx # Main Logic Controller
│   ├── services/
│   │   └── timeService.ts         # API Integration
│   ├── types/
│   │   └── index.ts               # TypeScript Interfaces
│   ├── App.tsx
│   └── index.tsx
├── README.md
```

## 🛠️ Tech Stack

*   **Frontend:** React 18
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (via CDN for lightweight deployment)
*   **State Management:** React Hooks (`useState`, `useEffect`)
*   **Data Fetching:** Native Fetch API
*   **SEO:** JSON-LD Schema.org implementation

## 🚀 Getting Started

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hsinidev/world-clock-dashboard.git
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm start
    ```
    The application will launch at `http://localhost:3000`.

## 📄 License

This project is open-source and available under the MIT License.

---

### Contact & Credits

*   **Powered by:** [HSINI MOHAMED](https://github.com/hsinidev)
*   **Website:** [doodax.com](https://doodax.com)
*   **Email:** hsini.web@gmail.com
