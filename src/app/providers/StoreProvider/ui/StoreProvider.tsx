import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSheme } from '../config/StateSheme';
interface StoreProviderProps {
  children?: ReactNode;
  inititalState?: StateSheme;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const {
    children,
    inititalState,
  } = props;

  const store = createReduxStore(inititalState as StateSheme);;

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
