
export interface LocalizationContextProviderProps {

    initialLanguage : string;
    supportedLanguages : string[];
    translations : {
        [key : string] : {
            [key : string] : string;
        }
    }
}