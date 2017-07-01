import { Dimensions } from 'react-native';


// export const MAINFONT = 'TenaliRamakrishna-Regular';
export const MAINFONT = 'JosefinSlab-SemiBoldItalic';
export const TEXTHEADERSIZE = 45;
export const PHOTOSIZE = Dimensions.get('window').width;

export const indexPage = {
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  welcomeText: {
    fontFamily: MAINFONT,
    fontSize: TEXTHEADERSIZE,
    color: '#ffffff',
    textAlign: 'center',
    textShadowColor: 'grey',
    textShadowOffset: {height: 2, width: 2},
    textShadowRadius: 5
  },
  knifeForkLogo: {
    position: 'absolute',
    alignSelf: 'center',
    top: 400,
    width: 150,
    height: 150
  }
}

// module.exports = StyleSheet.create({
//   mainFont =
//   backgroundImage: {
//     flex: 1,
//     width: null,
//     height: null,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     flexDirection: 'column'
//   },
//   welcomeText: {
//     textAlign: 'center',
//     color: 'white',
//     backgroundColor: 'rgba(0,0,0,0)',
//     fontSize: 45,
//     fontFamily: 'TenaliRamakrishna-Regular'
//   }
// })
