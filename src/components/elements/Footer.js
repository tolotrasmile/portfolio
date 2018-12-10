import React, { useContext } from 'react'
import { ReactComponent as Facebook } from '../../icons/facebook.svg'
import { ReactComponent as Twitter } from '../../icons/twitter.svg'
import { ReactComponent as LinkedIn } from '../../icons/linkedin.svg'
import { ReactComponent as GitHub } from '../../icons/github.svg'
import ThemeContext from '../../contexts/Theme'
import ThemeSwitcher from '../../contexts/ThemeSwitcher'
import './Footer.css'

export default () => {
  const { primary } = useContext(ThemeContext)

  const style = { width: 30, height: 30, padding: '0.5em', color: primary }
  return (
    <footer className="footer">
      <ThemeSwitcher />
      <div className="social-icons">
        <div className="social">
          <GitHub style={style} />
        </div>
        <div className="social">
          <Twitter style={style} />
        </div>
        <div className="social">
          <LinkedIn style={style} />
        </div>
        <div className="social">
          <Facebook style={style} />
        </div>
      </div>
    </footer>
  )
}
