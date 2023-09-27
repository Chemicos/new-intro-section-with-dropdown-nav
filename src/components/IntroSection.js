import largeImage from '../assets/image-hero-desktop.png'
import mobileImage from '../assets/image-hero-mobile.png'
import databizLogo from '../assets/client-databiz.svg'
import audiophileLogo from '../assets/client-audiophile.svg'
import meetLogo from '../assets/client-meet.svg'
import makerLogo from '../assets/client-maker.svg'

export default function IntroSection () {
    return (
        <section className=''>
              <div className='flex flex-col-reverse md:py-20 md:grid md:gap-10 md:grid-cols-2 
                    md:place-items-center max-w-4xl lg:max-w-5xl md:mx-auto'>
                    <div className='text-center md:text-left  mt-10 md:mt-0'>
                        <h1 className='text-4xl font-semibold lg:text-6xl xl:text-7xl mb-5 md:mb-10 md:pr-2'>Make remote work</h1>
                        <p className='text-medium-gray mb-5 md:mb-10 md:pr-16'>
                        Get your team in sync, no matter your location.
                        Streamline processes, create team rituals,
                        and watch productivity soar.
                        </p>
                        <button className='outline bg-almost-black shadow text-almost-white 
                            rounded-xl px-6 py-3 hover:bg-almost-white font-semibold
                            hover:text-almost-black hover:outline-1 transition-all'>
                            Learn more
                        </button>
                        <div className='grid grid-cols-4 gap-1 mt-10 md:mt-24 place-items-center
                            md:place-items-start md:items-center'>
                            <img src={databizLogo} alt="logo1" className='w-16 md:w-20' />
                            <img src={audiophileLogo} alt="logo2" className='w-16 md:w-16' />
                            <img src={meetLogo} alt="logo3" className='w-16 md:w-20' />
                            <img src={makerLogo} alt="logo4" className='w-16 md:w-20' />
                        </div>
                    </div>

                    <div>
                        <picture>
                            <source media='(min-width: 768px)' srcSet={largeImage} />
                            <img src={mobileImage} alt="mobile-img" className='w-full' />
                        </picture>
                    </div>
              </div>
        </section>
    )
}