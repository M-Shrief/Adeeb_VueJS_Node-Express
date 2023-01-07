import ShowCaseProse from './ShowCaseProse.vue'

describe('<ShowCaseProse />', () => {
  it('renders prose properly and emit (print) with the right data onClick', () => {
    const onPrintSpy = cy.spy().as('onPrintSpy')
    cy.mount(ShowCaseProse, {
      props: {
        proses: [
          {
            "_id": "639b5f4db5e253099333b120",
            "poet": {
              "_id": "639b5cf712eec0bb274cecd4",
              "name": "محمود شاكر (أبو فهر)"
            },
            "tags": "حكمة",
            "qoute": "واعلم أن السفهاء في الدنيا كثير، فمن كان يغضب لكلّ سفاهةٍ من سفيه فإنّ شقاءه سيطول بغضبه.",
            "reviewed": true
          },
        ],
        onPrint: onPrintSpy
      }
    })
    cy.get('.prose-item .qoute').should('contain', "واعلم أن السفهاء في الدنيا كثير، فمن كان يغضب لكلّ سفاهةٍ من سفيه فإنّ شقاءه سيطول بغضبه.")
    cy.get('.prose-item .print-button').click()
    cy.get('@onPrintSpy').should('be.calledOnce')
    cy.get('@onPrintSpy').should('have.been.calledWith', {
      "_id": "639b5f4db5e253099333b120",
      "poet": {
        "_id": "639b5cf712eec0bb274cecd4",
        "name": "محمود شاكر (أبو فهر)"
      },
      "tags": "حكمة",
      "qoute": "واعلم أن السفهاء في الدنيا كثير، فمن كان يغضب لكلّ سفاهةٍ من سفيه فإنّ شقاءه سيطول بغضبه.",
      "reviewed": true
    })
  })
})