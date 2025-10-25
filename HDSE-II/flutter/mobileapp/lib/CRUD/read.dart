import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class ReadExample extends StatefulWidget {
  const ReadExample({super.key});

  @override
  State<ReadExample> createState() => _ReadExampleState();
}

class _ReadExampleState extends State<ReadExample> {

  void deleteProduct(String id){
    pro.doc(id).delete();
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text("Product Deleted"),
      duration: Duration(seconds: 2),
      backgroundColor: Colors.red,)
    );
  }

  final CollectionReference pro = FirebaseFirestore.instance.collection("products");

  @override
  Widget build(BuildContext context) {
    return
    Scaffold(
      body: 
    Center(
      child: StreamBuilder(
        stream: pro.snapshots(), 
        builder: (context, snapshot) {
          if(snapshot.hasData){
           var ProList = snapshot.data!.docs;
           return ListView.builder(
            itemCount: ProList.length,
            itemBuilder: (context, index){
              return ListTile(
                title: Text(ProList[index]['Product Name'] ?? 'Product Name Not Found'),
                subtitle: Text(ProList[index]['Product Price'] ?? 'Product Price Not Found'),
                leading: Icon(Icons.person),
                trailing: IconButton(onPressed: (){
                  deleteProduct(ProList[index].id);
                }, 
                icon: Icon(Icons.delete),
                color: Colors.red,),
              );
            }
            );
          }
          else{  
            return CircularProgressIndicator(); 
          }
        }
        ),
    ),
    );
  }
}