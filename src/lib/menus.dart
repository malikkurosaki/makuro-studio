import 'package:src/menus/design_front.dart';
import 'package:src/menus/news.dart';
import 'package:flutter/material.dart';
import 'package:src/pages/login.dart';

class Menus {
  late String name;
  late Widget target;
  late bool asMenu;

  Menus.designFront() {
    name = "Design Front";
    target = DesignFront();
  }
  Menus.news() {
    name = "News";
    target = News();
  }

  Menus.login() {
    name = "Login";
    target = Login();
  }

  void go(BuildContext context) {
    Navigator.of(context).pushNamed("/$name");
  }

  static final listMenu = <Menus>[Menus.designFront(), Menus.news(), Menus.login()];
}
