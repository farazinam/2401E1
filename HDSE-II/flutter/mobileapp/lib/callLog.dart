import 'package:flutter/material.dart';

class CallLog extends StatelessWidget {
  const CallLog({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Call Log", style: TextStyle(color: Colors.white, fontSize: 30),),
        leading: Icon(Icons.accessibility_new,  color: Colors.white,),
        centerTitle: true,
        backgroundColor: Colors.green,
        actions: [
          Row(
            children: [
              IconButton(onPressed: () {}, icon: Icon(Icons.login),  color: Colors.white,),
              IconButton(onPressed: () {}, icon: Icon(Icons.phone),  color: Colors.white,),
              IconButton(onPressed: () {}, icon: Icon(Icons.more_vert), color: Colors.white,),
            ],
          ),
        ],
      ),
      body:
      Container(
        color: Colors.green[100],
        child: 
       ListView(
        children: [
          ListTile(
            leading: CircleAvatar(
              child: Text("FI"),
            ),
            title: Text("Hey there, I am using WhatsApp!"),
            subtitle: Text("Hello friends, How are you??"),
            trailing: Icon(Icons.call_end, color: Colors.red,),
          ),
          ListTile(
            leading: CircleAvatar(
              child: Text("FI"),
            ),
            title: Text("Hey there, I am using WhatsApp!"),
            subtitle: Text("Hello friends, How are you??"),
            trailing: Icon(Icons.call_made, color: Colors.green,),
          ),
          ListTile(
            leading: CircleAvatar(
              child: Text("FI"),
            ),
            title: Text("Hey there, I am using WhatsApp!"),
            subtitle: Text("Hello friends, How are you??"),
            trailing: Icon(Icons.call_missed, color: Colors.red,),
          ),
          ListTile(
            leading: CircleAvatar(
              child: Text("FI"),
            ),
            title: Text("Hey there, I am using WhatsApp!"),
            subtitle: Text("Hello friends, How are you??"),
            trailing: Icon(Icons.call_received, color: Colors.blue,),
          ),
        ],
      ),
      )
    );
  }
}
