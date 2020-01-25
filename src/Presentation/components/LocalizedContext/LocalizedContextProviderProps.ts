
export default interface LocalizedContextProviderProps {

    initialLanguage : string;
    supportedLanguages : string[];
    translations : {
        [key : string] : {
            [key : string] : string
        }
    };
}