import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {

            background: string;
            text: string;
            backgroundTable: string;
            backgroundInput: string;
            placeholderInput: string;
            modalButtons: string;
            inputColor: string;
        }
    }
}