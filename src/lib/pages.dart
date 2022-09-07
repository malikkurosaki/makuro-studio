import 'package:src/pages/home.dart';
import 'package:src/pages/my_home_page.dart';
import 'package:src/pages/root.dart';

class Pages {
  static final list = <Map<String, dynamic>>[

    {
      "route": "/home",
      "target": Home(),
    },
    {
      "route": "/my-home-page",
      "target": MyHomePage(),
    },
    {
      "route": "/root",
      "target": Root(),
    }

  ];
}