import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.button}>
        <HomeIcon sx={{ fontSize: 100 }} />
      </Link>
    </header>
  );
};

export { Header };
