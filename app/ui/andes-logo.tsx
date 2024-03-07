// import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from "next/legacy/image";

export default function AndesLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <Image
            src="/andes-logo.png"
            width={160}
            height={160}
            alt="Company Logo"
          />
    </div>
  );
}
