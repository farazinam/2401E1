import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:mobileapp/Auth/signup.dart';
import 'package:mobileapp/callLog.dart';

class SignInScreen extends StatefulWidget {
  const SignInScreen({super.key});

  @override
  State<SignInScreen> createState() => _SignInScreenState();
}

class _SignInScreenState extends State<SignInScreen> {

    final CollectionReference users = FirebaseFirestore.instance.collection(
    'users',
  );

    final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();

// Shortcut Way (sometimes create issue)

  // Future<void> signInFn ()async{
  //   final InputEmail = emailController.text.trim();
  //   final InputPassword = emailController.text.trim();

  //   try{
  //   final User? userExist = 
  //   (await FirebaseAuth.instance.signInWithEmailAndPassword(
  //     email: InputEmail, 
  //     password: InputPassword)).user;
  //     if(userExist != null){
  //       Navigator.push(context, MaterialPageRoute(builder: (context){
  //         return CallLog();
  //       }));
  //     }
  //   }
  // catch (e){
  //   print("Error $e");
  // }
    // }

// Proper and Correct
     Future<void> signInFn() async {
    final inputEmail = emailController.text.trim();
    final inputPassword = passwordController.text.trim();

    if (inputEmail.isEmpty || inputPassword.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text("Please enter both email and password")),
      );
      return;
    }

    try {
      final userCredential = await FirebaseAuth.instance.signInWithEmailAndPassword(
        email: inputEmail,
        password: inputPassword,
      );

      final user = userCredential.user;

      if (user != null) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text("Login successful")),
        );

        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => const CallLog()),
        );
      }
    } on FirebaseAuthException catch (e) {
      String message = '';

      switch (e.code) {
        case 'invalid-email':
          message = "The email address is invalid.";
          break;
        case 'user-disabled':
          message = "This user account has been disabled.";
          break;
        case 'user-not-found':
          message = "No user found for that email.";
          break;
        case 'wrong-password':
          message = "Incorrect password provided.";
          break;
        case 'invalid-credential':
          message = "Invalid or expired credentials.";
          break;
        default:
          message = "Login failed. ${e.message}";
      }

      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(message)));
      print("FirebaseAuth Error: ${e.code} - ${e.message}");
    } catch (e) {
      print("Unknown error: $e");
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text("Error: $e")),
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
                "Sign Up",
                style: TextStyle(fontSize: 30, color: Colors.blue),
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

              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  ElevatedButton(
                    onPressed: signInFn,
                    child: Text(
                      "Sign In",
                      style: TextStyle(color: Colors.blue),
                    ),
                  ),

                  TextButton(
                    onPressed: () {
                      Navigator.push(context, MaterialPageRoute(builder: (context){
                        return SignUpScreen();
                      }));
                    },
                    child: Text("Don't have an Account? Sign Up"),
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