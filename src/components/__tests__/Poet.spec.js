import { describe, it, expect, vitest } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import Poet from '../../pages/Poet.vue'

describe("renders Poet page, use jsdom", () => {
  it("renders properly", () => {
    const wrapper = mount(Poet, {
      global: {
        plugins: [createTestingPinia({
          createSpy: vitest.fn,
          // stubActions: false,
          initialState: {
            poet: {
              poet: {
                "details":{
                  "_id":"6371ea7a885e286801facca8",
                  "name":"أبو تمام",
                  "time_period":"العصر العباسي",
                  "bio":"حبيب بن أوس بن الحارث الطائي، أبو تمام. الشاعر، الأديب. أحد أمراء البيان. ولد في جاسم (من قرى حوران بسورية) ورحل إلى مصر، واستقدمه المعتصم إلى بغداد، في شعره قوة وجزالة. واختلف في التفضيل بينه وبين المتنبي"
                },
                "authoredPoems":[
                  {
                    "_id":"6371ec50df3fa96d1a941c5d",
                    "intro":"السَيفُ أَصدَقُ أَنباءً مِنَ الكُتُبِ",
                    "reviewed":true
                  }
                ],
                "authoredChosenVerses":[
                  {
                    "_id":"6371f025ac76f350635f7011",
                    "reviewed":true,
                    "tags":"الشجاعة,الحكمة",
                    "verse":[
                      {
                        "_id":"6381db330c11b57e98c30ae8",
                        "first":"السَيفُ أَصدَقُ أَنباءً مِنَ الكُتُبِ",
                        "sec":"في حَدِّهِ الحَدُّ بَينَ الجِدِّ وَاللَعِبِ"
                      },{
                        "_id":"6381db330c11b57e98c30ae9",
                        "first":"بيضُ الصَفائِحِ لا سودُ الصَحائِفِ في",
                        "sec":"مُتونِهِنَّ جَلاءُ الشَكِّ وَالرِيَبِ"
                      }
                    ]
                  }
                  ,{
                    "_id":"6371f025ac76f350635f7012",
                    "reviewed":true,
                    "tags":"الفخر,الشجاعة,المدح",
                    "verse":[
                      {
                      "_id":"6381db330c11b57e98c30aea",
                      "first":"لَو لَم يَقُد جَحفَلاً يَومَ الوَغى لَغَدا",
                      "sec":"مِن نَفسِهِ وَحدَها في جَحفَلٍ لَجِبِ"
                    }
                    ]
                  }
                ]}
              }
            },
          })],
        },
      })
      expect(wrapper.text()).toContain("السَيفُ أَصدَقُ أَنباءً مِنَ الكُتُبِ");
      expect(wrapper.text()).toContain("لَو لَم يَقُد جَحفَلاً يَومَ الوَغى لَغَدا");
  })
})