const CACHE_NAME = 'kathu-member-root-pwa-v2';

const APP_SHELL = [
  './member.html',
  './member/index.html',
  './member/beneficiary.html',
  './manifest.json',
  './pwa-icons/icon-192.png',
  './pwa-icons/icon-512.png',
  './pwa-icons/icon-maskable-512.png'
];

const MOBILE_STYLE = '\n<style id="kathu-pwa-mobile">\n*{box-sizing:border-box}\nhtml{\n  width:100%;\n  max-width:100%;\n  overflow-x:hidden;\n  -webkit-text-size-adjust:100%;\n}\nbody{\n  width:100%;\n  max-width:100%;\n  overflow-x:hidden;\n}\n\n/* ปุ่มและช่องกรอกสำหรับนิ้ว */\nbutton,\ninput,\nselect,\ntextarea{\n  max-width:100%;\n}\nbutton{\n  touch-action:manipulation;\n  -webkit-tap-highlight-color:transparent;\n}\n\n@media (max-width: 767px){\n\n  /* ===== memberexit.html / welfare.html ===== */\n  body.bg-slate-900{\n    padding:8px !important;\n    font-size:16px !important;\n  }\n\n  body.bg-slate-900 > .max-w-7xl{\n    width:100% !important;\n    max-width:100% !important;\n    min-width:0 !important;\n  }\n\n  body.bg-slate-900 h1{\n    font-size:21px !important;\n    line-height:1.35 !important;\n    margin:10px 0 14px !important;\n  }\n\n  body.bg-slate-900 .bg-slate-800,\n  body.bg-slate-900 .filter-box{\n    width:100% !important;\n    max-width:100% !important;\n    padding:12px !important;\n    border-radius:14px !important;\n    overflow:hidden;\n  }\n\n  body.bg-slate-900 form.grid{\n    grid-template-columns:1fr !important;\n    gap:10px !important;\n  }\n\n  body.bg-slate-900 .filter-grid{\n    grid-template-columns:1fr !important;\n    gap:10px !important;\n    margin-bottom:10px !important;\n  }\n\n  body.bg-slate-900 .filter-title{\n    font-size:19px !important;\n    margin-bottom:12px !important;\n  }\n\n  body.bg-slate-900 .label{\n    font-size:15px !important;\n    font-weight:700 !important;\n    margin-bottom:5px !important;\n  }\n\n  body.bg-slate-900 .input{\n    width:100% !important;\n    min-width:0 !important;\n    min-height:48px !important;\n    padding:10px 12px !important;\n    font-size:16px !important;\n    border-radius:10px !important;\n  }\n\n  body.bg-slate-900 textarea.input{\n    min-height:92px !important;\n  }\n\n  body.bg-slate-900 .btn{\n    min-height:48px !important;\n    padding:10px 14px !important;\n    font-size:16px !important;\n    font-weight:700 !important;\n  }\n\n  body.bg-slate-900 .filter-actions,\n  body.bg-slate-900 .col-span-full.flex{\n    display:grid !important;\n    grid-template-columns:1fr !important;\n    width:100% !important;\n    gap:8px !important;\n  }\n\n  body.bg-slate-900 .filter-actions .btn,\n  body.bg-slate-900 .col-span-full.flex .btn{\n    width:100% !important;\n  }\n\n  /* ตารางใช้เลื่อนเฉพาะกรอบ ไม่ทำให้ทั้งหน้าเลยขอบ */\n  body.bg-slate-900 table{\n    width:100% !important;\n    min-width:720px;\n    font-size:14px !important;\n  }\n\n  body.bg-slate-900 table th,\n  body.bg-slate-900 table td{\n    padding:10px 8px !important;\n  }\n\n  body.bg-slate-900 .bg-slate-800:has(table){\n    overflow-x:auto !important;\n    -webkit-overflow-scrolling:touch;\n  }\n\n  body.bg-slate-900 #pageInfo{\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    min-width:80px;\n    font-size:15px !important;\n  }\n\n  /* ===== adminshare.html ===== */\n  body:not(.bg-slate-900) .container{\n    width:100% !important;\n    max-width:100% !important;\n    padding:0 !important;\n  }\n\n  body:not(.bg-slate-900){\n    padding:8px !important;\n    font-size:16px;\n  }\n\n  body:not(.bg-slate-900) .card{\n    width:100% !important;\n    max-width:100% !important;\n    padding:14px !important;\n    margin-bottom:12px !important;\n    border-radius:14px !important;\n    overflow:hidden;\n  }\n\n  body:not(.bg-slate-900) h3{\n    font-size:20px !important;\n  }\n\n  body:not(.bg-slate-900) label{\n    font-size:15px !important;\n  }\n\n  body:not(.bg-slate-900) input,\n  body:not(.bg-slate-900) select{\n    min-height:48px !important;\n    padding:10px 12px !important;\n    font-size:16px !important;\n  }\n\n  body:not(.bg-slate-900) button{\n    min-height:48px;\n    font-size:16px !important;\n  }\n\n  body:not(.bg-slate-900) .row{\n    gap:10px;\n    align-items:flex-start !important;\n    font-size:15px !important;\n    overflow-wrap:anywhere;\n  }\n\n  body:not(.bg-slate-900) .row > span:last-child{\n    text-align:right;\n  }\n\n  body:not(.bg-slate-900) .daily-table{\n    min-width:620px;\n    font-size:14px !important;\n  }\n\n  body:not(.bg-slate-900) #dailyReport{\n    width:100%;\n    max-width:100%;\n    overflow-x:auto;\n    -webkit-overflow-scrolling:touch;\n  }\n\n  /* ===== stock/dashboard.html ===== */\n  .app-shell main{\n    width:100% !important;\n    max-width:100% !important;\n    padding:14px 8px 36px !important;\n  }\n\n  .app-shell .topbar{\n    padding:10px 8px !important;\n  }\n\n  .app-shell .brand-title{\n    font-size:15px !important;\n  }\n\n  .app-shell .filters{\n    grid-template-columns:1fr !important;\n    padding:10px !important;\n    gap:9px !important;\n  }\n\n  .app-shell .filter.search-filter{\n    grid-column:auto !important;\n  }\n\n  .app-shell .filter input,\n  .app-shell .filter select,\n  .app-shell .action-btn{\n    height:48px !important;\n    font-size:16px !important;\n  }\n\n  .app-shell .action-btn{\n    width:100% !important;\n  }\n\n  .app-shell .kpi-grid,\n  .app-shell .mini-grid,\n  .app-shell .chart-grid{\n    grid-template-columns:1fr !important;\n  }\n\n  .app-shell .kpi-card{\n    min-height:145px !important;\n    padding:16px !important;\n  }\n\n  .app-shell .kpi-value{\n    font-size:28px !important;\n  }\n\n  .app-shell .panel-head{\n    padding:14px 14px 0 !important;\n  }\n\n  .app-shell .panel-body{\n    padding:12px !important;\n  }\n\n  .app-shell .table-wrap{\n    width:100%;\n    max-width:100%;\n    padding:8px !important;\n    overflow-x:auto !important;\n    -webkit-overflow-scrolling:touch;\n  }\n\n  .app-shell table{\n    min-width:760px;\n    font-size:12px !important;\n  }\n\n  .app-shell .group-chart-wrap{\n    overflow-x:auto !important;\n  }\n\n  .app-shell .group-chart-box{\n    min-width:620px;\n  }\n\n  .swal2-popup{\n    width:calc(100% - 20px) !important;\n    max-width:680px !important;\n  }\n}\n\n@media (max-width: 380px){\n  body.bg-slate-900{\n    padding:6px !important;\n  }\n}\n</style>\n';

