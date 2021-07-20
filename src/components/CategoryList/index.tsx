import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { styles } from "./styles";
import { categories } from "../../utils/categories";
import { Category } from "../Category";

type CategoryListProps = {
  hasCheck?: boolean;
  selectedCategory: string;
  onSetCategory: (categoryId: string) => void;
}

export function CategoryList({ hasCheck = false, selectedCategory, onSetCategory }: CategoryListProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 40 }}>
        {categories.map((category) =>
          <Category
            hasCheck={hasCheck}
            onPress={() => hasCheck && onSetCategory(category.id)}
            checked={selectedCategory === category.id}
            key={category.id}
            category={category}
          />
        )}
      </ScrollView>
    </View>
  );
}
