import React from 'react';

import {Cell, Counter, Panel, PanelHeader, Separator} from '@vkontakte/vkui';
import {
    Icon28NarrativeOutline,
    Icon28PopupStickersCircleFillRaspberryPinkProduct,
    Icon28StarsCircleFillViolet
} from "@vkontakte/icons";

const Home = ({id, go, fetchedUser, callFriend}) => {
    return <Panel id={id}>
        <PanelHeader>Выбирай друга</PanelHeader>

        <Cell onClick={callFriend} before={<Icon28NarrativeOutline/>}>
            Выбрать друга
        </Cell>
    </Panel>
}

export default Home;
