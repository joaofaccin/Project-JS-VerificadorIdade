function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
            alert('[ERRO] Verificar dados digitados!!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        img.style.padding = '20px'

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <10){
                img.setAttribute('src','./src/img/childM.png')
            }else if(idade < 21){
                img.setAttribute('src','./src/img/jovenM.png')
            }else if(idade < 50){
                img.setAttribute('src','./src/img/adultoM.png')
            }else{
                img.setAttribute('src','./src/img/idosoM.png')
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <10)
            {
                img.setAttribute('src','./src/img/childF.png')
            }else if(idade < 21){
                img.setAttribute('src','./src/img/jovenF.png')
            }else if(idade < 50){
                img.setAttribute('src','./src/img/adultoF.png')
            }else{
                img.setAttribute('src','./src/img/idosoF.png')
            }
        }else if(fsex[2].checked){
            genero = 'Neutro'
            if(idade >= 0 && idade <10)
            {

            }else if(idade < 21){
                img.setAttribute('src','./src/img/neutro.png')
            }else if(idade < 50){
                img.setAttribute('src','./src/img/neutro.png')
            }else{
                img.setAttribute('src','./src/img/neutro.png')
            }
        }
        
        res.innerHTML =`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }

}