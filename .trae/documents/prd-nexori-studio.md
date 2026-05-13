# Nexori Studio 官网产品规格文档

## 1. 产品概述

Nexori Studio 是一个充满创意的开发者工作室官方网站，展示工作室的产品与理念。官网将展示核心产品 **Voting System**（一个 GitHub 上的投票系统），传达工作室的技术实力与设计美学。目标用户包括开发者、技术团队以及对创新工具感兴趣的用户群体。

## 2. 核心功能

### 2.1 页面结构

| 页面名称 | 模块名称 | 功能描述 |
|---------|---------|---------|
| 首页 | Hero 区域 | 工作室名称、标语、CTA 按钮 |
| 首页 | 工作室介绍 | 关于 Nexori Studio 的简短描述 |
| 首页 | 产品展示 | Voting System 卡片展示，带 GitHub 链接 |
| 首页 | 团队/理念 | 工作室的核心价值观或团队理念 |
| 首页 | 页脚 | 社交链接、版权信息 |

### 2.2 功能详情

**首页 Hero 区域**
- 大标题展示工作室名称 "Nexori Studio"
- 副标题/标语传达工作室定位
- CTA 按钮引导用户查看产品或联系

**产品展示区域**
- 展示 Voting System 产品卡片
- 包含项目名称、描述、技术标签
- GitHub 跳转链接
- 产品截图或图标

**工作室介绍区域**
- 简短的实验室/工作室介绍
- 强调创新、技术、设计理念

## 3. 设计方向

### 3.1 美学风格
- **风格定位**: 深色科技风格 + 霓虹光效（Cyberpunk-lite）
- **氛围**: 专业、创新、神秘、高端

### 3.2 配色方案
```css
--bg-primary: #0a0a0f;        /* 深邃背景 */
--bg-secondary: #12121a;      /* 卡片背景 */
--accent-primary: #00f0ff;     /* 青色霓虹 */
--accent-secondary: #ff00aa;  /* 粉紫霓虹 */
--text-primary: #ffffff;      /* 主要文字 */
--text-secondary: #8a8a9a;    /* 次要文字 */
--gradient: linear-gradient(135deg, #00f0ff 0%, #ff00aa 100%);
```

### 3.3 字体选择
- **标题字体**: Orbitron（科技感几何字体）
- **正文字体**: Rajdhani（现代简洁）
- **备选**: Noto Sans SC（中文支持）

### 3.4 动效设计
- 页面加载时的渐入动画
- 鼠标悬停时的霓虹光晕效果
- 背景动态粒子或网格效果
- 滚动触发的渐入效果

### 3.5 响应式设计
- 桌面优先设计
- 平板和移动端自适应布局
- 移动端简化动画以保证性能

## 4. 技术选型

- **框架**: 纯 HTML5 + CSS3 + JavaScript（轻量、快速）
- **样式**: CSS Variables + Flexbox/Grid
- **动画**: CSS Animations + Intersection Observer
- **字体**: Google Fonts
- **图标**: Lucide Icons / 自定义 SVG

## 5. 部署方案

- 静态网站部署到 GitHub Pages
- 使用 `gh-pages` 分支或 `docs/` 目录
- 自定义域名支持（可选）
