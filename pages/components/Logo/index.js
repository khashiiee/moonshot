import Image from 'next/image'

function Logo(){

    return(
    <div className='p-10'>
    <Image src="/Logo-org.png"  alt="logo" width="217" height="56"/>
    
    </div>)
}

export default Logo;