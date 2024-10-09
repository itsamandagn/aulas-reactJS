const cadastrarCliente = () => {
    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const email = document.getElementById("email").value;

    const cliente = {
        nome: nome,
        endereco: endereco,
        email: email,
    };

    console.log(cliente);
};
