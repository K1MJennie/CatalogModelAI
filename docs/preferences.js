(() => {
  const read = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const write = (key, value) => { try { localStorage.setItem(key, value); } catch {} };
  const languages = ['id', 'en', 'ja'];
  const systemTheme = matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = read('moezza-theme') || read('catalog-theme');
  let explicitTheme = ['light', 'dark'].includes(savedTheme);
  const savedLanguage = read('moezza-language');
  let language = languages.includes(savedLanguage) ? savedLanguage : 'id';
  let theme = explicitTheme ? savedTheme : systemTheme.matches ? 'dark' : 'light';
  const controls = {
    id: { language: 'Pilih bahasa', light: 'Terang', dark: 'Gelap', useLight: 'Aktifkan tema terang', useDark: 'Aktifkan tema gelap' },
    en: { language: 'Choose language', light: 'Light', dark: 'Dark', useLight: 'Use light theme', useDark: 'Use dark theme' },
    ja: { language: 'げんごを えらぶ', light: 'あかるく', dark: 'くらく', useLight: 'あかるい いろに かえる', useDark: 'くらい いろに かえる' }
  };
  const apply = () => {
    document.documentElement.lang = language;
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#111c2d' : '#F9F8F7');
    document.querySelectorAll('[data-language-select]').forEach(select => {
      select.value = language;
      select.setAttribute('aria-label', controls[language].language);
    });
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      button.textContent = controls[language][theme === 'dark' ? 'light' : 'dark'];
      button.setAttribute('aria-label', controls[language][theme === 'dark' ? 'useLight' : 'useDark']);
      button.setAttribute('aria-pressed', String(theme === 'dark'));
    });
  };
  window.moezzaPreferences = { get language() { return language; }, get theme() { return theme; } };
  apply();
  document.addEventListener('DOMContentLoaded', () => {
    apply();
    document.querySelectorAll('[data-language-select]').forEach(select => select.addEventListener('change', () => {
      if (!languages.includes(select.value)) return;
      language = select.value;
      write('moezza-language', language);
      apply();
      document.dispatchEvent(new Event('languagechange'));
    }));
    document.querySelectorAll('[data-theme-toggle]').forEach(button => button.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      explicitTheme = true;
      write('moezza-theme', theme);
      apply();
    }));
  });
  systemTheme.addEventListener('change', event => {
    if (!explicitTheme) { theme = event.matches ? 'dark' : 'light'; apply(); }
  });
  window.addEventListener('pageshow', event => {
    if (!event.persisted) return;
    const storedLanguage = read('moezza-language');
    const storedTheme = read('moezza-theme') || read('catalog-theme');
    if (languages.includes(storedLanguage)) language = storedLanguage;
    explicitTheme = ['light', 'dark'].includes(storedTheme);
    theme = explicitTheme ? storedTheme : systemTheme.matches ? 'dark' : 'light';
    apply();
    document.dispatchEvent(new Event('languagechange'));
  });
})();
