import m from 'mithril';

module.exports = {
  view: function(vnode) {
    return m('section#contact[class=container]', [
      m('h2', 'Contact us!'),
      m('p', 'Seriously! Hire us!'),
      m('form#form', {
        action: '/api/contact',
        method: 'post'
      }, [
        m('label[for=name]', 'Name'),
        m('input#name', {type:'text', name:'name', placeholder: 'your name'}),
        m('br'),
        m('label[for=email]', 'Email'),
        m('input#email', {
          type:'text', name:'email', placeholder: 'your email'}, 'Your email'),
        m('br'),
        m('label[for=message]', 'Message'),
        m('input#message', {type:'text', name:'message', placeholder: 'your message'}),
        m('input', {type:'submit',value:'Submit'})
      ])
    ])
  }
}
