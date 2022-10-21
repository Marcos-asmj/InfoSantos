import React from "react";
import { Text } from 'react-native';
import { Card, CardImage, CardContent } from 'react-native-cards';

import bancoEstatico from "../../assets/feeds.json";

import imgs from "../../assets/imgs";

export default class Detalhes extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            feedId: this.props.navigation.state.params.feedId,
            feed: null
        }
    }

    carregarFeed = () => {
        const { feedId } = this.state;

        const feeds = bancoEstatico.feeds;
        const feedFiltrado = feeds.filter((feed) => feed._id === feedId);

        if (feedFiltrado.length) {
            this.setState({
                feed: feedFiltrado[0]
            })
        }
    }

    componentDidMount = () => {
        this.carregarFeed();
    }

    render = () => {
        const { feed } = this.state;

        if (feed) {
            return(
                <Card>
                    <CardImage
                        source={imgs[feed._id - 1].foto}/>
                    <CardContent>
                        <Text>Nome: {feed.nome}</Text>
                        <Text>Posição: {feed.pos}</Text>
                        <Text>Partidas disputadas: {feed.partidas}</Text>
                        <Text>Gols marcados: {feed.gols}</Text>
                        <Text>Assisntências: {feed.ass}</Text>
                        <Text>Cartôes amarelos: {feed.amarelo}</Text>
                        <Text>Cartôes vermelhos: {feed.vermelho}</Text>
                    </CardContent>
                </Card>                
            );
        } else {
            return(null);
        }
    }
}