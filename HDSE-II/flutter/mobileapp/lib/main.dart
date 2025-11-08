import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:mobileapp/Auth/signin.dart';
import 'package:mobileapp/Auth/signup.dart';
import 'package:mobileapp/dynamicList.dart';
import 'package:mobileapp/splashscreen.dart';

import 'package:device_preview/device_preview.dart';
import 'package:flutter/foundation.dart';
import 'package:get/get.dart';


import 'package:firebase_core/firebase_core.dart';
import 'firebase_options.dart';

Future<void> main() async{ 
  
  WidgetsFlutterBinding.ensureInitialized();

  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  
  
  runApp(
  DevicePreview(
    enabled: !kReleaseMode,
    builder: (context) => MyApp(), // Wrap your app
  ),
);
}

class MyApp extends StatefulWidget {
  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  User? user;

@override
  void initState() {
    // TODO: implement initState
    super.initState();
     user = FirebaseAuth.instance.currentUser;
  }

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      useInheritedMediaQuery: true,
      locale: DevicePreview.locale(context),
      builder: DevicePreview.appBuilder,
      theme: ThemeData.light(),
      darkTheme: ThemeData.dark(),

      home: user != null ? DynamicList() : SplashScreen(),
      // home: const SplashScreen(),

      routes: {
      '/signin' : (context) => SignInScreen(),
      '/signup' : (context) => SignUpScreen(),
      }
    );
  }
}