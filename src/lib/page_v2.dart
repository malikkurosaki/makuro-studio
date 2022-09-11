import 'package:get/get.dart';
import 'package:flutter/material.dart';
import 'package:src/pages/home.dart';
import 'package:src/pages/login.dart';
import 'package:src/pages/my_home_page.dart';
import 'package:src/pages/root.dart';
import 'package:src/pages/sign_up.dart';

class Pages {
    late String name;
    late Widget target;
    late bool isMenu;
    late String path;


    Pages.home() {
        name = "Home";
        target = Home();
        isMenu = false;
        path = "/home";
    }

    Pages.login() {
        name = "Login";
        target = Login();
        isMenu = false;
        path = "/login";
    }

    Pages.myHomePage() {
        name = "My Home Page";
        target = MyHomePage();
        isMenu = false;
        path = "/my-home-page";
    }

    Pages.root() {
        name = "Root";
        target = Root();
        isMenu = false;
        path = "/root";
    }

    Pages.signUp() {
        name = "Sign Up";
        target = SignUp();
        isMenu = true;
        path = "/sign-up";
    }



    static final list = [
        Home(), Login(), MyHomePage(), Root(), SignUp()
    ];

    void go() {
        Get.toNamed(path);
    }
}