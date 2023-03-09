import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Wallet application</h1>
            <form>
                <label>Login</label>
                <input type="text" placeholder="User name" />
                <label>PIN</label>
                <input type="number" placeholder="PIN" maxLength={4} />
            </form>
        </div>
    );
}

export default App;
