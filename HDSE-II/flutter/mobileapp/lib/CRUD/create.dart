import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class CreateExample extends StatefulWidget {
  const CreateExample({super.key});

  @override
  State<CreateExample> createState() => _CreateExampleState();
}

class _CreateExampleState extends State<CreateExample> {

    // GlobalKey<FormState> _FKey = GlobalKey<FormState>();

    final TextEditingController pname = TextEditingController();
    final TextEditingController pprice = TextEditingController();

    final CollectionReference pro = FirebaseFirestore.instance.collection("prod");

    Future <void> createData() async{
      var pn = pname.text.trim();
      var pp = pprice.text.trim();

      await pro.add({
        "Product Name" : pn,
        "Product Price" : pp,
      });

    }





  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        width: double.infinity,
        height: double.infinity,
        color: Colors.green[100],
        // margin: EdgeInsets.symmetric(horizontal: 50, vertical: 50),
        // margin: EdgeInsets.all(50),
        // margin: EdgeInsets.only(top: 20, right: 30, bottom: 40, left: 50),
        child: Form(
          // key: _FKey,
          child: Column(
            children: [

              SizedBox(height: 50),

              SizedBox(
                width: 350,
                child: TextFormField(
                  controller: pname,
                  maxLength: 15,
                  decoration: InputDecoration(
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.all(Radius.circular(50)),
                    ),
                    label: Text("Product Name"),
                    prefixIcon: Icon(Icons.email),
                  ),
                ),
              ),

              SizedBox(height: 30),

              Container(
                width: 350,
                child: TextFormField(
                  controller: pprice,
                  maxLength: 20,
                  decoration: InputDecoration(
                    border: OutlineInputBorder(
                      // borderSide: BorderSide(color: Colors.green)
                      borderRadius: BorderRadius.all(Radius.circular(50)),
                    ),
                    label: Text("Product Price"),
                    // hint: Text("Password")
                    prefixIcon: Icon(Icons.password),
                  ),
                ),
              ),

              SizedBox(height: 30),

              ElevatedButton(
                onPressed: createData,
                child: Icon(Icons.thumb_up),
                style: ElevatedButton.styleFrom(
                  fixedSize: Size(250, 35),
                  backgroundColor: Colors.green,
                ),
              ),
            ],
          ),
        ),
      ),
    );;
  }
}