import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import AndesLogo from '@/app/ui/andes-logo';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="flex h-20 my-8 items-center justify-center bg-gray-800 rounded-t-lg text-white">
        <AndesLogo />
      </div>
      <div className="flex-grow mt-8 flex-col justify-between">
        <NavLinks />
        <div className="h-auto w-full mb-8"></div>
        <form>
          <button className="flex h-[48px] w-full items-center justify-center gap-2 rounded-md bg-yellow-400 text-gray-900 font-semibold py-3 px-6 hover:bg-yellow-600 transition duration-300">
            <span>Log out</span>
            <PowerIcon className="w-6" />
          </button>
        </form>
      </div>
    </div>
  );
}
