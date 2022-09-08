import 'package:flutter/material.dart';
import 'package:flutter_easyloading/flutter_easyloading.dart';
import 'package:get/route_manager.dart';
import 'package:get_storage/get_storage.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:src/pages.dart';
import 'package:src/vl.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await GetStorage.init();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      theme: ThemeData(textTheme: GoogleFonts.gothicA1TextTheme()),
      debugShowCheckedModeBanner: false,
      initialRoute: () {
        if (Vl.isSplash.val) {
          return "/";
        }
        return "/home";
      }(),
      getPages: <GetPage>[
        ...Pages.list
            .map(
              (e) => GetPage(
                name: e['route'].toString(),
                page: () => (e['target'] as Widget),
              ),
            )
            .toList(),
      ],
      builder: EasyLoading.init(),
    );
  }
}
