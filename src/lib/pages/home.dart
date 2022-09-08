import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'package:src/img.dart';

class Home extends StatelessWidget {
  const Home({Key? key}) : super(key: key);

  final des1 =
      'Makuro Studio transforms the app development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded apps from a single codebase';

  @override
  Widget build(BuildContext context) {
    return ResponsiveBuilder(
      builder: (context, media) => Material(
        child: Column(
          children: [
            Container(
              decoration: BoxDecoration(color: Colors.black),
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Row(
                  children: [
                    Expanded(
                      child: Text(
                        "Makuro Studio",
                        style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
                      ),
                    ),
                    Row(
                      children: [
                        MaterialButton(
                          onPressed: () {},
                          child: Text(
                            "News",
                            style: TextStyle(color: Colors.white),
                          ),
                        ),
                        MaterialButton(
                          onPressed: () {},
                          child: Text(
                            "Design",
                            style: TextStyle(color: Colors.white),
                          ),
                        ),
                        MaterialButton(
                          onPressed: () {},
                          child: Text(
                            "Multi Platform",
                            style: TextStyle(color: Colors.white),
                          ),
                        ),
                        MaterialButton(
                          onPressed: () {},
                          child: Text(
                            "Development",
                            style: TextStyle(color: Colors.white),
                          ),
                        ),
                        MaterialButton(
                          onPressed: () {},
                          child: Text(
                            "Ecosystem",
                            style: TextStyle(color: Colors.white),
                          ),
                        ),
                        MaterialButton(
                          onPressed: () {},
                          child: Text(
                            "Support",
                            style: TextStyle(color: Colors.white),
                          ),
                        ),
                        MaterialButton(
                          onPressed: () {},
                          child: Text(
                            "Account",
                            style: TextStyle(color: Colors.white),
                          ),
                        ),
                      ],
                    )
                  ],
                ),
              ),
            ),
            Flexible(
              child: ListView(
                children: [
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 64),
                    child: Center(
                      child: Column(
                        children: [
                          Text(
                            "Build apps for any screen",
                            style: TextStyle(fontSize: 42, fontWeight: FontWeight.w900, color: Colors.grey.shade700),
                          ),
                          Text(
                              "Deploy to multiple devices from a single codebase: mobile, web, desktop, and embedded devices."),
                        ],
                      ),
                    ),
                  ),
                  CachedNetworkImage(
                    imageUrl: Img.gambar5,
                    fit: BoxFit.contain,
                  ),
                  Center(
                    child: Container(
                      constraints: BoxConstraints(maxWidth: 960),
                      child: Padding(
                        padding: const EdgeInsets.all(32),
                        child: Text(
                          des1,
                          textAlign: TextAlign.center,
                          style: TextStyle(fontSize: 32, color: Colors.grey.shade700),
                        ),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(42),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Center(
                          child: MaterialButton(
                            color: Colors.blue,
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
                            onPressed: () {},
                            child: Padding(
                              padding: const EdgeInsets.all(10.0),
                              child: Center(
                                  child: Text(
                                "Get Started",
                                style: TextStyle(color: Colors.white),
                              )),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 64),
                    child: Row(
                      children: [
                        LimitedBox(
                            maxWidth: 530,
                            child: Center(
                                child: Padding(
                              padding: const EdgeInsets.all(32),
                              child: Column(
                                children: [
                                  Text(
                                    "Developer Support",
                                    style: TextStyle(fontSize: 42, color: Colors.grey.shade800),
                                  ),
                                  Text(
                                    "Whether this is your first time programming, or you're coming from another language, we'll get you started on the right path.",
                                    textAlign: TextAlign.center,
                                    style: TextStyle(fontSize: 24),
                                  ),
                                ],
                              ),
                            ))),
                        Expanded(child: CachedNetworkImage(imageUrl: Img.gambar1)),
                      ],
                    ),
                  ),
                  Row(
                    children: [
                      Expanded(child: CachedNetworkImage(imageUrl: Img.gambar2)),
                      LimitedBox(
                          maxWidth: 560,
                          child: Padding(
                            padding: const EdgeInsets.all(32),
                            child: Column(
                              children: [
                                Text("Guides and Documentation",
                                textAlign: TextAlign.center,
                                  style: TextStyle(
                                    fontSize: 42
                                  ),
                                ),
                                Text(
                                    "Get help with development and app management tools, view documentation, connect with other Apple developers, submit bug reports, and more.",
                                      textAlign: TextAlign.center,
                                      style: TextStyle(
                                        fontSize: 24
                                      ),
                                    ),
                              ],
                            ),
                          ))
                    ],
                  ),
                  CachedNetworkImage(imageUrl: Img.gambar3),
                  CachedNetworkImage(imageUrl: Img.gambar4),
                  CachedNetworkImage(imageUrl: Img.gambar6),
                  CachedNetworkImage(imageUrl: Img.flutter),
                  CachedNetworkImage(imageUrl: Img.nodejs),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
