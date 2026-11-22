import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "甘露解析公告",

	// 公告内容
	content: "请及时更新最新版本",

	// 是否允许用户关闭公告（配置单：外部链接，不可关闭）
	closable: false,

	link: {
		// 启用链接
		enable: true,
		// 链接文字：官方QQ社区群
		// 链接地址
		external: true,
		text: "官方QQ社区群",
		url: "https://qm.qq.com/q/DGf5XI9jgW",
	},
};
