import Footer from "./Footer";
import Navbar from "./Navbar";
import ReduxProvider from "../Common/ReduxProvider";
import { ThemeProvider } from "../Common/MTComponent";

export default function Main({ children }: { children: React.ReactNode }) {
    const theme = {
        navbar: {
            styles: {
                base: {
                    navbar: {
                        blurred: { borderColor: "", borderWidth: "border-b" },
                        fullWidth: { maxWidth: "", px: "", rounded: "", width: "" },
                        initial: { borderRadius: "", display: "", maxWidth: "", px: "", py: "py-2.5", width: "" },
                    },
                },
                variants: { filled: { white: { backgroud: "", color: "" } } },
            },
        },
        collapse: { styles: { base: { width: "container mx-auto px-6" } } },
        input: {
            defaultProps: { size: "lg" },
            styles: {
                base: { icon: { color: "" }, input: { color: "" }, label: { color: "peer-placeholder-shown:text-content/70" } },
                variants: {
                    outlined: {
                        base: {
                            input: { borderColor: "placeholder-shown:border-edge placeholder-shown:border-t-edge" },
                        },
                        colors: {
                            label: {
                                blue: {
                                    after: "after:border-content/70 peer-focus:after:!border-primary",
                                    before: "before:border-content/70 peer-focus:before:!border-primary",
                                    color: "text-content/70 peer-focus:text-primary",
                                },
                            },
                            input: { blue: { borderColor: "border-content/70", borderColorFocused: "focus:border-primary" } },
                        },
                    },
                },
            },
        },
        button: {
            styles: {
                base: { initial: { textTransform: "", fontWeight: "" } },
                sizes: {
                    sm: { fontSize: "", borderRadius: "rounded-full" },
                    md: { fontSize: "", borderRadius: "rounded-full" },
                    lg: { fontSize: "", borderRadius: "rounded-full" },
                },
                variants: {
                    filled: {
                        blue: { backgroud: "bg-primary", hover: "hover:shadow-md hover:shadow-primary/30", shadow: "" },
                        orange: { backgroud: "bg-secondary", hover: "hover:shadow-md hover:shadow-secondary/30", shadow: "" },
                    },
                    outlined: {
                        blue: {
                            border: "border border-primary",
                            color: "text-primary",
                            focus: "",
                            hover: "hover:bg-primary hover:text-white",
                        },
                    },
                },
            },
        },
    };

    return (
        <ReduxProvider>
            <ThemeProvider value={theme}>
                <Navbar />
                {children}
                <Footer />
            </ThemeProvider>
        </ReduxProvider>
    );
}
