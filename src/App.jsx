import Navbar from "./components/Navbar/Navbar.jsx"
import { ShopContext, ShoeContext } from "./components/ShopContext.jsx"
import Sidebar from "./components/Sidebar/Sidebar.jsx"

function App() {

  return (

    <section>
      <ShopContext>
        <Navbar />
        <ShoeContext>
          <Sidebar />
        </ShoeContext>
      </ShopContext>
    </section>

  )
}

export default App