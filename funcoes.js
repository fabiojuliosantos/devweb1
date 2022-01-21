function mascara_cpf() {
    var cpf = document.getElementById('cpf')
    if (cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value += "."
    } else if (cpf.value.length == 11) {
        cpf.value += "-"
    }
}

function mascara_cel() {
    var cel = document.getElementById('cel')
    if (cel.value.length == 2) {
        cel.value += " "
    } else if (cel.value.length == 8) {
        cel.value += "-"
        }
}

function mascara_data(){
    var data = document.getElementById('data')
    if(data.value.length == 2 || data.value.length == 5){
        data.value += "/"}
    
    }
 
function validar_cadastro(){
    var nome = form_cadastro.nome_cadastro.value;
    var data_cadastro = form_cadastro.data_cadastro.validar_cadastro;
    var cpf_cadastro = form_cadastro.cpf_cadastro.value;
    var email_cadastro = form_cadastro.email_cadastro.value;
    var password_cadastro = form_cadastro.senha.value;
    
    if(nome==""){
        alert('Preencha o campo Nome.');
        form_cadastro.nome_cadastro.focus();
        return false
    }

    if(password_cadastro==""){
        alert('Preencha o campo Senha.');
        form_cadastro.password_cadastro.focus();
        return false
    }

    if(email_cadastro ==""){
        alert('Preencha o campo E-mail.');
        form_cadastro.email_cadastro.focus();
        return false
    }
    
    if(cpf_cadastro ==""){
        alert('Preencha o campo E-mail.');
        form_cadastro.email_cadastro.focus();
        return false
    }
    
    if(data_cadastro ==""){
        alert('Preencha o campo E-mail.');
        form_cadastro.email_cadastro.focus();
        return false
     }
}

function validar_material(){
    var nome_material = form_material.nome_material.value;
    var cpf_material = form_material.cpf_material.value;
    var cel_material = form_material.cel_material.value;
    var email_material = form_material.email_material.value;
    var arquivo = form_material.arquivo.value;

    if(nome_material==""){
        alert('Preencha o campo Nome.');
        form_material.nome_material.focus();
        return false
    }
    if(cpf_material==""){
        alert('Preencha o campo CPF.');
        form_material.cpf_material.focus();
        return false
    }
    if(cel_material==""){
        alert('Preencha o campo Celular.');
        form_material.cel_material.focus();
        return false
}
    if(email_material==""){
        alert('Preencha o campo E-mail.');
        form_material.email_material.focus();
        return false
    }
    
    if(arquivo_material==""){
            alert('Anexe um arquivo.');
            form_material.arquivo_material.focus();
            return false
        }            
}

function validar_mensagem(){
    var nome_mensagem = form_mensagem.nome_mensagem.value;
    var cpf_mensagem = form_mensagem.cpf_mensagem.value;
    var cel_mensagem = form_mensagem.cel_mensagem.value;
    var email_mensagem = form_mensagem.email_mensagem.value;
    var mensagem = form_mensagem.mensagem.value;
    
    if(nome_mensagem==""){
        alert('Preencha o campo Nome.');
        form_material.nome_mensagem.focus();
        return false
    }

    if(cpf_mensagem==""){
        alert('Preencha o campo CPF.');
        form_material.cpf_mensagem.focus();
        return false
    }

    if(cel_mensagem==""){
        alert('Preencha o campo Celular.');
        form_material.cel_mensagem.focus();
        return false
    }
    
    if(email_mensagem==""){
        alert('Preencha o campo E-mail.');
        form_material.email_mensagem.focus();
        return false
    }
    if(mensagem==""){
        alert('Digite sua mensagem.');
        form_material.mensagem.focus();
        return false
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}