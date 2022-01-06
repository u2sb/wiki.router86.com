(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{466:function(t,a,s){"use strict";s.r(a);var v=s(15),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("简单说明一下怎么设置旁路由，发挥单网口设备的余热。")]),t._v(" "),s("h2",{attrs:{id:"设备简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设备简介"}},[t._v("#")]),t._v(" 设备简介")]),t._v(" "),s("p",[t._v("这次演示用的旁路由为 OpenWrt 单网口设备，主路由不方便介绍。")]),t._v(" "),s("h2",{attrs:{id:"旁路由设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#旁路由设置"}},[t._v("#")]),t._v(" 旁路由设置")]),t._v(" "),s("p",[t._v("首先正常烧录镜像，不会的可以看"),s("RouterLink",{attrs:{to:"/pages/a8d087/"}},[t._v("教程")]),t._v("，然后正常登录软路由。")],1),t._v(" "),s("p",[t._v("设置 LAN 口，修改 LAN 口 IP 为主路由网段下的 IP，修改网关为主路由。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/item/5f70b103160a154a67d52ec3.png",alt:""}})]),t._v(" "),s("p",[t._v("点击保存，先不要点应用。")]),t._v(" "),s("p",[t._v("然后在  "),s("code",[t._v("物理设置")]),t._v("  选项卡中取消桥接，直接选择 LAN 网卡，然后保存。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/item/5f70b103160a154a67d52ec1.png",alt:""}})]),t._v(" "),s("p",[t._v("修改防火墙设置，添加")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("iptables -t nat -I POSTROUTING -o eth0 -j MASQUERADE\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"/img/item/5f70b134160a154a67d53f05.png",alt:""}})]),t._v(" "),s("p",[t._v("保存，然后点击右上角的未保存的配置，保存并应用。")]),t._v(" "),s("p",[t._v("如果不想要自己手动设置防火墙规则，可以使用  "),s("code",[t._v("防火墙")]),t._v("  ->  "),s("code",[t._v("通信规则")]),t._v("  里面的 SNAT 功能，设置如下图所示")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/item/5fab9f1b1cd1bbb86bf9000e.png",alt:""}})]),t._v(" "),s("p",[t._v("此时将软路由插到主路由上，并且使用刚才设置的软路由 IP，应该可以正常访问到软路由。")]),t._v(" "),s("h2",{attrs:{id:"如何使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[t._v("#")]),t._v(" 如何使用")]),t._v(" "),s("p",[t._v("上面旁路由已经设置完成了，但还是不能生效，我们还需要其他的设置才能使用，下面给出几种方法，任选一种即可。")]),t._v(" "),s("h3",{attrs:{id:"手动指定网关和-dns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手动指定网关和-dns"}},[t._v("#")]),t._v(" 手动指定网关和 DNS")]),t._v(" "),s("p",[t._v("这种方法适用于临时使用，或者是你不想影响其他人正常上网，是最简单，也是最麻烦的一直方法。")]),t._v(" "),s("p",[t._v("首先关闭旁路由的 DHCP")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/item/5f70b134160a154a67d53f07.png",alt:""}})]),t._v(" "),s("p",[t._v("然后在需要设置的电脑上，打开控制面板里的网络连接，然后手动设置 IP 和 DNS，其中网关需要设置为旁路由的 IP，这样运行在旁路由上的服务就可以在这台电脑上使用了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/item/5f70b16f160a154a67d55178.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"使用主路由的-dhcp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用主路由的-dhcp"}},[t._v("#")]),t._v(" 使用主路由的 DHCP")]),t._v(" "),s("p",[t._v("这是最常用的一种方法，需要关闭旁路由的 DHCP，并修改主路由的 DHCP 选项，设置默认网关和 DNS 服务器为旁路由。")]),t._v(" "),s("p",[t._v("我这里主路由不支持修改 DHCP 默认网关，就不放图了，具体可以百度 xxx 路由器修改 DHCP 网关。")]),t._v(" "),s("p",[t._v("OpenWrt 的修改方法可以参考下面。")]),t._v(" "),s("h3",{attrs:{id:"使用旁路由的-dhcp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用旁路由的-dhcp"}},[t._v("#")]),t._v(" 使用旁路由的 DHCP")]),t._v(" "),s("p",[t._v("开启旁路由 DHCP，并且按图设置，指定网关和 DNS 为旁路由，并关闭主路由的 DHCP。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/item/5f70b16f160a154a67d5517d.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"补充"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[t._v("#")]),t._v(" 补充")]),t._v(" "),s("p",[t._v("经过以上设置之后，在旁路由搞去广告或者其他骚东西，就可以对下面的设备生效了，如果是长期使用，建议由旁路由接管 DHCP，为主路由分担压力。")]),t._v(" "),s("h3",{attrs:{id:"端口映射"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#端口映射"}},[t._v("#")]),t._v(" 端口映射")]),t._v(" "),s("p",[t._v("如果需要在主路由上，把端口映射到旁路由下的设备上，需要在主路由上做 ARP 绑定，具体设置方法和注意事项，请自行百度。")]),t._v(" "),s("hr")])}),[],!1,null,null,null);a.default=_.exports}}]);