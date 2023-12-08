import logo from '../../assets/other-assets/logo-chrisv2.png'; 

function Logo() {
  return (
    <div className='c_logo'>
        <a 
          href="/"
          className='link_image'
        >
            <img 
                src={logo}
                alt="logo" 
                className='logo'

            />
            <span className='logo_name'>Christopher</span>

        </a>
        <span className='logo_skill'>Frontend Developer</span>
    </div>
  )
}

export default Logo