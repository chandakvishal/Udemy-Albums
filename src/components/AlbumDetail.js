import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'

const AlbumDetail = ({ album }) => {
    const {
        title,
        artist,
        thumbnail_image,
        image,
        url
    } = album;

    const {
        titleTextStyle,
        thumbnailStyle,
        imageStyle,
        thumbnailContainerStyle,
        textContainerStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={textContainerStyle}>
                    <Text style={titleTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button onButtonPress={() => Linking.openURL(url)} buttonText="Buy Now" />
            </CardSection>
        </Card>
    );
};

const styles = {
    titleTextStyle: {
        fontSize: 20
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5
    },
    textContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
        // paddingLeft: 5
    }
};

export default AlbumDetail;
