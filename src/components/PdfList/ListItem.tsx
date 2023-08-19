import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { description } from "../../createTw";

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center"
    },
    bullet: {
        height: '100%',
    }
})

export type ListItemProps = {
    children: React.ReactNode;
}

const ListItem = ({ children }: ListItemProps) => {
    return (
        <View style={styles.row}>
            <View style={styles.bullet}>
                <Text>{'\u2022' + " "}</Text>
            </View>
            <Text style={description()}>{children}</Text>
        </View>
    )
}

export default ListItem;