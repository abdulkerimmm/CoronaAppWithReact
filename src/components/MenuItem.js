import PropTypes from 'prop-types'

const MenuItem = ({ title, active, whenClick }) => {
  
    return (
        <li>
            <a onClick={() => {
                whenClick(title)
          
            }}
                className={`block cursor-pointer border-0 py-2 pr-4 pl-3 ${active ? 'text-blue-800' : 'text-gray-400'} hover:text-sky-700`}
            >
                {title}
            </a>
        </li>
            
    )
}

MenuItem.propTypes = {
    title: PropTypes.string,
    active: PropTypes.bool,
    whenClick: PropTypes.func,
}

MenuItem.defaultProps = {
    title: "",
    active: false,
    whenClick: () => null,
}


export default MenuItem;










