"use client";

import { Info } from "./info";
import { Loading } from "./loading";
import { Participants } from "./participants";
import { ToolBar } from "./toolbar";

interface CanvasProps {
    boardId:string;
};

export const Canvas = ({boardId}:CanvasProps) => {
    return (
        <Loading/>
    )
    return (
        <main
        className='h-full w-full relative bg-neutral-100 touch-none'
        >
            <Info/>
            <Participants/>
            <ToolBar/>
        </main>
      )
}