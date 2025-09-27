import 'package:flutter/material.dart';

class Navbar extends StatelessWidget {
  const Navbar({super.key});

  @override
  Widget build(BuildContext context) {
    return  MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          centerTitle: true,
          backgroundColor: Color.fromRGBO(100, 150, 76, 0.8),
          title: Text("eCommerce",
          style: TextStyle(
            fontStyle: FontStyle.italic,
            fontWeight: FontWeight.bold
          ),
          ),
          // leading: Icon(Icons.more_vert),
          actions: [
            IconButton(onPressed: (){
              print("Clicking...");
            }, icon: Icon(Icons.menu))
          ],
        ),
        drawer: Drawer(
          child: ListView(
            children: [
              UserAccountsDrawerHeader(
                accountName: Text("Faraz Inam"),
                 accountEmail: Text("farazinam@gmail.com"),
                 currentAccountPicture: 
                 CircleAvatar(
                  child: Text("Image"),
                 ),
                 ),
                 ListTile(
                  leading: Icon(Icons.settings),
                  title: Text("Settings"),
                  subtitle: Text("Learn more.."),
                  trailing: Icon(Icons.arrow_back),
                 ),
                 ListTile(
                  leading: Icon(Icons.message),
                  title: Text("Message"),
                  subtitle: Text("Learn more.."),
                  trailing: Icon(Icons.arrow_back),
                 ),
                 ListTile(
                  leading: Icon(Icons.phone),
                  title: Text("phone"),
                  subtitle: Text("Learn more.."),
                  trailing: Icon(Icons.arrow_back),
                 ),
            ],
          ),
        ),
    )       
      );
  }
}