import m from 'mithril';

var cal = {
  gigs: [{
    what: 'what',
    where: 'where',
    when: 'when',
    duration: 1,
  }],
  populate: function() {
    cal.gigs.map(function(gig) {
      console.log('gig', gig)
      return m('tr', [
        m('td', gig['what']),
        m('td', gig['when']),
        m('td', gig['where']),
      ])
    })
  }
}

module.exports = {
  oncreate: cal.populate,
  view: function(vnode) {
    return m('#calendar.container', [
      m('h2', 'calendar'),
      m('table#gigs', [
      m('tr', [
        m('th', 'what'),
        m('th', 'when'),
        m('th', 'where'),
      ]),
    ]),

    ])
  }
}
