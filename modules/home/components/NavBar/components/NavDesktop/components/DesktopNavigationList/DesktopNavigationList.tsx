import NavButton from '../../../NavButton';
import { motion } from "framer-motion";
import links from '../../../../constants/links';

const variants={
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};


const DesktopNavigationList=() => {
  return (
    <motion.ul variants={variants} className='p-6 top-24 w-56 left-0'>
      {links.map((link) => (
        <NavButton key={link.to} to={link.to} className='border border-white '>
          {link.children}
        </NavButton>
      ))}
    </motion.ul>
  )
}

export default DesktopNavigationList