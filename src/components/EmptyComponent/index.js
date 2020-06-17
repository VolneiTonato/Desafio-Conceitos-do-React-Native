import React from 'react'

import {
    View, Text, StyleSheet
} from 'react-native'

const EmptyMessage = ({ message }) => {
    return (
        
            <View style={styles.emptyListStyle}>
                <Text style={styles.emptyMessageStyle}>{message || `No have items.`}</Text>
            </View>
        
    )
}


const styles = StyleSheet.create({

    emptyListStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    emptyMessageStyle: {
        color:'#fff',
        fontSize:26,
        textAlign: 'center',
    }

});


export default EmptyMessage