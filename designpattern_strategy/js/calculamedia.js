


function CalculaMedia(){
    let P1 = parseInt(document.getElementById('P1').value, 10);
    let P2 = parseInt(document.getElementById('P2').value, 10);
    let situacao = document.getElementById("situacao");
    let media = (P1+P2) / 2;
    document.getElementById("resultado").value = media

    if(media<5){
        situacao = document.getElementById("situacao").value = "Reprovado";
        
    }
    else if(media>=5 && media<7){
        situacao = document.getElementById("situacao").value = "Aprovado";
    }
    else if(media>=7){
        let situacao = document.getElementById("situacao").value = "Aprovado";
    }

}


function Limpa() {

    document.getElementById("P1").value = "";
    document.getElementById("P2").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("situacao").value = "";
    document.getElementById("nomealuno").value = "";
}

