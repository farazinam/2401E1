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

// String name = 'Haris';
// int age = 22;
// var data = "Anything";
// final f = 22;
// const c = 29;
// double decimal = 5.7;
// bool isEligible = false;
// dynamic check = null;
// List <String> students = ["Basit", "Muneeb", "Ayesha"];
// Map <String, int> info = {"age": 22, "phNo": 3247685};
// Set <int> s = {1, 3, 5, 7, 9};

// void main() {
  // print(name);
  // print(students);
  // print(info);
  // print(s);

// stdout.write("Enter Your Name");
//   var name = stdin.readLineSync();
//   stdout.write("Your Name is : $name");

// stdout.write("Enter Your Age");
//   var age = int.parse(stdin.readLineSync()!);
//   stdout.write("Your Age is : $age");

//   print(name is String);

// var name = "Ali";
// var age = 22;

// stdout.write("My Name is $name AND age is $age");
// print("My Name is : $name And Age is ${age + 1}");
// }



// --------- D A Y - 3 ----------------
// main(){
  //null coalescing Opr
// String? name;
// String check = name ?? "Guest";
// print(check);

// var age = int.parse(stdin.readLineSync()!);

// if(age >= 18){
//   stdout.write("You are eligible!");
// }
// else{
//   stdout.write("You are NOT eligible!");
// }

// var days = stdin.readLineSync();

// switch(days){
//   case "monday":
//   case "wednesday":
//   case "friday":
//   print("Off");
//   break;

//   case "tuesday":
//   case "thursday":
//   case "saturday":
//   print("Class at 3PM");
//   break;
// }


// functions

// fun1();
// fun2(1, 3);
// fun3(1, 3);

// print(fun4(1, 3));
// int output = fun4(1, 3);
// print(output);
// }

// fun1(){
//   print("Hello Function!");
// }

// String? fun2(a, b){
//   print(a + b);
// }


// fun3(x, [y = 20]){
//   print(x + y);
// }

// fun4(i, j){
//   return i - j;

// ---- LIST

// List <String> list1 = ["Mobile", "Watch", "LCD"];

// print(list1);
// print(list1[0]);
// print(list1[1]);
// print(list1[2]);
// print(list1.length);
// print(list1.remove("LCD"));
// list1.add("Keyboard");
// print(list1);

// Map <String, String> mapData = {"dep1" : "HR", "dep2" : "Accounts", "dep3" : "Marketing"};
// print(mapData);
// print(mapData.remove("Accounts"));
// }


// --------- D A Y - 4 ----------------

  // void main(){
  // List<String> stdinfo = [];
  // List<String> coursename = [];
  // List<int> coursemarks = [];
  // var count = 0;
  // var obtmarks = 0;
  // var grade = '';

  //   stdout.write("Enter Your Enrollment No. \n");
  //  stdinfo.add(stdin.readLineSync()!);
  //   stdout.write("Enter Your Name \n");
  //  stdinfo.add(stdin.readLineSync()!);

  //   stdout.write("How many Subject do you have? \n");
  //  count = int.parse(stdin.readLineSync()!);

  //  for(var i = 0; i < count; i++){
  //  stdout.write("Enter Name of Subject ${i+1} \n");
  //  coursename.add(stdin.readLineSync()!);

  //  stdout.write("Enter Marks of ${coursename[i]} \n");
  //  coursemarks.add(int.parse(stdin.readLineSync()!));

  //  obtmarks += coursemarks[i];
  //  }

  //  var totalmarks = count*100;

  //  var per = obtmarks/totalmarks*100;

  //  if(per >= 80){
  //   grade = 'A+';
  //  }
  //  else if(per >= 70){
  //   grade = 'A';
  //  }
  //  else if(per >= 60){
  //   grade = 'B';
  //  }
  //  else if(per >= 50){
  //   grade = 'C';
  //  }
  //  else if(per >= 40){
  //   grade = 'D';
  //  }
  //  else if(per < 40){
  //   grade = 'FAIL';
  //  }

  //  stdout.write("RESULT SUMMARY \n");
  //  stdout.write("____________________ \n");
  //  stdout.write("Enrollment No: ${stdinfo[0]} \n");
  //  stdout.write("Name: ${stdinfo[1]} \n");
  //  stdout.write("Percentage: $per \n");
  //  stdout.write("Grade: $grade \n");
  // }


   // ---------------- O O P ----------------------
    class Car{
      var brand = "";
     var model = "";

     Car(this.brand, this.model);

     void action(){
      print("My Car brand is $brand and Model is $model");
     }
    }

   void main(){
    Car obj = Car("Toyota", "2024");
    // obj.brand = "ToyoTa";
    // obj.model = "2024";
    obj.action();
   }