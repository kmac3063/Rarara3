import React, {useEffect, useState} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {AdaptivityProvider, AppRoot, ScreenSpinner, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import WelcomeScreen from "./panels/WelcomeScreen";
import Friend from "./panels/Friend";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const App = (allowedList1 = allowedList) => {
    const [activePanel, setActivePanel] = useState('WelcomeScreen');
    const [fetchedUser, setUser] = useState(null);
    const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);
    const [scheme, setScheme] = useState(null)
    const [friend, setFriend] = useState(null)
    const [meShacking, setMeShacking] = useState(null)
    const [speed, setSpeed] = useState(0)

    const [coord, setCoord] = useState({x: 0, y: 0, z: 0})
    const [mAccel, setMAccel] = useState(10)

    const allowedList = [{text: ".org", id: 4}, {text: ".ru", id: 5}, {text: "aa", id: 6}]

    const d = false

    const firebaseConfig = {
        apiKey: "AIzaSyAdyvR02PGXySkvscIH9y8rktyVQXYzUIk",
        authDomain: "rarara3-ead99.firebaseapp.com",
        projectId: "rarara3-ead99",
        storageBucket: "rarara3-ead99.appspot.com",
        messagingSenderId: "317914636705",
        appId: "1:317914636705:web:a033f970a56b50ec49abe0"
    };

    const firebaseApp = initializeApp(firebaseConfig);
    const db = getFirestore(firebaseApp)

    useEffect(() => {
        bridge.subscribe(({detail: {type, data}}) => {
            if (type === 'VKWebAppUpdateConfig') {
                const schemeAttribute = document.createAttribute('scheme')
                // schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
                schemeAttribute.value = 'client_light';
                setScheme(schemeAttribute.value)
                document.body.attributes.setNamedItem(schemeAttribute);
            }

            if (type === 'VKWebAppAccelerometerChanged') {
                const x = data.x
                const y = data.y
                const z = data.z

                let speed1 = Math.sqrt(x * x + y * y + z * z)
                setMeShacking(() => {
                    return speed1 > 11
                })

                setSpeed(() => speed1)
                setCoord(() => {
                    return {x: x, y: y, z: z}
                })
            }
        });

        async function fetchData() {
            setPopout(null);
            const user = await bridge.send('VKWebAppGetUserInfo')
            bridge.send("VKWebAppAccelerometerStart", {"refresh_rate": 200});
            setUser(user);
        }

        let timer = setInterval(() => {
            const coord1 = coord
            let coord2 = null
            setTimeout(() => {
                coord2 = coord
                if (coord1.x === coord2.x && coord1.y === coord2.y && coord1.z === coord2.z) {
                    bridge.send("VKWebAppAccelerometerStart", {"refresh_rate": 200});
                }
            }, 500)
        }, 1000)

        async function fakeAcc() {
            timer = setInterval(() => {
                const data = {x: 0 + Math.random() * 5, y: 1 - Math.random() * 5, z: 9 + Math.random() * 5}
                const x = data.x
                const y = data.y
                const z = data.z
                let speed1 = Math.sqrt(x * x + y * y + z * z)
                setMeShacking(() => {
                    return speed1 > 11
                })

                setSpeed(() => speed1)
                setCoord(() => {
                    return {x: x, y: y, z: z}
                })
            }, 300)
        }

        fetchData();
        if (d)
            fakeAcc();

        return () => {
            if (timer !== null) {
                clearTimeout(timer)
            }
        }
    }, []);

    const go = e => {
        setActivePanel(e.currentTarget.dataset.to);
    };

    const callFriend = async () => {
        bridge.send('VKWebAppGetFriends', {}).then(data => {
            setFriend(() => data.users[0])
            setActivePanel(() => 'Friend')
        })

        if (d) {
            let a = {
                "id": "0",
                "first_name": "Albert",
                "last_name": "Usmanov",
                "sex": 2,
                "photo_200": "..."
            }

            setFriend(() => a)
            setActivePanel(() => 'Friend')
            setUser({id: "1"})
        }
    }

    return (
        <AdaptivityProvider>
            <AppRoot>
                <View activePanel={activePanel} popout={popout}>
                    <WelcomeScreen id='WelcomeScreen' fetchedUser={fetchedUser} go={go}/>
                    <Home id='Home'
                          fetchedUser={fetchedUser} go={go}
                          callFriend={callFriend}/>
                    <Friend id='Friend'
                            fetchedUser={fetchedUser} go={go}
                            friend={friend}
                            meShacking={meShacking}
                            setMeShacking={setMeShacking}
                            coord={coord}
                            speed={speed}
                            db={db}/>
                </View>
            </AppRoot>
        </AdaptivityProvider>
    );
}

export default App;
