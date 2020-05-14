import React from "react";
import { createStackNavigator } from "react-navigation";
import Video from "../page/Video";
import { InnerProgressStackNavigator } from "./InnerProgressNavigator";

const fontLoaded = true;

export const VideoStackNavigator = createStackNavigator(
  {
    Video: {
      screen: (props) => <Video {...props} />,
      navigationOptions: {
        header: null,
        headerMode: "float",
      },
    },
  },
  {
    headerBackTitleVisible: false,
    headerMode: "float",
    headerTransitionPreset: "fade-in-place",
  }
);
