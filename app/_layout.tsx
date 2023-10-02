import { Tabs,SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import {useEffect} from "react";
export default function Layout() {
    const [fontsLoaded, fontError] = useFonts({
        'Inter-SemiBoldItalic': 'https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12',
    });

    useEffect(() => {
        if (fontsLoaded || fontError) {
            // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    // Prevent rendering until the font has loaded or an error was returned
    if (!fontsLoaded && !fontError) {
        return null;
    }



    return <Tabs />
       ;
}