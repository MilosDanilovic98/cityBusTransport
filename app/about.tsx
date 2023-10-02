import {Text, View} from 'react-native';
import {Link} from "expo-router";


export default function Page() {
    return (
        <View>
            <Text>About</Text>
            <Link href="/about">About</Link>

        </View>
    );
}