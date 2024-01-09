const { error } = require('console');
const fs = require('fs');
const path = require('path');

// criar uma pasta
fs.mkdir(path.join(__dirname, '/test'), (error) => {
    if(error) {
        console.log('Erro:', error)
   }
    console.log("Pasta Criada com Sucesso");
});

//criar arquivo
fs.writeFile(path.join(__dirname, '/test', 'test.txt'),'hello node!', (error) => {
    if(error){
     return console.log("Error:", error);
    }
    console.log("Arquivo criado com sucesso ");
})

//adicionar um arquivo

fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'Hello World!',  (error) => {
    if(error) {
        return console.log("Error: ", error);
    }
    console.log("adicionado com sucesso");
})