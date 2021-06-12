export const requiredFild = value => {
    if (value ) return undefined;
    return (
        <div>Error</div>
    );

}


export const maxLenghtCreator = (maxLenght) => (value) => {
    if (value && value.length > maxLenght )
    return (
        <div>${maxLenght}</div>
    );
    return undefined;

}