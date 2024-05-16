import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./CartContext";
import { FavoritesProvider } from "./FavoritesContext";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <FavoritesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FavoritesProvider>
  </StrictMode>
);
