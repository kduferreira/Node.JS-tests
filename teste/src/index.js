const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async (message) => {
    console.log(message.body);

 
        await message.reply('Oi, em que posso ajudar?');
    

        const optionsMessage = 'Escolha uma opção:\n' + 
        '1. Opção 1\n' +
        '2. Opção 2\n' +
        '3. Opção 3\n' +
        '4. Opção 4\n' +
        '5. Opção 5\n' +
        '6. Opção 6\n';
        await message.reply(optionsMessage);


        collector.on('collect', async (Response) => {
            const choice = parseInt(response.body);

            switch(choice) {
                case 1: 
                await message.reply('Voce escolheu a Opção 1. Como posso te ajudar?');
                break;


                case 2: 
                await message.reply('Voce escolheu a Opção 2. Como posso te ajudar?');
                break;
            }

            collector.stop();
        });
        collector.on('end', (collected, reason) => {
            if(reason === 'time'){
                message.reply('Tempo esgotado. Por favor, inicie novamente se precisar de ajuda ;)')
            }
        })
});

client.initialize();
