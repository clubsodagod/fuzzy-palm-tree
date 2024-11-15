import { RefObject } from "react";

export type RefArray = React.RefObject<HTMLDivElement>[];


export type RefIDObject = {
    ref: RefObject<HTMLDivElement>;
    id: string;
}
