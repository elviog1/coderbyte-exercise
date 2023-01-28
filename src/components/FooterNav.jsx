import React from 'react'
import '../styles/Footer.css'
export default function FooterNav({title,links}) {
    
  return (
    <div>
        <h3>{title}</h3>
        <ul className='footer-ul'>
        {links.map(item => (
            <li className='links' key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}
