# Mini-Loja em React  (Lojinha)

Este é um projeto de demonstração que implementa uma mini-loja de produtos em React utilizando quatro metodologias de estilização diferentes. O objetivo é apresentar a mesma interface em quatro versões distintas, permitindo uma comparação direta das abordagens: CSS Global, CSS Modules, Tailwind CSS e Styled-components.

O sistema inclui funcionalidades como alternância de tema (claro/escuro) com persistência, um layout de grid de produtos responsivo e um estado de carregamento com Skeleton.

## ✨ Funcionalidades

Quatro Versões de Estilização: Alternância entre as versões com o clique de um botão no Navbar.

Grid de Produtos Responsivo: O layout se adapta a diferentes tamanhos de tela.

Tema Claro/Escuro: Alternância de tema com persistência local.

Estado de Carregamento: Exibição de um Skeleton enquanto os produtos são carregados (com atraso simulado).

Componentes Reutilizáveis: Navbar, ProductCard, Button e Skeleton.

Boas Práticas: Implementação de acessibilidade (aria-*, focus ring), transições suaves e uso de tokens de design.

## 🚀 Tecnologias Utilizadas
```
React: Biblioteca JavaScript para a interface.

Vite: Ferramenta de build e servidor de desenvolvimento.

TypeScript: Linguagem para tipagem estática.

npm: Gerenciador de pacotes.
```

## Métodos de Estilização Demonstrados

```
01-css-global/: CSS tradicional e global.

02-css-modules/: CSS com escopo local.

03-tailwind/: Framework de classes utilitárias.

04-styled-components/: CSS-in-JS.
```

## 💻 Como Rodar Localmente

### Siga estas instruções para configurar e executar o projeto na sua máquina.

```
Pré-requisitos
Node.js (versão 18 ou superior)

npm (gerenciador de pacotes)

Instalação
Clone o repositório para sua máquina local:

Bash

git clone https://github.com/Marcos-Lopes117/atividade6-maisprati
Navegue até a pasta do projeto:

Bash

cd lojinha
Instale as dependências:

Bash

npm install
Executando o Projeto
Para iniciar o servidor de desenvolvimento e visualizar o projeto, rode o seguinte comando:

Bash

npm run dev
O aplicativo estará disponível em http://localhost:5173.
```

## 📂 Estrutura do Projeto
O projeto é organizado para manter cada versão da loja isolada.

/lojinha
├── 01-css-global/          # Versão com CSS Global

├── 02-css-modules/         # Versão com CSS Modules

├── 03-tailwind/            # Versão com Tailwind CSS

├── 04-styled-components/   # Versão com Styled-components

├── src/

│   ├── assets/             # Imagens e outros recursos

│   ├── data/               # Dados mockados dos produtos

│   ├── types/              # Definições de tipo (TypeScript)

│   └── App.tsx             # Componente principal para alternar as versões

└── ... (outros arquivos de configuração)

## 🎨 Como Alterar as Versões

As quatro versões da loja podem ser acessadas diretamente pelos botões de 1 a 4 no Navbar da aplicação, permitindo uma visualização e comparação instantânea de cada metodologia de estilização.
