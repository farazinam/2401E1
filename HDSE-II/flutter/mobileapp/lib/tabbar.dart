import 'package:flutter/material.dart';

class TabBarExample extends StatelessWidget {
  const TabBarExample({super.key});

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 3, 
      child: Scaffold(
        appBar: AppBar(
          title: Text("APP BAR"),
          bottom: TabBar(
            tabs: 
            [
              Tab(icon: Icon(Icons.all_inbox),),
              Tab(icon: Icon(Icons.favorite),),
              Tab(icon: Icon(Icons.mark_as_unread_outlined),)
            ]
            ),
        ),
        body: TabBarView(
          children: 
          [
            Center(
              child: Text("INBOX DATA"),
            ),
            Center(
              child: Text("FAVORITE DATA"),
            ),
            Center(
              child: Text("UNREAD DATA"),
            ),
          ]
          ),

      ));
  }
}