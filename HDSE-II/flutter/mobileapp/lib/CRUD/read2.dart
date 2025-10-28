import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:mobileapp/CRUD/detailpage.dart';

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

Widget buildProductTile(DocumentSnapshot pro){
  
  var pDetails = {
    'id' : pro.id,
    'name' : pro['name'],
    'price' : pro['price'],
  };


  return ListTile(
      title: Text(pro['Product Name']),
      subtitle: Text(pro['Product Price']),
      leading: CircleAvatar(
        backgroundColor: Colors.transparent,
        child: Text("PT"),
      ),
      trailing: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          // Delete button
          IconButton(
            onPressed: () => deleteProduct(pro.id),
            icon: const Icon(Icons.delete, color: Colors.red),
          ),
          // Edit button
          IconButton(
            onPressed: () {

            },
            icon: const Icon(Icons.edit, color: Colors.blue),
          ),
          IconButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => ProductDetails(pDetails)),
              );
            },
            icon: Icon(Icons.info),
          ),
        ],
      ),
    );
}
    
  @override
  Widget build(BuildContext context) {
    return
    Scaffold(
    //   body: 
    // Center(
    //   child: StreamBuilder(
    //     stream: pro.snapshots(), 
    //     builder: (context, snapshot) {
    //       if(snapshot.hasData){
    //        var ProList = snapshot.data!.docs;
    //        return ListView.builder(
    //         itemCount: ProList.length,
    //         itemBuilder: (context, index){
    //           return ListTile(
    //             title: Text(ProList[index]['Product Name'] ?? 'Product Name Not Found'),
    //             subtitle: Text(ProList[index]['Product Price'] ?? 'Product Price Not Found'),
    //             leading: Icon(Icons.person),
    //             trailing: Row(
    //               children: [

    //                 IconButton(onPressed: (){
    //               deleteProduct(ProList[index].id);
    //             }, 
    //             icon: Icon(Icons.delete),
    //             color: Colors.red,),

    //             IconButton(onPressed: (){
    //               // deleteProduct(ProList[index].id);
    //             }, 
    //             icon: Icon(Icons.edit),
    //             color: Colors.grey,),

    //             IconButton(onPressed: (){
    //               ProductDetails();
    //             }, 
    //             icon: Icon(Icons.info),
    //             color: Colors.blue,),
    //               ],
    //             )
                
    //           );
    //         }
    //         );
    //       }
    //       else{  
    //         return CircularProgressIndicator(); 
    //       }
    //     }
    //     ),
    // ),
    );
  }
}
