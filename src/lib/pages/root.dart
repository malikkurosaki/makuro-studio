import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:get/get.dart';
import 'package:src/pages.dart';
import 'package:src/vl.dart';

class Root extends StatelessWidget {
  const Root({Key? key}) : super(key: key);

  Future<void> _onLoad()async{
    await 3.delay();
    Vl.isSplash.val = false;
    Pages.home().go();
  }

  @override
  Widget build(BuildContext context) {
    _onLoad();
    return Material(
      child: Center(
        child: Text("Makuro Studio"),
      ),
    );
  }
}
