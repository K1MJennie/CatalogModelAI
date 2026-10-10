const english = {
  skip: 'Skip to content', navigation: 'Main navigation', footerNavigation: 'Footer navigation', menu: 'Menu', home: 'Home', product: 'Product', technology: 'Technology', about: 'About', contact: 'Contact',
  heroEyebrow: 'Moezza / A thinking companion for Android', heroLine: 'Make room', heroEnd: 'for', heroEm: 'your thoughts.',
  heroDescription: 'From unfinished ideas to everyday curiosity. Start a conversation with AI, right on your phone.', heroAction: 'See Moezza in conversation', heroNote: 'Android · Gemma models · On-device AI', hello: 'hello.', heroTasks: 'Ways Moezza can help', taskWrite: 'Write', taskSummarize: 'Summarize', taskImage: 'Ask about an image', heroImageAlt: 'Moezza home screen on a phone', heroImageCaption: 'Moezza app screen from the images you provided.',
  phoneSub: 'Room for your story.', phoneGreeting: 'What’s on your mind?', phoneQuestion: 'So many ideas. Where do I even start?', phoneAnswer: 'One at a time. Which idea makes you most curious?', phonePlaceholder: 'Share a thought...', phoneModel: 'Gemma / on your device', concept: 'App concept illustration', heroFooter: 'Small thoughts. New possibilities.',
  productEyebrow: '01 / Moezza features', productTitle: 'One place,', productEm: 'many ways to help.', productDescription: 'Watch Moezza in action as the app screens slide by.', featureCarouselLabel: 'Moezza app features', previousFeature: 'Previous feature', nextFeature: 'Next feature',
  technologyEyebrow: '02 / Behind the conversation', techTitle: 'Close to you.', techEm: 'On your device.', techDescription: 'Moezza runs Gemma models on your phone. Once a compatible model is downloaded, local conversations can work without a connection.', deviceBoundary: 'Inside your phone', flowMessage: 'Help me develop this idea.', localModel: 'Local AI model', flowAnswer: 'An idea becomes a conversation.', techCaption: 'Local processing illustration. Compatibility and speed depend on the model and device.',
  catalogEyebrow: '03 / Model catalog', catalogTitle: 'Meet the models.', catalogEm: 'Find the right fit.', catalogIntro: 'A few Gemma models, from smaller options for mobile devices to larger models for more capable hardware.',
  modelSize: 'Parameters', modelContext: 'Context', context128: '128K tokens', context256: '256K tokens', context32: '32K tokens', modelSource: 'Official specifications', model4e4b: 'A smaller on-device model with text, image, and audio input.', model4e4bSize: '4.5B effective', model4e2b: 'A more compact variant with text, image, and audio input.', model4e2bSize: '2.3B effective', model412b: 'A larger variant for text, image, and audio.', model3ne4b: 'Designed for everyday devices with text, image, and audio input.', model3ne4bSize: '4B effective', model3ne2b: 'A lighter mobile variant with text, image, and audio input.', model3ne2bSize: '2B effective', model34b: 'A text and image model with a long context window.', catalogNote: 'This is a summary of the Gemma model family, not a list of models guaranteed to be available in Moezza. Compatibility depends on the device and app version.',
  aboutEyebrow: '04 / The Moezza story', aboutTitle: 'It started as an idea.', aboutEm: 'Now it has a place to talk.', aboutDescription: 'From the first question in August to the page you are seeing today.', aboutAction: 'Share your perspective', timelineLabel: 'Moezza development timeline',
  storyDate1: '5 Aug 2026', storyTitle1: 'The first idea', storyText1: 'Moezza began with an idea for a thinking companion you could carry on your phone.',
  storyDate2: '17 Aug 2026', storyTitle2: 'Designing the app', storyText2: 'The conversation flow and app design began to take shape.',
  storyDate3: '3 Sep 2026', storyTitle3: 'Building begins', storyText3: 'App development began.',
  storyDate4: '16 Sep 2026', storyTitle4: 'Development continues', storyText4: 'Development continued as the app screens were refined.',
  storyDate5: '28 Sep 2026', storyTitle5: 'Testing the app', storyText5: 'The app flow and screens were tested.',
  storyDate6: '10 Oct 2026', storyTitle6: 'The Moezza website', storyText6: 'You can now explore Moezza’s story and example conversations here.',
  contactEyebrow: '05 / Room for feedback', contactTitle: 'From you,', contactEm: 'to Moezza.', contactDescription: 'An idea or a suggestion? Put it into words here.', contactNotice: 'Our contact channels are not active yet. This form creates a downloadable draft; it does not send a message.', name: 'Name', email: 'Email', topic: 'Topic', feedback: 'Product feedback', collaboration: 'Collaboration', introduction: 'Getting to know Moezza', message: 'Message', messagePlaceholder: 'Write your idea or question (at least 10 characters)', draftLocal: 'Created on your device.', prepareDraft: 'Prepare draft',
  footerDescription: 'Room for your thoughts.', catalog: 'Model catalog', contactExamples: 'Example contacts · not active', backTop: 'Back to top', draftReady: 'Your draft is ready.', closeDraft: 'Close draft', draftDisclaimer: 'Your message has not been sent. Download a copy to keep.', downloadDraft: 'Download .txt draft'
};
const japanese = window.moezzaJapanese.strings;
const indonesian = {};
for (const [attribute, property] of [['data-i18n', 'textContent'], ['data-i18n-aria', 'aria-label'], ['data-i18n-placeholder', 'placeholder'], ['data-i18n-alt', 'alt']]) {
  document.querySelectorAll(`[${attribute}]`).forEach(node => { indonesian[node.getAttribute(attribute)] = property === 'textContent' ? node.textContent : node.getAttribute(property); });
}
const language = () => window.moezzaPreferences.language;
const t = key => ({ id: indonesian, en: english, ja: japanese })[language()][key];
const messages = {
  id: { nameError: 'Isi nama terlebih dahulu.', messageError: 'Tulis pesan minimal 10 karakter, selain spasi.', ready: 'Draf siap diunduh. Pesan belum dikirim.', failed: 'Draf belum bisa disiapkan. Salin pesan dari formulir atau coba lagi.', draftTitle: 'Draf pesan untuk Moezza', notSent: 'Belum dikirim' },
  en: { nameError: 'Please enter your name.', messageError: 'Write at least 10 characters, excluding surrounding spaces.', ready: 'Your draft is ready to download. It has not been sent.', failed: 'Could not prepare the draft. Copy your message from the form or try again.', draftTitle: 'Message draft for Moezza', notSent: 'Not sent' }
};
messages.ja = window.moezzaJapanese.messages;
const features = [
  {
    image: 'chat-ideas.webp',
    id: { kind: 'Contoh chat', title: 'Cari ide untuk tugas dan proyek', description: 'Dari pertanyaan singkat, Moezza membantu menyusun pilihan ide yang bisa mulai kamu kerjakan.', alt: 'Contoh chat ide proyek AI di Moezza' },
    en: { kind: 'Chat example', title: 'Find ideas for your next project', description: 'Start with a short question and explore project ideas you can actually work on.', alt: 'AI project ideas chat in Moezza' }
  },
  {
    image: 'chat-draft.webp',
    id: { kind: 'Contoh chat', title: 'Buat draf dengan nada yang pas', description: 'Minta bantuan menyusun pesan atau email, lalu sesuaikan supaya tetap terdengar seperti kamu.', alt: 'Contoh draf email tindak lanjut dalam chat Moezza' },
    en: { kind: 'Chat example', title: 'Write a draft in the right tone', description: 'Draft a message or email, then adjust it until it sounds like you.', alt: 'Follow-up email draft chat in Moezza' }
  },
  {
    image: 'chat-pdf.webp',
    id: { kind: 'Contoh chat', title: 'Tanyakan isi PDF', description: 'Bawa dokumen ke percakapan untuk meminta ringkasan atau mencari poin yang paling penting.', alt: 'Contoh ringkasan PDF dalam chat Moezza' },
    en: { kind: 'Chat example', title: 'Ask about a PDF', description: 'Bring a document into the conversation and ask for a summary or the points that matter.', alt: 'PDF summary chat in Moezza' }
  },
  {
    image: 'chat-image.webp',
    id: { kind: 'Contoh chat', title: 'Tanya tentang gambar', description: 'Lampirkan foto dan ajukan pertanyaan tentang hal yang terlihat di dalamnya.', alt: 'Contoh tanya gambar Kota Bima dalam chat Moezza' },
    en: { kind: 'Chat example', title: 'Ask about an image', description: 'Attach a photo and ask about what you can see in it.', alt: 'Image question about Kota Bima in Moezza' }
  },
  {
    image: 'model-parameters.webp',
    id: { kind: 'Personalisasi', title: 'Atur karakter jawaban AI', description: 'Sesuaikan system prompt dan parameter seperti temperature, Top P, serta panjang respons.', alt: 'Layar parameter dan system prompt model AI di Moezza' },
    en: { kind: 'Personalization', title: 'Shape how the AI responds', description: 'Adjust the system prompt and parameters such as temperature, Top P, and response length.', alt: 'AI model parameters and system prompt screen in Moezza' }
  },
  {
    image: 'model-library.webp',
    id: { kind: 'Kelola model', title: 'Pilih model untuk perangkatmu', description: 'Lihat model yang sudah terunduh, telusuri pilihan lain, dan buka pengaturan tiap model.', alt: 'Daftar model AI yang tersedia dan terunduh di Moezza' },
    en: { kind: 'Model management', title: 'Choose a model for your device', description: 'See downloaded models, browse other options, and open each model’s settings.', alt: 'Available and downloaded AI model list in Moezza' }
  },
  {
    image: 'chat-history.webp',
    id: { kind: 'Riwayat', title: 'Temukan lagi obrolanmu', description: 'Riwayat mengelompokkan percakapan sehingga draf, dokumen, dan ide lebih mudah dicari kembali.', alt: 'Daftar riwayat percakapan Moezza' },
    en: { kind: 'History', title: 'Return to a conversation', description: 'Find earlier drafts, documents, and ideas through search and topic filters.', alt: 'Moezza conversation history screen' }
  },
  {
    image: 'app-home.webp',
    id: { kind: 'Beranda', title: 'Mulai dari satu pertanyaan', description: 'Beranda menyiapkan jalan pintas untuk menulis, meringkas, mencari ide, dan bertanya tentang file.', alt: 'Tampilan beranda aplikasi Moezza' },
    en: { kind: 'Home', title: 'Start with a question', description: 'Home gives you shortcuts for writing, summarizing, finding ideas, and asking about files.', alt: 'Moezza app home screen' }
  },
  {
    image: 'app-settings.webp',
    id: { kind: 'Pengaturan', title: 'Semua pengaturan dalam jangkauan', description: 'Atur bahasa, tema, privasi, dan masuk ke menu kelola model dari satu tempat.', alt: 'Menu pengaturan aplikasi Moezza' },
    en: { kind: 'Settings', title: 'Keep settings close at hand', description: 'Adjust language, theme, privacy, and open model management from one place.', alt: 'Moezza app settings screen' }
  }
];
features.forEach((feature, index) => { feature.ja = window.moezzaJapanese.features[index]; });
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#main-nav');
const navLinks = [...navigation.querySelectorAll('a')];
const header = document.querySelector('.site-header');
const sections = [...document.querySelectorAll('.section-anchor')];
const featureCarousel = document.querySelector('.feature-carousel');
const featureViewport = document.querySelector('.feature-viewport');
const featureTrack = document.querySelector('#feature-track');
const featureCaption = document.querySelector('.feature-caption');
const featureReducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const form = document.querySelector('#contact-form');
const dialog = document.querySelector('#message-dialog');
const status = document.querySelector('#form-status');
const downloadLink = document.querySelector('#download-message');
let selectedFeature = 0;
let movingFeature = false;
let moveDirection = 0;
let featureTransitionTimer;
let featureRotationTimer;
let featureVisible = false;
let featureHovered = false;
let featureTouching = false;
let manualPauseUntil = 0;
let statusKey = '';
let draftUrl;

