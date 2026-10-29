/* One list of case studies, used by the IDEA page and the Case Studies page.
   status "live" links to its page; "soon" shows as coming soon. */
window.SUBTITLE_CASES = [
  { id: 'idea', name: 'IDEA', mark: 'IDEA', tags: ['Rebranding', 'Website Build', 'Event Experience'],
    line: 'Helping a trusted name grow into its mission.', href: 'index.html', status: 'live',
    img: 'assets/event-hall.jpg' },
  { id: 'sxsw', name: 'SXSW London', mark: 'SXSW<br>London', tags: ['Website Build', 'Maintenance', 'Roadmap'],
    line: 'Six days, hundreds of sessions, one clear way in.', href: 'sxsw-london.html', status: 'live',
    bg: "#2a2a8a url('https://images.ctfassets.net/ncjvo7rlyfez/2CY4vYYvLFQGVvR98JvkIR/49cd430bea860e92611d6e9559716204/SXSW_London__3_.png') right top/auto 175% no-repeat" },
  { id: 'sportico', name: 'Sportico World Summit', mark: 'Sportico<br>World Summit', tags: [], status: 'soon', bg: '#140700' },
  { id: 'fifa', name: 'FIFA World Cup Qatar 2022', mark: 'FIFA World Cup<br>Qatar 2022', tags: [], status: 'soon', bg: '#5B1F2A' },
  { id: 'fanatics', name: 'Fanatics', mark: 'Fanatics', tags: [], status: 'soon', bg: '#1F2B44' },
  { id: 'melo', name: 'House of Melo', mark: 'House<br>of Melo', tags: [], status: 'soon', bg: '#C9C4BA', dark: true },
  { id: 'raine', name: 'Raine Cabo 2025', mark: 'Raine<br>Cabo 2025', tags: [], status: 'soon', bg: '#2E3A2F' }
];

window.renderCaseTiles = function (el, opts) {
  opts = opts || {};
  var list = window.SUBTITLE_CASES.filter(function (c) { return c.id !== opts.exclude; });
  if (opts.limit) list = list.slice(0, opts.limit);
  el.innerHTML = list.map(function (c) {
    var live = c.status === 'live';
    var cover = c.img
      ? '<img src="' + c.img + '" alt="" loading="lazy">'
      : '';
    var style = c.bg ? ' style="background:' + c.bg.replace(/"/g, '&quot;') + '"' : '';
    var inner =
      '<div class="tile-cover' + (c.img ? ' has-img' : '') + (c.dark ? ' dark' : '') + '"' + style + '>' + cover +
        (c.img ? '' : '<span class="tile-mark" aria-hidden="true">' + c.mark + '</span>') +
        (live ? '' : '<span class="tile-soon">Coming soon</span>') +
      '</div>' +
      '<div class="tile-info"><h3>' + c.name + (live ? ' <span aria-hidden="true">&#8599;</span>' : '') + '</h3>' +
        (c.tags.length ? '<p>' + c.tags.join(' · ') + '</p>' : '') + '</div>';
    return live
      ? '<a class="tile" href="' + c.href + '">' + inner + '</a>'
      : '<div class="tile is-soon" aria-label="' + c.name + ', case study coming soon">' + inner + '</div>';
  }).join('');
};
