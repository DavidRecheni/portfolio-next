import Image from 'next/image'
import nftberlin from '../../../../../public/images/nftberlin.svg'

const Badge=() => {
  return (
    <div className="flex flex-col justify-center">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <Image src={nftberlin} alt="NFT Berlin" layout="fill" objectFit="contain" />
        <div className="absolute top-0 bottom-0 -left m-auto w-28 h-6 bg-white text-black">
          <p className='text-center font-semibold'>Winner</p>
        </div>
      </div>
      <a href='https://2022.nftberlin.org/' target='_blank' rel="noreferrer">NFT Berlin&apos;22</a>
      <p className='text-sm italic'>Urbit challenge</p>
    </div>
  )
}

export default Badge