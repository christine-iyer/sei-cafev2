import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp; | &nbsp;
      <Link to="/fruits">Fruit Page</Link>
      &nbsp; | &nbsp;
      <Link to="/login">Login Page</Link>

    </nav>
  );
}