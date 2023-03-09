import './App.scss';

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>Wallet application</h1>
            <form className="login">
                <label className="login__lab">Login</label>
                <input className="login__input" type="text" placeholder="User name" />
                <label className="login__lab">PIN</label>
                <input className="login__input" type="number" placeholder="PIN" maxLength={4} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;
