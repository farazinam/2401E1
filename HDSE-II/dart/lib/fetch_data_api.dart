import 'package:http/http.dart' as HTTP;
import 'dart:convert' as CONVERT;
void main(){
 final API = Uri.parse("https://localhost:7147/api/Products");

 HTTP.get(API).then((response){
  if(response.statusCode == 200){
    final data = CONVERT.jsonDecode(response.body);

    List<dynamic> proData = data;
    for(var details in proData){
      print("Product Id : ${details['id']}"); 
      print("Product Name : ${details['name']}"); 
      print("Product Price : ${details['price']}"); 
      print("Product Description : ${details['description']}"); 
    }
  }
 });
}