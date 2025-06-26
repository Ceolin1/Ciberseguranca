function tema(){
    let checkBox = document.getElementById('tema')
    let link = document.getElementById('linktema')

    if (checkBox.checked){
        link.href = 'css/styles.css'
        checkBox.checked = true
        localStorage.setItem('tema', 'claro')
    } else{
        link.href = 'css/styledark.css'
        checkBox.checked = false
        localStorage.setItem('tema', 'escuro')
    }
}
function acessibilidade(){
    const corpoDaPagina = document.body;
    corpoDaPagina.classList.toggle('acess');
    localStorage.setItem('acessibilidade', document.body.classList.contains('acess'));
}

window.onload = function() {
    if (localStorage.getItem('acessibilidade') === 'true') {
    document.body.classList.add('acess');
}
    let checkBox = document.getElementById('tema')
    let link = document.getElementById('linktema')
    let linkctt = document.getElementById('linktemactt')
    let linkSobre = document.getElementById('linksobre')
    let temaSalvo = localStorage.getItem('tema')

    
    if (temaSalvo === 'escuro') {
        if (link) link.href = 'css/styledark.css'
        if (linkctt) linkctt.href = 'css/stylecontatodark.css'
        if (linkSobre) linkSobre.href = 'css/stylesobredark.css'
        if (checkBox) checkBox.checked = false
    } else {
        if (link) link.href = 'css/styles.css'
        if (linkctt) linkctt.href = 'css/stylecontato.css'
        if (linkSobre) linkSobre.href = 'css/stylesobre.css'
        if (checkBox) checkBox.checked = true
    }
}


function alerta(){
    alert("Página em construção")
}




