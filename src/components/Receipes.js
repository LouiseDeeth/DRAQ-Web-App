import ReceipeItem from "./ReceipeItem";

function Receipe(props) {
    return (
        <>
            {props.myReceipes.map((movie) => (
                <ReceipeItem
                    myReceipes={Receipe}
                    key={Receipe._id}
                    Reload={props.ReloadData}
                />
            ))}
        </>
    );
}

export default Receipes;