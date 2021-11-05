import React, {useEffect, useState} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {AdaptivityProvider, AppRoot, ScreenSpinner, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import WelcomeScreen from "./panels/WelcomeScreen";
import Friend from "./panels/Friend";

const App = (allowedList1 = allowedList) => {
    const [activePanel, setActivePanel] = useState('WelcomeScreen');
    const [fetchedUser, setUser] = useState(null);
    const [popout, setPopout] = useState(<ScreenSpinner size='large'/>);
    const [scheme, setScheme] = useState(null)
    const [friend, setFriend] = useState(null)
    const [meShacking, setMeShacking] = useState(null)
    const [coord, setCoord] = useState({x: 0, y: 0, z: 0})

    const allowedList = [{text: ".org", id: 4}, {text: ".ru", id: 5}, {text: "aa", id: 6}]

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
                setMeShacking(() => {
                    const x = data.x * data.x
                    const y = data.y * data.y
                    const z = data.z * data.z
                    return Math.sqrt(x + y + z) >= 50
                })
                setCoord(() => {
                    return {x: data.x, y: data.y, z: data.z}
                })
            }
        });

        async function fetchData() {
            setPopout(null);
            const user = await bridge.send('VKWebAppGetUserInfo')
            bridge.send("VKWebAppAccelerometerStart", {"refresh_rate": 100});
            setUser(user);
        }

        let timer = null

        async function fakeAcc() {
            timer = setInterval(() => {
                setMeShacking(() => {
                    return Math.random() <= 0.5
                })
            }, 2000)
        }

        fetchData();
        // fakeAcc();

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
        })

        let a = {
            "id": 2884043,
            "first_name": "Albert",
            "last_name": "Usmanov",
            "sex": 2,
            "photo_200": "..."
        }

        setFriend(() => a)
    }

    useEffect(() => {
        if (friend !== null) {
            setActivePanel(() => 'Friend')
        }
    }, [friend])

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
                            coord={coord}/>
                </View>
            </AppRoot>
        </AdaptivityProvider>
    );
}

export default App;
