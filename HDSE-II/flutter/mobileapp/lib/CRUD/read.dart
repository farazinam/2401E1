import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:mobileapp/CRUD/detailpage.dart';

class ReadExample extends StatefulWidget {
  const ReadExample({super.key});

  @override
  State<ReadExample> createState() => _ReadExampleState();
}

class _ReadExampleState extends State<ReadExample> {

  final CollectionReference pro = FirebaseFirestore.instance.collection("products");

  // DELETE
  void deleteProduct(String id){
    pro.doc(id).delete();
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text("Product Deleted"),
      duration: Duration(seconds: 2),
      backgroundColor: Colors.red,)
    );
  }



  @override
  Widget build(BuildContext context) {
    return
    Scaffold(
      body: StreamBuilder<QuerySnapshot>(
        stream: pro.snapshots(),
        builder: (context, snapshot) {
          if (snapshot.hasError) {
            return const Center(child: Text('Something went wrong'));
          }

          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }

          final catList = snapshot.data!.docs;

          if (catList.isEmpty) {
            return const Center(child: Text('No Category found'));
          }

          return ListView.builder(
            itemCount: catList.length,
            itemBuilder: (context, index) {
              var catData = catList[index].data() as Map<String, dynamic>;
              return ListTile(
                leading: const Icon(Icons.category, color: Colors.black54),
                title: Text(catData['Product Name'] ?? 'No Name'),
                subtitle: Text(
                  catData['Product Price'] ?? 'No Price',
                ),
                trailing: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    IconButton(
                      icon: const Icon(Icons.delete, color: Colors.red),
                      onPressed: () => deleteProduct(catList[index].id),
                    ),
                    IconButton(
                      icon: const Icon(Icons.edit, color: Colors.grey),
                      onPressed: () {
                        Map<String, dynamic> pDetails = {
                          'id': catList[index].id,
                          'name': catList[index]['Product Name'],
                          'price': catList[index]['Product Price'],
                        };
                        // Navigator.push(
                          // context,
                          // MaterialPageRoute(
                            // builder: (context) => updateProduct(pDetails),
                          // ),
                        // );
                      },
                    ),
                    IconButton(
                      onPressed: () {
                        Map<String, dynamic> proDetails = {
                          'id': catList[index].id,
                          'name': catList[index]['Product Name'],
                          'price': catList[index]['Product Price'],
                        };
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => ProductDetails(proDetails),
                          ),
                        );
                      },
                      icon: Icon(Icons.info),
                    ),
                  ],
                ),
              );
            },
          );
        },
      ),
    );
  }
}