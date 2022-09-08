import 'package:src/pages/home.dart';
import 'package:src/pages/my_home_page.dart';
import 'package:src/pages/root.dart';
import 'package:get_storage/get_storage.dart';
import 'package:get/get.dart';

class Pages {
  static final key = "/".val("Pages.key");


  Pages.home() {
    key.val = "/home";
  }

  Pages.myHomePage() {
    key.val = "/my-home-page";
  }


  static final list = [

    {
      "route": "/home",
      "target": Home(),
    },
    {
      "route": "/my-home-page",
      "target": MyHomePage(),
    },
    {
      "route": "/",
      "target": Root(),
    }

  ];

  void go() {
    Get.toNamed(key.val);
  }
}