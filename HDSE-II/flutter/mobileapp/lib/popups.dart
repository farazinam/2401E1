import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';

class PopUps extends StatelessWidget {
  const PopUps({super.key});

  @override
  Widget build(BuildContext context) {
    return
    // AlertDialog(
    //   title: Text("Oops!"),
    //   content: Text("Network Connection time out.."),
    //   actions: [
    //     TextButton(onPressed: () => Navigator.pop(context),
    //     child: Text("OK")),
    //     ElevatedButton(onPressed: (){
    //       Navigator.pop(context);
    //     }, child: Text("Cancel"))
    //   ],
    // );
    Scaffold(
      body: Center(
        child: Column(
          children: [
            ElevatedButton(
              onPressed: () {
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(
                    content: Text("This is a SnackBar"),
                    duration: Duration(seconds: 2),
                  ),
                );
              },
              child: Text("Snake Bar"),
            ),

            ElevatedButton(
              onPressed: abc,
              child: Text("Toast"),
            ),
          ],
        ),
      ),
    );
  }
}

void abc(){
  Fluttertoast.showToast(
    msg: "This is a Fluuter Toast");
}
