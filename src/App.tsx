import RouterConfig from './routes';
import GlobalStyle from './styles/global';
import Theme from './styles/theme';

function App() {
  return (
    <>
      <Theme>
        <RouterConfig />
      </Theme>
      <GlobalStyle />
    </>
  );
}

export default App;
