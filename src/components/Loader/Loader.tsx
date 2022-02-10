import {Button} from "../Button";
import React from "react";
import {Spinner} from "./Spinner/Spinner";

type PreloaderPropsType = {
    isActive: boolean
    callback: () => void
}

export const Loader = ({
                           isActive,
                           callback,
                       }: PreloaderPropsType) => {
    return (
        <>
            {
                isActive
                && (
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Spinner/>
                        <Button text="Cancel" onClick={callback}/>
                    </div>)
            }
        </>
    )
}