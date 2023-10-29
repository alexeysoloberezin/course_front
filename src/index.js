import React from "react";
import { createRoot} from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import './styles/main.css'

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import { VisionUIControllerProvider } from "context";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const queryClient = new QueryClient()

root.render(<BrowserRouter>
  <VisionUIControllerProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </VisionUIControllerProvider>
</BrowserRouter>)

