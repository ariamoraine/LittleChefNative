import { Dimensions } from 'react-native';

export const MAINFONT = 'JosefinSlab-SemiBoldItalic';
export const SECONDFONT = 'JosefinSlab-Bold';
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

export const allRecipes = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
  },
  headerText: {
    top: 10,
    fontFamily: MAINFONT,
    fontSize: TEXTHEADERSIZE
  },
  addRecipeButton: {
    backgroundColor: 'rgb(117, 117, 117)',
    position: 'absolute',
    padding: 10,
    left: 0,
    right: 0,
    bottom: 0
  },
  addRecipeText: {
    fontFamily: MAINFONT,
    color: 'white',
    textAlign: 'center'
  }
};
