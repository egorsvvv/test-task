import React, {FC, useState} from "react";
import { ControlPanelUi } from "../ui/control-panel/control-panel";
import { TControlPanelProps } from "./type";

export const ControlPanel: FC<TControlPanelProps>= ({isLiked, setIsLiked}) => {
    const handleLikeFilter = () => {
        setIsLiked(!isLiked)
    }
    
    return (
        <ControlPanelUi
        setIsLiked={handleLikeFilter}
        isLiked={isLiked}
        />
    )
}