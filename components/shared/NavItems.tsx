'use client';

import { headerLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItems = () => {
	const pathName = usePathname();
	return (
		<ul className="flex items-center gap-5">
			{headerLinks.map((link) => {
				const isActive = pathName === link.route;
				return (
					<li
						key={link.route}
						className={`${
							isActive ? 'text-green-400' : 'text-black'
						} hover:text-green-200 p-medium-16 whitespace-nowrap`}
					>
						<Link href={link.route}>{link.label}</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default NavItems;
