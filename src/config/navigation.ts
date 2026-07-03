import {
	Ticket,
	BookOpen,
	Sparkles,
	Gem,
	Ghost,
	TrendingUp,
	Flame,
	Gamepad2,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavigationItem {
	key: string // 用于翻译键，如 'codes' -> t('nav.codes')
	path: string // URL 路径，如 '/codes'
	icon: LucideIcon // Lucide 图标组件
	isContentType: boolean // 是否对应 content/ 目录
}

export const NAVIGATION_CONFIG: NavigationItem[] = [
	{ key: 'codes', path: '/codes', icon: Ticket, isContentType: true },
	{ key: 'guide', path: '/guide', icon: BookOpen, isContentType: true },
	{ key: 'aura', path: '/aura', icon: Sparkles, isContentType: true },
	{ key: 'gems', path: '/gems', icon: Gem, isContentType: true },
	{ key: 'monsters', path: '/monsters', icon: Ghost, isContentType: true },
	{ key: 'stairs', path: '/stairs', icon: TrendingUp, isContentType: true },
	{ key: 'sins', path: '/sins', icon: Flame, isContentType: true },
	{ key: 'roblox', path: '/roblox', icon: Gamepad2, isContentType: true },
]

// 从配置派生内容类型列表（用于路由和内容加载）
export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map(
	(item) => item.path.slice(1),
) // 移除开头的 '/' -> ['codes', 'guide', 'aura', 'gems', 'monsters', 'stairs', 'sins', 'roblox']

export type ContentType = (typeof CONTENT_TYPES)[number]

// 辅助函数：验证内容类型
export function isValidContentType(type: string): type is ContentType {
	return CONTENT_TYPES.includes(type as ContentType)
}
