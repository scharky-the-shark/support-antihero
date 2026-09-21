const articles = [
    {
        platform: "general",
        title: {
            en: "How do I register?",
            de: "Wie registriere ich mich?"
        },
        description: {
            en: "How to register for Misfitz and which email address to use.",
            de: "So registrierst du dich für Misfitz und welche E-Mail-Adresse du verwenden musst."
        },
        url: "register/"
    },
    {
        platform: "general",
        title: {
            en: "How do I download Misfitz?",
            de: "Wie kann ich Misfitz herunterladen?"
        },
        description: {
            en: "When and how you get the download email.",
            de: "Wann und wie du die E-Mail mit den Download-Anweisungen erhältst."
        },
        url: "download/"
    },
    {
        platform: "ios",
        title: {
            en: "How do I install Misfitz on iPhone or iPad?",
            de: "Wie installiere ich Misfitz auf iPhone oder iPad?"
        },
        description: {
            en: "How to install Misfitz using TestFlight.",
            de: "So installierst du Misfitz mit TestFlight."
        },
        url: "testflight/"
    },
    {
        platform: "ios",
        title: {
            en: "I left the test or was removed from testing",
            de: "Ich habe den Test verlassen oder wurde entfernt"
        },
        description: {
            en: "What happens when you leave or are removed from the test.",
            de: "Was passiert, wenn du den Test verlässt oder entfernt wirst."
        },
        url: "end-testing/"
    },
    {
        platform: "ios",
        title: {
            en: "I cannot join the playtest",
            de: "Ich kann dem Playtest nicht beitreten"
        },
        description: {
            en: "What to do if you cannot join the Misfitz playtest on TestFlight.",
            de: "Was du tun kannst, wenn du dem Misfitz Playtest über TestFlight nicht beitreten kannst."
        },
        url: "join-error/"
    },
    {
        platform: "android",
        title: {
            en: "I cannot find Misfitz on Google Play",
            de: "Ich kann Misfitz bei Google Play nicht finden"
        },
        description: {
            en: "What to do if Misfitz does not appear on Google Play.",
            de: "Was du tun kannst, wenn Misfitz bei Google Play nicht angezeigt wird."
        },
        url: "app-not-found/"
    },
    {
        platform: "android",
        title: {
            en: "Misfitz is not available in my country",
            de: "Misfitz ist in meinem Land nicht verfügbar"
        },
        description: {
            en: "What to check if Google Play says Misfitz is not available in your country.",
            de: "Was du überprüfen solltest, wenn Google Play sagt, dass Misfitz in deinem Land nicht verfügbar ist."
        },
        url: "country-error/"
    }
];

const installTranslations = {
    en: {
        choosePlatform: "Choose platform",
        apple: "Apple",
        android: "Android"
    },
    de: {
        choosePlatform: "Plattform auswählen",
        apple: "Apple",
        android: "Android"
    }
};

const platformSelect = document.getElementById("platformSelect");
const articleContainer = document.getElementById("installArticles");

function getInstallLanguage() {
    return typeof getLanguage === "function" ? getLanguage() : "en";
}

function renderArticles(platform) {
    const language = getInstallLanguage();

    const filteredArticles = articles.filter(article =>
        article.platform === "general" ||
        platform === "all" ||
        article.platform === platform
    );

    articleContainer.innerHTML = filteredArticles.map(article => `
        <a class="article-card" href="${article.url}">
            <h2>${article.title[language]}</h2>
            <p>${article.description[language]}</p>
        </a>
    `).join("");
}

function updatePlatformSelector() {
    const language = getInstallLanguage();
    const t = installTranslations[language];

    platformSelect.options[0].textContent = t.choosePlatform;
    platformSelect.options[1].textContent = t.apple;
    platformSelect.options[2].textContent = t.android;
}

function updateInstallPage() {
    updatePlatformSelector();
    renderArticles(platformSelect.value);
}

platformSelect.addEventListener("change", () => {
    renderArticles(platformSelect.value);
});

updateInstallPage();

window.addEventListener("hashchange", () => {
    updateInstallPage();
});