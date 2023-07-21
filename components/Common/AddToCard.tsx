import { Button } from "@material-tailwind/react";
import { addToCard } from "@/redux/features/card/cardSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function AddToCard({ id, size, color }: { id: number; size: string; color: string }) {
    const dispatch = useAppDispatch();
    const { cards } = useAppSelector((state) => state.card);

    const isExist = cards.map((card) => card.product).includes(id);

    return (
        <Button size="sm" variant={isExist ? "filled" : "outlined"} onClick={() => dispatch(addToCard({ product: id, size, color }))}>
            Add To Card
        </Button>
    );
}
