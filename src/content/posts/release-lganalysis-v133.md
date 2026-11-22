---
title: "发布 LG Analysis_v1.3.3"
published: 2026-10-31
category: "LG Analysis_v1.3.3"
tags:
  - A
pinned: true
comment: false
description: "甘露解析桌面版 v1.3.3 正式发布，新增磁力 / BT 种子 / edk 高速下载链路。"
draft: false
---

甘露解析桌面版 v1.3.3 已正式发布，在网盘、视频、GitHub 之外，新增一条独立的 P2P 高速下载链路。

## 新增：P2P 下载（磁力 / BT 种子 / edk）

- **edk 电驴链接下载**：粘贴 `edk://` 链接即可解析并加入下载，与磁力 / 种子走同一套引擎与任务管理。
- **本地种子文件**：新建下载弹窗新增「选择种子文件」，可直接挑选本机 `.torrent` 开始下载，无需依赖磁力链。
- **BT Tracker 管理二级页**：新增独立的 Tracker 服务器管理页，集中维护 tracker 列表；BT 任务会把这些 tracker 下发到引擎，修复公网磁力 / 种子一直卡在「解析中」的问题。
- **DHT 开关**：下载引擎页可开关 BT 的 DHT，按网络环境自行取舍。
- **P2P 任务 peer 概览**：下载中的磁力 / 种子 / edk 任务显示「种子 N · 连接 M · 节点 K」，实时反映连接与做种情况。

## 修复与优化

- **修复 P2P 任务「继续」被内置下载器执行**：磁力 / 种子任务点「继续」曾可能被交给内置下载器，现已正确路由回 Gopeed 引擎。
- **引擎失败原因可见**：引擎任务失败改为回读引擎返回的真实错误信息，便于定位。
- **状态文案统一**：任务状态「正在解析磁力…」改为「正在解析…」，已覆盖磁力 / 种子 / edk 三类链接。
- **修复内嵌浏览器原生包解压失败**：CEF 原生包重新换回 `tar.gz`，避免个别环境下解压异常。

## 新增：界面与体验

- **下载列表滚动条常驻**：下载列表右侧显示常驻滚动条，任务多时一眼可见当前位置。
- **失败任务置顶**：失败的任务自动排到列表最前。
- **添加弹窗识别名称**：新建任务时「名称」输入框会随粘贴的链接实时重算占位名称。
- **主窗口启动位置可设置**：「设置 → 主窗口启动位置」可指定窗口首次出现的位置；支持全屏遮罩拖拽站位，把窗口摆到屏幕任意处后一键记录。

## 系统要求

- Windows 10 / 11 x64

## 下载

- GitHub：[PointersMZX/LGAnalysis Releases](https://github.com/PointersMZX/LGAnalysis/releases)
  - **便携版**：解压即用
  - **安装版**：安装到 `%LOCALAPPDATA%\Programs\LGAnalysis`

## 反馈

- 问题与建议：[GitHub Issues](https://github.com/PointersMZX/LGAnalysis/issues) ｜ 社区交流：[官方QQ社区群](https://qm.qq.com/q/DGf5XI9jgW)

*PointersMZX/LGAnalysis 的官方电脑端，GNU AGPL-3.0 开源。*
