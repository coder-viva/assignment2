import { NavLink } from "react-router-dom"

function Home (){
    return(
      <>
     
      <h1> welcome to tobiks cake,home of amazing treats</h1>


      


        <section className="navigator">
        <NavLink to="Contact">
Contact Us
        </NavLink>
        </section>

        <section className="navigator">
        <NavLink to="ShopNow">
Shop Now
        </NavLink>
        </section>

        <section className="navigator">
        <NavLink to="TheChef">
The chef
        </NavLink>
        </section>

        <section className="navigator">
        <NavLink to="Users">
Users
        </NavLink>
        </section>
      </>

     
    )
    
  }

  
  export default Home