import { createTw } from "react-pdf-tailwind";

export const tw = createTw({
    theme: {
        // fontFamily: {
        //     sans: ["Comic Sans"],
        // },
        extend: {
            colors: {
                custom: "#bada55",
            },
        },
    },
});

const createStyle = (defaultStyle: string) => (override?: string) => tw(`${defaultStyle} ${override}`);

export const title = createStyle("text-base font-thin tracking-wider");
export const caption = createStyle("text-gray-400 text-xs");
export const description = createStyle(`text-sm font-thin whitespace-break-spaces text-gray-700 leading-normal`);
export const subtitle = createStyle("text-sm");