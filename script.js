const WHATSAPP_NUMBER = "2290167984110";
const CONTACT_EMAIL = "chiclocalagency@gmail.com";

let lang = "fr";

const contentById = {
  "skip-link": {
    fr: "Aller au contenu principal",
    en: "Skip to main content",
  },
  "nav-services": { fr: "Services", en: "Services" },
  "nav-portfolio": { fr: "Portfolio", en: "Portfolio" },
  "nav-tarifs": { fr: "Tarifs", en: "Pricing" },
  "nav-faq": { fr: "FAQ", en: "FAQ" },
  "nav-testi": { fr: "Témoignages", en: "Testimonials" },
  "nav-contact": { fr: "Contact", en: "Contact" },
  "mnav-services": { fr: "Services", en: "Services" },
  "mnav-portfolio": { fr: "Portfolio", en: "Portfolio" },
  "mnav-tarifs": { fr: "Tarifs", en: "Pricing" },
  "mnav-faq": { fr: "FAQ", en: "FAQ" },
  "mnav-testi": { fr: "Témoignages", en: "Testimonials" },
  "mnav-contact": { fr: "Nous contacter", en: "Contact us" },
  "h-tag": {
    fr: "Communication digitale pour boutiques de mode à Cotonou",
    en: "Digital communication for fashion boutiques in Cotonou",
  },
  "h-title": {
    fr: "La visibilité en ligne que<br><em>vos boutiques</em> méritent",
    en: "The online visibility<br><em>your boutique</em> deserves",
  },
  "h-sub": {
    fr: "Nous aidons les petites boutiques de vêtements et d'accessoires à mieux se présenter en ligne, publier avec régularité et transformer leur visibilité en demandes concrètes.",
    en: "We help small clothing and accessories boutiques present themselves better online, publish consistently, and turn visibility into real enquiries.",
  },
  "h-btn1": { fr: "Demander un audit", en: "Request an audit" },
  "h-btn2": { fr: "Découvrir nos services", en: "Discover our services" },
  "trust-title": {
    fr: "Ce que vous gagnez dès le départ",
    en: "What you gain from day one",
  },
  "trust-1": {
    fr: "Audit clair et priorités d'action",
    en: "Clear audit and action priorities",
  },
  "trust-2": { fr: "Réponse sous 24h", en: "Reply within 24 hours" },
  "trust-3": {
    fr: "Contenus pensés pour vendre",
    en: "Content designed to help you sell",
  },
  "trust-4": {
    fr: "Accompagnement local à Cotonou",
    en: "Local support in Cotonou",
  },
  "sec1-label": { fr: "Ce que nous faisons", en: "What we do" },
  "sec1-title": { fr: "Nos services", en: "Our services" },
  "sec1-intro": {
    fr: "Une base claire, du contenu qui rassure et un dispositif pensé pour transformer la visibilité en demandes concrètes.",
    en: "A clear foundation, reassuring content, and a setup designed to turn visibility into concrete enquiries.",
  },
  "sv1-t": { fr: "Gestion réseaux sociaux", en: "Social media management" },
  "sv1-p": {
    fr: "Instagram, Facebook et WhatsApp Business : gestion des pages, calendrier éditorial, posts, stories et reels pour publier avec cohérence.",
    en: "Instagram, Facebook, and WhatsApp Business: page management, editorial calendar, posts, stories, and reels to publish with consistency.",
  },
  "sv2-t": { fr: "Contenus visuels mode", en: "Fashion visual content" },
  "sv2-p": {
    fr: "Photos produits, reels, mini-séances en boutique et visuels adaptés à vos pièces pour que vos produits paraissent plus désirables.",
    en: "Product photos, reels, in-store mini sessions, and visuals tailored to your pieces so your products look more desirable.",
  },
  "sv3-t": { fr: "Publicités ciblées", en: "Targeted advertising" },
  "sv3-p": {
    fr: "Campagnes Meta Ads et WhatsApp sponsorisé pour toucher des clientes pertinentes, au bon endroit et avec le bon message.",
    en: "Meta Ads and sponsored WhatsApp campaigns to reach relevant customers, in the right place, with the right message.",
  },
  "sv4-t": {
    fr: "Site vitrine et SEO local",
    en: "Showcase website and local SEO",
  },
  "sv4-p": {
    fr: "Une présence en ligne propre, une fiche Google mieux présentée et une base solide pour être trouvée plus facilement.",
    en: "A cleaner online presence, a better presented Google listing, and a stronger foundation to be found more easily.",
  },
  "sv5-t": { fr: "Catalogue en ligne", en: "Online catalogue" },
  "sv5-p": {
    fr: "Catalogues WhatsApp, pages produit et organisation des offres pour répondre plus vite et vendre sans friction inutile.",
    en: "WhatsApp catalogues, product pages, and better offer organisation to reply faster and sell without unnecessary friction.",
  },
  "sv6-t": { fr: "Stratégie et conseil", en: "Strategy and consulting" },
  "sv6-p": {
    fr: "Audit de présence digitale, priorités d'action et accompagnement régulier pour éviter les efforts dispersés.",
    en: "Digital presence audit, action priorities, and ongoing guidance to avoid scattered efforts.",
  },
  "sec2-label": { fr: "Nos réalisations", en: "Our work" },
  "sec2-title": { fr: "Portfolio", en: "Portfolio" },
  "sec2-intro": {
    fr: "Des exemples concrets de contenus, de tournages et de mise en valeur produit pensés pour des boutiques de mode locales.",
    en: "Concrete examples of content, in-store shooting, and product presentation designed for local fashion boutiques.",
  },
  "p1-tag": { fr: "Contenu social", en: "Social content" },
  "p1-t": {
    fr: "Production Instagram boutique",
    en: "Boutique Instagram production",
  },
  "p1-p": {
    fr: "Captation et mise en scène de produits pour renforcer l'identité visuelle de la boutique et alimenter reels, stories et publications.",
    en: "Product capture and styling to strengthen the boutique's visual identity and feed reels, stories, and posts.",
  },
  "p1-r": {
    fr: "Résultat : <span>des contenus cohérents, prêts à publier</span>",
    en: "Result: <span>consistent content, ready to publish</span>",
  },
  "p2-tag": { fr: "Tournage vidéo", en: "Video production" },
  "p2-t": { fr: "Captation en boutique", en: "In-store filming" },
  "p2-p": {
    fr: "Tournage sur place, mise en avant des pièces et création de séquences réutilisables pour reels, stories et campagnes sponsorisées.",
    en: "On-site filming, product highlighting, and reusable sequences for reels, stories, and paid campaigns.",
  },
  "p2-r": {
    fr: "Résultat : <span>une matière vidéo exploitable sur plusieurs formats</span>",
    en: "Result: <span>video material you can reuse across formats</span>",
  },
  "p3-tag": { fr: "Photo produit", en: "Product photography" },
  "p3-t": {
    fr: "Avant / après mise en valeur",
    en: "Before / after enhancement",
  },
  "p3-p": {
    fr: "Exemple simple de mise en valeur produit : meilleure lumière, meilleur cadrage et rendu plus premium pour présenter l'article avec plus de sérieux en ligne.",
    en: "A simple product enhancement example: better lighting, better framing, and a more premium result to present the item more seriously online.",
  },
  "p3-r": {
    fr: "Résultat : <span>un visuel plus vendeur et plus crédible</span>",
    en: "Result: <span>a more persuasive and credible visual</span>",
  },
  "sec3-label": { fr: "Comment ça marche", en: "How it works" },
  "sec3-title": {
    fr: "Une méthode simple pour avancer proprement",
    en: "A simple method to move forward properly",
  },
  "sec3-intro": {
    fr: "Pas de dispersion, pas d'actions au hasard : on clarifie d'abord, puis on exécute.",
    en: "No scattered effort, no random actions: we clarify first, then we execute.",
  },
  "st1-t": { fr: "Audit initial", en: "Initial audit" },
  "st1-p": {
    fr: "On regarde votre présence actuelle, vos points faibles et ce qui bloque vraiment la visibilité ou la conversion.",
    en: "We review your current presence, your weak points, and what is really blocking visibility or conversion.",
  },
  "st2-t": { fr: "Priorités claires", en: "Clear priorities" },
  "st2-p": {
    fr: "On définit le bon niveau d'accompagnement selon vos objectifs, vos moyens et le type de contenus à produire.",
    en: "We define the right level of support based on your goals, resources, and the type of content to produce.",
  },
  "st3-t": { fr: "Production et diffusion", en: "Production and rollout" },
  "st3-p": {
    fr: "On produit les contenus utiles, on structure vos canaux et on met en ligne ce qui doit réellement servir votre boutique.",
    en: "We produce useful content, structure your channels, and publish what should genuinely serve your boutique.",
  },
  "st4-t": { fr: "Suivi et ajustements", en: "Follow-up and refinement" },
  "st4-p": {
    fr: "On mesure ce qui attire, ce qui rassure et ce qui convertit pour corriger rapidement ce qui n'est pas assez solide.",
    en: "We measure what attracts, reassures, and converts so we can quickly correct what is not strong enough.",
  },
  "sec4-label": { fr: "Formules", en: "Packages" },
  "sec4-title": { fr: "Formules d'accompagnement", en: "Support packages" },
  "sec4-intro": {
    fr: "Les tarifs sont ajustés selon le volume de contenu, les canaux à gérer et le niveau d'accompagnement souhaité.",
    en: "Pricing is tailored to content volume, channels to manage, and the level of support you need.",
  },
  "tk1-n": { fr: "Starter", en: "Starter" },
  "tk1-p": { fr: "Sur devis", en: "On request" },
  "tk1-per": { fr: "petite boutique", en: "small boutique" },
  "tf1-1": {
    fr: "Gestion d'une page (Instagram ou Facebook)",
    en: "Management of one page (Instagram or Facebook)",
  },
  "tf1-2": { fr: "12 publications par mois", en: "12 posts per month" },
  "tf1-3": { fr: "Catalogue WhatsApp", en: "WhatsApp catalogue" },
  "tf1-4": { fr: "Point de suivi mensuel", en: "Monthly follow-up" },
  "tk1-btn": { fr: "Choisir cette formule", en: "Choose this package" },
  "tk2-badge": { fr: "Le plus demandé", en: "Most requested" },
  "tk2-n": { fr: "Boutique Pro", en: "Boutique Pro" },
  "tk2-p": { fr: "Sur devis", en: "On request" },
  "tk2-per": { fr: "boutique en croissance", en: "growing boutique" },
  "tf2-1": {
    fr: "Instagram, Facebook et WhatsApp",
    en: "Instagram, Facebook, and WhatsApp",
  },
  "tf2-2": {
    fr: "20 publications et stories régulières",
    en: "20 posts and regular stories",
  },
  "tf2-3": { fr: "2 reels par semaine", en: "2 reels per week" },
  "tf2-4": {
    fr: "Campagnes Meta Ads pilotées",
    en: "Managed Meta Ads campaigns",
  },
  "tf2-5": {
    fr: "Prises de vue produit mensuelles",
    en: "Monthly product shoots",
  },
  "tf2-6": {
    fr: "Suivi et conseils mensuels",
    en: "Monthly follow-up and advice",
  },
  "tk2-btn": { fr: "Choisir cette formule", en: "Choose this package" },
  "tk3-n": { fr: "Premium", en: "Premium" },
  "tk3-p": { fr: "Sur devis", en: "On request" },
  "tk3-per": { fr: "boutique ambitieuse", en: "ambitious boutique" },
  "tf3-1": {
    fr: "Tout le pack Boutique Pro",
    en: "Everything in Boutique Pro",
  },
  "tf3-2": {
    fr: "Site vitrine et SEO local",
    en: "Showcase website and local SEO",
  },
  "tf3-3": {
    fr: "Catalogue ou shopping mieux structuré",
    en: "Better structured catalogue or shopping setup",
  },
  "tf3-4": {
    fr: "Plan de communication trimestriel",
    en: "Quarterly communication plan",
  },
  "tf3-5": { fr: "Support prioritaire", en: "Priority support" },
  "tk3-btn": { fr: "Choisir cette formule", en: "Choose this package" },
  "sec7-label": {
    fr: "Questions fréquentes",
    en: "Frequently asked questions",
  },
  "sec7-title": {
    fr: "Ce qu'il faut savoir avant de démarrer",
    en: "What to know before getting started",
  },
  "sec7-intro": {
    fr: "Les questions que les boutiques nous posent le plus souvent avant de lancer un accompagnement.",
    en: "The questions boutiques ask most often before starting a support package.",
  },
  "faq1-q": {
    fr: "En combien de temps peut-on lancer l'accompagnement ?",
    en: "How quickly can support begin?",
  },
  "faq1-a": {
    fr: "Après l'audit initial, nous pouvons cadrer les priorités et démarrer rapidement selon votre besoin : contenus, gestion réseaux, publicités ou accompagnement global.",
    en: "After the initial audit, we can frame priorities and start quickly depending on your needs: content, social media management, advertising, or broader support.",
  },
  "faq2-q": {
    fr: "Travaillez-vous aussi avec de petites boutiques ?",
    en: "Do you also work with small boutiques?",
  },
  "faq2-a": {
    fr: "Oui. Le site est pensé pour des boutiques locales qui veulent mieux présenter leurs produits sans devoir construire une équipe marketing complète.",
    en: "Yes. The site is designed for local boutiques that want to present their products better without building a full marketing team.",
  },
  "faq3-q": {
    fr: "Faut-il déjà avoir une présence active sur Instagram ?",
    en: "Do I already need an active Instagram presence?",
  },
  "faq3-a": {
    fr: "Non. Nous pouvons repartir d'un compte existant, le remettre au propre ou construire une base de contenu plus claire si votre présence actuelle n'est pas encore structurée.",
    en: "No. We can start from an existing account, clean it up, or build a clearer content foundation if your current presence is not yet structured.",
  },
  "faq4-q": {
    fr: "Peut-on commencer par un audit sans engagement ?",
    en: "Can we start with a no-obligation audit?",
  },
  "faq4-a": {
    fr: "Oui. L'audit sert justement à clarifier vos priorités, éviter les dépenses inutiles et décider si un accompagnement régulier est le bon prochain pas.",
    en: "Yes. The audit is there to clarify priorities, avoid unnecessary spending, and decide whether ongoing support is the right next step.",
  },
  "sec5-label": { fr: "Retours clients", en: "Client feedback" },
  "sec5-title": { fr: "Témoignages", en: "Testimonials" },
  "sec5-intro": {
    fr: "Des retours centrés sur la clarté du travail, la réactivité et l'impact concret sur la présentation des boutiques.",
    en: "Feedback focused on clarity, responsiveness, and tangible impact on how boutiques are presented.",
  },
  "t1-txt": {
    fr: "Depuis que mon contenu est mieux structuré, les clientes comprennent plus vite ce que je vends et j'ai davantage de demandes sérieuses sur WhatsApp.",
    en: "Since my content became more structured, customers understand what I sell much faster and I receive more serious WhatsApp enquiries.",
  },
  "t1-role": {
    fr: "Propriétaire - Boutique Kemi Mode",
    en: "Owner - Boutique Kemi Mode",
  },
  "t2-txt": {
    fr: "Le site me permet enfin de présenter la boutique proprement quand on me cherche en ligne. Cela rassure beaucoup plus vite.",
    en: "The website finally lets me present the boutique properly when people look me up online. It reassures them much faster.",
  },
  "t2-role": { fr: "Propriétaire - Ama Style", en: "Owner - Ama Style" },
  "t3-txt": {
    fr: "Les visuels produits et le catalogue m'ont aidé à répondre plus vite, à mieux montrer mes pièces et à gagner en sérieux.",
    en: "The product visuals and catalogue helped me reply faster, showcase my pieces better, and come across more seriously.",
  },
  "t3-role": {
    fr: "Propriétaire - Glamour Loc Accessories",
    en: "Owner - Glamour Loc Accessories",
  },
  "sec6-label": {
    fr: "Parlons de votre projet",
    en: "Let's talk about your project",
  },
  "sec6-title": { fr: "Contactez-nous", en: "Contact us" },
  "sec6-intro": {
    fr: "Si votre boutique manque de clarté, de contenu régulier ou de demandes qualifiées, on vous aide à remettre de l'ordre.",
    en: "If your boutique lacks clarity, regular content, or qualified enquiries, we help you bring order back in.",
  },
  "ci-title": {
    fr: "Parlons stratégie et visibilité",
    en: "Let's talk strategy and visibility",
  },
  "ci-sub": {
    fr: "Audit initial, priorités d'action et accompagnement adapté à votre niveau d'avancement. Vous repartez avec une vision plus nette, pas avec des promesses vagues.",
    en: "Initial audit, action priorities, and support tailored to your current stage. You leave with a clearer view, not vague promises.",
  },
  ca1: { fr: "Discuter sur WhatsApp", en: "Chat on WhatsApp" },
  ca2: { fr: "Voir Instagram", en: "View Instagram" },
  "cd1-label": { fr: "WhatsApp", en: "WhatsApp" },
  "cd2-label": { fr: "Email", en: "Email" },
  "cd3-label": { fr: "Instagram", en: "Instagram" },
  "cd4-label": { fr: "Facebook", en: "Facebook" },
  "cd5-label": { fr: "Adresse", en: "Address" },
  "cd5-val": { fr: "Cotonou, Bénin", en: "Cotonou, Benin" },
  "form-helper": {
    fr: "Votre demande prépare un message structuré sur WhatsApp. Si WhatsApp n'est pas disponible, votre application email prendra le relais.",
    en: "Your request prepares a structured WhatsApp message. If WhatsApp is not available, your email app will be used instead.",
  },
  "fl-nom": { fr: "Votre nom", en: "Your name" },
  "fl-boutique": { fr: "Votre boutique", en: "Your boutique" },
  "fl-contact": { fr: "Email ou WhatsApp", en: "Email or WhatsApp" },
  "fl-service": { fr: "Service souhaité", en: "Requested service" },
  "fl-msg": { fr: "Votre message", en: "Your message" },
  "f-btn": { fr: "Préparer mon message", en: "Prepare my message" },
  "footer-tagline": {
    fr: "Communication digitale pour boutiques de mode et accessoires à Cotonou.",
    en: "Digital communication for fashion and accessories boutiques in Cotonou.",
  },
  "footer-links-title": { fr: "Liens rapides", en: "Quick links" },
  "footer-socials-title": { fr: "Suivez-nous", en: "Follow us" },
  "footer-copy": {
    fr: "© 2026 Agence Chic Local. Tous droits réservés.",
    en: "© 2026 Agence Chic Local. All rights reserved.",
  },
  "footer-credit": {
    fr: "Plateforme corrigée par <strong>KStalker</strong>",
    en: "Platform refined by <strong>KStalker</strong>",
  },
  fl1: { fr: "Services", en: "Services" },
  fl2: { fr: "Portfolio", en: "Portfolio" },
  fl3: { fr: "Tarifs", en: "Pricing" },
  fl4: { fr: "FAQ", en: "FAQ" },
  fl5: { fr: "Contact", en: "Contact" },
};

