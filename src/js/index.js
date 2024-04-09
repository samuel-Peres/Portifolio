const botaoMostraProjetos = document.querySelector(".btn-msotra-projetos");
const projetosInativos= document.querySelectorAll('.projeto:not(.ativo)');

botaoMostraProjetos.addEventListener('click', () => {
    mostraMaisProjetos();
    esconderBotao();
});
function esconderBotao() {
    botaoMostraProjetos.classList.add('remover');
}
function mostraMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}