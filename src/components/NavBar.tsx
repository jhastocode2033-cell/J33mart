import { Search, ShoppingCart, Users, User} from "lucide-react"
import logo from "../assets/J33Logo.png"
import { useEffect, useState } from "react"
import FetchAPI from "../api/FetchAPI"

export default function NavBar(){
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!search.trim()) return;

        const productsearch = async ( ) => {
                setLoading(true);
            try {
                const data =
                 await FetchAPI(`amz/amazon-search-by-keyword-asin?domainCode=com&keyword=${encodeURIComponent(search)}&page=1&excludeSponsored=false&sortBy=relevanceblender&withCache=true`)

                 console.log(data)
            } catch (error) {
                console.error(error)
            }finally {
      setLoading(false);
    }
        }
        productsearch();
    }, [search])



    return(
        <>
        <section className="flex items-center justify-between">
            <div>
                <img src={logo} alt="logo"  className="w-[80px] h-[60px]"/>
            </div>
             <div className="flex items-center border border-[#b6349a] rounded-3xl w-[600px] p-2 gap-2 hover:bg-[#fff5f5]">
                <Search/>
                <input type="text"
                placeholder="Search For Product"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="outline-0 me-auto"


                 />
                {loading && (
                <div className="w-5 h-5 border-2 border-[#b6349a] border-t-transparent rounded-full animate-spin shrink-0" />
            )}
            </div>
            <div className="flex items-center border border-black bg-[#fef5fd] rounded-3xl  p-2 gap-1 hover:bg-[#b6349a] hover:text-white">
                <ShoppingCart/>
                <p>Cart</p>  
            </div>
            <div className="flex items-center gap-3">
                <button className="flex items-center  border border-[#b6349a] rounded-3xl  p-2 gap-1 hover:bg-[#b6349a] hover:text-white">
                    <User/>
                   <p>Login</p>
                </button>

                <button className="flex items-center  border border-[#b6349a] rounded-3xl  p-2 gap-1 hover:bg-[#b6349a] hover:text-white">
                    <Users/>
                   <p>Sign Up</p>
                </button>
            </div>
        </section>
        </>
    )
}