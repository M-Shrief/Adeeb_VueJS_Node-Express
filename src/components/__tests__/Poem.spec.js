import { describe, it, expect, vitest } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import Poem from '../../pages/Poem.vue'
import { usePoemStore } from '../../stores/poems'

describe('Poem page, use jsdom', () => {
  it('renders', () => {
    const wrapper = mount(Poem, {
      global: {
        plugins: [createTestingPinia({
          createSpy: vitest.fn,
          // initialState: {},
        })],
      },
    });
    const poemStore = usePoemStore();
    expect(poemStore.poem).toBeTruthy();
    
    expect(wrapper.text()).toContain("Welcome to my Pinia Store");
  })
})
