const body = document.body

    const banner = () => {
        let div = document.createElement("div");
        div.setAttribute('class', 'banner');
        
        var banner = document.createElement("h1");
    
        div.appendChild(banner);
        body.append(div);
    
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'center';
    }
    banner();

    
    const apresentacao = () => {
        let div = document.createElement("div");
        div.setAttribute('class', 'apresentacao');
        
        var textoApresentacao = document.createElement("h1");
        textoApresentacao.innerText = 'Apresentação pessoal';
    
        div.appendChild(textoApresentacao);
        body.append(div);
    
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'center';
    
        window.sr = ScrollReveal({ reset: true });
    }
    apresentacao();


    const textoApresentacao = () => {
        let div = document.createElement("div");
        div.setAttribute('class', 'textoapresentacao');
        
        var textoBanner = document.createElement("h1");
        textoBanner.innerText = 'Olá, nós somos Gaby, Isa e Mari. Gaby tem 16 anos e faz aniversário dia 01/05, a Isa tem 17 anos e faz aniversário dia 01/11 e a Mari tem 18 aninhos e faz aniverário dia 11/10. Estudamos na Fiap School há 3 anos, entramos no 1 ano do ensino médio e esse ano vamos finalizar o ensino médio. Fazemos Ensino Médio Técnico em Ti, eu(Gaby) pretendo seguir essa profissão, a Isa acho que ela quer fazer design e a Mari eu não sei :) .';
    
        div.appendChild(textoBanner);
        body.append(div);
    
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'flex-start';
        div.style.padding='15px'
    
        window.sr = ScrollReveal({ reset: true });
        sr.reveal('.banner h1', { duration: 4000 });
    }
    textoApresentacao();

    function cards() {

        const nomesHabilidades = ['Dedicação', 'Criatividade', 'Arte'];
    
        let divAreaCards = document.createElement("div");
        divAreaCards.setAttribute('class', 'areaCards');
        divAreaCards.innerText = 'Principais Habilidades';
        body.append(divAreaCards);
    
        let divCards = document.createElement("div");
        divCards.setAttribute('class', 'cardsContainer');
    
        body.append(divCards);
    
        for (let i = 0; i < 3; i++) {
            let card = document.createElement("div");
            card.setAttribute('class', `card card-${i+1}`);
            card.innerText = nomesHabilidades[i];
            divCards.append(card);
        }
    }
    cards();


        
        const formulario = () => {
            let div = document.createElement("div");
            div.setAttribute('class', 'contato');
            
            var textoBanner = document.createElement("h1");
            textoBanner.innerText = 'Formulário de contato';
        
            div.appendChild(textoBanner);
            body.append(div);
        
            div.style.display = 'flex';
            div.style.alignItems = 'center';
            div.style.justifyContent = 'center';
        
            window.sr = ScrollReveal({ reset: true });
        }
        formulario();

      // Criando o formulário
    var form = document.createElement('form');
    form.id = 'contactForm';

    // Definindo estilos CSS para o formulário
    form.style.maxWidth = '450px';
    form.style.margin = '10px auto';
    form.style.marginBottom = '50px'

    // Função para criar campos de formulário
    function createField(labelText, inputType, inputName, isRequired) {
    var div = document.createElement('div');
    div.style.marginBottom = '5px';

    var label = document.createElement('label');
    label.textContent = labelText;
    label.style.display = 'block';
    label.style.fontWeight = 'bold';

    var input = document.createElement('input');
    input.type = inputType;
    input.name = inputName;
    input.required = isRequired;
    input.style.width = '100%';
    input.style.padding = '8px';
    input.style.boxSizing = 'border-box';
    input.style.border = '1px solid #ccc';
    input.style.borderRadius = '6px';

  div.appendChild(label);
  div.appendChild(input);

  return div;
}

// Criando os campos do formulário
var nameField = createField('Nome:', 'text', 'name', true);
var emailField = createField('Email:', 'email', 'email', true);
var tellField = createField('Telefone:', 'number', 'number', true);
tellField.style.marginBottom = '10px';

var messageLabel = document.createElement('label');
messageLabel.textContent = 'Mensagem:';
messageLabel.style.display = 'block';
messageLabel.style.fontWeight = 'bold';

var messageTextarea = document.createElement('textarea');
messageTextarea.name = 'message';
messageTextarea.rows = '4';
messageTextarea.required = true;
messageTextarea.style.width = '100%';
messageTextarea.style.padding = '8px';
messageTextarea.style.boxSizing = 'border-box';
messageTextarea.style.border = '1px solid #ccc';
messageTextarea.style.borderRadius = '6px';

tellField.appendChild(messageLabel);
tellField.appendChild(messageTextarea);

// Adicionando os campos ao formulário
form.appendChild(nameField);
form.appendChild(emailField);
form.appendChild(tellField);

// Criando o botão de envio
var submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Enviar';
submitButton.style.width = '100%';
submitButton.style.padding = '15px';
submitButton.style.backgroundColor = '#2b2b2b';
submitButton.style.color = 'white';
submitButton.style.fontWeight = 'bold'
submitButton.style.borderRadius = '10px';
submitButton.style.cursor = 'pointer';

// Estilizando o botão de envio ao passar o mouse
submitButton.addEventListener('mouseover', function() {
  submitButton.style.backgroundColor = '#2b2b2b';
});

submitButton.addEventListener('mouseout', function() {
  submitButton.style.backgroundColor = '#000000';
});

// Adicionando o botão de envio ao formulário
form.appendChild(submitButton);

// Adicionando o formulário ao corpo do documento
document.body.appendChild(form);

// Adicionando evento de envio do formulário
form.addEventListener('submit', function(event) {
  event.preventDefault();

  var name = form.elements['name'].value;
  var email = form.elements['email'].value;
  var number = form.elements['number'].value;
  var message = form.elements['message'].value;

  // Simulação de envio do formulário (substitua por sua lógica de envio)
  setTimeout(function() {
    alert('Obrigado por entrar em contato, ' + name + '! Nós responderemos em breve.');
    form.reset();
  }, 1000);
  
});

// Cria um novo elemento 'footer'
let footer = document.createElement('footer');

// Adiciona algum conteúdo ao 'footer'
footer.innerHTML = '<p>© 2024 Minha Empresa</p>';

// Adiciona estilo ao 'footer'
footer.style.width = '100%';
footer.style.height = '60px';
footer.style.backgroundColor = '#333';
footer.style.color = '#fff';
footer.style.display = 'flex';
footer.style.justifyContent = 'center';
footer.style.alignItems = 'center';

// Adiciona o 'footer' ao final do corpo do documento
document.body.appendChild(footer);