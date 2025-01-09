import { appleImg, bagImg, searchImg } from "../utils"
import { navLists } from "../constants"

const Navbar = () => {
  return (
    // width of the full page, vertical padding 5px, horizontal padding 10px for small devices, display type flex, aligns child with space between them, vertically center 
    // display type, width full, self defined class
    // 
    // display type flex, allows this section to take all the space, if the max screen size is small, hide this div 
    // 
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
        <nav className="flex w-full screen-max-witdh">
            
            <img src={appleImg} alt = "Apple" width={14} height={18} />

            <div className = "flex flex-1 justify-center max-sm:hidden">
                { 
                    navLists.map( (nav) => {
                    return <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                        {nav}
                    </div>
                }) 
                }
            </div>

            <div className="flex items-baseline gap-7 max-sm:justtify-end max-sm:flex-1">
                <img src = {searchImg} alt="search" width={18} height={18} />
                <img src = {bagImg} alt="bag" width={18} height={18} /> 
            </div>
        </nav>
    </header>
  )
}

export default Navbar
