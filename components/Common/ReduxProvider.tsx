"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { useTheme } from "@material-tailwind/react";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    console.log(useTheme());
    return <Provider store={store}>{children}</Provider>;
}
