import 'package:flutter/material.dart';

// void main(){
//   runApp(
//     MaterialApp(
//       debugShowCheckedModeBanner: false,
//       home: Text("Hello World!")
//       ),
//     ); 
// }

void main(){
  runApp(
    MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          backgroundColor: Color.fromRGBO(100, 150, 76, 0.8),
          title: Text("eCommerce",
          style: TextStyle(
            fontStyle: FontStyle.italic,
            fontWeight: FontWeight.bold
          ),
          ),
          centerTitle: true,
          leading: Icon(Icons.menu),
        ),
      ),
    )
  );
}