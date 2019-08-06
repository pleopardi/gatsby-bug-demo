import React, { useState } from "react";
import Cookies from "js-cookie";

const COOKIE_NAME = "displayCookieNotice";
const COOKIE_VALUE = "y";
const text =
  "Questo sito utilizza cookie di Google per analizzare il traffico. Il tuo indirizzo IP e il tuo agente utente sono condivisi con Google, unitamente alle metriche sulle prestazioni e sulla sicurezza, per garantire la qualità del servizio e generare statistiche di utilizzo.";

const styles = {
  bannerContentWrapper: {
    width: "100%",
    maxWidth: "60rem",
    padding: "1rem",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerWrapper: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: "#71151aee",
    color: "white",
    display: "flex",
    justifyContent: "center",
  },
  button: {
    border: "2px solid white",
    padding: "0.6rem 1.2rem",
  },
  buttonWrapper: {
    flex: "1 1 5rem",
    padding: "0.5rem 0",
    display: "flex",
    justifyContent: "center",
  },
  textWrapper: {
    flex: "5 1 25rem",
    padding: "0.5rem 0",
    display: "flex",
    justifyContent: "center",
  },
};

function getPrivacyCookie() {
  return Cookies.get(COOKIE_NAME);
}

function setPrivacyCookie() {
  Cookies.set(COOKIE_NAME, "y", { expires: 365 });
}

function CookieBanner() {
  const [isCookieAvailable, setIsCookieAvailable] = useState(
    getPrivacyCookie() === COOKIE_VALUE
  );

  function onClick() {
    setIsCookieAvailable(true);
    setPrivacyCookie();
  }

  if (isCookieAvailable) {
    return <div />;
  }

  return (
    <div css={styles.bannerWrapper}>
      <div css={styles.bannerContentWrapper}>
        <p css={styles.textWrapper}>{text}</p>
        <div css={styles.buttonWrapper}>
          <div css={styles.button} onClick={onClick}>
            OK
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
