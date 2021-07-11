import React from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import { styles } from './styles'
import IlustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon'
import { useNavigation } from '@react-navigation/native';

export function SignIn() {

    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('home')
    }


    return (
        <>
            <View style={styles.container}>
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
                    <ButtonIcon title={'Entrar com o discord'} onPress={() => handleSignIn()} />
                </View>
            </View>

        </>
    );
}
