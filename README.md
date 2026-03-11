<div align="center">
<h1 align="center">🏎️ Mercedes-AMG F1 — Landing Page</h1>
</div>

![Project Preview](https://github.com/Eduardabarroscbg/mercedes-f1/blob/main/public/images/preview.png)

Uma landing page animada e funcional da equipe **Mercedes-AMG Petronas F1**, construída para explorar **modelagem 3D no desenvolvimento web** usando **Three.js**, **GSAP** e React moderno, com dados reais da temporada via API.

## 📌 Sobre
Este projeto é uma implementação **focada em aprendizado** de uma landing page de equipe de Fórmula 1, explorando:
- **Integração e animação de modelos 3D** com Three.js e React Three Fiber.
- **Transições suaves** e animações baseadas em scroll usando GSAP.
- **Dados reais de F1** via Ergast API — classificação de pilotos e construtores.
- **Navegação entre páginas** com React Router DOM.
- **Design responsivo** com Tailwind CSS v4.

## 🛠 Tech Stack

- [![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/) - Biblioteca principal para a interface.
- [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Linguagem de programação utilizada.
- [![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/) - Animações suaves e poderosas.
- [![Three.js](https://img.shields.io/badge/-Three.js-27136A?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/) - Biblioteca 3D para renderização no browser.
- [![Tailwind CSS](https://img.shields.io/badge/Tailwind-ffffff?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8)](https://tailwindcss.com/) - Framework CSS utilitário v4.
- [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/) - Build tool de próxima geração.
- [![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/) - Navegação entre páginas.

## 🚀 Funcionalidades
- 🏎️ **Visualizador 3D interativo** do carro Mercedes W14 — arrastar para girar.
- 🏆 **Classificação em tempo real** de pilotos e construtores via Ergast API.
- 👨‍✈️ **Páginas individuais dos pilotos** — George Russell e Kimi Antonelli com stats e bio.
- 📅 **Calendário da temporada 2026** com status de cada GP.
- 🤝 **Seção de parceiros** — Petronas, AMD, IWC, Qualcomm, INEOS e Nubank.
- 📱 **Layout responsivo** para todos os tamanhos de tela.
- ✨ **Animações GSAP** com ScrollTrigger em todas as seções.

## 📂 Estrutura do Projeto
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── CarViewer.jsx
│   ├── Performance.jsx
│   ├── Drivers.jsx
│   ├── Dashboard.jsx
│   ├── Races.jsx
│   ├── Partners.jsx
│   └── Footer.jsx
├── pages/
│   └── DriverPage.jsx
├── constants/
│   └── index.js
├── App.jsx
├── main.jsx
└── index.css
public/
├── images/
│   ├── Mercedes-logo.png
│   ├── George_Russell.webp
│   └── Kimi_Antonelli-2.webp
└── models/
    └── car.glb
```

## 🔧 Como rodar

>[!IMPORTANT]
>Você precisará ter o [Node.js](https://nodejs.org/) instalado.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Eduardabarroscbg/mercedes-f1.git
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Rode o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
4. Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## 📡 API de Dados

Os dados de classificação são obtidos em tempo real via **[Jolpica Ergast API](https://api.jolpi.ca/)**:

- Classificação de pilotos: `https://api.jolpi.ca/ergast/f1/2026/driverstandings/`
- Classificação de construtores: `https://api.jolpi.ca/ergast/f1/2026/constructorstandings/`

## 🎯 O que aprendi
- Experiência prática com **Three.js** e React Three Fiber para modelos 3D.
- Domínio do **GSAP** com ScrollTrigger para animações complexas.
- Consumo de **APIs REST** com fetch e tratamento de estados de carregamento.
- **Roteamento** no React com React Router DOM.
- Fortalecimento de habilidades de **design responsivo** com Tailwind CSS v4.

## ⚠️ Aviso

Este é um projeto **fan-made** sem fins comerciais. Todas as marcas, logos e nomes são propriedade de seus respectivos donos.

- Mercedes-AMG Petronas F1 Team © Mercedes-Benz AG
- Modelo 3D W14 por Redgrund via Sketchfab (CC Attribution-NonCommercial-NoDerivs)

## 🔗 Links
- [Live Demo](https://mercedes-f1.vercel.app)
- **GitHub:** [@Eduardabarroscbg](https://github.com/Eduardabarroscbg)