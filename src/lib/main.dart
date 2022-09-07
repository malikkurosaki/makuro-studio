import 'package:flutter/material.dart';
import 'package:flutter_easyloading/flutter_easyloading.dart';
import 'package:get/route_manager.dart';
import 'package:src/pages.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      initialRoute: "/",
      getPages: <GetPage>[
        ...Pages.list
            .map(
              (e) => GetPage(
                name: e['route'].toString() == "/root" ? "/" : e['route'].toString(),
                page: () => (e['target'] as Widget),
              ),
            )
            .toList(),
      ],
      builder: EasyLoading.init(),
    );
  }
}
