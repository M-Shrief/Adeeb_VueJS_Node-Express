import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import Navbar from '../Navbar.vue'

describe('Navbar, use jsdom', () => {
  it('renders', () => {
    const wrapper = mount(Navbar);
    expect(wrapper.text()).toContain('المتنبي');
    expect(wrapper.text()).toContain('قصتنا');
    expect(wrapper.text()).toContain('كن شريكا');
  })
})