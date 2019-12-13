$(function(){
    pegaJSON();
});

function pegaJSON() {
    $.get("http://127.0.0.1:8090/conta/listar", listarContas)
    .fail(function(){
        console.log("Erro"); 
    });
}

function listarContas(data){
    var corpoTabela = $(".table").find("tbody");
    console.log(data);
    var contas = data.content; 
    console.log(contas[0].proprietario.nome);
      
    var i;
    for ( i = 0; i < contas.length; i++)  {
        var linha = novaLinha(contas[i].id, contas[i].descricao, contas[i].saldo, contas[i].limite, contas[i].proprietario.nome);
        corpoTabela.append(linha);
    }
    /*
    $(data.content).each(function(){
        console.log(data.content);
        
        var i = 0;
        var linha = novaLinha(this.descricao);
        console.log(data.content[i].descricao);
        i++;
        corpoTabela.append(linha);
    }) */
    

}

function novaLinha(id, descricao, saldo, limite, proprietario) {
    var linha = $('<tr>');
    var colunaId = $('<td>').text(id);
    var colunaDescricao = $('<td>').text(descricao);
    var colunaSaldo = $('<td>').text(saldo);
    var colunaLimite = $('<td>').text(limite);
    var colunaProprietario = $('<td>').text(proprietario);

    linha.append(colunaId);
    linha.append(colunaDescricao);
    linha.append(colunaSaldo);
    linha.append(colunaLimite);
    linha.append(colunaProprietario);

    return linha;
}