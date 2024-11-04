import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import NavItems from './NavItems';
import MobileNav from './MobileNav';

const Header = () => {
	return (
		<header className="w-full border-b">
			<div className="wrapper flex justify-between items-center">
				<Link href={'/'} className="w-36">
					<Image
						src={'/assets/images/logo.svg'}
						width={100}
						height={50}
						objectFit="cover"
						alt="Logo Gumii"
					/>
				</Link>
				<div className="flex items-center gap-3 px-30">
					<SignedIn>
						<nav className="hidden md:flex">
							<NavItems />
						</nav>
						<UserButton afterSignOutUrl="/"></UserButton>
						<MobileNav />
					</SignedIn>
					<SignedOut>
						<Button asChild className="rounded-md" size={'lg'}>
							<Link href={'/sign-in'}>Login</Link>
						</Button>
					</SignedOut>
				</div>
			</div>
		</header>
	);
};

export default Header;
