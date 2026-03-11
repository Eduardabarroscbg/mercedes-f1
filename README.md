# 🏎️ Mercedes-AMG F1 — Landing Page

Site fan-made da equipe Mercedes-AMG Petronas F1, construído com React, Three.js e GSAP.

![Mercedes AMG F1](https://img.shields.io/badge/Mercedes--AMG_F1-00D2BE?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss)
![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js)

---

## ✨ Funcionalidades

- **Hero animado** com GSAP — título e botões com entrada suave
- **Visualizador 3D do carro** — modelo W14 interativo, arrastar para girar
- **Seção de Performance** — especificações técnicas da equipe
- **Perfil dos Pilotos** — George Russell e Kimi Antonelli com páginas individuais
- **Campeonato 2026** — classificação de pilotos e construtores em tempo real via API
- **Calendário de Corridas** — temporada 2026 com status de cada GP
- **Parceiros** — marcas parceiras da equipe
- **Navbar com scroll suave** — navegação entre seções
- **Footer completo** — links e redes sociais oficiais
- **Páginas individuais dos pilotos** — com stats, bio e animações

---

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| [React 18](https://react.dev/) | Framework principal |
| [Vite](https://vitejs.dev/) | Build tool |
| [Tailwind CSS v4](https://tailwindcss.com/) | Estilização |
| [GSAP](https://gsap.com/) + ScrollTrigger | Animações |
| [Three.js](https://threejs.org/) | Renderização 3D |
| [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) | React + Three.js |
| [@react-three/drei](https://github.com/pmndrs/drei) | Helpers 3D |
| [React Router DOM](https://reactrouter.com/) | Navegação entre páginas |
| [Ergast API](https://api.jolpi.ca/) | Dados reais de F1 |

---

## 🚀 Como rodar localmente

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/mercedes-f1.git

# Entre na pasta
cd mercedes-f1

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse **http://localhost:5173** no navegador.

---

## 📁 Estrutura do Projeto

```
mercedes-f1/
├── public/
│   ├── images/
│   │   ├── Mercedes-logo.png
│   │   ├── George_Russell.webp
│   │   └── Kimi_Antonelli-2.webp
│   └── models/
│       └── car.glb
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── CarViewer.jsx
│   │   ├── Performance.jsx
│   │   ├── Drivers.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Races.jsx
│   │   ├── Partners.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   └── DriverPage.jsx
│   ├── constants/
│   │   └── index.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
└── package.json
```

---

## 🌐 Deploy

O projeto está configurado para deploy no **Vercel**:

1. Faça push para o GitHub
2. Importe o repositório no [Vercel](https://vercel.com)
3. Clique em **Deploy**

---

## 📡 API de Dados

Os dados de classificação são obtidos em tempo real via **[Jolpica Ergast API](https://api.jolpi.ca/)**:

- Classificação de pilotos: `https://api.jolpi.ca/ergast/f1/2026/driverstandings/`
- Classificação de construtores: `https://api.jolpi.ca/ergast/f1/2026/constructorstandings/`

Os dados são atualizados automaticamente após cada corrida.

---

## ⚠️ Aviso

Este é um projeto **fan-made** sem fins comerciais. Todas as marcas, logos e nomes são propriedade de seus respectivos donos.

- Mercedes-AMG Petronas F1 Team © Mercedes-Benz AG
- Modelo 3D W14 por Redgrund via Sketchfab (CC Attribution-NonCommercial-NoDerivs)

---

## 👨‍💻 Autor

Feito com ❤️ e muita F1.

---

*"Construída para vencer. Projetada para o futuro."*