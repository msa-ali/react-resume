import { View } from "@react-pdf/renderer";
import ListItem, { ListItemProps } from "./ListItem";
import { ReactElement } from "react";
import { tw } from "../../createTw";



type Props = {
    children: ReactElement<ListItemProps> | Array<ReactElement<ListItemProps>>
};


const PdfBulletList = ({ children }: Props) => {
    return (
        <View style={tw("ml-4")}>
            {children}
        </View>
    );
};

PdfBulletList.ListItem = ListItem;

export default PdfBulletList;