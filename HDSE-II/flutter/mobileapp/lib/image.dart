import 'package:flutter/material.dart';

class GetImage extends StatelessWidget {
  const GetImage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: 700,
        height: 700,
        child: Column(
          children: [
            Container(
              color:  Colors.amber,
              width: 300,
              height: 300,
              child: Image.network("https://images.unsplash.com/photo-1758565811438-23e44c7c65fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"),
            ), 
            Container(
              width: 300,
              height: 300,
              child: Image.asset("assets/images/unsplash.jpg"),
            )
          ],
        )
      ),
      
    );
  }
}