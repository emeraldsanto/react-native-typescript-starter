
export default interface LocalizedContextValue {
    language : string;
    supportedLanguages : string[];
    changeLanguage : (_ : string) => void;
    translate : (_ : string) => string;
}