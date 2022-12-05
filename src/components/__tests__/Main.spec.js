import { describe, it, expect, vitest } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import Main from '../../pages/Main.vue'

describe('renders Main page, use jsdom', () => {
  it('renders', () => {
    const wrapper = mount(Main, {
      global: {
        plugins: [createTestingPinia({
          createSpy: vitest.fn,
          // initialState: {},
        })],
      },
    });
    expect(wrapper.text()).toContain("Welcome to my Pinia Store");
  })
})