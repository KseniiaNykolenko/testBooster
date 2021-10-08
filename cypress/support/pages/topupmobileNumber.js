export class TopUpMobileNumber {
typePhoneNumber(phoneNumber) {
    cy.get('[data-qa-node="phone-number"]')
        .type(phoneNumber)
}

typeAmount (amount) {
    cy.get('[data-qa-node="amount"]')
        .type(amount)
}

typeNumberDebitSource (numberDebitSource) {
    cy.get('[data-qa-node="numberdebitSource"]')
        .type(numberDebitSource)
}

typeExpireDebitSource (expireDebitSource) {
    cy.get('[data-qa-node="expiredebitSource"]')
        .type(expireDebitSource)
}

typeCvvDebitSource(cvvDebitSource) {
    cy.get('[data-qa-node="cvvdebitSource"]')
        .type(cvvDebitSource)
        .wait(2000)
}

typeFistandLastName(firstName, lastName) {
    cy.get('[data-qa-node="firstNamedebitSource"]')
        .type(firstName)
    cy.get('[data-qa-node="lastNamedebitSource"]')
        .type(lastName)

}

checkSubmitButton(){
    cy.get('button[data-qa-node="submit"]')
        .click()
}

checkDebitCard(card) {
    cy.get('[data-qa-node="card"]')
        .should('have.text', card)
}

checkAmount(amount) {
    cy.get('[data-qa-node="amount"]')
        .should('have.text', amount)
}

checkCurrency(currency) {
    cy.get('[data-qa-node="currency"]')
        .should('contain.text',currency)
        .eq(0)
}

checkComission(commission){
    cy.get('[data-qa-node="commission"]')
        .should('contain.text', commission)
}

checkComissionCurrency(comCurr) {
    cy.get('[data-qa-node="commission-currency"]')
        .should('contain.text', comCurr)
}

}

export const topUpMobNumber = new TopUpMobileNumber()