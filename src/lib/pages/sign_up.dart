import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:get/instance_manager.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'package:get/get.dart';
import 'package:src/components/gambar.dart';
import 'package:src/img.dart';

class SignUp extends StatelessWidget {
  const SignUp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ResponsiveBuilder(
      builder: (context, media) => Material(
        child: Column(
          children: [
            Flexible(
              child: Row(
                children: [
                  Expanded(
                    child: Visibility(
                      visible: !media.isMobile,
                      child: Column(
                        children: [],
                      ),
                    ),
                  ),
                  SizedBox(
                    width: media.isMobile? Get.width: 460,
                    child: Column(
                      children: [
                        Gambar(imageUrl: Img.sigup),
                        Text("Sign Up"),
                      ],
                    ),
                  )
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
