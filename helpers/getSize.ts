export default function getSize(size: string) {
    switch (size) {
        case "Small":
            return "S";
        case "Medium":
            return "M";
        case "Large":
            return "L";
    }
}
