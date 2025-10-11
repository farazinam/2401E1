import 'package:flutter/material.dart';
import 'package:mobileapp/callLog.dart';

class Products extends StatelessWidget {
  const Products({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Our products"),
        backgroundColor: Colors.black,
        foregroundColor: Colors.white,
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        child: Center(
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
                      "Laptop HP",
                      style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    SizedBox(height: 10),
                    Text("Core i7 11th Generation 256GB SSD, 16 GB RAM"),
                    SizedBox(height: 10),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: [
                        ElevatedButton(
                          onPressed: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) => CallLog(),
                              ),
                            );
                          },
                          child: Text("Add To Cart"),
                        ),
                        ElevatedButton(
                          onPressed: () {},
                          child: Text("Buy Now"),
                        ),
                      ],
                    ),
                  ],
                ),
              ),

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
                      "Laptop HP",
                      style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    SizedBox(height: 10),
                    Text("Core i7 11th Generation 256GB SSD, 16 GB RAM"),
                    SizedBox(height: 10),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: [
                        ElevatedButton(
                          onPressed: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) => CallLog(),
                              ),
                            );
                          },
                          child: Text("Add To Cart"),
                        ),
                        ElevatedButton(
                          onPressed: () {},
                          child: Text("Buy Now"),
                        ),
                      ],
                    ),
                  ],
                ),
              ),

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
                      "Laptop HP",
                      style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    SizedBox(height: 10),
                    Text("Core i7 11th Generation 256GB SSD, 16 GB RAM"),
                    SizedBox(height: 10),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: [
                        ElevatedButton(
                          onPressed: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) => CallLog(),
                              ),
                            );
                          },
                          child: Text("Add To Cart"),
                        ),
                        ElevatedButton(
                          onPressed: () {},
                          child: Text("Buy Now"),
                        ),
                      ],
                    ),
                  ],
                ),
              ),

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
                    // ClipRRect(
                    //   borderRadius: BorderRadius.only(
                    //     topLeft: Radius.circular(20),
                    //     topRight: Radius.circular(20),
                    //   ),
                      // child:
                       Image.asset('assets/images/unsplash.jpg'),
                    // ),
                    SizedBox(height: 10),
                    Text(
                      "Laptop HP",
                      style: TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    SizedBox(height: 10),
                    Text("Core i7 11th Generation 256GB SSD, 16 GB RAM"),
                    SizedBox(height: 10),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: [
                        ElevatedButton(
                          onPressed: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) => CallLog(),
                              ),
                            );
                          },
                          child: Text("Add To Cart"),
                        ),
                        ElevatedButton(
                          onPressed: () {},
                          child: Text("Buy Now"),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
