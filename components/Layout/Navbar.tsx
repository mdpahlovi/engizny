import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, MTNavbar, Popover, PopoverHandler, PopoverContent } from "../Common/MTComponent";
import { NavCollapse, ToggleButton } from "./ToggleNav";
import { MdShoppingCart } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import { HiClipboardDocumentList } from "react-icons/hi2";

export default function Navbar() {
    const NavList = (
        <div className="my-3 flex flex-col gap-2 lg:my-0 lg:flex-row lg:items-center lg:gap-6">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
        </div>
    );

    return (
        <>
            <div className="bg-content/20 text-sm hidden sm:block">
                <section className="h-8 flex items-center justify-between">
                    <div className="flex divide-x divide-content">
                        <p className="pr-4">01736812121</p>
                        <p className="pl-4">C&B Road, Barisal</p>
                    </div>
                    <div className="flex divide-x">
                        <p className="h-8 flex items-center px-5 bg-content/80 text-background">EM</p>
                        <p className="h-8 flex items-center px-5 bg-content/80 text-background">USD</p>
                    </div>
                </section>
            </div>
            <MTNavbar fullWidth shadow={false} className="sticky top-0 z-10">
                <section className="flex items-center justify-between">
                    <Link href="/">
                        <Image src="/logo.png" alt="logo" width={120} height={100} />
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{NavList}</div>
                        <div className="hidden lg:block relative">
                            <input placeholder="Search" className="border rounded-full py-2.5 px-5 text-sm" />
                            <HiOutlineSearch size={20} className="absolute top-2.5 right-5" />
                        </div>
                        <HiClipboardDocumentList size={20} />
                        <MdShoppingCart size={20} />
                        <Link href="/login" className="hidden lg:block">
                            <Button size="sm">Login / Signup</Button>
                        </Link>
                        <ToggleButton />
                    </div>
                </section>
                <NavCollapse>
                    <div className="w-max relative mt-4">
                        <input placeholder="Search" className="border rounded-full py-2.5 px-5 text-sm" />
                        <HiOutlineSearch size={20} className="absolute top-2.5 right-5" />
                    </div>
                    {NavList}
                    <Link href="/login" className="block mb-2">
                        <Button size="sm">Login / Signup</Button>
                    </Link>
                </NavCollapse>
            </MTNavbar>
        </>
    );
}
