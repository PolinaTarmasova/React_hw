export function CreateButton({children, onClick}){
    return(
        <button onClick={onClick}>{children}</button>
    )
}

export function CreateOkButton({onClick}){
    return(
        <button className="ok" onClick={onClick}>Ok</button>
    )
}