import Board from './components/Board';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <main className="flexbox">
        <Board id="board-1" className="board">
          <Card id="card-1" className="card" draggable="true">
            <p>Card One</p>
          </Card>
        </Board>
        <Board id="board-1" className="board">
          <Card id="card-2" className="card" draggable="true">
          <img src="/img/dimitry-b-d6awfgWt3yI-unsplash.jpg" alt="" draggable="true"/>
          
          </Card>
        </Board>
      </main>
    </div>
  );
}

export default App;
