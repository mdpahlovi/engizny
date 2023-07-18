import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t py-8">
            <section className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
                <Image src="/logo.png" alt="logo" width={120} height={100} />
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <Link href="/about-us">About Us</Link>
                    <Link href="/license">License</Link>
                    <Link href="/contribute">Contribute</Link>
                    <Link href="/contact-us">Contact Us</Link>
                </ul>
            </section>
            <hr className="m-8 border" />
            <p className="text-center">&copy; 2023 Material Tailwind</p>
        </footer>
    );
}
