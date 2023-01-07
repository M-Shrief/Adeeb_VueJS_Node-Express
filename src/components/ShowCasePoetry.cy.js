import ShowCasePoetry from './ShowCasePoetry.vue';

describe('<ShowCasePoetry />', () => {
  it('renders poetry-item properly', () => {
    cy.mount(ShowCasePoetry, {
      props: {
        chosenVerses: [
          {
            "_id": "6371f025ac76f350635f7011",
            "poet": {
              "_id": "6371ea7a885e286801facca8",
              "name": "أبو تمام"
            },
            "poem": "6371ec50df3fa96d1a941c5d",
            "reviewed": true,
            "tags": "الشجاعة,الحكمة",
            "verse": [
              {
                "_id": "63b687958062f0d03be81df5",
                "first": "السَيفُ أَصدَقُ أَنباءً مِنَ الكُتُبِ",
                "sec": "في حَدِّهِ الحَدُّ بَينَ الجِدِّ وَاللَعِبِ"
              },
              {
                "_id": "63b687958062f0d03be81df6",
                "first": "بيضُ الصَفائِحِ لا سودُ الصَحائِفِ في",
                "sec": "مُتونِهِنَّ جَلاءُ الشَكِّ وَالرِيَبِ"
              }
            ]
          },
          {
            "_id": "6371f025ac76f350635f7012",
            "poem": "6371ec50df3fa96d1a941c5d",
            "reviewed": true,
            "tags": "الفخر,الشجاعة,المدح",
            "verse": [
              {
                "_id": "63b69642ecc6f24b45987d9b",
                "first": "لَو لَم يَقُد جَحفَلاً يَومَ الوَغى لَغَدا",
                "sec": "مِن نَفسِهِ وَحدَها في جَحفَلٍ لَجِبِ"
              }
            ],
            "poet": {
              "_id": "6371ea7a885e286801facca8",
              "name": "أبو تمام"
            }
          }
        ],
      }, 
    })
    cy.get('.two-verse .first').should('contain', "السَيفُ أَصدَقُ أَنباءً مِنَ الكُتُبِ")
    cy.get('.two-verse .sec').should('contain', "في حَدِّهِ الحَدُّ بَينَ الجِدِّ وَاللَعِبِ")

    cy.get('.one-verse .first').should('contain', "لَو لَم يَقُد جَحفَلاً يَومَ الوَغى لَغَدا")
    cy.get('.one-verse .sec').should('contain', "مِن نَفسِهِ وَحدَها في جَحفَلٍ لَجِبِ")

    
  })
  it('emit (print) on button click with the proper data', () => {
    const onPrintSpy = cy.spy().as('onPrintSpy')
    cy.mount(ShowCasePoetry, {
      props: {
        chosenVerses: [
          {
            "_id": "6371f025ac76f350635f7011",
            "poet": {
              "_id": "6371ea7a885e286801facca8",
              "name": "أبو تمام"
            },
            "poem": "6371ec50df3fa96d1a941c5d",
            "reviewed": true,
            "tags": "الشجاعة,الحكمة",
            "verse": [
              {
                "_id": "63b687958062f0d03be81df5",
                "first": "السَيفُ أَصدَقُ أَنباءً مِنَ الكُتُبِ",
                "sec": "في حَدِّهِ الحَدُّ بَينَ الجِدِّ وَاللَعِبِ"
              },
              {
                "_id": "63b687958062f0d03be81df6",
                "first": "بيضُ الصَفائِحِ لا سودُ الصَحائِفِ في",
                "sec": "مُتونِهِنَّ جَلاءُ الشَكِّ وَالرِيَبِ"
              }
            ]
          },
          {
            "_id": "6371f025ac76f350635f7012",
            "poem": "6371ec50df3fa96d1a941c5d",
            "reviewed": true,
            "tags": "الفخر,الشجاعة,المدح",
            "verse": [
              {
                "_id": "63b69642ecc6f24b45987d9b",
                "first": "لَو لَم يَقُد جَحفَلاً يَومَ الوَغى لَغَدا",
                "sec": "مِن نَفسِهِ وَحدَها في جَحفَلٍ لَجِبِ"
              }
            ],
            "poet": {
              "_id": "6371ea7a885e286801facca8",
              "name": "أبو تمام"
            }
          }
        ],
        onPrint: onPrintSpy
      }, 
    })
    
    cy.get('.poetry-item .print-button').click({multiple: true})
    cy.get('@onPrintSpy').should('be.calledTwice')

    cy.get('@onPrintSpy').should('have.been.calledWith', {
      "_id": "6371f025ac76f350635f7011",
      "poet": {
        "_id": "6371ea7a885e286801facca8",
        "name": "أبو تمام"
      },
      "poem": "6371ec50df3fa96d1a941c5d",
      "reviewed": true,
      "tags": "الشجاعة,الحكمة",
      "verse": [
        {
          "_id": "63b687958062f0d03be81df5",
          "first": "السَيفُ أَصدَقُ أَنباءً مِنَ الكُتُبِ",
          "sec": "في حَدِّهِ الحَدُّ بَينَ الجِدِّ وَاللَعِبِ"
        },
        {
          "_id": "63b687958062f0d03be81df6",
          "first": "بيضُ الصَفائِحِ لا سودُ الصَحائِفِ في",
          "sec": "مُتونِهِنَّ جَلاءُ الشَكِّ وَالرِيَبِ"
        }
      ]
    })
    cy.get('@onPrintSpy').should('have.been.calledWith', {
      "_id": "6371f025ac76f350635f7012",
      "poem": "6371ec50df3fa96d1a941c5d",
      "reviewed": true,
      "tags": "الفخر,الشجاعة,المدح",
      "verse": [
        {
          "_id": "63b69642ecc6f24b45987d9b",
          "first": "لَو لَم يَقُد جَحفَلاً يَومَ الوَغى لَغَدا",
          "sec": "مِن نَفسِهِ وَحدَها في جَحفَلٍ لَجِبِ"
        }
      ],
      "poet": {
        "_id": "6371ea7a885e286801facca8",
        "name": "أبو تمام"
      }
    })
  })
})