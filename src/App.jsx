import MainContent from "./components/MainContent/MainContent.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import { ShopContext, ShoeContext, FilterContext } from "./components/ShopContext.jsx"
import Sidebar from "./components/Sidebar/Sidebar.jsx"

function App() {

  return (

    <section>
      <ShopContext>
        <FilterContext>
          <Navbar />
          <ShoeContext>
            <Sidebar />
            <MainContent />
          </ShoeContext>
        </FilterContext>
      </ShopContext>
    </section>

  )
}

export default App