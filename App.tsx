/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Platform} from 'react-native';

// Import package.json to get actual versions
const packageJson = require('./package.json');

// Simple runtime detection of new architecture
const detectNewArchitecture = (): boolean => {
  const uiManager = (global as any)?.nativeFabricUIManager ? 'Fabric' : 'Paper';
  console.log(`Using ${uiManager}`);
  return (global as any)?.nativeFabricUIManager !== undefined;
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#0A0A0A' : '#F8FAFC',
  };

  // Get actual versions from package.json
  const reactNativeVersion = packageJson.dependencies['react-native'];
  const reactVersion = packageJson.dependencies.react;
  const typescriptVersion = packageJson.devDependencies.typescript;

  // Use the simple runtime detection method
  const isNewArchitectureEnabled = detectNewArchitecture();

  // Dynamic styles based on theme
  const dynamicStyles = {
    appTitle: {
      color: isDarkMode ? '#FFFFFF' : '#1E293B',
    },
    appSubtitle: {
      color: isDarkMode ? '#94A3B8' : '#64748B',
    },
    infoCard: {
      backgroundColor: isDarkMode ? '#1E1E1E' : '#FFFFFF',
      borderColor: isDarkMode ? '#2D2D2D' : '#E2E8F0',
    },
    label: {
      color: isDarkMode ? '#94A3B8' : '#475569',
    },
    value: {
      color: isDarkMode ? '#F1F5F9' : '#1E293B',
    },
    statusDot: {
      backgroundColor: isNewArchitectureEnabled ? '#10B981' : '#F59E0B',
    },
    statusText: {
      color: isNewArchitectureEnabled ? '#10B981' : '#F59E0B',
    },
    versionBadge: {
      backgroundColor: isDarkMode ? '#3B82F6' : '#DBEAFE',
    },
    versionText: {
      color: isDarkMode ? '#FFFFFF' : '#1E40AF',
    },
    appIcon: {
      backgroundColor: isDarkMode ? '#3B82F6' : '#DBEAFE',
    },
    appIconText: {
      color: isDarkMode ? '#FFFFFF' : '#1E40AF',
    },
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={[styles.appIcon, dynamicStyles.appIcon]}>
              <Text style={[styles.appIconText, dynamicStyles.appIconText]}>
                SC
              </Text>
            </View>
            <Text style={[styles.appTitle, dynamicStyles.appTitle]}>
              SetColorCrash
            </Text>
            <Text style={[styles.appSubtitle, dynamicStyles.appSubtitle]}>
              React Native App Information
            </Text>
          </View>

          <View style={[styles.infoCard, dynamicStyles.infoCard]}>
            <View style={styles.infoRow}>
              <View style={styles.labelContainer}>
                <Text style={[styles.label, dynamicStyles.label]}>
                  React Native
                </Text>
              </View>
              <View style={[styles.versionBadge, dynamicStyles.versionBadge]}>
                <Text style={[styles.versionText, dynamicStyles.versionText]}>
                  {reactNativeVersion}
                </Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.labelContainer}>
                <Text style={[styles.label, dynamicStyles.label]}>React</Text>
              </View>
              <View style={[styles.versionBadge, dynamicStyles.versionBadge]}>
                <Text style={[styles.versionText, dynamicStyles.versionText]}>
                  {reactVersion}
                </Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.labelContainer}>
                <Text style={[styles.label, dynamicStyles.label]}>
                  TypeScript
                </Text>
              </View>
              <View style={[styles.versionBadge, dynamicStyles.versionBadge]}>
                <Text style={[styles.versionText, dynamicStyles.versionText]}>
                  {typescriptVersion}
                </Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.labelContainer}>
                <Text style={[styles.label, dynamicStyles.label]}>
                  New Architecture
                </Text>
              </View>
              <View style={styles.statusContainer}>
                <View style={[styles.statusDot, dynamicStyles.statusDot]} />
                <Text style={[styles.statusText, dynamicStyles.statusText]}>
                  {isNewArchitectureEnabled ? 'Enabled' : 'Disabled'}
                </Text>
              </View>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.labelContainer}>
                <Text style={[styles.label, dynamicStyles.label]}>
                  Platform
                </Text>
              </View>
              <Text style={[styles.value, dynamicStyles.value]}>
                {Platform.OS}
              </Text>
            </View>

            <View style={styles.infoRow}>
              <View style={styles.labelContainer}>
                <Text style={[styles.label, dynamicStyles.label]}>
                  Metro Config
                </Text>
              </View>
              <Text style={[styles.value, dynamicStyles.value]}>
                @react-native/metro-config
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  appIcon: {
    width: 64,
    height: 64,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  appIconText: {
    fontSize: 24,
    fontWeight: '700',
  },
  appTitle: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  appSubtitle: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  infoCard: {
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
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.04)',
  },
  labelContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'right',
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
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  statusText: {
    fontSize: 16,
    fontWeight: '700',
  },
});

export default App;
