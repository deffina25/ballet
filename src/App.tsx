import { useEffect, useReducer } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { AppContext } from './AppContext.tsx';
import { appReducer, initialState } from './reduser/Reduser.ts';
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { Donate } from './module/Donate/Donate.tsx';
import i18next from 'i18next';
import routes from '~react-pages';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const value = { state, dispatch };

  useEffect(() => {
    const currentLang = state?.lang || 'en';
    i18next.changeLanguage(currentLang);
  }, [state?.lang]);

  return (
    <BrowserRouter>
      <AppContext.Provider value={value}>
        <Donate />
        <Header />
        <main className="mt-[52px] w-full">
          <RouterView />
        </main>
        <Footer />
      </AppContext.Provider>
    </BrowserRouter>
  );
}

const RouterView = () => useRoutes(routes);

export default App;
