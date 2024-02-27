"use client";

import { useCanRedo, useCanUndo, useHistory, useSelf } from "@/liveblocks.config";
import { Info } from "./info";
import { Participants } from "./participants";
import { ToolBar } from "./toolbar";
import { CanvasMode, CanvasState } from "@/types/canvas";
import { useState } from "react";

interface CanvasProps {
    boardId:string;
};

export const Canvas = ({boardId}:CanvasProps) => {
    const [canvasState,setCanvasState] = useState<CanvasState>({
        mode:CanvasMode.None,
    });    

    const history = useHistory();
    const canUndo = useCanUndo();
    const canRedo = useCanRedo();
    return (
        <main
        className='h-full w-full relative bg-neutral-100 touch-none'
        >
            <Info boardId={boardId}/>
            <Participants/>
            <ToolBar 
                canvasState={canvasState}
                setCanvasState={setCanvasState}
                canRedo={canRedo}
                canUndo={canUndo}
                undo={history.undo}
                redo={history.redo}
            />
        </main>
      )
}