import 'dart:io';

int calculate() {
  return 6 * 7;
}

// --------- D A Y - 1 ----------------

// void main(List<String> args) {
//   print("Hello Dart!");
//   var a = "Ali";

//   print(a);
//   print("My Name is : $a");

// mul1();
// print(mul2());
// }

// mul1() {
//   print(6 * 7);
// }
// mul2() {
//   return 3 * 7;
// }



// --------- D A Y - 2 ----------------

String name = 'Haris';
int age = 22;
var data = "Anything";
final f = 22;
const c = 29;
double decimal = 5.7;
bool isEligible = false;
dynamic check = null;
List <String> students = ["Basit", "Muneeb", "Ayesha"];
Map <String, int> info = {"age": 22, "phNo": 3247685};
Set <int> s = {1, 3, 5, 7, 9};

void main() {
  // print(name);
  // print(students);
  // print(info);
  // print(s);

stdout.write("Enter Your Name");
  var name = stdin.readLineSync();
  stdout.write("Your Name is : $name");

stdout.write("Enter Your Age");
  var age = int.parse(stdin.readLineSync()!);
  stdout.write("Your Age is : $age");

  print(name is String);

// var name = "Ali";
// var age = 22;

// stdout.write("My Name is $name AND age is $age");
// print("My Name is : $name And Age is ${age + 1}");
}

