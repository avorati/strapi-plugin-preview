<!-- Logo (opcional, adicione se houver) -->
<p align="center">
  <!-- <img src="public/assets/strapi-plugin-preview-logo.png" alt="Strapi Plugin Preview Logo" width="180" /> -->
</p>

# Strapi Plugin Preview

Um plugin simples para Strapi que adiciona uma aba personalizada na sidebar do painel administrativo, exibindo uma tela de preview baseada em iframe. Permite configurar e visualizar rapidamente um site externo (por exemplo, o frontend do seu projeto) diretamente do admin do Strapi, facilitando a visualização de conteúdos em modo de rascunho.

---

## ✨ Funcionalidades

- ✅ Aba personalizada no painel do Strapi
- ✅ Preview de qualquer site externo via iframe
- ✅ Configuração fácil da URL de preview
- ✅ URL persistida no storage do plugin
- ✅ Adiciona `?status=DRAFT` à URL para indicar modo rascunho
- ✅ Suporte a TypeScript (frontend e backend)

---

## 📦 Instalação

Copie ou clone este plugin para a pasta `plugins` do seu projeto Strapi.

Instale as dependências (se necessário):

```bash
yarn install
```

Faça o build do plugin:

```bash
yarn build
```

Reinicie o Strapi.

---

## ⚙️ Configuração

Não é necessária configuração extra. O plugin adicionará uma nova aba chamada "Visualizar Rascunho" na sidebar do admin do Strapi.

---

## 🚀 Uso

1. No painel do Strapi, acesse a aba "Visualizar Rascunho".
2. Clique em "Configurar URL" e insira a URL do seu site de preview (ex: http://localhost:3000).
3. O site será carregado em um iframe, sempre com o parâmetro `?status=DRAFT`.

---

## 🗂️ Estrutura do Projeto

```
strapi-plugin-preview/
  admin/         # Frontend (React)
    src/
      pages/App.tsx      # Componente principal do preview
      components/        # Componentes de UI
      utils/             # Utilitários
      translations/      # Traduções
  server/        # Backend (Strapi)
    src/
      controllers/       # Controllers das rotas
      routes/            # Definição das rotas
      services/          # Lógica de negócio e persistência
  package.json   # Metadados e dependências do plugin
  README.md      # Este arquivo
```

---

## 🛠️ Desenvolvimento

```bash
# Instale as dependências
yarn install

# Faça o build do plugin
yarn build

# Modo watch para desenvolvimento
yarn watch

# Checagem de tipos TypeScript
yarn test:ts:front
yarn test:ts:back
```

---

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor:

1. Faça um fork deste repositório
2. Crie um branch para sua feature (`git checkout -b feature/sua-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona sua feature'`)
4. Faça push para seu branch (`git push origin feature/sua-feature`)
5. Abra um Pull Request

---

## 📄 Licença

Licença MIT - veja [LICENSE](LICENSE) para detalhes.

---

## 📞 Suporte

- 🐛 Issues: [GitHub Issues](https://github.com/avorati/strapi-plugin-preview/issues)
- 💬 Discussões: [GitHub Discussions](https://github.com/avorati/strapi-plugin-preview/discussions)
- 📧 Email: seu.email@exemplo.com 