# Strapi Plugin Preview

A Strapi plugin that allows you to view the frontend in preview mode.

## Installation

```bash
yarn add @avorati/strapi-plugin-preview
# or
npm install @avorati/strapi-plugin-preview
```

## Configuration

The plugin uses `peerDependencies` to avoid duplication of common Strapi dependencies. This means:

- **Plugin-specific dependencies** (`minimatch`, `lucide-react`) are installed automatically
- **Common Strapi dependencies** (`react`, `@strapi/strapi`, etc.) are reused from the main project
- **Local development** still works with all dependencies in `devDependencies`

### For local development

If you want to modify or test the plugin locally:

```bash
# Clone the repository
git clone https://github.com/avorati/strapi-plugin-preview.git
cd strapi-plugin-preview

# Install development dependencies
yarn install

# Run in watch mode
yarn watch
```

## Usage

After installation, the plugin will be available in the Strapi admin panel.

## Dependency Structure

- **`dependencies`**: Only plugin-specific dependencies
- **`peerDependencies`**: Dependencies that should be provided by the main project
- **`devDependencies`**: All dependencies needed for local development

## License

MIT 