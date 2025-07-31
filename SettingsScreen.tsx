import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Settings: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

const SettingsScreen: React.FC<Props> = () => {
  const isDarkMode = useColorScheme() === 'dark';
  
  // Settings state
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(false);
  const [debugModeEnabled, setDebugModeEnabled] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

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
    description: {
      color: isDarkMode ? '#64748B' : '#94A3B8',
    },
    button: {
      backgroundColor: isDarkMode ? '#1E1E1E' : '#FFFFFF',
      borderColor: isDarkMode ? '#2D2D2D' : '#E2E8F0',
    },
    buttonText: {
      color: isDarkMode ? '#F1F5F9' : '#1E293B',
    },
  };

  const handleClearCache = () => {
    Alert.alert(
      'Clear Cache',
      'Are you sure you want to clear the app cache?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Clear',
          style: 'destructive',
          onPress: () => {
            Alert.alert('Success', 'Cache cleared successfully!');
          },
        },
      ]
    );
  };

  const handleResetSettings = () => {
    Alert.alert(
      'Reset Settings',
      'This will reset all settings to their default values. Are you sure?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            setNotificationsEnabled(true);
            setAutoSaveEnabled(false);
            setDebugModeEnabled(false);
            setAnalyticsEnabled(true);
            Alert.alert('Success', 'Settings reset to defaults!');
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.content}>
          <Text style={[styles.title, dynamicStyles.title]}>
            Settings
          </Text>
          <Text style={[styles.subtitle, dynamicStyles.subtitle]}>
            Configure your app preferences
          </Text>

          <View style={[styles.card, dynamicStyles.card]}>
            <Text style={[styles.sectionTitle, dynamicStyles.title]}>
              Notifications
            </Text>
            
            <View style={styles.settingRow}>
              <View style={styles.settingInfo}>
                <Text style={[styles.settingLabel, dynamicStyles.label]}>
                  Push Notifications
                </Text>
                <Text style={[styles.settingDescription, dynamicStyles.description]}>
                  Receive notifications about app updates and important events
                </Text>
              </View>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{false: '#767577', true: '#10B981'}}
                thumbColor={isDarkMode ? '#f4f3f4' : '#ffffff'}
              />
            </View>
          </View>

          <View style={[styles.card, dynamicStyles.card]}>
            <Text style={[styles.sectionTitle, dynamicStyles.title]}>
              App Behavior
            </Text>
            
            <View style={styles.settingRow}>
              <View style={styles.settingInfo}>
                <Text style={[styles.settingLabel, dynamicStyles.label]}>
                  Auto Save
                </Text>
                <Text style={[styles.settingDescription, dynamicStyles.description]}>
                  Automatically save your progress
                </Text>
              </View>
              <Switch
                value={autoSaveEnabled}
                onValueChange={setAutoSaveEnabled}
                trackColor={{false: '#767577', true: '#10B981'}}
                thumbColor={isDarkMode ? '#f4f3f4' : '#ffffff'}
              />
            </View>
            
            <View style={styles.settingRow}>
              <View style={styles.settingInfo}>
                <Text style={[styles.settingLabel, dynamicStyles.label]}>
                  Debug Mode
                </Text>
                <Text style={[styles.settingDescription, dynamicStyles.description]}>
                  Enable debug information and logging
                </Text>
              </View>
              <Switch
                value={debugModeEnabled}
                onValueChange={setDebugModeEnabled}
                trackColor={{false: '#767577', true: '#10B981'}}
                thumbColor={isDarkMode ? '#f4f3f4' : '#ffffff'}
              />
            </View>
            
            <View style={styles.settingRow}>
              <View style={styles.settingInfo}>
                <Text style={[styles.settingLabel, dynamicStyles.label]}>
                  Analytics
                </Text>
                <Text style={[styles.settingDescription, dynamicStyles.description]}>
                  Help improve the app by sharing usage data
                </Text>
              </View>
              <Switch
                value={analyticsEnabled}
                onValueChange={setAnalyticsEnabled}
                trackColor={{false: '#767577', true: '#10B981'}}
                thumbColor={isDarkMode ? '#f4f3f4' : '#ffffff'}
              />
            </View>
          </View>

          <View style={[styles.card, dynamicStyles.card]}>
            <Text style={[styles.sectionTitle, dynamicStyles.title]}>
              Data & Storage
            </Text>
            
            <TouchableOpacity
              style={[styles.actionButton, dynamicStyles.button]}
              onPress={handleClearCache}>
              <Text style={[styles.actionButtonText, dynamicStyles.buttonText]}>
                Clear Cache
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.actionButton, dynamicStyles.button]}
              onPress={handleResetSettings}>
              <Text style={[styles.actionButtonText, dynamicStyles.buttonText]}>
                Reset to Defaults
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.card, dynamicStyles.card]}>
            <Text style={[styles.sectionTitle, dynamicStyles.title]}>
              App Information
            </Text>
            
            <View style={styles.infoRow}>
              <Text style={[styles.label, dynamicStyles.label]}>
                Version
              </Text>
              <Text style={[styles.value, dynamicStyles.value]}>
                1.0.0
              </Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={[styles.label, dynamicStyles.label]}>
                Build
              </Text>
              <Text style={[styles.value, dynamicStyles.value]}>
                2024.1.1
              </Text>
            </View>
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
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.04)',
  },
  settingInfo: {
    flex: 1,
    marginRight: 16,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 14,
    fontWeight: '400',
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
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'right',
  },
  actionButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SettingsScreen; 