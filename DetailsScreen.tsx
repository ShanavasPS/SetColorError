import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

// Import package.json to get actual versions
const packageJson = require('./package.json');

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Settings: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen: React.FC<Props> = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#0A0A0A' : '#F8FAFC',
  };

  // Dynamic styles based on theme
  const dynamicStyles = {
    title: {
      color: isDarkMode ? '#FFFFFF' : '#1E293B',
    },
    subtitle: {
      color: isDarkMode ? '#94A3B8' : '#64748B',
    },
    card: {
      backgroundColor: isDarkMode ? '#1E1E1E' : '#FFFFFF',
      borderColor: isDarkMode ? '#2D2D2D' : '#E2E8F0',
    },
    label: {
      color: isDarkMode ? '#94A3B8' : '#475569',
    },
    value: {
      color: isDarkMode ? '#F1F5F9' : '#1E293B',
    },
    versionBadge: {
      backgroundColor: isDarkMode ? '#3B82F6' : '#DBEAFE',
    },
    versionText: {
      color: isDarkMode ? '#FFFFFF' : '#1E40AF',
    },
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.content}>
          <Text style={[styles.title, dynamicStyles.title]}>
            Project Details
          </Text>
          <Text style={[styles.subtitle, dynamicStyles.subtitle]}>
            Detailed information about your React Native project
          </Text>

          <View style={[styles.card, dynamicStyles.card]}>
            <Text style={[styles.sectionTitle, dynamicStyles.title]}>
              Dependencies
            </Text>
            
            <View style={styles.infoRow}>
              <Text style={[styles.label, dynamicStyles.label]}>
                React Native
              </Text>
              <View style={[styles.versionBadge, dynamicStyles.versionBadge]}>
                <Text style={[styles.versionText, dynamicStyles.versionText]}>
                  {packageJson.dependencies['react-native']}
                </Text>
              </View>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={[styles.label, dynamicStyles.label]}>
                React
              </Text>
              <View style={[styles.versionBadge, dynamicStyles.versionBadge]}>
                <Text style={[styles.versionText, dynamicStyles.versionText]}>
                  {packageJson.dependencies.react}
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.card, dynamicStyles.card]}>
            <Text style={[styles.sectionTitle, dynamicStyles.title]}>
              Development Dependencies
            </Text>
            
            <View style={styles.infoRow}>
              <Text style={[styles.label, dynamicStyles.label]}>
                TypeScript
              </Text>
              <View style={[styles.versionBadge, dynamicStyles.versionBadge]}>
                <Text style={[styles.versionText, dynamicStyles.versionText]}>
                  {packageJson.devDependencies.typescript}
                </Text>
              </View>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={[styles.label, dynamicStyles.label]}>
                ESLint
              </Text>
              <View style={[styles.versionBadge, dynamicStyles.versionBadge]}>
                <Text style={[styles.versionText, dynamicStyles.versionText]}>
                  {packageJson.devDependencies.eslint}
                </Text>
              </View>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={[styles.label, dynamicStyles.label]}>
                Prettier
              </Text>
              <View style={[styles.versionBadge, dynamicStyles.versionBadge]}>
                <Text style={[styles.versionText, dynamicStyles.versionText]}>
                  {packageJson.devDependencies.prettier}
                </Text>
              </View>
            </View>
          </View>

          <View style={[styles.card, dynamicStyles.card]}>
            <Text style={[styles.sectionTitle, dynamicStyles.title]}>
              Project Information
            </Text>
            
            <View style={styles.infoRow}>
              <Text style={[styles.label, dynamicStyles.label]}>
                Name
              </Text>
              <Text style={[styles.value, dynamicStyles.value]}>
                {packageJson.name}
              </Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={[styles.label, dynamicStyles.label]}>
                Version
              </Text>
              <Text style={[styles.value, dynamicStyles.value]}>
                {packageJson.version}
              </Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={[styles.label, dynamicStyles.label]}>
                Private
              </Text>
              <Text style={[styles.value, dynamicStyles.value]}>
                {packageJson.private ? 'Yes' : 'No'}
              </Text>
            </View>
          </View>

          <View style={[styles.card, dynamicStyles.card]}>
            <Text style={[styles.sectionTitle, dynamicStyles.title]}>
              Scripts
            </Text>
            
            {Object.entries(packageJson.scripts).map(([scriptName, scriptCommand]) => (
              <View key={scriptName} style={styles.infoRow}>
                <Text style={[styles.label, dynamicStyles.label]}>
                  {scriptName}
                </Text>
                <Text style={[styles.value, dynamicStyles.value]}>
                  {scriptCommand as string}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 32,
  },
  card: {
    borderRadius: 20,
    padding: 28,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 12,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.04)',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'right',
    flex: 1,
  },
  versionBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  versionText: {
    fontSize: 14,
    fontWeight: '700',
  },
});

export default DetailsScreen; 