const serviceOptions = {
  fr: [
    "Choisissez un service",
    "Réseaux sociaux (Instagram / Facebook)",
    "Contenus visuels (photos et vidéos)",
    "Publicités Meta Ads",
    "Site vitrine et SEO local",
    "Catalogue WhatsApp",
    "Pack complet Boutique Pro",
    "Je ne sais pas encore",
  ],
  en: [
    "Choose a service",
    "Social media (Instagram / Facebook)",
    "Visual content (photos and videos)",
    "Meta Ads campaigns",
    "Showcase website and local SEO",
    "WhatsApp catalogue",
    "Full Boutique Pro package",
    "I am not sure yet",
  ],
};

const inputPlaceholders = {
  "f-nom": {
    fr: "Ex : Fatou Diallo",
    en: "e.g. Fatou Diallo",
  },
  "f-boutique": {
    fr: "Nom de la boutique",
    en: "Boutique name",
  },
  "f-contact": {
    fr: "chiclocalagency@gmail.com ou +229...",
    en: "chiclocalagency@gmail.com or +229...",
  },
  "f-msg": {
    fr: "Décrivez votre boutique, vos produits et ce que vous souhaitez améliorer.",
    en: "Describe your boutique, your products, and what you want to improve.",
  },
};

const metaByLanguage = {
  fr: {
    title: "Agence Chic Local | Communication digitale pour boutiques de mode",
    description:
      "Agence Chic Local aide les boutiques de mode à Cotonou à mieux se présenter en ligne, produire du contenu plus vendeur et transformer leur visibilité en demandes réelles.",
    ogDescription:
      "Audit, contenu visuel, réseaux sociaux et accompagnement local pour boutiques de mode à Cotonou.",
  },
  en: {
    title: "Agence Chic Local | Digital communication for fashion boutiques",
    description:
      "Agence Chic Local helps fashion boutiques in Cotonou present themselves better online, create stronger selling content, and turn visibility into real enquiries.",
    ogDescription:
      "Audit, visual content, social media, and local support for fashion boutiques in Cotonou.",
  },
};

