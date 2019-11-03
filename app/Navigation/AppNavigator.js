import QuranList from '../Containers/QuranListPage/Quran_list';
import QuranDetail from '../Containers/QuranDetailPage/Quran_detail';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppStack = createStackNavigator(
  {
    QuranList: {
      screen: QuranList,
    },
    QuranDetail: {
      screen: QuranDetail,
    },
  },
  {
    defaultNavigationOptions: {
      initialRouteName: QuranList,
      resetOnBlur: true,
    },
  },
);

const AppContainer = createAppContainer(AppStack);

export default AppContainer;