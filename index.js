const { createBot, createProvider, createFlow, addKeyword } = require('@bot-wa/bot-wa-baileys')
const QRPortalWeb = require('@bot-wa/bot-wa-baileys/lib/portal')
const BaileysProvider = require('@bot-wa/bot-wa-baileys/lib/provider')
const MockAdapter = require('@bot-wa/bot-wa-baileys/lib/database/mock')

const flowPrincipal = addKeyword(['hola', 'ole', 'alo'])
    .addAnswer('🙌 Hola bienvenido a este *Chatbot*')

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
