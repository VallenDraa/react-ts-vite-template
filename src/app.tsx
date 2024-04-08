import { RouterProvider } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { router } from './router';
import { store } from './store';

export const App = () => (
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  )
