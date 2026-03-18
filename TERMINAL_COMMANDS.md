# Melo 项目常用终端命令指南

本指南汇总了在项目开发、预览及部署过程中最常用的终端命令。

## 1. 本地开发与预览 (Development)

在本地启动开发服务器，实时预览修改效果：
```bash
npm run dev
```
*运行后，终端会显示类似 `http://localhost:5173/` 的链接，请在浏览器中打开。*

---

## 2. 网页部署 (Deployment)

### 2.1 一键部署到 GitHub Pages
项目已配置 `gh-pages` 插件，可以快速完成“构建+发布”：
```bash
npm run deploy
```
*该命令实际上包含了两步：`npm run build`（生成打包文件）和 `gh-pages -d dist`（上传到 GitHub）。*

### 2.2 仅执行构建
如果你只想检查打包后的资源大小或结构，而不发布：
```bash
npm run build
```
*构建产物将保存在项目根目录的 `dist` 文件夹中。*

---

## 3. Git 相关命令 (Git Ops)

查看当前的远程仓库地址（确认是否指向正确的 GitHub 仓库）：
```bash
git remote -v
```

查看当前所在的分支：
```bash
git branch --show-current
```

同步最新的远程分支信息：
```bash
git fetch --all
```

---

## 4. 依赖管理 (Dependencies)

由于环境权限限制，如果需要安装新库（如 `ogl`），请尝试使用以下命令（或联系系统管理员）：
```bash
# 尝试使用自定义缓存路径安装（解决 EPERM 权限问题）
npm install <package-name> --cache /tmp/npm-cache
```

---

## 5. 项目清理 (Cleanup)

如果遇到构建缓存引起的奇怪问题，可以尝试删除 `node_modules` 并重新安装：
```bash
rm -rf node_modules package-lock.json
npm install
```

---
*保持项目整洁，定期运行构建检查！*
