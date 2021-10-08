/// <reference types="cypress" />

import {topUpMobNumber} from "../support/pages/topupmobileNumber";

it.only('Top up mobile number online ', () => {
    cy.visit('https://next.privat24.ua/mobile?lang=en')

    topUpMobNumber.typePhoneNumber('951099819')
    topUpMobNumber.typeAmount(1)
    topUpMobNumber.typeNumberDebitSource('4111 1111 1111 1111')
    topUpMobNumber.typeExpireDebitSource('1224')
    topUpMobNumber.typeCvvDebitSource('123')
    topUpMobNumber.typeFistandLastName('IVAN','IVANOV')
    topUpMobNumber.checkSubmitButton()
    topUpMobNumber.checkDebitCard('4111 **** **** 1111')
    topUpMobNumber.checkAmount('1')
    topUpMobNumber.checkCurrency('UAH')
    topUpMobNumber.checkComission('2')
    topUpMobNumber.checkComissionCurrency('UAH')
});



it('Transfer between your accounts, from/to the VISA/MasterCard card of other Ukrainian and foreign banks', () => {
    cy.visit('https://next.privat24.ua/money-transfer/card?lang=en')
    cy.get('[data-qa-node="numberdebitSource"]')
        .type('4111 1111 1111 1111')
    cy.get('[data-qa-node="expiredebitSource"]')
        .type('1224')
    cy.get('[data-qa-node="cvvdebitSource"]')
        .type('123')
    cy.get('[data-qa-node="firstNamedebitSource"]')
        .type('IVAN')
    cy.get('[data-qa-node="lastNamedebitSource"]')
        .type('IVANOV')

    cy.get('[data-qa-node="numberreceiver"]')
        .type('5100 0000 0000 0008')
    cy.get('[data-qa-node="firstNamereceiver"]')
        .type('PETR')
    cy.get('[data-qa-node="lastNamereceiver"]')
        .type('PETROV')
    cy.get('[data-qa-node="amount"]')
        .type('300')
    cy.contains('Add a comment')
        .click()
        .wait(2000)
    cy.get('[data-qa-node="comment"]')
        .type('My cypress test')
    cy.get('button[type="submit"]')
        .click()
        .wait(2000)

    cy.get('[data-qa-node="payer-card"]')
        .should('have.text','4111 1111 1111 1111')
    cy.get('[data-qa-node="payer-amount"]')
        .should('have.text', '300 UAH')
    cy.get('[data-qa-node="payer-currency"]')
        .should('have.text', '84.25 UAH')
    cy.get('[data-qa-node="receiver-name"]')
        .should('have.text', 'PETR PETROV')
    cy.get('[data-qa-node="receiver-card"]')
        .should('have.text', '5100 0000 0000 0008')
    cy.get('[data-qa-node="receiver-amount"]')
        .should('have.text', '300 UAH')
    cy.get('.sc-iQKALj.ldQFQo')
        .should('contain.text', '384.25')
})
