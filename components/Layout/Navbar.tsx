import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MTNavbar } from "../Common/MTComponent";
import { NavCollapse, ToggleButton } from "./ToggleNav";

export default function Navbar() {
    const NavList = (
        <div className="my-4 flex flex-col gap-2 lg:my-0 lg:flex-row lg:items-center lg:gap-6">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
        </div>
    );

    return (
        <MTNavbar fullWidth shadow={false} className="sticky top-0 z-10">
            <section className="flex items-center justify-between">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={120} height={100} />
                </Link>
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">{NavList}</div>
                    <ToggleButton />
                </div>
            </section>
            <NavCollapse>{NavList}</NavCollapse>
        </MTNavbar>
    );
}
