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
                        initial: { borderRadius: "", display: "", maxWidth: "", px: "", width: "" },
                    },
                },
                variants: { filled: { white: { backgroud: "", color: "" } } },
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
