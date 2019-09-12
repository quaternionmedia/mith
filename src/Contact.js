import m from 'mithril';

module.exports = {
  view: function(vnode) {
    return
    m('section#contact', [
      m('h2', 'Contact us!'),
      m('p', 'Seriously! Hire us!'),
      m('form#form', [
        m('label[for=name]', 'Name'),
        m('input#name[type=text,name=name]', 'Your name'),
        m('label[for=email]', 'Email'),
        m('input#email[for=email]', 'Your email'),
        m('label[for=message]', 'Message'),
        m('input[type=text,name=message]', 'Your message here'),
        m('input[type=submit,value=Submit]')
      ])
    ])
  }
}
