const translations = {
    en: {
        home: "Misfitz Support",
        game: "Game Support",
        team: "Team Q&A",
        language: "Language",
        theme: "Theme",
        system: "System",
        light: "Light",
        dark: "Dark",
        disclaimer: "Not affiliated with Antihero Studios. This is a community-run project.",
        legal: "Legal",
        searchPlaceholder: "Search support...",
        noResults: "No results found."
    },
    de: {
        home: "Misfitz Support",
        game: "Game Support",
        team: "Team Q&A",
        language: "Sprache",
        theme: "Darstellung",
        system: "System",
        light: "Hell",
        dark: "Dunkel",
        disclaimer: "Nicht mit Antihero Studios verknüpft. Dieses Projekt wird privat betrieben.",
        legal: "Rechtliches",
        searchPlaceholder: "Nach Hilfe suchen...",
        noResults: "Keine Ergebnisse gefunden."
    }
};

const searchItems = [
    {
        title: "How do I download Misfitz?",
        description: "Download and installation information.",
        url: "game-download/"
    },
    {
        title: "How do I sign up?",
        description: "Information about signing up for Misfitz.",
        url: "game/#signup"
    },
    {
        title: "How do I play Misfitz?",
        description: "Learn the basics of Misfitz.",
        url: "game/#play"
    },
    {
        title: "I didn't get my playtest link",
        description: "Help with missing playtest links.",
        url: "game/#missing-link"
    },
    {
        title: "When is the next playtest?",
        description: "Information about upcoming playtests.",
        url: "game/#next-playtest"
    },
    {
        title: "When is Misfitz coming out?",
        description: "Information about the release.",
        url: "game/#release"
    },
    {
        title: "How do I see my stats?",
        description: "View your Misfitz statistics.",
        url: "game/#stats"
    },
    {
        title: "What is Misfitz?",
        description: "Learn more about the game.",
        url: "game/#what-is-misfitz"
    }
];

function getLanguage() {
    const hash = window.location.hash.replace("#", "").toLowerCase();

    if (hash === "de" || hash === "en") {
        return hash;
    }

    return navigator.language.toLowerCase().startsWith("de") ? "de" : "en";
}

function getTheme() {
    return localStorage.getItem("theme") || "system";
}

function applyTheme(theme) {
    if (theme === "system") {
        document.documentElement.removeAttribute("data-theme");
        localStorage.removeItem("theme");
        return;
    }

    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
}

function getRootPath() {
    const path = window.location.pathname;

    if (path.includes("/game-download/") || path.includes("/game/") || path.includes("/team/")) {
        return "../";
    }

    return "./";
}

function getLanguageUrl(language) {
    const url = new URL(window.location.href);
    url.hash = language;
    return `${url.pathname}${url.search}${url.hash}`;
}

function renderHeader() {
    const language = getLanguage();
    const t = translations[language];
    const header = document.getElementById("header");

    if (!header) {
        return;
    }

    header.innerHTML = `
        <header class="site-header">
            <div class="header-inner">
                <a class="logo" href="${getRootPath()}">${t.home}</a>

                <nav class="header-nav">
                    <a href="${getRootPath()}game/">${t.game}</a>
                    <a href="${getRootPath()}team/">${t.team}</a>

                    <div class="header-controls">
                        <select id="languageSelect" aria-label="${t.language}">
                            <option value="en" ${language === "en" ? "selected" : ""}>English</option>
                            <option value="de" ${language === "de" ? "selected" : ""}>Deutsch</option>
                        </select>

                        <select id="themeSelect" aria-label="${t.theme}">
                            <option value="system" ${getTheme() === "system" ? "selected" : ""}>${t.system}</option>
                            <option value="light" ${getTheme() === "light" ? "selected" : ""}>${t.light}</option>
                            <option value="dark" ${getTheme() === "dark" ? "selected" : ""}>${t.dark}</option>
                        </select>
                    </div>
                </nav>
            </div>
        </header>
    `;

    document.getElementById("languageSelect").addEventListener("change", event => {
        window.location.hash = event.target.value;
    });

    document.getElementById("themeSelect").addEventListener("change", event => {
        applyTheme(event.target.value);
    });
}

function renderFooter() {
    const language = getLanguage();
    const t = translations[language];
    const footer = document.getElementById("footer");

    if (!footer) {
        return;
    }

    footer.innerHTML = `
    <footer class="site-footer">
        <div class="footer-inner">
            <div class="footer-note">
                ${t.disclaimer}
            </div>

            <nav class="footer-nav">
                <a href="https://antiherostudios.com/" target="_blank" rel="noopener noreferrer">Antihero Studios</a>
                <a href="https://misfitzstatz.com/" target="_blank" rel="noopener noreferrer">Misfitz Statz</a>
                <a href="/legal/">${t.legal}</a>
            </nav>
        </div>
    </footer>
`;
}

function setupSearch() {
    const input = document.getElementById("searchInput");
    const results = document.getElementById("searchResults");

    if (!input || !results) {
        return;
    }

    input.placeholder = translations[getLanguage()].searchPlaceholder;

    input.addEventListener("input", () => {
        const query = input.value.trim().toLowerCase();

        if (!query) {
            results.innerHTML = "";
            return;
        }

        const matches = searchItems.filter(item =>
            `${item.title} ${item.description}`.toLowerCase().includes(query)
        );

        results.innerHTML = matches.length
            ? matches.map(item => `
                <a class="search-result" href="${item.url}">
                    <strong>${item.title}</strong>
                    <div>${item.description}</div>
                </a>
            `).join("")
            : `<div class="search-result">${translations[getLanguage()].noResults}</div>`;
    });
}

function updateLanguage() {
    document.documentElement.lang = getLanguage();
}

applyTheme(getTheme());
updateLanguage();
renderHeader();
renderFooter();
setupSearch();

window.addEventListener("hashchange", () => {
    updateLanguage();
    renderHeader();
    renderFooter();
});