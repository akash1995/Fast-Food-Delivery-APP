import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Fonts from '../../assets/fonts';
import Images from '../../assets/images';
import MapView from 'react-native-maps';

export default class TrackOrder extends Component {
  render() {
    return (
      <ScrollView
        style={{backgroundColor: '#ebf3f4'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <MapView
          style={{height: 250, width: '100%'}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <View style={styles.profileCon}>
          <View style={styles.personDetail}>
            <Image style={styles.profilePic} source={Images.pic} />
            <View style={{marginTop: 5}}>
              <Text style={styles.perName}> Freaky IT</Text>
              <View style={{flexDirection: 'row'}}>
                <Image source={Images.star} style={styles.star} />
                <Text style={{color: '#808080'}}>4.7</Text>
              </View>
            </View>
          </View>

          <View style={styles.callCon}>
            <Image source={Images.call} style={styles.callIcon} />
          </View>
        </View>

        <View style={styles.estTimeCon}>
          <Text style={styles.estTime}>19:45</Text>
          <Text style={styles.estLbl}>Estimated Remaining Time</Text>
        </View>

        <View style={styles.trackMainCon}>
          <View style={styles.inCon}>
            <View style={{width: '20%'}}>
              <Image source={Images.clock} style={styles.clkIcon} />
            </View>
            <View style={{width: '70%'}}>
              <Text style={styles.textBold}>Donut Center (30 mins)</Text>
              <Text style={styles.textMed}>Restaurant</Text>
            </View>
          </View>

          <View style={{paddingLeft: 50}}>
            <Text style={styles.dot}>.</Text>
            <Text style={styles.dot}>.</Text>
            <Text style={styles.dot}>.</Text>
          </View>

          <View style={styles.inCon}>
            <View style={{width: '20%'}}>
              <Image source={Images.location} style={styles.clkIcon} />
            </View>
            <View style={{width: '70%'}}>
              <Text style={styles.textBold}>Ave 2019, 3rd floor DU</Text>
              <Text style={styles.textMed}>Your Office Address</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  profileCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 200,
  },
  personDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  perName: {
    fontSize: 15,
    fontFamily: Fonts.type.ProximaBlack,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
    marginLeft: 15,
  },
  star: {
    width: 15,
    height: 15,
    marginHorizontal: 15,
  },
  callCon: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 25,
    height: 20,
    width: 20,
    marginTop: 10,
  },
  callIcon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    position: 'relative',
    bottom: 9,
  },
  estTimeCon: {
    backgroundColor: '#f7fafa',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingHorizontal: 20,
    height: 150,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  estTime: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    fontFamily: Fonts.type.RubikBold,
  },
  estLbl: {
    textAlign: 'center',
    fontFamily: Fonts.type.RubikMedium,
    color: '#354259',
  },
  trackMainCon: {
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 20,
    height: 150,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 300,
  },
  inCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  textBold: {
    fontSize: 17,
    fontFamily: Fonts.type.RubikBold,
    color: '#000',
  },
  textMed: {
    fontFamily: Fonts.type.RubikMedium,
    color: '#354259',
  },
  clkIcon: {
    height: 25,
    width: 25,
    marginHorizontal: 20,
    marginTop: 8,
  },
  dot: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: Fonts.type.RubikBold,
  },
});
