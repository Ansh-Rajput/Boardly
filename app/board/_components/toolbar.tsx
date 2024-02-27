export const ToolBar = () => {
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
            <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
                <div>
                    Pencil
                </div>
                <div>
                    Square
                </div>
                <div>   
                    Triangle
                </div>
                <div>
                    Circle
                </div>
            </div>
            <div className="bg-white rounded-md p1.5 flex flex-col items-center shadow-md">
                <div>
                    Undo
                </div>
                <div>
                    Redo
                </div>
            </div>
        </div>
    )
}

ToolBar.Skeleton = function ToolBarSkeleton(){
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 h-[360px] w-[80px] bg-white rounded-md p-3 shadow-md">

        </div>
    )
}