import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './store';

export function App() {
  return (
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  );
}
