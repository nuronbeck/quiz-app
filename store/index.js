export const state = () => ({
  brand: 'Quiz App',
  docsHostname: 'www.quizapp.uz'
})

export const getters = {
  settings: state => state.settings.state
}