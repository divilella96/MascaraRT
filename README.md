
# Máscara de Código com HTML, CSS e JavaScript

Este projeto é um aplicativo simples que formata automaticamente um código numérico seguindo uma máscara específica. O código é separado em blocos para facilitar a leitura, de acordo com o formato exibido na imagem de exemplo.

---

## 🛠️ Funcionalidades

- O usuário insere um código numérico longo.
- O código é formatado automaticamente no formato:
  ```
  198631 2024-11-20 18:28 0004 0005 0805
  ```
- Validação para garantir que o código segue o formato correto.

---

## 📋 Tecnologias Utilizadas

- **HTML**: Para a estrutura da página.
- **CSS**: Para estilização da interface.
- **JavaScript**: Para aplicação da máscara e manipulação do DOM.

---

## 📂 Estrutura do Projeto

```
.
├── index.html     # Estrutura principal do aplicativo
├── style.css      # Estilização da interface
├── script.js      # Lógica de formatação do código
└── README.md      # Documentação do projeto
```

---

## 🚀 Como Usar

1. Clone este repositório ou copie os arquivos para sua máquina local.
2. Abra o arquivo `index.html` em um navegador.
3. Digite ou cole um código no campo de entrada.
4. Veja o código formatado em tempo real na seção de saída.

---

## 🔍 Detalhes Técnicos

- **Máscara Aplicada**: 
  O código inserido é formatado no seguinte padrão:
  - Os **6 primeiros dígitos** são separados por um espaço.
  - Os próximos **8 dígitos** são formatados como uma data (AAAA-MM-DD).
  - Os próximos **4 dígitos** são formatados como um horário (HH:MM).
  - Três blocos de **4 dígitos** cada são separados por espaços no final.
  
  **Exemplo:**
  ```
  Entrada: 123456202411201828000400050805
  Saída:   123456 2024-11-20 18:28 0004 0005 0805
  ```

- O script valida o comprimento do código para garantir o formato correto.

---

## 🧪 Personalização

Se você precisar ajustar o formato, edite o **arquivo `script.js`**:
- A máscara e o formato estão definidos pela expressão regular no `regex` e pelo método `.replace`.

---

## 🤝 Contribuições

Sinta-se à vontade para contribuir:
1. Faça um fork do repositório.
2. Crie uma branch para suas alterações (`git checkout -b feature/nova-funcionalidade`).
3. Envie um Pull Request.

---

## 📄 Licença

Este projeto está sob a licença MIT. Você pode usá-lo e modificá-lo livremente.

---

Feito com ❤️ por [Diego Vilela Rodrigues]. 😊
