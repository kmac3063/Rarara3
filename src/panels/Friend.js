import React, {useEffect, useState} from 'react';

import {
    Avatar,
    Button,
    Cell,
    Div,
    Group,
    Header,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    Placeholder,
    Separator
} from '@vkontakte/vkui';
import {Icon56CakeCircleFillRaspberryPink, Icon56Fire, Icon56FireOutline} from '@vkontakte/icons';
import {doc, getDoc, setDoc} from "firebase/firestore/lite";

const Friend = ({id, go, fetchedUser, friend, meShacking, coord, speed, setMeShacking, db}) => {
    const [friendShacking, setFriendShacking] = useState(false)
    const [friendThere, setFriendThere] = useState(false)

    useEffect(() => {
        const getFriendInfoTimer = setInterval(() => {
            if (friend === null || fetchedUser === null) return
            const my_id = fetchedUser.id.toString();
            const fr_id = friend.id.toString()
            const docRef = doc(db, 'bs', fr_id)
            getDoc(docRef).then(snap => {
                if (snap.exists()) {
                    let f = snap.data()
                    setFriendThere(() => {
                        return f.friend_id !== null && f.friend_id.toString() === my_id
                    })
                    setFriendShacking(() => {
                        return f.shake
                    })
                }
            })

        }, 500);

        const sendMyInfoTimer = setInterval(() => {
            setMeShacking((prev) => {
                if (fetchedUser === null || friend === null) {
                    return prev
                }

                const fr_id = friend.id.toString()
                setDoc(doc(db, 'bs', fetchedUser.id.toString()), {
                    friend_id: fr_id,
                    shake: prev
                })
                return prev
            })
        }, 500);

        return () => {
            console.log("unmount")
            clearTimeout(getFriendInfoTimer);
            clearTimeout(sendMyInfoTimer)

            if (fetchedUser !== null) {
                setDoc(doc(db, 'bs', fetchedUser.id.toString()), {
                    friend_id: null,
                    shake: false
                })
            }
        }
    }, []);

    return <Panel id={id}>
        <PanelHeader
            left={<PanelHeaderBack onClick={go} data-to={'Home'}/>}
        >??????-??-??????</PanelHeader>
        <Group header={<Header mode="secondary">????</Header>}>
            <Div style={{display: 'flex'}}>
                <Button size="l" stretched mode="commerce" style={{marginRight: 8}}>???? ?? ??????-??-??????</Button>
                {meShacking ?
                    <Button size="l" stretched mode="commerce">???? ??????????????</Button>
                    : <Button size="l" stretched mode="secondary">???? ???? ??????????????</Button>
                }
            </Div>
        </Group>
        <Group header={<Header
            mode="secondary">{(friend !== null ? friend.first_name : "...") + " " + (friend !== null ? friend.last_name : "")}</Header>}>
            <Div style={{display: 'flex'}}>
                {friendThere ?
                    <Button size="l" stretched mode="commerce" style={{marginRight: 8}}>?? ??????-??-??????</Button>
                    : <Button size="l" stretched mode="secondary" style={{marginRight: 8}}>???? ?? ??????-??-??????</Button>
                }
                {friendShacking ?
                    <Button size="l" stretched mode="commerce">????????????</Button>
                    : <Button size="l" stretched mode="secondary">???? ????????????</Button>
                }
            </Div>
        </Group>
        <Separator/>
        {meShacking && friendThere && friendShacking ?
            <Div style={{
                margin: 0,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: 32,
            }}>
                <Avatar><Icon56CakeCircleFillRaspberryPink/></Avatar>

                <Cell>???? ?????????????? ????????????????????????!</Cell>

                <Avatar><Icon56CakeCircleFillRaspberryPink/></Avatar>
            </Div>
            : <Placeholder
                icon={meShacking ? <Icon56Fire fill={"DC143C"}/> : <Icon56FireOutline fill={"DC143C"}/>}
                header="?????????????? ?????????? ????????????!"
            >
            </Placeholder>}

    </Panel>
}

export default Friend;
