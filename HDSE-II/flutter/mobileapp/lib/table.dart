import 'package:flutter/material.dart';

class TableExample extends StatelessWidget {
  const TableExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Table"),
        backgroundColor: Colors.blue,
        foregroundColor: Colors.white,
        centerTitle: true,
      ),
      body: Container(
        child: DataTable(
          columns: [
            DataColumn(label: Text("Enroll#")),
            DataColumn(label: Text("Std Name")),
            DataColumn(label: Text("Course")),
            DataColumn(label: Text("Result")),
          ], 
          rows: [
            DataRow(cells: [
              DataCell(Text("1001")),
              DataCell(Text("Bakhtawar")),
              DataCell(Text("ADSE")),
              DataCell(Text("Pass")),
            ]),
            DataRow(cells: [
              DataCell(Text("1001")),
              DataCell(Text("Bakhtawar")),
              DataCell(Text("ADSE")),
              DataCell(Text("Pass")),
            ]),
            DataRow(cells: [
              DataCell(Text("1001")),
              DataCell(Text("Bakhtawar")),
              DataCell(Text("ADSE")),
              DataCell(Text("Pass")),
            ]),
          ]),
      ),
    );
  }
}