const uiText = {
  fr: {
    switchLanguage: "Basculer le site en anglais",
    navHome: "Accueil Agence Chic Local",
    footerHome: "Retour en haut",
    backToTop: "Revenir complètement en haut",
    mobileMenu: "Navigation mobile",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    successWhatsapp:
      "Votre message est prêt. Autorisez l'ouverture de WhatsApp si votre navigateur le demande.",
    successEmail:
      "WhatsApp n'est pas disponible ici. Votre application email va s'ouvrir.",
    notProvided: "Non renseigné",
    labels: {
      intro: "Bonjour Agence Chic Local,",
      name: "Nom",
      boutique: "Boutique",
      contact: "Contact",
      service: "Service",
      message: "Message",
    },
    subject: "Demande de contact",
  },
  en: {
    switchLanguage: "Switch the site to French",
    navHome: "Agence Chic Local home",
    footerHome: "Back to top",
    backToTop: "Back to the top",
    mobileMenu: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    successWhatsapp:
      "Your message is ready. Allow WhatsApp to open if your browser asks.",
    successEmail:
      "WhatsApp is not available here. Your email application will open.",
    notProvided: "Not provided",
    labels: {
      intro: "Hello Agence Chic Local,",
      name: "Name",
      boutique: "Boutique",
      contact: "Contact",
      service: "Service",
      message: "Message",
    },
    subject: "Contact request",
  },
};

