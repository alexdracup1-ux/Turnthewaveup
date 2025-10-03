"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Grid3x3, Menu, X } from 'lucide-react';
import SignInModal from './sign-in-modal';

const navItems = [
  { name: 'Creativity & Design' },
  { name: 'PDF & E-signatures' },
  { name: 'Marketing & Commerce' },
  { name: 'Learn & Support' },
];

export default function HeaderNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-[#2C2F36] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex h-16 max-w-[1360px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          {/* Mobile Toggle & Logo */}
          <div className="flex items-center gap-4">
             <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <Link href="/" className="flex flex-shrink-0 items-center gap-2">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/24a2c4e9-a79a-4cc9-ab49-7943b561b083-adobe-com/assets/svgs/adobe-logo-1.svg"
                alt="Adobe logo"
                width={24}
                height={24}
                className="h-6 w-auto"
              />
              <span className="text-lg font-semibold">Adobe</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#FF0000]">
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4">
            <button aria-label="Adobe applications">
              <Grid3x3 className="h-5 w-5" />
            </button>
            <div className="h-6 w-px bg-gray-300" />
          </div>
          
          <SignInModal />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 sm:px-6">
            <nav>
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <button className="flex w-full items-center justify-between rounded-md py-3 px-3 text-base font-medium hover:bg-gray-100">
                      <span>{item.name}</span>
                      <ChevronDown className="h-5 w-5" />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t pt-4">
                <button className="flex w-full items-center gap-3 rounded-md py-3 px-3 text-base font-medium hover:bg-gray-100">
                    <Grid3x3 className="h-5 w-5" />
                    <span>View all apps</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}