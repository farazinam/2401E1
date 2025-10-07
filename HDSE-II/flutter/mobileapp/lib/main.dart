import 'package:flutter/material.dart';
import 'package:mobileapp/callLog.dart';
import 'package:mobileapp/form.dart';
import 'package:mobileapp/gridview.dart';
import 'package:mobileapp/image.dart';
import 'package:mobileapp/tabbar.dart';
import 'navbar.dart';
import 'firstpage.dart';

import 'package:device_preview/device_preview.dart';
import 'package:flutter/foundation.dart';

void main() => runApp(
  DevicePreview(
    enabled: !kReleaseMode,
    builder: (context) => MyApp(), // Wrap your app
  ),
);

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      useInheritedMediaQuery: true,
      locale: DevicePreview.locale(context),
      builder: DevicePreview.appBuilder,
      theme: ThemeData.light(),
      darkTheme: ThemeData.dark(),
      // home: CallLog(),
      // home: FormElements(),
      // home: GridViewExample(),
      home: TabBarExample(),
    );
  }
}