import React, { useState, useEffect } from "react";
import { View, Text, TextInputProps } from "react-native";

import { SmallInput } from "../../components/SmallInput";

import { styles } from "./styles";

type DoubleFieldProps = TextInputProps & {
  label: string;
  divider: string;
  onValuesChange?: (values: string[]) => void;
}

export function DoubleField({ label, divider, onValuesChange, ...rest }: DoubleFieldProps) {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  useEffect(() => {
    if (onValuesChange) {
      onValuesChange([value1, value2]);
    }
  }, [value1, value2]);

  return (
    <View style={styles.field}>
      <View>
        <Text style={styles.label}>{label}</Text>
      </View>

      <View style={styles.fieldRow}>
        <SmallInput {...rest} value={value1} onChangeText={(text) => setValue1(text)} />
        <Text style={styles.divider}> {divider} </Text>
        <SmallInput {...rest} value={value2} onChangeText={(text) => setValue2(text)} />
      </View>
    </View>
  )
}
