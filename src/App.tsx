import './App.css'
import MarketplaceHome from "./pages/marketplace/home";
import Layout from "./layout";
import SearchPage from "./pages/marketplace/search";

function App() {

    return (
        <div>
            <Layout>
                {/*<MarketplaceHome/>*/}
                <SearchPage />
            </Layout>
        </div>
    )
}

export default App
