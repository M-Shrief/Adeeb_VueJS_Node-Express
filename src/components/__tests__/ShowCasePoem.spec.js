import { describe, it, expect, vitest } from 'vitest'
import { mount } from '@vue/test-utils'
import ShowCasePoem from '../ShowCasePoem.vue'

describe("renders Poem, use jsdom", () => {
  it("renders properly", () => {
    const wrapper = mount(ShowCasePoem, {
      props: {
        poem: {
          "_id":"6371eb9890c2ad965846c27d",
          "intro":"حَكِّم سُيوفَكَ في رِقابِ العُذَّلِ",
          "poet":{
            "_id":"6371e9ce885e286801facca2",
            "name":"عنترة بن شداد",
            "time_period":"العصر الجاهلي",
            "bio":"عنترة بن عمرو بن شداد بن معاوية بن قراد العبسي (525 م - 608 م) هو أحد أشهر شعراء العرب في فترة ما قبل الإسلام، اشتهر بشعر الفروسية، وله معلقة مشهورة. وهو أشهر فرسان العرب وأشعرهم وشاعر المعلقات والمعروف بشعره الجميل وغزله العفيف بعبلة."
            },
            "verses":[{
              "first":"حَكِّم سُيوفَكَ في رِقابِ العُذَّلِ",
              "sec":"وَإِذا نَزَلتَ بِدارِ ذُلٍّ فَاِرحَلِ",
              "_id":"6371eb9890c2ad965846c27e"
            },{
              "first":"وَإِذا بُليتَ بِظالِمٍ كُن ظالِماً",
              "sec":"وَإِذا لَقيتَ ذَوي الجَهالَةِ فَاِجهَلي",
              "_id":"6371eb9890c2ad965846c27f"
            },{
            "first":"وَإِذا الجَبانُ نَهاكَ يَومَ كَريهَةٍ",
            "sec":"خَوفاً عَلَيكَ مِنَ اِزدِحامِ الجَحفَلِ",
            "_id":"6371eb9890c2ad965846c280"
            }],
            "reviewed":true
        }
      }
    })

    expect(wrapper.text()).toContain("عنترة بن شداد");
    expect(wrapper.text()).toContain("العصر الجاهلي");
    expect(wrapper.text()).toContain("حَكِّم سُيوفَكَ في رِقابِ العُذَّلِ");
    expect(wrapper.text()).toContain("وَإِذا لَقيتَ ذَوي الجَهالَةِ فَاِجهَلي");
    
  })
})