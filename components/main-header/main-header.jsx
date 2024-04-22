import Link from 'next/link'
import MainHeaderBackground from './main-header-background'
import NavLink from './nav-link'
import appLogo from '@/assets/logo.png'
import classes from './main-header.module.css'
import Image from 'next/image'

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={appLogo} alt="Food with plate" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default MainHeader
