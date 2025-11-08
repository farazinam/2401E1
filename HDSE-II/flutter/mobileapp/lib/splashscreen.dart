// import 'dart:nativewrappers/_internal/vm/lib/async_patch.dart';

import 'dart:async';

import 'package:flutter/material.dart';
import 'package:mobileapp/Auth/signin.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    Timer(Duration(seconds: 5), (){
      // Navigator.pushNamed(context, '/signin');
      Navigator.pushReplacementNamed(context, '/signin');
    });

  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: double.infinity,
        height: double.infinity,
        color: Colors.green[300],
        child: Center(
          child: Text("Splash Screen", 
          style: TextStyle(
            fontSize: 30, fontWeight: FontWeight.bold, color: Colors.white),),
        ),
      ),
    );
  }
}