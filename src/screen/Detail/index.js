import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import Fonts from '../../assets/fonts';
import Images from '../../assets/images';

export default class Detail extends Component {
  render() {
    return (
      <View style={styles.detailContainer}>
        <View style={styles.detailHeader}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
            <Image source={Images.back} style={styles.backBtnIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Images.like} style={styles.backBtnIcon} />
          </TouchableOpacity>
        </View>
        <View>
          <Image source={Images.donutclr} style={styles.detailDisplayPic} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.detailSubContainer}>
            <Text style={styles.inLabel}>Ingredients</Text>
            <View style={styles.inListCon}>
              <View style={styles.inList}>
                <Text style={styles.inType}>Sugar</Text>
                <Text style={styles.inCont}>8 Gram</Text>
                <Text style={styles.inPer}>2%</Text>
              </View>
              <View style={styles.inList}>
                <Text style={styles.inType}>Salt</Text>
                <Text style={styles.inCont}>8 Gram</Text>
                <Text style={[styles.inPer, {backgroundColor: '#fbe9f1'}]}>
                  .3%
                </Text>
              </View>
              <View style={styles.inList}>
                <Text style={styles.inType}>Fat</Text>
                <Text style={styles.inCont}>8 Gram</Text>
                <Text style={[styles.inPer, {backgroundColor: '#FDF4E6'}]}>
                  12%
                </Text>
              </View>
              <View style={styles.inList}>
                <Text style={styles.inType}>Energy</Text>
                <Text style={styles.inCont}>140 Kcal</Text>
                <Text style={[styles.inPer, {backgroundColor: '#f8f8f8'}]}>
                  40%
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.detailLbl}>Details</Text>
              <View style={styles.detailDesmid}>
                <Text style={styles.detailDes}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Alias labore inventore vel officia praesentium veniam fugiat
                  culpa quo at ea reiciendis cum tempora, corporis id pariatur
                  obcaecati officiis nam? Corporis!
                </Text>
                <View style={styles.addItemBtns}>
                  <TouchableOpacity>
                    <Image source={Images.plus} style={styles.addIcon} />
                  </TouchableOpacity>
                  <Text style={styles.itemCount}>1</Text>
                  <TouchableOpacity>
                    <Image source={Images.minus} style={styles.minusIcon} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.detailBottom}>
          <View>
            <Text style={styles.itemPrice}>$45</Text>
            <Text style={styles.total}>TOTAL PAYABLE</Text>
          </View>
          <TouchableOpacity
            style={styles.addtocart}
            onPress={() => this.props.navigation.navigate('TrackOrder')}>
            <Text style={styles.addText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailContainer: {
    backgroundColor: '#ebf3f4',
    flex: 1,
  },
  detailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  backBtnIcon: {
    width: 20,
    height: 20,
    marginTop: 5,
  },
  detailDisplayPic: {
    width: 160,
    height: 160,
    alignSelf: 'center',
    marginVertical: 30,
  },
  detailSubContainer: {
    backgroundColor: '#f7fafa',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingHorizontal: 20,
    padding: 20,
    height: 500,
  },
  inLabel: {
    fontSize: 20,
    fontFamily: Fonts.type.HelveticaBold,
    fontWeight: 'bold',
    color: '#000',
  },
  inListCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  inList: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inType: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    color: '#000',
  },
  inCont: {
    fontSize: 12,
    textAlign: 'center',
    opacity: 0.5,
    paddingVertical: 8,
    color: '#808080',
  },
  inPer: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: '#dff7fc',
    paddingTop: 15,
    borderRadius: 50,
    width: 50,
    height: 50,
    color: '#000',
  },
  detailLbl: {
    fontSize: 18,
    fontFamily: Fonts.type.HelveticaBold,
    fontWeight: 'bold',
    color: '#000',
  },
  detailDes: {
    fontSize: 16,
    fontFamily: Fonts.type.RubikLight,
    paddingVertical: 15,
    textAlign: 'justify',
    color: '#808080',
    width: '70%',
  },
  detailBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 9,
  },
  itemPrice: {
    fontSize: 20,
    fontFamily: Fonts.type.ProximaBlack,
    color: '#000',
    fontWeight: 'bold',
  },
  total: {
    fontSize: 14,
    fontFamily: Fonts.type.ProximaBlack,
    color: '#808080',
  },
  addtocart: {
    backgroundColor: '#000',
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  addText: {
    color: '#fff',
    paddingVertical: 10,
  },
  detailDesmid: {
    flexDirection: 'row',
  },
  addItemBtns: {
    width: '30%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: 15,
    alignItems: 'flex-end',
  },
  addIcon: {
    width: 30,
    height: 30,
  },
  minusIcon: {
    width: 30,
    height: 30,
  },
  itemCount: {
    textAlign: 'center',
    paddingHorizontal: 12,
    alignContent: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: Fonts.type.RubikBold,
    color: '#000',
  },
});
