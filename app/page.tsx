import AndesLogo from '@/app/ui/andes-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="flex h-20 my-8 items-center justify-center bg-gray-800 rounded-t-lg text-white">
        <AndesLogo />
        <p className="text-[44px] ml-8">Andes Engineering Solutions</p>
      </div>
      <div className="flex-grow flex flex-col-reverse mt-8 md:flex-row">
        <div className="flex justify-center items-center md:w-3/5">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="rounded-lg shadow-xl"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
        <div className="bg-gray-900 rounded-b-lg shadow-lg p-8 flex flex-col justify-center md:w-2/5 md:px-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Welcome to Andes Engineering Solutions
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            We specialize in providing innovative engineering solutions to the mining industry in Chile.
          </p>
          <Link
            href="/login"
            className="flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition duration-300 md:text-lg"
          >
            <span>Log in</span>
            <ArrowRightIcon className="w-5 ml-2" />
          </Link>
        </div>
      </div>
    </main>
  );
}
