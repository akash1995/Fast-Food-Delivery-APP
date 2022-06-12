import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Fonts from '../../assets/fonts';
import Images from '../../assets/images';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: 'donut',
    };
  }

  _renderItem = () => {
    if (this.state.tag == 'donut') {
      return (
        <View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.donut1} style={styles.foodItem} />
                <Text style={styles.foodName}>Nuts Caramel</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.donut2} style={styles.foodItem} />
                <Text style={styles.foodName}>Nuts Caramel</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.donut3} style={styles.foodItem} />
                <Text style={styles.foodName}>Nuts Caramel</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.donut4} style={styles.foodItem} />
                <Text style={styles.foodName}>Nuts Caramel</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else if (this.state.tag == 'burger') {
      return (
        <View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.burger1} style={styles.foodItem} />
                <Text style={styles.foodName}>Cheese Burger</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.burger2} style={styles.foodItem} />
                <Text style={styles.foodName}>Chicken Burger</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.burger3} style={styles.foodItem} />
                <Text style={styles.foodName}>Double Tacker</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.burger4} style={styles.foodItem} />
                <Text style={styles.foodName}>Regular Burger</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else if (this.state.tag == 'pancake') {
      return (
        <View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.pancake1} style={styles.foodItem} />
                <Text style={styles.foodName}>Pan Cake</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.pancake2} style={styles.foodItem} />
                <Text style={styles.foodName}>Pan Cake</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.pancake3} style={styles.foodItem} />
                <Text style={styles.foodName}>Pan Cake</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.pancake4} style={styles.foodItem} />
                <Text style={styles.foodName}>Pan Cake</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else if (this.state.tag == 'pizza') {
      return (
        <View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.pizza1} style={styles.foodItem} />
                <Text style={styles.foodName}>Pizza</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.pizza2} style={styles.foodItem} />
                <Text style={styles.foodName}>Pizza</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.pizza3} style={styles.foodItem} />
                <Text style={styles.foodName}>Pizza</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.pizza4} style={styles.foodItem} />
                <Text style={styles.foodName}>Pizza</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else if (this.state.tag == 'icecream') {
      return (
        <View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.icecream1} style={styles.foodItem} />
                <Text style={styles.foodName}>Ice Cream</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.icecream2} style={styles.foodItem} />
                <Text style={styles.foodName}>Ice Cream</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.icecream3} style={styles.foodItem} />
                <Text style={styles.foodName}>Ice Cream</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.icecream4} style={styles.foodItem} />
                <Text style={styles.foodName}>Ice Cream</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    } else if (this.state.tag == 'smoothie') {
      return (
        <View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.smoothie1} style={styles.foodItem} />
                <Text style={styles.foodName}>Smoothie</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.smoothie2} style={styles.foodItem} />
                <Text style={styles.foodName}>Smoothie</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.smoothie3} style={styles.foodItem} />
                <Text style={styles.foodName}>Smoothie</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.foodCon}>
              <TouchableOpacity
                style={styles.foodClickArea}
                onPress={() => this.props.navigation.navigate('Detail')}>
                <View style={{position: 'absolute', right: 0}}>
                  <Text style={styles.foodPrice}>$36</Text>
                </View>
                <Image source={Images.smoothie4} style={styles.foodItem} />
                <Text style={styles.foodName}>Smoothie</Text>
                <Text style={styles.foodSmallName}>Dunkin's</Text>
                <View style={styles.foodBottom}>
                  <Image source={Images.like} style={styles.foodLike} />
                  <Text style={styles.foodRating}>3.8</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  };
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.headContainer}>
          <View style={styles.headTopContainer}>
            <View>
              <Image source={Images.pic} style={styles.profileImg} />
            </View>
            <View>
              <Image source={Images.bell} style={styles.bellImage} />
            </View>
          </View>
          <View style={styles.headTtlCon}>
            <Text style={styles.headTtl}>I Want To Eat...</Text>
          </View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <TouchableOpacity
              onPress={() => this.setState({tag: 'donut'})}
              style={
                this.state.tag == 'donut'
                  ? styles.itemCon
                  : styles.deactiveItemIcon
              }>
              <Image
                source={
                  this.state.tag == 'donut' ? Images.donutclr : Images.donutblk
                }
                style={styles.itemIcon}
              />
              <Text
                style={
                  this.state.tag == 'donut'
                    ? styles.itemText
                    : styles.deactiveItem
                }>
                Donut
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.setState({tag: 'burger'})}
              style={
                this.state.tag == 'burger'
                  ? styles.itemCon
                  : styles.deactiveItemIcon
              }>
              <Image
                source={
                  this.state.tag == 'burger'
                    ? Images.burgerclr
                    : Images.burgerblk
                }
                style={styles.itemIcon}
              />
              <Text
                style={
                  this.state.tag == 'burger'
                    ? styles.itemText
                    : styles.deactiveItem
                }>
                Burger
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.setState({tag: 'pancake'})}
              style={
                this.state.tag == 'pancake'
                  ? styles.itemCon
                  : styles.deactiveItemIcon
              }>
              <Image
                source={
                  this.state.tag == 'pancake'
                    ? Images.pancakeclr
                    : Images.pancakeblk
                }
                style={styles.itemIcon}
              />
              <Text
                style={
                  this.state.tag == 'pancake'
                    ? styles.itemText
                    : styles.deactiveItem
                }>
                Pancake
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.setState({tag: 'pizza'})}
              style={
                this.state.tag == 'pizza'
                  ? styles.itemCon
                  : styles.deactiveItemIcon
              }>
              <Image
                source={
                  this.state.tag == 'pizza' ? Images.pizzaclr : Images.pizaablk
                }
                style={styles.itemIcon}
              />
              <Text
                style={
                  this.state.tag == 'pizza'
                    ? styles.itemText
                    : styles.deactiveItem
                }>
                Pizza
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.setState({tag: 'icecream'})}
              style={
                this.state.tag == 'icecream'
                  ? styles.itemCon
                  : styles.deactiveItemIcon
              }>
              <Image
                source={
                  this.state.tag == 'icecream' ? Images.cakeclr : Images.cakeblk
                }
                style={styles.itemIcon}
              />
              <Text
                style={
                  this.state.tag == 'icecream'
                    ? styles.itemText
                    : styles.deactiveItem
                }>
                Ice cream
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.setState({tag: 'smoothie'})}
              style={
                this.state.tag == 'smoothie'
                  ? styles.itemCon
                  : styles.deactiveItemIcon
              }>
              <Image
                source={
                  this.state.tag == 'smoothie' ? Images.smclr : Images.smblk
                }
                style={styles.itemIcon}
              />
              <Text
                style={
                  this.state.tag == 'smoothie'
                    ? styles.itemText
                    : styles.deactiveItem
                }>
                Smoothie
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this._renderItem()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#ebf3f4',
    height: '100%',
  },
  headContainer: {
    backgroundColor: '#fff',
    borderTopRightRadius: 270,
    paddingTop: 15,
  },
  headTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  profileImg: {
    width: 50,
    height: 50,
  },
  bellImage: {
    width: 25,
    height: 25,
    marginVertical: 15,
  },
  headTtlCon: {
    paddingHorizontal: 28,
    paddingVertical: 5,
  },
  headTtl: {
    fontFamily: Fonts.type.RubikBold,
    fontSize: 20,
    color: '#000',
  },
  itemIcon: {
    width: 25,
    height: 25,
    alignSelf: 'center',
  },
  itemCon: {
    width: 70,
    borderColor: '#000',
    borderBottomWidth: 2.5,
    marginHorizontal: 10,
    paddingTop: 10,
  },
  deactiveItemIcon: {
    width: 70,
    borderBottomWidth: 0,
    marginHorizontal: 10,
    paddingTop: 10,
  },
  itemText: {
    textAlign: 'center',
    fontFamily: Fonts.type.HelveticaRegular,
    marginVertical: 3,
    color: '#000',
  },
  deactiveItem: {
    textAlign: 'center',
    fontFamily: Fonts.type.HelveticaRegular,
    marginVertical: 3,
    color: '#000',
  },
  foodCon: {
    paddingVertical: 5,
    width: '48%',
  },
  foodClickArea: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 20,
  },
  foodItem: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    marginVertical: 10,
  },
  foodPrice: {
    backgroundColor: '#fbe9f1',
    width: 60,
    padding: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 20,
    textAlign: 'center',
    color: '#e0659f',
    fontFamily: Fonts.type.RubikMedium,
  },
  foodName: {
    textAlign: 'center',
    fontFamily: Fonts.type.RubikMedium,
    color: '#000',
  },
  foodSmallName: {
    textAlign: 'center',
    fontFamily: Fonts.type.Rubik,
    fontSize: 12,
    opacity: 0.5,
    marginBottom: 10,
    color: '#000',
  },
  foodBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  foodLike: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  foodRating: {
    textAlign: 'center',
    fontFamily: Fonts.type.RubikMedium,
    color: '#000',
  },
});
