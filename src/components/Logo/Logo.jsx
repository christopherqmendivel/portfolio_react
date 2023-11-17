import logo from '../../assets/other-assets/logo.png'; 

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
            <span>Christopher</span>

        </a>
        <span>Frontend Developer</span>
    </div>
  )
}

export default Logo