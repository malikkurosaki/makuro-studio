import 'package:src/menus/design_front.dart';
import 'package:src/menus/news.dart';
import 'package:flutter/material.dart';

class Menus {
  late String name;
  late Widget target;

  Menus.designFront() {
    name = "Design Front";
    target = DesignFront();
  }
  Menus.news() {
    name = "News";
    target = News();
  }

  static final listMenu = <Menus>[Menus.designFront(), Menus.news()];
}
