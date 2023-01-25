import ShowCasePoems from './ShowCasePoems.vue'

describe('<ShowCasePoems />', () => {
  it('renders poems(poet, intro) with the right link', () => {
    cy.mount(ShowCasePoems, {
      props: {
        poems: [
          {
            "_id": "6371eb6690c2ad965846c221",
            "intro": "حُكمُ المَنِيَّةِ في البَرِيَّةِ جاري",
            "poet": {
              "_id": "6371ea89885e286801faccaa",
              "name": "التهامي"
            },
            "reviewed": true
          }
        ],
        grid: 'grid'
      }
    })
    cy.get('.grid .poem').should('contain', "حُكمُ المَنِيَّةِ في البَرِيَّةِ جاري - التهامي")
    cy.get('.grid .poem').should('have.attr', 'href', '/poem/6371eb6690c2ad965846c221')
  })
})