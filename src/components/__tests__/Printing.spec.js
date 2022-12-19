import { describe, it, expect, vitest } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import Printing from '../../pages/Printing.vue'
import { usePrintsStore } from '../../stores/prints'

describe('Printing page, use jsdom', () => {
  it('renders and call the Prints store', () => {
    const wrapper = mount(Printing, {
      global: {
        plugins: [createTestingPinia({
          createSpy: vitest.fn,
          // initialState: {},
        })],
      },
    });
    const printsStore = usePrintsStore();
    expect(printsStore.prints).toBeTruthy();
  })
})