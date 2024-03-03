// import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AndesLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <Image
            src="/andes-logo.png"
            width={760}
            height={760}
            alt="Company Logo"
          />
      <p className="text-[44px]">Andes Engineering Solutions</p>
    </div>
  );
}
