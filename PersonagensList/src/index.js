import React, {Component} from 'react';

import { Text, Image, StyleSheet, View, FlatList } from "react-native";

import api from '../services/api';

export default class Main extends Component {
    constructor(props){
        super(props);

        this.state = {
            ListaPersonagens : []
        }
    }

    componentDidMount(){
        this.carregarPersonagens();
    }

    carregarPersonagens = async () => {
        const resposta = await api.get();
        const dadosDaApi = resposta.data;
        this.setState({ ListaPersonagens : dadosDaApi });
    };

    render(){
        return(
            <View>

            </View>
        )
    }
}