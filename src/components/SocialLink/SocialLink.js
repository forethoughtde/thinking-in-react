import React from 'react'

const SocialLink = ({ href, iconClass }) => {
  return (
    <li>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className="btn-social btn-outline"
      >
        <i className={`fa fa-fw fa-${iconClass}`}/>
      </a>
    </li>
  )
}

export default SocialLink