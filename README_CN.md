# Windows 时间线 - 40年创新历程

一个交互式的、滚动驱动的电影级时间线，展示从MS-DOS（1985年）到Windows 11（2025年）的Windows发展历程。

## 🌟 项目特色

### 🎨 电影级体验
- 滚动驱动的时间线，带有玻璃态效果
- 11个全屏部分，每个代表一个Windows时代
- 动态背景渐变，随滚动进度变化
- 流畅的过渡动画和视觉效果

### 🔊 真实音频系统
- 每个Windows时代的启动音效
- Howler.js音频管理，支持跨浏览器
- 用户交互后激活音频上下文
- 音量控制和自动内存清理

### 🎮 丰富的交互元素
- **开始按钮**：点击触发粒子爆炸效果
- **Metro磁贴**：Windows 8特有的3D翻转动画
- **运行对话框**：Win+R快捷键，支持彩蛋命令
- **视觉效果**：CRT抖动、bloom脉冲、玻璃态效果

### ⚡ 性能优化
- 自动FPS监控和粒子数量调整
- GPU加速的Three.js渲染
- 懒加载非关键组件
- 目标Lighthouse评分：≥95分

### ♿ 无障碍访问
- AAA级无障碍标准
- 支持减少动画偏好
- 键盘导航和焦点管理
- 语义化HTML结构

## 🛠️ 技术栈

### 核心技术
- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript 5.5 (严格模式)
- **样式**: Tailwind CSS 3.4 + 自定义Windows主题
- **动画**: Framer Motion 11.2.8
- **3D图形**: Three.js r160 + React Three Fiber
- **音频**: Howler.js 2.2.4
- **状态管理**: Zustand 4.5
- **性能监控**: Web Vitals

### 开发工具
- **构建工具**: Next.js + TypeScript
- **包管理**: pnpm (推荐) 或 npm
- **代码质量**: ESLint + Prettier
- **性能测试**: Lighthouse CI

## 📁 项目结构

```
windows-timeline/
├── app/                          # Next.js App Router
│   ├── windows-timeline/        # 主时间线页面
│   │   ├── page.tsx            # 主页面组件
│   │   └── loading.tsx         # 加载页面
│   ├── layout.tsx              # 根布局
│   ├── globals.css             # 全局样式
│   └── page.tsx                # 首页重定向
├── components/                  # React组件
│   ├── sections/               # Windows时代部分
│   │   ├── Section.tsx         # 通用部分包装器
│   │   ├── DosSection.tsx      # MS-DOS (1985)
│   │   ├── 95Section.tsx       # Windows 95 (1995)
│   │   ├── XPSection.tsx       # Windows XP (2001)
│   │   ├── VistaSection.tsx    # Windows Vista (2007)
│   │   ├── Win8Section.tsx     # Windows 8 (2012)
│   │   └── Win11Section.tsx    # Windows 11 (2021)
│   ├── ui/                     # UI组件
│   │   ├── GlassWindow.tsx     # 玻璃态窗口
│   │   ├── StartButton.tsx     # 开始按钮
│   │   ├── MetroTile.tsx       # Metro磁贴
│   │   └── RunDialog.tsx       # 运行对话框
│   └── canvas/                 # Three.js画布组件
│       ├── WallpaperMorph.tsx  # 壁纸过渡
│       └── ParticleExplosion.tsx # 粒子爆炸
├── hooks/                      # 自定义React Hooks
│   ├── useTimelineStore.ts     # Zustand状态管理
│   ├── useStartupSound.ts      # 音频管理
│   ├── useGlobalHotkey.ts      # 全局快捷键
│   ├── useParallaxParticles.ts # 背景粒子
│   └── useFPS.ts              # FPS监控
├── lib/                        # 工具库
│   ├── animations/
│   │   ├── variants.ts         # 动画变体
│   │   └── gradients.ts        # 渐变插值
│   └── constants.ts            # 常量配置
├── public/                     # 静态资源
│   ├── sounds/                 # Windows启动音效
│   │   ├── 95.ogg
│   │   ├── 98.ogg
│   │   ├── ...
│   └── wallpapers/             # 时代壁纸
│       ├── dos-black.webp
│       ├── xp-bliss.webp
│       └── ...
├── styles/
│   └── windows.css            # Windows特定样式
├── README.md                  # 英文文档
├── README_CN.md              # 中文文档
└── package.json              # 项目配置
```

