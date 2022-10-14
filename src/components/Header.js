import Logo from "./Logo";
import { useState } from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

const Header = ({ activeTitle, onMenuChange }) => {
    const [_activeTitle, setActiveTitle] = useState(activeTitle)
   
    const [menuItems] = useState(
        [{
            title: "Ülkelere Göre Corone Değerleri",
            value: 1
        },
        {
            title: "Kayde Geçmiş Tüm Corona Değerleri",
            value: 2
        },
        {
            title: "Kıtalara Göre Corone Değerleri",
            value: 3
        }
        ]

    )
    return (
        <nav className="bg-gray-800 border-gray-200 px-2 py-2.5 ">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Logo />    
                
                <div className="w-auto block">
                    <ul className="flex flex-row  mt-4 font-semibold text-xs space-x-8 mt-0 ">
                        
                        {menuItems.map((item) => { 
                            return (
                                <MenuItem
                                    key={item.title} //not important    
                                    active={item.title === _activeTitle} 
                                    title={item.title} //title belong to MenuItem   component title is going to go MenuItem        
                                    whenClick={(title1) => { // sendTitletoHeader belongs to MenuItem it will take own value in MenuItem      // burada B ne analama geliyor                                 
                                        setActiveTitle(title1)       // then it will assingn to _activeTitle
                                        onMenuChange(item.value)

                                    }}
                                    
                                    
                                     />
                                 
                            )

                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
Header.propTypes = {
    activeTitle: PropTypes.string,
    onMenuChange: PropTypes.func,
}
Header.defaultProps = {
    activeTitle: 'Ülkelere Göre Corone Değerleri',
    onMenuChange: () => null,
}
export default Header;