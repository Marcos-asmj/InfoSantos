import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, CardContent, CardImage } from 'react-native-cards';

import { NomeJogador } from "../../assets/style";

import imgs from '../../assets/imgs';

export default class FeedCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            feed: this.props.feed,
            navegador: this.props.navegador
        }
    }

    render = () => {
        const { feed, navegador } = this.state;

        return(
            <TouchableOpacity onPress={
                () => {
                    navegador.navigate("Detalhes", { feedId: feed._id })
                }
            }>
                <Card>
                    <CardImage
                    source={imgs[feed._id - 1].foto}/>
                    <CardContent>
                        <NomeJogador>{feed.nome}</NomeJogador>
                    </CardContent>
                </Card>
            </TouchableOpacity>
        );
    }
}