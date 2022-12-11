import Main from '../../src/pages/Main.vue'

describe('<MainPage />', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })
  
  it('renders Main Page', () => {
    cy.mount(Main)
  })
})