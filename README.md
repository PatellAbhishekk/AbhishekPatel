# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```bash
npm create vite@latest
```

## Comparison with Vite + React

| Feature    | React + Vite | React + Vite |
| ---------- | ------------ | ------------ |
| HMR        | ✅           | ✅           |
| TypeScript | ✅           | ✅           |
| ESLint     | ✅           | ✅           |
| Prettier   | ✅           | ✅           |
| Externals  | ✅           | ✅           |

## Robustness

### `vite dev` stable

`vite dev` does not restart the server when syntax errors occur in your code.
