
export default interface Theme {
    name : string;
    dark : boolean;
    colors : {
        primary : string;
        primaryVariant : string;
        secondary : string;
        secondaryVariant : string;
        background : string;
        surface : string;
        error : string;
        onPrimary : string;
        onSecondary : string;
        onBackground : string;
        onSurface : string;
        onError : string;
        [key : string] : string;
}