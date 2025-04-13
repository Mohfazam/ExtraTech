interface PropType{
    placeholder: string;
    size: "big" | "small";
}

export function TextInput({
    placeholder,
    size
}: PropType){
    return(
        <div>
            <input type="text" placeholder={placeholder} style={{
                padding: size === "big" ? 30 : 10,
                margin: size === "big" ? 30 : 10,
                borderColor: "black",
                borderWidth: 1,
                
            }} />
        </div>
    )
}