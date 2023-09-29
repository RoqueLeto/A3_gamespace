// //##################################
// //            Variáveis
// //##################################

// //##################################
// //         FUNÇOES E EVENTOS
// //##################################

// //Evento do botão que recupera os valores do formulário e envia para o banco de dados
// btn.addEventListener("click", function (e) {
//   e.preventDefault();

//   console.log(JSON.stringify(data));
//   //Constante que armazena a função assincrona de fetch
//   const fetchAPI = async () => {
//     const result = await fetch("http://localhost:3000/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//   };
//   //  fetchAPI();

//   //Execução do Fetch(Busca)
// });

fetch("http//localhost:3001", {
  method: "POST",
  body: {
    name: "Fransico",
    email: "Francisco@teste.com",
    senha: "Fransico123",
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data));
