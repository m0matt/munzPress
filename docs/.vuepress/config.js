
const { defaultTheme } = require('vuepress')

module.exports =  {
    theme: defaultTheme({
    // default theme config
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
    ],
  }),

    lang: 'en-US',
    title: 'munzPress',
    description: 'the press of munzautomat',
}