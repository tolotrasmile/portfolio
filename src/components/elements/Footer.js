import React from 'react'
import ThemeSwitcher from '../../contexts/ThemeSwitcher'
import Icon from '../../icons/Icon'
import './Footer.css'

export default () => {
  return (
    <footer className="footer">
      <ThemeSwitcher />
      <div className="social-icons">
        <Icon name="github" />
        <Icon name="twitter" />
        <Icon name="linkedin" />
        <Icon name="facebook" />
      </div>
    </footer>
  )
}
