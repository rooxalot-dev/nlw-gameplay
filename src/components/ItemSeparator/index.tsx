import React from "react";
import { StyleSheet, View } from "react-native";
import { theme } from "../../global/styles/theme";

export function ItemSeparator() {
  return (
    <View style={{
      height: StyleSheet.hairlineWidth,
      width: '75%',
      alignSelf: 'flex-end',
      marginBottom: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme.colors.secondary40,
    }} />
  )
};
