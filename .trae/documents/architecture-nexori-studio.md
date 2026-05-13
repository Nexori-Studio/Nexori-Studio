# Nexori Studio 官网技术架构文档

## 1. 架构设计

```
┌─────────────────────────────────────────┐
│              GitHub Pages               │
│           (Static Hosting)              │
└─────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────┐
│              Frontend Layer             │
│  ┌───────────────────────────────────┐  │
│  │     index.html (SPA Entry)        │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │     CSS (Inline / Single File)    │  │
│  │     - Variables                    │  │
│  │     - Animations                   │  │
│  │     - Components                   │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │     JavaScript (Vanilla)          │  │
│  │     - Intersection Observer        │  │
│  │     - Particle System              │  │
│  │     - Scroll Effects               │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

## 2. 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| HTML5 | - | 语义化结构 |
| CSS3 | - | 样式与动画 |
| JavaScript | ES6+ | 交互逻辑 |
| Google Fonts | - | 字体加载 |
| GitHub Pages | - | 静态托管 |

## 3. 项目结构

```
nexori-studio/
├── index.html          # 主页面
├── README.md           # 项目说明
└── docs/               # GitHub Pages 配置（可选）
    └── index.html
```

## 4. 页面路由

由于是单页面应用，路由结构：

| 路由 | 组件 | 功能 |
|------|------|------|
| / | Main Page | 完整首页 |

页面内区域：
- `#hero` - Hero 区域
- `#about` - 工作室介绍
- `#products` - 产品展示
- `#footer` - 页脚

## 5. 核心模块

### 5.1 Hero Section
```javascript
// 功能描述
- 工作室 Logo/名称展示
- 标语动画效果
- CTA 按钮交互
- 背景粒子效果
```

### 5.2 Product Card
```javascript
// 功能描述
- 产品信息展示
- 技术标签
- GitHub 链接跳转
- 悬停光效
```

### 5.3 Background Effects
```javascript
// 功能描述
- Canvas 粒子动画
- 动态网格背景
- 霓虹光晕效果
```

## 6. 性能优化

- 字体预加载 (Preload)
- CSS/JS 内联以减少请求
- 图片懒加载
- 动画性能优化 (will-change, transform)
- 移动端简化动画

## 7. 浏览器兼容

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 8. 部署流程

1. 开发完成 → 提交到 GitHub 仓库
2. 启用 GitHub Pages
3. 选择 `main` 分支 或 `gh-pages` 分支
4. 访问 `https://username.github.io/nexori-studio/`

## 9. 未来扩展

- 添加更多产品页面
- 集成博客系统
- 添加联系表单
- 多语言支持
