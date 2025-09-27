import 'package:flutter/material.dart';

class MyFirstApp extends StatelessWidget {
  const MyFirstApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text("First App"),
          centerTitle: true,
          backgroundColor: Colors.black,
          foregroundColor: Colors.white,
        ),
        body: Padding(
          padding: EdgeInsets.all(40),
          child: ListView(
            children: [
              Container(
                width: 100,
                height: 100,
                color: Colors.amber,
                child: 
                Icon(Icons.home, size: 60, color: Colors.white,),
              ),
              SizedBox(height: 20,),
              Container(
                width: 100,
                height: 100,
                color: Colors.red,
                child: 
                Icon(Icons.settings, size: 60, color: Colors.white,),
              ),
              SizedBox(height: 20,),
              Container(
                width: 100,
                height: 100,
                color: Colors.blue,
                child: 
                Icon(Icons.message, size: 60, color: Colors.white,),
              ),
              SizedBox(height: 20,),
              Container(
                width: 100,
                height: 100,
                color: Colors.green,
                child: 
                Icon(Icons.phone, size: 60, color: Colors.white,),
              ),
            ],
          ),
          ),
      ),
    );
  }
}