import { Search, ShoppingCart, Users, User} from "lucide-react"
import logo from "../assets/J33Logo.png"

export default function NavBar(){

    return(
        <>
        <section className="flex items-center justify-between">
            <div>
                <img src={logo} alt="logo"  className="w-[80px] h-[60px]"/>
            </div>
             <div className="flex items-center border border-[#b6349a] rounded-3xl w-[600px] p-2 gap-2">
                <Search/>
                <input type="text"
                placeholder="Search For Product" className="outline-0"
                 />
            </div>
            <div className="flex items-center border border-black bg-[#fef5fd] rounded-3xl  p-2 gap-1">
                <ShoppingCart/>
                <p>Cart</p>  
            </div>
            <div className="flex items-center gap-3">
                <button className="flex items-center  border border-[#b6349a] rounded-3xl  p-2 gap-1">
                    <User/>
                   <p>Login</p>
                </button>

                <button className="flex items-center  border border-[#b6349a] rounded-3xl  p-2 gap-1">
                    <Users/>
                   <p>Sign Up</p>
                </button>
            </div>
        </section>
        </>
    )
}