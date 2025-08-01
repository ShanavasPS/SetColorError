# React Native Upgrade Crash: `-[RCTView setColor:]` Unrecognized Selector

If you’re upgrading your React Native app and suddenly hit the crash:

```
Exception thrown while executing UI block: "-[RCTView setColor:]: unrecognized selector sent to instance"
```

You’re not alone.

This issue often surfaces after upgrading React Native — especially when crossing version **0.76+** — and enabling or unknowingly inheriting the **New Architecture**.

---

## 🔍 What’s Causing This?

This runtime crash is typically a result of:

- Using **React Native 0.76 or higher**, where the **New Architecture is enabled by default**.
- Missing a required change in `AppDelegate.mm` that helps third-party native modules (like navigators or custom views) register correctly under the New Architecture.

> You might not even realize the New Architecture is enabled — especially if you didn’t opt in explicitly.

---

## 🧱 New Architecture: The Timeline

- **0.68** — Introduced **Fabric** and **TurboModules** as an opt-in.
- **0.69–0.75** — You had to **manually enable** the New Architecture.
- **0.76+** — The New Architecture is **enabled by default** in new projects.
- From 0.76 onwards, if you **don’t want** it, you must **manually disable it**.

---

## ✅ How to Enable or Disable the New Architecture

### iOS — `Podfile`

```ruby
# Enable (for React Native < 0.76, if you want to opt in)
ENV['RCT_NEW_ARCH_ENABLED'] = '1'

# Disable (for React Native >= 0.76, if you want to opt out)
ENV['RCT_NEW_ARCH_ENABLED'] = '0'
```

### Android — `android/gradle.properties`

```properties
# Enable (for React Native < 0.76, if you want to opt in)
newArchEnabled=true

# Disable (for React Native >= 0.76, if you want to opt out)
newArchEnabled=false
```

---

## 🧪 Why This Is Frustrating

- The app **builds fine** — the crash appears only **on interaction**.
- The **stack trace doesn’t help much** — it doesn’t point to the root cause.
- If you don’t know New Architecture is now enabled **by default**, it's easy to misdiagnose.

> ⚠️ Don’t trust the app just because it builds. These issues only appear at **runtime**.

📖 Always read [React Native release notes](https://reactnative.dev/blog).

- Especially important when upgrading across **major versions** like 0.68 → 0.76+.
- The [React Native Upgrade Helper](https://react-native-community.github.io/upgrade-helper/) helps — but **doesn’t fully cover New Architecture changes**.

---

## 🧨 What Breaks and Why?

React Native 0.77 **changed the way third-party libraries are initialized** when the New Architecture is enabled.

Without a specific setup in your `AppDelegate.mm`, native view modules from these libraries **won’t load correctly**, even though the app builds fine.

🔗 [React Native 0.77 Blog: RCTAppDependencyProvider](https://reactnative.dev/blog/2025/01/21/version-0.77#rctappdependencyprovider)

This new line was added in the community template and **must be added manually if missed**.

---

## 🛠 Solution / Fix

Update your `AppDelegate.mm` to include the required `RCTAppDependencyProvider` setup.

### 🔧 Patch

```diff
#import "AppDelegate.h"
#import <React/RCTBundleURLProvider.h>
+#import <ReactAppDependencyProvider/RCTAppDependencyProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"<Your app name>";
+  self.dependencyProvider = [RCTAppDependencyProvider new];
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}
@end
```

---

## 📌 Summary

- ❗ Crash like `-[RCTView setColor:]` after upgrade = **New Architecture issue**
- 🧬 0.76+ enables it **by default**
- ⚙️ React Native 0.77 changes how third-party native modules initialize on iOS
- ✅ If using New Architecture, you must set `dependencyProvider` in `AppDelegate.mm`
- 🔗 Affects native packages like `@react-navigation/native-stack`

---

## 🧰 Example Repo

See a minimal crash reproduction and fix here:

👉 [https://github.com/ShanavasPS/SetColorError](https://github.com/ShanavasPS/SetColorError)

---
