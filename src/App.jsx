import Navbar from "./components/Navbar/Navbar.jsx"
import ShopContext from "./components/ShopContext.jsx"
import Sidebar from "./components/Sidebar/Sidebar.jsx"

function App() {

  return (

    <section>
      <ShopContext>
        <Navbar />
        <Sidebar />
      </ShopContext>
    </section>

  )
}

export default App