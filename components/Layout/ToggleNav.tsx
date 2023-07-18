"use client";

import { useEffect } from "react";
import { IconButton } from "../Common/MTComponent";
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
                <IconButton ripple={false} onClick={() => dispatch(toggleClose())} className="lg:hidden">
                    <CgClose size={20} />
                </IconButton>
            ) : (
                <IconButton ripple={false} onClick={() => dispatch(toggleOpen())} className="lg:hidden">
                    <CgMenuRight size={20} />
                </IconButton>
            )}
        </>
    );
}

export function NavCollapse({ children }: { children: React.ReactNode }) {
    const { open } = useAppSelector((state) => state.toggleNav);

    return <Collapse open={open}>{children}</Collapse>;
}
