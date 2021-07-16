import React from "react";
import { SvgProps } from "react-native-svg";

export interface CategoryModel {
  id: string;
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}
