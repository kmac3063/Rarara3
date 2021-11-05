import React from "react";
import {Button, Group, Panel, PanelHeader, PanelHeaderBack, Placeholder} from "@vkontakte/vkui";
import persik from "../img/persik.png";
import {Icon56UsersOutline} from "@vkontakte/icons";

const WelcomeScreen = ({id, fetchedUser, go}) => {
    const getName = (user) => {
        if (user == null || user.first_name == null)
            return "Приятель"
        return fetchedUser.first_name
    }

    return (
        <Panel id={id}>
            {/*<PanelHeader right={<Avatar size={36} />}>Panel 1</PanelHeader>*/}
            <Group>
                <Placeholder
                    icon={<Icon56UsersOutline />}
                    header={"Приветствуем, " + getName(fetchedUser) + "!"}
                    action={<Button size="m" onClick={go} data-to="Home">Перейти к списку друзей</Button>}
                >
                    Приложение разработано в рамках финала хакатона.
                </Placeholder>
            </Group>
        </Panel>
    )
}

export default WelcomeScreen;