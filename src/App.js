import GlobalStyle from 'src/shared/GlobalStyle';
import Router from './shared/Router';
import Footer from './components/Footer';

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
