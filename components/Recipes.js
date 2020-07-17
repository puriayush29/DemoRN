import React, { Component, useState } from 'react'
import { StyleSheet, Text, TouchableHighlight, SafeAreaView, ScrollView } from 'react-native'
import Constants from 'expo-constants'

const Recipes = ({ recipes }) => {
    //const [modalVisible, setModalVisible] = useState(false);
    console.log(recipes)
    let recipesList = recipes.length > 0 ?
        recipes.map((recipe, i) =>
            <TouchableHighlight
                key={i}
                underlayColor="pink"
                style={styles.highlightText}
                onPress={() => {
                    alert(recipe.description)
                }}>
                <Text style={styles.text}>
                    {recipe.item_name}
                </Text>
            </TouchableHighlight>
        ) : <Text>Tap to GET Recipes!!</Text>

    // const AlertRecipe = () => {
    //     console.log("Hello")
    // }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {recipesList}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Recipes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    scrollView: {
        marginHorizontal: 15,
    },
    text: {
        fontSize: 25,
    },
    highlightText: {
        padding: 10
    }
});