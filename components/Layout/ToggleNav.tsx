"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { toggleClose, toggleOpen } from "@/redux/features/navbar/toggleNavSlice";
import { Collapse } from "../Common/MTComponent";

export function ToggleButton() {
    const dispatch = useAppDispatch();
    const { open } = useAppSelector((state) => state.toggleNav);

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && dispatch(toggleClose()));
    }, [dispatch]);

    return (
        <>
            {open ? (
                <XMarkIcon onClick={() => dispatch(toggleClose())} className="w-5 h-5 lg:hidden" />
            ) : (
                <Bars3Icon onClick={() => dispatch(toggleOpen())} className="w-5 h-5 lg:hidden" />
            )}
        </>
    );
}

export function NavCollapse({ children }: { children: React.ReactNode }) {
    const { open } = useAppSelector((state) => state.toggleNav);

    return <Collapse open={open}>{children}</Collapse>;
}
