import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';

const Logo = () => {
  return (
    <div className='py-8 pl-0.5 lg:px-2 lg:py-4'>
         <Link to="/" className="hover:opacity-90 transition-opacity">
      <img
        src={logo}
        width={100}
        height={100}
        alt="Dementia Association of Zimbabwe (DAZ) Logo"
        className="h-12 w-auto rounded-full"
      />
    </Link>
    </div>
 
  );
};

export default Logo;