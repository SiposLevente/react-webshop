import Navbar from "./components/Navbar/Navbar.jsx"
import ShopContext from "./components/ShopContext.jsx"

function App() {

  return (

    <section>
      <ShopContext>
        <Navbar />
      </ShopContext>
    </section>

  )
}

export default App