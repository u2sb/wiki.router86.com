(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{692:function(s,t,n){"use strict";n.r(t);var a=n(28),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("本文简单介绍在 GitHub Actions 编译 OpenWRT。")]),s._v(" "),n("h2",{attrs:{id:"准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[s._v("#")]),s._v(" 准备")]),s._v(" "),n("ul",[n("li",[s._v("需要有 GitHub 账户，而且要有一条能快速连接国际互联网的网络通道。")]),s._v(" "),n("li",[s._v("GitHub Actions 模板，可以使用 "),n("a",{attrs:{href:"https://github.com/P3TERX/Actions-OpenWrt",target:"_blank",rel:"noopener noreferrer"}},[s._v("Actions-OpenWrt"),n("OutboundLink")],1),s._v("，但是更推荐使用"),n("a",{attrs:{href:"https://github.com/MonoLogueChi/actions-openwrt-aio",target:"_blank",rel:"noopener noreferrer"}},[s._v("我的仓库"),n("OutboundLink")],1),s._v("作为模板，多看多对比多思考，没有坏处。")]),s._v(" "),n("li",[s._v("要了解 OpenWRT 编译步骤，至少要懂在本地机器上怎么编译 OpenWRT，不懂的可以按照我上一篇教程实践一下。")])]),s._v(" "),n("h2",{attrs:{id:"编译"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[s._v("#")]),s._v(" 编译")]),s._v(" "),n("p",[s._v("这一段我编不下去 ，直接上文件把，能看得懂的看一下，看不懂的找资料吧。")]),s._v(" "),n("div",{staticClass:"language-yaml Build_OP_x86_64_aio.yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#=================================================")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Description: Build OpenWrt using GitHub Actions")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Lisence: MIT")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Author: LinSir")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#=================================================")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Openwrt_Build_x86_64_aio\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("release")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("types")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("published"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# push:")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  branches:")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    - master")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# schedule:")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  - cron: 0 0 */11 * *")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("watch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("types")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("started"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build_openwrt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.04")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" github.event.repository.owner.id == github.event.sender.id\n\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Checkout\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@master\n\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Initialization environment\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("DEBIAN_FRONTEND")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" noninteractive\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n          docker rmi `docker images -q`\n          sudo rm -rf /usr/share/dotnet /etc/mysql /etc/php /etc/apt/sources.list.d\n          sudo -E apt-get -y purge azure-cli ghc* zulu* hhvm llvm* firefox google* dotnet* powershell openjdk* mysql* php*\n          sudo -E apt-get update\n          sudo -E apt-get -y install build-essential asciidoc binutils bzip2 gawk gettext git libncurses5-dev libz-dev patch python3.5 unzip zlib1g-dev lib32gcc1 libc6-dev-i386 subversion flex uglifyjs git-core gcc-multilib p7zip p7zip-full msmtp libssl-dev texinfo libglib2.0-dev xmlto qemu-utils upx libelf-dev autoconf automake libtool autopoint device-tree-compiler g++-multilib antlr3 gperf\n          sudo -E apt-get -y autoremove --purge\n          sudo -E apt-get clean")]),s._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Clone source code\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("REPO_URL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" https"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//github.com/coolsnowwolf/lede\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("REPO_BRANCH")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" master\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" git clone "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("depth 1 $REPO_URL "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("b $REPO_BRANCH openwrt\n\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Update & Install feeds\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("working-directory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ./openwrt\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n          ./scripts/feeds update -a\n          ./scripts/feeds install -a")]),s._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Import external feeds\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("working-directory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ./openwrt\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n          git clone https://github.com/cnzd/luci-app-koolproxyR.git package/koolproxyR\n          git clone https://github.com/kenzok8/small.git package/small\n          git clone https://github.com/kenzok8/openwrt-packages.git package/kenzo\n          git clone https://github.com/destan19/OpenAppFilter package/OpenAppFilter")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git clone 其他github插件源码地址 package/文件夹名称")]),s._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Configuration Customization "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" Build_x86_64_aio\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("CONFIG_FILE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x86_64_aio.config"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n          [ -e $CONFIG_FILE ] && mv $CONFIG_FILE openwrt/.config\n          chmod +x ./customize.sh && ./customize.sh\n          cd openwrt && make defconfig")]),s._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 云menuconfig（SSH 连接到 Actions进行menuconfig），去掉下面2行代码前面的#即可使用")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制 SSH 连接命令粘贴到终端内执行，或者复制链接在浏览器中打开使用网页终端。（网页终端可能会遇到黑屏的情况，按 Ctrl + C 即可）")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 然后输入cd openwrt && make menuconfig")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 完成后按快捷键Ctrl+D或执行exit命令退出，后续编译工作将自动进行。")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - name: SSH connection to Actions")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   uses: superstarfly/debugger-action@master")]),s._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Download package\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("working-directory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ./openwrt\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n          make download -j$(nproc)\n          find dl -size -1024c -exec ls -l {} \\;\n          find dl -size -1024c -exec rm -f {} \\;")]),s._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Build firmware\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("working-directory")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ./openwrt\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v('\n          echo -e "$(nproc) thread build."\n          make -j$(nproc) || make -j1 V=s')]),s._v("\n\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Upload artifact\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/upload"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("artifact@master\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" OpenWrt\n          "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" openwrt/bin\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br")])]),n("hr")])}),[],!1,null,null,null);t.default=e.exports}}]);