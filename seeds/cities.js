const citiesData = [
    {
        "city": "A Lưới",
        "admin_name": "Thừa Thiên Huế",
        "lat": "16.274008",
        "lng": "107.233828"
    },
    {
        "city": "An Biên",
        "admin_name": "Kiên Giang",
        "lat": "9.822487",
        "lng": "105.036098"
    },
    {
        "city": "An Dương",
        "admin_name": "Hải Phòng",
        "lat": "20.866658",
        "lng": "106.615461"
    },
    {
        "city": "An Khê",
        "admin_name": "Gia Lai",
        "lat": "13.950474",
        "lng": "108.660814"
    },
    {
        "city": "An Lão, Hải Phòng",
        "admin_name": "Hải Phòng",
        "lat": "20.852718",
        "lng": "106.679853"
    },
    {
        "city": "An Lão, Bình Định",
        "admin_name": "Bình Định",
        "lat": "13.885935",
        "lng": "109.110732"
    },
    {
        "city": "An Minh",
        "admin_name": "Kiên Giang",
        "lat": "9.666487",
        "lng": "104.932191"
    },
    {
        "city": "An Nhơn",
        "admin_name": "Bình Định",
        "lat": "13.886025",
        "lng": "109.111694"
    },
    {
        "city": "An Phú",
        "admin_name": "An Giang",
        "lat": "10.81341",
        "lng": "105.093093"
    },
    {
        "city": "Ân Thi",
        "admin_name": "Hưng Yên",
        "lat": "20.816322",
        "lng": "106.088572"
    },
    {
        "city": "Anh Sơn",
        "admin_name": "Nghệ An",
        "lat": "18.930772",
        "lng": "105.082612"
    },
    {
        "city": "Ayun Pa",
        "admin_name": "Gia Lai",
        "lat": "13.3953415",
        "lng": "108.4429165"
    },
    {
        "city": "Ba Bể (huyện)",
        "admin_name": "Bắc Kạn",
        "lat": "22.379676",
        "lng": "105.832334"
    },
    {
        "city": "Ba Chẽ",
        "admin_name": "Quảng Ninh",
        "lat": "21.273374",
        "lng": "107.282699"
    },
    {
        "city": "Ba Đình",
        "admin_name": "Hà Nội",
        "lat": "21.034075",
        "lng": "105.814527"
    },
    {
        "city": "Ba Đồn",
        "admin_name": "Quảng Bình",
        "lat": "17.755862",
        "lng": "106.42034"
    },
    {
        "city": "Bà Rịa",
        "admin_name": "Bà Rịa – Vũng Tàu",
        "lat": "10.49627",
        "lng": "107.168843"
    },
    {
        "city": "Bá Thước",
        "admin_name": "Thanh Hóa",
        "lat": "20.332444",
        "lng": "105.252467"
    },
    {
        "city": "Ba Tơ",
        "admin_name": "Quảng Ngãi",
        "lat": "14.762945",
        "lng": "108.731264"
    },
    {
        "city": "Ba Tri",
        "admin_name": "Bến Tre",
        "lat": "10.045705",
        "lng": "106.595301"
    },
    {
        "city": "Ba Vì",
        "admin_name": "Hà Nội",
        "lat": "21.085689",
        "lng": "105.33674"
    },
    {
        "city": "Bác Ái",
        "admin_name": "Ninh Thuận",
        "lat": "11.841051",
        "lng": "108.904409"
    },
    {
        "city": "Bắc Bình",
        "admin_name": "Bình Thuận",
        "lat": "11.205052",
        "lng": "108.438079"
    },
    {
        "city": "Bắc Giang (thành phố)",
        "admin_name": "Bắc Giang",
        "lat": "21.277931",
        "lng": "106.193881"
    },
    {
        "city": "Bắc Hà (huyện)",
        "admin_name": "Lào Cai",
        "lat": "22.537756",
        "lng": "104.291557"
    },
    {
        "city": "Bắc Kạn (thành phố)",
        "admin_name": "Bắc Kạn",
        "lat": "22.149492",
        "lng": "105.837248"
    },
    {
        "city": "Bạc Liêu (thành phố)",
        "admin_name": "Bạc Liêu",
        "lat": "9.282488",
        "lng": "105.726068"
    },
    {
        "city": "Bắc Mê",
        "admin_name": "Hà Giang",
        "lat": "22.777536",
        "lng": "105.200961"
    },
    {
        "city": "Bắc Ninh (thành phố)",
        "admin_name": "Bắc Ninh",
        "lat": "21.184124",
        "lng": "106.071879"
    },
    {
        "city": "Bắc Quang",
        "admin_name": "Hà Giang",
        "lat": "22.402915",
        "lng": "104.890071"
    },
    {
        "city": "Bắc Sơn",
        "admin_name": "Lạng Sơn",
        "lat": "21.90008",
        "lng": "106.318915"
    },
    {
        "city": "Bắc Tân Uyên",
        "admin_name": "Bình Dương",
        "lat": "11.121569",
        "lng": "106.820906"
    },
    {
        "city": "Bắc Trà My",
        "admin_name": "Quảng Nam",
        "lat": "15.337329",
        "lng": "108.242718"
    },
    {
        "city": "Bắc Từ Liêm",
        "admin_name": "Hà Nội",
        "lat": "21.069861",
        "lng": "105.757339"
    },
    {
        "city": "Bắc Yên",
        "admin_name": "Sơn La",
        "lat": "21.247293",
        "lng": "104.441702"
    },
    {
        "city": "Bạch Long Vĩ",
        "admin_name": "Hải Phòng",
        "lat": "20.132642",
        "lng": "107.72856"
    },
    {
        "city": "Bạch Thông",
        "admin_name": "Bắc Kạn",
        "lat": "22.235143",
        "lng": "105.867331"
    },
    {
        "city": "Bảo Lạc",
        "admin_name": "Cao Bằng",
        "lat": "22.950808",
        "lng": "105.681093"
    },
    {
        "city": "Bảo Lâm, Cao Bằng",
        "admin_name": "Cao Bằng",
        "lat": "22.666662",
        "lng": "106.258804"
    },
    {
        "city": "Bảo Lâm, Lâm Đồng",
        "admin_name": "Lâm Đồng",
        "lat": "11.640509",
        "lng": "107.849615"
    },
    {
        "city": "Bảo Lộc",
        "admin_name": "Lâm Đồng",
        "lat": "11.541767",
        "lng": "107.810962"
    },
    {
        "city": "Bảo Thắng",
        "admin_name": "Lào Cai",
        "lat": "22.502897",
        "lng": "104.041862"
    },
    {
        "city": "Bảo Yên",
        "admin_name": "Lào Cai",
        "lat": "22.220084",
        "lng": "104.389686"
    },
    {
        "city": "Bát Xát",
        "admin_name": "Lào Cai",
        "lat": "22.541997",
        "lng": "103.890689"
    },
    {
        "city": "Bàu Bàng",
        "admin_name": "Bình Dương",
        "lat": "11.249564",
        "lng": "106.617786"
    },
    {
        "city": "Bến Cát",
        "admin_name": "Bình Dương",
        "lat": "11.151086",
        "lng": "106.601033"
    },
    {
        "city": "Bến Cầu",
        "admin_name": "Tây Ninh",
        "lat": "11.110784",
        "lng": "106.179538"
    },
    {
        "city": "Bến Lức",
        "admin_name": "Long An",
        "lat": "10.642728",
        "lng": "106.483386"
    },
    {
        "city": "Bến Tre (thành phố)",
        "admin_name": "Bến Tre",
        "lat": "10.240694",
        "lng": "106.373943"
    },
    {
        "city": "Biên Hòa",
        "admin_name": "Đồng Nai",
        "lat": "10.956026",
        "lng": "106.85298"
    },
    {
        "city": "Bỉm Sơn",
        "admin_name": "Thanh Hóa",
        "lat": "20.083453",
        "lng": "105.858976"
    },
    {
        "city": "Bình Chánh",
        "admin_name": "Thành phố Hồ Chí Minh",
        "lat": "10.667564",
        "lng": "106.573289"
    },
    {
        "city": "Bình Đại",
        "admin_name": "Bến Tre",
        "lat": "10.18311",
        "lng": "106.694705"
    },
    {
        "city": "Bình Gia",
        "admin_name": "Lạng Sơn",
        "lat": "21.953855",
        "lng": "106.375772"
    },
    {
        "city": "Bình Giang",
        "admin_name": "Hải Dương",
        "lat": "20.872203",
        "lng": "106.210685"
    },
    {
        "city": "Bình Liêu",
        "admin_name": "Quảng Ninh",
        "lat": "21.526171",
        "lng": "107.4006"
    },
    {
        "city": "Bình Long",
        "admin_name": "Bình Phước",
        "lat": "11.651175",
        "lng": "106.607079"
    },
    {
        "city": "Bình Lục",
        "admin_name": "Hà Nam",
        "lat": "20.500236",
        "lng": "106.050834"
    },
    {
        "city": "Bình Minh",
        "admin_name": "Vĩnh Long",
        "lat": "10.068178",
        "lng": "105.822866"
    },
    {
        "city": "Bình Sơn",
        "admin_name": "Quảng Ngãi",
        "lat": "15.314872",
        "lng": "108.766763"
    },
    {
        "city": "Bình Tân (quận)",
        "admin_name": "Thành phố Hồ Chí Minh",
        "lat": "10.749809",
        "lng": "106.605663"
    },
    {
        "city": "Bình Tân (huyện)",
        "admin_name": "Vĩnh Long",
        "lat": "10.112685",
        "lng": "105.77359"
    },
    {
        "city": "Bình Thạnh",
        "admin_name": "Thành phố Hồ Chí Minh",
        "lat": "10.804659",
        "lng": "106.707848"
    },
    {
        "city": "Bình Thủy",
        "admin_name": "Cần Thơ",
        "lat": "10.074247",
        "lng": "105.739805"
    },
    {
        "city": "Bình Xuyên",
        "admin_name": "Vĩnh Phúc",
        "lat": "21.283691",
        "lng": "105.657237"
    },
    {
        "city": "Bố Trạch",
        "admin_name": "Quảng Bình",
        "lat": "17.645462",
        "lng": "106.49961"
    },
    {
        "city": "Bù Đăng",
        "admin_name": "Bình Phước",
        "lat": "11.774444",
        "lng": "107.217567"
    },
    {
        "city": "Bù Đốp",
        "admin_name": "Bình Phước",
        "lat": "11.966027",
        "lng": "106.782789"
    },
    {
        "city": "Bù Gia Mập",
        "admin_name": "Bình Phước",
        "lat": "11.948067",
        "lng": "107.005047"
    },
    {
        "city": "Buôn Đôn",
        "admin_name": "Đắk Lắk",
        "lat": "12.886448",
        "lng": "107.783211"
    },
    {
        "city": "Buôn Hồ",
        "admin_name": "Đắk Lắk",
        "lat": "12.918742",
        "lng": "108.26683"
    },
    {
        "city": "Buôn Ma Thuột",
        "admin_name": "Đắk Lắk",
        "lat": "12.679683",
        "lng": "108.044737"
    },
    {
        "city": "Cà Mau (thành phố)",
        "admin_name": "Cà Mau",
        "lat": "9.179222",
        "lng": "105.145791"
    },
    {
        "city": "Cái Bè",
        "admin_name": "Tiền Giang",
        "lat": "10.335444",
        "lng": "106.034306"
    },
    {
        "city": "Cai Lậy (thị xã)",
        "admin_name": "Tiền Giang",
        "lat": "10.408206",
        "lng": "106.121986"
    },
    {
        "city": "Cai Lậy (huyện)",
        "admin_name": "Tiền Giang",
        "lat": "10.408206",
        "lng": "106.121986"
    },
    {
        "city": "Cái Nước",
        "admin_name": "Cà Mau",
        "lat": "8.939457",
        "lng": "105.016109"
    },
    {
        "city": "Cái Răng",
        "admin_name": "Cần Thơ",
        "lat": "10.000355",
        "lng": "105.763087"
    },
    {
        "city": "Cẩm Giàng",
        "admin_name": "Hải Dương",
        "lat": "20.967845",
        "lng": "106.169939"
    },
    {
        "city": "Cẩm Khê",
        "admin_name": "Phú Thọ",
        "lat": "21.426327",
        "lng": "105.135033"
    },
    {
        "city": "Cam Lâm",
        "admin_name": "Khánh Hòa",
        "lat": "12.070529",
        "lng": "109.138587"
    },
    {
        "city": "Cẩm Lệ",
        "admin_name": "Đà Nẵng",
        "lat": "16.016093",
        "lng": "108.189573"
    },
    {
        "city": "Cam Lộ",
        "admin_name": "Quảng Trị",
        "lat": "16.812112",
        "lng": "106.998141"
    },
    {
        "city": "Cẩm Mỹ",
        "admin_name": "Đồng Nai",
        "lat": "10.799273",
        "lng": "107.307064"
    },
    {
        "city": "Cẩm Phả",
        "admin_name": "Quảng Ninh",
        "lat": "21.004432",
        "lng": "107.278029"
    },
    {
        "city": "Cam Ranh",
        "admin_name": "Khánh Hòa",
        "lat": "11.91667",
        "lng": "109.14861"
    },
    {
        "city": "Cẩm Thủy",
        "admin_name": "Thanh Hóa",
        "lat": "20.209319",
        "lng": "105.460985"
    },
    {
        "city": "Cẩm Xuyên",
        "admin_name": "Hà Tĩnh",
        "lat": "18.250619",
        "lng": "106.002687"
    },
    {
        "city": "Cần Đước",
        "admin_name": "Long An",
        "lat": "10.503534",
        "lng": "106.60425"
    },
    {
        "city": "Cần Giờ",
        "admin_name": "Thành phố Hồ Chí Minh",
        "lat": "10.404548",
        "lng": "106.895764"
    },
    {
        "city": "Cần Giuộc",
        "admin_name": "Long An",
        "lat": "10.607316",
        "lng": "106.672435"
    },
    {
        "city": "Can Lộc",
        "admin_name": "Hà Tĩnh",
        "lat": "18.446492",
        "lng": "105.758596"
    },
    {
        "city": "Càng Long",
        "admin_name": "Trà Vinh",
        "lat": "9.997449",
        "lng": "106.204674"
    },
    {
        "city": "Cao Bằng (thành phố)",
        "admin_name": "Cao Bằng",
        "lat": "22.666662",
        "lng": "106.258804"
    },
    {
        "city": "Cao Lãnh (thành phố)",
        "admin_name": "Đồng Tháp",
        "lat": "10.454343",
        "lng": "105.686287"
    },
    {
        "city": "Cao Lãnh (huyện)",
        "admin_name": "Đồng Tháp",
        "lat": "10.454343",
        "lng": "105.686287"
    },
    {
        "city": "Cao Lộc",
        "admin_name": "Lạng Sơn",
        "lat": "21.865144",
        "lng": "106.767774"
    },
    {
        "city": "Cao Phong",
        "admin_name": "Hòa Bình",
        "lat": "20.705314",
        "lng": "105.32084"
    },
    {
        "city": "Cát Hải",
        "admin_name": "Hải Phòng",
        "lat": "20.795987",
        "lng": "106.886939"
    },
    {
        "city": "Cát Tiên",
        "admin_name": "Lâm Đồng",
        "lat": "11.58331",
        "lng": "107.361013"
    },
    {
        "city": "Cầu Giấy",
        "admin_name": "Hà Nội",
        "lat": "21.027277",
        "lng": "105.791464"
    },
    {
        "city": "Cầu Kè",
        "admin_name": "Trà Vinh",
        "lat": "9.871122",
        "lng": "106.060512"
    },
    {
        "city": "Cầu Ngang",
        "admin_name": "Trà Vinh",
        "lat": "9.79749",
        "lng": "106.453359"
    },
    {
        "city": "Châu Đốc",
        "admin_name": "An Giang",
        "lat": "10.710182",
        "lng": "105.118867"
    },
    {
        "city": "Châu Đức",
        "admin_name": "Bà Rịa – Vũng Tàu",
        "lat": "10.634484",
        "lng": "107.253057"
    },
    {
        "city": "Châu Phú",
        "admin_name": "An Giang",
        "lat": "10.600839",
        "lng": "105.211134"
    },
    {
        "city": "Châu Thành, An Giang",
        "admin_name": "An Giang",
        "lat": "20.944392",
        "lng": "105.929604"
    },
    {
        "city": "Châu Thành, Bến Tre",
        "admin_name": "Bến Tre",
        "lat": "10.305066",
        "lng": "106.347633"
    },
    {
        "city": "Châu Thành, Đồng Tháp",
        "admin_name": "Đồng Tháp",
        "lat": "10.252118",
        "lng": "105.838351"
    },
    {
        "city": "Châu Thành, Hậu Giang",
        "admin_name": "Hậu Giang",
        "lat": "22.826459",
        "lng": "104.984634"
    },
    {
        "city": "Châu Thành, Kiên Giang",
        "admin_name": "Kiên Giang",
        "lat": "10.009092",
        "lng": "105.11152"
    },
    {
        "city": "Châu Thành, Long An",
        "admin_name": "Long An",
        "lat": "10.600298",
        "lng": "106.405234"
    },
    {
        "city": "Châu Thành, Sóc Trăng",
        "admin_name": "Sóc Trăng",
        "lat": "9.704004",
        "lng": "105.899606"
    },
    {
        "city": "Châu Thành, Tây Ninh",
        "admin_name": "Tây Ninh",
        "lat": "11.312719",
        "lng": "106.022828"
    },
    {
        "city": "Châu Thành, Tiền Giang",
        "admin_name": "Tiền Giang",
        "lat": "10.009092",
        "lng": "105.11152"
    },
    {
        "city": "Châu Thành, Trà Vinh",
        "admin_name": "Trà Vinh",
        "lat": "9.870467",
        "lng": "106.348577"
    },
    {
        "city": "Châu Thành A",
        "admin_name": "Hậu Giang",
        "lat": "9.919302",
        "lng": "105.647984"
    },
    {
        "city": "Chi Lăng (huyện)",
        "admin_name": "Lạng Sơn",
        "lat": "21.838789",
        "lng": "106.750495"
    },
    {
        "city": "Chí Linh",
        "admin_name": "Hải Dương",
        "lat": "21.107421",
        "lng": "106.38732"
    },
    {
        "city": "Chiêm Hóa",
        "admin_name": "Tuyên Quang",
        "lat": "22.170287",
        "lng": "105.206803"
    },
    {
        "city": "Chợ Đồn",
        "admin_name": "Bắc Kạn",
        "lat": "22.160608",
        "lng": "105.592848"
    },
    {
        "city": "Chợ Gạo",
        "admin_name": "Tiền Giang",
        "lat": "10.352639",
        "lng": "106.461834"
    },
    {
        "city": "Chợ Lách",
        "admin_name": "Bến Tre",
        "lat": "10.260552",
        "lng": "106.121017"
    },
    {
        "city": "Chợ Mới, An Giang",
        "admin_name": "An Giang",
        "lat": "10.550506",
        "lng": "105.397507"
    },
    {
        "city": "Chợ Mới, Bắc Kạn",
        "admin_name": "Bắc Kạn",
        "lat": "22.149492",
        "lng": "105.837248"
    },
    {
        "city": "Chơn Thành",
        "admin_name": "Bình Phước",
        "lat": "11.416695",
        "lng": "106.619815"
    },
    {
        "city": "Chư Păh",
        "admin_name": "Gia Lai",
        "lat": "14.140511",
        "lng": "107.975841"
    },
    {
        "city": "Chư Prông",
        "admin_name": "Gia Lai",
        "lat": "13.757197",
        "lng": "107.888254"
    },
    {
        "city": "Chư Pưh",
        "admin_name": "Gia Lai",
        "lat": "13.557176",
        "lng": "108.099379"
    },
    {
        "city": "Chư Sê",
        "admin_name": "Gia Lai",
        "lat": "13.696502",
        "lng": "108.077088"
    },
    {
        "city": "Chương Mỹ",
        "admin_name": "Hà Nội",
        "lat": "20.892325",
        "lng": "105.640949"
    },
    {
        "city": "Cờ Đỏ",
        "admin_name": "Cần Thơ",
        "lat": "10.097722",
        "lng": "105.433326"
    },
    {
        "city": "Cô Tô",
        "admin_name": "Quảng Ninh",
        "lat": "20.974383500000002",
        "lng": "107.7650525"
    },
    {
        "city": "Cồn Cỏ",
        "admin_name": "Quảng Trị",
        "lat": "17.153421",
        "lng": "107.338346"
    },
    {
        "city": "Con Cuông",
        "admin_name": "Nghệ An",
        "lat": "19.050736",
        "lng": "104.880247"
    },
    {
        "city": "Côn Đảo",
        "admin_name": "Bà Rịa – Vũng Tàu",
        "lat": "8.683219",
        "lng": "106.606314"
    },
    {
        "city": "Củ Chi",
        "admin_name": "Thành phố Hồ Chí Minh",
        "lat": "10.971846",
        "lng": "106.487258"
    },
    {
        "city": "Cư Jút",
        "admin_name": "Đắk Nông",
        "lat": "12.606552",
        "lng": "107.890641"
    },
    {
        "city": "Cư Kuin",
        "admin_name": "Đắk Lắk",
        "lat": "12.591513",
        "lng": "108.157169"
    },
    {
        "city": "Cù Lao Dung",
        "admin_name": "Sóc Trăng",
        "lat": "9.671509",
        "lng": "106.152982"
    },
    {
        "city": "Cư M'gar",
        "admin_name": "Đắk Lắk",
        "lat": "12.819392",
        "lng": "108.109422"
    },
    {
        "city": "Cửa Lò",
        "admin_name": "Nghệ An",
        "lat": "18.819886",
        "lng": "105.716589"
    },
    {
        "city": "Đà Bắc",
        "admin_name": "Hòa Bình",
        "lat": "20.880176",
        "lng": "105.24099"
    },
    {
        "city": "Đạ Huoai",
        "admin_name": "Lâm Đồng",
        "lat": "11.391965",
        "lng": "107.547975"
    },
    {
        "city": "Đakrông",
        "admin_name": "Quảng Trị",
        "lat": "16.660243",
        "lng": "106.816107"
    },
    {
        "city": "Đà Lạt",
        "admin_name": "Lâm Đồng",
        "lat": "11.940242",
        "lng": "108.437576"
    },
    {
        "city": "Đạ Tẻh",
        "admin_name": "Lâm Đồng",
        "lat": "11.516983",
        "lng": "107.493515"
    },
    {
        "city": "Đại Lộc",
        "admin_name": "Quảng Nam",
        "lat": "15.852316",
        "lng": "108.05026"
    },
    {
        "city": "Đại Từ",
        "admin_name": "Thái Nguyên",
        "lat": "21.613062",
        "lng": "105.634996"
    },
    {
        "city": "Đak Đoa",
        "admin_name": "Gia Lai",
        "lat": "13.992756",
        "lng": "108.114213"
    },
    {
        "city": "Đăk Glei",
        "admin_name": "Kon Tum",
        "lat": "15.086417",
        "lng": "107.735768"
    },
    {
        "city": "Đắk Glong",
        "admin_name": "Đắk Nông",
        "lat": "12.085473",
        "lng": "107.921275"
    },
    {
        "city": "Đăk Hà",
        "admin_name": "Kon Tum",
        "lat": "14.513346",
        "lng": "107.921515"
    },
    {
        "city": "Đắk Mil",
        "admin_name": "Đắk Nông",
        "lat": "12.44889",
        "lng": "107.625092"
    },
    {
        "city": "Đak Pơ",
        "admin_name": "Gia Lai",
        "lat": "13.975644",
        "lng": "108.554015"
    },
    {
        "city": "Đắk R'lấp",
        "admin_name": "Đắk Nông",
        "lat": "11.96833",
        "lng": "107.530466"
    },
    {
        "city": "Đắk Song",
        "admin_name": "Đắk Nông",
        "lat": "12.128869",
        "lng": "107.587426"
    },
    {
        "city": "Đăk Tô",
        "admin_name": "Kon Tum",
        "lat": "14.661248",
        "lng": "107.840036"
    },
    {
        "city": "Đầm Dơi",
        "admin_name": "Cà Mau",
        "lat": "8.994693",
        "lng": "105.197442"
    },
    {
        "city": "Đầm Hà",
        "admin_name": "Quảng Ninh",
        "lat": "21.353764",
        "lng": "107.591478"
    },
    {
        "city": "Đam Rông",
        "admin_name": "Lâm Đồng",
        "lat": "12.125462",
        "lng": "108.137342"
    },
    {
        "city": "Đan Phượng",
        "admin_name": "Hà Nội",
        "lat": "21.104943",
        "lng": "105.678753"
    },
    {
        "city": "Đất Đỏ",
        "admin_name": "Bà Rịa – Vũng Tàu",
        "lat": "10.489923",
        "lng": "107.269656"
    },
    {
        "city": "Dầu Tiếng",
        "admin_name": "Bình Dương",
        "lat": "11.282225",
        "lng": "106.362711"
    },
    {
        "city": "Dĩ An",
        "admin_name": "Bình Dương",
        "lat": "10.912895",
        "lng": "106.766534"
    },
    {
        "city": "Di Linh",
        "admin_name": "Lâm Đồng",
        "lat": "11.574752",
        "lng": "108.058375"
    },
    {
        "city": "Điện Bàn",
        "admin_name": "Quảng Nam",
        "lat": "15.884803",
        "lng": "108.251784"
    },
    {
        "city": "Điện Biên (huyện)",
        "admin_name": "Điện Biên",
        "lat": "21.296732",
        "lng": "103.220093"
    },
    {
        "city": "Điện Biên Đông",
        "admin_name": "Điện Biên",
        "lat": "21.296732",
        "lng": "103.220093"
    },
    {
        "city": "Điện Biên Phủ",
        "admin_name": "Điện Biên",
        "lat": "21.387489",
        "lng": "103.0185"
    },
    {
        "city": "Diễn Châu",
        "admin_name": "Nghệ An",
        "lat": "18.980813",
        "lng": "105.597665"
    },
    {
        "city": "Diên Khánh",
        "admin_name": "Khánh Hòa",
        "lat": "12.25971",
        "lng": "109.10121"
    },
    {
        "city": "Định Hóa",
        "admin_name": "Thái Nguyên",
        "lat": "21.866696",
        "lng": "105.603064"
    },
    {
        "city": "Đình Lập",
        "admin_name": "Lạng Sơn",
        "lat": "21.548245",
        "lng": "107.096858"
    },
    {
        "city": "Định Quán",
        "admin_name": "Đồng Nai",
        "lat": "11.203577",
        "lng": "107.359288"
    },
    {
        "city": "Đô Lương",
        "admin_name": "Nghệ An",
        "lat": "18.901465",
        "lng": "105.310454"
    },
    {
        "city": "Đồ Sơn",
        "admin_name": "Hải Phòng",
        "lat": "20.72106",
        "lng": "106.769378"
    },
    {
        "city": "Đoan Hùng",
        "admin_name": "Phú Thọ",
        "lat": "21.643839",
        "lng": "105.180163"
    },
    {
        "city": "Đơn Dương",
        "admin_name": "Lâm Đồng",
        "lat": "11.761675",
        "lng": "108.508156"
    },
    {
        "city": "Đông Anh",
        "admin_name": "Hà Nội",
        "lat": "21.162939",
        "lng": "105.846909"
    },
    {
        "city": "Đống Đa",
        "admin_name": "Hà Nội",
        "lat": "21.01292",
        "lng": "105.827196"
    },
    {
        "city": "Đông Giang",
        "admin_name": "Quảng Nam",
        "lat": "15.933074",
        "lng": "107.780377"
    },
    {
        "city": "Đông Hà",
        "admin_name": "Quảng Trị",
        "lat": "16.817285",
        "lng": "107.101038"
    },
    {
        "city": "Đông Hải (huyện)",
        "admin_name": "Bạc Liêu",
        "lat": "9.111297",
        "lng": "105.4303"
    },
    {
        "city": "Đông Hòa",
        "admin_name": "Phú Yên",
        "lat": "12.989786",
        "lng": "109.333584"
    },
    {
        "city": "Đồng Hới",
        "admin_name": "Quảng Bình",
        "lat": "17.465957",
        "lng": "106.598471"
    },
    {
        "city": "Đông Hưng",
        "admin_name": "Thái Bình",
        "lat": "20.556291",
        "lng": "106.356219"
    },
    {
        "city": "Đồng Hỷ",
        "admin_name": "Thái Nguyên",
        "lat": "21.694505",
        "lng": "105.873056"
    },
    {
        "city": "Đồng Phú",
        "admin_name": "Bình Phước",
        "lat": "11.462308",
        "lng": "106.869504"
    },
    {
        "city": "Đông Sơn",
        "admin_name": "Thanh Hóa",
        "lat": "19.795225",
        "lng": "105.79329"
    },
    {
        "city": "Đông Triều",
        "admin_name": "Quảng Ninh",
        "lat": "21.08379",
        "lng": "106.513361"
    },
    {
        "city": "Đồng Văn",
        "admin_name": "Hà Giang",
        "lat": "23.278298",
        "lng": "105.361521"
    },
    {
        "city": "Đồng Xoài",
        "admin_name": "Bình Phước",
        "lat": "11.538958",
        "lng": "106.904738"
    },
    {
        "city": "Đồng Xuân",
        "admin_name": "Phú Yên",
        "lat": "13.370058",
        "lng": "109.091061"
    },
    {
        "city": "Đức Cơ",
        "admin_name": "Gia Lai",
        "lat": "13.793527",
        "lng": "107.684078"
    },
    {
        "city": "Đức Hòa",
        "admin_name": "Long An",
        "lat": "10.829371",
        "lng": "106.456771"
    },
    {
        "city": "Đức Huệ",
        "admin_name": "Long An",
        "lat": "10.897587",
        "lng": "106.30847"
    },
    {
        "city": "Đức Linh",
        "admin_name": "Bình Thuận",
        "lat": "11.165581",
        "lng": "107.533082"
    },
    {
        "city": "Đức Phổ",
        "admin_name": "Quảng Ngãi",
        "lat": "14.81786",
        "lng": "108.954637"
    },
    {
        "city": "Đức Thọ",
        "admin_name": "Hà Tĩnh",
        "lat": "18.532845",
        "lng": "105.583141"
    },
    {
        "city": "Đức Trọng",
        "admin_name": "Lâm Đồng",
        "lat": "11.735816",
        "lng": "108.375678"
    },
    {
        "city": "Dương Kinh",
        "admin_name": "Hải Phòng",
        "lat": "20.777526",
        "lng": "106.72153"
    },
    {
        "city": "Dương Minh Châu (huyện)",
        "admin_name": "Tây Ninh",
        "lat": "11.382719",
        "lng": "106.22798"
    },
    {
        "city": "Duy Tiên",
        "admin_name": "Hà Nam",
        "lat": "20.63101",
        "lng": "105.958796"
    },
    {
        "city": "Duy Xuyên",
        "admin_name": "Quảng Nam",
        "lat": "15.823696",
        "lng": "108.217422"
    },
    {
        "city": "Duyên Hải (thị xã)",
        "admin_name": "Trà Vinh",
        "lat": "9.631443",
        "lng": "106.459269"
    },
    {
        "city": "Duyên Hải (huyện)",
        "admin_name": "Trà Vinh",
        "lat": "9.631443",
        "lng": "106.459269"
    },
    {
        "city": "Ea H'leo",
        "admin_name": "Đắk Lắk",
        "lat": "13.22144",
        "lng": "108.218239"
    },
    {
        "city": "Ea Kar",
        "admin_name": "Đắk Lắk",
        "lat": "12.810733",
        "lng": "108.456834"
    },
    {
        "city": "Ea Súp",
        "admin_name": "Đắk Lắk",
        "lat": "13.074426",
        "lng": "107.882112"
    },
    {
        "city": "Gia Bình",
        "admin_name": "Bắc Ninh",
        "lat": "21.056039",
        "lng": "106.174579"
    },
    {
        "city": "Gia Lâm",
        "admin_name": "Hà Nội",
        "lat": "21.028005",
        "lng": "105.947147"
    },
    {
        "city": "Gia Lộc",
        "admin_name": "Hải Dương",
        "lat": "20.87036",
        "lng": "106.29841"
    },
    {
        "city": "Gia Nghĩa",
        "admin_name": "Đắk Nông",
        "lat": "12.000599",
        "lng": "107.696026"
    },
    {
        "city": "Giá Rai",
        "admin_name": "Bạc Liêu",
        "lat": "9.239662",
        "lng": "105.414033"
    },
    {
        "city": "Gia Viễn",
        "admin_name": "Ninh Bình",
        "lat": "20.354796",
        "lng": "105.881479"
    },
    {
        "city": "Giang Thành",
        "admin_name": "Kiên Giang",
        "lat": "10.494521",
        "lng": "104.64612"
    },
    {
        "city": "Giao Thủy",
        "admin_name": "Nam Định",
        "lat": "20.244415",
        "lng": "106.412274"
    },
    {
        "city": "Gio Linh",
        "admin_name": "Quảng Trị",
        "lat": "16.934925",
        "lng": "107.074763"
    },
    {
        "city": "Giồng Riềng",
        "admin_name": "Kiên Giang",
        "lat": "9.90913",
        "lng": "105.314032"
    },
    {
        "city": "Giồng Trôm",
        "admin_name": "Bến Tre",
        "lat": "10.152",
        "lng": "106.505086"
    },
    {
        "city": "Gò Công",
        "admin_name": "Tiền Giang",
        "lat": "10.362956",
        "lng": "106.676703"
    },
    {
        "city": "Gò Công Đông",
        "admin_name": "Tiền Giang",
        "lat": "10.380134",
        "lng": "106.731976"
    },
    {
        "city": "Gò Công Tây",
        "admin_name": "Tiền Giang",
        "lat": "10.335876",
        "lng": "106.608879"
    },
    {
        "city": "Gò Dầu",
        "admin_name": "Tây Ninh",
        "lat": "11.083907",
        "lng": "106.26507"
    },
    {
        "city": "Gò Quao",
        "admin_name": "Kiên Giang",
        "lat": "9.722554",
        "lng": "105.280944"
    },
    {
        "city": "Gò Vấp",
        "admin_name": "Thành phố Hồ Chí Minh",
        "lat": "10.84015",
        "lng": "106.671083"
    },
    {
        "city": "Hà Đông",
        "admin_name": "Hà Nội",
        "lat": "20.96708",
        "lng": "105.772587"
    },
    {
        "city": "Hà Giang (thành phố)",
        "admin_name": "Hà Giang",
        "lat": "22.826459",
        "lng": "104.984634"
    },
    {
        "city": "Hạ Hòa",
        "admin_name": "Phú Thọ",
        "lat": "21.563294",
        "lng": "105.007172"
    },
    {
        "city": "Hạ Lang",
        "admin_name": "Cao Bằng",
        "lat": "22.698782",
        "lng": "106.673168"
    },
    {
        "city": "Hạ Long",
        "admin_name": "Quảng Ninh",
        "lat": "20.952837",
        "lng": "107.08"
    },
    {
        "city": "Hà Quảng",
        "admin_name": "Cao Bằng",
        "lat": "22.896206",
        "lng": "106.092427"
    },
    {
        "city": "Hà Tiên",
        "admin_name": "Kiên Giang",
        "lat": "10.382802",
        "lng": "104.48595"
    },
    {
        "city": "Hà Tĩnh (thành phố)",
        "admin_name": "Hà Tĩnh",
        "lat": "18.345275",
        "lng": "105.901948"
    },
    {
        "city": "Hà Trung",
        "admin_name": "Thanh Hóa",
        "lat": "19.992182",
        "lng": "105.843784"
    },
    {
        "city": "Hải An",
        "admin_name": "Hải Phòng",
        "lat": "20.837071",
        "lng": "106.727363"
    },
    {
        "city": "Hai Bà Trưng (quận)",
        "admin_name": "Hà Nội",
        "lat": "21.00597",
        "lng": "105.857484"
    },
    {
        "city": "Hải Châu",
        "admin_name": "Đà Nẵng",
        "lat": "16.057974",
        "lng": "108.219544"
    },
    {
        "city": "Hải Dương (thành phố)",
        "admin_name": "Hải Dương",
        "lat": "20.943088",
        "lng": "106.322539"
    },
    {
        "city": "Hải Hà",
        "admin_name": "Quảng Ninh",
        "lat": "21.447533",
        "lng": "107.738738"
    },
    {
        "city": "Hải Hậu",
        "admin_name": "Nam Định",
        "lat": "20.140833",
        "lng": "106.261064"
    },
    {
        "city": "Hải Lăng",
        "admin_name": "Quảng Trị",
        "lat": "16.693051",
        "lng": "107.245796"
    },
    {
        "city": "Hàm Tân",
        "admin_name": "Bình Thuận",
        "lat": "10.777959",
        "lng": "107.692308"
    },
    {
        "city": "Hàm Thuận Bắc",
        "admin_name": "Bình Thuận",
        "lat": "11.010938",
        "lng": "108.101418"
    },
    {
        "city": "Hàm Thuận Nam",
        "admin_name": "Bình Thuận",
        "lat": "10.890226",
        "lng": "107.968073"
    },
    {
        "city": "Hàm Yên",
        "admin_name": "Tuyên Quang",
        "lat": "22.03739",
        "lng": "105.08774"
    },
    {
        "city": "Hậu Lộc",
        "admin_name": "Thanh Hóa",
        "lat": "19.914194",
        "lng": "105.886185"
    },
    {
        "city": "Hiệp Đức",
        "admin_name": "Quảng Nam",
        "lat": "15.578173",
        "lng": "108.129231"
    },
    {
        "city": "Hiệp Hòa (huyện)",
        "admin_name": "Bắc Giang",
        "lat": "21.284395",
        "lng": "105.93836"
    },
    {
        "city": "Hòa An",
        "admin_name": "Cao Bằng",
        "lat": "22.73587",
        "lng": "106.156204"
    },
    {
        "city": "Hòa Bình (thành phố)",
        "admin_name": "Hòa Bình",
        "lat": "20.843883",
        "lng": "105.320403"
    },
    {
        "city": "Hòa Bình (huyện)",
        "admin_name": "Bạc Liêu",
        "lat": "9.287072",
        "lng": "105.627014"
    },
    {
        "city": "Hoa Lư (huyện)",
        "admin_name": "Ninh Bình",
        "lat": "20.249704",
        "lng": "105.91606"
    },
    {
        "city": "Hòa Thành",
        "admin_name": "Tây Ninh",
        "lat": "11.285279",
        "lng": "106.129617"
    },
    {
        "city": "Hòa Vang",
        "admin_name": "Đà Nẵng",
        "lat": "15.987636",
        "lng": "108.138927"
    },
    {
        "city": "Hoài Ân",
        "admin_name": "Bình Định",
        "lat": "14.354736",
        "lng": "108.946658"
    },
    {
        "city": "Hoài Đức",
        "admin_name": "Hà Nội",
        "lat": "21.043595",
        "lng": "105.694949"
    },
    {
        "city": "Hoài Nhơn",
        "admin_name": "Bình Định",
        "lat": "14.498559",
        "lng": "109.044259"
    },
    {
        "city": "Hoàn Kiếm",
        "admin_name": "Hà Nội",
        "lat": "21.028524",
        "lng": "105.850715"
    },
    {
        "city": "Hoằng Hóa",
        "admin_name": "Thanh Hóa",
        "lat": "19.845279",
        "lng": "105.845989"
    },
    {
        "city": "Hoàng Mai (quận)",
        "admin_name": "Hà Nội",
        "lat": "20.974598",
        "lng": "105.863707"
    },
    {
        "city": "Hoàng Mai (thị xã)",
        "admin_name": "Nghệ An",
        "lat": "19.256266",
        "lng": "105.710551"
    },
    {
        "city": "Hoàng Sa (huyện)",
        "admin_name": "Đà Nẵng",
        "lat": "16.068678",
        "lng": "108.238404"
    },
    {
        "city": "Hoàng Su Phì",
        "admin_name": "Hà Giang",
        "lat": "22.793968",
        "lng": "104.632815"
    },
    {
        "city": "Hóc Môn",
        "admin_name": "Thành phố Hồ Chí Minh",
        "lat": "10.891609",
        "lng": "106.594945"
    },
    {
        "city": "Hội An",
        "admin_name": "Quảng Nam",
        "lat": "15.879814",
        "lng": "108.327394"
    },
    {
        "city": "Hòn Đất",
        "admin_name": "Kiên Giang",
        "lat": "10.185659",
        "lng": "104.923272"
    },
    {
        "city": "Hớn Quản",
        "admin_name": "Bình Phước",
        "lat": "11.627112",
        "lng": "106.640632"
    },
    {
        "city": "Hồng Bàng (quận)",
        "admin_name": "Hải Phòng",
        "lat": "20.865103",
        "lng": "106.663148"
    },
    {
        "city": "Hồng Dân",
        "admin_name": "Bạc Liêu",
        "lat": "9.547621",
        "lng": "105.453879"
    },
    {
        "city": "Hồng Lĩnh",
        "admin_name": "Hà Tĩnh",
        "lat": "18.528249",
        "lng": "105.706261"
    },
    {
        "city": "Hồng Ngự (thành phố)",
        "admin_name": "Đồng Tháp",
        "lat": "10.797897",
        "lng": "105.290214"
    },
    {
        "city": "Hồng Ngự (huyện)",
        "admin_name": "Đồng Tháp",
        "lat": "10.797897",
        "lng": "105.290214"
    },
    {
        "city": "Huế",
        "admin_name": "Thừa Thiên Huế",
        "lat": "16.463801",
        "lng": "107.582191"
    },
    {
        "city": "Hưng Hà",
        "admin_name": "Thái Bình",
        "lat": "20.587217",
        "lng": "106.224726"
    },
    {
        "city": "Hưng Nguyên",
        "admin_name": "Nghệ An",
        "lat": "18.670328",
        "lng": "105.630419"
    },
    {
        "city": "Hưng Yên (thành phố)",
        "admin_name": "Hưng Yên",
        "lat": "20.656841",
        "lng": "106.054036"
    },
    {
        "city": "Hướng Hóa",
        "admin_name": "Quảng Trị",
        "lat": "16.704034",
        "lng": "106.634795"
    },
    {
        "city": "Hương Khê",
        "admin_name": "Hà Tĩnh",
        "lat": "18.177893",
        "lng": "105.705578"
    },
    {
        "city": "Hương Sơn",
        "admin_name": "Hà Tĩnh",
        "lat": "18.504219",
        "lng": "105.425832"
    },
    {
        "city": "Hương Thủy",
        "admin_name": "Thừa Thiên Huế",
        "lat": "16.411541",
        "lng": "107.671579"
    },
    {
        "city": "Hương Trà",
        "admin_name": "Thừa Thiên Huế",
        "lat": "16.518873",
        "lng": "107.484003"
    },
    {
        "city": "Hữu Lũng",
        "admin_name": "Lạng Sơn",
        "lat": "21.502139",
        "lng": "106.345456"
    },
    {
        "city": "Ia Grai",
        "admin_name": "Gia Lai",
        "lat": "13.981021",
        "lng": "107.855782"
    },
    {
        "city": "Ia H'Drai",
        "admin_name": "Kon Tum",
        "lat": "14.104974",
        "lng": "107.454804"
    },
    {
        "city": "Ia Pa",
        "admin_name": "Gia Lai",
        "lat": "13.462026",
        "lng": "108.458607"
    },
    {
        "city": "Kbang",
        "admin_name": "Gia Lai",
        "lat": "14.147641",
        "lng": "108.596144"
    },
    {
        "city": "Kế Sách",
        "admin_name": "Sóc Trăng",
        "lat": "9.769474",
        "lng": "105.984608"
    },
    {
        "city": "Khánh Sơn",
        "admin_name": "Khánh Hòa",
        "lat": "12.014725",
        "lng": "108.913969"
    },
    {
        "city": "Khánh Vĩnh",
        "admin_name": "Khánh Hòa",
        "lat": "12.277264",
        "lng": "108.903887"
    },
    {
        "city": "Khoái Châu",
        "admin_name": "Hưng Yên",
        "lat": "20.840373",
        "lng": "105.976865"
    },
    {
        "city": "Kiến An",
        "admin_name": "Hải Phòng",
        "lat": "20.806131",
        "lng": "106.620677"
    },
    {
        "city": "Kiên Hải",
        "admin_name": "Kiên Giang",
        "lat": "10.020886",
        "lng": "104.55707"
    },
    {
        "city": "Kiên Lương",
        "admin_name": "Kiên Giang",
        "lat": "10.284729",
        "lng": "104.648405"
    },
    {
        "city": "Kiến Thụy",
        "admin_name": "Hải Phòng",
        "lat": "20.733319",
        "lng": "106.679221"
    },
    {
        "city": "Kiến Tường",
        "admin_name": "Long An",
        "lat": "10.775352",
        "lng": "105.937031"
    },
    {
        "city": "Kiến Xương",
        "admin_name": "Thái Bình",
        "lat": "20.38914",
        "lng": "106.439059"
    },
    {
        "city": "Kim Bảng",
        "admin_name": "Hà Nam",
        "lat": "20.588641",
        "lng": "105.872918"
    },
    {
        "city": "Kim Bôi",
        "admin_name": "Hòa Bình",
        "lat": "20.679889",
        "lng": "105.534475"
    },
    {
        "city": "Kim Động",
        "admin_name": "Hưng Yên",
        "lat": "20.741212",
        "lng": "106.018035"
    },
    {
        "city": "Kim Sơn",
        "admin_name": "Ninh Bình",
        "lat": "20.091251",
        "lng": "106.095264"
    },
    {
        "city": "Kim Thành",
        "admin_name": "Hải Dương",
        "lat": "20.960026",
        "lng": "106.458176"
    },
    {
        "city": "Kinh Môn",
        "admin_name": "Hải Dương",
        "lat": "20.990957",
        "lng": "106.552859"
    },
    {
        "city": "Kon Plông",
        "admin_name": "Kon Tum",
        "lat": "14.772657",
        "lng": "108.358809"
    },
    {
        "city": "Kon Rẫy",
        "admin_name": "Kon Tum",
        "lat": "14.474726",
        "lng": "108.188343"
    },
    {
        "city": "Kon Tum (thành phố)",
        "admin_name": "Kon Tum",
        "lat": "14.361526",
        "lng": "108.00391"
    },
    {
        "city": "Kông Chro",
        "admin_name": "Gia Lai",
        "lat": "13.776087",
        "lng": "108.523022"
    },
    {
        "city": "Krông Ana",
        "admin_name": "Đắk Lắk",
        "lat": "12.487808",
        "lng": "108.034565"
    },
    {
        "city": "Krông Bông",
        "admin_name": "Đắk Lắk",
        "lat": "12.52628",
        "lng": "108.348689"
    },
    {
        "city": "Krông Búk",
        "admin_name": "Đắk Lắk",
        "lat": "12.979661",
        "lng": "108.224952"
    },
    {
        "city": "Krông Năng",
        "admin_name": "Đắk Lắk",
        "lat": "12.950937",
        "lng": "108.3426"
    },
    {
        "city": "Krông Nô",
        "admin_name": "Đắk Nông",
        "lat": "12.450261",
        "lng": "107.870417"
    },
    {
        "city": "Krông Pa",
        "admin_name": "Gia Lai",
        "lat": "13.198114",
        "lng": "108.688416"
    },
    {
        "city": "Krông Pắc",
        "admin_name": "Đắk Lắk",
        "lat": "12.706046",
        "lng": "108.331545"
    },
    {
        "city": "Kỳ Anh (thị xã)",
        "admin_name": "Hà Tĩnh",
        "lat": "18.104135",
        "lng": "106.27232"
    },
    {
        "city": "Kỳ Anh (huyện)",
        "admin_name": "Hà Tĩnh",
        "lat": "18.104135",
        "lng": "106.27232"
    },
    {
        "city": "Kỳ Sơn",
        "admin_name": "Nghệ An",
        "lat": "19.403056",
        "lng": "104.178564"
    },
    {
        "city": "La Gi",
        "admin_name": "Bình Thuận",
        "lat": "10.658822",
        "lng": "107.773119"
    },
    {
        "city": "Lạc Dương (huyện)",
        "admin_name": "Lâm Đồng",
        "lat": "12.00809",
        "lng": "108.419989"
    },
    {
        "city": "Lạc Sơn",
        "admin_name": "Hòa Bình",
        "lat": "20.428657",
        "lng": "105.48417"
    },
    {
        "city": "Lạc Thủy",
        "admin_name": "Hòa Bình",
        "lat": "20.493481",
        "lng": "105.752122"
    },
    {
        "city": "Lai Châu (thành phố)",
        "admin_name": "Lai Châu",
        "lat": "22.399661",
        "lng": "103.451688"
    },
    {
        "city": "Lai Vung",
        "admin_name": "Đồng Tháp",
        "lat": "10.289079",
        "lng": "105.65908424999999"
    },
    {
        "city": "Lắk",
        "admin_name": "Đắk Lắk",
        "lat": "12.381028",
        "lng": "108.167237"
    },
    {
        "city": "Lâm Bình",
        "admin_name": "Tuyên Quang",
        "lat": "22.398234",
        "lng": "105.166455"
    },
    {
        "city": "Lâm Hà",
        "admin_name": "Lâm Đồng",
        "lat": "11.777564",
        "lng": "108.227969"
    },
    {
        "city": "Lâm Thao",
        "admin_name": "Phú Thọ",
        "lat": "21.320261",
        "lng": "105.285126"
    },
    {
        "city": "Lang Chánh",
        "admin_name": "Thanh Hóa",
        "lat": "20.154719",
        "lng": "105.239511"
    },
    {
        "city": "Lạng Giang",
        "admin_name": "Bắc Giang",
        "lat": "21.414651",
        "lng": "106.219331"
    },
    {
        "city": "Lạng Sơn (thành phố)",
        "admin_name": "Lạng Sơn",
        "lat": "21.852876",
        "lng": "106.759746"
    },
    {
        "city": "Lào Cai (thành phố)",
        "admin_name": "Lào Cai",
        "lat": "22.508212",
        "lng": "103.968077"
    },
    {
        "city": "Lập Thạch",
        "admin_name": "Vĩnh Phúc",
        "lat": "21.413007",
        "lng": "105.464373"
    },
    {
        "city": "Lấp Vò",
        "admin_name": "Đồng Tháp",
        "lat": "10.361079",
        "lng": "105.520495"
    },
    {
        "city": "Lê Chân (quận)",
        "admin_name": "Hải Phòng",
        "lat": "20.839571",
        "lng": "106.676066"
    },
    {
        "city": "Lệ Thủy",
        "admin_name": "Quảng Bình",
        "lat": "17.217722",
        "lng": "106.793062"
    },
    {
        "city": "Liên Chiểu",
        "admin_name": "Đà Nẵng",
        "lat": "16.072723",
        "lng": "108.158147"
    },
    {
        "city": "Lộc Bình",
        "admin_name": "Lạng Sơn",
        "lat": "21.75986",
        "lng": "106.923199"
    },
    {
        "city": "Lộc Hà",
        "admin_name": "Hà Tĩnh",
        "lat": "18.457116",
        "lng": "105.905691"
    },
    {
        "city": "Lộc Ninh",
        "admin_name": "Bình Phước",
        "lat": "11.845165",
        "lng": "106.590373"
    },
    {
        "city": "Long Biên",
        "admin_name": "Hà Nội",
        "lat": "21.024209",
        "lng": "105.886574"
    },
    {
        "city": "Long Điền",
        "admin_name": "Bà Rịa – Vũng Tàu",
        "lat": "10.484249",
        "lng": "107.213363"
    },
    {
        "city": "Long Hồ",
        "admin_name": "Vĩnh Long",
        "lat": "10.19296",
        "lng": "106.011212"
    },
    {
        "city": "Long Khánh",
        "admin_name": "Đồng Nai",
        "lat": "10.933528",
        "lng": "107.241683"
    },
    {
        "city": "Long Mỹ (thị xã)",
        "admin_name": "Hậu Giang",
        "lat": "9.679297",
        "lng": "105.571439"
    },
    {
        "city": "Long Mỹ (huyện)",
        "admin_name": "Hậu Giang",
        "lat": "9.679297",
        "lng": "105.571439"
    },
    {
        "city": "Long Phú",
        "admin_name": "Sóc Trăng",
        "lat": "9.675497",
        "lng": "106.086053"
    },
    {
        "city": "Long Thành",
        "admin_name": "Đồng Nai",
        "lat": "10.793734",
        "lng": "106.949171"
    },
    {
        "city": "Long Xuyên",
        "admin_name": "An Giang",
        "lat": "10.390544",
        "lng": "105.433752"
    },
    {
        "city": "Lục Nam",
        "admin_name": "Bắc Giang",
        "lat": "21.285647",
        "lng": "106.384283"
    },
    {
        "city": "Lục Ngạn",
        "admin_name": "Bắc Giang",
        "lat": "21.392643",
        "lng": "106.574102"
    },
    {
        "city": "Lục Yên",
        "admin_name": "Yên Bái",
        "lat": "22.139326",
        "lng": "104.828468"
    },
    {
        "city": "Lương Sơn",
        "admin_name": "Hòa Bình",
        "lat": "20.871465",
        "lng": "105.515431"
    },
    {
        "city": "Lương Tài",
        "admin_name": "Bắc Ninh",
        "lat": "21.02875",
        "lng": "106.257311"
    },
    {
        "city": "Lý Nhân",
        "admin_name": "Hà Nam",
        "lat": "20.557207",
        "lng": "106.058981"
    },
    {
        "city": "Lý Sơn",
        "admin_name": "Quảng Ngãi",
        "lat": "15.38216",
        "lng": "109.113626"
    },
    {
        "city": "M'Drắk",
        "admin_name": "Đắk Lắk",
        "lat": "12.753196",
        "lng": "108.736121"
    },
    {
        "city": "Mai Châu",
        "admin_name": "Hòa Bình",
        "lat": "20.665018",
        "lng": "105.081674"
    },
    {
        "city": "Mai Sơn",
        "admin_name": "Sơn La",
        "lat": "21.204772",
        "lng": "104.096831"
    },
    {
        "city": "Mang Thít",
        "admin_name": "Vĩnh Long",
        "lat": "10.185951",
        "lng": "106.078638"
    },
    {
        "city": "Mang Yang",
        "admin_name": "Gia Lai",
        "lat": "14.040168",
        "lng": "108.271536"
    },
    {
        "city": "Mê Linh",
        "admin_name": "Hà Nội",
        "lat": "21.162982",
        "lng": "105.732839"
    },
    {
        "city": "Mèo Vạc",
        "admin_name": "Hà Giang",
        "lat": "23.165954",
        "lng": "105.410274"
    },
    {
        "city": "Minh Hóa",
        "admin_name": "Quảng Bình",
        "lat": "17.803603",
        "lng": "105.906354"
    },
    {
        "city": "Minh Long",
        "admin_name": "Quảng Ngãi",
        "lat": "14.95082",
        "lng": "108.706268"
    },
    {
        "city": "Mỏ Cày Bắc",
        "admin_name": "Bến Tre",
        "lat": "10.162583",
        "lng": "106.271615"
    },
    {
        "city": "Mỏ Cày Nam",
        "admin_name": "Bến Tre",
        "lat": "10.130233",
        "lng": "106.335868"
    },
    {
        "city": "Mộ Đức",
        "admin_name": "Quảng Ngãi",
        "lat": "14.952931",
        "lng": "108.878648"
    },
    {
        "city": "Mộc Châu",
        "admin_name": "Sơn La",
        "lat": "20.854361",
        "lng": "104.618272"
    },
    {
        "city": "Mộc Hóa",
        "admin_name": "Long An",
        "lat": "10.754824",
        "lng": "106.027715"
    },
    {
        "city": "Móng Cái",
        "admin_name": "Quảng Ninh",
        "lat": "21.529028",
        "lng": "107.969159"
    },
    {
        "city": "Mù Cang Chải",
        "admin_name": "Yên Bái",
        "lat": "21.851612",
        "lng": "104.08962"
    },
    {
        "city": "Mường Ảng",
        "admin_name": "Điện Biên",
        "lat": "21.519482",
        "lng": "103.222392"
    },
    {
        "city": "Mường Chà",
        "admin_name": "Điện Biên",
        "lat": "21.758662",
        "lng": "103.090472"
    },
    {
        "city": "Mường Khương",
        "admin_name": "Lào Cai",
        "lat": "22.759494",
        "lng": "104.116289"
    },
    {
        "city": "Mường La",
        "admin_name": "Sơn La",
        "lat": "21.424491",
        "lng": "104.093053"
    },
    {
        "city": "Mường Lát",
        "admin_name": "Thanh Hóa",
        "lat": "20.52759",
        "lng": "104.602002"
    },
    {
        "city": "Mường Lay",
        "admin_name": "Điện Biên",
        "lat": "22.04847",
        "lng": "103.159065"
    },
    {
        "city": "Mường Nhé",
        "admin_name": "Điện Biên",
        "lat": "22.191918",
        "lng": "102.458443"
    },
    {
        "city": "Mường Tè",
        "admin_name": "Lai Châu",
        "lat": "22.3829",
        "lng": "102.814"
    },
    {
        "city": "Mỹ Đức",
        "admin_name": "Hà Nội",
        "lat": "20.717908",
        "lng": "105.725318"
    },
    {
        "city": "Mỹ Hào",
        "admin_name": "Hưng Yên",
        "lat": "20.934896",
        "lng": "106.054883"
    },
    {
        "city": "Mỹ Lộc",
        "admin_name": "Nam Định",
        "lat": "20.441544",
        "lng": "106.101859"
    },
    {
        "city": "Mỹ Tho",
        "admin_name": "Tiền Giang",
        "lat": "10.36062",
        "lng": "106.365844"
    },
    {
        "city": "Mỹ Tú",
        "admin_name": "Sóc Trăng",
        "lat": "9.610721",
        "lng": "105.812845"
    },
    {
        "city": "Mỹ Xuyên",
        "admin_name": "Sóc Trăng",
        "lat": "9.483048",
        "lng": "105.873396"
    },
    {
        "city": "Na Hang",
        "admin_name": "Tuyên Quang",
        "lat": "22.351258",
        "lng": "105.384172"
    },
    {
        "city": "Na Rì",
        "admin_name": "Bắc Kạn",
        "lat": "22.101017",
        "lng": "105.979727"
    },
    {
        "city": "Năm Căn",
        "admin_name": "Cà Mau",
        "lat": "8.760117",
        "lng": "104.993575"
    },
    {
        "city": "Nam Đàn",
        "admin_name": "Nghệ An",
        "lat": "18.704821",
        "lng": "105.493817"
    },
    {
        "city": "Nam Định (thành phố)",
        "admin_name": "Nam Định",
        "lat": "20.423264",
        "lng": "106.168851"
    },
    {
        "city": "Nam Đông",
        "admin_name": "Thừa Thiên Huế",
        "lat": "16.156865",
        "lng": "107.693294"
    },
    {
        "city": "Nam Giang",
        "admin_name": "Quảng Nam",
        "lat": "15.677401",
        "lng": "107.625074"
    },
    {
        "city": "Nậm Nhùn",
        "admin_name": "Lai Châu",
        "lat": "22.145033",
        "lng": "102.999814"
    },
    {
        "city": "Nậm Pồ",
        "admin_name": "Điện Biên",
        "lat": "22.005164",
        "lng": "102.901174"
    },
    {
        "city": "Nam Sách",
        "admin_name": "Hải Dương",
        "lat": "20.990441",
        "lng": "106.327352"
    },
    {
        "city": "Nam Trà My",
        "admin_name": "Quảng Nam",
        "lat": "15.145805",
        "lng": "108.116964"
    },
    {
        "city": "Nam Trực",
        "admin_name": "Nam Định",
        "lat": "20.346837",
        "lng": "106.21196"
    },
    {
        "city": "Nam Từ Liêm",
        "admin_name": "Hà Nội",
        "lat": "21.012846",
        "lng": "105.760874"
    },
    {
        "city": "Ngã Bảy",
        "admin_name": "Hậu Giang",
        "lat": "9.815833",
        "lng": "105.819098"
    },
    {
        "city": "Ngã Năm",
        "admin_name": "Sóc Trăng",
        "lat": "9.565552",
        "lng": "105.597451"
    },
    {
        "city": "Nga Sơn",
        "admin_name": "Thanh Hóa",
        "lat": "20.006305",
        "lng": "105.970125"
    },
    {
        "city": "Ngân Sơn",
        "admin_name": "Bắc Kạn",
        "lat": "22.382791",
        "lng": "105.922712"
    },
    {
        "city": "Nghi Lộc",
        "admin_name": "Nghệ An",
        "lat": "18.802979",
        "lng": "105.530806"
    },
    {
        "city": "Nghi Sơn",
        "admin_name": "Thanh Hóa",
        "lat": "19.450783",
        "lng": "105.780129"
    },
    {
        "city": "Nghi Xuân",
        "admin_name": "Hà Tĩnh",
        "lat": "18.662059",
        "lng": "105.755745"
    },
    {
        "city": "Nghĩa Đàn",
        "admin_name": "Nghệ An",
        "lat": "19.362919",
        "lng": "105.426123"
    },
    {
        "city": "Nghĩa Hành",
        "admin_name": "Quảng Ngãi",
        "lat": "15.036136",
        "lng": "108.783552"
    },
    {
        "city": "Nghĩa Hưng",
        "admin_name": "Nam Định",
        "lat": "20.087409",
        "lng": "106.157407"
    },
    {
        "city": "Nghĩa Lộ",
        "admin_name": "Yên Bái",
        "lat": "21.60642",
        "lng": "104.503695"
    },
    {
        "city": "Ngô Quyền (quận)",
        "admin_name": "Hải Phòng",
        "lat": "20.857706",
        "lng": "106.701313"
    },
    {
        "city": "Ngọc Hiển",
        "admin_name": "Cà Mau",
        "lat": "8.675616",
        "lng": "104.968481"
    },
    {
        "city": "Ngọc Hồi",
        "admin_name": "Kon Tum",
        "lat": "14.707239",
        "lng": "107.683529"
    },
    {
        "city": "Ngọc Lặc",
        "admin_name": "Thanh Hóa",
        "lat": "20.080978",
        "lng": "105.378418"
    },
    {
        "city": "Ngũ Hành Sơn (quận)",
        "admin_name": "Đà Nẵng",
        "lat": "16.03122",
        "lng": "108.24306"
    },
    {
        "city": "Nguyên Bình",
        "admin_name": "Cao Bằng",
        "lat": "22.650202",
        "lng": "105.959937"
    },
    {
        "city": "Nhà Bè",
        "admin_name": "Thành phố Hồ Chí Minh",
        "lat": "10.701211",
        "lng": "106.739009"
    },
    {
        "city": "Nha Trang",
        "admin_name": "Khánh Hòa",
        "lat": "12.243169",
        "lng": "109.189867"
    },
    {
        "city": "Nho Quan",
        "admin_name": "Ninh Bình",
        "lat": "20.321651",
        "lng": "105.75081"
    },
    {
        "city": "Nhơn Trạch",
        "admin_name": "Đồng Nai",
        "lat": "10.730787",
        "lng": "106.902047"
    },
    {
        "city": "Như Thanh",
        "admin_name": "Thanh Hóa",
        "lat": "19.634747",
        "lng": "105.559068"
    },
    {
        "city": "Như Xuân",
        "admin_name": "Thanh Hóa",
        "lat": "19.666365",
        "lng": "105.407403"
    },
    {
        "city": "Ninh Bình (thành phố)",
        "admin_name": "Ninh Bình",
        "lat": "20.254542",
        "lng": "105.976485"
    },
    {
        "city": "Ninh Giang",
        "admin_name": "Hải Dương",
        "lat": "20.735029",
        "lng": "106.390594"
    },
    {
        "city": "Ninh Hải",
        "admin_name": "Ninh Thuận",
        "lat": "11.61951",
        "lng": "109.044547"
    },
    {
        "city": "Ninh Hòa",
        "admin_name": "Khánh Hòa",
        "lat": "12.493438",
        "lng": "109.127086"
    },
    {
        "city": "Ninh Kiều",
        "admin_name": "Cần Thơ",
        "lat": "10.031158",
        "lng": "105.767304"
    },
    {
        "city": "Ninh Phước",
        "admin_name": "Ninh Thuận",
        "lat": "11.55156",
        "lng": "108.934492"
    },
    {
        "city": "Ninh Sơn",
        "admin_name": "Ninh Thuận",
        "lat": "11.750713",
        "lng": "108.7949"
    },
    {
        "city": "Nông Cống",
        "admin_name": "Thanh Hóa",
        "lat": "19.626195",
        "lng": "105.649986"
    },
    {
        "city": "Nông Sơn",
        "admin_name": "Quảng Nam",
        "lat": "15.696224",
        "lng": "108.082536"
    },
    {
        "city": "Núi Thành",
        "admin_name": "Quảng Nam",
        "lat": "15.434206",
        "lng": "108.655926"
    },
    {
        "city": "Ô Môn",
        "admin_name": "Cần Thơ",
        "lat": "10.124853",
        "lng": "105.645261"
    },
    {
        "city": "Pác Nặm",
        "admin_name": "Bắc Kạn",
        "lat": "22.61421",
        "lng": "105.66346"
    },
    {
        "city": "Phan Rang – Tháp Chàm",
        "admin_name": "Ninh Thuận",
        "lat": "11.576983",
        "lng": "108.986539"
    },
    {
        "city": "Phan Thiết",
        "admin_name": "Bình Thuận",
        "lat": "10.931025",
        "lng": "108.101463"
    },
    {
        "city": "Phổ Yên",
        "admin_name": "Thái Nguyên",
        "lat": "21.414099",
        "lng": "105.872531"
    },
    {
        "city": "Phong Điền, Cần Thơ",
        "admin_name": "Cần Thơ",
        "lat": "10.02899",
        "lng": "105.645107"
    },
    {
        "city": "Phong Điền, Thừa Thiên Huế",
        "admin_name": "Thừa Thiên Huế",
        "lat": "16.581927",
        "lng": "107.365435"
    },
    {
        "city": "Phong Thổ",
        "admin_name": "Lai Châu",
        "lat": "22.545444",
        "lng": "103.289615"
    },
    {
        "city": "Phú Bình",
        "admin_name": "Thái Nguyên",
        "lat": "21.487369",
        "lng": "105.912247"
    },
    {
        "city": "Phù Cát",
        "admin_name": "Bình Định",
        "lat": "14.03084",
        "lng": "109.104826"
    },
    {
        "city": "Phù Cừ",
        "admin_name": "Hưng Yên",
        "lat": "20.682773",
        "lng": "106.222223"
    },
    {
        "city": "Phú Giáo",
        "admin_name": "Bình Dương",
        "lat": "11.296875",
        "lng": "106.775294"
    },
    {
        "city": "Phú Hòa",
        "admin_name": "Phú Yên",
        "lat": "13.019835",
        "lng": "109.212443"
    },
    {
        "city": "Phú Lộc",
        "admin_name": "Thừa Thiên Huế",
        "lat": "16.280351",
        "lng": "107.858984"
    },
    {
        "city": "Phú Lương",
        "admin_name": "Thái Nguyên",
        "lat": "21.722115",
        "lng": "105.737098"
    },
    {
        "city": "Phủ Lý",
        "admin_name": "Hà Nam",
        "lat": "20.527117",
        "lng": "105.916471"
    },
    {
        "city": "Phú Mỹ",
        "admin_name": "Bà Rịa – Vũng Tàu",
        "lat": "10.588227",
        "lng": "107.058398"
    },
    {
        "city": "Phù Mỹ",
        "admin_name": "Bình Định",
        "lat": "14.175232",
        "lng": "109.052305"
    },
    {
        "city": "Phú Nhuận",
        "admin_name": "Thành phố Hồ Chí Minh",
        "lat": "10.796486",
        "lng": "106.690603"
    },
    {
        "city": "Phú Ninh",
        "admin_name": "Quảng Nam",
        "lat": "15.549128",
        "lng": "108.411221"
    },
    {
        "city": "Phù Ninh",
        "admin_name": "Phú Thọ",
        "lat": "21.46604",
        "lng": "105.307062"
    },
    {
        "city": "Phú Quốc",
        "admin_name": "Kiên Giang",
        "lat": "10.215309",
        "lng": "103.988044"
    },
    {
        "city": "Phú Quý",
        "admin_name": "Bình Thuận",
        "lat": "10.528717",
        "lng": "108.938546"
    },
    {
        "city": "Phú Riềng",
        "admin_name": "Bình Phước",
        "lat": "11.660587",
        "lng": "106.900929"
    },
    {
        "city": "Phú Tân, An Giang",
        "admin_name": "An Giang",
        "lat": "10.666592",
        "lng": "105.288939"
    },
    {
        "city": "Phú Tân, Cà Mau",
        "admin_name": "Cà Mau",
        "lat": "9.179222",
        "lng": "105.145791"
    },
    {
        "city": "Phú Thiện",
        "admin_name": "Gia Lai",
        "lat": "13.527084",
        "lng": "108.316323"
    },
    {
        "city": "Phú Thọ (thị xã)",
        "admin_name": "Phú Thọ",
        "lat": "21.400005",
        "lng": "105.22389"
    },
    {
        "city": "Phú Vang",
        "admin_name": "Thừa Thiên Huế",
        "lat": "16.478165",
        "lng": "107.663709"
    },
    {
        "city": "Phú Xuyên",
        "admin_name": "Hà Nội",
        "lat": "20.713955",
        "lng": "105.918048"
    },
    {
        "city": "Phù Yên",
        "admin_name": "Sơn La",
        "lat": "21.258397",
        "lng": "104.643528"
    },
    {
        "city": "Phúc Thọ",
        "admin_name": "Hà Nội",
        "lat": "21.108357",
        "lng": "105.542311"
    },
    {
        "city": "Phúc Yên",
        "admin_name": "Vĩnh Phúc",
        "lat": "21.233271",
        "lng": "105.70355"
    },
    {
        "city": "Phụng Hiệp",
        "admin_name": "Hậu Giang",
        "lat": "9.815827",
        "lng": "105.71347"
    },
    {
        "city": "Phước Long (thị xã)",
        "admin_name": "Bình Phước",
        "lat": "11.833107",
        "lng": "106.987289"
    },
    {
        "city": "Phước Long (huyện)",
        "admin_name": "Bạc Liêu",
        "lat": "9.436498",
        "lng": "105.463819"
    },
    {
        "city": "Phước Sơn",
        "admin_name": "Quảng Nam",
        "lat": "15.438861",
        "lng": "107.80092"
    },
    {
        "city": "Pleiku",
        "admin_name": "Gia Lai",
        "lat": "13.971182",
        "lng": "108.015135"
    },
    {
        "city": "Quận 1",
        "admin_name": "Thành phố Hồ Chí Minh",
        "lat": "10.7851",
        "lng": "106.700761"
    },
    {
        "city": "Quận 3",
        "admin_name": "Thành phố Hồ Chí Minh",
        "lat": "10.783529",
        "lng": "106.687098"
    },
    {
        "city": "Quận 4",
        "admin_name": "Thành phố Hồ Chí Minh",
        "lat": "10.759243",
        "lng": "106.70489"
    },
    {
        "city": "Quận 5",
        "admin_name": "Thành phố Hồ Chí Minh",
        "lat": "10.756129",
        "lng": "106.670375"
    },
    {
        "city": "Quận 6",
        "admin_name": "Thành phố Hồ Chí Minh",
        "lat": "10.746928",
        "lng": "106.634495"
    },
    {
        "city": "Quận 7",
        "admin_name": "Thành phố Hồ Chí Minh",
        "lat": "10.736573",
        "lng": "106.722432"
    },
    {
        "city": "Quận 8",
        "admin_name": "Thành phố Hồ Chí Minh",
        "lat": "10.740401",
        "lng": "106.665843"
    },
    {
        "city": "Quận 10",
        "admin_name": "Thành phố Hồ Chí Minh",
        "lat": "10.773198",
        "lng": "106.667833"
    },
    {
        "city": "Quận 11",
        "admin_name": "Thành phố Hồ Chí Minh",
        "lat": "10.764208",
        "lng": "106.643282"
    },
    {
        "city": "Quận 12",
        "admin_name": "Thành phố Hồ Chí Minh",
        "lat": "10.867234",
        "lng": "106.65393"
    },
    {
        "city": "Quản Bạ",
        "admin_name": "Hà Giang",
        "lat": "23.063894",
        "lng": "104.959094"
    },
    {
        "city": "Quan Hóa",
        "admin_name": "Thanh Hóa",
        "lat": "20.470147",
        "lng": "104.990018"
    },
    {
        "city": "Quan Sơn",
        "admin_name": "Thanh Hóa",
        "lat": "20.268683",
        "lng": "104.801853"
    },
    {
        "city": "Quang Bình",
        "admin_name": "Hà Giang",
        "lat": "22.404282",
        "lng": "104.685132"
    },
    {
        "city": "Quảng Điền",
        "admin_name": "Thừa Thiên Huế",
        "lat": "16.568616",
        "lng": "107.518154"
    },
    {
        "city": "Quảng Hòa",
        "admin_name": "Cao Bằng",
        "lat": "13.7483384",
        "lng": "100.5066799"
    },
    {
        "city": "Quảng Ngãi (thành phố)",
        "admin_name": "Quảng Ngãi",
        "lat": "15.119004",
        "lng": "108.80956"
    },
    {
        "city": "Quảng Ninh (huyện)",
        "admin_name": "Quảng Bình",
        "lat": "17.332596",
        "lng": "106.686993"
    },
    {
        "city": "Quảng Trạch",
        "admin_name": "Quảng Bình",
        "lat": "17.873336",
        "lng": "106.448386"
    },
    {
        "city": "Quảng Trị (thị xã)",
        "admin_name": "Quảng Trị",
        "lat": "16.754691",
        "lng": "107.189552"
    },
    {
        "city": "Quảng Xương",
        "admin_name": "Thanh Hóa",
        "lat": "19.729637",
        "lng": "105.783697"
    },
    {
        "city": "Quảng Yên",
        "admin_name": "Quảng Ninh",
        "lat": "20.94174",
        "lng": "106.798394"
    },
    {
        "city": "Quế Phong",
        "admin_name": "Nghệ An",
        "lat": "19.612377",
        "lng": "104.913772"
    },
    {
        "city": "Quế Sơn",
        "admin_name": "Quảng Nam",
        "lat": "15.72424",
        "lng": "108.26602"
    },
    {
        "city": "Quế Võ",
        "admin_name": "Bắc Ninh",
        "lat": "21.156296",
        "lng": "106.152604"
    },
    {
        "city": "Quốc Oai",
        "admin_name": "Hà Nội",
        "lat": "20.990187",
        "lng": "105.640876"
    },
    {
        "city": "Quỳ Châu",
        "admin_name": "Nghệ An",
        "lat": "19.594294",
        "lng": "105.047202"
    },
    {
        "city": "Quỳ Hợp",
        "admin_name": "Nghệ An",
        "lat": "19.326363",
        "lng": "105.182538"
    },
    {
        "city": "Quy Nhơn",
        "admin_name": "Bình Định",
        "lat": "13.7704",
        "lng": "109.233"
    },
    {
        "city": "Quỳnh Lưu",
        "admin_name": "Nghệ An",
        "lat": "19.144334",
        "lng": "105.670141"
    },
    {
        "city": "Quỳnh Nhai",
        "admin_name": "Sơn La",
        "lat": "21.842349",
        "lng": "103.569902"
    },
    {
        "city": "Quỳnh Phụ",
        "admin_name": "Thái Bình",
        "lat": "20.651194",
        "lng": "106.348734"
    },
    {
        "city": "Rạch Giá",
        "admin_name": "Kiên Giang",
        "lat": "10.01071",
        "lng": "105.083262"
    },
    {
        "city": "Sa Đéc",
        "admin_name": "Đồng Tháp",
        "lat": "10.294372",
        "lng": "105.758815"
    },
    {
        "city": "Sa Pa",
        "admin_name": "Lào Cai",
        "lat": "22.335967",
        "lng": "103.842657"
    },
    {
        "city": "Sa Thầy",
        "admin_name": "Kon Tum",
        "lat": "14.410564",
        "lng": "107.793315"
    },
    {
        "city": "Sầm Sơn",
        "admin_name": "Thanh Hóa",
        "lat": "19.737308",
        "lng": "105.8933"
    },
    {
        "city": "Si Ma Cai",
        "admin_name": "Lào Cai",
        "lat": "22.69185",
        "lng": "104.274066"
    },
    {
        "city": "Sìn Hồ",
        "admin_name": "Lai Châu",
        "lat": "22.359508",
        "lng": "103.250733"
    },
    {
        "city": "Sóc Sơn",
        "admin_name": "Hà Nội",
        "lat": "21.257549",
        "lng": "105.85268"
    },
    {
        "city": "Sóc Trăng (thành phố)",
        "admin_name": "Sóc Trăng",
        "lat": "9.602672",
        "lng": "105.973321"
    },
    {
        "city": "Sơn Động",
        "admin_name": "Bắc Giang",
        "lat": "21.344112",
        "lng": "106.89549"
    },
    {
        "city": "Sơn Dương",
        "admin_name": "Tuyên Quang",
        "lat": "21.698465",
        "lng": "105.391864"
    },
    {
        "city": "Sơn Hà",
        "admin_name": "Quảng Ngãi",
        "lat": "15.012737",
        "lng": "108.51323"
    },
    {
        "city": "Sơn Hòa",
        "admin_name": "Phú Yên",
        "lat": "13.103353",
        "lng": "108.969896"
    },
    {
        "city": "Sơn La (thành phố)",
        "admin_name": "Sơn La",
        "lat": "21.327405",
        "lng": "103.91517"
    },
    {
        "city": "Sơn Tây (thị xã)",
        "admin_name": "Hà Nội",
        "lat": "21.140919",
        "lng": "105.50603"
    },
    {
        "city": "Sơn Tây (huyện)",
        "admin_name": "Quảng Ngãi",
        "lat": "15.014067",
        "lng": "108.396425"
    },
    {
        "city": "Sơn Tịnh",
        "admin_name": "Quảng Ngãi",
        "lat": "15.158716",
        "lng": "108.793287"
    },
    {
        "city": "Sơn Trà (quận)",
        "admin_name": "Đà Nẵng",
        "lat": "16.066908",
        "lng": "108.246161"
    },
    {
        "city": "Sông Cầu (thị xã)",
        "admin_name": "Phú Yên",
        "lat": "13.459379",
        "lng": "109.220839"
    },
    {
        "city": "Sông Công (thành phố)",
        "admin_name": "Thái Nguyên",
        "lat": "21.458667",
        "lng": "105.86453"
    },
    {
        "city": "Sông Hinh (huyện)",
        "admin_name": "Phú Yên",
        "lat": "12.97587",
        "lng": "108.902383"
    },
    {
        "city": "Sông Lô (huyện)",
        "admin_name": "Vĩnh Phúc",
        "lat": "21.437018",
        "lng": "105.381033"
    },
    {
        "city": "Sông Mã (huyện)",
        "admin_name": "Sơn La",
        "lat": "21.048577",
        "lng": "103.754471"
    },
    {
        "city": "Sốp Cộp",
        "admin_name": "Sơn La",
        "lat": "20.938815",
        "lng": "103.597126"
    },
    {
        "city": "Tam Bình",
        "admin_name": "Vĩnh Long",
        "lat": "10.048713",
        "lng": "105.999429"
    },
    {
        "city": "Tam Đảo (huyện)",
        "admin_name": "Vĩnh Phúc",
        "lat": "21.4549825",
        "lng": "105.64329950000001"
    },
    {
        "city": "Tam Điệp",
        "admin_name": "Ninh Bình",
        "lat": "20.156563",
        "lng": "105.918035"
    },
    {
        "city": "Tam Dương",
        "admin_name": "Vĩnh Phúc",
        "lat": "21.360498",
        "lng": "105.551708"
    },
    {
        "city": "Tam Đường",
        "admin_name": "Lai Châu",
        "lat": "22.322072",
        "lng": "103.6227"
    },
    {
        "city": "Tam Kỳ",
        "admin_name": "Quảng Nam",
        "lat": "15.567374",
        "lng": "108.484213"
    },
    {
        "city": "Tam Nông, Đồng Tháp",
        "admin_name": "Đồng Tháp",
        "lat": "10.543207",
        "lng": "105.812784"
    },
    {
        "city": "Tam Nông, Phú Thọ",
        "admin_name": "Phú Thọ",
        "lat": "21.402545",
        "lng": "105.225912"
    },
    {
        "city": "Tân An",
        "admin_name": "Long An",
        "lat": "10.535965",
        "lng": "106.404754"
    },
    {
        "city": "Tân Biên",
        "admin_name": "Tây Ninh",
        "lat": "11.545546",
        "lng": "106.009823"
    },
    {
        "city": "Tân Bình",
        "admin_name": "Thành phố Hồ Chí Minh",
        "lat": "10.794525",
        "lng": "106.659"
    },
    {
        "city": "Tân Châu (thị xã)",
        "admin_name": "An Giang",
        "lat": "10.799687",
        "lng": "105.243132"
    },
    {
        "city": "Tân Châu (huyện)",
        "admin_name": "Tây Ninh",
        "lat": "11.554591",
        "lng": "106.163193"
    },
    {
        "city": "Tân Hiệp",
        "admin_name": "Kiên Giang",
        "lat": "10.107999",
        "lng": "105.286818"
    },
    {
        "city": "Tân Hồng",
        "admin_name": "Đồng Tháp",
        "lat": "10.886159",
        "lng": "105.470206"
    },
    {
        "city": "Tân Hưng",
        "admin_name": "Long An",
        "lat": "10.835152",
        "lng": "105.665916"
    },
    {
        "city": "Tân Kỳ",
        "admin_name": "Nghệ An",
        "lat": "19.04882",
        "lng": "105.263102"
    },
    {
        "city": "Tân Lạc",
        "admin_name": "Hòa Bình",
        "lat": "20.609718",
        "lng": "105.269306"
    },
    {
        "city": "Tân Phú (quận)",
        "admin_name": "Thành phố Hồ Chí Minh",
        "lat": "10.725118",
        "lng": "106.728251"
    },
    {
        "city": "Tân Phú (huyện)",
        "admin_name": "Đồng Nai",
        "lat": "11.449316",
        "lng": "106.86742"
    },
    {
        "city": "Tân Phú Đông",
        "admin_name": "Tiền Giang",
        "lat": "10.265867",
        "lng": "106.656504"
    },
    {
        "city": "Tân Phước",
        "admin_name": "Tiền Giang",
        "lat": "10.464833",
        "lng": "106.195318"
    },
    {
        "city": "Tân Sơn",
        "admin_name": "Phú Thọ",
        "lat": "21.152583",
        "lng": "105.201607"
    },
    {
        "city": "Tân Thạnh",
        "admin_name": "Long An",
        "lat": "10.603778",
        "lng": "106.049625"
    },
    {
        "city": "Tân Trụ",
        "admin_name": "Long An",
        "lat": "10.515439",
        "lng": "106.510398"
    },
    {
        "city": "Tân Uyên (thành phố)",
        "admin_name": "Bình Dương",
        "lat": "11.055658",
        "lng": "106.763872"
    },
    {
        "city": "Tân Uyên (huyện)",
        "admin_name": "Lai Châu",
        "lat": "22.174109",
        "lng": "103.754733"
    },
    {
        "city": "Tân Yên",
        "admin_name": "Bắc Giang",
        "lat": "21.351952",
        "lng": "106.167561"
    },
    {
        "city": "Tánh Linh",
        "admin_name": "Bình Thuận",
        "lat": "11.168631",
        "lng": "107.678212"
    },
    {
        "city": "Tây Giang",
        "admin_name": "Quảng Nam",
        "lat": "15.883846",
        "lng": "107.447371"
    },
    {
        "city": "Tây Hồ (quận)",
        "admin_name": "Hà Nội",
        "lat": "21.079042",
        "lng": "105.815432"
    },
    {
        "city": "Tây Hòa",
        "admin_name": "Phú Yên",
        "lat": "12.98759",
        "lng": "109.210512"
    },
    {
        "city": "Tây Ninh (thành phố)",
        "admin_name": "Tây Ninh",
        "lat": "11.313829",
        "lng": "106.096477"
    },
    {
        "city": "Tây Sơn",
        "admin_name": "Bình Định",
        "lat": "13.911347",
        "lng": "108.809273"
    },
    {
        "city": "Thạch An",
        "admin_name": "Cao Bằng",
        "lat": "22.439828",
        "lng": "106.491814"
    },
    {
        "city": "Thạch Hà",
        "admin_name": "Hà Tĩnh",
        "lat": "18.384556",
        "lng": "105.888584"
    },
    {
        "city": "Thạch Thành",
        "admin_name": "Thanh Hóa",
        "lat": "20.179685",
        "lng": "105.638982"
    },
    {
        "city": "Thạch Thất",
        "admin_name": "Hà Nội",
        "lat": "21.034324",
        "lng": "105.592947"
    },
    {
        "city": "Thái Bình (thành phố)",
        "admin_name": "Thái Bình",
        "lat": "20.449288",
        "lng": "106.342489"
    },
    {
        "city": "Thái Hòa",
        "admin_name": "Nghệ An",
        "lat": "19.314081",
        "lng": "105.428038"
    },
    {
        "city": "Thái Nguyên (thành phố)",
        "admin_name": "Thái Nguyên",
        "lat": "21.492646",
        "lng": "105.880544"
    },
    {
        "city": "Thái Thụy",
        "admin_name": "Thái Bình",
        "lat": "20.540214",
        "lng": "106.506698"
    },
    {
        "city": "Than Uyên",
        "admin_name": "Lai Châu",
        "lat": "21.955578",
        "lng": "103.882873"
    },
    {
        "city": "Thăng Bình",
        "admin_name": "Quảng Nam",
        "lat": "15.689758",
        "lng": "108.337108"
    },
    {
        "city": "Thanh Ba",
        "admin_name": "Phú Thọ",
        "lat": "21.499155",
        "lng": "105.140679"
    },
    {
        "city": "Thanh Bình",
        "admin_name": "Đồng Tháp",
        "lat": "10.561903",
        "lng": "105.484114"
    },
    {
        "city": "Thanh Chương",
        "admin_name": "Nghệ An",
        "lat": "18.782349",
        "lng": "105.337401"
    },
    {
        "city": "Thanh Hà",
        "admin_name": "Hải Dương",
        "lat": "20.897495",
        "lng": "106.427447"
    },
    {
        "city": "Thanh Hóa (thành phố)",
        "admin_name": "Thanh Hóa",
        "lat": "19.811719",
        "lng": "105.77457"
    },
    {
        "city": "Thạnh Hóa",
        "admin_name": "Long An",
        "lat": "10.656371",
        "lng": "106.180559"
    },
    {
        "city": "Thanh Khê",
        "admin_name": "Đà Nẵng",
        "lat": "16.064811",
        "lng": "108.187597"
    },
    {
        "city": "Thanh Liêm",
        "admin_name": "Hà Nam",
        "lat": "20.473792",
        "lng": "105.925174"
    },
    {
        "city": "Thanh Miện",
        "admin_name": "Hải Dương",
        "lat": "20.786938",
        "lng": "106.239712"
    },
    {
        "city": "Thanh Oai",
        "admin_name": "Hà Nội",
        "lat": "20.866586",
        "lng": "105.76796"
    },
    {
        "city": "Thạnh Phú",
        "admin_name": "Bến Tre",
        "lat": "9.951049",
        "lng": "106.518499"
    },
    {
        "city": "Thanh Sơn",
        "admin_name": "Phú Thọ",
        "lat": "21.229353",
        "lng": "104.985605"
    },
    {
        "city": "Thanh Thủy",
        "admin_name": "Phú Thọ",
        "lat": "21.175482",
        "lng": "105.283882"
    },
    {
        "city": "Thanh Trì",
        "admin_name": "Hà Nội",
        "lat": "20.993676",
        "lng": "105.891515"
    },
    {
        "city": "Thạnh Trị",
        "admin_name": "Sóc Trăng",
        "lat": "9.43953",
        "lng": "105.727288"
    },
    {
        "city": "Thanh Xuân",
        "admin_name": "Hà Nội",
        "lat": "21.222379",
        "lng": "105.767194"
    },
    {
        "city": "Tháp Mười",
        "admin_name": "Đồng Tháp",
        "lat": "10.543207",
        "lng": "105.812784"
    },
    {
        "city": "Thiệu Hóa",
        "admin_name": "Thanh Hóa",
        "lat": "19.886285",
        "lng": "105.680061"
    },
    {
        "city": "Thọ Xuân",
        "admin_name": "Thanh Hóa",
        "lat": "19.931471",
        "lng": "105.520107"
    },
    {
        "city": "Thoại Sơn",
        "admin_name": "An Giang",
        "lat": "10.313434",
        "lng": "105.295928"
    },
    {
        "city": "Thới Bình",
        "admin_name": "Cà Mau",
        "lat": "9.348481",
        "lng": "105.092477"
    },
    {
        "city": "Thới Lai",
        "admin_name": "Cần Thơ",
        "lat": "10.066253",
        "lng": "105.559451"
    },
    {
        "city": "Thống Nhất",
        "admin_name": "Đồng Nai",
        "lat": "11.024525",
        "lng": "107.165467"
    },
    {
        "city": "Thốt Nốt",
        "admin_name": "Cần Thơ",
        "lat": "10.268442",
        "lng": "105.528398"
    },
    {
        "city": "Thủ Dầu Một",
        "admin_name": "Bình Dương",
        "lat": "10.980844",
        "lng": "106.653748"
    },
    {
        "city": "Thủ Đức",
        "admin_name": "Thành phố Hồ Chí Minh",
        "lat": "10.842172",
        "lng": "106.765021"
    },
    {
        "city": "Thủ Thừa",
        "admin_name": "Long An",
        "lat": "10.601153",
        "lng": "106.401856"
    },
    {
        "city": "Thuận An",
        "admin_name": "Bình Dương",
        "lat": "10.903511",
        "lng": "106.699078"
    },
    {
        "city": "Thuận Bắc",
        "admin_name": "Ninh Thuận",
        "lat": "11.708268",
        "lng": "109.051943"
    },
    {
        "city": "Thuận Châu",
        "admin_name": "Sơn La",
        "lat": "21.434823",
        "lng": "103.69322"
    },
    {
        "city": "Thuận Nam",
        "admin_name": "Ninh Thuận",
        "lat": "11.451048",
        "lng": "108.914939"
    },
    {
        "city": "Thuận Thành",
        "admin_name": "Bắc Ninh",
        "lat": "21.039008",
        "lng": "106.058088"
    },
    {
        "city": "Thường Tín",
        "admin_name": "Hà Nội",
        "lat": "20.873849",
        "lng": "105.862741"
    },
    {
        "city": "Thường Xuân",
        "admin_name": "Thanh Hóa",
        "lat": "19.903584",
        "lng": "105.346507"
    },
    {
        "city": "Thủy Nguyên",
        "admin_name": "Hải Phòng",
        "lat": "20.938706",
        "lng": "106.666882"
    },
    {
        "city": "Tiên Du",
        "admin_name": "Bắc Ninh",
        "lat": "21.107083",
        "lng": "106.011273"
    },
    {
        "city": "Tiền Hải",
        "admin_name": "Thái Bình",
        "lat": "20.405707",
        "lng": "106.503174"
    },
    {
        "city": "Tiên Lãng",
        "admin_name": "Hải Phòng",
        "lat": "20.723208",
        "lng": "106.551176"
    },
    {
        "city": "Tiên Lữ",
        "admin_name": "Hưng Yên",
        "lat": "20.673832",
        "lng": "106.109868"
    },
    {
        "city": "Tiên Phước",
        "admin_name": "Quảng Nam",
        "lat": "15.499254",
        "lng": "108.322251"
    },
    {
        "city": "Tiên Yên",
        "admin_name": "Quảng Ninh",
        "lat": "21.331648",
        "lng": "107.400361"
    },
    {
        "city": "Tiểu Cần",
        "admin_name": "Trà Vinh",
        "lat": "9.817671",
        "lng": "106.192301"
    },
    {
        "city": "Tịnh Biên",
        "admin_name": "An Giang",
        "lat": "10.604666",
        "lng": "104.949289"
    },
    {
        "city": "Trà Bồng",
        "admin_name": "Quảng Ngãi",
        "lat": "15.251545",
        "lng": "108.520406"
    },
    {
        "city": "Trà Cú",
        "admin_name": "Trà Vinh",
        "lat": "9.686454",
        "lng": "106.259704"
    },
    {
        "city": "Trà Ôn",
        "admin_name": "Vĩnh Long",
        "lat": "9.965542",
        "lng": "105.922314"
    },
    {
        "city": "Trà Vinh (thành phố)",
        "admin_name": "Trà Vinh",
        "lat": "9.931664",
        "lng": "106.333639"
    },
    {
        "city": "Trạm Tấu",
        "admin_name": "Yên Bái",
        "lat": "21.46909",
        "lng": "104.378089"
    },
    {
        "city": "Trần Đề",
        "admin_name": "Sóc Trăng",
        "lat": "9.522735",
        "lng": "106.197195"
    },
    {
        "city": "Trần Văn Thời (huyện)",
        "admin_name": "Cà Mau",
        "lat": "9.072792",
        "lng": "104.966663"
    },
    {
        "city": "Trấn Yên",
        "admin_name": "Yên Bái",
        "lat": "21.664472",
        "lng": "104.795598"
    },
    {
        "city": "Trảng Bàng",
        "admin_name": "Tây Ninh",
        "lat": "11.033233",
        "lng": "106.354825"
    },
    {
        "city": "Trảng Bom",
        "admin_name": "Đồng Nai",
        "lat": "10.959106",
        "lng": "107.011116"
    },
    {
        "city": "Tràng Định",
        "admin_name": "Lạng Sơn",
        "lat": "22.314047",
        "lng": "106.431038"
    },
    {
        "city": "Tri Tôn",
        "admin_name": "An Giang",
        "lat": "10.420524",
        "lng": "105.001021"
    },
    {
        "city": "Triệu Phong",
        "admin_name": "Quảng Trị",
        "lat": "16.797672",
        "lng": "107.192661"
    },
    {
        "city": "Triệu Sơn",
        "admin_name": "Thanh Hóa",
        "lat": "19.821704",
        "lng": "105.591823"
    },
    {
        "city": "Trực Ninh",
        "admin_name": "Nam Định",
        "lat": "20.240171",
        "lng": "106.23638"
    },
    {
        "city": "Trùng Khánh (huyện)",
        "admin_name": "Cao Bằng",
        "lat": "22.836554",
        "lng": "106.526194"
    },
    {
        "city": "Trường Sa (huyện)",
        "admin_name": "Khánh Hòa",
        "lat": "9.964748",
        "lng": "106.470348"
    },
    {
        "city": "Tứ Kỳ",
        "admin_name": "Hải Dương",
        "lat": "20.821489",
        "lng": "106.398348"
    },
    {
        "city": "Tu Mơ Rông",
        "admin_name": "Kon Tum",
        "lat": "14.821361",
        "lng": "107.94607"
    },
    {
        "city": "Tư Nghĩa",
        "admin_name": "Quảng Ngãi",
        "lat": "15.092638",
        "lng": "108.789805"
    },
    {
        "city": "Từ Sơn",
        "admin_name": "Bắc Ninh",
        "lat": "21.113309",
        "lng": "105.956861"
    },
    {
        "city": "Tủa Chùa",
        "admin_name": "Điện Biên",
        "lat": "21.848914",
        "lng": "103.353232"
    },
    {
        "city": "Tuần Giáo",
        "admin_name": "Điện Biên",
        "lat": "21.588685",
        "lng": "103.420962"
    },
    {
        "city": "Tương Dương (huyện)",
        "admin_name": "Nghệ An",
        "lat": "19.202424",
        "lng": "104.642646"
    },
    {
        "city": "Tuy An",
        "admin_name": "Phú Yên",
        "lat": "13.281857",
        "lng": "109.249033"
    },
    {
        "city": "Tuy Đức",
        "admin_name": "Đắk Nông",
        "lat": "12.144269",
        "lng": "107.449355"
    },
    {
        "city": "Tuy Hòa",
        "admin_name": "Phú Yên",
        "lat": "13.087723",
        "lng": "109.299358"
    },
    {
        "city": "Tuy Phong",
        "admin_name": "Bình Thuận",
        "lat": "11.219264",
        "lng": "108.673946"
    },
    {
        "city": "Tuy Phước",
        "admin_name": "Bình Định",
        "lat": "13.827084",
        "lng": "109.167839"
    },
    {
        "city": "Tuyên Hóa",
        "admin_name": "Quảng Bình",
        "lat": "17.955875",
        "lng": "105.896834"
    },
    {
        "city": "Tuyên Quang (thành phố)",
        "admin_name": "Tuyên Quang",
        "lat": "21.78797",
        "lng": "105.217387"
    },
    {
        "city": "U Minh Thượng",
        "admin_name": "Kiên Giang",
        "lat": "9.615974",
        "lng": "105.150464"
    },
    {
        "city": "U Minh",
        "admin_name": "Cà Mau",
        "lat": "9.40957",
        "lng": "104.96885"
    },
    {
        "city": "Ứng Hòa",
        "admin_name": "Hà Nội",
        "lat": "20.730826",
        "lng": "105.776303"
    },
    {
        "city": "Uông Bí",
        "admin_name": "Quảng Ninh",
        "lat": "21.041469",
        "lng": "106.774026"
    },
    {
        "city": "Văn Bàn",
        "admin_name": "Lào Cai",
        "lat": "22.03695",
        "lng": "104.144169"
    },
    {
        "city": "Vân Canh",
        "admin_name": "Bình Định",
        "lat": "13.620914",
        "lng": "108.998384"
    },
    {
        "city": "Văn Chấn",
        "admin_name": "Yên Bái",
        "lat": "21.536491",
        "lng": "104.502965"
    },
    {
        "city": "Vân Đồn",
        "admin_name": "Quảng Ninh",
        "lat": "20.987341",
        "lng": "107.492111"
    },
    {
        "city": "Văn Giang",
        "admin_name": "Hưng Yên",
        "lat": "20.944392",
        "lng": "105.929604"
    },
    {
        "city": "Vân Hồ",
        "admin_name": "Sơn La",
        "lat": "20.79584",
        "lng": "104.774967"
    },
    {
        "city": "Văn Lâm",
        "admin_name": "Hưng Yên",
        "lat": "20.976565",
        "lng": "106.004508"
    },
    {
        "city": "Văn Lãng",
        "admin_name": "Lạng Sơn",
        "lat": "22.076175",
        "lng": "106.586051"
    },
    {
        "city": "Vạn Ninh",
        "admin_name": "Khánh Hòa",
        "lat": "12.71899",
        "lng": "109.257497"
    },
    {
        "city": "Văn Quan",
        "admin_name": "Lạng Sơn",
        "lat": "21.865264",
        "lng": "106.540263"
    },
    {
        "city": "Văn Yên",
        "admin_name": "Yên Bái",
        "lat": "21.842215",
        "lng": "104.674275"
    },
    {
        "city": "Vị Thanh",
        "admin_name": "Hậu Giang",
        "lat": "9.783223",
        "lng": "105.467035"
    },
    {
        "city": "Vị Thủy",
        "admin_name": "Hậu Giang",
        "lat": "9.777783",
        "lng": "105.527674"
    },
    {
        "city": "Vị Xuyên",
        "admin_name": "Hà Giang",
        "lat": "22.667884",
        "lng": "104.981814"
    },
    {
        "city": "Việt Trì",
        "admin_name": "Phú Thọ",
        "lat": "21.324229",
        "lng": "105.388139"
    },
    {
        "city": "Việt Yên",
        "admin_name": "Bắc Giang",
        "lat": "21.242379",
        "lng": "106.05281"
    },
    {
        "city": "Vĩnh Bảo",
        "admin_name": "Hải Phòng",
        "lat": "20.690035",
        "lng": "106.481283"
    },
    {
        "city": "Vĩnh Châu",
        "admin_name": "Sóc Trăng",
        "lat": "9.323856",
        "lng": "105.980572"
    },
    {
        "city": "Vĩnh Cửu",
        "admin_name": "Đồng Nai",
        "lat": "11.045058",
        "lng": "106.926402"
    },
    {
        "city": "Vĩnh Hưng",
        "admin_name": "Long An",
        "lat": "10.894636",
        "lng": "105.787214"
    },
    {
        "city": "Vĩnh Linh",
        "admin_name": "Quảng Trị",
        "lat": "17.041842",
        "lng": "107.030796"
    },
    {
        "city": "Vĩnh Lộc",
        "admin_name": "Thanh Hóa",
        "lat": "20.054587",
        "lng": "105.615913"
    },
    {
        "city": "Vĩnh Lợi",
        "admin_name": "Bạc Liêu",
        "lat": "9.334534",
        "lng": "105.696481"
    },
    {
        "city": "Vĩnh Long (thành phố)",
        "admin_name": "Vĩnh Long",
        "lat": "10.254428",
        "lng": "105.966966"
    },
    {
        "city": "Vĩnh Thạnh, Cần Thơ",
        "admin_name": "Cần Thơ",
        "lat": "10.592152",
        "lng": "106.789672"
    },
    {
        "city": "Vĩnh Thạnh, Bình Định",
        "admin_name": "Bình Định",
        "lat": "14.108902",
        "lng": "108.78404"
    },
    {
        "city": "Vĩnh Thuận",
        "admin_name": "Kiên Giang",
        "lat": "9.508384",
        "lng": "105.257347"
    },
    {
        "city": "Vĩnh Tường",
        "admin_name": "Vĩnh Phúc",
        "lat": "21.221485",
        "lng": "105.502211"
    },
    {
        "city": "Vĩnh Yên",
        "admin_name": "Vĩnh Phúc",
        "lat": "21.308848",
        "lng": "105.591632"
    },
    {
        "city": "Vinh",
        "admin_name": "Nghệ An",
        "lat": "18.669245",
        "lng": "105.688159"
    },
    {
        "city": "Võ Nhai",
        "admin_name": "Thái Nguyên",
        "lat": "21.71353",
        "lng": "105.908819"
    },
    {
        "city": "Vụ Bản",
        "admin_name": "Nam Định",
        "lat": "20.367841",
        "lng": "106.104849"
    },
    {
        "city": "Vũ Quang",
        "admin_name": "Hà Tĩnh",
        "lat": "18.382425",
        "lng": "105.504089"
    },
    {
        "city": "Vũ Thư",
        "admin_name": "Thái Bình",
        "lat": "20.433936",
        "lng": "106.289665"
    },
    {
        "city": "Vũng Liêm",
        "admin_name": "Vĩnh Long",
        "lat": "10.09643",
        "lng": "106.187165"
    },
    {
        "city": "Vũng Tàu",
        "admin_name": "Bà Rịa – Vũng Tàu",
        "lat": "10.348649",
        "lng": "107.076503"
    },
    {
        "city": "Xín Mần",
        "admin_name": "Hà Giang",
        "lat": "22.709518",
        "lng": "104.513939"
    },
    {
        "city": "Xuân Lộc",
        "admin_name": "Đồng Nai",
        "lat": "10.914015",
        "lng": "107.402644"
    },
    {
        "city": "Xuân Trường",
        "admin_name": "Nam Định",
        "lat": "20.291873",
        "lng": "106.334345"
    },
    {
        "city": "Xuyên Mộc",
        "admin_name": "Bà Rịa – Vũng Tàu",
        "lat": "10.56135",
        "lng": "107.42357"
    },
    {
        "city": "Ý Yên",
        "admin_name": "Nam Định",
        "lat": "20.317647",
        "lng": "106.026279"
    },
    {
        "city": "Yên Bái (thành phố)",
        "admin_name": "Yên Bái",
        "lat": "21.69611",
        "lng": "104.875239"
    },
    {
        "city": "Yên Bình",
        "admin_name": "Yên Bái",
        "lat": "21.728022",
        "lng": "104.958661"
    },
    {
        "city": "Yên Châu",
        "admin_name": "Sơn La",
        "lat": "21.046418",
        "lng": "104.297494"
    },
    {
        "city": "Yên Định",
        "admin_name": "Thanh Hóa",
        "lat": "20.011112",
        "lng": "105.594807"
    },
    {
        "city": "Yên Dũng",
        "admin_name": "Bắc Giang",
        "lat": "21.229039",
        "lng": "106.257947"
    },
    {
        "city": "Yên Khánh",
        "admin_name": "Ninh Bình",
        "lat": "20.188334",
        "lng": "106.083771"
    },
    {
        "city": "Yên Lạc",
        "admin_name": "Vĩnh Phúc",
        "lat": "21.219052",
        "lng": "105.579474"
    },
    {
        "city": "Yên Lập",
        "admin_name": "Phú Thọ",
        "lat": "21.349719",
        "lng": "105.057873"
    },
    {
        "city": "Yên Minh",
        "admin_name": "Hà Giang",
        "lat": "23.117205",
        "lng": "105.149123"
    },
    {
        "city": "Yên Mô",
        "admin_name": "Ninh Bình",
        "lat": "20.136921",
        "lng": "106.004471"
    },
    {
        "city": "Yên Mỹ",
        "admin_name": "Hưng Yên",
        "lat": "20.880886",
        "lng": "106.031712"
    },
    {
        "city": "Yên Phong",
        "admin_name": "Bắc Ninh",
        "lat": "21.191479",
        "lng": "105.957789"
    },
    {
        "city": "Yên Sơn",
        "admin_name": "Tuyên Quang",
        "lat": "21.876697",
        "lng": "105.139686"
    },
    {
        "city": "Yên Thành",
        "admin_name": "Nghệ An",
        "lat": "18.998557",
        "lng": "105.471158"
    },
    {
        "city": "Yên Thế",
        "admin_name": "Bắc Giang",
        "lat": "21.526288",
        "lng": "106.107183"
    },
    {
        "city": "Yên Thủy",
        "admin_name": "Hòa Bình",
        "lat": "20.410184",
        "lng": "105.617816"
    }
]

const updatedData = citiesData.map(item => ({
    ...item,
    city: item.city.replace(/"/g, ''),
    lat: item.lat.replace(/"/g, ''),
    lng: item.lng.replace(/"/g, ''),
    admin_name: item.admin_name.replace(/"/g, '')
}));

console.log(updatedData);
module.exports = updatedData;