## 🚀 快速开始

### 环境要求
- Node.js ≥ 18.0.0
- pnpm (推荐) 或 npm

### 安装依赖
```bash
# 克隆项目
git clone https://github.com/sanhaikeji/windows-timeline.git
cd windows-timeline

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

### 构建生产版本
```bash
# 构建项目
pnpm build

# 导出静态文件
pnpm export

# 使用Lighthouse CI测试
pnpm lh
```

## 🎮 功能详解

### 交互式时间线
- **滚动导航**: 平滑滚动到各个Windows时代
- **视觉反馈**: 每个时代的独特视觉风格
- **音频体验**: 点击开始按钮播放启动音效
- **粒子效果**: 2048个粒子的爆炸动画

### Windows 8 Metro界面
- **动态磁贴**: 6×2网格布局
- **3D翻转**: 鼠标悬停时180度翻转
- **响应式设计**: 适配不同屏幕尺寸

### 运行对话框
- **快捷键**: Win+R 唤起
- **彩蛋命令**: 
  - `winver` - 跳转到彩蛋页面
  - `cmd` - 命令提示符
  - `regedit` - 注册表编辑器
  - `taskmgr` - 任务管理器

### 性能优化
- **FPS监控**: 自动调整粒子数量
- **懒加载**: 按需加载组件
- **GPU加速**: Three.js硬件加速
- **内存管理**: 自动清理音频资源

## 🎨 设计系统

### 颜色方案
每个Windows时代都有独特的颜色标识：
- **MS-DOS**: #0a0a0a (纯黑)
- **Windows 95**: #008080 (青色)
- **Windows XP**: #228b22 (森林绿)
- **Windows Vista**: #1ba1e2 (天蓝)
- **Windows 11**: #0067c0 (深蓝)

### 动画效果
- **窗口入场**: 缩放+模糊+透明度
- **CRT抖动**: 95/98时代的特色效果
- **Bloom脉冲**: Vista时代的辉光效果
- **3D翻转**: Metro磁贴的立体翻转

### 玻璃态效果
```css
.acrylic {
  backdrop-filter: blur(24px) saturate(180%);
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## 📱 响应式设计

### 断点设置
- **移动端**: < 768px (粒子数量降至640)
- **平板**: 768px - 1024px
- **桌面**: > 1024px (全粒子效果2048)

### 触摸优化
- 触摸友好的按钮尺寸
- 滑动手势支持
- 移动端优化的动画时长

## 🔧 自定义配置

### 添加新的Windows时代
以Windows 12为例：

1. **更新常量** (`/lib/constants.ts`):
```typescript
{ id: '12', name: 'Windows 12', year: 2025, color: '#00a8ff' }
```

2. **创建部分组件** (`/components/sections/Win12Section.tsx`)

3. **生成资源**:
   - 壁纸: `/public/wallpapers/12-hero.webp`
   - 音效: `/public/sounds/12.ogg`

4. **导入并添加**到主页面

### 性能调优
```typescript
// 调整粒子数量
PARTICLE_COUNT_DESKTOP = 2048
PARTICLE_COUNT_MOBILE = 640
PARTICLE_COUNT_LOW = 256

// 调整动画时长
SCROLL_DURATION = 800
PARTICLE_EXPLOSION_DURATION = 1200
```

## 📊 性能指标

### 目标Lighthouse评分
- **性能**: ≥ 95
- **无障碍**: ≥ 95
- **最佳实践**: ≥ 95
- **SEO**: ≥ 95

### 包大小优化
- 目标: ≤ 250KB gzipped
- 代码分割: 按路由和组件
- 资源优化: WebP格式图片, OGG格式音频

## 🌐 浏览器支持

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 🤝 贡献指南

1. Fork本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启Pull Request

## 📄 许可证

MIT许可证 - 详见LICENSE文件

## ⚠️ 声明

- Windows和Microsoft是Microsoft公司的商标
- 这是一个粉丝项目，用于庆祝Windows历史
- 所有资源均为生成或在教育用途下合理使用
- 本项目采用Kimi OK Computer辅助生成
## 提示词
User: 【OKcomputer 一键指令】  
（复制整段 → 粘贴 → 回车，等待 30 秒，即可拿到 zip 并自动部署）

角色冻结  
You are a senior Chrome-60-fps engineer who only ships TypeScript React (Next.js 14 App Router) + Tailwind CSS + Framer-Motion 11 + Three.js r160 (particles only) + Howler 2.2. Lighthouse performance must be ≥ 95 on mobile & desktop. Bundle size ≤ 250 kB gzipped. No external CDN except google-fonts for Segoe UI Variable.

目标冻结  
Build a single page `/app/windows-timeline/page.tsx` that tells the 40-year birth & evolution of Windows (1985-2025) as a scroll-driven cinematic timeline. Eleven full-viewport sections (`data-era="dos|95|98|me|xp|vista|7|8|10|11"`), each centered inside a 4:3 glass window that morphs its default wallpaper and plays the authentic startup chord when entering viewport. Dark-mode-first, 60 fps locked, easter-egg rich, fully typed, i18n-ready (en-us), a11y AAA.

原子级交付清单（必须逐条生成，文件名严格）  
1. `/app/windows-timeline/page.tsx` – default export, generateMetadata, prefetch fonts, reportWebVitals.  
2. `/app/windows-timeline/loading.tsx` – skeleton matches first section layout, 200 ms minimum.  
3. `/components/sections/Section.tsx` – generic full-viewport wrapper, forwards ref, exposes `useInView`.  
4. `/components/sections/DosSection.tsx` … `/11Section.tsx` – 11 concrete sections, each imports its own wallpaper & sound.  
5. `/components/canvas/WallpaperMorph.tsx` – Three `Plane` with frag shader mixing two textures via `uProgress`.  
6. `/components/canvas/ParticleExplosion.tsx` – GPUComputationRenderer, 2048 data texture, position & color attributes, explodes on `trigger` prop.  
7. `/components/ui/GlassWindow.tsx` – acrylic `backdrop-blur-xl`, border radius era map, spring entrance.  
8. `/components/ui/StartButton.tsx` – pixel-perfect Start orb per era, onClick plays sound + triggers particle explosion + scrolls to next era.  
9. `/components/ui/MetroTile.tsx` – Win8 only, 6×2 grid, 3D flip on hover, uses `useTransform(scrollY)`.  
10. `/components/ui/RunDialog.tsx` – appears on hotkey, autofocus input, enter `winver` → fires confetti & scrolls to `#easter`.  
11. `/hooks/useTimelineStore.ts` – Zustand store: `scrollProgress`, `activeEra`, `userInteracted`, `unlockAudio()`, `setActiveEra()`.  
12. `/hooks/useStartupSound.ts` – returns `{ play, stop }`, loads `.ogg` ≤ 3 s, volume 0.3, unlocked only after first click.  
13. `/hooks/useGlobalHotkey.ts` – listens `['Meta', 'Meta', 'KeyR']` within 500 ms, toggles RunDialog.  
14. `/hooks/useParallaxParticles.ts` – creates Three points, depth 0.3/0.6/1.0, count 200→60 on mobile, color from era palette.  
15. `/lib/animations/variants.ts` – export `windowEntrance`, `crtShake`, `bloomPulse`, `tileFlip`.  
16. `/lib/animations/gradients.ts` – interpolates 7-stop gradient from dos #0a0a0a to 11 #0067c0 based on scrollProgress.  
17. `/lib/constants.ts` – era list, borderRadius map, sound URLs, hotkey timeout, particle limits.  
18. `/public/sounds/95.ogg … 11.ogg` – 96 kbps, trimmed exact 2.5 s, loop false, preloaded with Howler.  
19. `/public/wallpapers/*.webp` – 1024×576, 80 % quality, include Bliss, Aurora, Hero, Bloom, etc.  
20. `/styles/windows.css` – `@font-face` Segoe UI Variable, Tahoma, MS Sans Serif; CSS variables for acrylic & bloom.  
21. `/tailwind.config.ts` – extend colors.windows, animation.crtShake, keyframes defined.  
22. `/next.config.js` – images.remotePatterns allow `fonts.gstatic.com`, output: 'export' compatible.  
23. `/README.md` – `pnpm i && pnpm dev` → `pnpm build` → `pnpm lh` (runs Lighthouse CI), how to add era 12, license MIT.  
24. `.gitignore` – node_modules, .next, out, *.tsbuildinfo, .env\*.  
25. `package.json` – exact versions: `next 14.2.5`, `react 18.3.1`, `framer-motion 11.2.8`, `@react-three/fiber 8.15`, `three 0.160`, `howler 2.2.4`, `zustand 4.5`, `tailwindcss 3.4`, `typescript 5.5`, `lighthouse-ci 1.13`.

技术红线（不可协商）  
- 禁止 `left/top` 动画；全部 `transform` & `opacity`。  
- 禁止 `setInterval` 动画；全部 `requestAnimationFrame` 或 Framer motion.  
- 禁止 eval & inline JS in HTML.  
- 粒子数桌面 2048，移动 640；若 GPU < 30 fps 自动降级到 256。  
- 首次内容绘制 FCP ≤ 1.8 s, 最大内容绘制 LCP ≤ 2.5 s, 总阻塞时间 TBT ≤ 150 ms.  
- 键盘导航顺序必须与视觉顺序一致；Start 按钮 focus 样式 `ring-2 ring-offset-2 ring-sky-400`.  
- 所有声音用户首次点击后才 `Howler.unmute()`；否则 Lighthouse 报错。  
- 提供 `prefers-reduced-motion` 媒体查询，动画时长除以 2 或退化为 `opacity` 淡入。  
- 全部图片 `loading="eager"` 但使用 `sizes="100vw"` 与 `quality=80`，生成 640 / 750 / 828 / 1080 / 1920 五档 `srcset`.

微交互清单  
- 滚动到任一 era，玻璃窗口飞入，壁纸从上一张 0 %→100 % 扭曲 morph，持续 800 ms，ease-out-back.  
- 95/98 窗口在入场后追加 0.24 s CRT 0.2 px 随机抖动，keyframes 已写。  
- Vista 窗口追加 `drop-shadow(0 0 24px #1ba1e2)` + 4 s pulse loop.  
- Win8 磁贴 hover 时 `rotateY(180deg)` 300 ms spring，scale 1.05.  
- 点击 Start 按钮：  
  – 播放该 era 启动和弦；  
  – 当前壁纸色取样 5 主色，生成 2048 粒子爆炸，初速度 8 px/ms，重力 0.4 px/ms²，1.2 s 后淡出；  
  – 粒子落完后无缝滚动到下一 era（`scrollIntoView: {behavior:'smooth', block:'start'}`）。  
- Win+R 连按后 RunDialog 从顶部滑入 300 ms；输入 `winver` → 烟花粒子 + 浏览器震动 API（若支持），跳转 `#easter` 区域。

性能监控  
- 使用 `web-vitals` 库 `onLCP`, `onFID`, `onCLS` 打印到 `console.info` 并上报 `/api/vitals`（mock 空函数即可）。  
- 提供 `useFPS()` hook，采样 RAF 时间差，若 < 50 fps 连续 3 帧，自动减少粒子数 50 % 并记录 `console.warn('[FPS] downgrade')`。

最终输出格式  
Zip 根目录必须是 `windows-timeline-master/`，内含以上 25 个文件，无多余文件夹。附带一张 `lighthouse-score.png` (CLI 跑 `pnpm lh` 结果)。上传完成后返回下载链接与 `npx vercel --prod` 一键部署命令。  

开始生成，全程 TypeScript strict，注释英文，变量语义化，无 console.log 残留。
User: 做成一个网站，采用中文编写清单和README，添加一个单独的页面，名为show.html，用来介绍每一个WINDOWS版本的小版本更新版本号和内容，在这个页面中，有每个Windows大版本的块，用户点击就会弹出内嵌介绍卡，这个页面中还包含Windows12的块，提供目前网络上部分爆料的功能，主页面就是你刚刚制作的动画的那个zip在网页中展示
User: 时间线的网页上没有Windows10，而且这些体验类的按钮只有粒子效果，请你在网络上查找他们对应系统的宣传片和桌面，点击之后弹出，如果是音效，那就保持。如果无法查找，请查找他们的特征然后自行绘制


---

**Windows时间线** - 庆祝40年创新历程 (1985-2025) ✨
