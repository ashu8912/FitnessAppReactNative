import React from "react";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import { CurrentWorkoutStackNavigator } from "./CurrentWorkoutStackNavigator";
import { TabBarIcon } from "../component/TabBarIcon";
import { Calendar } from "../page/Calendar";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Statistics } from "../page/Statistics";
import { VideoStackNavigator } from "./VideoStackNavigator";
import { ProgressStackNavigator } from "./ProgressNavigator";
import { FontAwesome } from "@expo/vector-icons";
import TabBarComponent from "../component/TabBarComponent";
import { CalendarStackNavigator } from "./CalendarStackNavigator";

const BottomTabNavigator = createBottomTabNavigator(
  {
    CurrentWorkout: {
      screen: CurrentWorkoutStackNavigator,
      navigationOptions: () => ({
        tabBarIcon: (props) => (
          <Ionicons name="ios-fitness" size={24} color="black" />
        ),
        tabBarLabel: "fitness",
      }),
    },

    Calendar: {
      // screen: props => <Calendar fontLoaded={fontLoaded} {...props} />,
      screen: CalendarStackNavigator,
      header: null,
      navigationOptions: () => ({
        tabBarIcon: (props) => (
          <AntDesign name="calendar" size={24} color="black" />
        ),
        tabBarLabel: "calendar",
      }),
    },
    Statistics: {
      screen: (props) => <Statistics fontLoaded={fontLoaded} {...props} />,
      navigationOptions: () => ({
        tabBarIcon: (props) => (
          <Feather name="trending-up" size={24} color="black" />
        ),
        tabBarLabel: "statistics",
      }),
    },
    Progress: {
      screen: ProgressStackNavigator,
      header: null,
      navigationOptions: () => ({
        tabBarIcon: (props) => <Entypo name="images" size={24} color="black" />,
        tabBarLabel: "progress",
      }),
    },
    Video: {
      screen: VideoStackNavigator,
      header: null,
      navigationOptions: () => ({
        tabBarIcon: (props) => (
          <FontAwesome name="video-camera" size={24} color="black" />
        ),
        tabBarLabel: "video",
      }),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "black",
      inactiveBackgroundColor: "#57c5b8",
      style: {
        backgroundColor: "#57c5b8",
      },
    },
  }
);

export const BottomTabContainer = createAppContainer(BottomTabNavigator);
