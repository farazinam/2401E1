import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';

class SignUpScreen extends StatefulWidget {
  const SignUpScreen({super.key});

  @override
  State<SignUpScreen> createState() => _SignUpScreenState();
}

class _SignUpScreenState extends State<SignUpScreen> {
  final CollectionReference users = FirebaseFirestore.instance.collection(
    'users',
  );

  final TextEditingController unController = TextEditingController();
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  final TextEditingController confirmPasswordController =
      TextEditingController();

  User? userExist = FirebaseAuth.instance.currentUser;

  Future<void> signUpFn() async {
    var inputUn = unController.text.trim();
    var inpputEmail = emailController.text.trim();
    var inputPass = passwordController.text.trim();
    var inputCmPass = confirmPasswordController.text.trim();

    if (inputPass == inputCmPass) {
      try {
        await FirebaseAuth.instance
            .createUserWithEmailAndPassword(
              email: inpputEmail,
              password: inputPass,
            )
            .then(
              (value) => {
                print("User created"),
                users.doc(userExist!.uid).set({
                  'username': inputUn,
                  'email': inpputEmail,
                  'createdAt': DateTime.now(),
                  'uid': userExist!.uid,
                }),
                print('Data Added'),
              },
            );
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text("Account Created"),
            backgroundColor: Colors.green,
          ),
        );
        Navigator.pop(context);
      } on FirebaseAuthException catch (e) {
        String errorMsg;
        switch (e.code) {
          case 'email-already-in-use':
            errorMsg = 'Email ALreday Registered';
            break;

          case 'invalid-email':
            errorMsg = 'Plesae Provide Correct Email';
            break;

          case 'weak-password':
            errorMsg = 'Weak Password';
            break;

          default:
            errorMsg = 'Something went wrong, please try again';
            break;
        }
        ScaffoldMessenger.of(
          context,
        ).showSnackBar(SnackBar(content: Text(errorMsg),
        duration: Duration(seconds: 2),
        backgroundColor: Colors.red));

      }
        // catch(e){
        //   print("Error : $e");
        //    ScaffoldMessenger.of(
        //   context,
        // ).showSnackBar(SnackBar(content: Text("Please Try Again"),
        // duration: Duration(seconds: 2),
        // backgroundColor: Colors.red));
        // }
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
                "Sign Up",
                style: TextStyle(fontSize: 30, color: Colors.blue),
              ),
              SizedBox(height: 20),
              TextFormField(
                controller: unController,
                // autovalidateMode: AutovalidateMode.onUserInteraction,
                // validator: MultiValidator([
                //   RequiredValidator(errorText: "Required"),
                // ]).call,
                decoration: InputDecoration(
                  label: Text("User Name"),
                  border: OutlineInputBorder(),
                ),
              ),
              SizedBox(height: 20),

              TextFormField(
                controller: emailController,
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

              TextFormField(
                controller: passwordController,
                // autovalidateMode: AutovalidateMode.onUserInteraction,
                // validator: MultiValidator([
                //   RequiredValidator(errorText: "Required"),
                // ]).call,
                decoration: InputDecoration(
                  label: Text("Password"),
                  border: OutlineInputBorder(),
                ),
              ),
              SizedBox(height: 20),

              TextFormField(
                controller: confirmPasswordController,
                // autovalidateMode: AutovalidateMode.onUserInteraction,
                // validator: MultiValidator([
                //   RequiredValidator(errorText: "Required"),
                // ]).call,
                decoration: InputDecoration(
                  label: Text("Confrm Password"),
                  border: OutlineInputBorder(),
                ),
              ),
              SizedBox(height: 20),

              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  ElevatedButton(
                    onPressed: signUpFn,
                    child: Text(
                      "Sign Up",
                      style: TextStyle(color: Colors.blue),
                    ),
                  ),

                  TextButton(
                    onPressed: () {
                      Navigator.pop(context);
                    },
                    child: Text("Already have an Account? Sign In"),
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
