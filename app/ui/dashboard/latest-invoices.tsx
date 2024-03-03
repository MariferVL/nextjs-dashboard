import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { roboto_slab } from '@/app/ui/fonts';
import { LatestInvoice } from '@/app/lib/definitions';

export default async function LatestInvoices({
  latestInvoices,
}: {
  latestInvoices: LatestInvoice[];
}) {
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${roboto_slab.className} mb-4 text-xl md:text-2xl text-white`}>
        Latest Invoices
      </h2>
      <div className="flex flex-col gap-4 rounded-xl bg-gray-800 p-4">
        {latestInvoices.map((invoice, i) => (
          <div
            key={invoice.id}
            className={clsx('flex items-center justify-between py-4', {
              'border-t border-gray-700': i !== 0,
            })}
          >
            <div className="flex items-center space-x-4">
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src={invoice.image_url}
                  alt={`${invoice.name}'s profile picture`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white truncate">{invoice.name}</p>
                <p className="hidden text-xs text-gray-400 sm:block">{invoice.email}</p>
              </div>
            </div>
            <p className={`${roboto_slab.className} text-sm font-medium text-white`}>{invoice.amount}</p>
          </div>
        ))}
        <div className="flex items-center pt-4">
          <ArrowPathIcon className="h-4 w-4 text-gray-400" />
          <h3 className="ml-2 text-xs text-gray-400">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
