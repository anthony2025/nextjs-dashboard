import { Metadata } from 'next';
// TODO: copy component
import Table from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: "Customers"
}

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  console.log('query', query);
  console.log('currentPage', currentPage);

  const customers = await fetchFilteredCustomers(query);
  console.log(customers);

  return (
    <>
      <p>Customers Page</p>
      <Table customers={customers} />
    </>
  );
};
