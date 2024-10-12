/*
FRAMEWORK: Me faz receber uma estrutura e apartir dela será possível desenvolver minha aplicação.

Middleware: É uma função que recebe três parametros (requisições, resposta, next).
O que é cada parâmetro - 
1. Realizar modificações no objeto de requisições e resposta.
2. Finalizar as requisições e retornar a resposta para o cliente.
3. Chamar a próxima função Middleware no ciclo usando "next()", permitindo 
que a execução continue para a próxima middleware registrado ou para a função de rota final.

Sua utilidade - 
1. Validação de dados.
2. Autenticação e autorização.
3. Logging e logging de requisições.
4. Manipulação de erros.
5. Entre outras operações que seja necessario a utilização de requisitos 
para dar alguma resposta para o cliente.

Express: É um frameWork no Node.js utilizado para construir aplicações web e APIs com o Node.js, 
ele tem varias funcionalidades e lhe da um controle melhor e eficaz das requisições HTTP. Nele se utiliza os
middlewares e eles são excenciais para aplicação do framework Express.js.

Funções do Framework (Express.js):
const app = express()
app.get(caminho do server, middleware(req, res, next)) => callback 
- Explicação: 
Serve para definir rotas HTTP que respondem apenas aos requisitos GET(Uma requisição HTTP, requisições = POST, GET, DELETE, HEAD, PUT)

app.listen(porta, função) => callback
- Explicação:
Inicializa um servidor HTTP 

Temporizador:
Biblioteca SCHEDULE:
funções:

schedule.schedulejob(asterísco/5 * * * * *, () => {} ) - Este comando irá acionar a função em um momento 
específico do dia, semana e mês.

new schedule.RecunrrenceRule() - São as exigências do schedulejob => (/* * * * * *) <=
exigencias dentro do objeto new schedule.RecunrrenceRule():
dayOfWeek, hour, seconds, minutes e etc...
new schedule.Range(0, 5) - Irá pegar o dia da semana que você está.

Funções prontas do Node:

setTimeout(() => {}, tempo) - Esta função espera um tempo e executa uma só vez a função.
setInterval(() => {}, tempo) - Esta função tem um intevalo de tempo para a execução da função.
new Date().getSeconds() - Esta função retorna os segundos que foram passados desde ctrl+alt+n.
*/