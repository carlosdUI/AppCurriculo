import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

const Card = () => {
    return(
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeader}>Experiências profissionais</Text>
            </View>

            <View style={styles.cardContent}>
              <Text style={styles.cardContentText}>UI/UX Designer - Fábricainfo</Text>
              <Text style={styles.cardContentText}>Dev Mobile - Fábricainfo</Text>
              <Text style={styles.cardContentText}>Dev Front End - Fábricainfo</Text>
            </View>

          </View>
        </View>    

    )


}

export default Card