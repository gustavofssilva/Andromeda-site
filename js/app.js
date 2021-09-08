const botao = document.querySelector('#enviar')

botao.addEventListener('click', function(event) {

    event.preventDefault();

    let hospedagem = 0;
    let viajantes = 0;
    let translado = 0;
    let total = 0;

    const nome = document.querySelector('#nomeid').value;
   const data = document.querySelector('#data').value;
   const email = document.querySelector('#emailid').value;
   const pessoass = document.getElementById('Pessoas').value;
   const destinor = document.getElementById('Destino').value;
   const dataViagem = document.querySelector('#date').value;

   
   if (destinor === 'Montanhas Tianzi' && pessoass == 1) {
    hospedagem = pessoass * 9500;
    translado = pessoass * 33500;
    total = hospedagem + translado;
}
else if (destinor === 'Montanhas Tianzi' && pessoass == 2) {
    hospedagem = pessoass * 9500;
    translado = pessoass * 33500;
    total = hospedagem + translado;
}
else if (destinor === 'Montanhas Tianzi' && pessoass == 3) {
    hospedagem = pessoass * 9500;
    translado = pessoass * 33500;
    total = hospedagem + translado;
}
else if (destinor === 'Montanhas Tianzi' && pessoass == 4) {
    hospedagem = pessoass * 9500;
    translado = pessoass * 33500;
    total = hospedagem + translado;
}




if (destinor === 'Lago Hillier' && pessoass == 1) {
    hospedagem = pessoass * 9500;
    translado = pessoass * 33500;
    total = hospedagem + translado;
}
else if (destinor === 'Lago Hillier' && pessoass == 2) {
    hospedagem = pessoass * 9500;
    translado = pessoass * 33500;
    total = hospedagem + translado;
}
else if (destinor === 'Lago Hillier' && pessoass == 3) {
    hospedagem = pessoass * 9500;
    translado = pessoass * 33500;
    total = hospedagem + translado;
}
else if (destinor === 'Lago Hillier' && pessoass == 4) {
    hospedagem = pessoass * 9500;
    translado = pessoass * 33500;
    total = hospedagem + translado;
}


if (destinor === 'Costa Na Pali' && pessoass == 1) {
    hospedagem = pessoass * 9500;
    translado = pessoass * 33500;
    total = hospedagem + translado;
}
else if (destinor === 'Costa Na Pali' && pessoass == 2) {
    hospedagem = pessoass * 9500;
    translado = pessoass * 33500;
    total = hospedagem + translado;
}
else if (destinor === 'Costa Na Pali' && pessoass == 3) {
    hospedagem = pessoass * 9500;
    translado = pessoass * 33500;
    total = hospedagem + translado;
}
else if (destinor === 'Costa Na Pali' && pessoass == 4) {
    hospedagem = pessoass * 9500;
    translado = pessoass * 33500;
    total = hospedagem + translado;
}




if (destinor === 'Monument Valley' && pessoass == 1) {
    hospedagem = pessoass * 9500;
    translado = pessoass * 33500;
    total = hospedagem + translado;
}
else if (destinor === 'Monument Valley' && pessoass == 2) {
    hospedagem = pessoass * 9500;
    translado = pessoass * 33500;
    total = hospedagem + translado;
}
else if (destinor === 'Monument Valley' && pessoass == 3) {
    hospedagem = pessoass * 9500;
    translado = pessoass * 33500;
    total = hospedagem + translado;
}
else if (destinor === 'Monument Valley' && pessoass == 4) {
    hospedagem = pessoass * 9500;
    translado = pessoass * 33500;
    total = hospedagem + translado;
}














   
    document.getElementById("p1").innerHTML=`Nome: ${nome}`;

    document.getElementById("p2").innerHTML=`E-mail:  ${email} `;

    document.getElementById("p3").innerHTML=`Data de Nascimento: ${data}`;

    document.getElementById("p4").innerHTML=`Quantidade de viajantes: ${pessoass}`;

    document.getElementById("p5").innerHTML=`Data da Viagem: ${dataViagem}`;

    document.getElementById("p6").innerHTML=`Local de hospedagem: ${destinor}`;

    document.getElementById("p7").innerHTML=`Valor total da hospedagem: R$${hospedagem}`;

    document.getElementById("p8").innerHTML=`Valor total do translado: R$${translado}`;

    document.getElementById("p9").innerHTML=`Valor final da viagem: R$${total}`;
});

