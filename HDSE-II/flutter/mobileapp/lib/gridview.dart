import 'package:flutter/material.dart';

class GridViewExample extends StatelessWidget {
  const GridViewExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body:
      //  GridView.count(
      //   crossAxisCount: 3,
       GridView.extent(
        maxCrossAxisExtent: 100,
        crossAxisSpacing: 30,
        mainAxisSpacing: 10,

        children: [
          Container(
            color: Colors.green[200],
          ),
          Container(
            color: Colors.red[200],
          ),
          Container(
            color: Colors.blue[200],
          ),
          Container(
            color: Colors.black54,
          ),
          Container(
            color: Colors.brown[200],
          ),
          Container(
            color: Colors.grey[200],
          ),
          Container(
            color: Colors.purple[200],
          ),
        ],
        ),
    );
  }
}