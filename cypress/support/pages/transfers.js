export class transfers {

typeNumberDebitSource(numberdebitSource) {
    cy.get('[data-qa-node="numberdebitSource"]')
        .type(numberdebitSource)
}

typeExpireDebitSource(expiredebitSource){
    cy.get('[data-qa-node="expiredebitSource"]')
        .type(expiredebitSource)
}

typeCvvDebitSource(cvvdebitSource) {
    cy.get('[data-qa-node="cvvdebitSource"]')
        .type(cvvdebitSource)
}

typeFirstNameandLastName(firstName, lastName) {
    cy.get('[data-qa-node="firstNamedebitSource"]')
        .type(firstName)
    cy.get('[data-qa-node="lastNamedebitSource"]')
        .type(lastName)
}

typeNumberReceiver(numberreceiver) {
    cy.get('[data-qa-node="numberreceiver"]')
        .type(numberreceiver)
}

typeFirstNandLastNofReceiver(firstName, lastName){
    cy.get('[data-qa-node="firstNamereceiver"]')
        .type(firstName)
    cy.get('[data-qa-node="lastNamereceiver"]')
        .type(lastName)
}

typeAmount(amount){
    cy.get('[data-qa-node="amount"]')
        .type(amount)
}

typeComment(){
    cy.contains('Add a comment')
        .click()
        .wait(2000)
}

typeAddComment(comment) {
    cy.get('[data-qa-node="comment"]')
        .type(comment)
}

checkSubmitButton() {
    cy.get('button[type="submit"]')
        .click()
        .wait(2000)
}

checkPayerCard(pcard) {
    cy.get('[data-qa-node="payer-card"]')
        .should('have.text',pcard)
}

checkPayerAmount(payerAmount){
    cy.get('[data-qa-node="payer-amount"]')
        .should('have.text', payerAmount)

}

checkPayerCurrency(payerCurrency){
    cy.get('[data-qa-node="payer-currency"]')
        .should('have.text', payerCurrency)
}

checkReceiverName(receiverName) {
    cy.get('[data-qa-node="receiver-name"]')
        .should('have.text', receiverName)
}

checkReceiverCard(rCard) {
    cy.get('[data-qa-node="receiver-card"]')
        .should('have.text', rCard)
}

checkReceiverAmount(rAmount) {
    cy.get('[data-qa-node="receiver-amount"]')
        .should('have.text',rAmount)
}

checkResult(result){
    cy.get('.sc-iQKALj.ldQFQo')
        .should('contain.text', result)
}
}

export const mTransfers = new transfers()