function closeMenu(restoreFocus = false) {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  if (restoreFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
});
navLinks.forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('open')) closeMenu(true); });
document.addEventListener('click', event => { if (!event.target.closest('.header-inner')) closeMenu(); });
matchMedia('(min-width: 900px)').addEventListener('change', () => closeMenu());
new ResizeObserver(() => document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`)).observe(header);
let scrollPending = false;
function updateNavigation() {
  const at = header.getBoundingClientRect().height + innerHeight * .25;
  const active = sections.filter(section => section.getBoundingClientRect().top <= at).at(-1) || sections[0];
  navLinks.forEach(link => {
    if (link.hash === `#${active.id}`) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  scrollPending = false;
}
window.addEventListener('scroll', () => {
  if (!scrollPending) { scrollPending = true; requestAnimationFrame(updateNavigation); }
}, { passive: true });

function renderFeatureSlides() {
  const fragment = document.createDocumentFragment();
  for (let offset = -2; offset <= 2; offset++) {
    const index = (selectedFeature + offset + features.length) % features.length;
    const content = features[index][language()];
    const slide = document.createElement('figure');
    slide.className = 'carousel-slide' + (offset === 0 ? ' is-active' : '');
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-roledescription', 'slide');
    slide.setAttribute('aria-label', (index + 1) + ' / ' + features.length + ': ' + content.title);
    if (offset !== 0) slide.setAttribute('aria-hidden', 'true');
    const image = document.createElement('img');
    image.src = './images/' + features[index].image;
    image.width = 738;
    image.height = 1475;
    image.alt = offset === 0 ? content.alt : '';
    image.loading = Math.abs(offset) <= 1 ? 'eager' : 'lazy';
    slide.append(image);
    fragment.append(slide);
  }
  featureTrack.replaceChildren(fragment);
}
function positionFeatureTrack(offset = 0, animate = false) {
  const slide = featureTrack.firstElementChild;
  if (!slide) return;
  const gap = parseFloat(getComputedStyle(featureTrack).columnGap) || 0;
  const width = slide.offsetWidth;
  const x = featureViewport.clientWidth / 2 - (width / 2 + (2 + offset) * (width + gap));
  featureTrack.style.transition = animate && !featureReducedMotion.matches ? 'transform 650ms cubic-bezier(.22,.8,.25,1)' : 'none';
  featureTrack.style.transform = 'translate3d(' + x + 'px,0,0)';
}
function renderFeatureCaption() {
  const content = features[selectedFeature][language()];
  document.querySelector('#feature-kind').textContent = content.kind;
  document.querySelector('#feature-title').textContent = content.title;
  document.querySelector('#feature-description').textContent = content.description;
}
function finishFeatureMove() {
  if (!movingFeature) return;
  clearTimeout(featureTransitionTimer);
  selectedFeature = (selectedFeature + moveDirection + features.length) % features.length;
  movingFeature = false;
  renderFeatureSlides();
  positionFeatureTrack();
  renderFeatureCaption();
}
function stopFeatureRotation() {
  if (featureRotationTimer) clearInterval(featureRotationTimer);
  featureRotationTimer = undefined;
}
function syncFeatureRotation() {
  const focused = featureCarousel.contains(document.activeElement);
  const canRotate = featureVisible && !document.hidden && !featureReducedMotion.matches && !featureHovered && !featureTouching && !focused && Date.now() >= manualPauseUntil;
  if (!canRotate) { stopFeatureRotation(); return; }
  if (!featureRotationTimer) featureRotationTimer = setInterval(() => moveFeature(1), 6000);
}
function moveFeature(direction, manual = false) {
  if (movingFeature) return;
  if (manual) {
    manualPauseUntil = Date.now() + 8000;
    featureCaption.setAttribute('aria-live', 'polite');
    stopFeatureRotation();
    setTimeout(syncFeatureRotation, 8000);
  } else {
    featureCaption.setAttribute('aria-live', 'off');
  }
  movingFeature = true;
  moveDirection = direction;
  featureTrack.children[2].classList.remove('is-active');
  featureTrack.children[2 + direction].classList.add('is-active');
  if (featureReducedMotion.matches) { finishFeatureMove(); return; }
  requestAnimationFrame(() => positionFeatureTrack(direction, true));
  featureTransitionTimer = setTimeout(finishFeatureMove, 750);
}
featureTrack.addEventListener('transitionend', event => {
  if (event.target === featureTrack && event.propertyName === 'transform') finishFeatureMove();
});
document.querySelector('#feature-prev').addEventListener('click', () => moveFeature(-1, true));
document.querySelector('#feature-next').addEventListener('click', () => moveFeature(1, true));
featureCarousel.addEventListener('keydown', event => {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
  event.preventDefault();
  moveFeature(event.key === 'ArrowRight' ? 1 : -1, true);
});
for (const area of [featureCarousel, featureCaption]) {
  area.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') { featureHovered = true; syncFeatureRotation(); } });
  area.addEventListener('pointerleave', event => { if (event.pointerType === 'mouse') { featureHovered = false; syncFeatureRotation(); } });
}
featureCarousel.addEventListener('focusin', syncFeatureRotation);
featureCarousel.addEventListener('focusout', () => setTimeout(syncFeatureRotation, 0));
document.addEventListener('visibilitychange', syncFeatureRotation);
featureReducedMotion.addEventListener('change', event => { if (event.matches) finishFeatureMove(); syncFeatureRotation(); });
let featureTouchStart;
featureViewport.addEventListener('touchstart', event => {
  featureTouchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
  featureTouching = true;
  syncFeatureRotation();
}, { passive: true });
featureViewport.addEventListener('touchend', event => {
  if (featureTouchStart) {
    const dx = event.changedTouches[0].clientX - featureTouchStart.x;
    const dy = event.changedTouches[0].clientY - featureTouchStart.y;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.2) moveFeature(dx < 0 ? 1 : -1, true);
  }
  featureTouchStart = undefined;
  featureTouching = false;
  syncFeatureRotation();
}, { passive: true });
featureViewport.addEventListener('touchcancel', () => { featureTouchStart = undefined; featureTouching = false; syncFeatureRotation(); }, { passive: true });
new ResizeObserver(() => positionFeatureTrack()).observe(featureViewport);
new IntersectionObserver(entries => {
  featureVisible = entries[0].isIntersecting && entries[0].intersectionRatio > .15;
  syncFeatureRotation();
}, { threshold: [.15, .5] }).observe(featureCarousel);
function translate() {
  document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = t(node.dataset.i18n); });
  document.querySelectorAll('[data-i18n-aria]').forEach(node => { node.setAttribute('aria-label', t(node.dataset.i18nAria)); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(node => { node.setAttribute('placeholder', t(node.dataset.i18nPlaceholder)); });
  document.querySelectorAll('[data-i18n-alt]').forEach(node => { node.setAttribute('alt', t(node.dataset.i18nAlt)); });
  document.title = ({ id: 'Moezza | Ruang untuk pikiranmu', en: 'Moezza | Room for your thoughts', ja: 'もえっつぁ | かんがえる ための ばしょ' })[language()];
  document.querySelector('meta[name="description"]').content = t('heroDescription');
  status.textContent = statusKey ? messages[language()][statusKey] : '';
  if (movingFeature) finishFeatureMove();
  renderFeatureSlides();
  positionFeatureTrack();
  renderFeatureCaption();
}
document.addEventListener('languagechange', translate);
translate();
updateNavigation();

function setStatus(key) { statusKey = key; status.textContent = messages[language()][key]; }
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name')).trim();
  const message = String(data.get('message')).trim();
  if (!name || message.length < 10) {
    setStatus(!name ? 'nameError' : 'messageError');
    form.elements[!name ? 'name' : 'message'].focus();
    return;
  }
  const words = messages[language()];
  const content = `${words.draftTitle}\n${words.notSent}\n\n${t('name')}: ${name}\n${t('email')}: ${String(data.get('email')).trim()}\n${t('topic')}: ${t(data.get('interest'))}\n\n${message}\n`;
  try {
    if (draftUrl) URL.revokeObjectURL(draftUrl);
    draftUrl = URL.createObjectURL(new Blob([content], { type: 'text/plain;charset=utf-8' }));
    downloadLink.href = draftUrl;
    downloadLink.download = ({ id: 'pesan-untuk-moezza.txt', en: 'message-for-moezza.txt', ja: 'moezza-ja.txt' })[language()];
    document.querySelector('#message-preview').textContent = content;
    dialog.showModal();
    setStatus('ready');
  } catch { setStatus('failed'); }
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => form.querySelector('button[type="submit"]').focus());
window.addEventListener('pagehide', () => { if (draftUrl) URL.revokeObjectURL(draftUrl); });
window.addEventListener('pageshow', event => { if (event.persisted && dialog.open) dialog.close(); });
document.querySelector('#year').textContent = String(new Date().getFullYear());

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const reveals = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    reveals.unobserve(entry.target);
    if (!reducedMotion.matches) entry.target.animate([{ opacity: .35, transform: 'translateY(14px)' }, { opacity: 1, transform: 'none' }], { duration: 480, easing: 'cubic-bezier(.2,.65,.3,1)' });
  });
}, { threshold: .15 });
document.querySelectorAll('.conversation-demo, .tech-visual').forEach(node => reveals.observe(node));
reducedMotion.addEventListener('change', event => { if (event.matches) document.getAnimations().forEach(animation => animation.cancel()); });
