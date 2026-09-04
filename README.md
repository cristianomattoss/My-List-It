# 🛒 Lista de Compras

Aplicação web para criação e gerenciamento de listas de compras, desenvolvida com React.

O projeto foi desenvolvido com o objetivo de praticar conceitos de gerenciamento de estado e compartilhamento de dados entre componentes utilizando Context API e useReducer.

## 🚀 Funcionalidades

- Criar listas de compras
- Adicionar produtos às listas
- Visualizar produtos de uma lista
- Visualizar uma lista completa
- Marcar produtos como comprados
- Limpar marcações dos produtos comprados
- Excluir produtos
- Persistência dos dados utilizando LocalStorage
- Navegação entre as telas da aplicação

## 🛠️ Tecnologias

- React
- JavaScript
- Vite
- Context API
- useReducer
- LocalStorage
- CSS
- React Icons

## 📂 Estrutura do projeto

```text
src/
├── components/
│   ├── CreateList.jsx
│   ├── List.jsx
│   ├── ListComplete.jsx
│   └── Start.jsx
│
├── context/
│   └── listContext.jsx
│
├── App.jsx
├── App.css
└── index.css