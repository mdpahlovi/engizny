export default function getColor(color: string) {
    switch (color) {
        case "Red":
            return "bg-red-500";
        case "Blue":
            return "bg-blue-500";
        case "Green":
            return "bg-green-500";
    }
}
