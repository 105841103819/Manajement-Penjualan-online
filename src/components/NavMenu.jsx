import { Link } from "react-router-dom";
import PropTypes from "prop-types"

export default function NavMenu({children, address}) {
  return (
    <li>
      <Link to={address}>{children}</Link>
    </li>
  )
}
NavMenu.proptypes = {
  children: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired
}