const langButton = document.getElementById("langBtn");
const hamburgerButton = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");
const navLogo = document.getElementById("navLogo");
const footerLogo = document.getElementById("footerLogo");
const serviceSelect = document.getElementById("f-service");
const backToTopButton = document.getElementById("backToTop");
const whatsappLinks = Array.from(
  document.querySelectorAll(
    `a[href*="wa.me/${WHATSAPP_NUMBER}"], a[href*="api.whatsapp.com/send"], a[href*="web.whatsapp.com/send"]`,
  ),
);

const descriptionMeta = document.querySelector('meta[name="description"]');
const ogTitleMeta = document.querySelector('meta[property="og:title"]');
const ogDescriptionMeta = document.querySelector(
  'meta[property="og:description"]',
);
const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
const twitterDescriptionMeta = document.querySelector(
  'meta[name="twitter:description"]',
);

langButton?.addEventListener("click", toggleLang);
hamburgerButton?.addEventListener("click", toggleMenu);
contactForm?.addEventListener("submit", sendForm);
backToTopButton?.addEventListener("click", scrollToTop);
mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", handleKeydown);
document.addEventListener("click", handleDocumentClick);
window.addEventListener("scroll", handleScroll, { passive: true });
window.addEventListener("resize", handleResize);

applyTranslations();
updateMenuState(false);
syncWhatsAppLinks();
handleScroll();

