import Main from './Main.vue'
import { createTestingPinia } from '@pinia/testing'

describe('<Main />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(Main, {
      global: {
        plugins: [createTestingPinia()]
      }
    })
  })
})