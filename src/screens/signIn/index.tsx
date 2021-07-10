import React from 'react';
import {
    Text,
    View,
    Image,
    StatusBar
} from 'react-native';
import { styles } from './styles'
import IlustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon'

export function SignIn() {
    return (
        <>
            <View style={styles.container}>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor="transparent"
                    translucent //mostra a barra de status 
                />
                <Image
                    source={IlustrationImg}
                    style={styles.image}
                    resizeMethod="resize" />


                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se{'\n'}
                        e organize suas{'\n'}
                        jogatinas
                    </Text>
                    <Text style={styles.subTitle}>
                        Crie grupos para jogar seus games {'\n'}
                        favoritos com seus amigos
                    </Text>
                    <ButtonIcon title={'Entrar com o discord'} activeOpacity={.7} />
                </View>
            </View>

        </>
    );
}