function toggleLang() {
  lang = lang === "fr" ? "en" : "fr";
  applyTranslations();
}

function applyTranslations() {
  Object.entries(contentById).forEach(([id, value]) => {
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    const text = value[lang];

    if (text.includes("<")) {
      element.innerHTML = text;
      return;
    }

    element.textContent = text;
  });

  Object.entries(inputPlaceholders).forEach(([id, value]) => {
    const input = document.getElementById(id);

    if (input) {
      input.placeholder = value[lang];
    }
  });

  updateServiceOptions();
  updateMeta();
  updateAccessibilityLabels();
  updateLangButtonLabel();

  if (!formSuccess?.classList.contains("visible")) {
    formSuccess.textContent = uiText[lang].successWhatsapp;
  }
}

function updateServiceOptions() {
  if (!serviceSelect) {
    return;
  }

  const selectedIndex = serviceSelect.selectedIndex;

  Array.from(serviceSelect.options).forEach((option, index) => {
    option.textContent = serviceOptions[lang][index];
    option.value = index === 0 ? "" : serviceOptions[lang][index];
  });

  serviceSelect.selectedIndex = selectedIndex >= 0 ? selectedIndex : 0;
}

function updateMeta() {
  const meta = metaByLanguage[lang];

  document.documentElement.lang = lang;
  document.title = meta.title;

  descriptionMeta?.setAttribute("content", meta.description);
  ogTitleMeta?.setAttribute("content", meta.title);
  ogDescriptionMeta?.setAttribute("content", meta.ogDescription);
  twitterTitleMeta?.setAttribute("content", meta.title);
  twitterDescriptionMeta?.setAttribute("content", meta.ogDescription);
}

