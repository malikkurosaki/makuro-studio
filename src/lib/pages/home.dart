import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'package:src/img.dart';
import 'package:get/get.dart';
import 'package:src/src/home/home_appbar.dart';
import 'package:src/src/home/home_content.dart';

class Home extends StatelessWidget {
  const Home({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ResponsiveBuilder(
      builder: (context, media) => HomeAppBar(body: HomeContent()),
    );
  }
}
