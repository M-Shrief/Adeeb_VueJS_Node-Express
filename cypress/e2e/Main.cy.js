import Main from '../../src/pages/Main.vue'
import { createTestingPinia } from '@pinia/testing'
import { useChosenVerseStore } from "../../src/stores/chosenVerses";

describe('<MainPage />', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })
  
  it('renders Main Page', () => {
    const wrapper = cy.mount(Main, {
      global: {
        plugins: [
          createTestingPinia({
          }),
        ],
      },
    })
    //   initialState: {
    //    counter: { n: 20 }, // start the counter at 20 instead of 0
    //   },
    const chosenVersesStore = useChosenVerseStore();
    expect(chosenVersesStore.fetchChosenVerses).toHaveBeenCalledTimes(1)

  })
})