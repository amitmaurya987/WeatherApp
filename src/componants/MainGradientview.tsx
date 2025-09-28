import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  children: React.ReactNode;
};

const MainGradientView: React.FC<Props> = ({ children }) => {
  return (
    <LinearGradient
      colors={['#1E2A78', '#7A2D91', '#C445B2']} // gradient colors
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.gradient}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1, // full height (100vh equivalent in RN)
  },
  scrollContent: {
    flexGrow: 1, // ensures scroll if content > screen
  },
});

export default MainGradientView;
