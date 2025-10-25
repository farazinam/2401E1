import 'package:flutter/material.dart';
import 'package:mobileapp/CRUD/create.dart';
import 'package:mobileapp/CRUD/read.dart';
import 'package:mobileapp/callLog.dart';
import 'package:mobileapp/dynamicList.dart';
import 'package:mobileapp/form.dart';
import 'package:mobileapp/gridview.dart';
import 'package:mobileapp/image.dart';
import 'package:mobileapp/popups.dart';
import 'package:mobileapp/product.dart';
import 'package:mobileapp/tabbar.dart';
import 'package:mobileapp/table.dart';
import 'navbar.dart';
import 'firstpage.dart';

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

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      useInheritedMediaQuery: true,
      locale: DevicePreview.locale(context),
      builder: DevicePreview.appBuilder,
      theme: ThemeData.light(),
      darkTheme: ThemeData.dark(),
      // home: CallLog(),
      // home: FormElements(),
      // home: GridViewExample(),
      // home: TabBarExample(),
      // home: Products(),
      // home: PopUps(),
      // home: DynamicList(),
      // home: TableExample()

      // home: CreateExample()
      home: ReadExample()
    );
  }
}