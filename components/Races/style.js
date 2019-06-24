import { StyleSheet } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        margin: 10,
        width: '80%',
        alignItems: 'center',
        backgroundColor: '#b30000'

    }
});