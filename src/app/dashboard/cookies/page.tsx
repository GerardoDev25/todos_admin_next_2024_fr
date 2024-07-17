import { TabBar } from '@/components';

export const metadata = {
  title: 'Cookies page',
  description: 'Cookies page description',
};

export default function CookiesPage() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
      <div className='flex flex-col'>
        <small className='text-3xl'>Tab</small>
        <TabBar />
      </div>
    </div>
  );
}
