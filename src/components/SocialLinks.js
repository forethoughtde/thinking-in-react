import React from 'react'
import socialLinks from '../mocks/socialLinks'
import SocialLink from './SocialLink/SocialLink'

const SocialLinks = () => {
  const links = socialLinks.map(link => <SocialLink key={link.href} href={link.href} iconClass={link.iconClass} />)

  return (
    <ul className="list-inline">
      {links}
    </ul>
  )
}

export default SocialLinks
