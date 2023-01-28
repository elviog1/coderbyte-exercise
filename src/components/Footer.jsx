import React from 'react'
import FooterNav from './FooterNav'
import '../styles/Footer.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
    const linksCompany = ["About us","FAQ","Partnerships","Sustainability","Blog"]
    const linksHelp = ["Place a ticket","Track your order","Help center"]
    const linksInformation = ["Contact us","Live chat","Privacy","Terms of use"]

    const FooterContact = ()=>{
        return (
            <div className='footerContact-container'>
                <img className='logo-footer' alt='logo' src='https://coderbytestaticimages.s3.amazonaws.com/consumer-v2/nav/coderbyte_logo_digital_multi_light.png' />
                <p>We sell custom products for all your needs. Packs and bulk products that you will enjoy</p>
                <div className='phone-div'>
                    <LocalPhoneIcon/>
                    <span> +1-202-555-0129</span>
                </div>
                <div className='div-social'>
                    <FacebookSharpIcon className='social-icon' />
                    <TwitterIcon className='social-icon' />
                    <InstagramIcon className='social-icon' />
                    <LinkedInIcon className='social-icon' />
                    <YouTubeIcon className='social-icon' /> 
                </div>
            </div>
        )
    }
  return (
    <div className='footer-container'>
        <FooterContact />
        <FooterNav title="Our company" links={linksCompany} />
        <FooterNav title="How can we help" links={linksHelp} />
        <FooterNav title="Information" links={linksInformation} />

    </div>
  )
}
