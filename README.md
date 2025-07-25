<!-- Logo (optional, add if available) -->
<p align="center">
  <!-- <img src="public/assets/strapi-plugin-preview-logo.png" alt="Strapi Plugin Preview Logo" width="180" /> -->
</p>

# Strapi Plugin Preview

A simple Strapi plugin that adds a custom sidebar tab with an iframe-based preview screen. Configure and load external site previews directly from the Strapi admin.

---

## ✨ Features

- ✅ Custom sidebar tab in Strapi admin
- ✅ Iframe-based preview of any external site
- ✅ Easily configurable preview URL
- ✅ URL persisted in Strapi plugin store
- ✅ Adds `?status=DRAFT` to preview URL for draft indication
- ✅ TypeScript support (frontend and backend)

---

## 📦 Installation

Copy or clone this plugin into your Strapi project's `plugins` folder.

Install dependencies (if needed):

```bash
yarn install
```

Build the plugin:

```bash
yarn build
```

Restart Strapi.

---

## ⚙️ Configuration

No extra configuration is required. The plugin will add a new tab called "Visualizar Rascunho" (Preview Draft) in the Strapi admin sidebar.

---

## 🚀 Usage

1. Go to the "Visualizar Rascunho" tab in Strapi admin.
2. Click "Configurar URL" (Configure URL) and enter the URL of your frontend or preview site (e.g., http://localhost:3000).
3. The site will be loaded in an iframe, always with the `?status=DRAFT` parameter.

---

## 🗂️ Project Structure

```
strapi-plugin-preview/
  admin/         # Frontend (React)
    src/
      pages/App.tsx      # Main preview component
      components/        # UI components
      utils/             # Utilities
      translations/      # Translations
  server/        # Backend (Strapi)
    src/
      controllers/       # Route controllers
      routes/            # Route definitions
      services/          # Business logic and persistence
  package.json   # Plugin metadata and dependencies
  README.md      # This file
```

---

## 🛠️ Development

```bash
# Install dependencies
yarn install

# Build the plugin
yarn build

# Watch mode for development
yarn watch

# TypeScript checks
yarn test:ts:front
yarn test:ts:back
```

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork this repository
2. Create a branch for your feature (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

## 📞 Support

- 🐛 Issues: [GitHub Issues](https://github.com/avorati/strapi-plugin-preview/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/avorati/strapi-plugin-preview/discussions)
- 📧 Email: your.email@example.com 