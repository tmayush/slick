window.addEventListener("DOMContentLoaded", uzwcmm);
function uzwcmm() {
  const zwcmm = document.querySelector("nav");
  const harsu = document.querySelector("footer");
  wefukw();
  wefhkw();
  function wefukw() {
    zwcmm.innerHTML = `
    <div id="main-logo">
    <a href="https://mayush-abhi.netlify.app/" class="anchor">SLICK</a>
  </div>
  <div class="nav-buttons">
    <ul>
      <li class="nav-list-item">
        <a href="/" id="home-nav" class="anchor">Home</a>
      </li>
      <li class="nav-list-item">
        <a href="/pages/doubts.html" id="about-nav" class="anchor"
          >Doubts</a
        >
      </li>
      <li class="nav-list-item">
        <a href="/pages/study-notes.html" id="sign-up-nav" class="anchor"
          >Notes</a
        >
      </li>
    </ul>
  </div>`;
    const popo = document.body.id;
    const dkfj = document.querySelectorAll(".nav-list-item");
    dkfj.forEach(function (gg) {
      if (gg.children[0].id === `${popo}-nav`) {
        gg.classList.add(`current`);
        gg.children[0].classList.add(`current-link`);
      }
    });
  }
  function wefhkw() {
    harsu.innerHTML = `
   <div class="footer-main">
  <div class="footer-contact">
    <div class="footer-logo">
      <h1 class="footer-logo company-logo no-select">SLICK</h1>
    </div>
    <div class="footer-contact-information">
      <ul class="list footer-list footer-list-contact">
        <li class="list-item footer-list-item footer-list-item-contact">
          <img
            class="footer-contact-icon footer-contact-call-icon"
            src="/assests/icons/footer-icons/call-white.svg"
            alt="Call Icon"
          />
          <p id="telephone-number">+919944538955</p>
        </li>
        <li class="list-item footer-list-item footer-list-item-contact">
          <img
            class="footer-contact-icon footer-contact-email-icon"
            src="/assests/icons/footer-icons/email.svg"
            alt="Email Icon"
          />
          <p id="email"><span id="alias">lowl1fe</span>@gmail.com</p>
        </li>
      </ul>
    </div>
  </div>
  <div class="footer-block-wrapper">
    <div class="footer-block-1">
      <ul class="list footer-list">
        <li class="list-item footer-list-item">
          <a class="anchor" href="/pages/study-notes.html">Study Notes</a>
        </li>
        <li class="list-item footer-list-item">
          <a class="anchor" href="/pages/doubts.html"> Study Doubts</a>
        </li>
        <li class="list-item footer-list-item">
          <a class="anchor" href="#!">Exams</a>
        </li>
        <li class="list-item footer-list-item">
          <a class="anchor" href="/#contact-us-section"
            >Contact & Suggestions</a
          >
        </li>
      </ul>
    </div>
    <div class="footer-block-2">
      <ul>
        <li class="list-item footer-list-item">
          <a class="anchor" href="#">About us</a>
        </li>
        <li class="list-item footer-list-item">
          <a
            class="anchor"
            href="/pages/legal/terms-of-service.html"
            target="_blank"
            >Terms & Conditions</a
          >
        </li>
        <li class="list-item footer-list-item">
          <a
            class="anchor"
            href="/pages/legal/privacy-policy.html"
            target="_blank"
            >Privacy Policy</a
          >
        </li>
      </ul>
    </div>
    <div class="footer-block-3">
      <ul>
        <li class="list-item footer-list-item-social">
          <a href="https://twitter.com/AbhinavPeddini" target="_blank" rel="noopener noreferrer">
            <img
              id="twitter-icon"
              class="social-icon"
              src="/assests/icons/Social Media Icons/twitter.svg"
              alt="School's Twitter Page"
            />
          </a>
        </li>
        <li class="list-item footer-list-item-social">
          <a
            href="https://www.facebook.com/Mayush.Tim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="facebook-icon"
              class="social-icon"
              src="/assests/icons/Social Media Icons/facebook.svg"
              alt="School's Facebook Page"
            />
          </a>
        </li>
        <li class="list-item footer-list-item-social">
          <a
            href="https://www.instagram.com/abhinav_peddini/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="instagram-icon"
              class="social-icon"
              src="/assests/icons/Social Media Icons/insta.svg"
              alt="School's Instagram Page"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
<div class="footer-copyright">
  <div class="local-time">
    <p class="local-time-text">
      Local Time (24h) : <span id="local-time">12:00 p.m.</span>
    </p>
  </div>
  <div class="copyright-text-wrapper">
    <p class="copyright-text">
      Copyright &copy; <span id="copyright-year"></span> u/<span
        id="alias"
        >tmayush</span
      >. All Rights Reserved.
    </p>
  </div>
  <div class="t&c-wrapper">
    <a
      href="/pages/legal/terms-of-service.html"
      class="anchor terms-and-conditions"
      >Terms & Conditions</a
    >
  </div>
</div>
   `;
    let wxwu;
    const yezim = document.querySelector("#local-time");

    jhcwcm();
    setInterval(jhcwcm, 10000);
    function jhcwcm() {
      wxwu = new Date();
      pihbb = `${wxwu.getHours()}:${wxwu.getMinutes()}`;
      yezim.textContent = `${pihbb}`;
    }

    const dilaj = document.querySelector("#copyright-year");
    dilaj.textContent = `${wxwu.getFullYear()}`;
  }
}
