const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('#main-nav');
const navLinks = [...navigation.querySelectorAll('a')];

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
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header-inner')) closeMenu();
});
window.matchMedia('(min-width: 761px)').addEventListener('change', () => closeMenu());

const sections = [...document.querySelectorAll('.section-anchor')];
const sectionObserver = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach(link => {
    if (link.hash === `#${visible.target.id}`) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
sections.forEach(section => sectionObserver.observe(section));

const conversations = {
  ideas: {
    question: 'Aku mau mulai menulis, tapi bingung topiknya.',
    paragraphs: ['Coba mulai dari sesuatu yang dekat: hal kecil yang kamu pelajari minggu ini.', 'Tulis apa yang terjadi, apa yang bikin penasaran, dan apa yang ingin kamu coba berikutnya. Tidak perlu langsung sempurna.']
  },
  learn: {
    question: 'Apa maksudnya AI on-device? Jelaskan dengan sederhana, ya.',
    paragraphs: ['Bayangkan kamu punya buku referensi di dalam ponsel. Kamu bisa membukanya tanpa harus pergi ke perpustakaan.', 'AI on-device juga menjalankan model di perangkatmu. Setelah model siap, ponsel dapat memproses pertanyaan secara lokal. Kemampuannya tetap bergantung pada model dan perangkat yang dipakai.']
  },
  write: {
    question: 'Bantu buat pesan untuk mengajak teman mengerjakan proyek kecil.',
    paragraphs: ['Kamu bisa mulai dengan pesan yang santai dan jelas seperti ini:', '“Hai! Aku punya ide proyek kecil dan kepikiran buat mengerjakannya bareng kamu. Minggu ini ada waktu buat ngobrol sebentar? Aku ingin dengar pendapatmu dulu.”']
  }
};
const demoButtons = [...document.querySelectorAll('[data-demo]')];
const demoContent = document.querySelector('#demo-content');
demoButtons.forEach(button => button.addEventListener('click', () => {
  const conversation = conversations[button.dataset.demo];
  demoButtons.forEach(item => {
    const selected = item === button;
    item.classList.toggle('selected', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  const question = document.createElement('p');
  question.className = 'demo-question';
  question.textContent = conversation.question;
  const response = document.createElement('div');
  response.className = 'demo-response';
  const label = document.createElement('span');
  label.className = 'reply-label';
  label.textContent = 'Moezza';
  response.append(label);
  conversation.paragraphs.forEach(text => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    response.append(paragraph);
  });
  demoContent.replaceChildren(question, response);
}));

const form = document.querySelector('#contact-form');
const dialog = document.querySelector('#message-dialog');
const downloadLink = document.querySelector('#download-message');
const status = document.querySelector('#form-status');
let draftUrl;

form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name')).trim();
  const message = String(data.get('message')).trim();
  if (!name || message.length < 10) {
    status.textContent = !name ? 'Isi nama terlebih dahulu.' : 'Tulis pesan minimal 10 karakter, selain spasi.';
    form.elements[!name ? 'name' : 'message'].focus();
    return;
  }
  const content = `Draf pesan untuk Moezza\nBelum dikirim\n\nNama: ${name}\nEmail: ${String(data.get('email')).trim()}\nTopik: ${data.get('interest')}\n\n${message}\n`;
  try {
    if (draftUrl) URL.revokeObjectURL(draftUrl);
    draftUrl = URL.createObjectURL(new Blob([content], { type: 'text/plain;charset=utf-8' }));
    downloadLink.href = draftUrl;
    document.querySelector('#message-preview').textContent = content;
    dialog.showModal();
    status.textContent = 'Draf siap diunduh. Pesan belum dikirim ke tim Moezza.';
  } catch {
    status.textContent = 'Draf belum bisa disiapkan. Salin pesanmu dari formulir atau coba lagi.';
  }
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close', () => form.querySelector('button[type="submit"]').focus());
window.addEventListener('pagehide', () => { if (draftUrl) URL.revokeObjectURL(draftUrl); });
document.querySelector('#year').textContent = String(new Date().getFullYear());
