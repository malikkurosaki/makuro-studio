import 'package:get/get.dart';
import 'package:makuro_studio/makuro_pages/makuro_home.dart';
import 'package:makuro_studio/makuro_pages/makuro_login.dart';

class MakuroPages {
    late String _page;

    MakuroPages.makuroHome(): _page = '/makuroHome';
    MakuroPages.makuroLogin(): _page = '/makuroLogin';

    static final pages = < GetPage > [
        GetPage(name: '/makuroHome', page: () =>
            const MakuroHome()),
        GetPage(name: '/makuroLogin', page: () =>
            const MakuroLogin()),
    ];

    go() => Get.toNamed(_page);
    goOff() => Get.offNamed(_page);
    goOffAll() => Get.offAllNamed(_page);
}