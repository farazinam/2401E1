import 'hbl.dart';
import 'dart:io';
void main(){
  HabibBank hbl = HabibBank();
  print("Welcome To HABIB BANK LIMITED! \n");
  print("_____________________________ \n");

  print("Which Transaction you want to Perform \n");
  print("1: Deposit \n 2: Widthdrawl \n 3: Balance Inquiry \n");
  int choice = int.parse(stdin.readLineSync()!);

  if(choice > 0 && choice < 4){

    if(choice == 1){
      print("Enter Amount to Deposit");
      double amount = double.parse(stdin.readLineSync()!);
      hbl.deposit(amount);
    }
  
    if(choice == 2){
      print("Enter Amount to Widthdrawl");
      double amount = double.parse(stdin.readLineSync()!);
      hbl.widthdrawl(amount);
    }

    if(choice == 3){
      hbl.balanceInq();
    }

  }
}