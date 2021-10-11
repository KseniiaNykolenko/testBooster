/// <reference types="cypress" />

import {topUpMobNumber} from "../support/pages/topupmobileNumber";
import {mTransfers} from "../support/pages/transfers";
import {basePage} from "../support/pages/basePage";

it('Top up mobile number online ', () => {

    basePage.open('https://next.privat24.ua/mobile?lang=en')
    topUpMobNumber.typePhoneNumber('951099819')
    basePage.typeAmount(1)
    basePage.typeNumberDebitSource('4111 1111 1111 1111')
    basePage.typeExpireDebitSource('1224')
    topUpMobNumber.typeCvvDebitSource('123')
    topUpMobNumber.typeFistandLastName('IVAN', 'IVANOV')
    topUpMobNumber.checkSubmitButton()
    topUpMobNumber.checkDebitCard('4111 **** **** 1111')
    topUpMobNumber.checkAmount('1')
    topUpMobNumber.checkCurrency('UAH')
    topUpMobNumber.checkComission('2')
    topUpMobNumber.checkComissionCurrency('UAH')
});

it('Transfer between your accounts, from/to the VISA/MasterCard card of other Ukrainian and foreign banks', () => {

    basePage.open('https://next.privat24.ua/money-transfer/card?lang=en')
    basePage.typeNumberDebitSource('4111 1111 1111 1111')
    basePage.typeExpireDebitSource('1224')
    mTransfers.typeCvvDebitSource('123')
    mTransfers.typeFirstNameandLastName('IVAN', 'IVANOV')
    mTransfers.typeNumberReceiver('5100 0000 0000 0008')
    mTransfers.typeFirstNandLastNofReceiver('PETR', 'PETROV')
    basePage.typeAmount('300')
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

it('Sending GET API request', () => {
    cy.request('https://next.privat24.ua/')
        .then((response) => {
            console.log(response)
        })
})

it('Sending POST API request', () => {
    const requestBody =
        {
            "action": "info",
            "phone": "+380951099819",
            "amount": 50,
            "currency": "UAH",
            "cardCvv": "123",
            "card": "5100000000000008",
            "cardExp": "1224",
            "xref": "4c7a949d7a30427f751f40812e468859",
            "_": 1633941907011
        }
    const headersData =
        {
            cookie: "_ga=GA1.2.755788547.1631714284; pubkey=e39a6b607f1c3e6ef1f3f5169a7191ad; _gid=GA1.2.1664714559.1633938521; lfp=10/5/2021, 12:35:40 PM; pa=1633698579336.65620.45901453052008323next.privat24.ua0.3241479163441383+4; _gat_gtag_UA_29683426_11=1; fp=47",
        }
    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body: requestBody,
        headers: headersData
    })
        .then((response) => {
            console.log(response)
        })
})