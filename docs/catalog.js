const catalogWords = {
  id: { skip: 'Lewati ke konten', back: 'Kembali ke Moezza', catalog: 'Katalog model', intro: 'Model terbuka dari Google, disusun menurut generasi dan ukuran.', search: 'Cari nama atau ukuran', generation: 'Generasi', all: 'Semua generasi', notice: 'Berkas tanda tangan katalog masih placeholder dan belum diverifikasi.', reference: 'Rincian teknis:', documentation: 'Dokumentasi Gemma', official: 'Dokumentasi resmi', version: 'Versi katalog', loading: 'Memuat data model…', shown: 'model ditampilkan', planned: 'Direncanakan', empty: 'Belum ada data model untuk generasi ini.', noMatch: 'Tidak ada model yang cocok dengan pencarian ini.', failed: 'Data model gagal dimuat.', recovery: 'Periksa koneksi dan buka melalui server lokal atau GitHub Pages.', retry: 'Coba lagi', modelUnit: 'model', modelName: 'Gemma' },
  en: { skip: 'Skip to content', back: 'Back to Moezza', catalog: 'Model catalog', intro: 'Open models from Google, organized by generation and size.', search: 'Search by name or size', generation: 'Generation', all: 'All generations', notice: 'Catalog signature files are placeholders and have not been verified.', reference: 'Technical details:', documentation: 'Gemma documentation', official: 'Official documentation', version: 'Catalog version', loading: 'Loading models…', shown: 'models shown', planned: 'Planned', empty: 'No model data for this generation yet.', noMatch: 'No models match this search.', failed: 'Could not load model data.', recovery: 'Check your connection and open this page through a local server or GitHub Pages.', retry: 'Try again', modelUnit: 'models', modelName: 'Gemma' },
  ja: { skip: 'ほんぶんへ', back: 'もえっつぁへ もどる', catalog: 'もでるいちらん', intro: 'ぐうぐるの こうかいもでるを、せだいと おおきさで ならべています。', search: 'なまえか おおきさで さがす', generation: 'せだい', all: 'すべての せだい', notice: 'いちらんの しょめいふぁいるは まだ かくにんされていません。', reference: 'くわしい しよう:', documentation: 'じぇまの せつめい', official: 'こうしきの せつめい', version: 'いちらんの ばんごう', loading: 'もでるを よみこんでいます…', shown: 'けん ひょうじ', planned: 'よてい', empty: 'この せだいの もでるは まだ ありません。', noMatch: 'あてはまる もでるが ありません。', failed: 'もでるを よみこめませんでした。', recovery: 'つながりを たしかめて、さあばあか こうかいぺえじから ひらいてください。', retry: 'もういちど', modelUnit: 'もでる', modelName: 'じぇま' }
};
const catalogNode = document.querySelector('#catalog');
const statusNode = document.querySelector('#catalog-status');
const versionNode = document.querySelector('#catalog-version');
const searchNode = document.querySelector('#search');
const filterNode = document.querySelector('#generation-filter');
const word = key => catalogWords[window.moezzaPreferences.language][key];
let generations = [];
let version = '';
let loadState = 'loading';
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function translatedDescription(text) {
  const lang = window.moezzaPreferences.language;
  if (lang === 'id') return text;
  if (lang === 'ja') return text
    .replace(/Teks, gambar, dan audio/g, 'ぶんしょう、がぞう、おんせい')
    .replace(/Teks dan gambar|teks dan gambar/g, 'ぶんしょうと がぞう')
    .replace(/Teks/g, 'ぶんしょう')
    .replace(/MoE/g, 'せんもんかの しくみ')
    .replace(/konteks/g, 'ぶんみゃく')
    .replace(/efektif/g, 'ゆうこう')
    .replace(/total/g, 'ぜんたい')
    .replace(/aktif/g, 'かどう');
  return text.replace(/Teks, gambar, dan audio/g, 'Text, image, and audio').replace(/Teks dan gambar/g, 'Text and image').replace(/teks dan gambar/g, 'text and image').replace(/Teks/g, 'Text').replace(/konteks/g, 'context').replace(/efektif/g, 'effective').replace(/aktif/g, 'active');
}
function render() {
  document.querySelectorAll('[data-text]').forEach(node => { node.textContent = word(node.dataset.text); });
  document.title = ({ id: 'Model Gemma | Moezza', en: 'Gemma models | Moezza', ja: 'じぇまの もでる | もえっつぁ' })[window.moezzaPreferences.language];
  document.querySelector('meta[name="description"]').content = word('intro');
  versionNode.textContent = version ? `${word('version')} ${version}` : '';
  catalogNode.replaceChildren();
  if (loadState === 'loading') { statusNode.textContent = word('loading'); return; }
  if (loadState === 'failed') {
    statusNode.textContent = word('failed');
    const retry = element('button', 'button primary', word('retry'));
    retry.type = 'button';
    retry.addEventListener('click', loadCatalog);
    catalogNode.append(element('p', 'empty', word('recovery')), retry);
    return;
  }
  const query = searchNode.value.trim().toLocaleLowerCase();
  let visibleModels = 0;
  for (const generation of generations) {
    if (filterNode.value !== 'all' && filterNode.value !== generation.id) continue;
    const matches = generation.models.filter(model => `${model.name} ${model.parameters} ${model.description} ${translatedDescription(model.description)} ${translatedDescription(model.parameters)}`.toLocaleLowerCase().includes(query));
    if (query && !matches.length) continue;
    const section = element('section', 'generation');
    section.setAttribute('aria-labelledby', `heading-${generation.id}`);
    const heading = element('header', 'generation-heading');
    const title = element('h2', '', window.moezzaPreferences.language === 'ja' ? generation.name.replace('Gemma', 'じぇま') : generation.name);
    title.id = `heading-${generation.id}`;
    heading.append(title, element('p', '', generation.status === 'future' ? word('planned') : `${matches.length} ${word('modelUnit')}`));
    section.append(heading);
    if (!matches.length) section.append(element('p', 'empty', word('empty')));
    for (const model of matches) {
      const row = element('article', 'model-row');
      const link = element('a', 'model-link', word('official'));
      link.href = model.source;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', `${word('official')} ${model.name}`);
      row.append(element('h3', 'model-name', model.name), element('p', 'model-summary', translatedDescription(model.description)), element('p', 'model-parameters', translatedDescription(model.parameters)), link);
      section.append(row);
      visibleModels++;
    }
    catalogNode.append(section);
  }
  if (!catalogNode.childElementCount) catalogNode.append(element('p', 'empty', word('noMatch')));
  statusNode.textContent = `${visibleModels} ${word('shown')}`;
}
async function loadCatalog() {
  loadState = 'loading';
  render();
  try {
    const root = new URL('./catalog/v1/', location.href);
    const response = await fetch(new URL('index.json', root));
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const index = await response.json();
    generations = await Promise.all(index.generations.map(async entry => {
      const response = await fetch(new URL(entry.file, root));
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return { ...entry, ...await response.json() };
    }));
    filterNode.querySelectorAll('option:not([value="all"])').forEach(option => option.remove());
    generations.forEach(generation => {
      const option = element('option', '', generation.name);
      option.value = generation.id;
      filterNode.append(option);
    });
    version = index.version;
    loadState = 'ready';
  } catch { loadState = 'failed'; }
  render();
}
searchNode.addEventListener('input', render);
filterNode.addEventListener('change', render);
document.addEventListener('languagechange', render);
loadCatalog();
