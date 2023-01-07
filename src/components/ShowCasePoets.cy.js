import ShowCasePoets from './ShowCasePoets.vue'

describe('<ShowCasePoets />', () => {
  it('render poets(name,time-period) with the right link', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(ShowCasePoets, {
      props: {
        poets: [
          {
            "_id": "6371e9ce885e286801facca2",
            "name": "عنترة بن شداد",
            "time_period": "العصر الجاهلي"
          }
        ],
        grid: 'grid'
      }
    })
    cy.get('.grid .poet').should('contain', "عنترة بن شداد")
    cy.get('.grid .poet').should('have.attr', 'href', '/poet/6371e9ce885e286801facca2')
  })
})