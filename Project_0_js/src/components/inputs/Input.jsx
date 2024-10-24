export default function CreateInput({inputHint, value, onChange}){
    return(
        <input placeholder={inputHint} value={value} onChange={onChange}></input>
    )
}