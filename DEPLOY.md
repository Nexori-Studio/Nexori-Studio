# Nexori Studio 网站部署指南

## 方式一：使用 GitHub 网页界面部署

### 步骤 1：创建 GitHub 仓库

1. 访问 [GitHub](https://github.com) 并登录你的账户
2. 点击右上角的 **"+"** 按钮，选择 **"New repository"**
3. 填写仓库信息：
   - **Repository name**: `nexori-studio`（或你喜欢的名字）
   - **Description**: `Nexori Studio 官方网站`
   - **Visibility**: Public（公开）
4. 点击 **"Create repository"**

### 步骤 2：上传网站文件

1. 在新创建的仓库页面，点击 **"uploading an existing file"**
2. 将以下三个文件拖拽到上传区域：
   - `index.html`
   - `styles.css`
   - `script.js`
3. 点击 **"Commit changes"**

### 步骤 3：启用 GitHub Pages

1. 在仓库页面，点击 **"Settings"**（设置）选项卡
2. 滚动到左侧菜单的 **"Pages"** 部分
3. 在 **"Source"** 下拉菜单中：
   - 选择 **"Deploy from a branch"**
4. 在 **"Branch"** 部分：
   - 选择 **"main"**
   - 选择 **"/ (root)"**
   - 点击 **"Save"**
5. 等待 1-2 分钟，页面会显示你的网站地址

### 步骤 4：访问你的网站

部署完成后，访问：`https://你的用户名.github.io/nexori-studio/`

---

## 方式二：使用 Git 命令行部署

### 前提条件

- 已安装 Git
- 已配置 GitHub SSH 密钥

### 步骤

```bash
# 1. 在当前目录初始化 Git 仓库
git init

# 2. 添加所有文件
git add index.html styles.css script.js

# 3. 提交更改
git commit -m "Initial commit: Nexori Studio website"

# 4. 在 GitHub 创建仓库后，添加远程仓库
git remote add origin https://github.com/你的用户名/nexori-studio.git

# 5. 推送代码到 GitHub
git branch -M main
git push -u origin main
```

然后在 GitHub 仓库的 Settings → Pages 中启用即可。

---

## 配置自定义域名（可选）

如果你有自定义域名（如 `nexori.studio`）：

1. 在 **Settings → Pages** 页面
2. 在 **"Custom domain"** 输入框中输入你的域名
3. 点击 **"Save"**
4. 在你的域名 DNS 设置中添加以下记录：
   - **CNAME 记录**：`www` → `你的用户名.github.io`
   - **A 记录**：`@` → `185.199.108.153`（或其他 GitHub 提供的 IP）

---

## 文件说明

```
nexori-studio/
├── index.html     # 主页面
├── styles.css     # 样式文件
├── script.js      # 交互脚本
└── README.md      # 项目说明（可选）
```

---

## 常见问题

### Q: 网站加载后没有样式？
确保 `index.html` 中的 CSS 链接正确：
```html
<link rel="stylesheet" href="styles.css">
```

### Q: 粒子动画不工作？
确保 `script.js` 文件存在且路径正确：
```html
<script src="script.js"></script>
```

### Q: 部署后需要多长时间生效？
通常 1-5 分钟，如需更长可能需要清除浏览器缓存。

---

如有问题，请查看 [GitHub Pages 官方文档](https://docs.github.com/en/pages)