function updateAccessibilityLabels() {
  navLogo?.setAttribute("aria-label", uiText[lang].navHome);
  footerLogo?.setAttribute("aria-label", uiText[lang].footerHome);
  mobileMenu?.setAttribute("aria-label", uiText[lang].mobileMenu);
  backToTopButton?.setAttribute("aria-label", uiText[lang].backToTop);
  updateHamburgerLabel();
}

function updateLangButtonLabel() {
  if (!langButton) {
    return;
  }

  langButton.textContent = lang === "fr" ? "EN" : "FR";
  langButton.setAttribute("aria-label", uiText[lang].switchLanguage);
}

function updateHamburgerLabel() {
  if (!hamburgerButton || !mobileMenu) {
    return;
  }

  const isOpen = mobileMenu.classList.contains("open");
  hamburgerButton.setAttribute(
    "aria-label",
    isOpen ? uiText[lang].closeMenu : uiText[lang].openMenu,
  );
}

function sendForm(event) {
  event.preventDefault();

  const form = event.currentTarget;

  if (!form.reportValidity()) {
    return;
  }

  const nom = document.getElementById("f-nom")?.value.trim() || "";
  const boutique = document.getElementById("f-boutique")?.value.trim() || "";
  const contact = document.getElementById("f-contact")?.value.trim() || "";
  const service = serviceSelect?.value.trim() || "";
  const message = document.getElementById("f-msg")?.value.trim() || "";
  const labels = uiText[lang].labels;
  const notProvided = uiText[lang].notProvided;

  const structuredMessage = [
    labels.intro,
    "",
    `${labels.name}: ${nom || notProvided}`,
    `${labels.boutique}: ${boutique || notProvided}`,
    `${labels.contact}: ${contact || notProvided}`,
    `${labels.service}: ${service || notProvided}`,
    "",
    `${labels.message}:`,
    message || notProvided,
  ].join("\n");

  const emailSubject = encodeURIComponent(
    `${uiText[lang].subject} - ${service}`,
  );
  const emailBody = encodeURIComponent(structuredMessage);
  const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${emailSubject}&body=${emailBody}`;

  try {
    openWhatsApp(structuredMessage);
    showFormFeedback("whatsapp");
  } catch (error) {
    window.location.href = mailtoUrl;
    showFormFeedback("email");
  }

  form.reset();
  updateServiceOptions();
}

function showFormFeedback(channel) {
  if (!formSuccess) {
    return;
  }

  formSuccess.textContent =
    channel === "whatsapp"
      ? uiText[lang].successWhatsapp
      : uiText[lang].successEmail;

  formSuccess.classList.add("visible");
  window.clearTimeout(showFormFeedback.timeoutId);
  showFormFeedback.timeoutId = window.setTimeout(() => {
    formSuccess.classList.remove("visible");
    formSuccess.textContent = uiText[lang].successWhatsapp;
  }, 6000);
}

function toggleMenu() {
  if (!mobileMenu) {
    return;
  }

  updateMenuState(!mobileMenu.classList.contains("open"));
}

function closeMenu() {
  updateMenuState(false);
}

function updateMenuState(isOpen) {
  if (!mobileMenu || !hamburgerButton) {
    return;
  }

  mobileMenu.classList.toggle("open", isOpen);
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  hamburgerButton.classList.toggle("open", isOpen);
  hamburgerButton.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
  updateHamburgerLabel();
}

function handleKeydown(event) {
  if (event.key === "Escape") {
    closeMenu();
  }
}

function handleDocumentClick(event) {
  if (
    window.innerWidth > 768 ||
    !mobileMenu?.classList.contains("open") ||
    !hamburgerButton
  ) {
    return;
  }

  const target = event.target;

  if (
    target instanceof Node &&
    !mobileMenu.contains(target) &&
    !hamburgerButton.contains(target)
  ) {
    closeMenu();
  }
}

function handleResize() {
  if (window.innerWidth > 768) {
    closeMenu();
  }
}

function syncWhatsAppLinks() {
  const appUrl = getWhatsAppAppUrl();

  whatsappLinks.forEach((link) => {
    link.href = appUrl;
    link.removeAttribute("target");
    link.removeAttribute("rel");
  });
}

function buildWhatsAppQuery(message = "") {
  const params = new URLSearchParams({
    phone: WHATSAPP_NUMBER,
  });

  if (message) {
    params.set("text", message);
  }

  return params.toString();
}

function getWhatsAppAppUrl(message = "") {
  return `whatsapp://send?${buildWhatsAppQuery(message)}`;
}

function openWhatsApp(message = "") {
  window.location.href = getWhatsAppAppUrl(message);
}

function handleScroll() {
  if (!backToTopButton) {
    return;
  }

  backToTopButton.classList.toggle("visible", window.scrollY > 420);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
