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
import {Icon56CakeCircleFillRaspberryPink} from '@vkontakte/icons';

const Friend = ({id, go, fetchedUser, friend, meShacking, coord}) => {
    const [friendShacking, setFriendShacking] = useState(false)
    const [friendThere, setFriendThere] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
            setFriendShacking(() => {
                return Math.random() <= 0.5
            }, 500)
        }, 500);

        return () => {
            console.log("unmount")
            clearTimeout(timer);
        }
    }, []);

    return <Panel id={id}>
        <PanelHeader
            left={<PanelHeaderBack onClick={go} data-to={'Home'}/>}
        >Тет-а-тет</PanelHeader>
        <Cell>x: {coord.x}</Cell>
        <Cell>y: {coord.y}</Cell>
        <Cell>z: {coord.z}</Cell>
        <Cell>vector: {Math.sqrt(coord.x * coord.x + coord.y * coord.y + coord.z * coord.z)}</Cell>
        <Group header={<Header mode="secondary">Вы</Header>}>
            <Div style={{display: 'flex'}}>
                <Button size="l" stretched mode="commerce" style={{marginRight: 8}}>Вы в тет-а-тет</Button>
                {meShacking ?
                    <Button size="l" stretched mode="commerce">Вы трясете</Button>
                    : <Button size="l" stretched mode="secondary">Вы не трясете</Button>
                }
            </Div>
        </Group>
        <Group header={<Header mode="secondary">{friend.first_name + " " + friend.last_name}</Header>}>
            <Div style={{display: 'flex'}}>
                {friendThere ?
                    <Button size="l" stretched mode="commerce" style={{marginRight: 8}}>В тет-а-тет</Button>
                    : <Button size="l" stretched mode="secondary" style={{marginRight: 8}}>Не в тет-а-тет</Button>
                }
                {friendShacking ?
                    <Button size="l" stretched mode="commerce">Трясет</Button>
                    : <Button size="l" stretched mode="secondary">Не трясет</Button>
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

                <Cell>Вы трясете одновременно</Cell>

                <Avatar><Icon56CakeCircleFillRaspberryPink/></Avatar>
            </Div>
            : null}

    </Panel>
}

export default Friend;
