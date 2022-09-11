import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:get/instance_manager.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'package:get/get.dart';

class Login extends StatelessWidget {
  const Login({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ResponsiveBuilder(
      builder: (context, media) => Column(
        children: [
          Flexible(
            child: Row(
              children: [
                Expanded(
                  child: Visibility(
                    visible: !media.isMobile,
                    child: Center(
                      child: Text("Makuro Studio"),
                    ),
                  ),
                ),
                SizedBox(
                  width: media.isMobile? Get.width: 460,
                  child: Card(
                    child: Column(
                      children: [
                        Text("Login")
                      ],
                    ),
                  ),
                )
              ],
            ),
          )
        ],
      ),
    );
  }
}
