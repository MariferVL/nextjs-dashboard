import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { roboto_slab } from '@/app/ui/fonts';
import { inter } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';


const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
  
  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  // Función auxiliar para obtener el color de fondo y el color de texto según el tipo de tarjeta
  const getColor = (type: string) => {
    let bgColor = 'bg-gray-900';
    let textColor = 'text-white';
    if (type === 'collected') {
      bgColor = 'bg-blue-600';
      textColor = 'text-blue-600';
    } else if (type === 'customers') {
      bgColor = 'bg-yellow-600';
      textColor = 'text-yellow-600';
    } else if (type === 'pending') {
      bgColor = 'bg-red-600';
      textColor = 'text-red-600';
    } else if (type === 'invoices') {
      bgColor = 'bg-green-600';
      textColor = 'text-green-600';
    }
    return { bgColor, textColor };
  };

  const { bgColor, textColor } = getColor(type);

  return (
    <div className={`rounded-xl ${bgColor} p-2 shadow-md`}>
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-white" /> : null}
        <h3 className={`ml-2 text-sm font-medium`}>{title}</h3>
      </div>
      <p
        className={`${roboto_slab.className} ${textColor} truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
