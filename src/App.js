import Router from './shared/Router';
import GlobalStyle from 'src/shared/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Router />
      </div>
    </>
  );
}

export default App;
