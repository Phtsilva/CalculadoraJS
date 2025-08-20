# Calculadora • Phtsilva

> Projeto 100% **autoral** — HTML, CSS e JavaScript puros.

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-6c23f5)](#)
[![Feito%20com](https://img.shields.io/badge/feito%20com-HTML%20%7C%20CSS%20%7C%20JS-281132)](#)
[![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-lightgrey)](#licenca)

---

## ✨ Visão Geral

Uma calculadora de operações básicas com visual *glassmorphism* e tipografia personalizada (Gugi + Montserrat). O foco foi aprender a estrutura de um app simples em JS: **estado**, **eventos** e **lógica de operações**.

> Este projeto foi criado do zero por mim (Phtsilva), sem templates prontos.

---

## 🚀 Demo

* **Live**: https://calculadora-seven-jet.vercel.app
* **Preview rápido**: abra `index.html` no navegador.

---

## 🧠 Funcionalidades

* [x] Operações: soma, subtração, multiplicação e divisão
* [x] Limpar (`C`) e apagar último dígito (`←`)
* [x] Exibição do valor atual
* [x] Animação de apresentação com texto rotativo
* [ ] Suporte a **teclado** (melhoria sugerida)
* [ ] **Decimais** (ponto ".") e tratamento de erros
* [ ] Histórico de operações
* [ ] Alternância **tema claro/escuro**

---

## 🧩 Tecnologias

* **HTML5**: estrutura de botões e display
* **CSS3**: glassmorphism, responsividade inicial, import de fontes do Google
* **JavaScript**: gerenciamento de estado (`buffer`, `runningTotal`, `previousOperator`) e eventos de clique

---

## 📁 Estrutura do Projeto

```text
calculadora/
├── index.html
├── style.css
└── script.js
```

---

## 🛠️ Como rodar localmente

1. **Clone** o repositório:

   ```bash
   git clone https://github.com/Phtsilva/CalculadoraJS.git
   cd CalculadoraJS
   ```
2. **Abra** o `index.html` no navegador (duplo clique já funciona).
3. Opcional: use uma extensão de **Live Server** no VS Code para *hot reload*.

---

## 📚 Como funciona (resumo técnico)

* **Estado**:

  * `buffer`: string que guarda o número que está sendo digitado.
  * `runningtotal`: acumulador das operações.
  * `previousOperator`: último operador pressionado.
* **Fluxo**:

  * Cada clique chama `buttonClick(value)`.
  * Se `value` é número → `handleNumber()` concatena no `buffer`.
  * Se é símbolo → `handleSymbol()` trata `C`, `←`, `=`, `+ - x ÷`.
  * Para operadores, `handleMath()` converte `buffer` em número, atualiza `runningtotal` e guarda `previousOperator`.
  * `flushOperation()` executa a operação pendente.

> **Obs.:** O código atual usa `parseInt`. Para decimais, troque por `parseFloat` e trate o ponto `.`.

---

## 📱 Responsividade

* Layout centralizado com **flexbox**
* `backdrop-filter` para efeito vidro
* Botões com `flex-basis` para formar linhas de grade

> Dica: ajuste tamanhos com `clamp()` e media queries para telas menores.

---
## 🧯 Acessibilidade (base)

* Display `.tela` pode usar `role="status"` + `aria-live="polite"` para leitores de tela.
* Botões devem ter `aria-label` descritivo quando o texto não for suficiente.

Exemplo:

```html
<section class="tela" role="status" aria-live="polite">0</section>
<button class="calc-btn" aria-label="apagar">←</button>
```
---

## 🤝 Contribuição

Sinta-se à vontade para abrir **issues** com sugestões ou bugs. PRs são bem-vindos — só mantenha o estilo de código simples.

---

## 📝 Licença

Este projeto está sob a **MIT License** — veja `LICENSE` para detalhes.

---

## 🙌 Autor

**Phtsilva** — Desenvolvedor iniciante, apaixonado por web e design. Projeto **totalmente autoral**.

* Portfólio: https://portifolio-seven-gray-84.vercel.app/
* LinkedIn: https://www.linkedin.com/in/phtsilva0

---

### ⭐ Se te ajudou

Deixe uma estrela no repositório — ajuda muito! :)
