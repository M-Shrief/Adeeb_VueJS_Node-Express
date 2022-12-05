import { describe, it, expect, vitest } from 'vitest'
import { mount } from '@vue/test-utils'
// import { createTestingPinia } from '@pinia/testing'
import ShowCasePoetry from '../ShowCasePoetry.vue'

describe("renders poetry, use jsdom", () => {
  it("renders properly", () => {
    const wrapper = mount(ShowCasePoetry, {
      props: {
        chosenVerses: [
          {
            "_id":"6371f025ac76f350635f7011",
            "poet":{"_id":"6371ea7a885e286801facca8","name":"أبو تمام"},
            "poem":"6371ec50df3fa96d1a941c5d",
            "reviewed":true,
            "tags":"الشجاعة,الحكمة",
            "verse":[
              {"_id":"6381195f26394fe0f54f022c","first":"السَيفُ أَصدَقُ أَنباءً مِنَ الكُتُبِ","sec":"في حَدِّهِ الحَدُّ بَينَ الجِدِّ وَاللَعِبِ"},
              {"_id":"6381195f26394fe0f54f022d","first":"بيضُ الصَفائِحِ لا سودُ الصَحائِفِ في","sec":"مُتونِهِنَّ جَلاءُ الشَكِّ وَالرِيَبِ"}
            ]
          }
        ]
      }
    })
    expect(wrapper.text()).toContain("أبو تمام");
    expect(wrapper.text()).toContain("السَيفُ أَصدَقُ أَنباءً مِنَ الكُتُبِ");
    expect(wrapper.text()).toContain("بيضُ الصَفائِحِ لا سودُ الصَحائِفِ في");


  }) 
})