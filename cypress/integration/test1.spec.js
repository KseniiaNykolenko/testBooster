/// <reference types="cypress" />

import {topUpMobNumber} from "../support/pages/topupmobileNumber";
import {mTransfers} from "../support/pages/transfers";

it('Top up mobile number online ', () => {
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

it.only('Transfer between your accounts, from/to the VISA/MasterCard card of other Ukrainian and foreign banks', () => {
    cy.visit('https://next.privat24.ua/money-transfer/card?lang=en')

    mTransfers.typeNumberDebitSource('4111 1111 1111 1111')
    mTransfers.typeExpireDebitSource('1224')
    mTransfers.typeCvvDebitSource('123')
    mTransfers.typeFirstNameandLastName('IVAN','IVANOV')
    mTransfers.typeNumberReceiver('5100 0000 0000 0008')
    mTransfers.typeFirstNandLastNofReceiver('PETR','PETROV')
    mTransfers.typeAmount('300')
    mTransfers.typeComment()
    mTransfers.typeAddComment('My cypress test')
    mTransfers.checkSubmitButton()
    mTransfers.checkPayerCard('4111 1111 1111 1111')
    mTransfers.checkPayerAmount('300 UAH')
    mTransfers.checkPayerCurrency('84.25 UAH')
    mTransfers.checkReceiverName('PETR PETROV')
    mTransfers.checkReceiverCard('5100 0000 0000 0008')
    mTransfers.checkReceiverAmount('300 UAH')
    mTransfers.checkResult('384.25')
})
