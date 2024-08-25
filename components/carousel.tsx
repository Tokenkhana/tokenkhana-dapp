"use client";

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import AutoScroll from 'embla-carousel-auto-scroll';
import Image from 'next/image';

interface CarouselProps {
  className?: string;
}

export const Carousel = ({ className }: CarouselProps) => {
  const [emblaRef] = useEmblaCarousel({ loop:true }, [Autoplay({playOnInit: true, stopOnInteraction: true, delay: 4000}), AutoScroll({playOnInit: true, stopOnInteraction: false, startDelay: 0})]);

  return (
    <div className={`overflow-hidden ${className || ''}`} ref={emblaRef}>
      <div className="flex w-full">
        {/* Importing the logo svg images from the Cryptologos.cc website */}
        <Image className = "mx-3 saturate-0 brightness-75 dark:invert" src="https://cryptologos.cc/logos/versions/ethereum-eth-logo-full-horizontal.svg" alt="Ethereum" width={150} height={150} />
        <Image className = "mx-3 saturate-0 brightness-75 dark:invert" src="https://freesvglogo.com/upload/b6f/bnb-smart-chain.svg" alt="Binance Smartchain" width={150} height={150} />
        <Image className = "mx-3 saturate-0 brightness-75 dark:invert" src="https://cryptologos.cc/logos/versions/arbitrum-arb-logo-full.svg" alt="Arbitrum" width={150} height={150} />
        <Image className = "mx-3 saturate-0 brightness-75 dark:invert" src="https://upload.wikimedia.org/wikipedia/commons/2/24/Polygon_blockchain_logo.png" alt="Polygon" width={150} height={150} />
        <Image className = "mx-3 saturate-0 brightness-75 dark:invert" src="https://dailycoin.com/wp-content/uploads/2023/08/OP-logo.svg" alt="Optimism" width={150} height={150} />
        <Image className = "mx-3 saturate-0 brightness-75 dark:invert" src="https://miro.medium.com/v2/resize:fit:1400/1*dfYJiqHVoWBuKnI9q-SNHg.png" alt="Base" width={150} height={150} />
      </div>
    </div>
  );
};