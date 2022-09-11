import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'package:src/menus.dart';
import 'package:get/get.dart';
import 'package:src/pages.dart';

class HomeAppBar extends StatelessWidget {
  const HomeAppBar({Key? key, required this.body}) : super(key: key);
  final Widget body;

  @override
  Widget build(BuildContext context) {
    return ResponsiveBuilder(
      builder: (context, media) => Scaffold(
        drawer: !media.isMobile ? null : _drawer(),
        appBar: media.isMobile
            ? AppBar(
                backgroundColor: Colors.black,
                title: Text("Makuro Studio"),
              )
            : _kesamping(context),
        body: body,
      ),
    );
  }

  AppBar _kesamping(BuildContext context) {
    return AppBar(
      backgroundColor: Colors.black,
      title: Row(
        children: [
          Expanded(
              child: Text(
            "Makuro Studio",
            style: TextStyle(color: Colors.white),
          )),
          Row(
            children: [
              ...Pages.list.where((element) => element.isMenu).map(
                (e) => MaterialButton(
                  onPressed: () {
                    Navigator.of(context).pushNamed(e.path);
                  },
                  child: Text(
                    e.name,
                    style: TextStyle(color: Colors.white),
                  ),
                ),
              )
            ],
          )
        ],
      ),
    );
  }

  Widget _drawer() {
    return Drawer(
      child: ListView(
        children: [
          ...Pages.list.where((element) => element.isMenu).map(
            (e) => ListTile(
              title: Text(
                e.name,
              ),
              onTap: () {
                Get.toNamed(e.path);
                Get.back();
              },
            ),
          )
        ],
      ),
    );
  }
}
