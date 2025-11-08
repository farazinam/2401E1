import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class ForgetPasswordScreen extends StatefulWidget {
  const ForgetPasswordScreen({super.key});

  @override
  State<ForgetPasswordScreen> createState() => _ForgetPasswordScreenState();
}

class _ForgetPasswordScreenState extends State<ForgetPasswordScreen> {


TextEditingController forgetPasswordController = TextEditingController();

Future<void> ForgetPasswordFn () async{
  final passRecInp = forgetPasswordController.text.trim();
  try{
    await FirebaseAuth.instance.sendPasswordResetEmail(email: passRecInp).then((value) =>{
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text("Email Send")),
      ),
      Navigator.pushNamed(context, '/signin'),
    });
  }
  on FirebaseAuthException catch(e){
     ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text("Error $e")),
      );
  }

}

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Form(
        // key: _FKey,
        child: Padding(
          padding: EdgeInsets.all(20),
          child: Column(
            children: [
              Container(
                width: double.infinity,
                height: 250,
                child: Icon(Icons.login, size: 100, color: Colors.blue),
              ),
              Text(
                "Password Recover",
                style: TextStyle(fontSize: 30, color: Colors.blue),
              ),
              SizedBox(height: 20),

              TextFormField(
                controller: forgetPasswordController,
                autovalidateMode: AutovalidateMode.onUserInteraction,
                // validator: MultiValidator([
                //   RequiredValidator(errorText: "Required"),
                //   EmailValidator(errorText: "Please Provide Correct Email"),
                // ]).call,
                decoration: InputDecoration(
                  label: Text("Email"),
                  border: OutlineInputBorder(),
                ),
              ),
              SizedBox(height: 20),

              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  ElevatedButton(
                    onPressed: ForgetPasswordFn,
                    child: Text(
                      "Get Email",
                      style: TextStyle(color: Colors.blue),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}