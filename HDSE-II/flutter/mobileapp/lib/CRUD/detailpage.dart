import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class ProductDetails extends StatefulWidget {
  var proDetail = {};
  ProductDetails(this.proDetail, {super.key});

  @override
  State<ProductDetails> createState() => _ProductDetailsState();
}

class _ProductDetailsState extends State<ProductDetails> {
  final CollectionReference pro = FirebaseFirestore.instance.collection(
    "products",
  );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Product Detail"),
        foregroundColor: Colors.white,
        backgroundColor: Colors.grey,
        centerTitle: true,
        leading: IconButton(
          onPressed: () {
            Navigator.pop(context);
          },
          icon: Icon(Icons.arrow_back),
        ),
      ),
      body: Center(
        child: Column(
          children: [
            SizedBox(height: 20),
            Container(
              width: 300,
              height: 400,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.all(Radius.circular(20)),
                border: Border.all(color: Colors.black, width: 2),
              ),
              child: Column(
                children: [
                  Image.asset('assets/images/unsplash.jpg'),
                  SizedBox(height: 10),
                  Text(
                    widget.proDetail['name'] ?? 'Not Found',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                  SizedBox(height: 10),
                  Text(widget.proDetail['price'] ?? 'Not Found'),
                  SizedBox(height: 10),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      ElevatedButton(
                        onPressed: () {
                          // Navigator.push(
                          // context,
                          // MaterialPageRoute(
                          //   builder: (context) => CallLog(),
                          // ),
                          // );
                        },
                        child: Text("Add To Cart"),
                      ),
                      ElevatedButton(
                        onPressed: () {
                          Navigator.pop(context);
                        },
                        child: Text("Back"),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
