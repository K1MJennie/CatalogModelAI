(() => {
  const read = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const write = (key, value) => { try { localStorage.setItem(key, value); } catch {} };
  const systemTheme = matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = read('moezza-theme') || read('catalog-theme');
  let explicitTheme = ['light', 'dark'].includes(savedTheme);
  const savedLanguage = read('moezza-language');
  let language = ['id', 'en'].includes(savedLanguage) ? savedLanguage : 'id';
  let theme = explicitTheme ? savedTheme : systemTheme.matches ? 'dark' : 'light';
  const apply = () => {
    document.documentElement.lang = language;
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#111c2d' : '#F9F8F7');
    document.querySelectorAll('[data-language-toggle]').forEach(button => {
      button.textContent = language === 'id' ? 'EN' : 'ID';
      button.lang = language === 'id' ? 'en' : 'id';
      button.setAttribute('aria-label', language === 'id' ? 'Switch to English' : 'Ganti ke bahasa Indonesia');
    });
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      button.textContent = theme === 'dark' ? (language === 'id' ? 'Terang' : 'Light') : (language === 'id' ? 'Gelap' : 'Dark');
      button.setAttribute('aria-label', language === 'id' ? `Aktifkan tema ${theme === 'dark' ? 'terang' : 'gelap'}` : `Use ${theme === 'dark' ? 'light' : 'dark'} theme`);
      button.setAttribute('aria-pressed', String(theme === 'dark'));
    });
  };
  window.moezzaPreferences = { get language() { return language; }, get theme() { return theme; } };
  apply();
  document.addEventListener('DOMContentLoaded', () => {
    apply();
    document.querySelectorAll('[data-language-toggle]').forEach(button => button.addEventListener('click', () => {
      language = language === 'id' ? 'en' : 'id';
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
    if (['id', 'en'].includes(storedLanguage)) language = storedLanguage;
    explicitTheme = ['light', 'dark'].includes(storedTheme);
    theme = explicitTheme ? storedTheme : systemTheme.matches ? 'dark' : 'light';
    apply();
    document.dispatchEvent(new Event('languagechange'));
  });
})();
