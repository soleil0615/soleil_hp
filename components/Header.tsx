"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "../public/soleil-logo.jpg";
import { clsx } from "clsx";

const navigation = [
  { name: "ホーム", href: "/" },
  { name: "ロボ団", href: "/robo-done" },
  { name: "人材育成事業", href: "/edu" },
  { name: "会社概要", href: "/#company" },
  { name: "お知らせ", href: "/news" },
  { name: "お問い合わせ", href: "/#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-primary/20 transition-all group-hover:ring-primary/40 shadow-sm bg-white">
                <Image
                  src={logo}
                  alt="Le Soleil Logo"
                  fill
                  priority
                  className="object-contain p-0.5"
                />
              </div>
              <span className="font-serif text-2xl font-bold text-primary tracking-widest uppercase">
                Le Soleil
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">メニューを開く</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={clsx(
          "lg:hidden fixed inset-0 z-[1000] px-6 py-6 transition-all duration-500 ease-in-out bg-background",
          mobileMenuOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
            <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-primary/20 bg-white shadow-sm">
              <Image
                src={logo}
                alt="Le Soleil Logo"
                fill
                priority
                className="object-contain p-0.5"
              />
            </div>
            <span className="font-serif text-2xl font-bold text-primary">
              Le Soleil
            </span>
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-full p-2.5 text-foreground hover:bg-black/5 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">メニューを閉じる</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-12 flow-root">
          <div className="-my-6">
            <div className="space-y-4 py-6">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    "block rounded-2xl px-6 py-4 text-xl font-medium leading-7 text-foreground/80 hover:bg-primary/10 hover:text-primary transition-all duration-300",
                    mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  )}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-6 right-6 text-center">
          <p className="text-sm text-muted-foreground font-light">© 2026 Le Soleil. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