function needsMobilePatch(pathname) {
  return pathname.endsWith('/member/memberexit.html') ||
         pathname.endsWith('/member/welfare.html') ||
         pathname.endsWith('/member/adminshare.html') ||
         pathname.endsWith('/member/stock/dashboard.html');
}

function patchHtml(html) {
  let result = html;

  if (!/name=["']viewport["']/i.test(result)) {
    result = result.replace(
      /<head([^>]*)>/i,
      '<head$1><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">'
    );
  }

  if (!result.includes('id="kathu-pwa-mobile"')) {
    result = result.replace(/<\/head>/i, MOBILE_STYLE + '</head>');
  }

  return result;
}

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  if (
    url.hostname.includes('supabase.co') ||
    url.hostname.includes('esm.sh') ||
    url.hostname.includes('cdn.tailwindcss.com') ||
    url.hostname.includes('cdn.jsdelivr.net')
  ) return;

  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith((async () => {
      try {
        const networkResponse = await fetch(request);

        if (
          networkResponse &&
          networkResponse.ok &&
          url.origin === self.location.origin &&
          needsMobilePatch(url.pathname)
        ) {
          const html = await networkResponse.text();
          const patched = patchHtml(html);

          const headers = new Headers(networkResponse.headers);
          headers.set('Content-Type', 'text/html; charset=utf-8');
          headers.delete('Content-Length');

          const response = new Response(patched, {
            status: networkResponse.status,
            statusText: networkResponse.statusText,
            headers
          });

          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
          return response;
        }

        if (networkResponse && networkResponse.ok && url.origin === self.location.origin) {
          const copy = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }

        return networkResponse;
      } catch (err) {
        return (await caches.match(request)) ||
               (await caches.match('./member.html')) ||
               Response.error();
      }
    })());
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(request).then(async cached => {
        if (cached) return cached;
        const response = await fetch(request);
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      })
    );
  }
});
