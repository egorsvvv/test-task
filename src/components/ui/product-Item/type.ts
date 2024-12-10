import { TCard } from "../../../utils/types";
import { Location } from "react-router-dom";

export type TCardUI = {
    card: TCard,
    locationState: {background: Location},
    onLike: () => void,
    onDelete: () => void
}