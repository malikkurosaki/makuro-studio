import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';

class Gambar extends StatelessWidget {
  const Gambar({Key? key, required this.url}) : super(key: key);
  final String url;

  @override
  Widget build(BuildContext context) {
    return CachedNetworkImage(
      imageUrl: url,
      placeholder: (context, value) => Container(
        height: 100,
        color: Colors.grey.shade100,
        child: Center(
          child: Icon(
            Icons.image_search,
            color: Colors.grey.shade300,
          ),
        ),
      ),
      errorWidget: (context, a, b) => Container(
        height: 100,
        color: Colors.grey.shade100,
        child: Icon(
          Icons.image_not_supported_outlined,
          color: Colors.grey.shade300,
        ),
      ),
      
    );
  }
}
