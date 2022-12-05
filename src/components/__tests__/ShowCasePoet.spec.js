import { describe, it, expect, vitest } from 'vitest'
import { mount } from '@vue/test-utils'
import ShowCasePoet from '../ShowCasePoet.vue'

describe("renders Poet, use jsdom", () => {
  it("renders properly", () => {
    const wrapper = mount(ShowCasePoet, {
      props: {
        details: {
          "_id":"6371ea7a885e286801facca8",
          "name":"أبو تمام",
          "time_period":"العصر العباسي",
          "bio":"حبيب بن أوس بن الحارث الطائي، أبو تمام. الشاعر، الأديب. أحد أمراء البيان. ولد في جاسم (من قرى حوران بسورية) ورحل إلى مصر، واستقدمه المعتصم إلى بغداد، في شعره قوة وجزالة. واختلف في التفضيل بينه وبين المتنبي"
        }
      }
    })
    expect(wrapper.text()).toContain("أبو تمام - العصر العباسي");
  })
})