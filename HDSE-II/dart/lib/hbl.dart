class HabibBank{
  double _acBalance = 1500;

  void deposit(double amount){
    try{
    if(amount <= 0){
      print("Invalid Amount");
    }
    else{
      _acBalance += amount;
       print("Current Balance is $_acBalance");
    }
    }
    catch(e){
      print("Error $e");
    }
  }

  void widthdrawl(double amount){
    try{
    if(amount <= 0){
      print("Invalid Amount");
    }
    else if(amount > _acBalance){
      print("Insufficient Balance");
    }
    else{
      _acBalance -= amount;
       print("Current Balance is $_acBalance");
    }
    }
    catch(e){
      print("Error... $e");
    }
  }

  void balanceInq(){
    print("Current Balance is $_acBalance");
  }
}
