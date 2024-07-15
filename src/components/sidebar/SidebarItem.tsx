import Link from 'next/link';
import { CiBookmarkCheck } from 'react-icons/ci';

interface Props {
  name: string;
  url: string;
  isActive?: boolean;
}

export const SidebarItem = ({ name, isActive, url }: Props) => {
  return (
    <li>
      <Link
        href={url}
        className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl ${
          isActive && 'text-white bg-gradient-to-r from-sky-600 to-cyan-400'
        }`}
      >
        <CiBookmarkCheck size={30} />
        <span className='-mr-1 font-medium'>{name}</span>
      </Link>
    </li>
  );
};
