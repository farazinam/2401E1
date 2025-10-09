import 'package:flutter/material.dart';

class PopUps extends StatelessWidget {
  const PopUps({super.key});

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text("Oops!"),
      content: Text("Network Connection time out.."),
      actions: [
        TextButton(onPressed: () => Navigator.pop(context),
        child: Text("OK")),
        ElevatedButton(onPressed: (){
          Navigator.pop(context);
        }, child: Text("Cancel"))
      ],
    );
  }
}