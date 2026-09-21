const content = {
    en: {
        title: "How do I register?",

        intro: `
            <p>
                Before you can join a Misfitz public playtest,
                you need to register through Antihero Studios.
            </p>
        `,

        registerButton: "Register for Misfitz",

        registration: `
            <h2>Registration</h2>

            <p>
                Use the button below to register for Misfitz.
            </p>

            <a
                class="button-link"
                href="https://antiherostudios.com/?creatorCode=SCHARKY"
                target="_blank"
                rel="noopener noreferrer"
            >
                Register for Misfitz
            </a>
        `,

        confirmation: `
            <h2>After registration</h2>

            <p>
                After registering, you will receive a confirmation email
                at the email address you provided.
            </p>
        `,

        emailNote: `
            <div class="notice">
                <strong>Important</strong>

                <p>
                    The email address you use for registration must exactly
                    match the email address you use with your Apple ID for
                    TestFlight or your Google account for Google Play.
                </p>
            </div>
        `,

        animation: `
            <h2>How to register</h2>

            <p>
                1. <a
                        class="button-link"
                        href="https://antiherostudios.com/?creatorCode=SCHARKY"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Tap here
                    </a>
            </p>

            <p>
                2. Choose your platform.
            </p>

            <p>
                3. Enter your email address which you use to download apps from App Staore or Google Play Store.
            </p>
            
            <p>
                4. You receive a confirmation mail for being registered. As soon as a new playtest drop, you will receive download instructions. 
            </p>

            <a
                class="button-link"
                href="/install/download"
                rel="noopener noreferrer"
            >
                Informationen about Download-Mail
            </a>

            <p>
                The animation below shows the registration process.
            </p>

            <div class="support-gif">
                <img
                    src="register.gif"
                    alt="Animation showing how to register for Misfitz"
                    loading="lazy"
                >
            </div>
        `
    },

    de: {
        title: "Wie registriere ich mich?",

        intro: `
            <p>
                Bevor du an einem öffentlichen Misfitz Playtest teilnehmen
                kannst, musst du dich über Antihero Studios registrieren.
            </p>
        `,

        registerButton: "Für Misfitz registrieren",

        registration: `
            <h2>Registrierung</h2>

            <p>
                Verwende den folgenden Button, um dich für Misfitz zu registrieren.
            </p>

            <a
                class="button-link"
                href="https://antiherostudios.com/?creatorCode=SCHARKY"
                target="_blank"
                rel="noopener noreferrer"
            >
                Für Misfitz registrieren
            </a>
        `,

        confirmation: `
            <h2>Nach der Registrierung</h2>

            <p>
                Nach der Registrierung erhältst du eine Bestätigungs-E-Mail
                an die von dir angegebene E-Mail-Adresse.
            </p>
        `,

        emailNote: `
            <div class="notice">
                <strong>Wichtig</strong>

                <p>
                    Die E-Mail-Adresse, die du bei der Registrierung verwendest,
                    muss exakt mit der E-Mail-Adresse übereinstimmen, die du
                    mit deiner Apple-ID für TestFlight oder deinem Google-Konto
                    für Google Play verwendest.
                </p>
            </div>
        `,

        animation: `
            <h2>So registrierst du dich</h2>
            <p>
                1. <a
                        class="button-link"
                        href="https://antiherostudios.com/?creatorCode=SCHARKY"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Tippe hier
                    </a>
            </p>

            <p>
                2. Wähle deine Plattform.
            </p>

            <p>
                3. Gib deine E-Mail Adresse ein welche verwendet wird für iOS oder Android zum runterladen von Apps.
            </p>
            
            <p>
                4. Du erhälst eine Bestätigung fürs anmelden. Sobald ein Playtest stattfindet erhälst du Informationen zum runterladen. 
            </p>

            <a
                class="button-link"
                href="/install/download"
                rel="noopener noreferrer"
            >
                Informationen zur Download-Mail
            </a>

            <p>
                Die folgende Animation zeigt dir den Registrierungsprozess.
            </p>

            <div class="support-gif">
                <img
                    src="register.gif"
                    alt="Animation zur Registrierung für Misfitz"
                    loading="lazy"
                >
            </div>
        `
    }
};

function getArticleLanguage() {
    return typeof getLanguage === "function" ? getLanguage() : "en";
}

function renderArticle() {
    const language = getArticleLanguage();
    const t = content[language];

    document.title = `${t.title} - Misfitz Support`;

    document.getElementById("articleContent").innerHTML = `
        <h1>${t.title}</h1>

        ${t.intro}

        ${t.registration}

        ${t.confirmation}

        ${t.emailNote}

        ${t.animation}
    `;

    document.documentElement.lang = language;
}

renderArticle();

window.addEventListener("hashchange", renderArticle);