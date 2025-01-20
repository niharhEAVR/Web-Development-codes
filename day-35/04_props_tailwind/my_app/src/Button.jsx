const Button = (props) => {
    return (
        <>
            <button className="bg-green-400 border-2 h-10 w-20 border-black">{props.insideText || "buttons"}</button>
        </>
    )
}

export default Button