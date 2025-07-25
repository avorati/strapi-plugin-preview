# Development Guide

This document explains how to develop and modify the Strapi Preview plugin.

## Dependency Structure

### For Production (when installed as a dependency)
- **`dependencies`**: Only plugin-specific dependencies
  - `minimatch`: For URL pattern matching
  - `lucide-react`: For React icons

- **`peerDependencies`**: Dependencies that should be provided by the main project
  - `@strapi/strapi`: Strapi core
  - `@strapi/design-system`: Strapi UI components
  - `react`, `react-dom`: React and React DOM
  - `react-intl`: Internationalization
  - `react-router-dom`: Routing
  - `styled-components`: Styling

### For Local Development
- **`devDependencies`**: All dependencies needed for development
  - Includes specific versions of all dependencies
  - Allows independent development

## Available Scripts

```bash
# Development
yarn watch          # Watch mode for development
yarn watch:link     # Watch with symbolic link
yarn build          # Production build
yarn verify         # Verify if the plugin is correct

# TypeScript
yarn test:ts:front  # Check frontend types
yarn test:ts:back   # Check backend types

# Local development
yarn dev:install    # Install dependencies and build
yarn dev:clean      # Clean and reinstall everything
```

## Development Workflow

### 1. Local Development
```bash
# Clone the repository
git clone https://github.com/avorati/strapi-plugin-preview.git
cd strapi-plugin-preview

# Install dependencies
yarn install

# Run in watch mode
yarn watch
```

### 2. Testing in a Strapi Project
```bash
# In another terminal, in a Strapi project
cd /path/to/strapi-project

# Use link mode for development
yarn link /path/to/strapi-plugin-preview

# Restart Strapi
yarn develop
```

### 3. Publishing
```bash
# Production build
yarn build

# Publish (prepublishOnly script will build automatically)
yarn publish
```

## Project Structure

```
strapi-plugin-preview/
├── admin/                 # Frontend (React)
│   ├── src/
│   │   ├── pages/        # Admin pages
│   │   ├── components/   # React components
│   │   ├── utils/        # Utilities
│   │   └── translations/ # Translations
│   └── tsconfig.json
├── server/               # Backend (Strapi)
│   ├── src/
│   │   ├── controllers/  # Route controllers
│   │   ├── routes/       # Route definitions
│   │   └── services/     # Business logic
│   └── tsconfig.json
├── package.json          # Plugin configuration
├── .npmignore           # Files excluded from package
└── README.md            # Main documentation
```

## Best Practices

1. **Always test in a real Strapi project** before publishing
2. **Use watch mode** during development
3. **Check TypeScript types** before committing
4. **Keep peerDependencies updated** with compatible versions
5. **Test clean installation** of the plugin before publishing

## Troubleshooting

### Problem: Plugin doesn't appear in admin
- Check if the build was done correctly
- Confirm the plugin is listed in the Strapi project's `package.json`
- Restart the Strapi server

### Problem: Dependency errors
- Run `yarn dev:clean` to clean and reinstall
- Check if peerDependency versions are compatible

### Problem: Build fails
- Check if all dependencies are installed
- Run `yarn test:ts:front` and `yarn test:ts:back` to check types 