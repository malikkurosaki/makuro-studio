import 'dart:ui';

import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:get/instance_manager.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'package:src/img.dart';
import 'package:get/get.dart';

class HomeContent extends StatelessWidget {
  HomeContent({Key? key}) : super(key: key);
  final des1 =
      'Makuro Studio transforms the app development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded apps from a single codebase';
  final flutterText =
      "This year, mobile applications continued to become more and more popular. Fortunately there are many programming tools available to developers who want to create them. Among these tools there is Flutter, which has distinguished itself lately.";
  final nodejs =
      "Node.js is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications. It runs on the V8 JavaScript runtime engine, and it uses event-driven, non-blocking I/O architecture, which makes it efficient and suitable for real-time applications";

  @override
  Widget build(BuildContext context) {
    return ResponsiveBuilder(
      builder: (context, media) => ListView(
        controller: ScrollController(),
        children: [
          Center(
            child: SizedBox(
              width: media.isMobile ? Get.width : 720,
              child: Padding(
                padding: EdgeInsets.symmetric(vertical: media.isMobile ? 100 : 200),
                child: Column(
                  children: [
                    Text(
                      "Build apps for any screen",
                      style: TextStyle(fontSize: 42, fontWeight: FontWeight.w900, color: Colors.grey.shade700),
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 32),
                      child: Text(
                        "Deploy to multiple devices from a single codebase: mobile, web, desktop, and embedded devices.",
                        textAlign: TextAlign.center,
                        style: TextStyle(fontWeight: FontWeight.bold, fontSize: 24),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Text(
                        "The increasing number of smartphone users worldwide has pushed businesses and startups from all domains to think about having a robust mobile application to survive in the cut-throat competitive market. And a rising number of advantages of having a cross-platform app has left businesses with minimum technical reasons to choose native app development.",
                        textAlign: TextAlign.center,
                      ),
                    )
                  ],
                ),
              ),
            ),
          ),
          CachedNetworkImage(imageUrl: Img.gambar5, fit: BoxFit.cover),
          Column(
            children: [
              Padding(
                padding: const EdgeInsets.all(32),
                child: Column(
                  children: [
                    SizedBox(
                      width: media.isMobile ? Get.width : 820,
                      child: Text(
                        des1,
                        textAlign: TextAlign.center,
                        style: TextStyle(fontSize: 32, color: Colors.grey.shade800, fontWeight: FontWeight.bold),
                      ),
                    ),
                    SizedBox(
                      width: media.isMobile ? Get.width : 720,
                      child: Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Text(
                          "Over the years, with the great advancement and innovations in the mobile app development industry, you have a wide choice of technologies to develop the cross-platform application. But, recently, Google’s Flutter has outshined as one of the best options for both developers and businesses to get started with their app in just a few days",
                          textAlign: TextAlign.center,
                        ),
                      ),
                    )
                  ],
                ),
              ),
              Center(
                child: SizedBox(
                  height: 400,
                  width: 200,
                  child: Column(
                    children: [
                      MaterialButton(
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
                    ],
                  ),
                ),
              ),
            ],
          ),
          Container(
            color: Colors.blue,
            child: Wrap(
              children: [
                SizedBox(
                    width: media.isMobile ? Get.width : Get.width / 2,
                    child: CachedNetworkImage(imageUrl: Img.gambar2)),
                SizedBox(
                  width: media.isMobile ? Get.width : Get.width / 2,
                  child: Padding(
                    padding: const EdgeInsets.symmetric(vertical: 100),
                    child: Center(
                      child: Padding(
                        padding: const EdgeInsets.all(32),
                        child: Column(
                          children: [
                            Text(
                              "Guides and Documentation",
                              textAlign: TextAlign.center,
                              style: TextStyle(fontSize: 42, color: Colors.white),
                            ),
                            Text(
                              "Get help with development and app management tools, view documentation, connect with other Apple developers, submit bug reports, and more.",
                              textAlign: TextAlign.center,
                              style: TextStyle(fontSize: 16, color: Colors.white, fontWeight: FontWeight.bold),
                            ),
                            Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: Text(
                                "To wrap up this introduction, it is fair enough to say that Flutter consists of two parts — Software development kit (an extensive collection of tools that aid you in app development) and framework (a collection of widgets or UI elements). To develop an application with Flutter, you need to use a programming language called Dart, which is Google’s in-house programming language.",
                                textAlign: TextAlign.center,
                                style: TextStyle(color: Colors.white),
                              ),
                            )
                          ],
                        ),
                      ),
                    ),
                  ),
                )
              ],
            ),
          ),
          Center(
            child: Padding(
              padding: EdgeInsets.symmetric(vertical: media.isMobile ? 100 : 400),
              child: Wrap(
                children: [
                  SizedBox(
                    width: media.isMobile ? Get.width : Get.width / 2.5,
                    child: Center(
                      child: Padding(
                        padding: EdgeInsets.symmetric(vertical: 100),
                        child: Column(
                          children: [
                            Text(
                              "Developer Support",
                              style: TextStyle(fontSize: 42, color: Colors.grey.shade800),
                            ),
                            Padding(
                              padding: const EdgeInsets.symmetric(horizontal: 32),
                              child: Text(
                                "Whether this is your first time programming, or you're coming from another language, we'll get you started on the right path.",
                                textAlign: TextAlign.center,
                                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: Text(
                                "The reason being, mobile app development companies use a single codebase to develop the applications that can seamlessly run on all major platforms (Android, iOS, Windows), therefore it cuts down the need of writing code from scratch.",
                                textAlign: TextAlign.center,
                              ),
                            )
                          ],
                        ),
                      ),
                    ),
                  ),
                  SizedBox(
                      width: media.isMobile ? Get.width : Get.width / 2,
                      child: CachedNetworkImage(imageUrl: Img.gambar1)),
                ],
              ),
            ),
          ),
          Center(
            child: SizedBox(width: media.isMobile ? Get.width : 500, child: CachedNetworkImage(imageUrl: Img.gambar3)),
          ),
          Padding(
            padding: const EdgeInsets.all(16),
            child: Center(
              child: SizedBox(
                width: media.isMobile ? Get.width : 720,
                child: Padding(
                  padding: const EdgeInsets.symmetric(vertical: 200),
                  child: Text(
                    "Whether you are a startup or an entrepreneur, the app development cost is always a biggest pressing question for you. But while hiring the mobile app development company for the Flutter app development, it cost you quarter price than developing a native app for both Android and iOS platform.",
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: 24),
                  ),
                ),
              ),
            ),
          ),
          Center(
            child: Padding(
              padding: const EdgeInsets.symmetric(vertical: 64),
              child: Card(
                child: Column(
                  children: [
                    Padding(
                      padding: const EdgeInsets.all(32),
                      child: Text("Cross-Platform App",
                        style: TextStyle(
                          fontSize: 42,
                          fontWeight: FontWeight.bold,
                          color: Colors.grey.shade800
                        ),
                      ),
                    ),
                    Wrap(
                      children: [
                        SizedBox(
                            width: media.isMobile ? Get.width : Get.width / 2.5,
                            child: Padding(
                              padding: const EdgeInsets.all(24),
                              child: CachedNetworkImage(imageUrl: Img.gambar4),
                            )),
                        SizedBox(
                          width: media.isMobile ? Get.width : Get.width / 2.5,
                          child: Padding(
                            padding: const EdgeInsets.all(24),
                            child: CachedNetworkImage(imageUrl: Img.gambar6),
                          ),
                        ),
                      ],
                    ),
                    Padding(
                      padding: const EdgeInsets.all(16),
                      child: Center(
                        child: SizedBox(
                          width: media.isMobile ? Get.width : 720,
                          child: Padding(
                            padding: const EdgeInsets.symmetric(vertical: 200),
                            child: Text(
                              "Not only it allows you to develop any sort of mobile application but also enables you to make it run on multiple platforms. And with the increasing interest of developers in this robust framework and the enhancements to witnesses in the future, app build with Flutter is expected to add more value to your business.",
                              textAlign: TextAlign.center,
                              style: TextStyle(fontSize: 24),
                            ),
                          ),
                        ),
                      ),
                    )
                  ],
                ),
              ),
            ),
          ),
          Center(
            child: Padding(
              padding: const EdgeInsets.symmetric(vertical: 32),
              child: Text(
                "Why.. ?",
                style: TextStyle(fontSize: 42, color: Colors.grey.shade800, fontWeight: FontWeight.bold),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 32),
            child: Center(
              child: Wrap(
                children: [
                  SizedBox(
                    width: media.isMobile ? Get.width : Get.width / 2,
                    child: Column(
                      children: [
                        Padding(
                          padding: const EdgeInsets.all(16),
                          child: CachedNetworkImage(
                            imageUrl: Img.flutter,
                            width: 200,
                            height: 100,
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.all(32),
                          child: Text(
                            flutterText,
                            textAlign: TextAlign.center,
                          ),
                        )
                      ],
                    ),
                  ),
                  SizedBox(
                    width: media.isMobile ? Get.width : Get.width / 2,
                    child: Column(
                      children: [
                        Padding(
                          padding: const EdgeInsets.all(16),
                          child: CachedNetworkImage(
                            imageUrl: Img.nodejs,
                            fit: BoxFit.contain,
                            width: 200,
                            height: 100,
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.all(32),
                          child: Text(
                            nodejs,
                            textAlign: TextAlign.center,
                          ),
                        )
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
          Container(
            color: Colors.grey.shade300,
            child: CachedNetworkImage(imageUrl: Img.footer,
            fit: BoxFit.cover,),
          )
        ],
      ),
    );
  }
}
