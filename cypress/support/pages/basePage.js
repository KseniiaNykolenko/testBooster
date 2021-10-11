export class BasePage {

    typeNumberDebitSource(numberDebitSource) {
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(numberDebitSource)
    }

    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
            .type(amount)
    }

    typeExpireDebitSource(expiredebitSource){
        cy.get('[data-qa-node="expiredebitSource"]')
            .type(expiredebitSource)
    }

    open(url) {
        cy.visit(url)
    }
}

export const basePage = new BasePage()