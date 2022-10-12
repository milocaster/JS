import './App.css';
import AppHeader from './components/AppHeader'
import tattoos from './components/data/tattoo';
import TattooItem from './components/TattooItem';

function App() {
    const tattooElements = tattoos.map((tattoo, index) => {
        return <TattooItem key={index} tattoo={tattoo} />;
    })
    return (
        <div className="app">
            <AppHeader />
            <div className="app-grid">
                {tattooElements}
            </div>

        </div>
    );
}

export default App;
