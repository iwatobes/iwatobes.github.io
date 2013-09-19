define([
  'text!templates/Home.html',
  'text!templates/About.html'
],function(homeTemplate,aboutTemplate){
  return {
    home: {
      title: 'Home'
      , route: '/home'
      , controller: 'home'
      , template: homeTemplate
    }
    , creation: {
      title: 'About'
      , route: '/about'
      , controller: 'about'
      , template: aboutTemplate
    }
  };
})
