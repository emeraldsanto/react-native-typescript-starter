
export default interface LocalizedContextValue {
    language : string;
    translate : (_ : string) => string;
    changeLanguage : (_ : string) => void;
}