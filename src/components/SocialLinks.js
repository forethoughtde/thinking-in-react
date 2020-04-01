import React from 'react'
import socialLinks from '../mocks/socialLinks'
import SocialLink from './SocialLink'

const SocialLinks = () => {
  const links = socialLinks.map(link => <SocialLink href={link.href} iconClass={link.iconClass} />)

  return (
    <ul className="list-inline">
      {links}
    </ul>
  )
}

export default SocialLinks