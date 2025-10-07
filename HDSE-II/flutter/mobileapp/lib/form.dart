import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

class FormElements extends StatefulWidget {
  const FormElements({super.key});

  @override
  State<FormElements> createState() => _FormElementsState();
}

class _FormElementsState extends State<FormElements> {
  var gen = "Gender";
  // var _course = false;

  bool _isDartSelected = false;
  bool _isFlutterSelected = true;

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
          child: Column(
            children: [
              SizedBox(
                width: double.infinity,
                height: 300,
                child: Image.asset(
                  "assets/images/unsplash.jpg",
                  fit: BoxFit.cover,
                ),
              ),
              Text(
                "Login Form",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 40,
                  color: Colors.green[600],
                ),
              ),

              SizedBox(height: 50),

              SizedBox(
                width: 350,
                child: TextFormField(
                  decoration: InputDecoration(
                    border: OutlineInputBorder(
                      // borderSide: BorderSide(color: Colors.green)
                      borderRadius: BorderRadius.all(Radius.circular(50)),
                    ),
                    label: Text("Email"),
                    // hint: Text("Email..")
                    prefixIcon: Icon(Icons.email),
                  ),
                ),
              ),

              SizedBox(height: 30),

              Container(
                width: 350,
                child: TextFormField(
                  decoration: InputDecoration(
                    border: OutlineInputBorder(
                      // borderSide: BorderSide(color: Colors.green)
                      borderRadius: BorderRadius.all(Radius.circular(50)),
                    ),
                    label: Text("Password"),
                    // hint: Text("Password")
                    prefixIcon: Icon(Icons.password),
                  ),
                ),
              ),

              SizedBox(height: 30),

              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Container(
                    width: 150,
                    // color: Colors.yellow,
                    child: ListTile(
                      title: Text("Male"),
                      leading: Radio(
                        value: "Male",
                        groupValue: gen,
                        onChanged: (value) {
                          setState(() {
                            gen = value!;
                          });
                        },
                      ),
                    ),
                  ),
                  Container(
                    width: 170,
                    // color: Colors.blue,
                    child: ListTile(
                      title: Text("Female"),
                      leading: Radio(
                        value: "Female",
                        groupValue: gen,
                        onChanged: (value) {
                          setState(() {
                            gen = value!;
                          });
                        },
                      ),
                    ),
                  ),

                ],
              ),

                  Row(
                    children: [
                      Container(
                        width: 130,
                        color: Colors.grey,
                        child: CheckboxListTile(
                          title: Text("Dart"),
                          value: _isDartSelected,
                          onChanged: (value) {
                            setState(() {
                              _isDartSelected = value!;
                            }
                            );
                          },
                        ),
                      ),
                      Container(
                        width: 170,
                        color: Colors.grey,
                        child: CheckboxListTile(
                          title: Text("Flutter"),
                          value: _isFlutterSelected,
                          onChanged: (value) {
                            setState(() {
                              _isFlutterSelected = value!;
                            }
                            );
                          },
                        ),
                      ),
                    ],
                  ),

              ElevatedButton(
                onPressed: () {},
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
    );
  }
}
