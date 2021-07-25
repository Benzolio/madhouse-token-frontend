import styles from './styles.module.scss';
import { LogoPng } from '../../assets/index.js';
import { Text } from '../index.js';
import { Link } from 'react-router-dom';

const NavLink = (props) => {
  return (
    <Link to={{pathname: props.to}}>
      <Text size={1.6}>{props.text}</Text>
    </Link>
  )
}

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.title_container}>
          <img src={LogoPng} className={styles.logo} alt='logo'/>
          <Text size={4.5} _style='italic' margin='0 0 0 0.15em' weight='bold' family='Barlow Condensed'>MADHOUSE</Text>
        </div>
        <div className={styles.nav_links_container}>
          <NavLink to='/' text='Home'/>
          <NavLink to='/about' text='About'/>
          <NavLink to='/charts' text='Charts'/>
          <NavLink to='/whitepaper' text='Whitepaper'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
