"use client";

import { useEffect } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
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
                <CgClose size={20} onClick={() => dispatch(toggleClose())} className="lg:hidden" />
            ) : (
                <CgMenuRight size={20} onClick={() => dispatch(toggleOpen())} className="lg:hidden" />
            )}
        </>
    );
}

export function NavCollapse({ children }: { children: React.ReactNode }) {
    const { open } = useAppSelector((state) => state.toggleNav);

    return <Collapse open={open}>{children}</Collapse>;
}
