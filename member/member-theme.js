(function memberThemeBootstrap(){
  "use strict";

  const STORAGE_KEY = "kathu-member-theme";
  const LEGACY_KEY = "theme";
  const root = document.documentElement;

  const readStorage = (key) => {
    try { return localStorage.getItem(key); }
    catch (_) { return null; }
  };

  const writeStorage = (key, value) => {
    try { localStorage.setItem(key, value); }
    catch (_) { /* Storage can be unavailable in private/embedded contexts. */ }
  };

  const normalize = (value) => value === "dark" ? "dark" : "light";
  const initialTheme = normalize(readStorage(STORAGE_KEY) || readStorage(LEGACY_KEY) || "light");

  function ensureMeta(){
    let scheme = document.querySelector('meta[name="color-scheme"]');
    if(!scheme && document.head){
      scheme = document.createElement("meta");
      scheme.name = "color-scheme";
      document.head.appendChild(scheme);
    }
    if(scheme) scheme.content = "light dark";

    let color = document.querySelector('meta[name="theme-color"]');
    if(!color && document.head){
      color = document.createElement("meta");
      color.name = "theme-color";
      document.head.appendChild(color);
    }
    return color;
  }

  const themeColorMeta = ensureMeta();

  function syncCharts(mode){
    if(!window.Chart) return;
    const foreground = mode === "dark" ? "#c9ddd2" : "#68776f";
    const grid = mode === "dark" ? "#29483b" : "#edf1ef";

    try {
      window.Chart.defaults.color = foreground;
      window.Chart.defaults.borderColor = grid;

      const instances = window.Chart.instances instanceof Map
        ? Array.from(window.Chart.instances.values())
        : Object.values(window.Chart.instances || {});

      instances.forEach((chart) => {
        const scales = chart?.options?.scales || {};
        Object.values(scales).forEach((scale) => {
          scale.ticks = Object.assign({}, scale.ticks, { color: foreground });
          scale.grid = Object.assign({}, scale.grid, { color: grid });
          scale.border = Object.assign({}, scale.border, { color: grid });
        });
        if(chart?.options?.plugins?.legend?.labels){
          chart.options.plugins.legend.labels.color = foreground;
        }
        chart.update("none");
      });
    } catch (error) {
      console.warn("Theme chart refresh skipped", error);
    }
  }

  function updateButtons(mode){
    const dark = mode === "dark";
    document.querySelectorAll("[data-member-theme-toggle]").forEach((button) => {
      button.setAttribute("aria-label", dark ? "เปลี่ยนเป็นโหมดสว่าง" : "เปลี่ยนเป็นโหมดมืด");
      button.setAttribute("title", dark ? "โหมดสว่าง" : "โหมดมืด");
      button.setAttribute("aria-pressed", String(dark));
      button.innerHTML = `<span class="member-theme-toggle__icon" aria-hidden="true">${dark ? "☀" : "☾"}</span><span class="member-theme-toggle__label">${dark ? "โหมดสว่าง" : "โหมดมืด"}</span>`;
    });
  }

  function applyTheme(value, persist = true){
    const mode = normalize(value);
    root.dataset.memberTheme = mode;
    root.classList.toggle("dark", mode === "dark");
    root.style.colorScheme = mode;
    if(themeColorMeta) themeColorMeta.content = mode === "dark" ? "#061c13" : "#166534";

    if(persist){
      writeStorage(STORAGE_KEY, mode);
      writeStorage(LEGACY_KEY, mode);
    }

    updateButtons(mode);
    syncCharts(mode);
    window.dispatchEvent(new CustomEvent("memberthemechange", { detail: { theme: mode } }));
    return mode;
  }

  function toggleTheme(){
    return applyTheme(root.dataset.memberTheme === "dark" ? "light" : "dark");
  }

  function bindToggle(){
    let buttons = Array.from(document.querySelectorAll("[data-member-theme-toggle]"));
    const legacyButton = document.querySelector('button[onclick*="toggleDark"]');

    if(legacyButton && !buttons.includes(legacyButton)){
      legacyButton.removeAttribute("onclick");
      legacyButton.setAttribute("data-member-theme-toggle", "");
      buttons.push(legacyButton);
    }

    if(!buttons.length){
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("data-member-theme-toggle", "");
      document.body.appendChild(button);
      buttons = [button];
    }

    buttons.forEach((button) => {
      button.type = "button";
      button.classList.add("member-theme-toggle");
      if(button.dataset.memberThemeBound !== "true"){
        button.dataset.memberThemeBound = "true";
        button.addEventListener("click", toggleTheme);
      }
    });

    applyTheme(root.dataset.memberTheme || initialTheme, false);
  }

  root.dataset.memberTheme = initialTheme;
  root.classList.toggle("dark", initialTheme === "dark");
  root.style.colorScheme = initialTheme;
  writeStorage(STORAGE_KEY, initialTheme);
  writeStorage(LEGACY_KEY, initialTheme);
  if(themeColorMeta) themeColorMeta.content = initialTheme === "dark" ? "#061c13" : "#166534";

  window.MemberTheme = Object.freeze({
    get: () => normalize(root.dataset.memberTheme),
    set: (mode) => applyTheme(mode),
    toggle: toggleTheme
  });

  window.addEventListener("storage", (event) => {
    if(event.key === STORAGE_KEY && event.newValue){
      applyTheme(event.newValue, false);
    }
  });

  window.addEventListener("pageshow", () => {
    applyTheme(readStorage(STORAGE_KEY) || initialTheme, false);
  });

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", bindToggle, { once: true });
  }else{
    bindToggle();
  }
})();
